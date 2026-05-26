import Link from "next/link";

const SECTIONS = [
  {
    label: "Pro grants",
    href: "/admin/aksara/grants",
    description: "Grant or revoke Pro for any aksara user by email or username.",
  },
  {
    label: "White Gloves",
    href: "/admin/aksara/whitegloves",
    description: "Pre-build ghost profiles for featured creators and send claim links.",
  },
];

export default function AksaraAdminHomePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin" className="text-xs text-muted hover:text-foreground">
          ← All apps
        </Link>
        <span className="text-xs text-muted">/</span>
        <span className="text-xs text-foreground">Aksara</span>
      </div>

      <div>
        <h1 className="text-2xl font-semibold text-foreground">Aksara</h1>
        <p className="mt-1 text-sm text-muted">
          Profile builder admin tools.
        </p>
      </div>

      <ul className="space-y-3">
        {SECTIONS.map((s) => (
          <li
            key={s.href}
            className="rounded-xl border border-border bg-secondary p-4"
          >
            <Link href={s.href} className="text-sm font-medium text-foreground">
              {s.label}
            </Link>
            <p className="mt-1 text-xs text-muted">{s.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
