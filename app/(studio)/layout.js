import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StudioNav from "@/components/studio/StudioNav";
import { EchoLines } from "@/components/studio/BrandElements";
import { BRAND_META_DESCRIPTION } from "@/constants/branding";
import { BrandReveal } from "@/components/studio/BrandMotion";
import BrandMark from "@/components/studio/BrandMark";
import "./studio.css";

export const metadata = {
  title: { default: "EchoForge | Independent software studio", template: "%s | EchoForge" },
  description: BRAND_META_DESCRIPTION,
  robots: { index: true, follow: true },
};

export default function StudioLayout({ children }) {
  return <div className="echo-studio">
    <a href="#echo-content" className="echo-skip">Skip to content</a>
    <header className="echo-header echo-wrap"><Link className="echo-wordmark" href="/" aria-label="EchoForge home"><BrandMark /><span>ECHOFORGE</span></Link><StudioNav /></header>
    <div id="echo-content" tabIndex={-1}>{children}</div>
    <footer className="echo-footer echo-wrap">
      <div className="echo-footer-signature"><EchoLines variant="footer" /></div>
      <BrandReveal className="echo-footer-top"><div><h2><a href="mailto:support@echoforge.to">Get in touch.</a></h2><p className="echo-meta">Questions, feedback, or help with a product.</p></div><a className="echo-contact" href="mailto:support@echoforge.to">support@echoforge.to <ArrowUpRight size={20} /></a></BrandReveal>
      <div className="echo-footer-bottom"><Link className="echo-wordmark" href="/">ECHOFORGE</Link><Link href={"/apps"}>Products</Link><Link href={"/studio"}>Studio</Link><Link href={"/legal"}>Legal & support</Link><span>© {new Date().getFullYear()} EchoForge</span></div>
    </footer>
  </div>;
}
