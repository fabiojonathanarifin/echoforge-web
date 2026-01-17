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
          name="Magda"
          description="A voice-first AI planner that turns natural speech into scheduled tasks."
          href="/apps/magda"
          icon="/magda-icon.png"
        />

        <AppCard
          name="Kume"
          description="Plan your perfect trip in 10 seconds with personalized itineraries."
          href="/kume"
          icon="/kume-icon.png"
        />

        <AppCard
          name="Brainecho"
          description="A voice-first AI thinking assistant that transforms spoken thoughts into structured outputs."
          href="https://brainechoai.com/"
          icon="/brainecho-icon.png"
        />

        <AppCard
          name="TinyOrange"
          description="A minimalist todo list with multi-device sync. It's kinda important, but not red important."
          href="https://tinyorange.app/"
          icon="/tinyorange-icon.png"
        />
      </div>
    </section>
  );
}
