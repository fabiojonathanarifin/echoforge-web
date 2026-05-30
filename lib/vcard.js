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

const escapeValue = (value) =>
  String(value || "")
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
  if (links?.site) lines.push(`URL:${escapeValue(links.site)}`);
  if (links?.x) lines.push(`URL;TYPE=x:${escapeValue(links.x)}`);
  if (links?.linkedin) {
    lines.push(`URL;TYPE=linkedin:${escapeValue(links.linkedin)}`);
  }

  if (tagline) lines.push(`NOTE:${escapeValue(tagline)}`);

  lines.push("END:VCARD");

  return lines.join("\r\n");
};
