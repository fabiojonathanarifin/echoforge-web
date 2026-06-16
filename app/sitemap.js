// Generates /sitemap.xml (Next.js file convention). Lists the public Vial
// pages so search and AI crawlers discover the FAQ page and legal docs.
// Extend this list as other public sections of the site are finalized.
const SITE = "https://echoforge.to";

export default function sitemap() {
  const vialUpdated = new Date("2026-06-15");
  const faqUpdated = new Date("2026-06-12");

  // Almanack now lives at usealmanack.com and is listed in that site's own sitemap.
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/vial`, lastModified: vialUpdated, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/vial/faq`, lastModified: faqUpdated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/vial/support`, lastModified: vialUpdated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/vial/privacy`, lastModified: vialUpdated, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE}/vial/terms`, lastModified: vialUpdated, changeFrequency: "yearly", priority: 0.4 },
  ];
}
