export const metadata = {
  title: "SENTINEL | Spatial Intelligence Command Center",
  description:
    "See the world like an intelligence analyst. Browser-based spatial intelligence system fusing open-source data feeds into a premium command interface with AI analysis.",
  keywords: [
    "OSINT",
    "spatial intelligence",
    "aircraft tracking",
    "satellite tracking",
    "CesiumJS",
    "open source intelligence",
    "real-time monitoring",
    "geopolitical intelligence",
    "defense tech",
  ],
  openGraph: {
    title: "SENTINEL | Spatial Intelligence Command Center",
    description:
      "See the world like an intelligence analyst. Real-time aircraft tracking, satellite orbits, and AI-powered intelligence briefings in your browser.",
    url: "https://echoforge.to/sentinel",
    siteName: "SENTINEL by EchoForge",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SENTINEL | Spatial Intelligence Command Center",
    description:
      "See the world like an intelligence analyst. Real-time OSINT data on a 3D globe with AI analysis.",
  },
  alternates: {
    canonical: "https://echoforge.to/sentinel",
  },
};

export default function SentinelLayout({ children }) {
  return children;
}
