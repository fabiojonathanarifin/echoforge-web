import Link from "next/link";

export const metadata = {
  title: "Echoforge Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="text-sm font-semibold tracking-wide">
            Echoforge admin
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="text-xs text-muted hover:text-foreground"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
