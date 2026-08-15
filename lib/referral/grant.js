const DAY_MS = 86400 * 1000;

/**
 * Ceiling on LIFETIME referral days a single user can earn.
 *
 * Uncapped stacking is the real economic hole in a referral program, not the
 * per-referral size: refer enough people and you never pay. 70 days matches
 * Duolingo's published ten-week ceiling.
 */
export const MAX_STACK_DAYS = 70;

/**
 * Absolute end time for a RevenueCat promotional entitlement, in epoch ms.
 *
 * Two properties, both load-bearing:
 *
 * 1. It STACKS on whatever the subscriber already holds, paid or promotional,
 *    so repeat referrals accumulate. RevenueCat's promotional grant takes an
 *    absolute end_time_ms, so a naive `now + days` would silently discard
 *    every previous reward.
 *
 * 2. The cap applies to `alreadyGrantedDays`, the user's lifetime referral
 *    total from the `referral_grants` ledger, and NOT to the returned end
 *    time. Capping the end time instead looks equivalent and is not: an annual
 *    subscriber sitting 300 days out would be clamped back to 70, revoking
 *    access they paid for, the moment they referred someone. The cap bounds
 *    what we ADD. It is never a ceiling on what they already have.
 */
/**
 * Days actually granted after the lifetime cap, which can be fewer than asked
 * for and can be zero.
 *
 * The ledger must record THIS, not the requested amount. Recording the request
 * would inflate the running total every time a grant is partially capped, so
 * the cap would tighten on itself and eventually pay out nothing.
 */
export const effectiveGrantDays = ({ days, alreadyGrantedDays = 0 }) => {
  const remaining = Math.max(0, MAX_STACK_DAYS - alreadyGrantedDays);
  return Math.min(days, remaining);
};

export const computeEndTime = ({
  currentExpiryMs,
  days,
  alreadyGrantedDays = 0,
  now,
}) => {
  const base = Math.max(now, currentExpiryMs || 0);
  return base + effectiveGrantDays({ days, alreadyGrantedDays }) * DAY_MS;
};
