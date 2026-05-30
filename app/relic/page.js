"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic, FileText, Bell, Handshake, Brain, ChevronDown } from "lucide-react";
import { useState } from "react";

const CULTURAL_PROOFS = [
  {
    name: "Bill Clinton",
    proof: "Kept a box of 10,000 index cards. Every person he met, every detail. Decades later he would remember your mother's name.",
  },
  {
    name: "Jim Farley",
    proof: "Greeted 50,000 people by name and asked about their families. That memory helped run the campaign that elected a President.",
  },
  {
    name: "The Mackay 66",
    proof: "America's best salesman kept a 66-question dossier on every client. Their kids, their goals, the last thing they worried about.",
  },
];

const AMBER = "#F59E0B";
const BG = "#0C0A09";
const SURFACE = "#1C1917";
const CARD = "#211E1B";
const BORDER = "#292524";
const TEXT = "#FAFAF9";
const TEXT_SECONDARY = "#A8A29E";
const TEXT_TERTIARY = "#78716C";

const serif = "'DM Serif Display', Georgia, serif";
const mono = "Menlo, 'Courier New', monospace";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const features = [
  {
    icon: Mic,
    title: "Just talk for 30 seconds",
    desc: "Walk out of a meeting, hit record, say what happened. Relic pulls out the names, the commitments, the things they care about. No typing, no forms.",
  },
  {
    icon: FileText,
    title: "Walk in knowing their kids' names",
    desc: "Before you see them again, open the briefing. Who they are, what to remember, three ways to open, the thing you owe them, and the ask you came for.",
  },
  {
    icon: Bell,
    title: "Reach out before they go cold",
    desc: "Relic nudges you when a relationship needs attention, paced by how close you are, not an arbitrary timer. The people who matter never fall off your radar.",
  },
  {
    icon: Handshake,
    title: "Keep every promise you made",
    desc: "What they promised you, what you promised them. Both sides tracked, so the intro you offered over coffee actually happens.",
  },
  {
    icon: Brain,
    title: "Remember the details that make people feel seen",
    desc: "Their daughter's recital, the wine they love, the project keeping them up at night. Everything you learn about someone, ready when you need it.",
  },
];

const faqs = [
  {
    q: "What exactly is Relic?",
    a: "Relic is the briefing you walk in with. After you meet someone, you talk for 30 seconds. Before you see them again, Relic hands you what to remember, the promises still open between you, three ways to open, and the ask you came for. The prep a chief of staff would do for you, on everyone you meet.",
  },
  {
    q: "How does the voice capture work?",
    a: "After a meeting, tap record and speak naturally for 30 to 90 seconds. Relic transcribes your words, then uses AI to extract structured details: names, roles, commitments, preferences, and a summary. You review everything before it's saved. Nothing is stored without your confirmation.",
  },
  {
    q: "Is my data private?",
    a: "Completely. All data is private to your account, protected by row-level security. Voice recordings are deleted from our servers after processing. We don't sell your data and we don't use it to train AI models. You can export or delete everything at any time.",
  },
  {
    q: "What does a pre-meeting briefing include?",
    a: "A quick cheat sheet of personal facts (food preferences, family, hobbies), key things to remember, three conversation openers, open commitments (what you owe them and what they owe you), a venue suggestion, and a recommended follow-up action.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. You can record voice notes without an internet connection. They queue locally and sync automatically when you're back online. Your recently viewed contacts and briefings are cached for offline access.",
  },
  {
    q: "What will it cost?",
    a: "Early access members get first look and launch pricing. When Relic opens, it runs $9.99 weekly or $199 yearly. Join the list and you will hear before anyone else.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer select-none"
      style={{ borderColor: BORDER }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-6 gap-4">
        <h3 className="text-lg font-semibold text-white leading-snug">{q}</h3>
        <ChevronDown
          size={20}
          style={{
            color: TEXT_TERTIARY,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
          }}
        />
      </div>
      <div
        style={{
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.25s ease",
        }}
      >
        <p className="pb-6 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
          {a}
        </p>
      </div>
    </div>
  );
}

// PLACEHOLDER: no capture backend wired yet. Email is validated and the UI
// confirms, but nothing is persisted. When a backend exists (a /api/waitlist
// route or a supabase table), POST the email here.
function WaitlistForm({ size = "default" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError("Enter a valid email.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const padY = size === "large" ? "py-4" : "py-3.5";

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl px-5 ${padY} border`}
        style={{ borderColor: BORDER, backgroundColor: CARD }}
      >
        <span style={{ color: AMBER }} className="text-sm font-semibold">
          You are on the list.
        </span>
        <span className="text-sm" style={{ color: TEXT_SECONDARY }}>
          We will reach out before launch.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className={`flex-1 rounded-xl px-5 ${padY} text-base outline-none border focus:border-[#F59E0B] transition-colors`}
          style={{ backgroundColor: CARD, borderColor: BORDER, color: TEXT }}
        />
        <button
          type="submit"
          className={`inline-flex items-center justify-center rounded-xl px-7 ${padY} font-semibold text-base transition-all hover:brightness-110 active:scale-95 whitespace-nowrap`}
          style={{ backgroundColor: AMBER, color: BG }}
        >
          Get early access
        </button>
      </div>
      {error ? (
        <p className="mt-2 text-sm" style={{ color: "#F87171" }}>
          {error}
        </p>
      ) : (
        <p className="mt-3 text-sm" style={{ color: TEXT_TERTIARY }}>
          Early access is rolling out now. No spam, just your invite.
        </p>
      )}
    </form>
  );
}

function SampleBrief() {
  const sections = [
    {
      label: "Remember",
      lines: ["Wife Dana, twins started kindergarten", "Trying to cut back on coffee, into matcha now"],
    },
    {
      label: "Open loops",
      lines: ["You promised an intro to your LP", "He owes you the deck from the offsite"],
    },
    {
      label: "Openers",
      lines: ["Ask how the twins are settling in", "Bring up the matcha place near his office"],
    },
    {
      label: "The ask",
      lines: ["Get him to commit to the advisor call next week"],
    },
  ];

  return (
    <div
      className="rounded-2xl border p-1.5"
      style={{ borderColor: BORDER, backgroundColor: SURFACE }}
    >
      {/* PLACEHOLDER: drop the real briefing screenshot or screen recording here */}
      <div
        className="rounded-xl px-6 pt-6 pb-7"
        style={{ backgroundColor: CARD }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white font-semibold text-lg leading-tight">Marcus Reed</p>
            <p className="text-sm" style={{ color: TEXT_TERTIARY }}>
              Partner, Northline Capital
            </p>
          </div>
          <span
            className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-md"
            style={{ color: AMBER, backgroundColor: "rgba(245,158,11,0.1)", fontFamily: mono }}
          >
            Sample brief
          </span>
        </div>
        <div className="space-y-5">
          {sections.map((s) => (
            <div key={s.label}>
              <p
                className="text-[11px] tracking-[0.18em] uppercase mb-2"
                style={{ color: AMBER, fontFamily: mono }}
              >
                {s.label}
              </p>
              <ul className="space-y-1.5">
                {s.lines.map((line) => (
                  <li
                    key={line}
                    className="text-[15px] leading-snug flex gap-2.5"
                    style={{ color: TEXT_SECONDARY }}
                  >
                    <span style={{ color: TEXT_TERTIARY }}>-</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RelicPage() {
  return (
    <div
      className="min-h-screen selection:bg-[#F59E0B]/20 selection:text-[#F59E0B]"
      style={{ backgroundColor: BG, color: TEXT, fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* NAV */}
      <nav className="border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/relic" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/asset/relic/icon-trasnparent-bg.png"
              alt="Relic"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-white font-semibold text-lg">Relic</span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-sm hover:text-white transition-colors hidden sm:block" style={{ color: TEXT_SECONDARY }}>
              How it works
            </a>
            <a href="#features" className="text-sm hover:text-white transition-colors hidden sm:block" style={{ color: TEXT_SECONDARY }}>
              Features
            </a>
            <a href="#faq" className="text-sm hover:text-white transition-colors hidden sm:block" style={{ color: TEXT_SECONDARY }}>
              FAQ
            </a>
            <a
              href="#early-access"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: AMBER, color: BG }}
            >
              Get early access
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="early-access" className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-xs tracking-[0.2em] uppercase mb-7"
              style={{ color: TEXT_TERTIARY, fontFamily: mono }}
            >
              The briefing the powerful always had
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-6xl leading-[1.08] mb-7"
              style={{ fontFamily: serif, fontWeight: 400 }}
            >
              Walk into every meeting like you have a{" "}
              <span style={{ color: AMBER }}>chief of staff who remembers everyone.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl leading-relaxed mb-9 max-w-xl"
              style={{ color: TEXT_SECONDARY }}
            >
              Record a 30-second voice note after you meet someone. Relic remembers
              what matters and briefs you before you see them again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-xl"
            >
              <WaitlistForm size="large" />
              <a
                href="#sample-brief"
                className="inline-block mt-5 text-base font-semibold text-white hover:opacity-80 transition-opacity"
              >
                See a sample brief
                <span style={{ color: AMBER }}> {">"}</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            id="sample-brief"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SampleBrief />
          </motion.div>
        </div>
      </section>

      {/* STAKES + PAIN POINT */}
      <div className="border-y" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl mb-8"
              style={{ color: AMBER, fontFamily: serif, fontWeight: 400 }}
            >
              The most prepared person in the room usually wins it.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-2xl md:text-3xl leading-relaxed"
              style={{ color: TEXT_SECONDARY }}
            >
              You meet 20 people a week. You remember the deals, the intros, the
              follow-ups. But you forget their daughter&apos;s name. You forget they&apos;re
              vegan. You forget what you promised them three months ago.{" "}
              <span className="text-white">
                The details that make people feel seen are the first to go.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* CULTURAL PROOF */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: TEXT_TERTIARY, fontFamily: mono }}
          >
            The pattern
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl mb-16"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            They all had a system.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {CULTURAL_PROOFS.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="rounded-2xl p-7 border"
              style={{ borderColor: BORDER, backgroundColor: SURFACE }}
            >
              <p
                className="text-sm tracking-[0.12em] uppercase mb-4"
                style={{ color: AMBER, fontFamily: mono }}
              >
                {p.name}
              </p>
              <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                {p.proof}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-2xl md:text-3xl mt-16 max-w-2xl"
          style={{ fontFamily: serif, fontWeight: 400 }}
        >
          They had a person who remembered everyone.{" "}
          <span style={{ color: AMBER }}>Now you have an app.</span>
        </motion.p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: TEXT_TERTIARY, fontFamily: mono }}
          >
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl mb-20"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            30 seconds after a meeting.
            <br />
            <span style={{ color: TEXT_TERTIARY }}>Fully prepared before the next.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-16"
        >
          {[
            {
              num: "01",
              title: "Speak",
              text: "After any meeting, record a quick voice note. Talk naturally. Mention names, what you discussed, what they care about, what was promised.",
            },
            {
              num: "02",
              title: "Review",
              text: "Relic transcribes and extracts structured details: names, roles, commitments, food preferences, family, interests. You confirm before anything is saved.",
            },
            {
              num: "03",
              title: "Arrive prepared",
              text: "Before your next meeting, open the contact's briefing. Cheat sheet, conversation openers, open commitments, venue suggestion. All generated from your own notes.",
            },
          ].map((step) => (
            <motion.div key={step.num} variants={fadeUp}>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-6"
                style={{ color: AMBER, fontFamily: mono }}
              >
                {step.num}
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-t" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: TEXT_TERTIARY, fontFamily: mono }}
            >
              Capabilities
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl mb-16"
              style={{ fontFamily: serif, fontWeight: 400 }}
            >
              Everything you need to show up
              <br />
              <span style={{ color: TEXT_TERTIARY }}>like you remember everyone.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="space-y-0"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="flex gap-6 md:gap-8 py-8 border-t items-start"
                style={{ borderColor: BORDER }}
              >
                <div className="pt-1 shrink-0">
                  <f.icon size={22} style={{ color: TEXT_TERTIARY }} strokeWidth={1.5} />
                </div>
                <div className="flex-1 md:flex md:items-start md:gap-12">
                  <h3 className="text-lg font-semibold text-white mb-2 md:mb-0 md:w-56 md:shrink-0">
                    {f.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ color: TEXT_TERTIARY, fontFamily: mono }}
          >
            Built for
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl leading-snug mb-8"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            Founders, investors, and anyone whose network is their edge.
          </motion.h2>
          <motion.div variants={fadeUp} className="space-y-6 text-lg leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <p>
              You live by the people you know. You want to remember that your
              co-investor&apos;s wife just had a baby, that your mentor prefers oat milk,
              and that you promised to intro someone to your LP three weeks ago. Relic
              hands you all of it the moment you need it.
            </p>
            <p>
              For founders first, then anyone in sales and BD who knows that
              relationships compound, and that the small details are what make them real.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: TEXT_TERTIARY, fontFamily: mono }}
            >
              Questions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl mb-12"
              style={{ fontFamily: serif, fontWeight: 400 }}
            >
              Frequently asked
            </motion.h2>
          </motion.div>

          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl mb-6"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            Your next meeting is tomorrow.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg mb-10 leading-relaxed"
            style={{ color: TEXT_SECONDARY }}
          >
            Get early access and walk in knowing exactly who you are talking to, what
            you promised them, and what to say next.
          </motion.p>
          <motion.div variants={fadeUp} className="max-w-xl">
            <WaitlistForm size="large" />
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/asset/relic/icon-trasnparent-bg.png"
              alt="Relic"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-white font-semibold">Relic</span>
            <span className="text-xs" style={{ color: TEXT_TERTIARY }}>by EchoForge</span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: TEXT_SECONDARY }}>
            <Link href="/relic/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/relic/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              EchoForge
            </Link>
          </div>

          <p className="text-xs" style={{ color: TEXT_TERTIARY }}>
            © {new Date().getFullYear()} EchoForge
          </p>
        </div>
      </footer>

      {/* Google Font */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
