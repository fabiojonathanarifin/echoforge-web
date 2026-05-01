// Simple in-process rate limiter. Per-instance state, fine for single-Railway
// deploys at MVP scale. Swap for Redis or Supabase-backed counters once we
// run multi-instance.

const buckets = new Map();

const cleanup = (windowMs) => {
  const cutoff = Date.now() - windowMs;
  for (const [key, hits] of buckets) {
    const fresh = hits.filter((t) => t > cutoff);
    if (fresh.length === 0) buckets.delete(key);
    else buckets.set(key, fresh);
  }
};

export const rateLimit = ({ key, limit, windowMs }) => {
  if (!key) return { allowed: true, remaining: limit };
  cleanup(windowMs);

  const now = Date.now();
  const cutoff = now - windowMs;
  const hits = (buckets.get(key) || []).filter((t) => t > cutoff);

  if (hits.length >= limit) {
    const retryAfterMs = windowMs - (now - hits[0]);
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: Math.max(retryAfterMs, 0),
    };
  }

  hits.push(now);
  buckets.set(key, hits);

  return { allowed: true, remaining: limit - hits.length };
};
