export default function MagdaPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-3xl font-semibold">Magda</h1>
      <p className="text-neutral-400">
        A calm, voice-first planning assistant.
      </p>

      <div className="pt-6 space-x-6">
        <a href="/legal/magda/privacy" className="underline underline-offset-4">
          Privacy
        </a>
        <a href="/legal/magda/terms" className="underline underline-offset-4">
          Terms
        </a>
      </div>
    </section>
  );
}
