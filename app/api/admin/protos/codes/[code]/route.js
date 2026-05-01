import { NextResponse } from "next/server";
import { getProtosAdminClient } from "@/lib/supabaseServer";

// Soft-revoke: set expires_at = now() so future validations fail. We don't
// hard-delete because code_redemptions FK to promo_codes; users who already
// redeemed keep their RC entitlement (revoke that via RC dashboard if needed).
export async function DELETE(_request, context) {
  const params = await context.params;
  const code = (params?.code || "").toUpperCase();
  if (!code) {
    return NextResponse.json({ error: "missing_code" }, { status: 400 });
  }

  const admin = getProtosAdminClient();
  const { data, error } = await admin
    .from("promo_codes")
    .update({ expires_at: new Date().toISOString() })
    .eq("code", code)
    .select("code, expires_at")
    .maybeSingle();

  if (error) {
    return NextResponse.json(
      { error: "db_error", detail: error.message },
      { status: 500 }
    );
  }
  if (!data) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, code: data });
}

export const dynamic = "force-dynamic";
