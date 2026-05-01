import { NextResponse } from "next/server";
import { cookieName, verifyAdminCookie } from "@/lib/adminAuth";

const PUBLIC_ADMIN_PATHS = new Set([
  "/admin/login",
  "/api/admin/login",
]);

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_ADMIN_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(cookieName)?.value;
  const valid = await verifyAdminCookie(cookieValue);

  if (valid) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      { error: "unauthorized" },
      { status: 401 }
    );
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/admin/login";
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}
