import { NextResponse } from "next/server";
import { getAksaraAdminClient } from "@/lib/aksara/supabase";
import {
  parseGhostInput,
  validateGhostData,
  normalizeProfile,
  buildProjectRows,
  buildLinkRows,
  generateClaimCode,
} from "@/lib/aksara/whiteglove";

const json = (status, body) => NextResponse.json(body, { status });

export async function GET() {
  const admin = getAksaraAdminClient();

  // claim_tokens is the source of truth: it survives a claim (ghost_user_id is
  // set null), so we see both unclaimed ghosts and claimed profiles here.
  const { data: tokens, error } = await admin
    .from("claim_tokens")
    .select("token, ghost_user_id, claimed_by_user_id, target_username, claim_code, expires_at, claimed_at, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) return json(500, { error: "db_error", detail: error.message });

  // For unclaimed rows show the ghost user; for claimed rows show the claimer.
  const userIds = [
    ...new Set((tokens || []).flatMap((t) => [t.ghost_user_id, t.claimed_by_user_id]).filter(Boolean)),
  ];
  const userById = {};
  if (userIds.length > 0) {
    const { data: users } = await admin
      .from("users")
      .select("id, username, name, avatar_url")
      .in("id", userIds);
    for (const u of users || []) userById[u.id] = u;
  }

  const ghosts = (tokens || []).map((t) => {
    const claimed = !!t.claimed_at;
    const u = claimed ? userById[t.claimed_by_user_id] : userById[t.ghost_user_id];
    return {
      token: t.token,
      ghost_user_id: t.ghost_user_id, // null once claimed; drives edit/revoke on unclaimed rows
      username: u?.username || t.target_username,
      name: u?.name || null,
      avatar_url: u?.avatar_url || null,
      claim_code: t.claim_code,
      expires_at: t.expires_at,
      claimed_at: t.claimed_at,
      created_at: t.created_at,
    };
  });

  return json(200, { ghosts });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const username = (body?.username || "").trim().toLowerCase();
  if (!username) return json(400, { error: "missing_username" });

  const { profileInput, projectsInput, linksInput } = parseGhostInput(body?.data);

  const validationError = validateGhostData(projectsInput, linksInput);
  if (validationError) return json(400, { error: validationError });

  const profile = normalizeProfile(profileInput);
  const admin = getAksaraAdminClient();

  const { data: existing } = await admin
    .from("users")
    .select("id, is_ghost")
    .ilike("username", username)
    .maybeSingle();

  if (existing && !existing.is_ghost) return json(409, { error: "username_taken" });
  if (existing && existing.is_ghost) return json(409, { error: "ghost_already_exists" });

  const ghostEmail = `ghost+${username}@aksara.so`;
  const { data: authData, error: authError } = await admin.auth.admin.createUser({
    email: ghostEmail,
    email_confirm: true,
  });
  if (authError) return json(500, { error: "auth_create_failed", detail: authError.message });

  const ghostUserId = authData.user.id;
  const rollback = async () => {
    await admin.auth.admin.deleteUser(ghostUserId).catch(() => {});
  };

  // System fields after the spread so a pasted JSON can never override them.
  const { error: insertError } = await admin.from("users").insert({
    ...profile,
    id: ghostUserId,
    username,
    email: ghostEmail,
    is_ghost: true,
    pro_override: true,
    whiteglove: true,
    onboarding_completed: true,
    ghost_created_by: "admin",
    ghost_target_email: body?.target_email ?? null,
  });
  if (insertError) {
    await rollback();
    return json(500, { error: "db_insert_failed", detail: insertError.message });
  }

  if (projectsInput.length > 0) {
    const { error: projError } = await admin.from("projects").insert(buildProjectRows(projectsInput, ghostUserId));
    if (projError) {
      await rollback();
      return json(500, { error: "projects_insert_failed", detail: projError.message });
    }
  }

  if (linksInput.length > 0) {
    const { error: linkError } = await admin.from("links").insert(buildLinkRows(linksInput, ghostUserId));
    if (linkError) {
      await rollback();
      return json(500, { error: "links_insert_failed", detail: linkError.message });
    }
  }

  const token = crypto.randomUUID();
  const claimCode = generateClaimCode();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  const { error: tokenError } = await admin.from("claim_tokens").insert({
    token,
    ghost_user_id: ghostUserId,
    target_username: username,
    claim_code: claimCode,
    expires_at: expiresAt,
    created_by: "admin",
  });
  if (tokenError) {
    await rollback();
    return json(500, { error: "token_insert_failed", detail: tokenError.message });
  }

  const baseUrl = process.env.AKSARA_BASE_URL || "https://aksara.so";
  return json(201, {
    profile_url: `${baseUrl}/${username}`,
    claim_url: `${baseUrl}/claim/${token}`,
    claim_code: claimCode,
    ghost_user_id: ghostUserId,
    username,
  });
}

export const dynamic = "force-dynamic";
