import { ArrowUpRight } from "lucide-react";
import { studioLegalLinks } from "@/lib/studioLegal";
import { products } from "@/lib/products";
export const metadata = { title: "Legal & support", alternates: { canonical: "/legal" } };

export default function StudioLegal() {
  return <div className="studio-wrap legal-page"><div className="page-heading"><p className="small-label">Legal & support</p><h1>Privacy, terms,<br />and support.</h1><p>Privacy policies and terms for our products. For help with anything else, email <a href="mailto:support@echoforge.to">support@echoforge.to</a>.</p></div><div className="legal-directory">{products.map(product => {
    const links=studioLegalLinks.filter(link => link.name.startsWith(`${product.name} - `));
    if (!links.length) return null;
    return <section key={product.name}><h2>{product.name}</h2><div>{links.map(link => <a key={link.href} href={link.href}>{link.name.split(' - ')[1]}<ArrowUpRight size={16} /></a>)}</div></section>;
  })}</div></div>;
}
