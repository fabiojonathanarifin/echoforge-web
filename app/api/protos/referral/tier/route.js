import { getProtosAdminClient, getProtosAuthClient } from "@/lib/supabaseServer";
import { resolveTier } from "@/lib/referral/tiers";
import {
  getEntitlementExpiryMs,
  getSubscriptionExpiryMs,
} from "@/lib/referral/revenuecat";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const DAY_MS = 86400 * 1000;

/**
 * The signed-in user's own reward size, so the client can render a duration in
 * copy without hardcoding one. The reward table is the only source of truth;
 * a number baked into a string could disagree with it after any tuning.
 */
export async function GET(request) {
  const auth = request.headers.get("authorization") || "";
  if (!auth.toLowerCase().startsWith("bearer ")) {
    return json(401, { reason: "missing_token" });
  }

  const { data: userData, error } = await getProtosAuthClient().auth.getUser(
    auth.slice(7).trim()
  );
  if (error || !userData?.user?.id) return json(401, { reason: "invalid_token" });
  const userId = userData.user.id;

  const admin = getProtosAdminClient();
  const [{ data: rewardRows }, { data: profile }, { data: override }] =
    await Promise.all([
      admin
        .from("referral_rewards")
        .select("tier, referrer_days, referee_days")
        .eq("active", true),
      admin.from("user_profile").select("entitlements").eq("id", userId).maybeSingle(),
      admin
        .from("referral_tier_overrides")
        .select("referrer_days, referee_days, max_redemptions, used_count")
        .eq("user_id", userId)
        .maybeSingle(),
    ]);

  const rewards = {};
  for (const row of rewardRows || []) rewards[row.tier] = row;
  if (!rewards.free) return json(500, { reason: "no_rewards_configured" });

  const productIdentifier =
    profile?.entitlements?.premium?.productIdentifier ?? null;

  // An advisor's 3 or 6 month tier is NEVER returned. No app surface may name
  // it, so they see the duration their own plan earns, exactly like anyone
  // else. The elevated amount exists only server-side, in the webhook.
  const visible = resolveTier({ override: null, productIdentifier, rewards });

  // Banked time is the honest gap between what RevenueCat says they hold and
  // when their paid plan actually ends. A paying referrer's reward sits past
  // their paid expiry, so without this it is invisible to them, and an
  // unexplained nothing reads as a broken promise.
  const [entitlementMs, subscriptionMs] = await Promise.all([
    getEntitlementExpiryMs(userId),
    getSubscriptionExpiryMs(userId),
  ]);
  const bankedDays =
    entitlementMs && subscriptionMs && entitlementMs > subscriptionMs
      ? Math.round((entitlementMs - subscriptionMs) / DAY_MS)
      : 0;

  return json(200, {
    tier: visible.tier,
    referee_days: visible.refereeDays,
    referrer_days: visible.referrerDays,
    banked_days: bankedDays,
    has_override: !!override,
  });
}

export const dynamic = "force-dynamic";
