export default function AppCard({ name, description, href }) {
  return (
    <div className="border border-neutral-800 rounded-xl p-6">
      <h2 className="text-xl font-medium">{name}</h2>
      <p className="text-neutral-400 mt-2">{description}</p>
      <a href={href} className="inline-block mt-4 underline underline-offset-4">
        View
      </a>
    </div>
  );
}
