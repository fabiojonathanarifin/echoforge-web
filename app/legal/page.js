export default function LegalPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-3xl font-semibold">Legal</h1>

      <ul className="list-disc list-inside text-neutral-400">
        <li>
          <a
            href="/legal/magda/privacy"
            className="underline underline-offset-4"
          >
            Magda - Privacy Policy
          </a>
        </li>
        <li>
          <a href="/legal/magda/terms" className="underline underline-offset-4">
            Magda - Terms of Service
          </a>
        </li>
        <li>
          <a
            href="/legal/kume/privacy"
            className="underline underline-offset-4"
          >
            Kume - Privacy Policy
          </a>
        </li>
        <li>
          <a href="/legal/kume/terms" className="underline underline-offset-4">
            Kume - Terms of Service
          </a>
        </li>
      </ul>
    </section>
  );
}
