export default function AppCard({ name, description, href, icon }) {
  return (
    <div className="border border-neutral-800 rounded-xl p-6 flex gap-4">
      {icon && (
        <img src={icon} alt={`${name} icon`} className="w-16 h-16 rounded-xl" />
      )}

      <div>
        <h2 className="text-xl font-medium">{name}</h2>
        <p className="text-neutral-400 mt-1">{description}</p>
        <a
          href={href}
          className="inline-block mt-3 underline underline-offset-4"
        >
          View
        </a>
      </div>
    </div>
  );
}
