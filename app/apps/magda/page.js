"use client";

import Link from "next/link";

const MAGDA_PURPLE = "#8B7FDE";
const MAGDA_BG = "#1C1C1E";
const MAGDA_SURFACE = "#2C2C2E";

export default function MagdaPage() {
  return (
    <div className="min-h-screen bg-[#1C1C1E] text-[#F5F5F7] selection:bg-[#8B7FDE]/20 selection:text-[#8B7FDE] transition-colors duration-300 font-sans">
      {/* HERO SECTION */}
      <section className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-12 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(139,127,222,0.08)_0%,transparent_50%)]" />

        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#2C2C2E] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 flex items-center justify-center overflow-hidden animate-pulse-subtle">
          <img
            src="/magda-icon.png"
            alt="Magda icon"
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>

        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-white">
            Spoken thoughts.
            <br />
            <span className="text-[#8B7FDE]">Scheduled life.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed max-w-2xl mx-auto font-medium">
            Magda is a voice-first AI planner that turns natural speech into
            structured tasks without breaking your flow.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 pt-4 w-full justify-center">
          <a
            href="#waitlist"
            className="px-10 py-5 rounded-2xl bg-[#8B7FDE] text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(139,127,222,0.3)] flex items-center justify-center gap-3 hover:brightness-110"
          >
            Join the Waitlist
          </a>
          <Link
            href="/apps"
            className="px-10 py-5 rounded-2xl bg-[#2C2C2E] text-white font-bold text-lg transition-all hover:bg-[#3C3C3E] flex items-center justify-center gap-3 border border-white/5"
          >
            Back to Apps
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#18181a] py-32 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Zen Productivity
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
              Designed for calm, focused minds who value speed and simplicity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Voice Capture",
                desc: "Tap and speak. Magda understands context and schedules tasks instantly.",
                emoji: "🎙️",
                color: "#8B7FDE",
              },
              {
                title: "Visual Timeline",
                desc: "A beautiful, decluttered view of your day. See exactly what's next at a glance.",
                emoji: "✨",
                color: "#7FB069",
              },
              {
                title: "Smart Sync",
                desc: "Magda works with your existing Google and Apple calendars seamlessly.",
                emoji: "🔄",
                color: "#7DBAED",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#2C2C2E] p-10 rounded-[2.5rem] border border-white/5 transition-all hover:translate-y-[-8px] hover:border-[#8B7FDE]/30"
              >
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  {item.emoji}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-[#A0A0A0] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white">
            The Pioneer Plan
          </h2>
          <p className="text-[#A0A0A0] text-lg font-medium">
            Join the early wave of voice-first builders.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative p-12 rounded-[3rem] border-2 border-[#8B7FDE] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col space-y-10 bg-[#2C2C2E]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-2 rounded-full text-xs font-black text-white uppercase tracking-[0.2em] bg-[#8B7FDE] shadow-xl">
              Limited Access
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-black text-white">Pioneer</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black text-white">$39</span>
                <span className="text-[#A0A0A0] text-xl">/year</span>
              </div>
              <p className="text-[#8B7FDE] font-bold">
                Lock in early-adopter pricing forever.
              </p>
            </div>

            <ul className="space-y-5">
              {[
                "Unlimited voice input",
                "Advanced AI planning chat",
                "Full calendar synchronization",
                "Custom habits & routines",
                "Priority beta access",
              ].map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-white/90 font-medium"
                >
                  <span className="text-[#8B7FDE] text-xl font-black">✓</span>{" "}
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-6 rounded-2xl font-black text-white bg-[#8B7FDE] shadow-lg hover:brightness-110 active:scale-95 transition-all text-xl">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* WAITLIST FORM SECTION */}
      <section
        id="waitlist"
        className="bg-[#18181a] py-32 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Magda is in private development
            </h2>
            <p className="text-[#A0A0A0] text-lg font-medium">
              We&apos;re building the future of scheduling. Join the waitlist to
              be among the first to experience it.
            </p>
          </div>

          <div className="bg-[#2C2C2E] p-2 rounded-3xl border border-white/5 shadow-2xl overflow-hidden min-h-[300px] flex items-center justify-center">
            {/* Placeholder for your waitlist form */}
            <div className="text-center p-8 space-y-4">
              <p className="text-[#A0A0A0]">
                Waitlist form will be integrated here.
              </p>
              <div className="w-full h-[150px] border border-dashed border-white/10 rounded-2xl flex items-center justify-center opacity-30">
                <span className="text-xs uppercase tracking-widest font-black">
                  Form Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 border-t border-white/5 bg-[#1C1C1E]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-12">
          <div className="flex items-center gap-4 font-black text-2xl text-white">
            <img
              src="/magda-icon.png"
              alt="Magda"
              className="w-12 h-12 rounded-2xl shadow-xl"
            />
            <span>Magda</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold">
            <Link
              href="/legal/magda/privacy"
              className="text-[#A0A0A0] hover:text-[#8B7FDE] transition-colors underline underline-offset-8 decoration-white/5 hover:decoration-[#8B7FDE]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/magda/terms"
              className="text-[#A0A0A0] hover:text-[#8B7FDE] transition-colors underline underline-offset-8 decoration-white/5 hover:decoration-[#8B7FDE]"
            >
              Terms of Service
            </Link>
          </div>

          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-bold text-[#A0A0A0] hover:text-[#F5F5F7] transition-all group"
          >
            <div className="w-6 h-6 rounded-lg overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity ring-1 ring-white/10">
              <img
                src="/echo-forge-icon.png"
                alt="EchoForge"
                className="w-full h-full object-cover"
              />
            </div>
            <span>Built by EchoForge</span>
          </Link>

          <p className="text-[#666666] text-xs font-medium">
            © {new Date().getFullYear()} EchoForge. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(0.98);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
