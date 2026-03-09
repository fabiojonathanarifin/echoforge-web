export default function LegalPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 space-y-12">
      <h1 className="text-4xl font-black tracking-tight text-foreground">Legal</h1>

      <div className="bg-secondary p-8 rounded-[2rem] border border-border">
        <ul className="space-y-6">
          {[
            { name: "Magda - Privacy Policy", href: "/legal/magda/privacy" },
            { name: "Magda - Terms of Service", href: "/legal/magda/terms" },
            { name: "Kume - Privacy Policy", href: "/legal/kume/privacy" },
            { name: "Kume - Terms of Service", href: "/legal/kume/terms" },
            { name: "Brainecho - Privacy Policy", href: "https://brainechoai.com/privacy" },
            { name: "Brainecho - Terms of Service", href: "https://brainechoai.com/terms" },
            { name: "TinyOrange - Privacy Policy", href: "https://tinyorange.app/privacy" },
            { name: "TinyOrange - Terms of Service", href: "https://tinyorange.app/terms" },
            { name: "Relic - Privacy Policy", href: "/relic/privacy" },
            { name: "Relic - Terms of Service", href: "/relic/terms" },
            { name: "Sentinel - Privacy Policy", href: "/sentinel/privacy" },
            { name: "Sentinel - Terms of Service", href: "/sentinel/terms" },
            { name: "ReadersGuild - Privacy Policy", href: "https://readers-guild.com/privacy" },
            { name: "ReadersGuild - Terms of Service", href: "https://readers-guild.com/terms" },
            { name: "DiggerInsights - Privacy Policy", href: "/legal/diggerinsights/privacy" },
            { name: "DiggerInsights - Terms of Service", href: "/legal/diggerinsights/terms" }
          ].map((link, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <a
                href={link.href}
                className="text-lg font-medium text-muted hover:text-foreground transition-colors underline underline-offset-8 decoration-border hover:decoration-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
