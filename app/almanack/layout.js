// Server component. Defines SEO metadata + JSON-LD structured data for /almanack.
// Page content lives in page.jsx (client component for animations).

import { Fraunces } from "next/font/google";

// Same display serif as the product (Ledger system): the ad -> landing -> app
// chain should feel like one object.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fraunces",
});

const SITE = "https://echoforge.to";
const PAGE_URL = `${SITE}/almanack`;

export const metadata = {
  metadataBase: new URL(SITE),
  title: "Almanack: Decision memory for operators",
  description:
    "Remember every decision you make, and never drop a follow-up. Talk for a minute, or dump it at your desk. Almanack turns it into structured memory: decisions, commitments, and tasks, and hands the right one back when you need it.",
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
    "MCP memory",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Almanack: Decision memory for operators",
    description:
      "Remember every decision you make, and never drop a follow-up. On your phone, at your desk, and in your AI.",
    siteName: "Almanack",
  },
  twitter: {
    card: "summary",
    title: "Almanack: Decision memory for operators",
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
      { "@type": "Offer", name: "Almanack Web Early Access", price: "0", priceCurrency: "USD", description: "Free on the web during early access" },
      { "@type": "Offer", name: "Almanack Monthly", price: "19", priceCurrency: "USD", category: "subscription", description: "At iPhone launch" },
      { "@type": "Offer", name: "Almanack Annual", price: "190", priceCurrency: "USD", category: "subscription", description: "At iPhone launch" },
    ],
    featureList: [
      "One-minute voice capture on iPhone",
      "Desktop web capture and recall",
      "Decisions logged with the reasoning behind them",
      "Commitment tracking with reminders",
      "Ask questions about your own decision history",
      "On-device transcription, audio never leaves the phone",
      "Encrypted sync with row-level isolation",
      "Markdown export and full account deletion",
      "MCP server: query your memory from Claude or any AI",
      "Optional Face ID lock",
    ],
  };

  const ldHtml = `<script type="application/ld+json">${JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c")}</script>`;

  return (
    <div className={fraunces.variable}>
      <div dangerouslySetInnerHTML={{ __html: ldHtml }} />
      {children}
    </div>
  );
}
