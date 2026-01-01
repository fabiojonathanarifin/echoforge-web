import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-10">
      {/* Studio mark */}
      <div className="w-12 h-12 rounded-xl border border-neutral-800 bg-neutral-900 flex items-center justify-center">
        <Image
          src="/echo-forge-icon.png"
          alt="EchoForge mark"
          className="w-12 h-12"
          width={24}
          height={24}
          priority
        />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-semibold">EchoForge</h1>
        <p className="text-neutral-400 text-lg">
          An independent software studio building focused, voice-first and
          thoughtfully opinionated tools.
        </p>
      </div>

      <a
        href="/apps"
        className="inline-block text-lg underline underline-offset-4"
      >
        View apps
      </a>
    </section>
  );
}
