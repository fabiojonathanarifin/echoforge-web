"use client";

import Link from "next/link";


const KUME_CORAL = "#FF6B6B";
const KUME_CORAL_LIGHT = "#FFE8E8";

export default function KumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10 selection:text-accent transition-colors duration-300">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-background rounded-3xl shadow-2xl border border-border flex items-center justify-center overflow-hidden animate-bounce-subtle">
          <img 
            src="/kume-icon.png" 
            alt="Kume mascot" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Plan your perfect trip in <span className="text-accent">10 seconds</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted leading-relaxed">
            Meet Kume, your AI travel companion that builds personalized itineraries faster than you can pack a bag.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            className="px-10 py-5 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl bg-accent flex items-center gap-3 hover:brightness-110"
          >
            <span>Coming Soon to App Store</span>
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary py-24 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 text-center">How it works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Choose Destination",
                desc: "Search any city in the world. Powered by Google Places for global coverage.",
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
              <div key={i} className="bg-background p-8 rounded-[2rem] shadow-xl border border-border flex flex-col items-center text-center space-y-4 hover:translate-y-[-8px] transition-transform">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl bg-accent shadow-lg shadow-accent/30">
                  {item.step}
                </div>
                <div className="text-5xl mb-2">{item.emoji}</div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl font-black">Simple Pricing</h2>
          <p className="text-muted text-lg">Unlock unlimited adventures with Kume Premium</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
          {/* Yearly - Featured */}
          <div className="relative p-10 rounded-[2.5rem] border-4 shadow-2xl flex flex-col justify-between space-y-8 border-accent bg-background">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-black text-white uppercase tracking-[0.2em] bg-accent shadow-xl shadow-accent/20">
              Best Value
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-black">Yearly</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">$79.99</span>
                <span className="text-muted text-xl">/year</span>
              </div>
              <p className="text-sm font-bold text-accent">Includes 7-day free trial</p>
            </div>
            <ul className="space-y-4">
              {["Unlimited trip planning", "Anywhere in the world", "Offline access", "Priority AI generation"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <span className="text-accent text-xl font-black">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl font-black text-white bg-accent shadow-lg shadow-accent/30 hover:brightness-110 active:scale-95 transition-all text-lg">Get Started</button>
          </div>

          {/* Weekly */}
          <div className="p-10 rounded-[2.5rem] border border-border flex flex-col justify-between space-y-8 bg-background shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-3">
              <h3 className="text-2xl font-black">Weekly</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">$9.99</span>
                <span className="text-muted text-xl">/month</span>
              </div>
              <p className="text-sm text-muted">No commitment, cancel anytime</p>
            </div>
            <ul className="space-y-4">
              {["Unlimited trip planning", "Anywhere in the world", "Offline access", "Standard support"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <span className="text-muted text-xl font-black">✓</span> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-2xl font-black bg-foreground text-background hover:opacity-90 active:scale-95 transition-all text-lg">Choose Weekly</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-border text-center bg-secondary/50">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <div className="flex items-center justify-center gap-3 font-black text-2xl">
            <img src="/kume-icon.png" alt="Kume" className="w-10 h-10 object-cover rounded-xl shadow-md" />
            <span>Kume</span>
          </div>
          <p className="text-muted text-sm font-medium">© 2026 Echoforge. All rights reserved.</p>
          <div className="flex flex-col items-center gap-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm font-bold text-muted hover:text-foreground transition-all group"
            >
              <div className="w-5 h-5 rounded overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                <img src="/echo-forge-icon.png" alt="EchoForge" className="w-full h-full object-cover" />
              </div>
              <span>Built by EchoForge</span>
            </Link>
            <div className="flex justify-center gap-10 text-sm font-bold">
              <Link href="/legal/kume/privacy" className="text-muted hover:text-foreground underline underline-offset-8 decoration-accent/30 hover:decoration-accent transition-all">Privacy Policy</Link>
              <Link href="/legal/kume/terms" className="text-muted hover:text-foreground underline underline-offset-8 decoration-accent/30 hover:decoration-accent transition-all">Terms of Service</Link>
            </div>
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
