"use client";

import Link from "next/link";


const KUME_CORAL = "#FF6B6B";
const KUME_CORAL_LIGHT = "#FFE8E8";

export default function KumePage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] selection:bg-[#FFE8E8] selection:text-[#FF6B6B]">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-xl border border-neutral-100 flex items-center justify-center overflow-hidden animate-bounce-subtle">
          <img 
            src="/kume-icon.png" 
            alt="Kume mascot" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Plan your perfect trip in <span style={{ color: KUME_CORAL }}>10 seconds</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#717171]">
            Meet Kume, your AI travel companion that builds personalized itineraries faster than you can pack a bag.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            className="px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2"
            style={{ backgroundColor: KUME_CORAL }}
          >
            <span>Coming Soon to App Store</span>
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F7F7F7] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">How it works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Choose Destination",
                desc: "Search any city in the world. We've got 500+ destinations covered.",
                emoji: "📍"
              },
              {
                step: "2",
                title: "Pick Your Vibe",
                desc: "Select what you love: Food, Instagram spots, Culture, or let AI decide.",
                emoji: "✨"
              },
              {
                step: "3",
                title: "Get Your Itinerary",
                desc: "Receive a complete day-by-day plan with maps and directions in seconds.",
                emoji: "🐱"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: KUME_CORAL }}>
                  {item.step}
                </div>
                <div className="text-4xl mb-2">{item.emoji}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-[#717171]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold">Simple Pricing</h2>
          <p className="text-[#717171]">Unlock unlimited adventures with Kume Premium</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
          {/* Yearly - Featured */}
          <div className="relative p-8 rounded-3xl border-2 shadow-xl flex flex-col justify-between space-y-6" style={{ borderColor: KUME_CORAL }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest" style={{ backgroundColor: KUME_CORAL }}>
              Best Value
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Yearly</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$79.99</span>
                <span className="text-[#717171]">/year</span>
              </div>
              <p className="text-sm text-[#717171]">Includes 7-day free trial</p>
            </div>
            <ul className="space-y-3">
              {["Unlimited trip planning", "500+ destinations", "Offline access", "Priority AI generation"].map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: KUME_CORAL }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-bold text-white" style={{ backgroundColor: KUME_CORAL }}>Get Started</button>
          </div>

          {/* Weekly */}
          <div className="p-8 rounded-3xl border border-neutral-200 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Weekly</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-[#717171]">/month</span>
              </div>
              <p className="text-sm text-[#717171]">No commitment, cancel anytime</p>
            </div>
            <ul className="space-y-3">
              {["Unlimited trip planning", "500+ destinations", "Offline access", "Standard support"].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-neutral-600">
                  <span className="text-neutral-400">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-bold bg-neutral-900 text-white hover:bg-black transition-colors">Choose Weekly</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-neutral-100 text-center">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <div className="flex items-center justify-center gap-2 font-bold text-xl">
            <img src="/kume-icon.png" alt="Kume" className="w-8 h-8 object-cover rounded-lg" />
            <span>Kume</span>
          </div>
          <p className="text-[#717171] text-sm">© 2026 Echoforge. All rights reserved.</p>
          <div className="flex justify-center gap-8 text-sm font-medium">
            <Link href="/legal/kume/privacy" className="text-[#717171] hover:text-[#222222] underline underline-offset-4">Privacy Policy</Link>
            <Link href="/legal/kume/terms" className="text-[#717171] hover:text-[#222222] underline underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
