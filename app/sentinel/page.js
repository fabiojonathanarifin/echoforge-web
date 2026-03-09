"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Plane,
  Satellite,
  Brain,
  MessageSquare,
  Eye,
  ChevronDown,
  Radio,
  Database,
  Map,
  Building2,
  Camera,
  Cpu,
} from "lucide-react";
import { useState } from "react";

const ACCENT = "#3B82F6";
const ACCENT_DIM = "#2563EB";
const BG = "#06060B";
const SURFACE = "#0C0C14";
const CARD = "#10101A";
const BORDER = "#1A1A2E";
const BORDER_LIGHT = "#252540";
const TEXT = "#F0F0F8";
const TEXT_SECONDARY = "#8B8FA3";
const TEXT_TERTIARY = "#4A4E69";

const serif = "'Playfair Display', Georgia, serif";
const mono = "'JetBrains Mono', Menlo, 'Courier New', monospace";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    icon: Globe,
    title: "3D Globe Command View",
    desc: "CesiumJS-powered 3D globe with extruded city buildings from OpenStreetMap. Circular viewport with pan, zoom, tilt, and orbit controls.",
  },
  {
    icon: Plane,
    title: "Real-time Aircraft Tracking",
    desc: "Live commercial and military aircraft positions, callsigns, altitude, and velocity streamed from OpenSky Network.",
  },
  {
    icon: Satellite,
    title: "Satellite Orbit Tracking",
    desc: "180+ satellites tracked in real time via CelesTrak TLE data. Orbit paths, pass timing, and click-to-follow tracking.",
  },
  {
    icon: Brain,
    title: "AI Intelligence Briefings",
    desc: "OpenAI-powered spatial activity reports that analyze visible objects, detect patterns, and flag anomalies across the operational theater.",
  },
  {
    icon: MessageSquare,
    title: "Query the World",
    desc: "Natural language queries converted to structured filters. Ask a question, get results highlighted on the map with AI narration.",
  },
  {
    icon: Eye,
    title: "Visual Modes",
    desc: "CRT, Night Vision, Thermal, Blueprint, and Panoptic display modes. Real-time WebGL shader pipeline transforms the entire scene.",
  },
];

const scenarios = [
  {
    name: "Strait of Hormuz",
    region: "PERSIAN GULF",
    desc: "World's most critical oil chokepoint. Monitor aircraft through Iranian and Omani airspace, naval presence, flight pattern intelligence.",
  },
  {
    name: "Isfahan Nuclear Watch",
    region: "IRAN",
    desc: "Track reconnaissance satellites approaching the nuclear enrichment facility. AI alerts on observation windows and pass timing.",
  },
  {
    name: "Gulf Air Operations",
    region: "QATAR / UAE",
    desc: "Al Udeid and Al Dhafra air bases. Tanker aircraft identification, refueling track analysis, sortie tempo estimation.",
  },
  {
    name: "Red Sea Disruption",
    region: "BAB EL-MANDEB",
    desc: "Strait shipping traffic analysis. Monitor commercial vessel transit changes and maritime threat advisories in real time.",
  },
  {
    name: "London Heathrow",
    region: "UNITED KINGDOM",
    desc: "Dense commercial airspace demonstration. The contrast between normal air traffic operations and conflict zone activity.",
  },
];

const dataSources = [
  { name: "OpenSky Network", desc: "Live aircraft positions, altitude, speed, callsigns", icon: Radio },
  { name: "CelesTrak", desc: "Satellite orbital elements (TLE), 180+ tracked objects", icon: Satellite },
  { name: "OpenStreetMap", desc: "Road network geometry for traffic particle simulation", icon: Map },
  { name: "Cesium Ion", desc: "3D globe rendering, OSM Buildings worldwide geometry", icon: Building2 },
  { name: "Public CCTV", desc: "Geolocated public traffic camera feeds, live overlay", icon: Camera },
  { name: "OpenAI", desc: "Intelligence analysis, natural language query parsing", icon: Cpu },
];

const faqs = [
  {
    q: "What is SENTINEL?",
    a: "A browser-based spatial intelligence system. It fuses public data feeds into a command interface with AI analysis. No downloads required. It runs in your browser.",
  },
  {
    q: "Is this using live data?",
    a: "Yes. Aircraft positions from OpenSky Network, satellite orbits from CelesTrak, and building geometry from Cesium Ion are all real-time public data feeds updated continuously.",
  },
  {
    q: "How does the AI analysis work?",
    a: "SENTINEL sends visible object data to OpenAI's API, which generates intelligence briefings, parses natural language queries into map filters, and detects anomalous patterns in the operational theater.",
  },
  {
    q: "Is this legal?",
    a: "Completely. SENTINEL uses only publicly available open-source intelligence (OSINT) data. No classified or restricted data is accessed. All data sources are free and publicly documented.",
  },
  {
    q: "Do I need an account?",
    a: "No. SENTINEL is a public tool. No login, no account, no personal data required. Open the link and start exploring.",
  },
  {
    q: "How accurate are the AI briefings?",
    a: "AI analysis is generated from real data but should be treated as informational, not definitive. Intelligence briefings are AI interpretations and may contain inaccuracies.",
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

export default function SentinelPage() {
  return (
    <div
      className="min-h-screen selection:bg-[#3B82F6]/20 selection:text-[#3B82F6]"
      style={{ backgroundColor: BG, color: TEXT, fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* NAV */}
      <nav className="border-b" style={{ borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/sentinel" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/asset/sentinel/icon-transparent-bg.png"
              alt="SENTINEL"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span
              className="text-white font-medium text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: mono }}
            >
              SENTINEL
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-white transition-colors hidden sm:block" style={{ color: TEXT_SECONDARY }}>
              Features
            </a>
            <a href="#scenarios" className="text-sm hover:text-white transition-colors hidden sm:block" style={{ color: TEXT_SECONDARY }}>
              Scenarios
            </a>
            <a href="#data" className="text-sm hover:text-white transition-colors hidden sm:block" style={{ color: TEXT_SECONDARY }}>
              Data
            </a>
            <a href="#faq" className="text-sm hover:text-white transition-colors hidden sm:block" style={{ color: TEXT_SECONDARY }}>
              FAQ
            </a>
            <a
              href="https://sentinel.echoforge.to"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "#F0F0F8", color: "#06060B" }}
            >
              Launch Sentinel
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Radial glow from center */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: `radial-gradient(circle, ${ACCENT}08 0%, transparent 70%)` }}
          />
          {/* Horizontal scan lines */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${TEXT} 3px, ${TEXT} 4px)`,
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(${BORDER_LIGHT} 1px, transparent 1px), linear-gradient(90deg, ${BORDER_LIGHT} 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-36 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: ACCENT }} />
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: TEXT_TERTIARY, fontFamily: mono }}
              >
                Spatial Intelligence System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl md:text-7xl leading-[1.05] mb-8"
              style={{ fontFamily: serif, fontWeight: 400 }}
            >
              See the world like
              <br />
              an intelligence analyst.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
              style={{ color: TEXT_SECONDARY }}
            >
              SENTINEL fuses live aircraft tracking, satellite orbits, and open-source intelligence
              into a premium command interface. AI analysis turns raw data into actionable briefings.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-sm mb-12"
              style={{ color: TEXT_TERTIARY, fontFamily: mono }}
            >
              Running in your browser. All public data. Zero cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://sentinel.echoforge.to"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ backgroundColor: "#F0F0F8", color: "#06060B" }}
              >
                <Globe size={20} />
                Launch Sentinel
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg text-white transition-all hover:bg-white/5 border"
                style={{ borderColor: BORDER_LIGHT }}
              >
                See how it works
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-y" style={{ borderColor: BORDER, backgroundColor: SURFACE }}>
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
              How it works
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl mb-20"
              style={{ fontFamily: serif, fontWeight: 400 }}
            >
              From raw data to intelligence.
              <br />
              <span style={{ color: TEXT_TERTIARY }}>Three steps.</span>
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
                title: "Observe",
                text: "Load SENTINEL and the 3D globe renders with real-time data layers. Aircraft move, satellites orbit, traffic flows. Everything is live.",
              },
              {
                num: "02",
                title: "Analyze",
                text: "AI processes visible objects and generates intelligence briefings. Ask natural language questions. The system highlights results on the map.",
              },
              {
                num: "03",
                title: "Act",
                text: "Switch visual modes, follow objects, explore preset scenarios. Every data point is interactive. Click any aircraft or satellite for full details.",
              },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeUp}>
                <p
                  className="text-xs tracking-[0.15em] uppercase mb-6"
                  style={{ color: ACCENT, fontFamily: mono }}
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
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b" style={{ borderColor: BORDER }}>
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
              A full intelligence stack
              <br />
              <span style={{ color: TEXT_TERTIARY }}>in a browser tab.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="space-y-0"
          >
            {features.map((f) => (
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
                  <h3 className="text-lg font-semibold text-white mb-2 md:mb-0 md:w-64 md:shrink-0">
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

      {/* DEMO SCENARIOS */}
      <section id="scenarios" style={{ backgroundColor: SURFACE }}>
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
              Operational Theaters
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: serif, fontWeight: 400 }}
            >
              Pre-loaded intelligence scenarios.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-16 max-w-2xl leading-relaxed"
              style={{ color: TEXT_SECONDARY }}
            >
              Each scenario loads with AI-generated briefings, live data layers, and
              camera positions. Not just coordinates. Stories.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {scenarios.map((s, i) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                className="group p-6 rounded-xl border transition-colors hover:border-[#252540]"
                style={{
                  backgroundColor: `${CARD}CC`,
                  borderColor: BORDER,
                  backdropFilter: "blur(12px)",
                }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{ color: ACCENT, fontFamily: mono }}
                >
                  {s.region}
                </p>
                <h3 className="text-lg font-semibold text-white mb-3">{s.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DATA SOURCES */}
      <section id="data" className="border-y" style={{ borderColor: BORDER }}>
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
              Data Feeds
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl mb-6"
              style={{ fontFamily: serif, fontWeight: 400 }}
            >
              All public. All real-time.
              <br />
              <span style={{ color: TEXT_TERTIARY }}>Zero cost.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-16 max-w-2xl leading-relaxed"
              style={{ color: TEXT_SECONDARY }}
            >
              Governments spend billions on systems like this.
              SENTINEL runs on free, publicly available data sources.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {dataSources.map((d) => (
              <motion.div
                key={d.name}
                variants={fadeUp}
                className="p-6 rounded-xl border"
                style={{ backgroundColor: CARD, borderColor: BORDER }}
              >
                <div className="flex items-start justify-between mb-4">
                  <d.icon size={20} style={{ color: TEXT_TERTIARY }} strokeWidth={1.5} />
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase px-2 py-1 rounded"
                    style={{
                      color: ACCENT,
                      fontFamily: mono,
                      backgroundColor: `${ACCENT}10`,
                      border: `1px solid ${ACCENT}20`,
                    }}
                  >
                    Public
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{d.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ backgroundColor: SURFACE }}>
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: `radial-gradient(circle, ${ACCENT}06 0%, transparent 70%)` }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
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
              Your next intelligence briefing is loading.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-10 leading-relaxed"
              style={{ color: TEXT_SECONDARY }}
            >
              Open SENTINEL and see the world the way analysts do. Live data, AI-powered
              analysis, and a command interface built for clarity.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="https://sentinel.echoforge.to"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:brightness-110 active:scale-[0.98]"
                style={{ backgroundColor: "#F0F0F8", color: "#06060B" }}
              >
                <Globe size={20} />
                Launch Sentinel
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: BORDER }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/asset/sentinel/icon-transparent-bg.png"
              alt="SENTINEL"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span
              className="text-white font-medium text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: mono }}
            >
              SENTINEL
            </span>
            <span className="text-xs" style={{ color: TEXT_TERTIARY }}>by EchoForge</span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: TEXT_SECONDARY }}>
            <Link href="/sentinel/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/sentinel/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              EchoForge
            </Link>
          </div>

          <p className="text-xs" style={{ color: TEXT_TERTIARY }}>
            &copy; {new Date().getFullYear()} EchoForge
          </p>
        </div>
      </footer>

      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
