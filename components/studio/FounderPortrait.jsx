import Image from "next/image";
import { STUDIO_FOUNDER } from "@/lib/studioFounder";

export default function FounderPortrait({ compact = false }) {
  return (
    <figure className={`founder-portrait ${compact ? "founder-portrait-compact" : ""}`}>
      <Image src={STUDIO_FOUNDER.portrait} alt={STUDIO_FOUNDER.portraitAlt} width={STUDIO_FOUNDER.portraitSize.width} height={STUDIO_FOUNDER.portraitSize.height} unoptimized sizes="(max-width: 760px) 80vw, 28vw" />
      <figcaption>{STUDIO_FOUNDER.name}<span>Founder, EchoForge</span></figcaption>
    </figure>
  );
}
