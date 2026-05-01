// Edge-runtime safe: middleware.js runs on the Edge Runtime, which doesn't
// expose node:crypto. We use the Web Crypto API (globalThis.crypto.subtle)
// for the cookie hash and a hand-rolled constant-time string compare for
// the equality checks. Works on both Edge and Node.js.

const COOKIE_NAME = "echoforge_admin";
const ONE_DAY_SEC = 60 * 60 * 24;
const COOKIE_MAX_AGE = ONE_DAY_SEC * 14;

const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is not set. Echoforge admin cannot run without it.`
    );
  }
  return value;
};

// Constant-time string equality. Don't short-circuit on first mismatch.
function constantTimeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

// SHA-256 hex digest via Web Crypto. Async because subtle.digest is async.
async function sha256Hex(input) {
  const data = new TextEncoder().encode(input);
  const buf = await globalThis.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function computeAdminCookieValue() {
  const password = requireEnv("ADMIN_PASSWORD");
  const secret = requireEnv("ADMIN_COOKIE_SECRET");
  return sha256Hex(`${password}:${secret}`);
}

export function verifyAdminPassword(submitted) {
  const expected = requireEnv("ADMIN_PASSWORD");
  return constantTimeEqual(expected, submitted || "");
}

export async function verifyAdminCookie(cookieValue) {
  if (!cookieValue) return false;
  let expected;
  try {
    expected = await computeAdminCookieValue();
  } catch {
    return false;
  }
  return constantTimeEqual(expected, cookieValue);
}

export const cookieName = COOKIE_NAME;
export const cookieMaxAgeSec = COOKIE_MAX_AGE;

export const cookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: COOKIE_MAX_AGE,
};
