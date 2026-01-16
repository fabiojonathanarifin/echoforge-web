import Link from "next/link";

export default function MagdaPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-12 text-foreground">
      {/* HEADER */}
      <header className="flex items-start gap-5">
        <div className="shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg">
            <img src="/magda-icon.png" alt="Magda icon" className="w-10 h-10" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Magda</h1>

          <p className="text-muted max-w-xl leading-relaxed">
            Magda is a voice-first AI planner that turns natural speech into
            scheduled tasks and a clean day plan — no typing required.
          </p>
        </div>
      </header>

      {/* FEATURES */}
      <ul className="text-muted list-none space-y-4 max-w-xl">
        {[
          { title: "Quick voice capture", desc: "Tap the mic, speak naturally, tasks appear." },
          { title: "Conversational planning", desc: "Chat with Magda to adjust your day." },
          { title: "Calendar sync", desc: "Read-only import of your calendars (with permission)." },
          { title: "Privacy-minded", desc: "Speech is converted to text only. No voice recordings are stored." }
        ].map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#58736E] font-bold mt-1">✓</span>
            <div>
              <strong className="text-foreground">{f.title}</strong> — {f.desc}
            </div>
          </li>
        ))}
      </ul>

      {/* WAITLIST */}
      <div className="pt-8 space-y-6">
        <h2 className="text-xl font-bold">Join the waitlist</h2>

        <p className="text-muted max-w-xl">
          Magda is currently in private development. Join the waitlist to get
          early access when the beta opens.
        </p>

        <div className="border border-border rounded-2xl overflow-hidden shadow-sm bg-secondary">
          <iframe
            src="https://YOUR_MAILERLITE_FORM_URL"
            title="Magda waitlist"
            className="w-full h-[220px] bg-transparent"
            frameBorder="0"
          />
        </div>

        {/* subtle accent line */}
        <div
          className="h-1.5 w-12 rounded-full"
          style={{ backgroundColor: "#58736E" }} // Magda tint — used once
        />
      </div>

      {/* LEGAL */}
      <footer className="pt-16 space-y-8">
        <div className="flex gap-6 text-sm font-medium text-muted">
          <Link
            href="/legal/magda/privacy"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/legal/magda/terms"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm font-bold text-muted hover:text-foreground transition-all group pt-4 border-t border-border/50 w-fit"
        >
          <div className="w-5 h-5 rounded overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
            <img src="/echo-forge-icon.png" alt="EchoForge" className="w-full h-full object-cover" />
          </div>
          <span>Built by EchoForge</span>
        </Link>
      </footer>
    </section>
  );
}
