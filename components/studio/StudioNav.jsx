"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudioNav() {
  const pathname = usePathname();
  return <nav aria-label="Main navigation">{[["Products", "apps"], ["Studio", "studio"]].map(([label, path]) => (
    <Link key={path} href={`/${path}`} aria-current={pathname === `/${path}` ? "page" : undefined}>{label}</Link>
  ))}<a href="mailto:support@echoforge.to">Contact <span aria-hidden="true">↗</span></a></nav>;
}
