import { NextResponse } from "next/server";
import { getAksaraAdminClient } from "@/lib/aksara/supabase";
import {
  parseGhostInput,
  validateGhostData,
  normalizeProfile,
  buildProjectRows,
  buildLinkRows,
  extractEditableJson,
} from "@/lib/aksara/whiteglove";

const json = (status, body) => NextResponse.json(body, { status });

// GET — return the ghost's current content as editable JSON ({ profile, projects, links }).
export async function GET(request, { params }) {
  const { id } = await params;
  const admin = getAksaraAdminClient();

  const { data: user } = await admin
    .from("users")
    .select("*")
    .eq("id", id)
    .eq("is_ghost", true)
    .maybeSingle();

  if (!user) return json(404, { error: "ghost_not_found" });

  const [{ data: projects }, { data: links }] = await Promise.all([
    admin.from("projects").select("*").eq("user_id", id).order("display_order"),
    admin.from("links").select("*").eq("user_id", id).order("display_order"),
  ]);

  return json(200, {
    username: user.username,
    data: extractEditableJson(user, projects, links),
  });
}

// PUT — apply edited JSON to the ghost. Replaces projects/links wholesale.
export async function PUT(request, { params }) {
  const { id } = await params;

  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const admin = getAksaraAdminClient();

  const { data: ghost } = await admin
    .from("users")
    .select("id, is_ghost")
    .eq("id", id)
    .eq("is_ghost", true)
    .maybeSingle();

  if (!ghost) return json(404, { error: "ghost_not_found" });

  const { profileInput, projectsInput, linksInput } = parseGhostInput(body?.data);

  const validationError = validateGhostData(projectsInput, linksInput);
  if (validationError) return json(400, { error: validationError });

  const profile = normalizeProfile(profileInput);

  const { error: updateError } = await admin
    .from("users")
    .update({ ...profile, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (updateError) return json(500, { error: "update_failed", detail: updateError.message });

  // Replace projects + links wholesale (curated ghost has no user data to preserve).
  await admin.from("projects").delete().eq("user_id", id);
  if (projectsInput.length > 0) {
    const { error } = await admin.from("projects").insert(buildProjectRows(projectsInput, id));
    if (error) return json(500, { error: "projects_insert_failed", detail: error.message });
  }

  await admin.from("links").delete().eq("user_id", id);
  if (linksInput.length > 0) {
    const { error } = await admin.from("links").insert(buildLinkRows(linksInput, id));
    if (error) return json(500, { error: "links_insert_failed", detail: error.message });
  }

  return json(200, { ok: true });
}

// DELETE — revoke an unclaimed ghost profile: remove the claim token, then delete
// the auth user (the DB cascade removes the users row too).
export async function DELETE(request, { params }) {
  const { id } = await params;
  const admin = getAksaraAdminClient();

  const { data: ghost } = await admin
    .from("users")
    .select("id, is_ghost")
    .eq("id", id)
    .eq("is_ghost", true)
    .maybeSingle();

  if (!ghost) return json(404, { error: "ghost_not_found" });

  // Delete the token explicitly: its FK is ON DELETE SET NULL now, so deleting
  // the user would otherwise leave an orphan token row in the admin list.
  await admin.from("claim_tokens").delete().eq("ghost_user_id", id);

  const { error } = await admin.auth.admin.deleteUser(id);
  if (error) return json(500, { error: "delete_failed", detail: error.message });

  return json(200, { revoked: true });
}

export const dynamic = "force-dynamic";
