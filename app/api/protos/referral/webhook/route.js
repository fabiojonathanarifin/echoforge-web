import crypto from "node:crypto";
import { getProtosAdminClient } from "@/lib/supabaseServer";
import { resolveTier } from "@/lib/referral/tiers";
import { computeEndTime, effectiveGrantDays } from "@/lib/referral/grant";
import {
  getEntitlementExpiryMs,
  grantPromotional,
} from "@/lib/referral/revenuecat";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const verifySignature = (rawBody, header) => {
  const secret = process.env.RIPPLD_WEBHOOK_SECRET;
  if (!secret || !header) return false;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(header, "utf8");
  // timingSafeEqual throws on a length mismatch, so check length first.
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
};

const isUuid = (value) =>
  typeof value === "string" &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);

const loadRewards = async (admin) => {
  const { data } = await admin
    .from("referral_rewards")
    .select("tier, referrer_days, referee_days")
    .eq("active", true);
  const map = {};
  for (const row of data || []) map[row.tier] = row;
  return map;
};

const loadReferrerContext = async (admin, userId) => {
  const [{ data: profile }, { data: override }] = await Promise.all([
    admin.from("user_profile").select("entitlements").eq("id", userId).maybeSingle(),
    admin
      .from("referral_tier_overrides")
      .select("referrer_days, referee_days, max_redemptions, used_count")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);
  return {
    productIdentifier: profile?.entitlements?.premium?.productIdentifier ?? null,
    override: override ?? null,
  };
};

/** Lifetime referral days this user has kept, for the stacking cap. */
const grantedDaysFor = async (admin, userId) => {
  const { data } = await admin
    .from("referral_grants")
    .select("days_granted")
    .eq("user_id", userId)
    .is("reversed_at", null);
  return (data || []).reduce((sum, row) => sum + (row.days_granted || 0), 0);
};

/**
 * Grant one side of a referral.
 *
 * The ledger row is written BEFORE the RevenueCat call, deliberately. Rippld
 * delivers at-least-once, so a redelivery must not grant twice: the unique
 * index on (rippld_referral_id, role) turns the second attempt into a 23505 and
 * we stop. Granting first and writing the ledger second would double-grant
 * whenever the ledger write failed.
 */
const grantSide = async (admin, { referralId, userId, role, days }) => {
  const now = Date.now();
  const [alreadyGrantedDays, currentExpiryMs] = await Promise.all([
    grantedDaysFor(admin, userId),
    getEntitlementExpiryMs(userId),
  ]);

  const granted = effectiveGrantDays({ days, alreadyGrantedDays });
  const endTimeMs = computeEndTime({
    currentExpiryMs,
    days,
    alreadyGrantedDays,
    now,
  });

  const { error } = await admin.from("referral_grants").insert({
    rippld_referral_id: referralId,
    user_id: userId,
    role,
    // The EFFECTIVE days, never the request: recording the request would
    // inflate the running total and tighten the cap against itself.
    days_granted: granted,
    expiry_before: currentExpiryMs ? new Date(currentExpiryMs).toISOString() : null,
    expiry_after: new Date(endTimeMs).toISOString(),
  });

  if (error) {
    if (error.code === "23505") return { skipped: true };
    throw error;
  }

  // A fully capped grant adds nothing, so there is no call to make.
  if (granted <= 0) return { skipped: false, capped: true };

  const result = await grantPromotional({ appUserId: userId, endTimeMs });
  return { skipped: false, ok: result.ok };
};

const handleQualified = async (admin, data) => {
  const referralId = data?.referral_id;
  const referrerId = data?.referrer_external_user_id;
  const refereeId = data?.referee_external_user_id;

  // Anything unrecognisable is skippable, never a retry. A non-UUID id crashing
  // a cast into a 500 is exactly the retry storm this guards against; it was
  // caught while dogfooding ReadersGuild.
  if (!isUuid(referralId) || !isUuid(referrerId) || !isUuid(refereeId)) {
    return { skipped: "bad_ids" };
  }

  const rewards = await loadRewards(admin);
  if (!rewards.free) return { skipped: "no_rewards_configured" };

  const { productIdentifier, override } = await loadReferrerContext(admin, referrerId);
  const tier = resolveTier({ override, productIdentifier, rewards });

  const referee = await grantSide(admin, {
    referralId,
    userId: refereeId,
    role: "referee",
    days: tier.refereeDays,
  });
  if (referee.skipped) return { skipped: "already_processed" };

  if (tier.referrerDays > 0) {
    await grantSide(admin, {
      referralId,
      userId: referrerId,
      role: "referrer",
      days: tier.referrerDays,
    });
  }

  await admin.from("referrals").upsert(
    {
      rippld_referral_id: referralId,
      referrer_user_id: referrerId,
      referee_user_id: refereeId,
      status: "qualified",
      tier_applied: tier.tier,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "rippld_referral_id" }
  );

  if (tier.usedOverride) {
    await admin.rpc("increment_referral_override_use", { p_user_id: referrerId });
  }

  return { granted: true, tier: tier.tier };
};

const handleReversed = async (admin, data) => {
  const referralId = data?.referral_id;
  if (!isUuid(referralId)) return { skipped: "bad_ids" };

  const { data: grants } = await admin
    .from("referral_grants")
    .select("user_id, expiry_before")
    .eq("rippld_referral_id", referralId)
    .is("reversed_at", null);

  for (const grant of grants || []) {
    // Re-granting AT the prior expiry shortens the entitlement back to what it
    // was. A null expiry_before means they held nothing, so end it now.
    await grantPromotional({
      appUserId: grant.user_id,
      endTimeMs: grant.expiry_before ? Date.parse(grant.expiry_before) : Date.now(),
    });
  }

  await admin
    .from("referral_grants")
    .update({ reversed_at: new Date().toISOString() })
    .eq("rippld_referral_id", referralId)
    .is("reversed_at", null);

  await admin
    .from("referrals")
    .update({ status: "reversed", updated_at: new Date().toISOString() })
    .eq("rippld_referral_id", referralId);

  return { reversed: true };
};

export async function POST(request) {
  const rawBody = await request.text();

  if (!verifySignature(rawBody, request.headers.get("rippld-signature"))) {
    return json(401, { ok: false, reason: "bad_signature" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json(200, { ok: true, skipped: "invalid_json" });
  }

  const admin = getProtosAdminClient();

  try {
    if (payload.event === "referral.qualified") {
      return json(200, { ok: true, ...(await handleQualified(admin, payload.data)) });
    }
    if (payload.event === "referral.reversed") {
      return json(200, { ok: true, ...(await handleReversed(admin, payload.data)) });
    }
    // Unhandled event types are ACKED. Rippld retries 6 times then dead-letters,
    // so a non-2xx on a payload we could ignore creates a retry storm.
    return json(200, { ok: true, skipped: "unhandled_event" });
  } catch (error) {
    console.error("[referral/webhook]", error);
    // A genuine failure on our side: let rippld retry.
    return json(500, { ok: false, reason: "internal_error" });
  }
}

export const dynamic = "force-dynamic";
