import { createClient } from "@supabase/supabase-js";

let cachedAdminClient = null;

const AKSARA_URL = process.env.AKSARA_SUPABASE_URL;
const AKSARA_SECRET_KEY = process.env.AKSARA_SUPABASE_SECRET_KEY;

const assertEnv = (name, value) => {
  if (!value) {
    throw new Error(
      `${name} is not set. Echoforge cannot serve Aksara requests without it.`
    );
  }
};

export const getAksaraAdminClient = () => {
  if (cachedAdminClient) return cachedAdminClient;
  assertEnv("AKSARA_SUPABASE_URL", AKSARA_URL);
  assertEnv("AKSARA_SUPABASE_SECRET_KEY", AKSARA_SECRET_KEY);

  cachedAdminClient = createClient(AKSARA_URL, AKSARA_SECRET_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return cachedAdminClient;
};
