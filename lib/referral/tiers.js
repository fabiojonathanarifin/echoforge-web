/**
 * Resolve a referrer's reward tier.
 *
 * The signal is the RevenueCat product identifier, read from
 * `user_profile.entitlements->'premium'->>'productIdentifier'`, which
 * `syncSubscriptionData` writes on every sync. Two nearby columns look like
 * they would work and do not:
 *
 * - `subscription_status` is "premium" for comped users too. A free user who
 *   earned a week from their first referral would be scored as a paying
 *   referrer on their second, so the reward would silently invert the moment
 *   the feature started working.
 * - `subscription_platform` is Platform.OS whenever ANY entitlement is active.
 *   Verified against production: the two live promotional entitlements
 *   (`rc_promo_Premium_custom`, `rc_promo_Premium_yearly`) both carry 'ios',
 *   exactly like the 122 real purchases. The column cannot separate comped
 *   from paid.
 */

/** Every real Protos purchase carries this prefix. */
export const PROTOS_SKU_PREFIX = "com.fabiojonathana.protos.";

/**
 * Known SKUs, verified against production `user_profile` rows.
 *
 * `Annual50` is the promoPaywall's 50%-off annual: a real purchase whose buyer
 * is an annual subscriber, so it maps to annual rather than being missed.
 *
 * The quarterly SKU is deliberately absent. It does not exist yet (the paywall
 * resolves the three-month plan through RevenueCat's `packageType`, not an
 * identifier), and the fallback below already lands it on the right number.
 */
export const PRODUCT_TIERS = {
  [`${PROTOS_SKU_PREFIX}Weekly`]: "weekly",
  [`${PROTOS_SKU_PREFIX}Monthly`]: "monthly_legacy",
  [`${PROTOS_SKU_PREFIX}Annual`]: "annual",
  [`${PROTOS_SKU_PREFIX}Annual50`]: "annual",
};

/**
 * Tier for an unrecognised Protos SKU.
 *
 * An exact-match map would silently drop any new product to the free tier,
 * which is the wrong direction to fail: an unrecognised Protos identifier is
 * still a real purchase. Failing to the base PAID tier means a new SKU
 * under-rewards at worst instead of treating a paying subscriber as free, and
 * quarterly is 14 days anyway, so it resolves correctly with no code change.
 */
const UNKNOWN_PAID_TIER = "weekly";

const tierForProduct = (productIdentifier) => {
  if (!productIdentifier) return "free";
  const known = PRODUCT_TIERS[productIdentifier];
  if (known) return known;
  // rc_promo_* and any foreign identifier fall through here.
  if (productIdentifier.startsWith(PROTOS_SKU_PREFIX)) return UNKNOWN_PAID_TIER;
  return "free";
};

const overrideHasSeats = (override) =>
  !!override &&
  (override.max_redemptions == null ||
    override.used_count < override.max_redemptions);

export const resolveTier = ({ override, productIdentifier, rewards }) => {
  if (overrideHasSeats(override)) {
    return {
      tier: "override",
      referrerDays: override.referrer_days,
      refereeDays: override.referee_days,
      usedOverride: true,
    };
  }

  const tier = tierForProduct(productIdentifier);
  const row = rewards[tier] || rewards.free;
  return {
    tier,
    referrerDays: row.referrer_days,
    refereeDays: row.referee_days,
    usedOverride: false,
  };
};
