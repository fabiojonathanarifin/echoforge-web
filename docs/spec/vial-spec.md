# Vial Landing Page — Design Spec

**Date:** 2026-04-23
**Author:** Fabio / EchoForge
**Ship target:** April 30, 2026 (with app)

---

## 1. Goal

Convert visitors to App Store downloads. Single CTA throughout: **"Download on the App Store."** No pricing section. No secondary CTAs. No waitlist. Clean funnel.

---

## 2. ICP Insight (informs design)

Two audiences, one design:

| Segment            | Profile                                               | Design need                                    |
| ------------------ | ----------------------------------------------------- | ---------------------------------------------- |
| GLP-1 users        | 78% female, 30–55, $100K+ HHI, Oura/Whoop energy      | Premium, clean, trustworthy                    |
| Peptide biohackers | Male-skewing, 25–45, tech-adjacent, Huberman audience | Precision instrument, numbers front and center |

The intersection: **premium health-tech with data precision.** Think Levels Health × Whoop. Not crypto. Not gym-bro. Not clinical.

---

## 3. Design Direction: Typographic-Led, Dark Throughout

- Background `#0A0A0A` (entire page — no light sections)
- Electric mint `#00E5A0` on: CTA buttons, key headline words, stat callouts only
- `#262626` horizontal rules between sections — no colored dividers
- No glow effects, no glassmorphism, no decorative elements
- Type does all the work — copy from PRD is already strong

### Typography

| Use             | Font                                | Notes                                                       |
| --------------- | ----------------------------------- | ----------------------------------------------------------- |
| Headings + body | Geist Sans (already scaffolded)     | Tight letter-spacing on large type (`-0.03em` to `-0.05em`) |
| All numbers     | JetBrains Mono (`next/font/google`) | "5 units", "250 mcg", "3 seconds" — every numeric callout   |

### Color tokens (defined in `globals.css`)

```css
@theme inline {
  --color-bg: #0a0a0a;
  --color-surface: #141414;
  --color-border: #262626;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-text-muted: #606060;
  --color-accent: #00e5a0;
  --color-accent-dim: #00e5a033;
  --color-accent-text: #0a0a0a;
}
```

---

## 4. Sections

### 4.1 Nav

**Layout:** Logo left, CTA right. Sticky. Backdrop blur on scroll.

| Element         | Spec                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| Logo            | Text "vial" in Geist, lowercase, `font-semibold`. Small mint circle (●) before the word.                  |
| CTA button      | "Download" — pill shape (`border-radius: 999px`), mint bg, dark text, `px-5 py-2`                         |
| Sticky behavior | `position: sticky; top: 0; backdrop-filter: blur(12px); background: rgba(10,10,10,0.8)`                   |
| Mobile          | Hamburger only if needed — this is a single-page site with anchor links, so a simple mobile CTA is enough |

---

### 4.2 Hero

**Layout:** Full viewport height on desktop — left column (55%) copy, right column (45%) phone mockup. On mobile: single column, copy first, phone mockup below (hidden or shown at 60% width, centered).

**Left column:**

| Element           | Copy                                                                                                | Style                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Eyebrow label     | `FOR PEPTIDE PROTOCOLS`                                                                             | `font-mono text-xs tracking-widest text-accent uppercase`             |
| H1                | `The peptide app you open every day.`                                                               | `text-5xl md:text-7xl font-bold tracking-tight` — "every day" in mint |
| Subhead           | `Reconstitute. Dose. Track. Calculator, tracker, and AI coach in one beautifully designed iOS app.` | `text-lg text-secondary max-w-md`                                     |
| App Store badge   | Apple-standard black badge SVG                                                                      | Links to App Store URL (placeholder until live)                       |
| Social proof line | `Built for GLP-1, BPC-157, TB-500, and every other protocol.`                                       | `text-sm text-muted mt-4`                                             |

**Right column:**

Phone frame — built from divs, no images needed for the frame itself. Inner content is the asset placeholder.

```
[ASSET PLACEHOLDER]
Outer frame: dark rounded rect, aspect-ratio 9/19.5, ~320px wide, border 2px solid #262626
Inner: replaced by hero-phone asset when ready
```

---

### 4.3 Problem

**Layout:** Section headline centered, then 3-column grid, then a full-width callout row.

**Headline:** `Every other app solves one thing.`
**Subhead:** `Most peptide apps pick one lane. We didn't.`

**3-column grid:**

| Column         | Label                 | What they miss                                                 |
| -------------- | --------------------- | -------------------------------------------------------------- |
| The Calculator | "Great at the math."  | "No tracking. No reminders. You open it once a week."          |
| The Tracker    | "Great for one drug." | "GLP-1 only. No BPC-157, no TB-500, no stacks."                |
| The Reference  | "Great for research." | "Too deep to open daily. No calculator. No protocol tracking." |

Each column: icon (simple SVG — calculator, chart, book), label in mint caps, one-liner in muted text.

**Callout row (full-width, `surface` bg):**

```
"Vial does all three.  $9.99.  Yours forever."
```

Three stats side-by-side in JetBrains Mono, large. Mint separator dots between them.

---

### 4.4 Calculator Feature

**Layout:** Left = phone screenshot placeholder. Right = copy.

**Right copy:**

| Element      | Content                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| Label        | `CALCULATOR` in mint mono caps                                                                                     |
| H2           | `The math, done instantly.`                                                                                        |
| Bullets (3)  | Multi-peptide blend support (KLOW, GLOW stacks) / Water Solver — calculate backwards / U-20 to U-100 syringe types |
| Stat callout | `5` in JetBrains Mono large + `units for a 250mcg BPC-157 dose in a U-100 syringe` in small text                   |

**Left asset placeholder:**

```
[ASSET: screenshot-calculator.png]
Phone frame, same border treatment as hero
Aspect ratio: 9/19.5, ~280px wide
```

---

### 4.5 Tracker Feature

**Layout:** Reversed — right = phone screenshot placeholder. Left = copy.

**Left copy:**

| Element      | Content                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Label        | `TRACKER` in mint mono caps                                                                                                                     |
| H2           | `Your protocol. Your streak. Your ritual.`                                                                                                      |
| Bullets (3)  | Three-state logging: Logged, Skipped, Missed / Smart injection site rotation (avoids last 3 sites) / Local notifications — no internet required |
| Stat callout | `3` in JetBrains Mono large + `seconds to log a dose from your notification` in small text                                                      |

**Right asset placeholder:**

```
[ASSET: screenshot-tracker.png]
Same phone frame treatment
```

---

### 4.6 FAQ

**Layout:** Centered, max-width 680px, stacked (no accordion — simpler, better for SEO, no JS needed).

**6 questions:**

1. **Is Vial only for GLP-1?**
   No. Vial works with every peptide protocol — BPC-157, TB-500, GHK-Cu, semaglutide, tirzepatide, and any custom compound. If it has a dose, Vial tracks it.

2. **What does $9.99 get me?**
   The full app. Calculator, tracker, reminders, CSV export, unlimited protocols — forever. No subscription, no artificial limits.

3. **What is Vial AI?**
   An AI coach for your specific protocol. Ask it about your stack, missed doses, side effects, interactions. Launches May 7. Included free for Vial Lifetime users.

4. **Is my data private?**
   Yes. All data lives on your device. No account required. No server syncs your protocol data anywhere.

5. **What syringe types are supported?**
   U-20, U-30, U-40, and U-100. You can set a default in settings.

6. **Do you have a medical disclaimer?**
   Vial is a calculator and tracker tool, not a medical device or service. Always work with a qualified provider for protocol decisions. Full disclaimer in the app and at [vial.app/disclaimer].

---

### 4.7 Footer

**Layout:** 3-row stack, centered, `border-top: 1px solid #262626`.

| Row    | Content                                                                              |
| ------ | ------------------------------------------------------------------------------------ |
| Top    | App Store badge (centered)                                                           |
| Middle | Logo mark · `Privacy` · `Terms` · `Disclaimer` · `Support` (mailto:support@vial.app) |
| Bottom | `© 2026 EchoForge. Vial is not medical advice.` in muted small text                  |

---

## 5. Architecture

### File structure

```
app/
  layout.js                  — fonts, metadata, globals
  page.js                    — imports + renders all sections
  globals.css                — Tailwind v4 + brand color tokens
  components/
    Nav.js                   — sticky nav, 'use client' for scroll blur
    RevealWrapper.js         — 'use client', wraps server content with scroll reveal
    Hero.js                  — server component
    Problem.js               — server component
    CalculatorFeature.js     — server component
    TrackerFeature.js        — server component
    FAQ.js                   — server component
    Footer.js                — server component
public/
  assets/
    app-store-badge.svg      — Apple-standard black badge
    og-image.png             — 1200×630 Open Graph image
```

### Key decisions

| Decision       | Choice                                              | Why                                                                                                                  |
| -------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `'use client'` | Nav only (scroll blur state) + RevealWrapper        | Everything else is static — no client bundle bloat                                                                   |
| Animations     | CSS `transition` + `RevealWrapper` client component | Section components stay server-rendered; `RevealWrapper` wraps them client-side for scroll reveal. No Framer Motion. |
| Images         | `next/image` for all screenshots                    | Auto-optimization, lazy load, no layout shift                                                                        |
| Fonts          | `next/font/google` for JetBrains Mono               | No FOUT, self-hosted by Next.js                                                                                      |
| Brand tokens   | `@theme inline` in `globals.css`                    | Tailwind v4 pattern — no config file needed                                                                          |
| Metadata       | Exported `metadata` object in `layout.js`           | Next.js 16 App Router pattern                                                                                        |

### Metadata (`layout.js`)

```js
export const metadata = {
  title: "Vial — Peptide Calculator + Dose Tracker",
  description:
    "The daily companion for peptide protocols. Reconstitute, dose, and track BPC-157, semaglutide, TB-500, and more. $9.99 one-time on iOS.",
  openGraph: {
    title: "Vial — Peptide Calculator + Dose Tracker",
    description: "The daily companion for peptide protocols.",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vial — Peptide Calculator + Dose Tracker",
    images: ["/assets/og-image.png"],
  },
};
```

### Scroll reveal pattern

Server components stay server-rendered. `RevealWrapper` is the only client boundary for animations:

```js
// app/components/RevealWrapper.js
"use client";
import { useEffect, useRef } from "react";

export function RevealWrapper({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed");
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
```

CSS in globals.css:

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

Usage in page.js:

```js
<RevealWrapper>
  <CalculatorFeature />
</RevealWrapper>
```

---

## 6. Asset Requirements

**Provide these before final polish pass:**

| Asset                            | File name                                 | Spec                                                                               |
| -------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- |
| Hero phone video (preferred)     | `public/assets/hero-phone.mp4`            | 10–15s loop, muted, 720px wide MP4, the app's aha moment (syringe meter animating) |
| Hero phone screenshot (fallback) | `public/assets/hero-phone.png`            | Calculator or Today screen, @3x PNG                                                |
| Calculator screen screenshot     | `public/assets/screenshot-calculator.png` | Calculator screen with syringe meter visible, @3x PNG                              |
| Tracker screen screenshot        | `public/assets/screenshot-tracker.png`    | Today screen with DUE NOW card visible, @3x PNG                                    |
| App Store badge                  | `public/assets/app-store-badge.svg`       | Apple-standard black badge (download from Apple's marketing resources)             |
| Open Graph image                 | `public/assets/og-image.png`              | 1200×630px, dark bg, Vial logo + tagline, mint accent                              |

> These slots are built as placeholder `<div>` elements with correct aspect ratios and comments. Drop the files in and they replace automatically via `next/image src` props.

---

## 7. Copy Reference

All copy sourced from PRD. Key lines:

- **Primary tagline:** "The peptide app you open every day."
- **Alt taglines:** "Reconstitute. Dose. Track." / "Built for the daily ritual."
- **Voice:** Confident, not preachy. Direct, builder-energy. No medical hedging beyond required disclaimers. Numbers are sacred.
- **Never:** Em dashes, "Introducing...", "Unlock the power of...", "Seamlessly..."

---

## 8. Out of Scope

- Pricing section (removed per decision)
- Vial AI teaser / email capture (removed per decision)
- Light mode
- Animations beyond scroll-reveal fades
- Blog, press kit, or subpages (v2)
- Internationalization
