import { createClient } from "@supabase/supabase-js";

// Read-only client for the Relic project's public_cards view. The view
// exposes ONLY public card columns (no private data) and is already filtered
// to card_public = true.
//
// Unlike supabaseServer.js (which throws when env is missing), this client
// returns null when env vars are absent. The public card page must render a
// graceful "card unavailable" state rather than crash, so callers check for
// null and fall back to that UI.
//
// Server-side fetch only, so no NEXT_PUBLIC_ prefix is needed. Both naming
// conventions are accepted; RELIC_SUPABASE_* is preferred, NEXT_PUBLIC_* is
// a fallback for environments that already set those.
const RELIC_URL =
  process.env.RELIC_SUPABASE_URL || process.env.NEXT_PUBLIC_RELIC_SUPABASE_URL;
const RELIC_ANON_KEY =
  process.env.RELIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_RELIC_SUPABASE_ANON_KEY;

let cachedClient = null;

export const isRelicSupabaseConfigured = () =>
  Boolean(RELIC_URL && RELIC_ANON_KEY);

export const getRelicClient = () => {
  if (!isRelicSupabaseConfigured()) return null;
  if (cachedClient) return cachedClient;

  cachedClient = createClient(RELIC_URL, RELIC_ANON_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cachedClient;
};
