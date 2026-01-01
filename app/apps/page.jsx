import AppCard from "@/components/AppCard";

export default function AppsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 space-y-12">
      <h1 className="text-3xl font-semibold">Apps</h1>

      <AppCard
        name="Magda"
        description="A voice-first AI planner."
        href="/apps/magda"
        icon="/magda-icon.png"
      />
    </section>
  );
}
