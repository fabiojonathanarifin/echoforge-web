export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-4xl font-semibold">EchoForge</h1>
      <p className="text-neutral-400 text-lg">
        A quiet studio for building focused, opinionated software.
      </p>
      <a href="/apps" className="inline-block underline underline-offset-4">
        View apps
      </a>
    </section>
  );
}
