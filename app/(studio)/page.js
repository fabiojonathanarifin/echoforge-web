import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-32 space-y-12">
      {/* Studio mark */}
      <div className="w-16 h-16 rounded-[1.25rem] border border-border bg-background flex items-center justify-center shadow-xl shadow-foreground/5 overflow-hidden">
        <Image
          src="/echo-forge-icon.png"
          alt="EchoForge mark"
          className="w-full h-full object-cover"
          width={64}
          height={64}
          priority
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-5xl font-black tracking-tight text-foreground">EchoForge</h1>
        <p className="text-muted text-xl max-w-2xl leading-relaxed">
          An independent software studio building focused, voice-first and
          thoughtfully opinionated tools.
        </p>
      </div>

      <a
        href="/apps"
        className="inline-flex items-center gap-2 text-xl font-bold text-accent hover:gap-4 transition-all"
      >
        Explore our apps <span>→</span>
      </a>
    </section>
  );
}
