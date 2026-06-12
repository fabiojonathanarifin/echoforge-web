"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mic,
  BookOpen,
  Bell,
  Lock,
  ShieldCheck,
  Smartphone,
  Check,
  MessageCircleQuestion,
} from "lucide-react";

const ACCENT = "#8C2F2F";
const ACCENT_SOFT = "rgba(140,47,47,0.08)";
const BRASS = "#A67C3D";
const SUCCESS = "#3E6B4F";
const BG = "#F6F2EA";
const SURFACE = "#EFE9DD";
const CARD = "#FDFBF6";
const BORDER = "#E2DACB";
const TEXT = "#1C1917";
const TEXT_SECONDARY = "#6E6759";
const TEXT_MUTED = "#A39B8B";

const serif = "Georgia, 'Times New Roman', serif";
const mono = "'JetBrains Mono', Menlo, 'Courier New', monospace";

const WEB_APP_URL = "https://app.almanack.echoforge.to";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const steps = [
  {
    icon: Mic,
    label: "Step 1",
    title: "Dump it, anywhere.",
    desc: "Talk for a minute on your phone, or paste the mess at your desk. The pricing call. The hire you are leaning toward. The intro you promised a client by Friday. No formatting, no structure required.",
  },
  {
    icon: BookOpen,
    label: "Step 2",
    title: "Almanack structures it.",
    desc: "The ramble becomes a clean record: decisions with the reasoning behind them, commitments owed to others, tasks owed to yourself. Each one filed, dated, and searchable.",
  },
  {
    icon: Bell,
    label: "Step 3",
    title: "The right memory comes back.",
    desc: "Ask \"what did I decide about pricing in March\" and get the answer with your original reasoning. Every promise gets a reminder before it slips. Old decisions resurface when they matter again.",
  },
];

const privacyPoints = [
  {
    icon: Mic,
    title: "Your voice never leaves your phone",
    desc: "Transcription runs entirely on-device with Whisper. Audio is never uploaded anywhere and is deleted after transcription by default.",
  },
  {
    icon: Lock,
    title: "Encrypted and walled off",
    desc: "Your memory syncs encrypted between your phone and your desk. In the database, row-level security isolates your data from everyone else's, enforced by the database itself. It is never used to train anything.",
  },
  {
    icon: Smartphone,
    title: "Yours to take or erase",
    desc: "Export your entire memory as markdown anytime. Delete your account and every entry, attachment, and key goes with it. Delete means delete.",
  },
  {
    icon: ShieldCheck,
    title: "Minimal AI surface",
    desc: "AI providers only ever see transcript text, sent through our proxy to structure your notes and answer your questions. No audio, no database access, no card data.",
  },
];

function AlmanackMark({ size = 64 }) {
  return (
    <img
      src="/almanack-icon.png"
      alt="Almanack"
      width={size}
      height={size}
      className="rounded-2xl"
      style={{
        border: `1px solid ${BORDER}`,
        boxShadow: "0 12px 32px rgba(28,25,23,0.10)",
      }}
    />
  );
}

export default function AlmanackPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: BG,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b"
        style={{ backgroundColor: `${BG}E6`, borderColor: BORDER }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/almanack"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <AlmanackMark size={32} />
            <span
              className="font-bold text-lg tracking-tight"
              style={{ color: TEXT }}
            >
              Almanack
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="#how"
              className="text-sm hidden sm:block transition-colors hover:text-[#1C1917]"
              style={{ color: TEXT_SECONDARY }}
            >
              How it works
            </a>
            <a
              href="#privacy"
              className="text-sm hidden sm:block transition-colors hover:text-[#1C1917]"
              style={{ color: TEXT_SECONDARY }}
            >
              Privacy
            </a>
            <a
              href="#pricing"
              className="text-sm hidden sm:block transition-colors hover:text-[#1C1917]"
              style={{ color: TEXT_SECONDARY }}
            >
              Pricing
            </a>
            <a
              href={WEB_APP_URL}
              className="px-5 py-2 rounded-lg text-sm font-bold transition-all hover:brightness-110 active:scale-[0.98]"
              style={{ backgroundColor: ACCENT, color: CARD }}
            >
              Open the app
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${ACCENT}0F 0%, transparent 65%)`,
          }}
        />

        <div className="max-w-3xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center text-center pt-16 pb-24"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <AlmanackMark size={72} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{
                  color: ACCENT,
                  backgroundColor: ACCENT_SOFT,
                  border: `1px solid ${ACCENT}33`,
                  fontFamily: mono,
                }}
              >
                Decision memory for operators
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: serif, fontWeight: 700 }}
            >
              Remember every decision you make,{" "}
              <span style={{ color: ACCENT }}>and never drop a follow-up.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg mb-10 leading-relaxed max-w-xl"
              style={{ color: TEXT_SECONDARY }}
            >
              Talk for a minute a day. Almanack turns the ramble into
              structured memory: decisions with the reasoning, commitments
              owed to others, tasks owed to yourself. Then it brings the right
              one back exactly when you need it.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <a
                href={WEB_APP_URL}
                className="flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ backgroundColor: ACCENT, color: CARD }}
              >
                Start on the web
              </a>
              <span
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: TEXT_SECONDARY }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iPhone app coming soon.{" "}
                <a
                  href="mailto:support@echoforge.to?subject=Almanack%20launch%20list"
                  className="underline underline-offset-4 transition-opacity hover:opacity-70"
                  style={{ color: ACCENT }}
                >
                  Get notified
                </a>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SHOT */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${BORDER}`,
              boxShadow: "0 32px 80px rgba(28,25,23,0.14)",
            }}
          >
            <img
              src="/almanack/web-today.png"
              alt="Almanack on the web: today's follow-ups and recent entries, organized from raw dumps"
              className="w-full block"
            />
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-sm mt-6"
            style={{ color: TEXT_SECONDARY }}
          >
            A raw ramble in. Decisions, follow-ups, and due dates out.
          </motion.p>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="border-t" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: serif, color: TEXT }}
            >
              Branson keeps a notebook. Dalio logs every decision. Gates
              schedules think weeks.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-lg mt-4"
              style={{ color: TEXT_SECONDARY }}
            >
              The best operators document.{" "}
              <span style={{ color: ACCENT }}>
                Almanack makes it take one minute.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: BRASS, fontFamily: mono }}
            >
              How it works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl tracking-tight"
              style={{ fontFamily: serif, fontWeight: 700 }}
            >
              One minute in. A second brain out.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {steps.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="rounded-2xl p-8"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: ACCENT_SOFT,
                    border: `1px solid ${ACCENT}26`,
                  }}
                >
                  <s.icon size={22} style={{ color: ACCENT }} />
                </div>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-3"
                  style={{ color: BRASS, fontFamily: mono }}
                >
                  {s.label}
                </p>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: TEXT_SECONDARY }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-16 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
            style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
          >
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <MessageCircleQuestion
                size={20}
                style={{ color: ACCENT, flexShrink: 0, marginTop: 4 }}
              />
              <div>
                <p
                  className="text-lg leading-relaxed mb-2"
                  style={{ fontFamily: serif }}
                >
                  "What did I decide about pricing in March?"
                </p>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                  Ask your memory anything. Almanack answers from your own
                  records, with the date and the reasoning you gave at the
                  time. No more scrolling old notes hoping you wrote it down.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-xl overflow-hidden"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <img
                src="/almanack/web-ask.png"
                alt="Asking Almanack what was decided about pricing: the answer cites the original entry and date"
                className="w-full block"
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-sm mt-10 max-w-2xl mx-auto"
            style={{ color: TEXT_SECONDARY }}
          >
            One memory, every surface: capture on iPhone or at your desk, and
            connect Claude or any AI that speaks MCP to ask your decision log
            from wherever you already work.
          </motion.p>
        </div>
      </section>

      {/* PRIVACY */}
      <section
        id="privacy"
        className="border-t"
        style={{ borderColor: BORDER, backgroundColor: SURFACE }}
      >
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: BRASS, fontFamily: mono }}
            >
              Privacy
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl tracking-tight mb-6"
              style={{ fontFamily: serif, fontWeight: 700 }}
            >
              Your voice stays on your phone. Your memory stays yours.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed"
              style={{ color: TEXT_SECONDARY }}
            >
              Your decisions are the most sensitive data you have. Here is
              exactly how Almanack handles them, and every claim is documented
              in the privacy policy.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {privacyPoints.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="rounded-2xl p-8"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: ACCENT_SOFT,
                    border: `1px solid ${ACCENT}26`,
                  }}
                >
                  <p.icon size={20} style={{ color: ACCENT }} />
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: TEXT_SECONDARY }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-sm mt-10 max-w-2xl mx-auto"
            style={{ color: TEXT_SECONDARY }}
          >
            Full detail in the{" "}
            <Link
              href="/legal/almanack/privacy"
              className="underline underline-offset-4 hover:text-[#1C1917] transition-colors"
            >
              Privacy Policy
            </Link>
            . Every claim on this page is documented there.
          </motion.p>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="border-t"
        style={{ borderColor: BORDER, backgroundColor: BG }}
      >
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: BRASS, fontFamily: mono }}
            >
              Pricing
            </p>
            <h2
              className="text-3xl md:text-5xl tracking-tight mb-6"
              style={{ fontFamily: serif, fontWeight: 700 }}
            >
              A chief of staff costs over $200,000 a year.
            </h2>
            <p className="text-lg" style={{ color: TEXT_SECONDARY }}>
              Almanack remembers your decisions and commitments for less than
              a lunch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-8 flex flex-col"
              style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
            >
              <p
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: BRASS, fontFamily: mono }}
              >
                Monthly
              </p>
              <div className="mb-6">
                <span className="text-4xl font-black" style={{ color: BRASS }}>
                  $19
                </span>
                <span className="text-sm" style={{ color: TEXT_SECONDARY }}>
                  {" "}
                  / month
                </span>
              </div>
              <ul
                className="space-y-3 mb-8 text-sm flex-1"
                style={{ color: TEXT_SECONDARY }}
              >
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  Unlimited voice capture and memory
                </li>
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  Decision log, commitments, and reminders
                </li>
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  Ask questions about your own history
                </li>
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  Cancel anytime
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl p-8 flex flex-col relative"
              style={{ backgroundColor: CARD, border: `2px solid ${ACCENT}` }}
            >
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                style={{ backgroundColor: ACCENT, color: CARD, fontFamily: mono }}
              >
                7-day free trial
              </span>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: BRASS, fontFamily: mono }}
              >
                Annual
              </p>
              <div className="mb-2">
                <span className="text-4xl font-black" style={{ color: BRASS }}>
                  $190
                </span>
                <span className="text-sm" style={{ color: TEXT_SECONDARY }}>
                  {" "}
                  / year
                </span>
              </div>
              <p className="text-xs mb-6" style={{ color: TEXT_SECONDARY }}>
                Two months free versus monthly.
              </p>
              <ul
                className="space-y-3 mb-8 text-sm flex-1"
                style={{ color: TEXT_SECONDARY }}
              >
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  Everything in Monthly
                </li>
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  7 days free, full access, then $190/year
                </li>
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  Works out to about $0.52 a day
                </li>
                <li className="flex gap-2">
                  <Check size={14} style={{ color: SUCCESS, flexShrink: 0, marginTop: 3 }} />
                  Cancel anytime
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm mt-10" style={{ color: TEXT_SECONDARY }}>
            Subscriptions auto-renew through your Apple ID. Cancel anytime in
            your App Store settings.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="border-t"
        style={{ borderColor: BORDER, backgroundColor: SURFACE }}
      >
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight"
              style={{ fontFamily: serif, fontWeight: 700 }}
            >
              Your future self will ask what you decided today.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-10"
              style={{ color: TEXT_SECONDARY }}
            >
              Almanack will have the answer. Start at your desk today, the
              iPhone app is close behind.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={WEB_APP_URL}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ backgroundColor: ACCENT, color: CARD }}
              >
                Start on the web
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <AlmanackMark size={28} />
            <span className="font-bold text-sm" style={{ color: TEXT }}>
              Almanack
            </span>
            <span className="text-xs" style={{ color: TEXT_MUTED }}>
              by EchoForge
            </span>
          </div>

          <div
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm"
            style={{ color: TEXT_SECONDARY }}
          >
            <Link
              href="/legal/almanack/privacy"
              className="hover:text-[#1C1917] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/almanack/terms"
              className="hover:text-[#1C1917] transition-colors"
            >
              Terms
            </Link>
            <a
              href="mailto:support@echoforge.to"
              className="hover:text-[#1C1917] transition-colors"
            >
              Contact
            </a>
            <Link href="/" className="hover:text-[#1C1917] transition-colors">
              EchoForge
            </Link>
          </div>

          <p className="text-xs" style={{ color: TEXT_MUTED }}>
            &copy; {new Date().getFullYear()} EchoForge
          </p>
        </div>
      </footer>
    </div>
  );
}
