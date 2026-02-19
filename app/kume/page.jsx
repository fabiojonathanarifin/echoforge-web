"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Zap,
  ChevronDown,
  Menu,
  X,
  Check,
  Globe,
  BrainCircuit,
  Heart,
} from "lucide-react";

// --- UPDATED FAQ DATA ---
const FAQS = [
  {
    question: "What is Kume exactly?",
    answer:
      "Think of Kume as your personal travel concierge. We don't just dump a list of places; we help you build the plan you actually like. You tell us the vibe, and we handle the complex logistics to make it happen.",
  },
  {
    question: "How is this better than Google Maps?",
    answer:
      "Google Maps is a tool; Kume is a planner. Google tells you where a place is, but Kume tells you *when* to go, *what* to group it with, and *how* to fit it all into a perfect day without zigzagging across town.",
  },
  {
    question: "Does it only show hidden gems?",
    answer:
      "Nope! We know you want to see the icons too. Kume balances the must-see landmarks with verified hidden gems nearby, so you get the full experience without the tourist trap feel.",
  },
  {
    question: "Can I edit the plan?",
    answer:
      "Of course. Think of Kume's itinerary as a perfect first draft (90% done). You can swap restaurants, change times, or add your own saved spots to make it 100% yours.",
  },
];

export default function KumeLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] font-sans overflow-x-hidden selection:bg-[#FF6B6B] selection:text-white">
      {/* --- JSON-LD --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Kume",
            applicationCategory: "TravelApplication",
            operatingSystem: "iOS, Android",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "120",
            },
          }),
        }}
      />

      {/* --- NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-[#FF6B6B] flex items-center justify-center overflow-hidden shadow-sm hover:scale-105 transition-transform">
              <img
                src="/kume-icon.png"
                alt="Kume Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span>Kume</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-500">
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="#faq" className="hover:text-black transition-colors">
              FAQ
            </a>
            <button className="bg-[#111] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
              Get Early Access
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: TEXT CONTENT */}
          <div className="flex flex-col items-start text-left space-y-8 z-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#FF6B6B] border border-[#FF6B6B]/20 text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles size={12} className="fill-current" />
              <span>Smart Travel Itinerary Planner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-balance"
            >
              Skip travel research <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]">
                Get a trip you’ll actually love
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium"
            >
              From trending spots to local favorites, we do the research. You
              pick the vibe. You make the call.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full pt-4"
            >
              <button className="h-14 px-8 rounded-2xl bg-[#FF6B6B] text-white text-lg font-bold flex items-center justify-center gap-2 hover:bg-[#ff5252] hover:shadow-xl hover:shadow-[#FF6B6B]/20 transition-all active:scale-95">
                Start Planning
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* RIGHT: PHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-[#FF6B6B]/10 via-orange-100/50 to-purple-100/50 blur-[100px] rounded-full -z-10"></div>

            {/* The Phone */}
            <div className="relative w-[300px] md:w-[340px] rounded-[3.5rem] border-[10px] border-white shadow-2xl bg-black overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ring-1 ring-black/5">
              <img
                src="/asset/kume/kume-main.png"
                alt="Kume App Interface"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROBLEM / SOLUTION --- */}
      <section className="py-24 px-6 md:px-8 bg-white border-y border-black/5">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Why is planning a trip still <br className="hidden md:block" /> so
              stressful?
            </h2>
            <p className="text-gray-500 text-xl font-medium">
              We fixed the broken parts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* The Old Way */}
            <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-black/5 space-y-8 hover:bg-gray-100 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-gray-200 flex items-center justify-center text-3xl shadow-inner">
                😩
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Old Way</h3>
                <p className="text-gray-500 font-medium">
                  Research hell & broken links.
                </p>
              </div>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li className="flex gap-4 items-start">
                  <X className="text-gray-400 mt-1 shrink-0" size={20} />
                  <span>Scanning 10 different "Top 10" blogs</span>
                </li>
                <li className="flex gap-4 items-start">
                  <X className="text-gray-400 mt-1 shrink-0" size={20} />
                  <span>Walking 20k steps just to backtrack</span>
                </li>
                <li className="flex gap-4 items-start">
                  <X className="text-gray-400 mt-1 shrink-0" size={20} />
                  <span>Guessing which restaurants are traps</span>
                </li>
                <li className="flex gap-4 items-start">
                  <X className="text-gray-400 mt-1 shrink-0" size={20} />
                  <span>Forgetting to check opening hours</span>
                </li>
                <li className="flex gap-4 items-start">
                  <X className="text-gray-400 mt-1 shrink-0" size={20} />
                  <span>Messy spreadsheets that break on mobile</span>
                </li>
              </ul>
            </div>

            {/* The Kume Way */}
            <div className="p-10 rounded-[2.5rem] bg-[#FFF5F5] border border-[#FF6B6B]/20 space-y-8 relative overflow-hidden ring-1 ring-[#FF6B6B]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B6B] text-white flex items-center justify-center text-3xl shadow-lg shadow-[#FF6B6B]/30">
                🐱
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-black">
                  The Kume Way
                </h3>
                <p className="text-[#FF6B6B] font-medium">
                  Instant, logical, and optimized.
                </p>
              </div>
              <ul className="space-y-4 text-gray-800 font-medium">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#FF6B6B] rounded-full p-0.5 shadow-sm">
                    <Check className="text-white" size={14} />
                  </div>
                  <span>1 tap to generate a full verified plan</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#FF6B6B] rounded-full p-0.5 shadow-sm">
                    <Check className="text-white" size={14} />
                  </div>
                  <span>Spatial clustering saves you walking</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#FF6B6B] rounded-full p-0.5 shadow-sm">
                    <Check className="text-white" size={14} />
                  </div>
                  <span>Mix of popular icons & hidden gems</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#FF6B6B] rounded-full p-0.5 shadow-sm">
                    <Check className="text-white" size={14} />
                  </div>
                  <span>It learns your taste with every trip</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#FF6B6B] rounded-full p-0.5 shadow-sm">
                    <Check className="text-white" size={14} />
                  </div>
                  <span>All saved to one beautiful mobile app</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section id="features" className="py-32 px-6 md:px-8 max-w-6xl mx-auto">
        <div className="mb-20 md:text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Smart enough to lead. <br /> Cool enough to follow.
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            We combined heavy-duty logic with a database of verified hidden gems
            to create the ultimate pocket guide.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 md:h-[900px]">
          {/* Card 1: Spatial Logic (Span 2) */}
          <div className="md:col-span-2 rounded-[2.5rem] bg-[#F3F4F6] relative overflow-hidden group border border-black/5 transition-all hover:shadow-2xl hover:shadow-black/5 flex flex-col md:flex-row">
            <div className="p-10 md:p-12 flex flex-col justify-start z-10 w-full md:w-[50%]">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                <MapPin className="text-[#FF6B6B]" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                We did the math <br /> so you don't have to.
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                No more criss-crossing the city. Kume clusters your spots
                geographically, saving you hours of transit time every single
                day.
              </p>
            </div>
            {/* Image Side */}
            <div className="relative w-full md:w-[50%] h-[350px] md:h-full overflow-hidden flex items-end justify-center md:justify-end">
              <div className="relative md:absolute md:-right-8 md:bottom-[-50px] w-[260px] md:w-[320px] rounded-[2.5rem] border-[8px] border-white shadow-2xl bg-black rotate-[-3deg] md:rotate-[-5deg] hover:rotate-0 transition-transform duration-500 origin-bottom-right">
                <img
                  src="/asset/kume/kume-place-detail.png"
                  alt="Kume Place Detail"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Hidden Gems (Span 1) */}
          <div className="md:col-span-1 rounded-[2.5rem] bg-[#111] text-white p-10 flex flex-col justify-between border border-black/5 group relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <Sparkles className="text-[#FF6B6B] mb-8" size={32} />
              <h3 className="text-2xl font-bold mb-3">Hidden Gems.</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                We prioritize spots rated by locals and verified by travel
                experts (Wikivoyage).
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Card 3: Personalization (Span 1) -- REPLACED SPEED CARD */}
          <div className="md:col-span-1 rounded-[2.5rem] bg-white p-10 flex flex-col justify-between border border-black/5 shadow-xl shadow-black/5 group">
            <div>
              <BrainCircuit className="text-purple-500 mb-8" size={32} />
              <h3 className="text-2xl font-bold mb-3">It gets smarter.</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Kume learns your style. The more trips you plan, the better your
                recommendations become.
              </p>
            </div>
            {/* Abstract Brain/Pulse Animation */}
            <div className="flex gap-2 mt-6">
              <div className="w-1/3 h-2 rounded-full bg-purple-100 overflow-hidden">
                <div className="h-full w-full bg-purple-400 animate-pulse delay-75"></div>
              </div>
              <div className="w-1/3 h-2 rounded-full bg-purple-100 overflow-hidden">
                <div className="h-full w-full bg-purple-400 animate-pulse delay-150"></div>
              </div>
              <div className="w-1/3 h-2 rounded-full bg-purple-100 overflow-hidden">
                <div className="h-full w-full bg-purple-400 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>

          {/* Card 4: Global Coverage (Span 2) */}
          <div className="md:col-span-2 rounded-[2.5rem] bg-white p-10 flex flex-col justify-between border border-black/5 shadow-xl shadow-black/5 group relative overflow-hidden">
            <div className="relative z-10 max-w-lg">
              <Globe className="text-blue-500 mb-8" size={32} />
              <h3 className="text-2xl font-bold mb-3">Works everywhere.</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-lg">
                From Tokyo to tiny villages in Tuscany. If it's on the map, Kume
                can build a plan for it.
              </p>
            </div>
            {/* Decorative Map Background */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-5">
              <Globe size={300} />
            </div>
            {/* Fixed Progress Bar */}
            <div className="w-full h-3 rounded-full bg-gray-100 mt-8 overflow-hidden">
              <div className="h-full bg-blue-500 w-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section
        id="faq"
        className="py-24 px-6 md:px-8 bg-white border-y border-black/5"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">
            You asked, we answered.
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* --- THE VIBE / CTA --- */}
      <section className="py-32 bg-[#FF6B6B] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            {/* MASCOT IMAGE HERE - BIGGER & NO CARD */}
            <img
              src="/asset/kume/kume-mascot.png"
              alt="Kume Mascot"
              className="w-48 h-48 mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-balance">
            Your travel agent is a cat.
          </h2>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-12 text-balance max-w-2xl mx-auto font-medium">
            Meet Kume. He creates the itinerary, handles the logistics, and
            doesn&apos;t charge commission. He just wants you to touch grass.
          </p>

          <button className="h-16 px-12 rounded-2xl bg-white text-[#FF6B6B] text-xl font-bold inline-flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-black/20">
            Get Early Access
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Background decorative circles */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 md:px-8 max-w-6xl mx-auto bg-[#FAFAFA]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF6B6B] flex items-center justify-center text-white font-bold shadow-sm">
              <img
                src="/kume-icon.png"
                alt="Kume"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-xl tracking-tight">Kume</span>
          </div>

          <div className="flex gap-8 text-sm font-bold text-gray-500">
            <a
              href="/legal/kume/privacy"
              className="hover:text-black transition-colors"
            >
              Privacy
            </a>
            <a
              href="/legal/kume/terms"
              className="hover:text-black transition-colors"
            >
              Terms
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
            <span>Built by</span>
            <a
              href="/"
              className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity"
            >
              <div className="w-5 h-5 rounded bg-gray-200 overflow-hidden">
                <img
                  src="/echo-forge-icon.png"
                  alt="EchoForge"
                  className="w-full h-full object-cover"
                />
              </div>
              EchoForge
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- FAQ COMPONENT ---
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-black/5 rounded-2xl bg-white overflow-hidden transition-all hover:border-black/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
      >
        <span className="font-bold text-lg md:text-xl group-hover:text-[#FF6B6B] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pt-0 text-gray-500 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
