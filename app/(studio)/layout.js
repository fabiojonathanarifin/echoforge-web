import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function StudioLayout({ children }) {
  return (
    <>
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg tracking-tight">
            EchoForge
          </Link>
          <nav className="flex items-center space-x-8 text-muted font-medium">
            <Link href="/apps" className="hover:text-foreground transition-colors">Apps</Link>
            <Link href="/legal" className="hover:text-foreground transition-colors">Legal</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-border mt-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 py-12 text-sm text-muted">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="font-bold text-foreground">EchoForge</div>
              <p className="max-w-xs">A quiet studio for shipping focused software.</p>
            </div>
            <div className="flex gap-12 text-muted">
              <div className="space-y-3 flex flex-col">
                <span className="font-bold text-foreground uppercase text-xs tracking-widest">Studio</span>
                <Link href="/apps" className="hover:text-foreground">Apps</Link>
                <Link href="/legal" className="hover:text-foreground">Legal</Link>
              </div>
              <div className="space-y-3 flex flex-col">
                <span className="font-bold text-foreground uppercase text-xs tracking-widest">Legal</span>
                <Link href="/legal/magda/privacy" className="hover:text-foreground">Magda Privacy</Link>
                <Link href="/legal/kume/privacy" className="hover:text-foreground">Kume Privacy</Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            © {new Date().getFullYear()} EchoForge. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
