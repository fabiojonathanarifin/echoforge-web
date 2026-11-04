import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { EchoLines, SelectedProducts, ProductCollection } from "@/components/studio/BrandElements";
import { BrandHero, BrandReveal } from "@/components/studio/BrandMotion";
import { STUDIO_FOUNDER } from "@/lib/studioFounder";

export const metadata = { alternates: { canonical: "/" } };

export default function StudioHome() {
  return <>
    <BrandHero lines={<EchoLines />}>
      <div className="echo-hero-bottom echo-wrap"><div><h1>Independent<br />software studio.</h1></div><a className="echo-text-link" href="#selected">Explore the products <ArrowDown size={17} /></a></div>
    </BrandHero>
    <section id="selected" className="echo-section echo-wrap"><BrandReveal className="echo-section-heading"><h2>Selected products.</h2><Link className="echo-text-link" href={"/apps"}>All products <ArrowUpRight size={17} /></Link></BrandReveal><SelectedProducts /></section>
    <section className="echo-statement echo-wrap"><BrandReveal className="echo-studio-signature"><EchoLines variant="studio" /></BrandReveal><BrandReveal delay={0.1}><h2>About EchoForge.</h2><p>{STUDIO_FOUNDER.introduction}</p><Link className="echo-text-link" href={"/studio"}>About EchoForge <ArrowUpRight size={17} /></Link></BrandReveal></section>
    <section className="echo-section echo-wrap"><BrandReveal className="echo-section-heading"><h2>More from EchoForge.</h2></BrandReveal><ProductCollection compact /></section>
  </>;
}
