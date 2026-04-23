import Image from "next/image";
import AppCard from "@/components/AppCard";

export default function Home() {
  return (
    <div className="relative">
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-40 space-y-32">
        {/* HERO */}
        <div className="space-y-8 max-w-3xl">
          <div className="w-22 h-22 overflow-hidden transition-all hover:scale-105 active:scale-95 duration-500">
            <Image
              src="/echo-forge-icon.png"
              alt="EchoForge mark"
              className="w-full h-full object-cover"
              width={64}
              height={64}
              priority
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-7xl font-black tracking-tighter text-foreground leading-[1] md:text-8xl">
              Echo<span className="text-muted">Forge</span>
            </h1>
            <p className="text-muted text-2xl md:text-3xl max-w-2xl leading-relaxed font-medium">
              A software studio based in{" "}
              <span className="text-foreground">San Francisco</span>, building a
              suite of <span className="text-foreground">focused</span> and{" "}
              <span className="text-foreground">thoughtfully designed</span>{" "}
              digital products.
            </p>
          </div>

          <div>
            <a
              href="#products"
              className="group inline-flex items-center gap-3 text-xl font-bold text-foreground hover:gap-5 transition-all duration-300 underline underline-offset-8 decoration-border hover:decoration-foreground"
            >
              Explore our products{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* FEATURED PRODUCTS */}
        <div id="products" className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight">Our Products</h2>
            <p className="text-muted text-xl">
              The core ecosystem of the Forge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AppCard
              name="Kume"
              description="A personal travel planner tailored to your specific vibe and pace."
              href="/kume"
              icon="/kume-icon.png"
            />
            <AppCard
              name="Brainecho"
              description="A voice-first AI thinking assistant transforming spoken thoughts into structured outputs."
              href="https://brainechoai.com/"
              icon="/brainecho-icon.png"
            />
            <AppCard
              name="Protos"
              description="A Bible study app with contextual backgrounds and verse-by-verse commentary."
              href="https://protos-app.com/"
              icon="/protos-icon.png"
            />
            <AppCard
              name="TinyOrange"
              description="A minimalist todo list with multi-device sync. Important, but not red important."
              href="https://tinyorange.app/"
              icon="/tinyorange-icon.png"
            />
            <AppCard
              name="Relic"
              description="An AI relationship memory for founders. Voice capture, smart briefings, and promise tracking."
              href="/relic"
              icon="/asset/relic/icon-trasnparent-bg.png"
            />
            <AppCard
              name="ReadersGuild"
              description="A social reading app where reading is shared, not measured. Timer sessions, beautiful share cards, and a community feed."
              href="https://readers-guild.com/"
              icon="/asset/readersGuild/icon.png"
            />
            <AppCard
              name="Vial"
              description="A daily companion for peptide protocols. Calculator, tracker, and AI coach in one beautifully designed iOS app."
              href="/vial"
              icon="/asset/vial/icon.png"
            />
          </div>

          <div className="pt-8">
            <a
              href="/apps"
              className="group inline-flex items-center gap-3 text-lg font-bold text-muted hover:text-foreground hover:gap-4 transition-all duration-300"
            >
              View the full suite{" "}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
