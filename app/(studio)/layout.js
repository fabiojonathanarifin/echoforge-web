import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StudioMark } from "@/components/studio/StudioMark";
import "./studio.css";

export const metadata = {
  title: { default: "EchoForge | Independent software studio", template: "%s | EchoForge" },
  description: "An independent software studio founded by Fabio Jonathan Arifin.",
  robots: { index: true, follow: true },
};

export default function StudioLayout({ children }) {
  return (
    <div className="coastal">
      <a className="skip-link" href="#studio-content">Skip to content</a>
      <header className="studio-header studio-wrap">
        <Link href="/" className="studio-brand" aria-label="EchoForge home">
          <StudioMark /><span>EchoForge</span>
        </Link>
        <nav aria-label="Studio navigation">
          <Link href="/apps">Our products</Link>
          <Link href="/studio">The studio</Link>
          <a className="header-contact" href="mailto:support@echoforge.to">Contact <ArrowUpRight size={15} /></a>
        </nav>
      </header>
      <div id="studio-content" tabIndex={-1}>{children}</div>
      <footer className="studio-footer">
        <div className="studio-wrap">
          <div className="footer-top">
            <div><h2>Get in touch.</h2><p>Support, feedback, or a question about an app.</p><a href="mailto:support@echoforge.to" className="text-link">support@echoforge.to <ArrowUpRight size={17} /></a></div>
            <StudioMark className="footer-mark" />
          </div>
          <div className="footer-bottom">
            <Link href="/" className="studio-brand"><span>EchoForge</span></Link>
            <p>Independent software.</p>
            <nav aria-label="Footer navigation"><Link href="/apps">Products</Link><Link href="/studio">Studio</Link><Link href="/legal">Legal & support</Link></nav>
            <span>© {new Date().getFullYear()} EchoForge</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
