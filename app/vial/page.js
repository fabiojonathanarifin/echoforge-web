"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Bell,
  Sparkles,
  ChevronDown,
  Check,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

// Kept in sync with the dedicated FAQ page (app/vial/faq/page.js) and the
// FAQPage JSON-LD below. Answer-first, self-contained phrasing so AI answer
// engines can extract each block on its own (GEO).
const FAQ_UPDATED = "June 12, 2026";

// Light palette mirrors the mobile app's lightColors (constants/colors.js).
// The bright dark-mode mint #00E5A0 lacks contrast on white, so light mode
// uses the deeper brand green #00B380. Accent stays ~10% of pixels (CTAs,
// key words, checks). Phone bezel is graphite, inverting against the canvas.
const ACCENT = "#00B380";
const ACCENT_DIM = "#00B38018";
const ACCENT_DEEP = "#00805C";
const BG = "#F4F4F5";
const SURFACE = "#FFFFFF";
const SURFACE_HIGH = "#E8E8EA";
const BORDER = "#D4D4D8";
const BEZEL = "#1C1C1E";
const TEXT = "#09090B";
const TEXT_SECONDARY = "#52525B";
const TEXT_MUTED = "#A1A1AA";

const mono = "var(--font-jetbrains), 'JetBrains Mono', Menlo, monospace";

const CARD_SHADOW =
  "0 1px 2px rgba(9,9,11,0.04), 0 12px 32px -16px rgba(9,9,11,0.12)";
const PHONE_SHADOW =
  "0 40px 70px -28px rgba(9,9,11,0.35), 0 10px 24px -12px rgba(9,9,11,0.14)";

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

const AppStoreIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className="fill-current" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

function AppStoreButton({ large = false }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 rounded-xl font-bold transition-all hover:brightness-110 active:scale-[0.98] ${
        large ? "px-8 py-4 text-lg" : "px-7 py-3.5 text-base"
      }`}
      style={{ backgroundColor: TEXT, color: SURFACE, boxShadow: CARD_SHADOW }}
    >
      <AppStoreIcon size={large ? 22 : 20} />
      Download on the App Store
    </a>
  );
}

// Graphite iPhone frame. No notch, matching the app's PhoneFrame convention.
function PhoneFrame({ src, alt, w, h, priority = false }) {
  return (
    <div className="relative w-full" style={{ maxWidth: 300 }}>
      <div style={{ backgroundColor: BEZEL, borderRadius: 46, padding: 10, boxShadow: PHONE_SHADOW }}>
        <div style={{ borderRadius: 36, overflow: "hidden", backgroundColor: "#000" }}>
          <Image
            src={src}
            alt={alt}
            width={w}
            height={h}
            className="block w-full h-auto"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Activity,
    label: "Tracker",
    title: "Save your protocol once. Tap to log every dose.",
    desc: "Create protocols for daily, weekly, or custom schedules. Log each dose with a single tap from the lock-screen notification. Three-state logging captures logged, skipped, and missed doses so your history stays accurate. See your whole regimen and your patterns at a glance.",
    bullets: [
      "Streak tracking across all active protocols",
      "Smart injection site rotation based on your last 3 sites",
      "On/off cycle scheduling for cycled peptides",
      "Calendar timeline: month, week, year, and cycle Gantt views",
      "Body metrics, bloodwork, and progress photos",
      "CSV export and Vial 365 year-end share asset",
    ],
    reverse: true,
    image: "/asset/vial/screen-peptides.png",
    w: 1284,
    h: 2778,
  },
];

const trustStats = [
  { value: "55+", label: "peptides supported" },
  { value: "3-state", label: "dose logging" },
  { value: "100%", label: "on your device" },
  { value: "$0", label: "to start" },
];

const faqs = [
  {
    q: "What is Vial?",
    a: "Vial is a peptide, GLP-1, and TRT dose tracker for iPhone. You log every dose, set on-device reminders, and keep your vials, schedule, bloodwork, and notes in one private place. It supports BPC-157, TB-500, GLP-1s like semaglutide and tirzepatide, TRT, and custom compounds. Vial is free to start.",
  },
  {
    q: "Is Vial really free?",
    a: "Yes. Vial is free to start: one active protocol, your first vial tracked to the last dose, 14 days of history, bloodwork, body metrics, and progress photos, plus one AI coach message. Premium unlocks unlimited protocols, full history, CSV export, and unlimited Vial AI.",
  },
  {
    q: "Is my peptide data private?",
    a: "Yes. All protocol data, dose logs, and metrics are stored on your device in on-device SQLite. Nothing is uploaded, no account is required, and Vial does not track you across other apps or websites.",
  },
  {
    q: "What peptides does Vial support?",
    a: "Vial supports 15 built-in peptides: BPC-157, TB-500, CJC-1295 (with and without DAC), Ipamorelin, GHK-Cu, semaglutide, tirzepatide, retatrutide, Epitalon, NAD+, MOTS-c, Tesamorelin, Sermorelin, and PT-141, plus testosterone and HCG for TRT. Custom peptide entry covers anything else.",
  },
  {
    q: "How much does Vial cost?",
    a: "Vial Monthly is $14.99 and Vial Yearly is $49.99, with a $29.99 first-year intro for new subscribers. Vial Lifetime is $99.99 one time. The AI coach is included with every paid tier, and core dose tracking stays free.",
  },
  {
    q: "What is Vial AI?",
    a: "Vial AI is an educational chat assistant included with every paid tier. It explains peptide mechanisms, half-lives, technique principles, and published prescribing information. It cannot diagnose, prescribe, or recommend a dose, and is configured to redirect personalized clinical questions to your prescriber.",
  },
  {
    q: "Does Vial work for GLP-1 and TRT, not just peptides?",
    a: "Yes. Vial tracks compounded GLP-1 protocols like semaglutide, tirzepatide, and retatrutide, plus TRT and HRT regimens like testosterone, HCG, and ancillaries, alongside research peptides. Daily, weekly, and custom schedules are supported, including on and off cycle weeks.",
  },
  {
    q: "Does Vial work offline?",
    a: "Yes. Vial works fully offline with no account. Only Vial AI needs an internet connection, because it streams responses from a hosted model.",
  },
];

// FAQPage structured data for the landing page, matching the visible FAQ above.
// Helps AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Gemini)
// extract and cite each Q&A. The dedicated /vial/faq page carries the full set.
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b cursor-pointer select-none" style={{ borderColor: BORDER }} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between py-6 gap-4">
        <h3 className="text-base font-semibold leading-snug" style={{ color: TEXT }}>
          {q}
        </h3>
        <ChevronDown
          size={18}
          style={{
            color: TEXT_MUTED,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
            flexShrink: 0,
          }}
        />
      </div>
      <div
        style={{
          maxHeight: open ? 320 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.25s ease",
        }}
      >
        <p className="pb-6 leading-relaxed text-sm" style={{ color: TEXT_SECONDARY }}>
          {a}
        </p>
      </div>
    </div>
  );
}

function NotificationCard({ title, body, time, accent = false }) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-2xl"
      style={{
        backgroundColor: "rgba(255,255,255,0.92)",
        border: `1px solid ${BORDER}`,
        boxShadow: "0 14px 36px -18px rgba(9,9,11,0.22)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="flex items-center justify-center rounded-[10px] shrink-0"
        style={{ width: 38, height: 38, backgroundColor: accent ? ACCENT_DIM : "#0A0A0A" }}
      >
        {accent ? (
          <Check size={18} style={{ color: ACCENT }} strokeWidth={2.5} />
        ) : (
          <Image src="/asset/vial/icon.png" alt="" width={38} height={38} className="rounded-[10px]" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: TEXT_MUTED }}>
            Vial
          </span>
          <span className="text-[11px]" style={{ color: TEXT_MUTED, fontFamily: mono }}>
            {time}
          </span>
        </div>
        <p className="text-sm font-semibold leading-snug" style={{ color: TEXT }}>
          {title}
        </p>
        <p className="text-sm leading-snug mt-0.5" style={{ color: TEXT_SECONDARY }}>
          {body}
        </p>
      </div>
    </div>
  );
}

export default function VialPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BG, color: TEXT, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD).replace(/</g, "\\u003c") }}
      />

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b" style={{ backgroundColor: "rgba(244,244,245,0.8)", borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/vial" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/asset/vial/icon.png" alt="Vial" width={32} height={32} className="rounded-xl" />
            <span className="font-bold text-lg tracking-tight" style={{ color: TEXT }}>
              Vial
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {["Features", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm hidden sm:block transition-colors hover:opacity-70"
                style={{ color: TEXT_SECONDARY }}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all hover:brightness-105 active:scale-95"
              style={{ backgroundColor: ACCENT, color: SURFACE }}
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${ACCENT}14 0%, transparent 62%)` }}
        />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center pt-16 pb-24">
            {/* Left: text */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-start">
              <motion.div variants={fadeUp}>
                <Image
                  src="/asset/vial/icon.png"
                  alt="Vial icon"
                  width={72}
                  height={72}
                  priority
                  className="rounded-2xl mb-8"
                  style={{ boxShadow: `0 16px 40px ${ACCENT}33` }}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ color: ACCENT_DEEP, backgroundColor: ACCENT_DIM, border: `1px solid ${ACCENT}33`, fontFamily: mono }}
                >
                  {"For compounded GLP-1, TRT & peptide protocols"}
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5" style={{ color: TEXT }}>
                Track every peptide, GLP-1, and TRT dose, with an{" "}
                <span style={{ color: ACCENT }}>AI coach</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg mb-10 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                Log every dose, set reminders, and keep your whole protocol on
                your iPhone. Free to start.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <AppStoreButton />
                <a href="#features" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: TEXT_SECONDARY }}>
                  See how it works ↓
                </a>
              </motion.div>
            </motion.div>

            {/* Right: phone */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneFrame src="/asset/vial/screen-home.png" alt="Vial home screen" w={1170} h={2532} priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: ACCENT_DEEP, fontFamily: mono }}>
                  {s.value}
                </div>
                <div className="text-xs mt-1.5 uppercase tracking-wider" style={{ color: TEXT_MUTED }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div id="features">
        {features.map((f, i) => (
          <section key={f.label} className="border-b" style={{ borderColor: BORDER, backgroundColor: i % 2 === 0 ? BG : SURFACE }}>
            <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
              >
                <div className={f.reverse ? "md:order-2" : ""}>
                  <motion.p
                    variants={fadeUp}
                    className="text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
                    style={{ color: ACCENT_DEEP, fontFamily: mono }}
                  >
                    <f.icon size={13} strokeWidth={2} />
                    {f.label}
                  </motion.p>
                  <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight mb-5 leading-tight" style={{ color: TEXT }}>
                    {f.title}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8" style={{ color: TEXT_SECONDARY }}>
                    {f.desc}
                  </motion.p>
                  <motion.ul variants={stagger} className="space-y-3">
                    {f.bullets.map((b) => (
                      <motion.li key={b} variants={fadeUp} className="flex items-start gap-3 text-sm" style={{ color: TEXT_SECONDARY }}>
                        <Check size={14} style={{ color: ACCENT, flexShrink: 0, marginTop: 3 }} strokeWidth={2.5} />
                        {b}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <motion.div variants={fadeUp} className={`flex justify-center ${f.reverse ? "md:order-1" : ""}`}>
                  <PhoneFrame src={f.image} alt={`${f.label} screen`} w={f.w} h={f.h} />
                </motion.div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* REMINDERS */}
      <section className="border-b" style={{ borderColor: BORDER, backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
          >
            <div>
              <motion.p variants={fadeUp} className="text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2" style={{ color: ACCENT_DEEP, fontFamily: mono }}>
                <Bell size={13} strokeWidth={2} />
                Reminders
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight mb-5 leading-tight" style={{ color: TEXT }}>
                Notifications that fire on device. Always.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8" style={{ color: TEXT_SECONDARY }}>
                Every reminder is scheduled locally. No backend, no internet required. Tap the notification and your log sheet is pre-filled. Confirm in under 3 seconds and get back to your day.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {[
                  "Dose due notification at your scheduled time",
                  "Missed dose alert 2 hours after the window closes",
                  "Streak milestones at 7, 14, 30, 60, and 100 days",
                  "Vial freshness and expiry alerts before a bottle goes bad",
                  "Works fully offline, no account needed",
                ].map((b) => (
                  <motion.li key={b} variants={fadeUp} className="flex items-start gap-3 text-sm" style={{ color: TEXT_SECONDARY }}>
                    <Check size={14} style={{ color: ACCENT, flexShrink: 0, marginTop: 3 }} strokeWidth={2.5} />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={fadeUp}>
              <div
                className="rounded-[2rem] p-5 md:p-7 space-y-3"
                style={{ background: `linear-gradient(165deg, ${SURFACE_HIGH}, ${BG})`, border: `1px solid ${BORDER}` }}
              >
                <NotificationCard title="Semaglutide dose due" body="Tap and hold to log · 9:00 AM" time="now" />
                <NotificationCard title="14 day streak" body="Two weeks logged without a miss." time="8:00 AM" />
                <NotificationCard title="Dose logged" body="BPC-157 250 mcg · left delt" time="9:01 AM" accent />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VIAL AI */}
      <section className="border-b" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
          >
            <div className="md:order-2">
              <motion.p variants={fadeUp} className="text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2" style={{ color: ACCENT_DEEP, fontFamily: mono }}>
                <Sparkles size={13} strokeWidth={2} />
                Included with Vial
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight mb-5 leading-tight" style={{ color: TEXT }}>
                An AI coach that knows your protocol.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8" style={{ color: TEXT_SECONDARY }}>
                Ask about peptide mechanisms, half-lives, technique principles, and published prescribing information. Vial AI sees your active protocol for context. It is educational only, not a substitute for your prescriber.
              </motion.p>
              <motion.ul variants={stagger} className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                {["Peptide mechanisms", "Half-life and PK", "Technique principles", "Cycling theory"].map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex items-center gap-2.5 text-sm" style={{ color: TEXT_SECONDARY }}>
                    <Check size={14} style={{ color: ACCENT, flexShrink: 0 }} strokeWidth={2.5} />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeUp} className="text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
                Educational only. Not medical advice. Configured to refuse personalized clinical questions and redirect to your prescriber.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="md:order-1">
              <div className="rounded-3xl p-5 md:p-6" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}`, boxShadow: CARD_SHADOW }}>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b" style={{ borderColor: BORDER }}>
                  <div className="flex items-center justify-center rounded-xl" style={{ width: 32, height: 32, backgroundColor: ACCENT_DIM }}>
                    <Sparkles size={16} style={{ color: ACCENT }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: TEXT }}>
                    Vial AI
                  </span>
                  <span className="ml-auto text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md" style={{ color: TEXT_MUTED, backgroundColor: SURFACE_HIGH }}>
                    Educational
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-md text-sm" style={{ backgroundColor: ACCENT, color: SURFACE }}>
                      What is the half-life of BPC-157?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[88%] px-4 py-3 rounded-2xl rounded-bl-md text-sm leading-relaxed" style={{ backgroundColor: SURFACE_HIGH, color: TEXT }}>
                      BPC-157 has a short plasma half-life, on the order of a few hours, which is why most protocols split it into daily or twice-daily doses. For your specific timing, confirm with your prescriber.
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t text-[11px]" style={{ borderColor: BORDER, color: TEXT_MUTED }}>
                  <ShieldCheck size={13} style={{ color: ACCENT }} />
                  Not medical advice. Cannot prescribe or diagnose.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: TEXT_MUTED, fontFamily: mono }}>
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: TEXT }}>
              Frequently asked questions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm mb-12" style={{ color: TEXT_MUTED }}>
              Last updated {FAQ_UPDATED}
            </motion.p>
          </motion.div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/vial/faq"
              className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70"
              style={{ color: ACCENT_DEEP }}
            >
              Read the full Vial FAQ
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden" style={{ backgroundColor: ACCENT }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-white opacity-10 -translate-x-1/3 -translate-y-1/3 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-black opacity-10 translate-x-1/4 translate-y-1/4 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight" style={{ color: SURFACE }}>
              Built for the daily ritual.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg mb-10 font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
              The peptide app you open 2 to 5 times a day.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-[0.97]"
                style={{ backgroundColor: TEXT, color: SURFACE, boxShadow: "0 20px 50px -16px rgba(9,9,11,0.5)" }}
              >
                <AppStoreIcon size={22} />
                Download on the App Store
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderColor: BORDER, backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image src="/asset/vial/icon.png" alt="Vial" width={28} height={28} className="rounded-lg" />
            <span className="font-bold text-sm" style={{ color: TEXT }}>
              Vial
            </span>
            <span className="text-xs" style={{ color: TEXT_MUTED }}>
              by EchoForge
            </span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: TEXT_SECONDARY }}>
            <Link href="/vial/faq" className="hover:opacity-70 transition-opacity">FAQ</Link>
            <Link href="/vial/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
            <Link href="/vial/terms" className="hover:opacity-70 transition-opacity">Terms</Link>
            <Link href="/vial/support" className="hover:opacity-70 transition-opacity">Support</Link>
            <a href="mailto:support@echoforge.to" className="hover:opacity-70 transition-opacity">Contact</a>
            <Link href="/" className="hover:opacity-70 transition-opacity">EchoForge</Link>
          </div>

          <p className="text-xs" style={{ color: TEXT_MUTED }}>
            &copy; {new Date().getFullYear()} EchoForge
          </p>
        </div>
      </footer>
    </div>
  );
}
