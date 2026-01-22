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
              An independent software studio based in <span className="text-foreground">San Francisco</span>, building <span className="text-foreground">focused</span>, <span className="text-foreground">thoughtfully designed</span> mobile and web products.
            </p>
          </div>

          <div>
            <a
              href="#works"
              className="group inline-flex items-center gap-3 text-xl font-bold text-foreground hover:gap-5 transition-all duration-300 underline underline-offset-8 decoration-border hover:decoration-foreground"
            >
              Explore our works <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

       

        {/* FEATURED WORKS */}
        <div id="works" className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-black tracking-tight">Featured Works</h2>
            <p className="text-muted text-xl">A curated selection of our latest prototypes and apps.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
              <AppCard
                      name="Brainecho"
                      description="A voice-first AI thinking assistant that transforms spoken thoughts into structured outputs."
                      href="https://brainechoai.com/"
                      icon="/brainecho-icon.png"
                    />
            <AppCard
              name="Protos"
              description="An Bible study app with book background, verse-by-verse explanation (commentary), and Bible dictionary."
              href="https://protos-app.com/"
              icon="/protos-icon.png"
            />
           
            <AppCard
              name="TinyOrange"
              description="A minimalist todo list with multi-device sync. It's kinda important, but not red important."
              href="https://tinyorange.app/"
              icon="/tinyorange-icon.png"
            />
          </div>

          <div className="pt-8">
            <a
              href="/apps"
              className="group inline-flex items-center gap-3 text-lg font-bold text-muted hover:text-foreground hover:gap-4 transition-all duration-300"
            >
              View all 5 projects <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
