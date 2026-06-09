// Server component. Defines SEO metadata + JSON-LD structured data for /almanack.
// Page content lives in page.jsx (client component for animations).

const SITE = "https://echoforge.to";
const PAGE_URL = `${SITE}/almanack`;

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Almanack: Voice-first decision memory for operators",
  description:
    "Remember every decision you make, and never drop a follow-up. Talk for a minute a day. Almanack turns it into structured memory: decisions, commitments, and tasks, all stored encrypted on your phone.",
  keywords: [
    "decision memory",
    "decision journal",
    "business memory",
    "voice notes for founders",
    "commitment tracker",
    "follow-up tracker",
    "decision log",
    "chief of staff app",
    "voice-first",
    "on-device transcription",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Almanack: Voice-first decision memory for operators",
    description:
      "Remember every decision you make, and never drop a follow-up. Talk for a minute a day. Almanack turns it into structured, encrypted memory on your phone.",
    siteName: "Almanack",
  },
  twitter: {
    card: "summary",
    title: "Almanack: Voice-first decision memory for operators",
    description:
      "Remember every decision you make, and never drop a follow-up.",
  },
  robots: { index: true, follow: true },
};

// JSON-LD structured data. Content is fully controlled by this file (no user
// input flows through), so dangerouslySetInnerHTML is safe here.
export default function AlmanackLayout({ children }) {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Almanack",
    operatingSystem: "iOS",
    applicationCategory: "BusinessApplication",
    description:
      "Voice-first decision and business memory for operators. Talk for a minute a day. Almanack turns it into structured memory: decisions with the reasoning, commitments owed to others, tasks owed to yourself.",
    url: PAGE_URL,
    publisher: { "@type": "Organization", name: "EchoForge", url: SITE },
    offers: [
      { "@type": "Offer", name: "Almanack Monthly", price: "19", priceCurrency: "USD", category: "subscription" },
      { "@type": "Offer", name: "Almanack Annual", price: "190", priceCurrency: "USD", category: "subscription", description: "7-day free trial, then $190/year" },
    ],
    featureList: [
      "One-minute voice capture",
      "Decisions logged with the reasoning behind them",
      "Commitment tracking with reminders",
      "Ask questions about your own decision history",
      "On-device transcription, audio never leaves the phone",
      "Encrypted local database, no cloud copy",
      "Optional Face ID lock",
    ],
  };

  const ldHtml = `<script type="application/ld+json">${JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c")}</script>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: ldHtml }} />
      {children}
    </>
  );
}
