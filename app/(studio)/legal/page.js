import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { studioLegalLinks } from "@/lib/studioLegal";
import { BrandReveal } from "@/components/studio/BrandMotion";

export const metadata = { alternates: { canonical: "/legal" }, title: "Legal & support" };

export default function StudioLegal() {
  return <section className="echo-wrap echo-inner-page"><BrandReveal className="echo-page-heading"><p className="echo-meta">Legal & support</p><h1>Privacy, terms,<br />and support.</h1><p>Choose a product below to read its privacy policy or terms of service. For support, email <a href="mailto:support@echoforge.to">support@echoforge.to</a>.</p></BrandReveal><div className="echo-legal">{products.map(product => {
    const links = studioLegalLinks.filter(link => link.name.startsWith(`${product.name} - `));
    if (!links.length) return null;
    return <section key={product.name}><h2>{product.name}</h2><div>{links.map(link => <a key={link.href} href={link.href}>{link.name.split(" - ")[1]}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</div></section>;
  })}</div></section>;
}
