import { products } from "@/lib/products";
import { getProductSummary } from "@/lib/studioProducts";
import { STUDIO_FOUNDER } from "@/lib/studioFounder";
import { studioLegalLinks } from "@/lib/studioLegal";
import { BRAND_NAME, BRAND_DESCRIPTION, SITE_URL, SUPPORT_EMAIL } from "@/constants/branding";

const ORG_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const toAbsoluteUrl = (href) => (href.startsWith("http") ? href : `${SITE_URL}${href}`);

export const isInternalHref = (href) => href.startsWith("/");

// Organization, founder, and website entities shared by every studio page,
// cross-linked by @id so search and answer engines resolve them as one graph.
export const buildStudioGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BRAND_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      description: `${STUDIO_FOUNDER.introduction} ${STUDIO_FOUNDER.summary}`,
      email: SUPPORT_EMAIL,
      founder: { "@id": FOUNDER_ID },
      contactPoint: { "@type": "ContactPoint", email: SUPPORT_EMAIL, contactType: "customer support" },
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: STUDIO_FOUNDER.name,
      image: STUDIO_FOUNDER.portrait.src,
      jobTitle: "Founder",
      worksFor: { "@id": ORG_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: BRAND_NAME,
      url: SITE_URL,
      description: BRAND_DESCRIPTION,
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
  ],
});

export const buildProductListGraph = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Products by ${BRAND_NAME}`,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: product.name,
      url: toAbsoluteUrl(product.href),
      description: getProductSummary(product),
      publisher: { "@id": ORG_ID },
    },
  })),
});

// Product pages and legal policies hosted on this domain, derived from the
// catalog so the sitemap never drifts from what /apps and /legal link to.
export const getInternalStudioRoutes = () => {
  const productRoutes = products.map(product => product.href).filter(isInternalHref);
  const legalRoutes = studioLegalLinks.map(link => link.href).filter(isInternalHref);
  return { productRoutes, legalRoutes };
};

export const buildLlmsTxt = () => {
  const productLines = products.map(product => `- [${product.name}](${toAbsoluteUrl(product.href)}): ${getProductSummary(product)}`);
  return [
    `# ${BRAND_NAME}`,
    "",
    `> ${STUDIO_FOUNDER.introduction} ${STUDIO_FOUNDER.summary}`,
    "",
    `${BRAND_NAME} is the studio behind each product below. Each product has its own website or page with details, pricing, and support.`,
    "",
    "## Products",
    "",
    ...productLines,
    "",
    "## Studio",
    "",
    `- [About ${BRAND_NAME}](${SITE_URL}/studio): Who runs the studio and what it builds.`,
    `- [All products](${SITE_URL}/apps): The full product directory.`,
    `- [Legal and support](${SITE_URL}/legal): Privacy policies and terms for every product.`,
    "",
    "## Contact",
    "",
    `- Email: ${SUPPORT_EMAIL}`,
    "",
  ].join("\n");
};
