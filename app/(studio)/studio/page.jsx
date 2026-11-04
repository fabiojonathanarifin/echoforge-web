import { ArrowUpRight } from "lucide-react";
import { STUDIO_FOUNDER } from "@/lib/studioFounder";
import { BrandReveal } from "@/components/studio/BrandMotion";
import { EchoLines } from "@/components/studio/BrandElements";
import FounderPortrait from "@/components/studio/FounderPortrait";

export const metadata = { alternates: { canonical: "/studio" }, title: "Studio" };

export default function StudioAbout() {
  const portrait = STUDIO_FOUNDER.portrait;
  return <section className="echo-wrap echo-inner-page"><BrandReveal className="echo-page-heading echo-about-heading"><div className="echo-about-signature"><EchoLines variant="about" /></div><h1>About EchoForge.</h1></BrandReveal><div className="echo-founder"><BrandReveal><FounderPortrait portrait={portrait} name={STUDIO_FOUNDER.name} /></BrandReveal><BrandReveal delay={0.1}><p>{STUDIO_FOUNDER.introduction}</p><p>{STUDIO_FOUNDER.summary}</p><a className="echo-text-link" href="mailto:support@echoforge.to">Get in touch <ArrowUpRight size={17} /></a></BrandReveal></div></section>;
}
