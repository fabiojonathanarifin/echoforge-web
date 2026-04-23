# Vial — Comprehensive PRD (v1.0)

**Author:** Fabio / EchoForge
**Date:** April 23, 2026
**Build window:** 7 days (overnight grind acceptable)
**v1.0 ship target:** April 30, 2026 (App Store submission)
**v1.1 ship target:** May 10, 2026 (AI Coach + advanced features)

---

## TL;DR

Vial is the daily companion for people on peptide protocols — calculator, tracker, and (in v1.1) AI coach in one beautifully designed iOS app.

**Stack:** React Native + Expo, SQLite local-first, Cloudflare Worker for AI proxy, RevenueCat for IAP.

**Pricing:**
- **Vial** — $9.99 one-time (calculator + tracker, full features, no expiry)
- **Vial AI** — $7.99/mo or $49.99/yr (AI coach add-on, recurring)
- **Vial Lifetime** — $99 launch week / $149 regular (Vial + AI forever)

**Position:** Not the encyclopedia (Peptidely owns that). Not the calculator-only tool (PepCalc owns that). Not the GLP-1-only tracker (Shotsy owns that). **The daily app you open 2-5 times a day.**

---

## Table of contents

1. [Strategic position](#1-strategic-position)
2. [Competitor analysis](#2-competitor-analysis)
3. [12 user pain points we solve](#3-twelve-user-pain-points-we-solve)
4. [Brand: Vial](#4-brand-vial)
5. [Design system](#5-design-system)
6. [Tech stack (locked)](#6-tech-stack-locked)
7. [Architecture & folder structure](#7-architecture)
8. [Database schema](#8-database-schema)
9. [v1.0 feature scope](#9-v10-feature-scope)
10. [Pricing & paywall](#10-pricing--paywall)
11. [Key user flows](#11-key-user-flows)
12. [Screen specifications](#12-screen-specifications)
13. [The syringe meter (hero element)](#13-the-syringe-meter)
14. [Calculation logic](#14-calculation-logic)
15. [Notifications](#15-notifications)
16. [Vial AI architecture (v1.1)](#16-vial-ai-architecture-v11)
17. [Analytics events](#17-analytics-events)
18. [Legal & compliance](#18-legal--compliance)
19. [The 7-day build schedule](#19-the-7-day-build-schedule)
20. [Definition of done](#20-definition-of-done)
21. [Appendices](#21-appendices)

---

## 1. Strategic position

The peptide app market splits into four categories, each with one clear leader, EXCEPT one — which is wide open and exactly where Vial sits.

| Category | Leader | What they own | What they don't |
|----------|--------|---------------|-----------------|
| Reconstitution calculator | **PepCalc** ($9.99 one-time, podcast-featured) | Pure calculator UX, multi-peptide blends, Ben Greenfield credibility | Daily tracking, AI, protocol management, recurring engagement |
| Peptide encyclopedia + AI consultant | **Peptidely** (free, March 2026 launch) | Education, evidence grades, research depth, AI Q&A | Daily protocol tracking, reminders, streaks, polish |
| GLP-1 daily tracker | **Shotsy** ($1M ARR, $2.25M raised, 100K+ DLs) | Beautiful tracker, half-life chart, Apple Health, GLP-1 brand | Calculator, non-GLP-1 peptides, AI |
| Niche all-in-one trackers | PeptideKit, Peptide Log, PepTracker, Stacked | Each has 1-2 features | Polish, daily UX, AI, momentum |
| **Daily peptide companion** | **NO CLEAR WINNER** | — | This is Vial's gap to own. |

### What "daily companion" means

PepCalc users open it once a week for math. Peptidely users open it once a month for reference. Shotsy users only see it for one drug. **Vial users open it 2-5 times every single day:**

- **Morning:** Check what's due, log breakfast injection
- **Midday:** Reconstitute new vial, calculate dose
- **Evening:** Log evening injection, glance at streak
- **Anytime:** Ask AI about protocol question (v1.1)

That daily ritual is the moat. A user who opens an app 5x/day doesn't churn. They become evangelists. They write reviews. They post on TikTok.

### The product trinity

Three pillars, each best-in-class:

1. **Best calculator on the App Store** (matches PepCalc feature parity, better UX)
2. **Best tracker for stacks** (multi-peptide-first, smart site rotation, streaks)
3. **Best AI coach for protocols** (v1.1, focused on YOUR protocol, not encyclopedic)

No competitor has all three. Most have one. Some have two but mediocre. Vial ships all three at quality.

---

## 2. Competitor analysis

### 2.1 PepCalc — the calculator king

**Steal:**
- "Last input remembered" — small UX win, big retention impact
- Multi-peptide blend support (KLOW, GLOW stacks)
- U20/U30/U40/U100 syringe type selection
- Saved protocols with notes
- "Undo within 7 seconds" for accidental clears
- Water Solver (calculate backwards: how much water for desired concentration?)
- 5 color theme options (we offer dark default + light fallback only — opinionated)

**Beat:**
- Calculator-only, no daily tracker
- No AI assistant
- No protocol management
- No reminders
- $9.99 one-time = no engagement loop

**Vial vs PepCalc:** Match calculator features (multi-peptide, multi-syringe, undo, water solver, last-input). Add tracker + AI. Same price, more value. PepCalc users will switch.

### 2.2 Peptidely — The Peptide Bible

**Steal:**
- Evidence grading (Strong/Moderate/Limited) for each peptide
- Peer-reviewed citations
- "Access pathways" section (prescription / compounding / clinical trial / grey market)
- Honest framing — no hype

**Beat:**
- Reference-first, not daily-use
- Calculator is afterthought
- No protocol tracking
- 2 ratings (March 2026, no momentum yet)
- AI is "tell me about peptides" not "help me with MY protocol"

**Vial vs Peptidely:** They own education. We own daily use. Different categories. Many users will have BOTH. Don't out-encyclopedia them; complement.

### 2.3 Shotsy — the GLP-1 winner

**Steal:**
- Estimated medication levels chart (most-praised feature in their reviews)
- Apple Health integration
- Streak / progress visualization
- PDF export for providers
- "Just works" reliability bar

**Beat:**
- GLP-1 ONLY — no BPC-157, TB-500, GHK-Cu
- "I just wish it had a calculator" (literal review quote)
- No AI assistant
- 5-min time increments missing (review complaint)
- Slow loading from iCloud sync
- VC-funded slower iteration

**Vial vs Shotsy:** Don't fight head-on for pure GLP-1 users. Be the broader-market alternative for stack users. The GLP-1 + BPC-157 crossover (huge trend) comes to us.

### 2.4 Everyone else

| App | Steal | Why we beat them |
|-----|-------|------------------|
| PeptideKit | CSV export, dose tapering, journal entries | Only 28 ratings = no momentum. We polish + AI. |
| Peptide Log | Pen + vial support, consumables tracking | Crash-fix updates EVERY release. Quality bar low. |
| PepTracker | On/off cycle scheduling, protocol templates | Reminders need internet. We're offline-first. |
| Stacked | Side effect tracking with severity | $9.99/WEEK pricing = predatory, bad reviews. |
| PeptideJournal | Local-only privacy positioning | iPad-focused, no AI. |
| Peptides Calculator v7 | Vial inventory tracking | Bloated (AI meal plans? no thanks). Vial focuses. |

---

## 3. Twelve user pain points we solve

Cross-referenced from every competitor's reviews. These are what users actually beg for:

| # | User pain | Vial solution | Ship |
|---|-----------|---------------|------|
| 1 | "I just wish it had a calculator" | Calculator + tracker in one | v1.0 |
| 2 | 5-min time increments missing | 1-min granularity time picker | v1.0 |
| 3 | No Apple Health sync | Weight + sleep import | v1.1 |
| 4 | No CSV export | Export protocol history | v1.0 |
| 5 | No dose tapering | Per-protocol taper schedules | v1.1 |
| 6 | No on/off cycle scheduling | Cycle countdown on Today | v1.0 |
| 7 | Manual injection site rotation | Smart suggestion (avoid last 3) | v1.0 |
| 8 | Reminders need internet | All scheduled locally | v1.0 |
| 9 | Subscription-only pricing kills users | $9.99 one-time + $99 lifetime tier | v1.0 |
| 10 | Multi-peptide stack logging painful | "Log stack" multi-select flow | v1.1 |
| 11 | No half-life curves | Interactive medication level chart | v1.1 |
| 12 | Can't skip vs miss vs log distinction | Three-state (logged/skipped/missed) | v1.0 |

7 in v1.0, 5 in v1.1 (week 2). More than any competitor has shipped to date.

---

## 4. Brand: Vial

### Stack

| Element | Value |
|---------|-------|
| Brand | Vial |
| App Store name | Vial: Peptide Calculator |
| Subtitle | Reconstitution + Dose Log |
| Pro tier | Vial Pro (legacy, but actually now: Vial = full app) |
| AI feature | Vial AI |
| Lifetime tier | Vial Lifetime |
| Domain | vial.app (preferred) → getvial.app → vialapp.com |
| Email | hello@vial.app, support@vial.app |
| Tagline (primary) | The peptide app you open every day. |
| Tagline (alt) | Reconstitute. Dose. Track. |
| Tagline (alt) | Built for the daily ritual. |

### Voice

- **Confident, not preachy.** "Logged" not "Great job logging your dose!"
- **Direct, builder-energy.** "We built Vial because spreadsheets at 11pm are insulting."
- **No medical hedging beyond required disclaimers.** Smart-friend tone.
- **Numbers are sacred.** Show them cleanly. No emoji on numbers.
- **Bryan Johnson Don't-Die energy** in marketing. **Apple-level restraint** in-app.

### What Vial is NOT

- Preachy wellness
- Hospital-clinical
- Gym-bro aggressive
- Woo-woo biohacking
- Corporate medical

### What Vial IS

- Precise
- Fast
- Beautiful
- Honest
- Built by builders, for users

---

## 5. Design system

### Colors (final, locked)

```javascript
// src/theme/colors.js
export const colors = {
  // Backgrounds (true dark mode, no off-blacks)
  bg: '#0A0A0A',           // Near-black — easier on eyes than #000
  surface: '#141414',       // Cards, modals
  surfaceHigh: '#1F1F1F',  // Higher elevation (sheets over cards)
  border: '#262626',        // Subtle dividers
  borderActive: '#3F3F3F', // Focused inputs

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#A0A0A0',
  textMuted: '#606060',
  textInverse: '#0A0A0A',  // Text on accent buttons

  // Accent — single accent system
  accent: '#00E5A0',        // Electric mint
  accentDim: '#00E5A033',   // 20% opacity for backgrounds, glows
  accentText: '#0A0A0A',    // Dark text on accent buttons

  // Semantic
  success: '#00E5A0',       // Same as accent
  warning: '#FFB800',       // Amber (missed dose, late warnings)
  danger: '#FF4757',        // Red (delete, errors)
  info: '#5B9BFF',          // Blue (info tooltips)

  // Misc
  shadow: 'rgba(0, 229, 160, 0.15)', // Subtle accent glow
  overlay: 'rgba(0, 0, 0, 0.6)',     // Modal backdrop
};
```

**Why electric mint (#00E5A0):**
- Distinctive from competitors (most use medical-mint or generic blue)
- Readable in dark mode (high contrast)
- Not obnoxiously neon
- Pairs beautifully with white + mono numbers
- "Healthy/precise" without being clinical
- Tested at 60×60 home screen — pops without screaming

### Typography

```javascript
// src/theme/typography.js
export const typography = {
  // Display: hero moments only (onboarding, empty states)
  display: {
    fontFamily: 'System', // SF Pro Display via system
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: -1.5,
    lineHeight: 52,
  },

  // Title: screen headers
  title: {
    fontFamily: 'System',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: 32,
  },

  // Heading: card titles
  heading: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.3,
    lineHeight: 24,
  },

  // Body: default text
  body: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },

  // Label: input labels, metadata
  label: {
    fontFamily: 'System',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.2,
    lineHeight: 16,
    textTransform: 'uppercase',
  },

  // Caption: timestamps, helper text
  caption: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
  },

  // ★ Numbers: the hero. Use everywhere a number appears.
  numberHero: {
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 64,
    fontWeight: '700',
    letterSpacing: -2,
    lineHeight: 64,
  },

  numberLarge: {
    fontFamily: 'JetBrainsMono-Bold',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -1,
    lineHeight: 36,
  },

  numberMedium: {
    fontFamily: 'JetBrainsMono-Medium',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },

  numberSmall: {
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  },
};
```

**Number typography is the unfair advantage.** Every competitor uses default system fonts for numbers. Vial uses JetBrains Mono — instantly looks like a precision instrument vs a tracking app.

### Spacing (8pt grid)

```javascript
// src/theme/spacing.js
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const radius = {
  sm: 8,    // Small buttons, chips
  md: 12,   // Inputs
  lg: 16,   // Cards
  xl: 24,   // Modals, sheets
  pill: 999, // Pill buttons
};
```

### Animation principles

- **Spring physics, never linear.** Default: `withSpring({ damping: 15, stiffness: 150 })`
- **All taps:** scale to 0.96 + haptic light
- **Log success:** scale pulse + green flash + haptic medium + sound (subtle)
- **Streak milestone:** full-screen takeover (Lottie or custom Reanimated) + haptic heavy
- **Syringe meter:** smooth spring animation as user types
- **Number changes:** scale-pulse the new value briefly

### App icon brief

**Direction:**
- Black background (#000)
- Single iconic vial silhouette in electric mint (#00E5A0)
- Subtle "liquid level" indicator (~70% fill in slightly darker mint)
- No text on icon
- No medical crosses, no syringes, no pharma vibes

**Variants to design (pick best):**
1. Minimal silhouette — pure outline, line weight ~3px
2. Filled with liquid — solid vial with darker liquid level
3. Geometric — vial reduced to essential shapes
4. Glowing — vial with subtle accent glow

**Reference vibes:**
- Whoop (single color, clean)
- Bryan Johnson Blueprint (mono + accent)
- Linear (geometric clarity)
- Levels Health (clean type)
- ❌ MyFitnessPal, ❌ Apple Health (too clinical)

**Specs:** 1024×1024 source PNG, no transparency, no rounded corners (Apple does that), tested at 60×60 home screen size.

---

## 6. Tech stack (locked)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Expo SDK 53+ (managed workflow) | EAS Build for App Store |
| Language | JavaScript | Lean and fast, ships quick |
| Navigation | expo-router (file-based) | Cleaner than React Navigation |
| Local DB | expo-sqlite (raw SQL) | Fast, simple, no ORM overhead |
| State | Zustand | One store per domain, no Redux ceremony |
| Styling | StyleSheet + theme tokens | No NativeWind, just typed constants |
| Animations | react-native-reanimated 3 | Syringe meter spring physics |
| Canvas | @shopify/react-native-skia | GPU-accelerated syringe drawing |
| Haptics | expo-haptics | Tap feedback on every interaction |
| Notifications | expo-notifications (local only) | No backend needed in v1.0 |
| IAP | react-native-purchases (RevenueCat) | Already in your stack |
| Analytics | posthog-react-native | Already in your stack |
| Crash | PostHog error tracking | Already in your stack |
| AI proxy (v1.1) | Cloudflare Worker | Free tier, hides API key |
| AI model (v1.1) | GPT-4o mini | Cheapest viable, with safety system prompt |
| Build/Deploy | EAS Build + EAS Submit | Standard Expo flow |
| Attribution | Singular (already configured) | For paid TikTok later |
| Custom font | JetBrains Mono via expo-font | Numbers are the hero |

### Dependencies to install Day 1

```bash
npx create-expo-app vial --template blank
cd vial
npx expo install expo-sqlite expo-notifications expo-haptics expo-font expo-router expo-status-bar
npx expo install react-native-reanimated react-native-gesture-handler @shopify/react-native-skia react-native-screens react-native-safe-area-context
npm install zustand react-native-purchases posthog-react-native
npx expo install expo-application expo-device # For device ID generation
```

---

## 7. Architecture

### Folder structure (expo-router)

```
app/                              # expo-router screens
  _layout.jsx                     # Root: providers, theme, fonts
  index.jsx                       # Today (default tab)
  calculator.jsx                  # Calculator
  protocols/
    index.jsx                     # Protocols list
    [id].jsx                      # Protocol detail
    new.jsx                       # New protocol modal
  ai.jsx                          # Vial AI (locked v1.0)
  settings.jsx
  onboarding/
    _layout.jsx
    welcome.jsx
    calculator.jsx
    tracker.jsx
    notifications.jsx
    first-protocol.jsx
  log-modal.jsx                   # Log injection modal
  paywall.jsx                     # Paywall sheet
  +not-found.jsx

src/
  db/
    init.js                       # SQLite open + migrations
    schema.js                     # CREATE TABLE statements
    migrations.js                 # Versioned migrations
    queries/
      protocols.js
      logs.js
      vials.js
      app_state.js
  stores/
    protocols.js                  # Zustand store
    logs.js
    vials.js
    settings.js
    purchases.js                  # RevenueCat state
  components/
    SyringeMeter.jsx              # Skia canvas
    PeptidePicker.jsx
    NumberInput.jsx
    PrimaryButton.jsx
    SecondaryButton.jsx
    Card.jsx
    EmptyState.jsx
    StreakBadge.jsx
    DueCard.jsx
  data/
    peptides.js                   # 15 hardcoded peptide presets
  services/
    notifications.js              # expo-notifications wrapper
    purchases.js                  # RevenueCat wrapper
    analytics.js                  # PostHog wrapper
    ai.js                         # AI client (v1.1)
  utils/
    calc.js                       # Reconstitution math
    dates.js
    streak.js
    deviceId.js
  theme/
    colors.js
    typography.js
    spacing.js
    index.js                      # Re-exports
  constants.js                    # API URLs, app secrets

assets/
  fonts/
    JetBrainsMono-Regular.ttf
    JetBrainsMono-Medium.ttf
    JetBrainsMono-Bold.ttf
  icon.png
  splash.png
  adaptive-icon.png
```

### Data flow

```
User input → Zustand action → SQLite write → Zustand re-read → UI re-render
                                ↓
                         Schedule notification (if relevant)
                                ↓
                         PostHog event (if relevant)
```

No backend in v1.0 except RevenueCat (managed). Everything else local.

---

## 8. Database schema

```sql
-- Protocols
CREATE TABLE IF NOT EXISTS protocols (
  id TEXT PRIMARY KEY,
  peptide_id TEXT NOT NULL,
  custom_peptide_name TEXT,         -- For "Custom" peptide entries
  dose_mcg REAL NOT NULL,
  frequency TEXT NOT NULL CHECK(frequency IN ('daily', 'weekly', 'custom')),
  scheduled_days TEXT,              -- JSON array of weekday numbers if weekly
  interval_days INTEGER,            -- if custom
  time_of_day TEXT NOT NULL,        -- HH:mm
  start_date TEXT NOT NULL,         -- ISO date
  end_date TEXT,                    -- ISO date or NULL
  cycle_on_days INTEGER,            -- Optional: on/off cycle support
  cycle_off_days INTEGER,
  vial_mg REAL NOT NULL,
  bac_water_ml REAL NOT NULL,
  syringe_type TEXT NOT NULL DEFAULT 'U100', -- U20, U30, U40, U100
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_protocols_active ON protocols(is_active);

-- Log entries (logged, skipped, or auto-marked missed)
CREATE TABLE IF NOT EXISTS log_entries (
  id TEXT PRIMARY KEY,
  protocol_id TEXT,
  peptide_id TEXT NOT NULL,
  dose_mcg REAL NOT NULL,
  site TEXT CHECK(site IN ('LAbd','RAbd','LThigh','RThigh','LDelt','RDelt','Glute')),
  status TEXT NOT NULL CHECK(status IN ('logged', 'skipped', 'missed')),
  logged_at TEXT NOT NULL,          -- ISO datetime
  scheduled_at TEXT,                 -- ISO datetime (when it was supposed to happen)
  notes TEXT,
  side_effects TEXT,                 -- JSON array of side effect codes
  is_on_schedule INTEGER NOT NULL DEFAULT 1,
  FOREIGN KEY(protocol_id) REFERENCES protocols(id) ON DELETE SET NULL
);

CREATE INDEX idx_logs_logged_at ON log_entries(logged_at DESC);
CREATE INDEX idx_logs_protocol ON log_entries(protocol_id);
CREATE INDEX idx_logs_status ON log_entries(status);

-- Saved vials (for calculator quick-recall)
CREATE TABLE IF NOT EXISTS saved_vials (
  id TEXT PRIMARY KEY,
  nickname TEXT NOT NULL,
  peptide_id TEXT NOT NULL,
  vial_mg REAL NOT NULL,
  bac_water_ml REAL NOT NULL,
  default_dose_mcg REAL NOT NULL,
  syringe_type TEXT NOT NULL DEFAULT 'U100',
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Multi-peptide blends (for stack vials like KLOW, GLOW)
CREATE TABLE IF NOT EXISTS vial_blends (
  vial_id TEXT NOT NULL,
  peptide_id TEXT NOT NULL,
  amount_mg REAL NOT NULL,
  PRIMARY KEY (vial_id, peptide_id),
  FOREIGN KEY (vial_id) REFERENCES saved_vials(id) ON DELETE CASCADE
);

-- App state (singletons)
CREATE TABLE IF NOT EXISTS app_state (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
-- Used for: onboarding_complete, disclaimer_accepted, last_streak_milestone,
-- ai_notify_email, last_calc_inputs (for "remember last input"), theme_preference
```

### Migration strategy

```javascript
// src/db/migrations.js
const MIGRATIONS = [
  {
    version: 1,
    sql: `
      /* All CREATE TABLE statements above */
    `,
  },
  // Future: { version: 2, sql: 'ALTER TABLE protocols ADD COLUMN ...' }
];

export async function runMigrations(db) {
  const result = await db.getFirstAsync(
    "SELECT value FROM app_state WHERE key = 'db_version'"
  );
  const currentVersion = result ? parseInt(result.value) : 0;
  
  for (const migration of MIGRATIONS) {
    if (migration.version > currentVersion) {
      await db.execAsync(migration.sql);
      await db.runAsync(
        "INSERT OR REPLACE INTO app_state (key, value) VALUES ('db_version', ?)",
        [String(migration.version)]
      );
    }
  }
}
```

---

## 9. v1.0 feature scope

### IN SCOPE

**Calculator (the wedge)**
- Reconstitution math: vial mg + BAC water mL → mg/mL concentration → syringe units
- Visual Skia syringe meter showing units to draw, animated as inputs change
- Pre-loaded vial sizes: 1, 2, 2.5, 5, 10, 15, 50mg
- Pre-loaded BAC volumes: 0.5, 1, 1.5, 2, 2.5, 3, 5mL
- Dose input: mcg or mg toggle, free entry
- Syringe type selection: U20, U30, U40, U100
- 15 peptide presets with sensible defaults (Appendix A)
- "Custom" peptide entry option
- "Save as my vial" → quick-recall via My Vials section
- "Last input remembered" — persists between sessions
- Water Solver mode: calculate backwards (target dose + concentration → BAC water)
- Multi-peptide blends (for KLOW, GLOW, custom stacks)
- Undo within 7 seconds for clears

**Tracker (the retention engine)**
- Add protocol: peptide, dose, frequency (daily / weekly / custom interval), start/end date, time of day
- Cycle scheduling: on-days / off-days for cyclic protocols
- Unlimited active protocols (you paid $9.99 — no artificial limits)
- Three-state logging: Logged, Skipped, Missed
- Log injection: one-tap from notification, or manual with site + time + notes
- Sites: dropdown (LAbd, RAbd, LThigh, RThigh, LDelt, RDelt, Glute)
- Smart site rotation suggestion (avoid last 3 sites)
- 1-min granularity time picker
- Today view: "Due now", "Up next", today's stats
- Calendar view: month grid with logged dose dots
- History list view: scrollable, filterable by peptide
- Streak counter (days without missing scheduled doses)
- CSV export (full history, share via standard iOS share sheet)

**Reminders (expo-notifications local)**
- Per-protocol schedule: time + day of week
- "Time for your dose" notification with deep-link to log modal
- "Dose missed" notification 2 hours after scheduled if not logged
- Streak milestone notifications (7, 14, 30, 60, 100 days)

**Onboarding (5 screens)**
- Welcome → Calculator preview → Tracker preview → Notification permission → First protocol setup (skippable)

**Settings**
- Notification preferences
- Default unit preference (mg / mcg / mL)
- Default syringe type (U100 / U40 / etc)
- About / Privacy / Terms links
- Restore purchases
- Health disclaimer (force-show on first launch)
- Reset data (with confirmation)
- Export all data to CSV

**Vial AI placeholder (locked tab)**
- Tab visible, locked screen: "Vial AI launches May 7"
- Email/notification capture
- Pre-validates demand

**Paywall (RevenueCat — LIVE in v1.0)**
- Hard paywall after onboarding completion (must purchase to use app — see pricing section)
- Three SKUs: $9.99 one-time, $99 lifetime bundle, $7.99/mo and $49.99/yr AI add-on (the AI subs work but feature is locked until v1.1)
- Restore purchases flow
- Family Sharing enabled

### OUT OF SCOPE (v1.1+)

- **v1.1 (week 2):**
  - Vial AI (full implementation)
  - Stack templates (Wolverine, GLOW, Recovery, Longevity)
  - Apple Health integration
  - Half-life decay charts (interactive)
  - Provider PDF export
  - Dose tapering schedules
  - Multi-peptide stack logging flow
  - Side effect tracking with severity

- **v1.2:**
  - iCloud sync across devices
  - Theme customization
  - Custom peptide profiles (user-defined defaults)

- **v1.3:**
  - Apple Watch app
  - Vendor logging / COA upload

- **v2.0:**
  - Android (React Native means relatively easy port)
  - Web companion

---

## 10. Pricing & paywall

### Final pricing (locked)

| SKU | Price | Type | What it unlocks |
|-----|-------|------|-----------------|
| `vial_app_lifetime` | **$9.99** | One-time | Full app: calculator + tracker + all features (NO AI) |
| `vial_ai_monthly` | **$7.99/mo** | Recurring | Vial AI coach (v1.1+) |
| `vial_ai_yearly` | **$49.99/yr** | Recurring | Vial AI coach (v1.1+) |
| `vial_lifetime_bundle` | **$99 launch / $149 regular** | One-time | App + AI forever |

### Why this works

1. **$9.99 upfront** matches PepCalc — peptide users have validated this price. We're better than PepCalc.
2. **Hard paywall** filters out tire-kickers, leads to better reviews, immediate revenue.
3. **AI as separate sub** lets us monetize power users recurringly without forcing the price up for casual users.
4. **Lifetime bundle** captures the "I hate subscriptions" crowd. Peptide bros LOVE lifetime.
5. **Launch discount on lifetime only** ($99 vs $149) creates urgency for TikTok marketing without training subscribers to wait for sales.

### Paywall flow

```
Onboarding complete → Paywall (hard) → Purchase → App unlocked
                              ↓
                      [Restore Purchases]
                              ↓
                      [Read more about Vial]
                              ↓
                      [Privacy / Terms]
```

**No 7-day trial.** Trial periods on $9.99 apps train users to set a calendar reminder and cancel. Just be priced fairly.

**No free tier.** This is the trade-off vs subscription model. Calculator + tracker for $9.99 once = fair deal. No artificial gates.

### Paywall screen copy

```
Headline:    Reconstitute. Dose. Track.
Sub:         The peptide app that does the math for you.

[Hero: animated syringe meter loop]

Three options:

┌────────────────────────────────────────┐
│  Vial                                  │
│  Full app, forever                     │
│  $9.99                                 │
│  Calculator · Tracker · Reminders      │
│  [Get Vial]                            │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  Vial Lifetime              ⚡ -$50    │
│  Vial + AI Coach, forever              │
│  $99 (regular $149)                    │
│  Everything · AI launches May 7        │
│  Launch week only                      │
│  [Get Lifetime]                        │
└────────────────────────────────────────┘

[Restore purchases] · [Privacy] · [Terms]

* Vial AI subscription available separately
  ($7.99/mo or $49.99/yr) after launch
```

### RevenueCat config

```
// In RevenueCat dashboard
Entitlements:
  - vial_app: Full app access (granted by vial_app_lifetime OR vial_lifetime_bundle)
  - vial_ai: AI Coach access (granted by vial_ai_monthly OR vial_ai_yearly OR vial_lifetime_bundle)

Offerings:
  - default
    - $rc_lifetime → vial_app_lifetime ($9.99)
    - $rc_lifetime_bundle → vial_lifetime_bundle ($99 / $149 after May 10)
    - $rc_monthly → vial_ai_monthly ($7.99/mo)
    - $rc_annual → vial_ai_yearly ($49.99/yr)

Products in App Store Connect:
  - Non-Consumable: vial_app_lifetime, vial_lifetime_bundle
  - Auto-Renewable Subscription: vial_ai_monthly, vial_ai_yearly (same Subscription Group: "Vial AI")
```

### Entitlement checks

```javascript
// src/services/purchases.js
import Purchases from 'react-native-purchases';

export async function hasAppAccess() {
  const info = await Purchases.getCustomerInfo();
  return info.entitlements.active['vial_app'] !== undefined;
}

export async function hasAIAccess() {
  const info = await Purchases.getCustomerInfo();
  return info.entitlements.active['vial_ai'] !== undefined;
}
```

---

## 11. Key user flows

### Flow A: First-time user (the critical 60 seconds)

1. **Splash** (logo, 1 second)
2. **Disclaimer modal** (force-accept)
3. **Onboarding** 5 screens with skip option
4. **Paywall** — hard, three options
5. **Purchase** via Apple Pay (1 tap if biometric)
6. **Lands on Today screen** with empty state CTA: "Set up your first protocol"
7. Toast at bottom: "Or play with the calculator first →"

**Optimization:** Aim for 60-second time-to-purchase. Most drop-off happens at the paywall — make sure copy + design are tight.

### Flow B: Returning user logs a dose

1. Push notification: "Time for your BPC-157 dose · 250mcg"
2. Tap notification → opens log modal pre-filled
3. Confirm site (or accept smart suggestion)
4. Tap "Log dose"
5. Returns to Today with success animation, streak +1, haptic medium

**Total time: 3 seconds.** This is the daily moment that creates retention.

### Flow C: User adds a new protocol

1. Protocols tab → "+" button
2. Modal opens
3. Pick peptide (or "Custom")
4. Defaults pre-fill (vial size, BAC water, dose range)
5. Adjust dose
6. Set frequency (Daily / Weekly / Custom interval)
7. Set time(s)
8. Optional: cycle on/off days
9. "Add protocol"
10. Back to Protocols list with new protocol active
11. Notifications scheduled in background

### Flow D: Calculator workflow

1. Tap Calculator tab
2. Sees "My Vials" at top (saved calculations)
3. Or picks peptide preset / starts fresh / custom
4. Types vial mg → syringe visual updates in real-time (Reanimated spring)
5. Types BAC water → updates
6. Types dose → final unit count locks in with haptic
7. (Optional) "Save as my vial" → enter nickname → saved to My Vials

### Flow E: Locked AI tab interaction

1. Tap Vial AI tab
2. Lands on locked screen with sparkle animation
3. Headline: "Vial AI launches May 7"
4. Bullet list of capabilities
5. CTA: "Notify me at launch" → email field OR "Use system notifications"
6. (For lifetime users) "You already have Vial AI — see you May 7"

### Flow F: AI coach actually works (v1.1)

1. Tap Vial AI tab (now unlocked)
2. Greeting: "Hey. Ask me about your stack, your protocol, or anything peptide-related."
3. User types: "What if I missed today's dose?"
4. Streamed response from GPT-4o mini via Cloudflare Worker proxy
5. Includes context from user's active protocols (passed in system prompt)
6. Always ends with "Always consult your provider for medical decisions"

---

## 12. Screen specifications

### Today (home)

```
┌─────────────────────────────────┐
│  [Logo]                ⚙ Settings│
│                                 │
│  Good morning                   │
│  🔥 14 day streak               │
│                                 │
│  ┌─────────────────────────┐   │
│  │ DUE NOW                 │   │
│  │ BPC-157                 │   │
│  │ 250 mcg                 │   │ ← JetBrains Mono BIG
│  │ Last site: L abd        │   │
│  │ Suggested: R abd        │   │
│  │                         │   │
│  │ [   Log dose   ]        │   │ ← Accent button
│  │ [Skip] [Log late]       │   │
│  └─────────────────────────┘   │
│                                 │
│  UP NEXT                        │
│  Tirzepatide · Sat 8:00 AM      │
│                                 │
│  TODAY                          │
│  ✓ 8:00 AM · BPC-157 · 250mcg   │
│  ✓ 7:00 AM · Semaglutide · 0.5mg│
│                                 │
│  [Calculator] [Protocols]       │
│                                 │
└─────────────────────────────────┘
[Today] [Calc] [Protocols] [AI 🔒]
```

### Calculator

```
┌─────────────────────────────────┐
│  Calculator           [⤺ Undo]  │
│                                 │
│  My Vials (saved)               │
│  ┌─────────────────────────┐   │
│  │ My BPC-157 vial    →    │   │
│  └─────────────────────────┘   │
│                                 │
│  Peptide                        │
│  [ BPC-157          ▾ ]        │
│                                 │
│  Vial size                      │
│  [   10   ] mg                  │
│                                 │
│  BAC water                      │
│  [   2    ] mL                  │
│                                 │
│  Target dose                    │
│  [  250   ] mcg [mcg/mg ⇄]      │
│                                 │
│  Syringe type                   │
│  [ U-100 ▾ ]                    │
│                                 │
│  ┌─────────────────────────┐   │
│  │  ━━━━━━━━━━○─────────  │   │ ← Skia syringe
│  │                         │   │
│  │     5 units             │   │ ← Hero number
│  │  Concentration: 5 mg/mL │   │
│  │  Volume: 0.05 mL        │   │
│  └─────────────────────────┘   │
│                                 │
│  [   Save as my vial   ]        │
│  [   Calculate water needed   ] │
│                                 │
└─────────────────────────────────┘
```

### Protocols list

```
┌─────────────────────────────────┐
│  Protocols              [📅] [+]│
│                                 │
│  Active                         │
│                                 │
│  ┌─────────────────────────┐   │
│  │ BPC-157            🔥14 │   │
│  │ 250 mcg · daily 8 PM    │   │
│  │ Started Apr 10          │   │
│  │ Cycle: 28 days left     │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Semaglutide        🔥6  │   │
│  │ 0.5 mg · weekly Mon     │   │
│  │ Started Mar 1           │   │
│  └─────────────────────────┘   │
│                                 │
│  Paused (1)                     │
│  ┌─────────────────────────┐   │
│  │ TB-500            paused│   │
│  └─────────────────────────┘   │
│                                 │
│  [+ Add protocol]               │
│                                 │
└─────────────────────────────────┘
```

### Log injection modal (sheet)

```
┌─────────────────────────────────┐
│            [✕ Close]            │
│                                 │
│  Log dose                       │
│                                 │
│  BPC-157                        │
│  ┌─────────┐                   │
│  │ 250 mcg │  [edit]           │
│  └─────────┘                   │
│                                 │
│  Site                           │
│  Suggested: R abdomen           │
│  [LAbd] [RAbd*] [LThigh]       │
│  [RThigh] [LDelt] [RDelt]      │
│  [Glute]                        │
│                                 │
│  Time                           │
│  [ Now (8:14 PM) ]   [edit]    │
│                                 │
│  Notes (optional)               │
│  [                            ] │
│                                 │
│  [   Log dose   ]               │
│  [   Skip   ] [   Cancel   ]    │
│                                 │
└─────────────────────────────────┘
```

### Vial AI (locked, v1.0)

```
┌─────────────────────────────────┐
│                                 │
│           ✨                    │
│                                 │
│      Vial AI                    │
│      launches May 7             │
│                                 │
│  Ask anything about your        │
│  stack. Powered by GPT-4o.      │
│                                 │
│  • Stack interactions           │
│  • Side effect guidance         │
│  • Protocol questions           │
│  • Missed dose recovery         │
│                                 │
│  [   Notify me   ]              │
│                                 │
│  Already have Vial Lifetime?    │
│  [Restore purchases]            │
│                                 │
└─────────────────────────────────┘
```

### Settings

```
┌─────────────────────────────────┐
│  Settings              [✕]      │
│                                 │
│  ACCOUNT                        │
│  Vial Lifetime ✓                │
│  Vial AI       Coming May 7     │
│  [Restore purchases]            │
│                                 │
│  PREFERENCES                    │
│  Default unit       mcg ▾       │
│  Default syringe    U-100 ▾     │
│  Notifications      [On] →      │
│                                 │
│  DATA                           │
│  [Export to CSV]                │
│  [Reset all data]               │
│                                 │
│  ABOUT                          │
│  Privacy Policy →               │
│  Terms of Use →                 │
│  Disclaimer →                   │
│  Contact support →              │
│  Version 1.0.0 (1)              │
│                                 │
└─────────────────────────────────┘
```

---

## 13. The syringe meter (hero element)

**This is the screenshot that converts downloads. Get it right.**

### Specs
- Horizontal syringe, ~280px wide on iPhone Pro Max
- Barrel: rounded rectangle outline in `colors.border`
- Tick marks at 10, 20, 30, ..., 100 units (depending on syringe type)
- Plunger: circle indicator at current value
- Liquid fill: gradient from `colors.accent` to `colors.accentDim`
- Active ticks (left of plunger): brighter accent
- Inactive ticks (right of plunger): muted gray
- Big number above syringe: "5 units" in `numberHero` style
- Concentration + volume below in `numberSmall`

### Implementation outline

```javascript
// src/components/SyringeMeter.jsx
import { Canvas, Rect, Circle, LinearGradient, vec, Group } from '@shopify/react-native-skia';
import { useDerivedValue, withTiming, Easing } from 'react-native-reanimated';
import { useEffect } from 'react';
import * as Haptics from 'expo-haptics';

export function SyringeMeter({ units, maxUnits, width = 280, height = 80 }) {
  // Animate the plunger position
  const animatedUnits = useDerivedValue(() => {
    return withTiming(units, { duration: 300, easing: Easing.out(Easing.cubic) });
  }, [units]);
  
  // Trigger haptic on unit boundaries
  useEffect(() => {
    if (Number.isInteger(units)) {
      Haptics.selectionAsync();
    }
  }, [Math.floor(units)]);
  
  const plungerX = useDerivedValue(() => {
    return (animatedUnits.value / maxUnits) * width;
  });
  
  return (
    <Canvas style={{ width, height }}>
      {/* Barrel outline */}
      <Rect
        x={0}
        y={height / 2 - 12}
        width={width}
        height={24}
        color="transparent"
        style="stroke"
        strokeWidth={2}
      />
      
      {/* Liquid fill with gradient */}
      <Rect
        x={0}
        y={height / 2 - 10}
        width={plungerX}
        height={20}
      >
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, 0)}
          colors={['#00E5A033', '#00E5A0']}
        />
      </Rect>
      
      {/* Tick marks */}
      {[...Array(11).keys()].map(i => (
        <Rect
          key={i}
          x={(i / 10) * width}
          y={height / 2 - 16}
          width={1}
          height={4}
          color={i <= units / 10 ? '#00E5A0' : '#606060'}
        />
      ))}
      
      {/* Plunger */}
      <Circle cx={plungerX} cy={height / 2} r={8} color="#00E5A0" />
    </Canvas>
  );
}
```

(Pseudocode — actual Skia API may differ slightly. Test on device early.)

### Why this matters
- Every other peptide app uses absolute-positioned divs that look amateur
- Skia gives 60fps smooth animation
- Becomes the recognizable "Vial look" in screenshots and TikToks
- One-day build investment, year-long brand asset

---

## 14. Calculation logic

```javascript
// src/utils/calc.js

export const SYRINGE_CAPACITY = {
  U20: 20,
  U30: 30,
  U40: 40,
  U100: 100,
};

export function calculateDose(vialMg, bacWaterMl, doseMg, syringeType = 'U100') {
  if (bacWaterMl <= 0) {
    return { concentrationMgPerMl: 0, volumeMl: 0, units: 0, warning: 'Add BAC water' };
  }
  if (doseMg > vialMg) {
    return { concentrationMgPerMl: 0, volumeMl: 0, units: 0, warning: 'Dose exceeds vial contents' };
  }
  if (doseMg <= 0) {
    return { concentrationMgPerMl: 0, volumeMl: 0, units: 0 };
  }
  
  const concentrationMgPerMl = vialMg / bacWaterMl;
  const volumeMl = doseMg / concentrationMgPerMl;
  const capacity = SYRINGE_CAPACITY[syringeType];
  const units = volumeMl * capacity; // U-100: 1mL = 100 units, U-40: 1mL = 40 units, etc.
  
  let warning;
  if (units > capacity) warning = `Volume exceeds ${syringeType} capacity (${capacity} units)`;
  else if (units < 1) warning = 'Volume too small for accuracy — use less BAC water';
  
  return {
    concentrationMgPerMl,
    volumeMl,
    units: Math.round(units * 10) / 10, // 1 decimal
    warning,
  };
}

// Inverse: given desired dose + concentration, calculate BAC water needed
export function calculateWaterNeeded(vialMg, doseMg, desiredUnits, syringeType = 'U100') {
  if (desiredUnits <= 0) return { bacWaterMl: 0, warning: 'Set target units' };
  
  const capacity = SYRINGE_CAPACITY[syringeType];
  const desiredVolumeMl = desiredUnits / capacity;
  const bacWaterMl = (vialMg * desiredVolumeMl) / doseMg;
  
  return { bacWaterMl: Math.round(bacWaterMl * 100) / 100 };
}
```

### Test cases (verify before ship)

| Vial | BAC | Dose | Syringe | Expected units |
|------|-----|------|---------|----------------|
| 10mg | 2mL | 250mcg | U-100 | 5 |
| 5mg | 2mL | 500mcg | U-100 | 20 |
| 2mg | 2mL | 100mcg | U-100 | 10 |
| 10mg | 1mL | 1mg | U-100 | 10 |
| 5mg | 5mL | 250mcg | U-100 | 25 |

---

## 15. Notifications

### Setup (app launch)

```javascript
// src/services/notifications.js
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function requestPermissions() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleDoseReminder(protocolId, peptideName, dose, weekday, hour, minute) {
  return await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Time for your dose',
      body: `${peptideName} · ${dose}`,
      data: { protocolId, type: 'dose_reminder' },
      sound: 'default',
      categoryIdentifier: 'DOSE_REMINDER',
    },
    trigger: { weekday, hour, minute, repeats: true },
  });
}

// Handle notification taps → deep link to log modal
export function setupNotificationHandlers() {
  return Notifications.addNotificationResponseReceivedListener(response => {
    const { protocolId, type } = response.notification.request.content.data;
    if (type === 'dose_reminder' && protocolId) {
      router.push(`/log-modal?protocolId=${protocolId}`);
    }
  });
}

export async function cancelProtocolNotifications(protocolId) {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  for (const notif of scheduled) {
    if (notif.content.data?.protocolId === protocolId) {
      await Notifications.cancelScheduledNotificationAsync(notif.identifier);
    }
  }
}
```

### Notification categories (for action buttons)

```javascript
// On app launch
await Notifications.setNotificationCategoryAsync('DOSE_REMINDER', [
  { identifier: 'LOG', buttonTitle: 'Log it', options: { opensAppToForeground: true } },
  { identifier: 'SKIP', buttonTitle: 'Skip', options: { opensAppToForeground: false } },
]);
```

### Notification types

1. **Dose due** — at scheduled time
2. **Dose missed** — 2 hours after if not logged
3. **Streak milestone** — at 7, 14, 30, 60, 100 days

---

## 16. Vial AI architecture (v1.1)

Build during App Store review window (Days 8-10).

### Cloudflare Worker proxy

```javascript
// vial-ai-proxy/src/index.js

const SYSTEM_PROMPT = `You are Vial AI, an educational assistant for people who use peptides.

CRITICAL RULES:
- You NEVER recommend specific doses. If asked "what dose should I take," respond: "I can't recommend doses — that's between you and your provider. I can share what's commonly researched, if helpful."
- You NEVER claim peptides are safe, approved, or guaranteed to work.
- You ALWAYS recommend consulting a licensed healthcare provider for medical decisions.
- You ARE allowed to: explain mechanisms, half-lives, typical research dose ranges (with clear "research" framing), discuss known interactions, help with reconstitution math, answer factual questions about peptide chemistry and pharmacology.
- You speak in plain language. No corporate fluff. No "I'm so glad you asked!" energy. No emoji.
- Keep responses under 200 words unless the user asks for more detail.
- If asked about something dangerous (e.g., "should I take 10x the normal dose"), refuse clearly and suggest talking to a provider.

CONTEXT:
The user has these active protocols (provided in their message):
{user_context}`;

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }
    
    // App auth (basic — prevents random calls to your worker)
    const appSecret = request.headers.get('X-App-Secret');
    if (appSecret !== env.APP_SECRET) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    // Rate limit per device
    const deviceId = request.headers.get('X-Device-Id');
    const tier = request.headers.get('X-User-Tier') || 'free';
    const limit = tier === 'ai' ? 100 : 0; // No AI access if not subscribed
    
    if (limit === 0) {
      return new Response(
        JSON.stringify({ error: 'no_access', message: 'Vial AI requires subscription' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    if (deviceId) {
      const today = new Date().toISOString().split('T')[0];
      const key = `rl:${deviceId}:${today}`;
      const count = parseInt(await env.RATE_LIMIT_KV.get(key) || '0');
      if (count >= limit) {
        return new Response(
          JSON.stringify({ error: 'rate_limit', message: 'Daily limit reached. Resets midnight UTC.' }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
      await env.RATE_LIMIT_KV.put(key, String(count + 1), { expirationTtl: 86400 });
    }
    
    const { messages, userContext } = await request.json();
    
    const systemPrompt = SYSTEM_PROMPT.replace('{user_context}', userContext || 'No active protocols.');
    
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        max_tokens: 500,
        temperature: 0.5,
      }),
    });
    
    return new Response(openaiResponse.body, {
      status: openaiResponse.status,
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
```

### Deploy

```bash
# In vial-ai-proxy directory
wrangler init
wrangler kv:namespace create RATE_LIMIT_KV
wrangler secret put OPENAI_API_KEY
wrangler secret put APP_SECRET
wrangler deploy
```

Done. Free tier: 100K requests/day. Cost at 10K active subscribers × 30 messages/month = ~$90/month in OpenAI costs.

### App side

```javascript
// src/services/ai.js
const APP_SECRET = process.env.EXPO_PUBLIC_VIAL_APP_SECRET;
const PROXY_URL = 'https://vial-ai-proxy.your-subdomain.workers.dev';

export async function chat(messages, deviceId, hasAI, userContext) {
  const response = await fetch(PROXY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-App-Secret': APP_SECRET,
      'X-Device-Id': deviceId,
      'X-User-Tier': hasAI ? 'ai' : 'free',
    },
    body: JSON.stringify({ messages, userContext }),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'AI request failed');
  }
  
  return response.json();
}
```

### User context construction

```javascript
// src/services/ai.js
export function buildUserContext(protocols) {
  if (protocols.length === 0) return 'No active protocols.';
  
  return protocols
    .filter(p => p.is_active)
    .map(p => `${p.peptide_id}: ${p.dose_mcg}mcg ${p.frequency}, ${p.vial_mg}mg vial reconstituted with ${p.bac_water_ml}mL BAC water`)
    .join('\n');
}
```

This gives the AI context about what the user is actually taking, so responses are personalized.

---

## 17. Analytics events

Track from day 1. PostHog. Necessary for v1.1 decisions.

**Onboarding**
- `onboarding_started`
- `onboarding_step_completed` (which step)
- `onboarding_skipped` (which step)
- `notification_permission_granted` / `_denied`
- `disclaimer_accepted`

**Paywall (CRITICAL — these drive revenue)**
- `paywall_shown`
- `paywall_option_viewed` (which option)
- `paywall_purchase_initiated` (which SKU)
- `paywall_purchase_completed` (which SKU)
- `paywall_purchase_failed` (which SKU, error code)
- `paywall_dismissed` (rare — paywall is hard, but track anyway)
- `restore_purchases_clicked`
- `restore_purchases_succeeded` / `_failed`

**Calculator**
- `calc_used` (peptide, vial_mg, bac_water_ml, dose_mcg)
- `vial_saved` (peptide)
- `vial_loaded_from_saved`
- `water_solver_used`
- `undo_clicked`

**Protocols**
- `protocol_created` (peptide, frequency, has_cycle)
- `protocol_paused` / `_deleted` / `_resumed`

**Logging**
- `dose_logged` (status: logged|skipped|missed, source: notification|manual)
- `dose_missed_auto` (when 2-hour window expires)
- `streak_milestone` (days)
- `csv_exported`

**AI (v1.1)**
- `ai_message_sent`
- `ai_message_received`
- `ai_rate_limit_hit`
- `ai_notify_signup`

**Engagement**
- `session_started` (DAU)
- `tab_viewed` (which tab)
- `app_opened_from_notification`

---

## 18. Legal & compliance

### Required in app

- **Disclaimer modal** on first launch — must tap "I understand" to proceed
- Disclaimer text:
  > Vial is an informational tracking and calculation tool. It does not provide medical advice and is not a substitute for consultation with a licensed healthcare provider. Always follow guidance from your physician. Information shown about peptides is for educational purposes only.

- **Settings:** Privacy Policy + Terms of Use → vial.app/privacy and vial.app/terms

### Privacy story (competitive advantage)

- "Your protocol data is stored on your device. No accounts. No cloud sync. We never see your peptide history."
- "When you use Vial AI (v1.1), your messages are sent to OpenAI for processing. We don't store them. You can delete chat history anytime."

### Marketing language

| ✅ Use | ❌ Avoid |
|--------|---------|
| "Track your protocol" | "Safe doses" (medical claim) |
| "Calculate your dose" | "Healing benefits" (FDA cares) |
| "Log your injections" | "Approved protocols" |
| "Reconstitute your peptide" | "Recommended dosage" |
| "Educational information" | "Scientifically proven results" |

### App Store positioning

- Age rating: **17+**
- "Infrequent Medical Treatment Information"
- "Health/Wellness Topics"
- Don't use brand names ("Ozempic" → "semaglutide" in copy/marketing)

### Privacy nutrition labels

**Data Used to Track You:** None

**Data Linked to You:**
- Health & Fitness > Health (App Functionality)
- Health & Fitness > Fitness (App Functionality)
- Purchases > Purchase History (App Functionality)

**Data Not Linked to You:**
- Diagnostics > Crash Data (PostHog)
- Diagnostics > Performance Data (PostHog)
- Usage Data > Product Interaction (PostHog, anonymized)

**v1.1 additions:**
- User Content > Other User Content (chat messages sent to OpenAI for processing, not stored)

---

## 19. The 7-day build schedule

### Day 1 (Wed) — Foundation
- `npx create-expo-app vial --template blank`
- Install all dependencies (see section 6)
- Configure expo-router
- Set up theme tokens (colors, typography, spacing)
- Load JetBrains Mono font via expo-font
- DB schema + migrations
- Hardcode 15 peptide presets
- **Build calculator screen UI + math + Skia syringe visual** (the hero)
- Test on physical device
- **Deliverable: working calculator with animated syringe**

### Day 2 (Thu) — Tracker core
- Tab bar layout (4 tabs)
- Today screen scaffold (Due now, Up next, Today list)
- Protocols list screen + detail screen
- Add Protocol modal flow
- Zustand stores (protocols, logs, vials)
- Smart site rotation logic
- **Deliverable: can create + view + edit protocols**

### Day 3 (Fri) — Logging + history
- Log Injection modal (with site picker, time, notes)
- Three-state logging (logged/skipped/missed)
- Today screen "Due now" + "Up next" date math
- History list view (filterable)
- Calendar view (month grid)
- Streak calculation
- CSV export functionality
- **Deliverable: full daily-use loop works end-to-end**

### Day 4 (Sat) — Notifications + paywall
- expo-notifications setup
- Schedule per-protocol reminders
- Deep link from notification → log modal
- "Dose missed" auto-trigger after 2 hours
- Streak milestone notifications
- **RevenueCat setup with all 4 SKUs**
- Paywall screen (with 3 options)
- Restore purchases flow
- Entitlement checks throughout app
- **Deliverable: paywall works, can buy + restore, notifications fire**

### Day 5 (Sun) — Onboarding + polish
- 5-screen onboarding flow
- Disclaimer modal
- Settings screen (all sections)
- "Vial AI" locked tab with email capture
- App icon (3 variants in Figma → pick best)
- Splash screen
- Animation polish (haptics, springs, success states)
- Empty states
- **Deliverable: feels finished**

### Day 6 (Mon) — QA + assets
- TestFlight build → 5 trusted testers
- Bug bash on physical iPhone
- App Store screenshots in Figma (8 slots)
- App preview video (CapCut, 20 seconds)
- App Store Connect setup
- Privacy nutrition labels
- Demo account / test instructions for App Review
- **Host vial.app landing + privacy + terms** on Railway
- **Deliverable: store assets ready, app ready to submit**

### Day 7 (Tue) — Submit + start TikTok
- Final QA pass
- EAS Build production
- EAS Submit to App Store Connect
- Tag v1.0 in git
- Register @vialapp on TikTok, Instagram, X
- Post first 3 TikTok videos (from script pack)
- **Deliverable: submitted to App Store, in review**

### Days 8-10 (review window) — v1.1 build
- **Deploy Cloudflare Worker AI proxy** (1-2 hours)
- Build Vial AI screen (chat UI, streaming, history)
- System prompt with safety guardrails
- Build stack templates (Wolverine, GLOW, Recovery, Longevity)
- Apple Health integration (read-only initially)
- Half-life decay charts (interactive Skia chart)
- Provider PDF export
- Continue posting TikTok daily
- Outreach to 50 mid-tier peptide creators
- **Deliverable: v1.1 build ready, just waiting on v1.0 approval**

### Day 11+ (post-approval)
- Launch on TikTok with full content blast
- Submit v1.1 with AI immediately
- Reddit launch posts in r/Peptides
- Product Hunt prep for week 3

---

## 20. Definition of done

For App Store submission. Check ALL boxes before clicking submit.

### Functionality
- [ ] All 4 tabs render and navigate correctly
- [ ] Calculator math verified against 5 test cases (Section 14)
- [ ] All 15 peptides preloaded with correct defaults (Appendix A)
- [ ] Skia syringe meter animates smoothly on physical device (60fps)
- [ ] Can create, edit, pause, resume, delete protocols
- [ ] Can log injections from notification tap (deep link works)
- [ ] Three logging states work (logged/skipped/missed)
- [ ] Streak counter accurate across timezones (test crossing midnight)
- [ ] Notifications fire reliably on physical device, not just simulator
- [ ] CSV export generates valid file
- [ ] Onboarding flow completes
- [ ] Disclaimer accepted before any other interaction
- [ ] Settings: all toggles work, all links open

### Paywall (REVENUE CRITICAL)
- [ ] All 4 SKUs configured in App Store Connect
- [ ] All 4 SKUs configured in RevenueCat
- [ ] Paywall displays correct prices (test in sandbox)
- [ ] Can complete purchase in sandbox for each SKU
- [ ] Restore purchases works
- [ ] Entitlement checks gate features correctly
- [ ] Lifetime bundle shows "$99 launch" pricing
- [ ] AI subscription buttons present but feature locked

### Quality
- [ ] No crashes in 30 minutes of testing
- [ ] PostHog error tracking initialized and reporting
- [ ] PostHog initialized and tracking key events
- [ ] No placeholder text anywhere
- [ ] No console errors in production build
- [ ] All deep links from notifications work
- [ ] Notification permission prompt appears at right moment

### Visual
- [ ] App icon at 1024×1024 (no transparency, no rounded corners)
- [ ] Launch screen displays correctly
- [ ] All screens look correct on iPhone SE, 13, 15 Pro, 16 Pro Max
- [ ] Dark mode is the only mode (no light mode bugs)
- [ ] JetBrains Mono loads correctly for numbers
- [ ] Spring animations feel right on physical device

### Legal
- [ ] vial.app/privacy is live
- [ ] vial.app/terms is live
- [ ] vial.app/support is live (can be simple FAQ)
- [ ] hello@vial.app receives email
- [ ] Disclaimer text matches App Store metadata

### App Store Connect
- [ ] Screenshots: all 8 slots filled (1290×2796)
- [ ] App preview video uploaded
- [ ] App name + subtitle + keywords filled
- [ ] Long description (2,800 chars)
- [ ] What's New filled
- [ ] Age rating questionnaire: 17+ with correct disclosures
- [ ] Privacy nutrition labels filled
- [ ] Support URL, Privacy URL, Marketing URL set
- [ ] Pricing tier set (Free — but app requires IAP)
- [ ] App Review notes provided (test account info, prohibited request explanation)

---

## 21. Appendices

### Appendix A — 15 preloaded peptides

| Peptide | Vial mg | BAC mL | Dose range | Half-life | Route |
|---------|---------|--------|-----------|-----------|-------|
| BPC-157 | 10 | 2 | 250-750 mcg | ~4h | SubQ daily |
| TB-500 | 5 | 2 | 2-10 mg | ~2-3 days | SubQ weekly split |
| CJC-1295 (no DAC) | 2 | 2 | 100-300 mcg | ~30 min | SubQ 1-3x daily |
| CJC-1295 (DAC) | 2 | 2 | 1-2 mg | ~6-8 days | SubQ weekly |
| Ipamorelin | 5 | 2 | 200-300 mcg | ~2h | SubQ 1-3x daily |
| GHK-Cu | 50 | 5 | 1-2 mg | varies | SubQ or topical |
| Semaglutide | 5 | 2 | 0.25-2.4 mg | ~7 days | SubQ weekly |
| Tirzepatide | 10 | 2 | 2.5-15 mg | ~5 days | SubQ weekly |
| Retatrutide | 10 | 2 | 4-12 mg | ~6 days | SubQ weekly |
| Epithalon | 10 | 2 | 5-10 mg | short | SubQ cycle 10-20 days |
| NAD+ | 500 | 5 | 100-500 mg | varies | IV typical |
| MOTS-c | 10 | 2 | 5-10 mg | varies | SubQ weekly |
| Tesamorelin | 2 | 2 | 1-2 mg | ~30 min | SubQ daily |
| Sermorelin | 5 | 2 | 200-300 mcg | ~10-20 min | SubQ nightly |
| PT-141 | 10 | 2 | 1-2 mg | ~2h | SubQ as needed |

Each entry shows: vial size, common reconstitution volume, typical research dose range, half-life, route. **Never claims of efficacy.**

### Appendix B — Hardcoded copy strings

**Onboarding screens**
1. Headline: "The peptide app that does the math." | Sub: "Reconstitute, dose, and track — all in one place." | CTA: "Get started"
2. Headline: "Calculate doses precisely." | Sub: "Skip the spreadsheets. Get exact syringe units in seconds." | CTA: "Next"
3. Headline: "Track every protocol." | Sub: "Stay consistent. Never miss a dose. See your streak grow." | CTA: "Next"
4. Headline: "Never miss a dose." | Sub: "We'll remind you when it's time. Tap once to log." | CTA: "Allow notifications" / "Maybe later"
5. Headline: "One last thing." | Sub: "Vial is an informational tool — not medical advice. Always consult your provider." | CTA: "I understand"

**Empty states**
- Today (no protocols): "No protocols yet. Add one to get started." | CTA: "Add protocol"
- Today (logged today): "All caught up. Streak: X days. 🔥"
- Protocols: "Your protocols will live here." | CTA: "Add your first"
- History: "Your dose history will appear here as you log."
- Calculator (no saved vials): "Save your favorite calculations as 'My Vials' for quick recall."

**Disclaimer (force-accept on first launch)**
- "Vial is an informational tracking and calculation tool. It does not provide medical advice and is not a substitute for consultation with a licensed healthcare provider. Always follow guidance from your physician."
- CTA: "I understand"

**Vial AI locked screen**
- Headline: "Vial AI launches May 7"
- Sub: "Ask anything about your stack. Powered by GPT-4o."
- Bullets: "Stack interactions • Side effect guidance • Protocol questions • Missed dose recovery"
- CTA: "Notify me at launch"
- For lifetime users: "You already have Vial AI access — see you May 7."

**Paywall**
- See Section 10

**Success states**
- Dose logged: "Logged ✓" + haptic medium
- Streak milestone: "🔥 X days. Keep going."
- Protocol created: "Protocol active. Reminders set."

---

**End of PRD. Build with confidence. Ship in 7.**

Next docs to generate: App Store copy package, TikTok script pack, Cloudflare Worker code, paywall screen design spec.
