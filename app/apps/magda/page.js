import Link from "next/link";

export default function MagdaPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-12">
      {/* HEADER */}
      <header className="flex items-start gap-5">
        <div className="shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <img src="/magda-icon.png" alt="Magda icon" className="w-10 h-10" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Magda</h1>

          <p className="text-neutral-400 max-w-xl">
            Magda is a voice-first AI planner that turns natural speech into
            scheduled tasks and a clean day plan — no typing required.
          </p>
        </div>
      </header>

      {/* FEATURES */}
      <ul className="text-neutral-400 list-disc list-inside space-y-2">
        <li>
          <strong className="text-neutral-200">Quick voice capture</strong> —
          Tap the mic, speak naturally, tasks appear.
        </li>
        <li>
          <strong className="text-neutral-200">Conversational planning</strong>{" "}
          — Chat with Magda to adjust your day.
        </li>
        <li>
          <strong className="text-neutral-200">Calendar sync</strong> —
          Read-only import of your calendars (with permission).
        </li>
        <li>
          <strong className="text-neutral-200">Privacy-minded</strong> — Speech
          is converted to text only. No voice recordings are stored.
        </li>
      </ul>

      {/* WAITLIST */}
      <div className="pt-4 space-y-5">
        <h2 className="text-xl font-medium">Join the waitlist</h2>

        <p className="text-neutral-400 max-w-xl">
          Magda is currently in private development. Join the waitlist to get
          early access when the beta opens.
        </p>

        <div className="border border-neutral-800 rounded-xl overflow-hidden">
          <iframe
            src="https://YOUR_MAILERLITE_FORM_URL"
            title="Magda waitlist"
            className="w-full h-[220px] bg-transparent"
            frameBorder="0"
          />
        </div>

        {/* subtle accent line */}
        <div
          className="h-px w-12"
          style={{ backgroundColor: "#58736E" }} // Magda tint — used once
        />
      </div>

      {/* LEGAL */}
      <footer className="pt-10 space-x-6 text-sm text-neutral-500">
        <Link
          href="/legal/magda/privacy"
          className="underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        <Link
          href="/legal/magda/terms"
          className="underline underline-offset-4"
        >
          Terms of Service
        </Link>
      </footer>
    </section>
  );
}
