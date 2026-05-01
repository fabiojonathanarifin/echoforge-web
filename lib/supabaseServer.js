import { createClient } from "@supabase/supabase-js";

let cachedAdminClient = null;
let cachedAuthClient = null;

const PROTOS_URL = process.env.PROTOS_SUPABASE_URL;
// Supabase's modern API key naming: PUBLISHABLE replaces "anon" (safe to
// expose, used for JWT verification), SECRET replaces "service_role"
// (bypasses RLS, server-only). The keys themselves use sb_publishable_*
// and sb_secret_* prefixes. @supabase/supabase-js accepts either format,
// but we name our env vars after the new convention.
const PROTOS_SECRET_KEY = process.env.PROTOS_SUPABASE_SECRET_KEY;
const PROTOS_PUBLISHABLE_KEY = process.env.PROTOS_SUPABASE_PUBLISHABLE_KEY;

const assertEnv = (name, value) => {
  if (!value) {
    throw new Error(
      `${name} is not set. Echoforge cannot serve Protos requests without it.`
    );
  }
};

// Admin client (secret key, bypasses RLS). Used for the redeem_promo_code
// RPC, admin promo_codes management, and any other server-side operation
// that needs to read or write across user boundaries.
export const getProtosAdminClient = () => {
  if (cachedAdminClient) return cachedAdminClient;
  assertEnv("PROTOS_SUPABASE_URL", PROTOS_URL);
  assertEnv("PROTOS_SUPABASE_SECRET_KEY", PROTOS_SECRET_KEY);

  cachedAdminClient = createClient(PROTOS_URL, PROTOS_SECRET_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cachedAdminClient;
};

// Public client (publishable key) used only for verifying user JWTs via
// auth.getUser(token). Reading a user's identity from their access token
// does not require the secret key.
export const getProtosAuthClient = () => {
  if (cachedAuthClient) return cachedAuthClient;
  assertEnv("PROTOS_SUPABASE_URL", PROTOS_URL);
  assertEnv("PROTOS_SUPABASE_PUBLISHABLE_KEY", PROTOS_PUBLISHABLE_KEY);

  cachedAuthClient = createClient(PROTOS_URL, PROTOS_PUBLISHABLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cachedAuthClient;
};
