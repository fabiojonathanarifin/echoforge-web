"use client";

import { useEffect } from "react";

// Fires card_viewed once on mount. The page is server-rendered, so view
// telemetry has to happen client-side.
//
// TODO(analytics): no analytics library is wired in echoforge-web yet. When
// one exists (PostHog, GA4, or a /api/track route), send the event here.
export default function CardViewTracker({ handle }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // TODO: replace with real analytics call.
    if (window?.console) {
      console.debug("[relic-card]", "card_viewed", { handle });
    }
  }, [handle]);

  return null;
}
