import {
  getProtosAdminClient,
  getProtosAuthClient,
} from "@/lib/supabaseServer";
import { rateLimit } from "@/lib/rateLimit";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const normalizeCode = (code) => (code || "").trim().toUpperCase();

// Maps RPC `reason` → HTTP status. The RPC owns all validation logic
// (not_found / expired / exhausted / already_redeemed / already_premium /
// profile_not_found); the route just translates the code.
const STATUS_FOR_REASON = {
  not_found: 404,
  expired: 404,
  exhausted: 404,
  already_redeemed: 409,
  already_premium: 409,
  profile_not_found: 409,
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { success: false, reason: "invalid_json" });
  }

  const code = normalizeCode(body?.code);
  const claimedUserId = body?.user_id;

  if (!code || !claimedUserId) {
    return json(400, { success: false, reason: "missing_fields" });
  }

  const authHeader =
    request.headers.get("authorization") ||
    request.headers.get("Authorization");
  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
    return json(401, { success: false, reason: "missing_token" });
  }
  const token = authHeader.slice(7).trim();

  const authClient = getProtosAuthClient();
  const { data: userData, error: userError } = await authClient.auth.getUser(
    token
  );
  if (userError || !userData?.user?.id) {
    return json(401, { success: false, reason: "invalid_token" });
  }
  const verifiedUserId = userData.user.id;

  if (verifiedUserId !== claimedUserId) {
    return json(403, { success: false, reason: "user_mismatch" });
  }

  const limit = rateLimit({
    key: `attach:${verifiedUserId}`,
    limit: 5,
    windowMs: 60 * 60 * 1000,
  });
  if (!limit.allowed) {
    return json(429, {
      success: false,
      reason: "rate_limited",
      retry_after_ms: limit.retryAfterMs,
    });
  }

  // Single atomic call: validates the code, locks the row, increments uses,
  // inserts the redemption record, AND updates user_profile to premium —
  // all in one transaction. No RC round-trip, no rollback to manage.
  const admin = getProtosAdminClient();
  const { data, error } = await admin.rpc("redeem_promo_code", {
    p_code: code,
    p_user_id: verifiedUserId,
  });

  if (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[redeem/attach] redeem RPC error:", error);
    }
    return json(500, { success: false, reason: "db_error" });
  }

  const row = Array.isArray(data) ? data[0] : data;
  if (!row || !row.success) {
    const reason = row?.reason || "unknown";
    return json(STATUS_FOR_REASON[reason] || 400, {
      success: false,
      reason,
    });
  }

  return json(200, {
    success: true,
    tier: row.tier,
    rc_duration: row.rc_duration,
    entitlement_expires_at: row.entitlement_expires_at,
  });
}

export const dynamic = "force-dynamic";
