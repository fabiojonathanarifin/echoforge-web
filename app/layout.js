import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "EchoForge",
  description: "A quiet studio for shipping focused software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        <header className="border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
            <Link href="/" className="font-medium">
              EchoForge
            </Link>
            <nav className="space-x-6 text-neutral-400">
              <Link href="/apps">Apps</Link>
              <Link href="/legal">Legal</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-neutral-800 mt-24">
          <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-neutral-500">
            © {new Date().getFullYear()} EchoForge
          </div>
        </footer>
      </body>
    </html>
  );
}
