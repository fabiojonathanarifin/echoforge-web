import Link from "next/link";
import Image from "next/image";

// Dedicated, GEO-optimized FAQ page. Server component so every answer is in the
// initial HTML and visible (no accordion that hides text) — maximizing
// extractability for AI answer engines. Each answer is answer-first and
// self-contained (40-60 words) so it can be cited without surrounding context.
// FAQPage JSON-LD below mirrors the visible Q&A exactly.

const SITE = "https://echoforge.to";
const PAGE_URL = `${SITE}/vial/faq`;
const UPDATED = "June 12, 2026";

const ACCENT = "#00B380";
const ACCENT_DEEP = "#00805C";
const ACCENT_DIM = "#00B38018";
const BG = "#F4F4F5";
const SURFACE = "#FFFFFF";
const BORDER = "#D4D4D8";
const TEXT = "#09090B";
const TEXT_SECONDARY = "#52525B";
const TEXT_MUTED = "#A1A1AA";
const mono = "var(--font-jetbrains), 'JetBrains Mono', Menlo, monospace";

export const metadata = {
  title: "Vial FAQ: Peptide, GLP-1 & TRT Tracker Questions Answered",
  description:
    "Answers to common questions about Vial, the peptide, GLP-1, and TRT dose tracker for iPhone. How tracking works, supported peptides, GLP-1 and TRT support, pricing, privacy, and Vial AI.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Vial FAQ: Peptide, GLP-1 & TRT Tracker Questions Answered",
    description:
      "How tracking works, supported peptides, GLP-1 and TRT support, pricing, privacy, and Vial AI. The peptide app for iPhone.",
    siteName: "Vial",
  },
  robots: { index: true, follow: true },
};

const groups = [
  {
    title: "About Vial",
    items: [
      {
        q: "What is Vial?",
        a: "Vial is a peptide, GLP-1, and TRT dose tracker for iPhone. You log every dose, set on-device reminders, and keep your vials, schedule, bloodwork, and notes in one private place. It supports research peptides, compounded GLP-1s, and TRT. Vial is free to start.",
      },
      {
        q: "Who is Vial for?",
        a: "Vial is for anyone running a peptide or hormone protocol who wants a reliable log and timely reminders. Its two core users are compounded GLP-1 patients on semaglutide, tirzepatide, or retatrutide, and peptide users running compounds like BPC-157, TB-500, and CJC-1295. TRT users track testosterone and HCG.",
      },
      {
        q: "What devices does Vial run on?",
        a: "Vial runs on iPhone (iOS). It is not available on Android or as a web app yet. An Android version is on the roadmap but is not scheduled. The app is built for daily use, so most people open it from their phone several times a day.",
      },
      {
        q: "Is Vial a medical device?",
        a: "No. Vial is a personal tracking tool, not a medical device. It does not diagnose, treat, recommend, or calculate a dose. You enter a dose your clinician already prescribed, and Vial records and organizes it. Always confirm protocol decisions with a licensed clinician or compounding pharmacist.",
      },
    ],
  },
  {
    title: "Vials and inventory",
    items: [
      {
        q: "How does Vial track my vials?",
        a: "Vial tracks every vial from first dose to last. It shows how many doses remain, warns you before a vial expires or passes its fridge life, and estimates cost per dose and runway across your bottles. When one runs out, you replace it in a tap.",
      },
      {
        q: "Does Vial warn me before a vial expires?",
        a: "Yes. Vial shows fridge-life and expiry alerts so you do not use a vial that has gone bad. Per-peptide shelf life is built in, so compounded GLP-1 vials, research peptides, and pre-mixed TRT esters each get the right window.",
      },
      {
        q: "Does Vial track peptide blends and stacks?",
        a: "Yes. Vial tracks multi-peptide blends such as KLOW and GLOW, plus custom stacks. You record the components and Vial keeps the blend in your inventory and dose history alongside your single-peptide protocols.",
      },
      {
        q: "Can Vial show my cost per dose?",
        a: "Yes. Enter what you paid for a vial and Vial estimates your real cost per dose and how long your current inventory will last. It is a simple way to see what a protocol actually costs over a month or a year.",
      },
    ],
  },
  {
    title: "Peptides and compounds",
    items: [
      {
        q: "What peptides does Vial support?",
        a: "Vial supports 15 built-in peptides: BPC-157, TB-500, CJC-1295 with and without DAC, Ipamorelin, GHK-Cu, semaglutide, tirzepatide, retatrutide, Epitalon, NAD+, MOTS-c, Tesamorelin, Sermorelin, and PT-141. Testosterone and HCG are included for TRT. Custom peptide entry covers anything not in the list.",
      },
      {
        q: "Does Vial work for GLP-1s like semaglutide and tirzepatide?",
        a: "Yes. Vial is built for compounded GLP-1 users. It tracks semaglutide, tirzepatide, and retatrutide protocols, logs each weekly dose, and manages the vial in your inventory. Brand pens like Wegovy and Zepbound are supported too.",
      },
      {
        q: "Can Vial track compounded GLP-1 from a pharmacy?",
        a: "Yes. Compounded GLP-1 usually ships as a vial plus bacteriostatic water. You add the vial to Vial's inventory, set your prescribed schedule, and Vial logs each dose and tracks the bottle until it runs out.",
      },
      {
        q: "Does Vial work for TRT?",
        a: "Yes. Vial supports testosterone and HCG for TRT protocols. You can track injection schedules, rotate sites, and log bloodwork. Pre-mixed oil esters use the manufacturer expiry rather than a fridge-life window, and Vial applies the right one automatically.",
      },
      {
        q: "Can I track BPC-157 and TB-500?",
        a: "Yes. BPC-157 and TB-500 are built-in, including common stacks. Vial schedules doses, logs them with a single tap, and runs on and off cycles for cycled peptides.",
      },
    ],
  },
  {
    title: "Tracking and reminders",
    items: [
      {
        q: "How does Vial track doses?",
        a: "You save a protocol once with a schedule, then log each dose with a single tap. Vial uses three-state logging, capturing logged, skipped, and missed doses so your history stays accurate. A calendar timeline shows month, week, year, and cycle views, plus streaks across all active protocols.",
      },
      {
        q: "Do Vial reminders work offline?",
        a: "Yes. Every reminder is scheduled locally on your device, so they fire with no backend and no internet. Tapping a dose-due notification pre-fills your log sheet, and you can confirm in under three seconds. Vial AI is the only feature that needs a connection.",
      },
      {
        q: "Does Vial rotate injection sites?",
        a: "Yes. Vial suggests your next injection site based on your last three sites, helping you avoid repeating the same spot. Site rotation is logged with each dose so you can see your pattern over time on the body map.",
      },
      {
        q: "Can I export my data?",
        a: "Yes. Vial exports a CSV of your dose history for a spreadsheet or your doctor, and a full JSON backup containing every protocol, vial, log, metric, and side-effect entry. Because Vial has no cloud sync, the backup file is how you move data to a new phone.",
      },
    ],
  },
  {
    title: "Vial AI",
    items: [
      {
        q: "What is Vial AI?",
        a: "Vial AI is an educational chat assistant included with every paid tier. It knows your active protocol for context and explains peptide mechanisms, half-lives, technique principles, and published prescribing information. It streams responses from a hosted model, so it needs an internet connection.",
      },
      {
        q: "Can Vial AI give medical or dosing advice?",
        a: "No. Vial AI is educational only. It cannot diagnose, prescribe, or recommend a specific dose, dose change, or timing. It is configured to refuse personalized clinical questions and redirect you to your prescriber. Always confirm any decision with a licensed clinician.",
      },
    ],
  },
  {
    title: "Privacy and data",
    items: [
      {
        q: "Is my Vial data private?",
        a: "Yes. All protocol data, dose logs, body metrics, bloodwork, and photos are stored on your device in on-device SQLite. Nothing is uploaded to a Vial server, no account is required, and Vial does not track you across other apps or websites.",
      },
      {
        q: "Does Vial require an account?",
        a: "No. Vial has no sign-up and no login. You open the app and start using it. Because there is no account and no cloud, your data lives only on your device, which is why exporting a backup before switching phones matters.",
      },
      {
        q: "What does Vial do with Apple Health data?",
        a: "With your permission, Vial reads metrics like weight and resting heart rate to show trends, and writes back weight, mood, and side effects so your Health app stays current. All of this happens on your device and is never uploaded to Vial's servers. You can revoke access any time.",
      },
    ],
  },
  {
    title: "Pricing and purchases",
    items: [
      {
        q: "Is Vial free?",
        a: "Yes. Vial is free to start: one active protocol, your first vial tracked to the last dose, 14 days of history, bloodwork, body metrics, and progress photos, plus one AI coach message. Premium unlocks unlimited protocols, full history, CSV export, and unlimited Vial AI.",
      },
      {
        q: "How much does Vial cost?",
        a: "Vial Monthly is $14.99 and Vial Yearly is $49.99, with a $29.99 first-year intro for new subscribers. Vial Lifetime is $99.99 one time. The AI coach is included with every paid tier, and core dose tracking stays free.",
      },
      {
        q: "What is the refund policy?",
        a: "All purchases are processed by Apple through the App Store, so refunds follow Apple's refund policy. Request a refund directly from Apple at reportaproblem.apple.com. Vial cannot issue refunds because Apple controls the transaction.",
      },
      {
        q: "How do I restore a purchase on a new phone?",
        a: "Open Vial, go to Settings, and tap Restore Purchases, or use the Restore button on the paywall. As long as you are signed into the same Apple ID that made the purchase, your access reactivates. Vial Lifetime also supports Family Sharing.",
      },
    ],
  },
  {
    title: "Comparisons",
    items: [
      {
        q: "What is the best peptide tracker app?",
        a: "A peptide tracker should handle three things: any peptide rather than one drug, reliable dose logging, and timely reminders. Vial combines a three-state tracker for any compound, vial inventory, on-device reminders, and an educational AI coach in one iPhone app. The right choice depends on whether you want tracking, inventory, and coaching in one place.",
      },
      {
        q: "How is Vial different from a GLP-1-only tracker?",
        a: "Most GLP-1 trackers cover one drug. Vial tracks compounded GLP-1s, research peptides, and TRT in the same app, with vial inventory, injection site rotation, and bloodwork. If you run more than semaglutide, that breadth is the difference.",
      },
      {
        q: "Is there a free peptide tracker?",
        a: "Yes. Vial is free to start on iPhone with no account. The free tier includes one active protocol, your first vial tracked end to end, 14 days of history, bloodwork, body metrics, and progress photos, plus one AI coach message.",
      },
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allItems.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Vial", item: `${SITE}/vial` },
    { "@type": "ListItem", position: 2, name: "FAQ", item: PAGE_URL },
  ],
};

export default function VialFAQPage() {
  const ldHtml = [faqJsonLd, breadcrumbJsonLd]
    .map((d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`)
    .join("");

  return (
    <div style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div dangerouslySetInnerHTML={{ __html: ldHtml }} />

      {/* NAV */}
      <nav className="border-b" style={{ borderColor: BORDER, backgroundColor: "rgba(244,244,245,0.85)" }}>
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/vial" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/asset/vial/icon.png" alt="Vial" width={30} height={30} className="rounded-lg" />
            <span className="font-bold text-base tracking-tight" style={{ color: TEXT }}>Vial</span>
          </Link>
          <Link
            href="/vial"
            className="text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: ACCENT_DEEP }}
          >
            Back to Vial
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* HEADER + definition block */}
        <header className="mb-14">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: ACCENT_DEEP, fontFamily: mono }}>
            Vial FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 leading-tight" style={{ color: TEXT }}>
            Questions about Vial, answered
          </h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: TEXT_SECONDARY }}>
            Vial is a peptide, GLP-1, and TRT dose tracker for iPhone. You log every dose, set
            on-device reminders, and keep your vials, schedule, bloodwork, and notes in one private
            place. It supports BPC-157, TB-500, GLP-1s like semaglutide and tirzepatide, TRT, and
            custom compounds. Vial is free to start.
          </p>
          <p className="text-sm" style={{ color: TEXT_MUTED }}>
            Last updated {UPDATED}
          </p>
        </header>

        {/* Quick links to sections */}
        <nav aria-label="FAQ sections" className="mb-16 rounded-2xl p-5" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}>
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: TEXT_MUTED }}>
            On this page
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {groups.map((g) => (
              <a
                key={g.title}
                href={`#${slug(g.title)}`}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: ACCENT_DEEP }}
              >
                {g.title}
              </a>
            ))}
          </div>
        </nav>

        {/* GROUPS */}
        {groups.map((g) => (
          <section key={g.title} id={slug(g.title)} className="mb-14 scroll-mt-24">
            <h2 className="text-2xl font-black tracking-tight mb-7" style={{ color: TEXT }}>
              {g.title}
            </h2>
            <div className="space-y-7">
              {g.items.map((it) => (
                <div key={it.q}>
                  <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: TEXT }}>
                    {it.q}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                    {it.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center mt-4" style={{ backgroundColor: ACCENT_DIM, border: `1px solid ${ACCENT}33` }}>
          <h2 className="text-2xl font-black tracking-tight mb-3" style={{ color: TEXT }}>
            Ready to try Vial?
          </h2>
          <p className="text-sm mb-6" style={{ color: TEXT_SECONDARY }}>
            Vial is free to start. Download Vial on iPhone.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ backgroundColor: TEXT, color: SURFACE }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>

        {/* Related */}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ borderColor: BORDER, color: TEXT_SECONDARY }}>
          <Link href="/vial" className="hover:opacity-70 transition-opacity">Vial home</Link>
          <Link href="/vial/support" className="hover:opacity-70 transition-opacity">Support</Link>
          <Link href="/vial/privacy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
          <Link href="/vial/terms" className="hover:opacity-70 transition-opacity">Terms of Use</Link>
        </div>
      </main>
    </div>
  );
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
