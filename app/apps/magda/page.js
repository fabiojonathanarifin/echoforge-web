import Link from "next/link";

export default function MagdaPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-3xl font-semibold">Magda</h1>

      <p className="text-neutral-400">
        Magda is a voice-first AI planner that turns natural speech into
        scheduled tasks and a clean day plan, with no typing required. Speak:
        “Schedule dentist Tuesday 2pm, call Mom tomorrow afternoon,” and Magda
        parses it, suggests times, and places items on your timeline.
      </p>

      <ul className="text-neutral-400 list-disc list-inside space-y-2">
        <li>
          <strong>Quick voice capture</strong> — Tap the mic, speak naturally,
          tasks appear.
        </li>
        <li>
          <strong>Conversational planning</strong> — Chat with Magda to adjust
          your day.
        </li>
        <li>
          <strong>Calendar sync</strong> — Read-only import of your calendars
          (with permission).
        </li>
        <li>
          <strong>Privacy-minded</strong> — We use speech-to-text only (no voice
          recordings are stored).
        </li>
      </ul>

      <div className="pt-6 space-x-6">
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
      </div>
    </section>
  );
}
