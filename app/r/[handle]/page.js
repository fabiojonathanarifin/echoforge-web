import Link from "next/link";
import { Globe, Linkedin } from "lucide-react";
import { getPublicCard } from "@/lib/relicCard";
import CardActions from "./CardActions";
import CardViewTracker from "./CardViewTracker";

// Bright, screenshot-friendly take on the Relic brand: warm stone neutrals on
// a light surface with amber as the single accent. The landing page is dark;
// a shareable card reads better light.
const AMBER = "#F59E0B";
const BG = "#FAF8F5";
const CARD = "#FFFFFF";
const BORDER = "#EAE3DA";
const TEXT = "#1C1917";
const TEXT_SECONDARY = "#57534E";
const TEXT_TERTIARY = "#A8A29E";

const serif = "'DM Serif Display', Georgia, serif";
const mono = "Menlo, 'Courier New', monospace";

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap";

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const card = await getPublicCard(handle);

  if (!card) {
    return {
      title: "Relic card",
      description: "This card is not available.",
    };
  }

  const name = card.display_name || "Someone";
  const role = [card.title, card.company].filter(Boolean).join(" at ");
  const description = card.tagline
    ? card.tagline
    : role
      ? `${name}, ${role}. Save the contact and get your own Relic.`
      : `Save ${name} to your contacts and get your own Relic.`;

  return {
    title: `${name} | Relic card`,
    description,
    openGraph: {
      title: `${name} | Relic card`,
      description,
      url: `https://echoforge.to/r/${card.handle}`,
      siteName: "Relic",
      type: "profile",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: `${name} | Relic card`,
      description,
    },
  };
}

function MadeWithRelic() {
  return (
    <Link
      href="/relic"
      className="inline-flex items-center gap-2 text-xs hover:opacity-80 transition-opacity"
      style={{ color: TEXT_TERTIARY, fontFamily: mono }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: AMBER }}
      />
      Made with Relic
    </Link>
  );
}

function PageShell({ children }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{
        backgroundColor: BG,
        color: TEXT,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {children}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href={FONT_LINK} rel="stylesheet" />
    </div>
  );
}

function CardUnavailable() {
  return (
    <PageShell>
      <div
        className="w-full max-w-md rounded-3xl border p-8 text-center"
        style={{ backgroundColor: CARD, borderColor: BORDER }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase mb-5"
          style={{ color: TEXT_TERTIARY, fontFamily: mono }}
        >
          Relic card
        </p>
        <h1
          className="text-3xl mb-4"
          style={{ fontFamily: serif, fontWeight: 400 }}
        >
          This card is not available.
        </h1>
        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: TEXT_SECONDARY }}
        >
          The link may be wrong, or this person has not made their card public.
        </p>
        <Link
          href="/relic"
          className="w-full inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold text-base transition-all hover:brightness-105 active:scale-[0.98]"
          style={{ backgroundColor: AMBER, color: "#1C1917" }}
        >
          Get your own Relic
        </Link>
      </div>

      <div className="mt-8">
        <MadeWithRelic />
      </div>
    </PageShell>
  );
}

function LinkButton({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:border-[#F59E0B] hover:text-[#1C1917]"
      style={{ borderColor: BORDER, color: TEXT_SECONDARY }}
    >
      <Icon size={17} strokeWidth={1.75} style={{ color: TEXT_TERTIARY }} />
      {label}
    </a>
  );
}

// X (formerly Twitter) has no Lucide brand glyph that reads cleanly, so an
// inline mark keeps the row consistent with the other link buttons.
function XLinkButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium transition-all hover:border-[#F59E0B] hover:text-[#1C1917]"
      style={{ borderColor: BORDER, color: TEXT_SECONDARY }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ color: TEXT_TERTIARY }}
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      X
    </a>
  );
}

export default async function PublicCardPage({ params }) {
  const { handle } = await params;
  const card = await getPublicCard(handle);

  if (!card) {
    return <CardUnavailable />;
  }

  const role = [card.title, card.company].filter(Boolean).join(" at ");
  const links = card.links || {};
  const hasLinks = links.site || links.x || links.linkedin;

  return (
    <PageShell>
      <CardViewTracker handle={card.handle} />

      <div className="w-full max-w-md">
        <div
          className="rounded-3xl border p-8 md:p-10"
          style={{ backgroundColor: CARD, borderColor: BORDER }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-6"
            style={{ color: TEXT_TERTIARY, fontFamily: mono }}
          >
            Relic card
          </p>

          <h1
            className="text-4xl md:text-5xl leading-[1.05] mb-3"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            {card.display_name}
          </h1>

          {role ? (
            <p className="text-base mb-5" style={{ color: TEXT_SECONDARY }}>
              {role}
            </p>
          ) : null}

          {card.tagline ? (
            <p
              className="text-lg leading-relaxed mb-7"
              style={{ color: TEXT, fontFamily: serif, fontWeight: 400 }}
            >
              {card.tagline}
            </p>
          ) : null}

          {hasLinks ? (
            <div className="flex flex-wrap gap-2.5 mb-8">
              {links.site ? (
                <LinkButton href={links.site} label="Website" icon={Globe} />
              ) : null}
              {links.x ? <XLinkButton href={links.x} /> : null}
              {links.linkedin ? (
                <LinkButton
                  href={links.linkedin}
                  label="LinkedIn"
                  icon={Linkedin}
                />
              ) : null}
            </div>
          ) : null}

          <CardActions card={card} />
        </div>

        <div className="mt-8 flex justify-center">
          <MadeWithRelic />
        </div>
      </div>
    </PageShell>
  );
}
