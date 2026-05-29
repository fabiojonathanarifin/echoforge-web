import AppCard from "@/components/AppCard";

export default function AppsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-black tracking-tight text-foreground">Apps</h1>
        <p className="text-muted text-xl max-w-2xl">Focused tools for focused minds.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <AppCard
          name="Brainecho"
          tagline="Think out loud, get structured clarity."
          description="A voice-first AI thinking assistant that transforms spoken thoughts into structured outputs."
          href="https://brainechoai.com/"
          icon="/brainecho-icon.png"
        />

        <AppCard
          name="TinyOrange"
          tagline="Your tasks, everywhere, instantly."
          description="A minimalist todo list with multi-device sync. It's kinda important, but not red important."
          href="https://tinyorange.app/"
          icon="/tinyorange-icon.png"
        />

        <AppCard
          name="Protos"
          tagline="Go deeper in Scripture, online or off."
          description="An offline-first Bible study app with deep commentary integration and cloud sync."
          href="https://protos-app.com/"
          icon="/protos-icon.png"
        />

        <AppCard
          name="Magda"
          tagline="Say it, and it's scheduled."
          description="A voice-first AI planner that turns natural speech into scheduled tasks."
          href="/apps/magda"
          icon="/magda-icon.png"
        />

        <AppCard
          name="Kume"
          tagline="Plan your perfect trip in seconds."
          description="AI-powered personalized itineraries built from your preferences, not generic templates."
          href="/kume"
          icon="/kume-icon.png"
        />

        <AppCard
          name="Relic"
          tagline="Never walk into a meeting cold again."
          description="AI relationship memory for founders. Voice capture, smart briefings, and promise tracking."
          href="/relic"
          icon="/asset/relic/icon-trasnparent-bg.png"
        />

        <AppCard
          name="Sentinel"
          tagline="See the world like an intelligence analyst."
          description="Browser-based spatial intelligence. Real-time aircraft tracking, satellite orbits, and AI analysis on a 3D globe."
          href="/sentinel"
          icon="/asset/sentinel/icon-transparent-bg.png"
        />

        <AppCard
          name="ReadersGuild"
          tagline="Read with the world."
          description="A social reading app with timer sessions, beautiful share cards, and a community feed."
          href="https://readers-guild.com/"
          icon="/asset/readersGuild/icon.png"
        />
        <AppCard
          name="Vial"
          tagline="Optimize your peptide protocol."
          description="A daily companion for peptide protocols. Calculator, tracker, and AI coach in one beautifully designed iOS app."
          href="/vial"
          icon="/asset/vial/icon.png"
        />
        <AppCard
          name="DiggerInsights"
          tagline="5 minutes to know what matters in tech right now."
          description="A daily newsletter for founders and decision-makers covering emerging startups, AI, and innovation."
          href="https://diggerinsights.beehiiv.com"
          icon="/asset/diggerinsights/icon.png"
        />
        <AppCard
          name="Aksara"
          tagline="A link in bio to show your work."
          description="Build a real portfolio in minutes, not weeks. One link to show what you have built, created, and sold, made for your Instagram, X, or LinkedIn bio."
          href="https://aksara.so"
          icon="/asset/aksara/icon.png"
        />
      </div>
    </section>
  );
}
