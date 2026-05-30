"use client";

import { buildVCard } from "@/lib/vcard";

const AMBER = "#F59E0B";

// Where "Get your own Relic" sends people. No App Store listing yet, so this
// points at the Relic waitlist. Swap to the App Store URL on launch.
const GET_RELIC_URL = "/relic";

// TODO(analytics): echoforge-web has no analytics library wired yet. When one
// is added (PostHog, GA4, or a /api/track route), fire these events from the
// handlers below. Event names are stable so instrumentation is a drop-in.
const track = (event, props = {}) => {
  if (typeof window === "undefined") return;
  // TODO: replace with real analytics call. Left as a no-op log for now.
  if (window?.console) {
    console.debug("[relic-card]", event, props);
  }
};

const downloadVCard = (card) => {
  const vcard = buildVCard(card);
  if (!vcard) return;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${card.handle || "contact"}.vcf`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
};

export default function CardActions({ card }) {
  const handleSave = () => {
    track("card_saved_vcard", { handle: card.handle });
    downloadVCard(card);
  };

  const handleCta = () => {
    track("card_cta_clicked", { handle: card.handle });
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleSave}
        className="w-full inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold text-base transition-all hover:brightness-105 active:scale-[0.98]"
        style={{ backgroundColor: AMBER, color: "#1C1917" }}
      >
        Save contact
      </button>
      <a
        href={GET_RELIC_URL}
        onClick={handleCta}
        className="w-full inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold text-base border transition-all hover:bg-[#F59E0B]/5 active:scale-[0.98]"
        style={{ borderColor: "#E7E0D8", color: "#44403C" }}
      >
        Get your own Relic
      </a>
    </div>
  );
}
