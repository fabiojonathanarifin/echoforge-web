export default function AppCard({ name, tagline, description, href, icon }) {
  return (
    <div className="border border-border rounded-xl p-6 flex gap-4 bg-background transition-colors">
      {icon && (
        <img src={icon} alt={`${name} icon`} className="w-16 h-16 rounded-xl border border-border shadow-sm object-cover" />
      )}

      <div>
        <h2 className="text-xl font-semibold text-foreground">{name}</h2>
        {tagline && <p className="text-foreground mt-1">{tagline}</p>}
        <p className="text-muted mt-1 leading-relaxed text-sm">{description}</p>
        <a
          href={href}
          className="inline-block mt-4 font-medium text-foreground hover:underline underline-offset-8 decoration-border hover:decoration-foreground transition-all"
        >
          View App →
        </a>
      </div>
    </div>
  );
}
