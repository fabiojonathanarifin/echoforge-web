"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Activity,
  Bell,
  Sparkles,
  ChevronDown,
  Download,
  Check,
} from "lucide-react";
import { useState } from "react";

const MINT = "#00E5A0";
const MINT_DIM = "#00E5A033";
const BG = "#0A0A0A";
const SURFACE = "#141414";
const CARD = "#1F1F1F";
const BORDER = "#262626";
const TEXT = "#FFFFFF";
const TEXT_SECONDARY = "#A0A0A0";
const TEXT_MUTED = "#606060";

const mono = "'JetBrains Mono', Menlo, 'Courier New', monospace";

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

const features = [
  {
    icon: FlaskConical,
    label: "Calculator",
    title: "Stop doing dose math in your head.",
    desc: "Enter your vial size, bacteriostatic water volume, and target dose. Vial computes the reconstituted concentration, draw volume in mL, and exact syringe units. Switch between mcg and mg. Supports U-20, U-30, U-40, and U-100 syringes. Free forever, no purchase required.",
    bullets: [
      "15 preloaded peptide presets including BPC-157, TB-500, CJC-1295, Ipamorelin, GHK-Cu",
      "Compounded GLP-1 support: semaglutide, tirzepatide, retatrutide",
      "TRT cohort support: testosterone, HCG, ancillaries",
      "Custom peptide entry for anything not on the list",
      "Multi-peptide blend support for KLOW, GLOW, and custom stacks",
      "Save vials for instant recall across sessions",
      "Water Solver: input your target units and get the BAC water volume",
    ],
    reverse: false,
    image: "/asset/vial/feature-1-mock.png",
  },
  {
    icon: Activity,
    label: "Tracker",
    title: "Save your protocol once. Tap to log every dose.",
    desc: "Create protocols for daily, weekly, or custom schedules. Log each dose with a single tap from the lock-screen notification. Three-state logging captures logged, skipped, and missed doses so your history stays accurate. See your patterns on the calendar timeline.",
    bullets: [
      "Streak tracking across all active protocols",
      "Smart injection site rotation based on your last 3 sites",
      "On/off cycle scheduling for cycled peptides",
      "Calendar timeline: month, week, year, and cycle Gantt views",
      "Body metrics, bloodwork, and progress photos",
      "CSV export and Vial 365 year-end share asset",
    ],
    reverse: true,
    image: "/asset/vial/feature-2-mock.png",
  },
  {
    icon: Bell,
    label: "Reminders",
    title: "Notifications that fire on device. Always.",
    desc: "All reminders are scheduled locally. No backend, no internet required. Tap the notification and your log sheet is pre-filled. Confirm in under 3 seconds and get back to your day.",
    bullets: [
      "Dose due notification at your scheduled time",
      "Missed dose alert 2 hours after the window closes",
      "Streak milestones at 7, 14, 30, 60, and 100 days",
      "Vial freshness warnings before reconstitution expires",
      "Works fully offline, no account needed",
    ],
    reverse: false,
    image: "/asset/vial/feature-3-mock.png",
  },
];

const faqs = [
  {
    q: "Is the calculator really free?",
    a: "Yes. The reconstitution calculator is free forever, no purchase required. You can save one vial and one active protocol on the free tier. Premium unlocks unlimited protocols, full history, body metrics, bloodwork, progress photos, and Vial AI.",
  },
  {
    q: "Is my data private?",
    a: "All protocol data, logs, and metrics are stored on your device using on-device SQLite. Nothing is uploaded. No account is required. Vial does not track you across other apps or websites. See the Privacy Policy for the full data flow.",
  },
  {
    q: "What peptides are supported?",
    a: "15 presets: BPC-157, TB-500, CJC-1295 (with and without DAC), Ipamorelin, GHK-Cu, Semaglutide, Tirzepatide, Retatrutide, Epitalon, NAD+, MOTS-c, Tesamorelin, Sermorelin, PT-141. Plus testosterone and HCG for TRT users. Custom peptide entry for anything else.",
  },
  {
    q: "What does Vial cost?",
    a: "Monthly $14.99. Yearly $49.99 with $29.99 first-year intro for new subscribers. Lifetime $99.99 one-time. AI coach is included with every paid tier. The reconstitution calculator stays free forever.",
  },
  {
    q: "What does Vial AI do?",
    a: "Vial AI is an educational chat assistant. It explains peptide mechanisms, half-lives, technique principles, and published prescribing information. It cannot diagnose, prescribe, or recommend a specific dose. It is configured to refuse personalized clinical questions and redirect to your prescriber. Educational only, not medical advice.",
  },
  {
    q: "What syringes does Vial support?",
    a: "U-20, U-30, U-40, and U-100 insulin syringes. Select your syringe type and the calculator outputs the exact unit mark to draw to on your barrel.",
  },
  {
    q: "Does it work offline?",
    a: "Calculator and tracker, yes. Vial AI requires an internet connection because it streams responses from a hosted model.",
  },
  {
    q: "What is the refund policy?",
    a: "All purchases are processed by Apple through the App Store. Refunds are subject to Apple's refund policies. Contact Apple directly via reportaproblem.apple.com for any refund requests.",
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
        <h3 className="text-base font-semibold text-white leading-snug">{q}</h3>
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
          maxHeight: open ? 300 : 0,
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

export default function VialPage() {
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
            href="/vial"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/asset/vial/icon.png"
              alt="Vial"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="text-white font-bold text-lg tracking-tight">Vial</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="#features"
              className="text-sm hidden sm:block transition-colors hover:text-white"
              style={{ color: TEXT_SECONDARY }}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm hidden sm:block transition-colors hover:text-white"
              style={{ color: TEXT_SECONDARY }}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm hidden sm:block transition-colors hover:text-white"
              style={{ color: TEXT_SECONDARY }}
            >
              FAQ
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: MINT, color: "#0A0A0A" }}
            >
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-24">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${MINT}10 0%, transparent 65%)`,
          }}
        />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center pt-16 pb-24">
            {/* Left: text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col items-start"
            >
              <motion.div variants={fadeUp}>
                <Image
                  src="/asset/vial/icon.png"
                  alt="Vial icon"
                  width={72}
                  height={72}
                  className="rounded-2xl mb-8"
                  style={{ boxShadow: `0 16px 40px ${MINT}20` }}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                  style={{
                    color: MINT,
                    backgroundColor: MINT_DIM,
                    border: `1px solid ${MINT}30`,
                    fontFamily: mono,
                  }}
                >
                  Peptide Tracker · Calculator · AI Coach
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5"
              >
                The peptide calculator{" "}
                <span style={{ color: MINT }}>is free.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg mb-10 leading-relaxed"
                style={{ color: TEXT_SECONDARY }}
              >
                Reconstitute, dose, and track BPC-157, GLP-1s, TRT, and more on
                your iPhone. Save your protocol once. Tap to log every dose.
                See your patterns. AI coach included.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                <a
                  href="#"
                  className="flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:brightness-105 active:scale-[0.98]"
                  style={{ backgroundColor: TEXT, color: BG }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on the App Store
                </a>
                <a
                  href="#features"
                  className="text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: TEXT_SECONDARY }}
                >
                  Try the calculator ↓
                </a>
              </motion.div>
            </motion.div>

            {/* Right: phone frame with video placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-[280px] md:w-[320px]">
                <Image
                  src="/asset/vial/hero-framed-screenshot.png"
                  alt="Vial App Screenshot"
                  width={600}
                  height={1200}
                  className="w-full h-auto"
                  style={{ filter: "drop-shadow(0 40px 100px rgba(0,0,0,0.6))" }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES — one full section per feature */}
      <div id="features">
        {features.map((f, i) => (
          <section
            key={f.label}
            className="border-t"
            style={{
              borderColor: BORDER,
              backgroundColor: i % 2 === 0 ? SURFACE : BG,
            }}
          >
            <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className={`grid md:grid-cols-2 gap-16 md:gap-24 items-center`}
              >
                {/* Text block */}
                <div className={f.reverse ? "md:order-2" : ""}>
                  <motion.p
                    variants={fadeUp}
                    className="text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2"
                    style={{ color: MINT, fontFamily: mono }}
                  >
                    <f.icon size={13} strokeWidth={2} />
                    {f.label}
                  </motion.p>
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-black tracking-tight mb-5 leading-tight"
                  >
                    {f.title}
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="text-base leading-relaxed mb-8"
                    style={{ color: TEXT_SECONDARY }}
                  >
                    {f.desc}
                  </motion.p>
                  <motion.ul variants={stagger} className="space-y-3">
                    {f.bullets.map((b) => (
                      <motion.li
                        key={b}
                        variants={fadeUp}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: TEXT_SECONDARY }}
                      >
                        <Check
                          size={14}
                          style={{ color: MINT, flexShrink: 0, marginTop: 3 }}
                        />
                        {b}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Screenshot */}
                <motion.div
                  variants={fadeUp}
                  className={`flex justify-center ${f.reverse ? "md:order-1" : ""}`}
                >
                  <div className="relative w-[280px] md:w-[320px]">
                    <Image
                      src={f.image}
                      alt={f.label}
                      width={500}
                      height={1000}
                      className="w-full h-auto"
                      style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.5))" }}
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* VIAL AI TEASER */}
      <section
        className="border-t"
        style={{ borderColor: BORDER, backgroundColor: SURFACE }}
      >
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: MINT_DIM,
                  border: `1px solid ${MINT}30`,
                }}
              >
                <Sparkles size={28} style={{ color: MINT }} />
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: MINT, fontFamily: mono }}
            >
              Included with Vial
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-black tracking-tight mb-6"
            >
              Vial AI
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed mb-10"
              style={{ color: TEXT_SECONDARY }}
            >
              An educational chat assistant that knows your active protocol.
              Ask about peptide mechanisms, half-lives, technique principles,
              and published prescribing information. Not a substitute for your
              prescriber.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center mb-12">
              <div className="relative w-[280px] md:w-[320px]">
                <Image
                  src="/asset/vial/feature-4-mock.png"
                  alt="Vial AI"
                  width={600}
                  height={1200}
                  className="w-full h-auto"
                  style={{ filter: "drop-shadow(0 40px 100px rgba(0,0,0,0.6))" }}
                />
              </div>
            </motion.div>

            <motion.ul
              variants={stagger}
              className="grid grid-cols-2 gap-4 text-left mb-10 max-w-sm mx-auto"
            >
              {[
                "Peptide mechanisms",
                "Half-life and PK",
                "Technique principles",
                "Cycling theory",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: TEXT_SECONDARY }}
                >
                  <Check size={14} style={{ color: MINT, flexShrink: 0 }} />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              className="text-xs"
              style={{ color: TEXT_MUTED }}
            >
              Educational only. Not medical advice. Configured to refuse
              personalized clinical questions and redirect to your prescriber.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t" style={{ borderColor: BORDER, backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: TEXT_MUTED, fontFamily: mono }}>
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Free to calculate. Fair to upgrade.
            </h2>
            <p className="text-lg" style={{ color: TEXT_SECONDARY }}>
              Calculator stays free forever. AI coach included with every paid tier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: TEXT_MUTED, fontFamily: mono }}>
                Vial Monthly
              </p>
              <div className="mb-6">
                <span className="text-4xl font-black">$14.99</span>
                <span className="text-sm" style={{ color: TEXT_SECONDARY }}> / month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-1" style={{ color: TEXT_SECONDARY }}>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Unlimited protocols and vials</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Body metrics, bloodwork, photos</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Vial AI included</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Cancel anytime</li>
              </ul>
            </div>

            <div className="rounded-2xl p-8 flex flex-col relative" style={{ backgroundColor: SURFACE, border: `2px solid ${MINT}` }}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap" style={{ backgroundColor: MINT, color: BG, fontFamily: mono }}>
                Best value · 72% off
              </span>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: MINT, fontFamily: mono }}>
                Vial Yearly
              </p>
              <div className="mb-2">
                <span className="text-4xl font-black">$29.99</span>
                <span className="text-sm" style={{ color: TEXT_SECONDARY }}> first year</span>
              </div>
              <p className="text-xs mb-6" style={{ color: TEXT_MUTED }}>
                Then $49.99/yr. New subscribers only.
              </p>
              <ul className="space-y-3 mb-8 text-sm flex-1" style={{ color: TEXT_SECONDARY }}>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Everything in Monthly</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> $4.17/mo effective after intro</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Vial AI included</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> CSV export, Vial 365</li>
              </ul>
            </div>

            <div className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: TEXT_MUTED, fontFamily: mono }}>
                Vial Lifetime
              </p>
              <div className="mb-6">
                <span className="text-4xl font-black">$99.99</span>
                <span className="text-sm" style={{ color: TEXT_SECONDARY }}> one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm flex-1" style={{ color: TEXT_SECONDARY }}>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Everything forever, no sub</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Vial AI included</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Family Sharing</li>
                <li className="flex gap-2"><Check size={14} style={{ color: MINT, flexShrink: 0, marginTop: 3 }} /> Limited launch offer</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm mt-10" style={{ color: TEXT_MUTED }}>
            Free tier: calculator + 1 protocol + 1 saved vial + 30 days history. No expiry.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t" style={{ borderColor: BORDER }}>
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
              style={{ color: TEXT_MUTED, fontFamily: mono }}
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-black tracking-tight mb-12"
            >
              Questions
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
      <section
        className="relative overflow-hidden border-t"
        style={{ backgroundColor: MINT, borderColor: MINT }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-black opacity-5 -translate-x-1/3 -translate-y-1/3 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-black opacity-10 translate-x-1/4 translate-y-1/4 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight"
              style={{ color: BG }}
            >
              Built for the daily ritual.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-10 font-medium"
              style={{ color: `${BG}99` }}
            >
              The peptide app you open 2 to 5 times a day.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-[0.97] shadow-2xl shadow-black/20"
                style={{ backgroundColor: BG, color: TEXT }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/asset/vial/icon.png"
              alt="Vial"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-white font-bold text-sm">Vial</span>
            <span className="text-xs" style={{ color: TEXT_MUTED }}>
              by EchoForge
            </span>
          </div>

          <div
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm"
            style={{ color: TEXT_SECONDARY }}
          >
            <Link href="/vial/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/vial/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <a
              href="mailto:support@echoforge.to"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <Link href="/" className="hover:text-white transition-colors">
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
