import { NextResponse } from "next/server";
import { getProtosAdminClient } from "@/lib/supabaseServer";

const TIER_TO_DURATION = {
  pastor: "yearly",
  pastor_lifetime: "lifetime",
  leader: "three_month",
};

// \p{M} matches all Unicode combining marks. The `u` flag is required for
// the property escape. Using a property class instead of a literal range so
// the regex survives any future re-encoding of this file.
const churchSlug = (name) =>
  (name || "")
    .normalize("NFKD")
    .replace(/\p{M}+/gu, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase()
    .slice(0, 14);

const padIndex = (n, total) => {
  const width = String(total).length;
  return String(n).padStart(width, "0");
};

const buildCodes = ({ slug, prefix, count, suffix }) => {
  if (!count || count <= 0) return [];
  return Array.from({ length: count }, (_, i) => {
    const idx = padIndex(i + 1, count);
    return [slug, prefix, idx]
      .filter(Boolean)
      .concat(suffix ? [suffix] : [])
      .join("-");
  });
};

export async function GET(request) {
  const url = new URL(request.url);
  const churchFilter = url.searchParams.get("church");
  const limit = Math.min(
    parseInt(url.searchParams.get("limit") || "200", 10),
    500
  );

  const admin = getProtosAdminClient();

  let query = admin
    .from("promo_codes")
    .select(
      "code, tier, rc_duration, max_uses, current_uses, expires_at, church_name, contact_name, notes, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (churchFilter) {
    query = query.ilike("church_name", `%${churchFilter}%`);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json(
      { error: "db_error", detail: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ codes: data || [] });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const churchName = (body?.church_name || "").trim();
  const contactName = (body?.contact_name || "").trim() || null;
  const notes = (body?.notes || "").trim() || null;
  const pastorCount = parseInt(body?.pastor_count || 0, 10) || 0;
  const lifetimeCount = parseInt(body?.lifetime_count || 0, 10) || 0;
  const leaderCount = parseInt(body?.leader_count || 0, 10) || 0;
  const leaderUsesPerCode = Math.max(
    1,
    parseInt(body?.leader_uses_per_code || 1, 10) || 1
  );

  if (!churchName) {
    return NextResponse.json({ error: "missing_church_name" }, { status: 400 });
  }

  if (pastorCount + lifetimeCount + leaderCount === 0) {
    return NextResponse.json({ error: "no_codes_requested" }, { status: 400 });
  }

  const slug = churchSlug(churchName);
  if (!slug) {
    return NextResponse.json({ error: "church_name_unusable" }, { status: 400 });
  }

  const pastorCodes = buildCodes({ slug, prefix: "PASTOR", count: pastorCount });
  const lifetimeCodes = buildCodes({
    slug,
    prefix: "LIFE",
    count: lifetimeCount,
  });
  const leaderCodes = buildCodes({ slug, prefix: "LEAD", count: leaderCount });

  const rows = [
    ...pastorCodes.map((code) => ({
      code,
      tier: "pastor",
      rc_duration: TIER_TO_DURATION.pastor,
      max_uses: 1,
      church_name: churchName,
      contact_name: contactName,
      notes,
    })),
    ...lifetimeCodes.map((code) => ({
      code,
      tier: "pastor_lifetime",
      rc_duration: TIER_TO_DURATION.pastor_lifetime,
      max_uses: 1,
      church_name: churchName,
      contact_name: contactName,
      notes,
    })),
    ...leaderCodes.map((code) => ({
      code,
      tier: "leader",
      rc_duration: TIER_TO_DURATION.leader,
      max_uses: leaderUsesPerCode,
      church_name: churchName,
      contact_name: contactName,
      notes,
    })),
  ];

  const admin = getProtosAdminClient();
  const { data, error } = await admin
    .from("promo_codes")
    .insert(rows)
    .select(
      "code, tier, rc_duration, max_uses, current_uses, church_name, contact_name, notes, created_at"
    );

  if (error) {
    const isDuplicate = error.code === "23505";
    return NextResponse.json(
      {
        error: isDuplicate ? "duplicate_code" : "db_error",
        detail: error.message,
      },
      { status: isDuplicate ? 409 : 500 }
    );
  }

  return NextResponse.json({ codes: data || [] }, { status: 201 });
}

export const dynamic = "force-dynamic";
