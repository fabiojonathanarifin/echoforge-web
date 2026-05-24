import { NextResponse } from "next/server";
import { getAksaraAdminClient } from "@/lib/aksara/supabase";

const json = (status, body) => NextResponse.json(body, { status });

export async function GET() {
  const admin = getAksaraAdminClient();
  const { data, error } = await admin
    .from("users")
    .select(
      "id, username, email, name, whiteglove, pro_override_reason, pro_override_granted_at, pro_override_granted_by"
    )
    .eq("pro_override", true)
    .order("pro_override_granted_at", { ascending: false })
    .limit(200);

  if (error) {
    return json(500, { error: "db_error", detail: error.message });
  }
  return json(200, { grants: data || [] });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const identifier = (body?.identifier || "").trim();
  const reason = (body?.reason || "").trim() || null;
  const whiteglove = body?.whiteglove === true;

  if (!identifier) {
    return json(400, { error: "missing_identifier" });
  }

  const admin = getAksaraAdminClient();

  const isEmail = identifier.includes("@");
  const lookup = admin
    .from("users")
    .select("id, username, email, plan, pro_override")
    .limit(1);
  const { data: matches, error: lookupError } = isEmail
    ? await lookup.ilike("email", identifier)
    : await lookup.ilike("username", identifier);

  if (lookupError) {
    return json(500, { error: "db_error", detail: lookupError.message });
  }
  if (!matches || matches.length === 0) {
    return json(404, { error: "user_not_found" });
  }

  const user = matches[0];

  const { error: updateError } = await admin
    .from("users")
    .update({
      pro_override: true,
      whiteglove,
      pro_override_reason: reason,
      pro_override_granted_at: new Date().toISOString(),
      pro_override_granted_by: "admin",
    })
    .eq("id", user.id);

  if (updateError) {
    return json(500, { error: "db_error", detail: updateError.message });
  }

  return json(201, {
    user: { id: user.id, username: user.username, email: user.email },
    whiteglove,
  });
}

export async function DELETE(request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("user_id");
  if (!userId) {
    return json(400, { error: "missing_user_id" });
  }

  const admin = getAksaraAdminClient();
  const { error } = await admin
    .from("users")
    .update({
      pro_override: false,
      whiteglove: false,
      pro_override_reason: null,
      pro_override_granted_at: null,
      pro_override_granted_by: null,
    })
    .eq("id", userId);

  if (error) {
    return json(500, { error: "db_error", detail: error.message });
  }
  return json(200, { revoked: true });
}

export const dynamic = "force-dynamic";
