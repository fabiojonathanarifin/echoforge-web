import { NextResponse } from "next/server";
import {
  computeAdminCookieValue,
  cookieMaxAgeSec,
  cookieName,
  cookieOptions,
  verifyAdminPassword,
} from "@/lib/adminAuth";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limit = rateLimit({
    key: `admin-login:${ip}`,
    limit: 8,
    windowMs: 15 * 60 * 1000,
  });

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "rate_limited", retry_after_ms: limit.retryAfterMs },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const password = body?.password;
  if (typeof password !== "string" || password.length === 0) {
    return NextResponse.json({ error: "missing_password" }, { status: 400 });
  }

  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "invalid_password" }, { status: 401 });
  }

  const cookieValue = await computeAdminCookieValue();
  const response = NextResponse.json({ success: true });
  response.cookies.set(cookieName, cookieValue, {
    ...cookieOptions,
    maxAge: cookieMaxAgeSec,
  });
  return response;
}

export const dynamic = "force-dynamic";
