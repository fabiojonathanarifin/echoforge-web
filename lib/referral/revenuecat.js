const RC_API_BASE = process.env.RC_API_BASE || "https://api.revenuecat.com";
const RC_SECRET_KEY = process.env.RC_SECRET_KEY;

/**
 * The live entitlement identifier is `Premium`, CAPITAL P.
 *
 * `entitlements` is keyed by the entitlement identifier, not the App Store
 * product id. It is case-sensitive and immutable once created. A mismatch does
 * not throw: the grant call succeeds and the user reads as free forever.
 * Confirm against RevenueCat (Product catalog, Entitlements) before changing.
 */
export const PREMIUM_ENTITLEMENT = "Premium";

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${RC_SECRET_KEY}`,
});

/** One subscriber fetch, shared by both readers below. */
const fetchSubscriber = async (appUserId) => {
  if (!RC_SECRET_KEY || !appUserId) return null;
  try {
    const res = await fetch(
      `${RC_API_BASE}/v1/subscribers/${encodeURIComponent(appUserId)}`,
      { headers: authHeaders() }
    );
    if (!res.ok) return null;
    const body = await res.json();
    return body?.subscriber ?? null;
  } catch {
    return null;
  }
};

const parseMs = (value) => {
  if (!value) return null;
  const ms = Date.parse(value);
  return Number.isNaN(ms) ? null : ms;
};

/**
 * Current expiry of the subscriber's premium entitlement, epoch ms, or null.
 *
 * This is the base the next grant stacks on. Returns null on any failure so the
 * caller grants from now rather than throwing the reward away: under-granting a
 * few days is recoverable, silently granting nothing is not.
 */
export const getEntitlementExpiryMs = async (appUserId) => {
  const subscriber = await fetchSubscriber(appUserId);
  return parseMs(subscriber?.entitlements?.[PREMIUM_ENTITLEMENT]?.expires_date);
};

/**
 * Expiry of the user's real PURCHASED subscription, epoch ms, or null.
 *
 * Used only to compute banked time for display: the difference between the
 * entitlement expiry and this is the free time sitting past their paid plan.
 * A user with no purchase returns null, which reads as "nothing banked".
 */
export const getSubscriptionExpiryMs = async (appUserId) => {
  const subscriber = await fetchSubscriber(appUserId);
  const subs = subscriber?.subscriptions || {};
  const times = Object.values(subs)
    .map((sub) => parseMs(sub?.expires_date))
    .filter((ms) => ms != null);
  return times.length ? Math.max(...times) : null;
};

/**
 * Grant (or extend) the premium entitlement to an absolute end time.
 *
 * Passing an end time EARLIER than the current one shortens the entitlement,
 * which is how clawback on `referral.reversed` works.
 */
export const grantPromotional = async ({ appUserId, endTimeMs }) => {
  if (!RC_SECRET_KEY || !appUserId) return { ok: false, status: null };
  const url =
    `${RC_API_BASE}/v1/subscribers/${encodeURIComponent(appUserId)}` +
    `/entitlements/${encodeURIComponent(PREMIUM_ENTITLEMENT)}/promotional`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ end_time_ms: endTimeMs }),
    });
    return { ok: res.status >= 200 && res.status < 300, status: res.status };
  } catch {
    return { ok: false, status: null };
  }
};
