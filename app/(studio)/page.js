import Image from "next/image";

export default function Home() {
  return (
    <section className="relative max-w-3xl mx-auto px-6 py-40 space-y-12">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-foreground/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Studio mark */}
      <div className="w-20 h-20 rounded-[1.5rem] border border-border bg-background flex items-center justify-center shadow-2xl shadow-foreground/5 overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-500">
        <Image
          src="/echo-forge-icon.png"
          alt="EchoForge mark"
          className="w-full h-full object-cover"
          width={80}
          height={80}
          priority
        />
      </div>

      <div className="space-y-8">
        <h1 className="text-6xl font-black tracking-tight text-foreground leading-[1.1]">
          EchoForge
        </h1>
        <p className="text-muted text-2xl max-w-xl leading-relaxed font-medium">
          An independent software studio crafting focused, voice-first, and
          thoughtfully opinionated digital tools.
        </p>
      </div>

      <div className="pt-4">
        <a
          href="/apps"
          className="group inline-flex items-center gap-3 text-2xl font-bold text-foreground hover:gap-5 transition-all duration-300 underline underline-offset-8 decoration-border hover:decoration-foreground"
        >
          Explore our works <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
