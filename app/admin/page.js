import Link from "next/link";

const APPS = [
  {
    id: "protos",
    name: "Protos",
    description: "Bible study app",
    sections: [
      { label: "Promo codes", href: "/admin/protos/codes" },
    ],
  },
  {
    id: "aksara",
    name: "Aksara",
    description: "Profile builder",
    sections: [
      { label: "Pro grants", href: "/admin/aksara/grants" },
    ],
  },
  {
    id: "kume",
    name: "Kume",
    description: "Travel planner",
    sections: [],
  },
  {
    id: "relic",
    name: "Relic",
    description: "Coming soon",
    sections: [],
  },
  {
    id: "sentinel",
    name: "Sentinel",
    description: "Coming soon",
    sections: [],
  },
  {
    id: "vial",
    name: "Vial",
    description: "Coming soon",
    sections: [],
  },
];

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Apps</h1>
        <p className="mt-1 text-sm text-muted">
          Pick an app to manage. Protos and Aksara have admin tools wired up today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {APPS.map((app) => (
          <div
            key={app.id}
            className="rounded-xl border border-border bg-secondary p-5"
          >
            <div className="mb-3">
              <p className="text-base font-semibold text-foreground">
                {app.name}
              </p>
              <p className="text-xs text-muted">{app.description}</p>
            </div>

            {app.sections.length > 0 ? (
              <ul className="space-y-1.5">
                {app.sections.map((section) => (
                  <li key={section.href}>
                    <Link
                      href={section.href}
                      className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
                    >
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-muted">No tools yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
