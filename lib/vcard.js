// Builds a VERSION:3.0 vCard string from a Relic public card.
//
// Correctness notes:
// - Values are escaped per RFC 6350: backslash, comma, semicolon, and
//   newlines. Taglines and titles can contain commas, which break naive joins.
// - Lines are joined with CRLF, which the vCard spec requires and which iOS
//   Contacts expects.
// - Both FN (display) and N (structured) are included. iOS imports cleanly
//   when N is present. We split display_name into family/given on the last
//   space, a reasonable default for "First Last".

// Returns the url only if it parses and uses an http(s) scheme, else null.
// Defense-in-depth against a stored javascript:/data: URL riding into an href
// or the vCard, even after write-side normalization (older rows exist).
export const safeHref = (url) => {
  const raw = String(url || "").trim();
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") return raw;
    return null;
  } catch {
    return null;
  }
};

const escapeValue = (value) =>
  String(value || "")
    // Normalize line endings first: CRLF, lone CR, and bare LF all become \n
    // so a stray CR can't inject a vCard line fold before escaping.
    .replace(/\r\n?/g, "\n")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");

const splitName = (fullName) => {
  const parts = String(fullName || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { given: "", family: "" };
  if (parts.length === 1) return { given: parts[0], family: "" };
  const family = parts[parts.length - 1];
  const given = parts.slice(0, -1).join(" ");
  return { given, family };
};

export const buildVCard = (card) => {
  if (!card) return "";

  const { display_name, title, company, tagline, links } = card;
  const { given, family } = splitName(display_name);

  const lines = ["BEGIN:VCARD", "VERSION:3.0"];

  // N: Family;Given;Additional;Prefix;Suffix
  lines.push(`N:${escapeValue(family)};${escapeValue(given)};;;`);
  lines.push(`FN:${escapeValue(display_name)}`);

  if (title) lines.push(`TITLE:${escapeValue(title)}`);
  if (company) lines.push(`ORG:${escapeValue(company)}`);

  // One URL line per link. site is the primary; x/linkedin are labeled.
  // Guard each scheme so a bad protocol can't ride into the .vcf.
  const siteHref = safeHref(links?.site);
  const xHref = safeHref(links?.x);
  const linkedinHref = safeHref(links?.linkedin);
  if (siteHref) lines.push(`URL:${escapeValue(siteHref)}`);
  if (xHref) lines.push(`URL;TYPE=x:${escapeValue(xHref)}`);
  if (linkedinHref) {
    lines.push(`URL;TYPE=linkedin:${escapeValue(linkedinHref)}`);
  }

  if (tagline) lines.push(`NOTE:${escapeValue(tagline)}`);

  lines.push("END:VCARD");

  return lines.join("\r\n");
};
