// Server component. Defines SEO metadata + JSON-LD structured data for /vial.
// Page content lives in page.js (client component for animations + FAQ accordion).

const SITE = "https://echoforge.to";
const PAGE_URL = `${SITE}/vial`;
const OG_IMAGE = `${SITE}/asset/vial/og-image.png`;

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Vial: Peptide Tracker — Calculator, Dose Log, GLP-1 & TRT",
  description:
    "The peptide calculator and tracker for iPhone. Reconstitute, dose, and track BPC-157, GLP-1s, TRT, and more. Calculator stays free. AI coach included with Vial.",
  keywords: [
    "peptide tracker",
    "peptide calculator",
    "reconstitution calculator",
    "GLP-1 tracker",
    "BPC-157",
    "TB-500",
    "CJC-1295",
    "ipamorelin",
    "GHK-Cu",
    "semaglutide",
    "tirzepatide",
    "ozempic tracker",
    "mounjaro tracker",
    "TRT tracker",
    "testosterone tracker",
    "HCG",
    "injection tracker",
    "syringe units",
    "dose calculator",
    "peptide AI",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Vial: Peptide Tracker — Calculator, Dose Log, GLP-1 & TRT",
    description:
      "The peptide calculator and tracker for iPhone. Reconstitute, dose, and track BPC-157, GLP-1s, TRT, and more. Calculator stays free.",
    siteName: "Vial",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Vial — Peptide Tracker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vial: Peptide Tracker",
    description:
      "Reconstitute, dose, and track BPC-157, GLP-1s, TRT, and more. Calculator stays free. AI coach included.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

// JSON-LD structured data. Content is fully controlled by this file (no user
// input flows through), so dangerouslySetInnerHTML is safe here. This is the
// pattern documented by Next.js for structured data:
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
export default function VialLayout({ children }) {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Vial: Peptide Tracker",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    description:
      "The peptide calculator and tracker for iPhone. Reconstitute, dose, and track BPC-157, GLP-1s, TRT, and more. Calculator stays free. AI coach included with Vial.",
    url: PAGE_URL,
    publisher: { "@type": "Organization", name: "EchoForge", url: SITE },
    offers: [
      { "@type": "Offer", name: "Vial Monthly", price: "14.99", priceCurrency: "USD", category: "subscription" },
      { "@type": "Offer", name: "Vial Yearly", price: "49.99", priceCurrency: "USD", category: "subscription", description: "$29.99 first year intro for new subscribers, then $49.99/year" },
      { "@type": "Offer", name: "Vial Lifetime", price: "99.99", priceCurrency: "USD", category: "lifetime" },
    ],
    featureList: [
      "Reconstitution calculator with U-20/U-30/U-40/U-100 syringe support",
      "Dose tracker with three-state logging",
      "Smart injection site rotation",
      "Cycle scheduling for on/off protocols",
      "Body metrics and bloodwork tracking",
      "Progress photos",
      "Vial 365 year-end share asset",
      "Vial AI educational coach",
      "On-device, no account required",
    ],
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EchoForge",
    url: SITE,
    sameAs: [],
    contactPoint: [{ "@type": "ContactPoint", email: "support@echoforge.to", contactType: "customer support" }],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is the calculator really free?", acceptedAnswer: { "@type": "Answer", text: "Yes. The reconstitution calculator is free forever, no purchase required. You can save one vial and one active protocol on the free tier. Premium unlocks unlimited protocols, full history, body metrics, bloodwork, progress photos, and Vial AI." } },
      { "@type": "Question", name: "Is my data private?", acceptedAnswer: { "@type": "Answer", text: "All protocol data, logs, and metrics are stored on your device. Nothing is uploaded. No account is required. Vial does not track you across other apps or websites." } },
      { "@type": "Question", name: "What peptides are supported?", acceptedAnswer: { "@type": "Answer", text: "BPC-157, TB-500, CJC-1295 (with and without DAC), Ipamorelin, GHK-Cu, Semaglutide, Tirzepatide, Retatrutide, Epitalon, NAD+, MOTS-c, Tesamorelin, Sermorelin, PT-141, plus testosterone and HCG for TRT users. Custom peptide entry is supported for anything not in the preset list." } },
      { "@type": "Question", name: "What does Vial cost?", acceptedAnswer: { "@type": "Answer", text: "Vial Monthly is $14.99. Vial Yearly is $49.99 ($29.99 first year for new subscribers). Vial Lifetime is $99.99 one-time. AI coach is included with all paid tiers. The reconstitution calculator stays free." } },
      { "@type": "Question", name: "Does Vial AI replace my doctor?", acceptedAnswer: { "@type": "Answer", text: "No. Vial AI is educational only. It cannot diagnose, prescribe, or recommend a specific dose. It is configured to refuse personalized clinical questions and redirect to your prescriber." } },
      { "@type": "Question", name: "Does it work offline?", acceptedAnswer: { "@type": "Answer", text: "Yes. The calculator and tracker are fully local. Vial AI requires an internet connection because it streams responses from a hosted model." } },
    ],
  };

  const ldHtml = [softwareJsonLd, orgJsonLd, faqJsonLd]
    .map((d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`)
    .join("");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: ldHtml }} />
      {children}
    </>
  );
}
