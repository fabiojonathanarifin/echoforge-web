export default function AppCard({ name, description, href, icon }) {
  return (
    <div className="border border-border rounded-xl p-6 flex gap-4 bg-background transition-colors">
      {icon && (
        <img src={icon} alt={`${name} icon`} className="w-16 h-16 rounded-xl border border-border shadow-sm object-cover" />
      )}

      <div>
        <h2 className="text-xl font-semibold text-foreground">{name}</h2>
        <p className="text-muted mt-1 leading-relaxed">{description}</p>
        <a
          href={href}
          className="inline-block mt-4 font-medium text-accent hover:underline underline-offset-4 transition-all"
        >
          View App →
        </a>
      </div>
    </div>
  );
}
