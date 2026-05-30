import { cache } from "react";
import { getRelicClient } from "@/lib/relicSupabase";

// Fetches a single public card by handle (case-insensitive) from the
// public_cards view. Returns the card row, or null for any of: missing env,
// query error, handle not found, or card not public. All four collapse to the
// same graceful "card unavailable" UI on the page.
//
// Wrapped in React cache() so generateMetadata and the page component share a
// single fetch per request instead of querying twice.
export const getPublicCard = cache(async (handle) => {
  const client = getRelicClient();
  if (!client) return null;

  const normalized = String(handle || "").trim().toLowerCase();
  if (!normalized) return null;

  try {
    // ilike gives case-insensitive matching, but it also treats _ and % in the
    // pattern as wildcards. Handles often contain underscores, so a lookup for
    // "jane_doe" could match "janeXdoe". Guard with an exact lowercase compare
    // after the fetch so we never serve the wrong person's public card.
    const { data, error } = await client
      .from("public_cards")
      .select("handle, display_name, title, company, links, tagline, show_branding")
      .ilike("handle", normalized)
      .limit(1)
      .maybeSingle();

    if (error || !data) return null;
    if (String(data.handle).toLowerCase() !== normalized) return null;
    return data;
  } catch {
    return null;
  }
});
