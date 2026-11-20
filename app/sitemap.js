// Generates /sitemap.xml. Studio routes are fixed; product pages and legal
// policies hosted here are derived from the catalog so new ones appear
// automatically. Bump the dates when the matching content changes.
import { SITE_URL } from "@/constants/branding";
import { getInternalStudioRoutes } from "@/lib/studioSeo";

const CATALOG_UPDATED = new Date("2026-11-21");
const STUDIO_UPDATED = new Date("2026-11-14");
const VIAL_UPDATED = new Date("2026-06-15");
const VIAL_FAQ_UPDATED = new Date("2026-06-12");

const entry = (path, lastModified, changeFrequency, priority) => ({
  url: `${SITE_URL}${path === "/" ? "" : path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap() {
  const { productRoutes, legalRoutes } = getInternalStudioRoutes();
  const studioEntries = [
    entry("/", CATALOG_UPDATED, "monthly", 1.0),
    entry("/apps", CATALOG_UPDATED, "monthly", 0.8),
    entry("/studio", STUDIO_UPDATED, "monthly", 0.6),
    entry("/legal", STUDIO_UPDATED, "yearly", 0.3),
  ];
  const vialEntries = [
    entry("/vial/faq", VIAL_FAQ_UPDATED, "monthly", 0.9),
    entry("/vial/support", VIAL_UPDATED, "monthly", 0.6),
    entry("/vial/privacy", VIAL_UPDATED, "yearly", 0.3),
    entry("/vial/terms", VIAL_UPDATED, "yearly", 0.3),
  ];
  const productEntries = productRoutes.map(path => entry(path, path === "/vial" ? VIAL_UPDATED : undefined, "monthly", 0.7));
  const legalEntries = legalRoutes.map(path => entry(path, undefined, "yearly", 0.3));
  return [...studioEntries, ...productEntries, ...vialEntries, ...legalEntries];
}
