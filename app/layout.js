import "./globals.css";
import { BRAND_NAME, BRAND_DESCRIPTION, BRAND_META_DESCRIPTION } from "@/constants/branding";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: `${BRAND_NAME} | ${BRAND_DESCRIPTION}`,
  description: BRAND_META_DESCRIPTION,
  metadataBase: new URL("https://echoforge.to"),
  openGraph: {
    title: "EchoForge",
    description: BRAND_META_DESCRIPTION,
    url: "https://echoforge.to",
    siteName: "EchoForge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png?v=studio-mark-1",
        width: 1200,
        height: 630,
        alt: "EchoForge | Independent software studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EchoForge",
    description: BRAND_META_DESCRIPTION,
    images: ["/og-image.png?v=studio-mark-1"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png?v=studio-mark-1", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=studio-mark-1", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=studio-mark-1",
  },
};

export default function RootLayout({ children }) {
  // suppressHydrationWarning on <html> and <body> avoids dev-warning noise
  // from ThemeProvider (sets dark class on first effect) and browser
  // extensions (Grammarly, Honey, etc. inject data-* attrs into <body>
  // before React hydrates). React's docs explicitly recommend it for both.
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-foreground transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
