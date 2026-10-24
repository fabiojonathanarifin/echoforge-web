import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/studio/StudioMotion";
import FounderPortrait from "@/components/studio/FounderPortrait";
import { STUDIO_FOUNDER } from "@/lib/studioFounder";

export const metadata = { title: "Studio", alternates: { canonical: "/studio" } };

export default function AboutStudio() {
  return (
    <div className="studio-wrap about-page">
      <div className="page-heading"><h1>About EchoForge.</h1></div>
      <div className="about-statement">
        <FounderPortrait />
        <Reveal>
          <p>{STUDIO_FOUNDER.introduction}</p>
          <p>{STUDIO_FOUNDER.summary}</p>
          <a className="text-link" href="mailto:support@echoforge.to">Get in touch <ArrowUpRight size={17} /></a>
        </Reveal>
      </div>
    </div>
  );
}
