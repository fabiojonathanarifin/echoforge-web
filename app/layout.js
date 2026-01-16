import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "EchoForge",
  description: "A quiet studio for shipping focused software.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
