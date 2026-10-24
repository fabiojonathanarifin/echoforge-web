import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/studio/StudioMotion";
import FounderPortrait from "@/components/studio/FounderPortrait";
import { STUDIO_FOUNDER } from "@/lib/studioFounder";

export const metadata = { title: "The studio", alternates: { canonical: "/studio" } };

export default function AboutStudio() {
  return (
    <div className="studio-wrap about-page">
      <div className="page-heading"><p className="small-label">About EchoForge</p><h1>Independent<br /> software studio.</h1></div>
      <div className="about-statement">
        <FounderPortrait />
        <Reveal>
          <p>{STUDIO_FOUNDER.introduction}</p>
          <p>{STUDIO_FOUNDER.summary}</p>
          <a className="text-link" href="mailto:support@echoforge.to">Get in touch <ArrowUpRight size={17} /></a>
        </Reveal>
      </div>
      <div className="studio-origins">
        {STUDIO_FOUNDER.stories.map((story, index) => (
          <Reveal as="article" key={story.title} delay={index * 0.1}>
            <h2>{story.title}</h2>
            <p>{story.text}</p>
            <a className="text-link" href={story.href}>View {story.title}<ArrowUpRight size={16} /></a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
