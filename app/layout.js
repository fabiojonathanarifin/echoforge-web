import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "EchoForge — Independent Software Studio",
  description: "An independent software studio building focused, voice-first and thoughtfully opinionated tools.",
  metadataBase: new URL("https://echoforge.to"),
  openGraph: {
    title: "EchoForge",
    description: "Focused tools for focused minds.",
    url: "https://echoforge.to",
    siteName: "EchoForge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EchoForge — Independent Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EchoForge",
    description: "An independent software studio building focused, voice-first tools.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
