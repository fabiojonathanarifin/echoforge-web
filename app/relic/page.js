"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mic, FileText, Bell, Handshake, Brain, ChevronDown } from "lucide-react";
import { useState } from "react";

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
    title: "Voice-first capture",
    desc: "Speak for 30 seconds after any meeting. Relic transcribes and extracts names, commitments, preferences, and context. No typing required.",
  },
  {
    icon: FileText,
    title: "AI pre-meeting briefings",
    desc: "Before your next meeting, get a dossier: personal details to remember, open commitments, conversation openers, and a suggested ask.",
  },
  {
    icon: Bell,
    title: "Relationship cadence",
    desc: "Relic knows when a relationship is going cold. It nudges you before it's too late, calibrated by relationship type, not arbitrary timers.",
  },
  {
    icon: Handshake,
    title: "Commitment tracking",
    desc: "What did they promise you? What did you promise them? Bidirectional commitment tracking ensures nothing falls through the cracks.",
  },
  {
    icon: Brain,
    title: "Full relationship context",
    desc: "Food preferences, family details, hobbies, challenges, shared history. Everything you learn about someone, organized and searchable.",
  },
];

const faqs = [
  {
    q: "How is Relic different from a regular CRM?",
    a: "CRMs are built for pipelines and deal tracking. Relic is built for people. It captures the human details: what someone's kids are named, what they promised you over coffee, what topics light them up. The kind of context that makes relationships feel real.",
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
    q: "How much does it cost?",
    a: "Relic is free for up to 10 contacts with 50 AI extractions per month. Pro unlocks unlimited contacts, 500 monthly extractions, and priority processing for $9.99/month or $79.99/year.",
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
              href="https://apps.apple.com"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: AMBER, color: BG }}
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xs tracking-[0.2em] uppercase mb-8"
            style={{ color: TEXT_TERTIARY, fontFamily: mono }}
          >
            Personal relationship intelligence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl leading-[1.08] mb-8"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            You remember every deal.
            <br />
            <span style={{ color: AMBER }}>Now remember every person.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl"
            style={{ color: TEXT_SECONDARY }}
          >
            Relic captures what matters after every conversation and prepares you
            before the next one. Voice in, briefing out. For founders who build
            relationships, not just pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: AMBER, color: BG }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all hover:bg-white/5 border"
              style={{ borderColor: BORDER }}
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </section>

      {/* PAIN POINT */}
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
              className="text-2xl md:text-3xl leading-relaxed"
              style={{ color: TEXT_SECONDARY }}
            >
              You meet 20 people a week. You remember the deals, the intros, the
              follow-ups. But you forget their daughter&apos;s name. You forget they&apos;re
              vegan. You forget what you promised them three months ago.{" "}
              <span className="text-white">
                The details that make people feel known? Those are the first to go.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>

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
              You&apos;re not looking for a sales CRM. You don&apos;t need deal stages or lead
              scoring. You need to remember that your co-investor&apos;s wife just had a baby,
              that your mentor prefers oat milk, and that you promised to intro someone to
              your LP three weeks ago.
            </p>
            <p>
              Relic is for people who know that relationships compound, and that the
              small details are what make them real.
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
            Download Relic and walk in knowing exactly who you&apos;re talking to, what
            you promised them, and what to say next.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: AMBER, color: BG }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
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
