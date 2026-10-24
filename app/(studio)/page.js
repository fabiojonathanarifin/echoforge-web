import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ProductGallery, ProductDirectory } from "@/components/studio/ProductGallery";
import FounderPortrait from "@/components/studio/FounderPortrait";
import { STUDIO_FOUNDER } from "@/lib/studioFounder";
import { CoastScene, Reveal } from "@/components/studio/StudioMotion";

export const metadata = { alternates: { canonical: "/" } };

export default function StudioHome() {
  return (
    <>
      <section className="studio-hero studio-wrap">
        <div className="hero-intro">
          <div>
            <p className="small-label hero-label"><span className="studio-dot" /> Built on the road</p>
            <h1>Independent<br /> software studio.</h1>
          </div>
          <div className="hero-aside">
            <a href="#products" className="text-link">Explore the products <ArrowDown size={16} /></a>
          </div>
        </div>
        <figure className="coast-figure">
          <CoastScene>
            <Image src="https://images.unsplash.com/photo-1565367267466-29c9004fc71f?auto=format&fit=crop&w=2400&q=85" alt="Coastal headlands meeting the Pacific Ocean in Monterey, California" fill priority unoptimized sizes="100vw" />
          </CoastScene>
          <figcaption>
            <span>EchoForge</span>
            <a href="https://unsplash.com/photos/WymR2nYtj5M">Pacific coast. Photo by Ian Schneider <ArrowUpRight size={12} /></a>
          </figcaption>
        </figure>
      </section>
      <section className="studio-wrap selected-section" id="products">
        <Reveal className="section-heading">
          <h2>Selected products.</h2>
        </Reveal>
        <ProductGallery />
      </section>
      <section className="studio-note">
        <div className="studio-wrap note-layout">
          <FounderPortrait compact />
          <Reveal>
            <h2>About EchoForge.</h2>
            <p>{STUDIO_FOUNDER.introduction}</p>
            <Link href="/studio" className="text-link">About EchoForge <ArrowUpRight size={17} /></Link>
          </Reveal>
        </div>
      </section>
      <section className="studio-wrap more-section">
        <Reveal className="section-heading">
          <h2>More from EchoForge.</h2>
          <Link href="/apps" className="text-link">All products <ArrowUpRight size={17} /></Link>
        </Reveal>
        <ProductDirectory featuredOnly />
      </section>
    </>
  );
}
