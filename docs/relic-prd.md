# Relic — Personal Relationship Operating System

# 1 — Product Summary

AI-first, voice-centric relationship memory for founders and network-heavy professionals.
"Show up to every meeting like you remember the person — because you do."

---

# 2 — Success Criteria (MVP)

The MVP is successful when:

- Users can add contacts (manual or voice) and save structured attributes + long notes.
- The app produces an accurate pre-meeting briefing for any contact.
- Users receive follow-up reminders (server-triggered push) and can mark reminders done.
- Core metrics: paid conversion from free to Pro (target > 2% in early cohort), 30-day retention > 30%, first-week active use (open + brief) > 40%.

---

# 3 — Primary Persona & Usage Moments

Primary user: founders and network-heavy professionals who hate remembering details and need fast pre-meeting context.

Primary moments:

- Immediately after meeting (capture voice summary)
- Before meeting (briefing card)
- On scheduled reminders / events (birthday / milestone)

---

# 4 — Core Value Proposition

The app acts as an "artificial social memory":

- Capture voice quickly, auto-extract structured attributes and notes.
- Central timeline + relationship attributes per contact.
- AI-generated meeting brief with tactical suggestions (openers, venue suggestion, topics, follow-ups).
- Minimal friction: voice > confirm > save.

## Differentiators (Psychology-Informed)

Relic's intelligence layer is informed by interpersonal psychology research:

- **Carnegie (remembered details):** Cheat sheet surfaces personal details (food preferences, family, hobbies) before meetings — makes the user feel like they truly remember people.
- **Cialdini (commitment/reciprocity):** Bidirectional commitment tracking (`they_promised` / `i_promised`) ensures promises are followed through, building trust and reciprocity.
- **Dunbar (contact frequency):** Relationship health indicator computes decay from last interaction vs expected cadence by relationship type (cofounder=7d, investor/mentor=21d, friend=60d). Surfaces "going cold" contacts before it's too late.
- **Self-disclosure reciprocity:** Tracks what the user has shared (`i_disclosed`) so they maintain appropriate vulnerability balance across relationships.
- **Challenge awareness:** Tracks their struggles (`their_challenges`) so the user can offer help proactively — the strongest relationship-building signal.

These features add zero extra AI cost — same LLM extraction call with richer prompts, plus client-side computation for health scores.

---

# 5 — Tech Stack

- **Client:** Expo (React Native), JavaScript (not TypeScript), EAS Build
- **Backend & Auth:** Supabase (Postgres, Edge Functions, Storage, Realtime)
- **Auth providers:** Google Sign-In + Apple Sign-In via Supabase Auth
- **Billing:** RevenueCat (`react-native-purchases`)
- **State management:** Zustand (with MMKV persistence middleware)
- **Local storage:** MMKV
- **Icons:** Lucide Icons (`lucide-react-native`)
- **Animations:** React Native Reanimated
- **Navigation:** Expo Router
- **Transcription:** DeepInfra Whisper Large-v3
- **LLM (extraction + briefs):** Gemini 2.5 Flash Lite (primary), DeepSeek V3.2 (fallback)
- **Push notifications:** Expo Push Notifications (server-triggered)
- **Analytics:** PostHog (privacy-conscious config)

---

# 6 — Design System

## Philosophy

"Dark book" aesthetic — the app feels like a private leather-bound journal, not a SaaS dashboard. Editorial, quiet, intentional. Near-monochrome with warm dark tones and a single amber accent. Contact cards feel like journal pages; briefings feel like private dossiers. Every interaction should feel intentional. Micro-animations on all meaningful state transitions (button presses, card reveals, screen transitions, chip toggles, recording state changes).

## Color Palette — Warm Dark + Amber

Near-monochrome. White for interactive elements, amber as the only real color in the app. No blue anywhere. Backgrounds use warm stone neutrals (slight brown undertone, like aged paper inverted) instead of cold zinc grays.

Primary:

- **Primary:** `#FFFFFF` (white) — interactive elements, active states, links, buttons in dark mode
- **Amber 500 (Accent):** `#F59E0B` — record button, CTAs, pro/upgrade indicators, badges
- **Amber 400:** `#FBBF24` — hover/active accent states

Warm neutrals (Stone):

- **Stone 950:** `#0C0A09` — dark mode background
- **Stone 900:** `#1C1917` — dark mode surface/cards
- **Stone 850:** `#211E1B` — elevated surfaces
- **Stone 800:** `#292524` — borders
- **Stone 500:** `#78716C` — tertiary text
- **Stone 400:** `#A8A29E` — secondary text
- **Stone 50:** `#FAFAF9` — primary text on dark, light mode background
- **White:** `#FFFFFF` — light mode cards

Relationship colors (muted, warm — watercolor washes):

- Investor: `#B8A9C5`, Mentor: `#C5B078`, Cofounder: `#7DAF93`, Friend: `#7DA4AF`, Client: `#C5946B`

Semantic:

- **Success:** `#10B981`
- **Error:** `#EF4444`
- **Warning:** `#F59E0B` (reuses amber accent)
- **Info:** `#78716C` (stone — no blue)

## Typography

- **Headings (h1, h2):** DM Serif Display 400 — editorial display serif for screen titles, contact names
- **Body text:** System fonts (San Francisco on iOS, Roboto on Android) — clean, fast, native
- **Long-form reading (briefs, notes):** Libre Baskerville 400/700 — book serif optimized for screen readability
- **Metadata/timestamps:** Menlo (iOS) / monospace (Android)
- Fonts loaded via `@expo-google-fonts/*` packages + `useFonts` hook in `_layout.jsx`
- Splash screen held until fonts are loaded

## Micro-animations (Reanimated)

- Record button: pulsing amber glow while recording
- Cards: `withTiming` + `Easing.out(Easing.cubic)` enter/exit (300–500ms) — **NO spring animations**
- Chips: scale + opacity on toggle via `withTiming`
- Screen transitions: shared element transitions where possible
- Pull-to-refresh: custom animated indicator
- Brief generation: skeleton shimmer while loading
- Staggered list entrances: `FadeInUp.duration(400).delay(200 + i * 80)`

---

# 7 — MVP Scope (Features Included)

## Must-haves

1. **Authentication** — Google Sign-In + Apple Sign-In via Supabase Auth. Hidden dev-only email/password login (7-tap easter egg on settings screen).
2. **Onboarding** — collect name, professional role, import phone contacts (`expo-contacts`).
3. **Contacts CRUD** — create, read, update, delete contacts.
4. **Contact deduplication** — fuzzy name matching (`pg_trgm` extension) on voice extraction. "Did you mean [existing contact]?" prompt when match confidence > 80%. User chooses merge or create new.
5. **Voice capture** — client records audio (expo-av), saves locally, queues upload to Supabase Storage. Offline-safe with sync queue.
6. **Transcription pipeline** — DeepInfra Whisper Large-v3 ($0.0002/min).
7. **LLM extraction** — Gemini 2.5 Flash Lite extracts structured attributes + follow-ups + summary from transcription. Returns JSON. One recording = one primary contact. Mentions of other people are saved as relationship attributes on the primary contact (e.g., "Andy is close friends with Steven" adds a relationship note to Andy, does not create Steven).
8. **Contact profile:**
   - Structured attributes (name, company, role, relationship_type, tags, food_pref, hobbies, family, investment_interest, etc.)
   - Psychology-informed fields: `they_promised[]`, `i_promised[]`, `i_disclosed[]`, `their_challenges[]` — bidirectional commitment and relationship tracking
   - Notes (long form, editable)
   - Tabs (in order): **Brief** (default), Timeline, Profile, Reminders
   - Relationship health indicator (computed from days since last interaction vs expected cadence per relationship_type)
9. **Pre-meeting briefing card** — AI-generated from contact attributes + last 5 interactions. Includes: cheat sheet (3-line glanceable personal details), key facts, conversation openers, open commitments (what they owe you / what you owe them), rapport tips, venue suggestion, suggested ask, follow-up. Regenerated on-demand only when new interaction exists since last brief. Brief history preserved.
10. **Reminders / follow-up cadence** — user-set or AI-suggested. Server-triggered push notifications via pg_cron + Expo Push API.
11. **Search** — Postgres full-text search (`tsvector`/`tsquery` with GIN indexes) across contacts, notes, and interaction summaries. Filter by tag and relationship_type.
12. **Settings & billing** — Free (10 contacts) / Pro ($9.99/mo or $79.99/yr) via RevenueCat.
13. **Manual edit** for all structured fields and notes.
14. **Offline support** — MMKV local cache for contacts, briefs (last 20 viewed), and attributes. Zustand with MMKV persistence. Offline recording queue with sync status indicator.
15. **Telemetry** — PostHog events for core flows.

## Nice-to-have (post-MVP)

- Auto-enrichment via APIs (LinkedIn, Clearbit)
- Multi-person extraction from single recording (split into multiple contacts)
- Gmail contact import
- Team / share features
- Advanced analytics / social graph visualization
- Contact import from LinkedIn

---

# 8 — Product Flows (User Stories)

1. **Sign up:** User opens app, taps Google or Apple sign-in, completes onboarding (name, role, optional phone contact import), lands on home screen.

2. **Voice capture (core flow):** User presses record button after meeting. Speaks 30-90 seconds. UI shows transcription and extracted structured chips. User edits/confirms. Contact created or updated (with dedup check). Timeline entry added. Optional follow-up reminder created. If offline, recording queues locally and syncs when connection returns.

3. **Pre-meeting brief:** User opens contact, taps "Brief" tab. If brief is stale (new interaction since last generation), regenerates via LLM. Shows: 3 bullet key facts, 3 conversation openers, venue suggestion (based on food_pref), suggested ask/goal, recommended follow-up. User can view brief history.

4. **Reminders:** Server checks due reminders hourly (pg_cron). Sends push notification via Expo Push API. User taps notification, opens contact, takes action, marks reminder done.

5. **Search:** User types in search bar. Full-text search across contacts, notes, interactions. Filter chips for tags and relationship types.

---

# 9 — UX / Screens (Expo Router)

## Top-level screens

- **Onboarding** — collect name, professional role, import phone contacts
- **Home** — upcoming follow-ups, recent contacts, suggested briefs
- **Contacts** — list + search + filters (tag, relationship_type)
- **Add Contact** — manual form
- **Voice Capture** — record, preview, confirm extraction, save
- **Contact Profile** (tabs in order):
  - **Brief** (default) — cheat sheet, key facts, openers, open commitments, rapport tips, venue, suggested ask, follow-up. Generate via AI or computed from stored data.
  - **Timeline** — interactions list with AI summary + expandable transcript
  - **Profile** — structured attributes, tags, hobbies, interests, relationships, commitments (theirs/yours), what I shared, their challenges
  - **Reminders** (list + create)
- **Settings & Billing** — account, subscription management (RevenueCat paywall UI), hidden dev login (7-tap easter egg)

## Key UI components

- **Floating record button** — large amber pulsing FAB, tap-to-record, visible on Home and Contact screens
- **Extraction confirmation modal** — structured chips (toggleable on/off) + free text summary. User edits before final save.
- **Brief card** — summary section + chip-style quick openers + venue/food recommendation. Skeleton shimmer while generating.
- **Dedup prompt** — "Did you mean [existing contact]?" with merge/create-new options
- **Sync indicator** — subtle status showing pending uploads when offline recordings exist

## Behavior notes

- After recording, always show transcription and extracted chips for editing before save
- Brief accessible from offline cache (last 20 viewed contacts via MMKV)
- All animations via Reanimated (`withTiming` + easing, NO springs, 60fps)

---

# 10 — Data Model (Supabase / Postgres)

```sql
-- user profiles (extends supabase auth)
create table profiles (
  id uuid primary key references auth.users(id),
  name text,
  role text,
  created_at timestamptz default now()
);

-- contacts
create table contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) not null,
  name text not null,
  company text,
  role text,
  relationship_type text, -- investor, cofounder, mentor, friend, other
  tags text[],
  search_vector tsvector, -- full-text search column
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- structured attributes (flexible key/value)
create table contact_attributes (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade not null,
  key text not null, -- e.g., "food_preference", "relationship:steven", "they_promised", "i_promised", "i_disclosed", "their_challenges"
  value text not null,
  source text, -- "voice", "manual", "import"
  created_at timestamptz default now()
);

-- long notes
create table notes (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade not null,
  user_id uuid references profiles(id) not null,
  content text,
  source text,
  search_vector tsvector,
  created_at timestamptz default now()
);

-- interactions / timeline
create table interactions (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade not null,
  user_id uuid references profiles(id) not null,
  type text, -- meeting, call, event, note
  summary text,
  recording_url text, -- supabase storage path
  transcription text,
  ai_summary text,
  they_promised text[], -- commitments they made during this interaction
  i_promised text[], -- commitments user made during this interaction
  i_disclosed text[], -- personal info user shared during this interaction
  their_challenges text[], -- challenges/problems they mentioned
  search_vector tsvector,
  created_at timestamptz default now()
);

-- AI-generated briefs (with history)
create table briefs (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade not null,
  user_id uuid references profiles(id) not null,
  content jsonb not null, -- { cheat_sheet, key_facts, openers, open_commitments: { theirs, yours }, rapport_tips, venue, suggested_ask, follow_up }
  interaction_ids uuid[], -- which interactions were used to generate this
  model text, -- "gemini-2.5-flash-lite" or "deepseek-v3.2"
  created_at timestamptz default now()
);

-- reminders
create table reminders (
  id uuid primary key default gen_random_uuid(),
  contact_id uuid references contacts(id) on delete cascade not null,
  user_id uuid references profiles(id) not null,
  remind_at timestamptz not null,
  cadence text, -- monthly, quarterly, annually, custom, once
  note text,
  is_done boolean default false,
  push_sent boolean default false,
  created_at timestamptz default now()
);
```

## Indexes

```sql
-- contact lookup
create index idx_contacts_user_id on contacts(user_id);
create index idx_contacts_name_trgm on contacts using gin (name gin_trgm_ops);
create index idx_contacts_search on contacts using gin (search_vector);

-- notes & interactions full-text
create index idx_notes_search on notes using gin (search_vector);
create index idx_interactions_search on interactions using gin (search_vector);

-- reminders for cron job
create index idx_reminders_due on reminders(remind_at) where is_done = false and push_sent = false;

-- attributes lookup
create index idx_attributes_contact on contact_attributes(contact_id);

-- briefs lookup
create index idx_briefs_contact on briefs(contact_id, created_at desc);
```

## Extensions required

```sql
create extension if not exists pg_trgm; -- fuzzy text matching for dedup
```

## Storage

- Supabase Storage bucket `recordings` — private, user-scoped paths: `{user_id}/{recording_id}.m4a`
- Signed URLs for access (expire after 1 hour)
- Retention policy: audio deleted immediately after `process-recording` completes transcription. Only transcription text and extracted JSON are stored long-term.

---

# 11 — API Surface (Supabase Edge Functions)

## Edge Functions

### `process-recording`

Triggered after client uploads audio to Supabase Storage.

Request: `{ storage_path, contact_id? (optional, for existing contact update) }`
Flow:

1. Validate JWT + check rate limit
2. Send audio to DeepInfra Whisper Large-v3
3. Receive transcription
4. Send transcription to Gemini 2.5 Flash Lite for structured extraction
5. Return extracted data to client for confirmation (do NOT auto-save)

Response: `{ transcription, extraction: { name, company, role, ... }, confidence }`

### `save-extraction`

Called after user confirms/edits the extraction on client.

Request: `{ contact_id?, extraction, transcription, storage_path }`
Flow:

1. If no contact_id, fuzzy match name against existing contacts
2. If match > 80%, return candidates for client to resolve (merge vs create new)
3. If resolved or no match, create/update contact + attributes + interaction
4. Return saved contact

### `generate-brief`

Request: `{ contact_id }`
Flow:

1. Check if latest brief is still fresh (no new interactions since)
2. If stale, fetch contact attributes + last 5 interactions
3. Call Gemini 2.5 Flash Lite with brief prompt
4. Save brief to `briefs` table (preserving history)
5. Return brief content

Response: `{ brief: { cheat_sheet, key_facts, openers, open_commitments, rapport_tips, venue, suggested_ask, follow_up }, is_cached }`

### `send-reminders` (cron-triggered)

Runs hourly via pg_cron or Supabase cron.

1. Query due reminders (`remind_at <= now() AND is_done = false AND push_sent = false`)
2. Send Expo Push Notification per reminder
3. Mark `push_sent = true`
4. For recurring reminders, create next occurrence based on cadence

## Client-side Supabase queries (direct, no edge function needed)

- `contacts` CRUD — direct Supabase client with RLS
- `notes` CRUD — direct
- `reminders` CRUD — direct
- `contact_attributes` CRUD — direct
- Search — direct query with `search_vector @@ to_tsquery()`

## Rate limiting

- Free tier: 50 LLM calls/month (covers ~25 recordings + 25 briefs)
- Pro tier: 500 LLM calls/month (fair use)
- Track via a `usage` counter in profiles or a separate `usage_tracking` table
- Edge functions check count before processing

---

# 12 — AI Architecture & Prompts

## Pipeline

1. Client records audio (expo-av), saves to MMKV queue
2. When online, upload to Supabase Storage
3. Call `process-recording` edge function
4. Edge function sends audio to DeepInfra Whisper Large-v3 ($0.0002/min)
5. Transcription returned, sent to Gemini 2.5 Flash Lite for extraction
6. Extracted JSON returned to client for user confirmation
7. User edits and confirms, client calls `save-extraction`
8. Brief generated on-demand when user opens Brief tab

## Provider abstraction

Keep LLM calls behind a simple provider interface so switching models is a config change:

```javascript
// services/llm.js
const providers = {
  "gemini-flash-lite": { endpoint, apiKey, formatRequest },
  "deepseek-v3": { endpoint, apiKey, formatRequest },
};

const callLLM = async (prompt, provider = "gemini-flash-lite") => {
  // ... call provider, return structured response
};
```

If Gemini fails or is down, auto-fallback to DeepSeek V3.2.

## Extraction prompt (template)

```
You are a structured data extraction engine for a personal relationship manager app.

Input: a voice transcription where the user describes someone they met or interacted with.

Rules:
- Extract information about the PRIMARY person being described only.
- If the user mentions other people in relation to the primary person (e.g., "Andy is friends with Steven"), those are relationship attributes of the primary person, NOT separate contacts.
- Only extract what is explicitly stated. Never infer or hallucinate.
- If a field is not mentioned, return null.

Return valid JSON with this exact schema:
{
  "name": string | null,
  "company": string | null,
  "role": string | null,
  "relationship_type": "investor" | "cofounder" | "mentor" | "friend" | "client" | "other" | null,
  "attributes": {
    "food_preference": string | null,
    "wine": string | null,
    "family": string | null,
    "hobbies": string[] | null,
    "interests": string[] | null,
    "relationships": [{ "name": string, "relation": string }] | null,
    "they_promised": string[] | null,
    "i_promised": string[] | null,
    "i_disclosed": string[] | null,
    "their_challenges": string[] | null
  },
  "they_promised": string[] | null,
  "i_promised": string[] | null,
  "i_disclosed": string[] | null,
  "their_challenges": string[] | null,
  "suggested_follow_up": string | null,
  "suggested_reminder_days": number | null,
  "confidence": number (0-1),
  "raw_summary": string (1-3 sentence summary)
}
```

## Brief generation prompt (template)

```
You are a meeting preparation assistant for a personal relationship manager app.

Given the following contact information and interaction history, produce a concise meeting brief.

Contact: {contact_attributes_json}
Recent interactions (most recent first): {last_5_interactions}

Produce:
- Cheat sheet: 3 quick personal facts to remember (food preference, family, hobbies — things that build rapport)
- 3 key facts to remember (bullet points, short)
- 3 conversation openers (casual, natural, based on their interests/recent events)
- Open commitments: list what they promised you and what you promised them (from interaction history)
- 2 rapport tips: psychology-informed suggestions for building the relationship
- 1 venue or food/drink suggestion (based on their food_preference if available, otherwise skip)
- 1 suggested ask or goal for the meeting
- 1 recommended follow-up action (one sentence, prioritize unfulfilled commitments)

Keep it concise and actionable. Do not invent facts not present in the data.
Return as JSON with keys: cheat_sheet, key_facts, openers, open_commitments: { theirs, yours }, rapport_tips, venue, suggested_ask, follow_up.
```

## Cost estimates

| Action                                          | Provider          | Cost per call |
| ----------------------------------------------- | ----------------- | ------------- |
| Transcription (90s audio)                       | DeepInfra Whisper | $0.0003       |
| Extraction (1K input + 500 output tokens)       | Gemini Flash Lite | $0.0003       |
| Brief generation (2K input + 500 output tokens) | Gemini Flash Lite | $0.0004       |
| **Total per full interaction**                  |                   | **~$0.001**   |

Free tier (50 calls/mo) costs: ~$0.05/month per free user.
Pro tier (500 calls/mo) costs: ~$0.50/month per pro user at $9.99 revenue = healthy margin.

---

# 13 — Privacy, Security & Compliance

- **Default private:** all data private to the user. No sharing unless user explicitly exports.
- **Row Level Security (RLS):** all tables enforce `user_id = auth.uid()` via Supabase RLS policies.
- **Storage:** recordings in private Supabase Storage bucket, accessed only via signed URLs (1-hour expiry).
- **Encryption at rest:** Supabase managed encryption. Consider field-level encryption for sensitive attributes post-MVP.
- **Data retention:** audio recordings deleted from Supabase Storage after transcription processing is complete (within minutes). Transcription text + extracted structured data retained in DB until account deletion. Contact/interaction data retained until account deletion.
- **GDPR / CCPA:** user data export + full account deletion supported.
- **Consent:** onboarding screen with clear "private to you" statement. Source attribution on all data (voice, manual, import).
- **Audit trail:** `briefs` table tracks which `interaction_ids` were used for each generation.
- **AI transparency:** confidence scores shown to user. Source interaction linked. User always confirms before data is saved.
- **No scraping:** no auto-harvesting of private data. Future integrations (LinkedIn, etc.) only via official APIs.

---

# 14 — Billing & Paywall Logic

## Tiers

|                        | Free | Pro                   |
| ---------------------- | ---- | --------------------- |
| Price                  | $0   | $9.99/mo or $79.99/yr |
| Contacts               | 10   | Unlimited             |
| LLM calls/month        | 50   | 500                   |
| Briefs                 | Yes  | Yes                   |
| Priority AI processing | No   | Yes                   |
| Priority support       | No   | Yes                   |

## Implementation

- **RevenueCat** (`react-native-purchases` + `react-native-purchases-ui`) for subscription management
- RevenueCat handles Apple IAP + Google Play Billing
- Subscription status synced to Supabase via RevenueCat webhook to edge function
- Store `is_pro` and `pro_expires_at` on `profiles` table

## Paywall triggers

- Contact count > 10: block create, show RevenueCat paywall UI
- LLM usage over monthly cap: show upgrade prompt, block processing
- Show usage counter in settings ("X of 50 AI calls used this month")

---

# 15 — Metrics & Instrumentation (PostHog)

## Product events

- `signup` — with provider (google/apple)
- `onboarding_completed` — with contacts_imported count
- `recording_started`
- `recording_saved`
- `ai_extraction_success` — with confidence score
- `ai_extraction_edited` — user modified extraction before save
- `contact_created_voice`
- `contact_created_manual`
- `contact_merged` — dedup merge happened
- `brief_viewed`
- `brief_regenerated`
- `reminder_created` — with cadence type
- `reminder_completed`
- `search_performed`
- `upgrade_clicked`
- `conversion_paid` — with plan type
- `paywall_shown` — with trigger reason

## Business metrics (tracked via RevenueCat + PostHog)

- MRR, ARPU, LTV:CAC (post-launch)
- Monthly churn rate
- Free-to-Pro conversion rate

## Config

- PostHog with privacy-conscious settings (no autocapture of PII, session recording off)

---

# 16 — QA / Acceptance Criteria

### Voice capture to structured save

- GIVEN user records audio
- WHEN transcription and extraction succeed
- THEN contact is created/updated with extracted attributes AND a timeline interaction exists AND user confirmed everything before save

### Contact deduplication

- GIVEN a contact named "Sarah Kim" exists
- WHEN user records a note mentioning "Sarah Kim" or "Sara Kim"
- THEN app shows "Did you mean Sarah Kim?" with merge/create options

### Pre-meeting brief

- GIVEN any contact with at least 1 interaction
- WHEN user opens Brief tab
- THEN brief shows cheat sheet, 3 key facts, 3 openers, open commitments, rapport tips, venue suggestion, and follow-up
- AND brief history is accessible

### Paywall

- GIVEN a free user with 10 contacts
- WHEN they attempt to add 11th contact
- THEN app blocks creation and shows RevenueCat upgrade modal

### Offline support

- GIVEN user has no internet connection
- WHEN they record a voice note
- THEN recording is saved locally and upload queues automatically
- AND previously cached contacts and briefs remain accessible

### Reminders

- GIVEN a reminder is due
- WHEN the cron job runs
- THEN a push notification is sent to the user's device
- AND recurring reminders schedule the next occurrence

### Security

- All Supabase queries enforce RLS (user_id = auth.uid())
- Storage files accessible only via signed URLs
- Edge functions validate JWT before processing

---

# 17 — Implementation Notes

## Client (Expo + EAS Build)

- `expo-av` for audio recording, output as `.m4a`
- `expo-contacts` for phone contact import during onboarding
- MMKV for persistent local cache (contacts, briefs, offline queue)
- Zustand with MMKV persistence middleware for app state
- Offline recording queue: save audio to local filesystem, track in MMKV queue, upload when `NetInfo` detects connectivity
- Sync status indicator component showing pending uploads
- `expo-notifications` for receiving push notifications
- Reanimated for all animations (`withTiming` + easing, NO springs, 60fps target)
- Expo Router for navigation (file-based routing)
- RevenueCat paywall UI components for upgrade flows
- Dev login: 7-tap on app version in Settings reveals email/password form

## Server (Supabase)

- Edge Functions for: `process-recording`, `save-extraction`, `generate-brief`, `send-reminders`, `revenuecat-webhook`
- pg_cron extension for hourly reminder checks
- pg_trgm extension for fuzzy name matching
- RLS policies on all tables
- Realtime subscriptions for live updates (optional, for sync status)

## Rate limiting

- Per-user monthly counter for LLM calls
- Tracked in `profiles.llm_calls_this_month` (reset monthly via pg_cron)
- Edge functions check counter before processing, return 429 if exceeded

## Cost management

- DeepInfra Whisper: $0.0002/min (negligible)
- Gemini 2.5 Flash Lite: $0.10/$0.40 per 1M tokens (primary)
- DeepSeek V3.2: $0.14/$0.28 per 1M tokens (fallback)
- Estimated cost per active free user: ~$0.05/month
- Estimated cost per active Pro user: ~$0.50/month
- Break-even at scale with $9.99/mo Pro pricing

---

# 18 — Go-to-Market & Early Traction

## Channels

- Direct outreach to founder networks (YC alumni, local accelerators). Invite-only onboarding.
- Case study videos: meeting brief > meeting > outcome (testimonials).
- Content: 10 rapid posts on "how I prepared for investor meetings" with app examples.
- Partnership outreach to founder communities and VC offices.
- Early adopter program: invite-only with discounted lifetime pricing.

## Onboarding hooks

- Guided first voice capture walkthrough
- "Prepare for your next meeting" email workflow showing a sample brief

## Pricing test

- A/B test monthly price at $9.99 vs $12.99 via RevenueCat experiments

---

# 19 — Risks & Mitigations

1. **AI hallucinations** — show confidence and source. Require user confirmation before saving. Never auto-write to DB without user review.
2. **Privacy concerns** — default private, clear messaging, export/delete, RLS everywhere.
3. **LLM/ASR cost** — rate-limit free tier. Lazy-generate briefs (cache, regenerate on-demand only). Use cheapest viable models (Gemini Flash Lite at $0.10/1M tokens).
4. **User adoption** — reduce friction: one-button record + one-screen confirm. Don't force structured data, allow save with minimal clicks.
5. **Provider downtime** — auto-fallback from Gemini to DeepSeek. Offline queue for recordings ensures no data loss.
6. **App Store rejection** — Apple Sign-In included (required). RevenueCat handles IAP compliance. No external payment links.

---

# 20 — Current Implementation Status (as of 2026-03-09)

## Done ✅

| Area                                                    | Status                                             |
| ------------------------------------------------------- | -------------------------------------------------- |
| Auth (Apple + Google Sign-In)                           | ✅ Complete                                        |
| Onboarding (name, role, contact import)                 | ✅ Complete                                        |
| App shell + navigation (Expo Router)                    | ✅ Complete                                        |
| Home screen UI                                          | ✅ Complete                                        |
| Contacts list + search UI                               | ✅ Complete                                        |
| Contact detail (Brief/Timeline/Profile/Reminders tabs)  | ✅ Complete                                        |
| Voice recording UI (RecordingSheet, RecordButton)       | ✅ Complete                                        |
| ExtractionModal (confirm/edit UI)                       | ✅ Complete                                        |
| Settings screen                                         | ✅ Complete                                        |
| PaywallModal (reusable bottom sheet)                    | ✅ Complete                                        |
| RevenueCat integration                                  | ✅ Complete                                        |
| PostHog analytics                                       | ✅ Complete                                        |
| Error boundary (`_layout.jsx`)                          | ✅ Complete                                        |
| Account deletion (Settings UI + Edge Function deployed) | ✅ Complete                                        |
| Terms/Privacy links in auth screen                      | ✅ Complete                                        |
| `eas.json` + `buildNumber` in `app.json`                | ✅ Complete                                        |
| Landing page (echoforge.to/relic)                       | ✅ Built, not deployed                             |
| Privacy Policy page                                     | ✅ Built, not deployed                             |
| Terms of Service page                                   | ✅ Built, not deployed                             |
| Brand logo SVGs                                         | ✅ `assets/images/logo-white.svg`, `logo-dark.svg` |

## Still Needed (Backend not connected) ⚠️

| Area                                                    | Status             |
| ------------------------------------------------------- | ------------------ |
| `process-recording` Edge Function                       | ❌ Not built       |
| `save-extraction` Edge Function                         | ❌ Not built       |
| `generate-brief` Edge Function                          | ❌ Not built       |
| `send-reminders` Edge Function (pg_cron)                | ❌ Not built       |
| `revenuecat-webhook` Edge Function                      | ❌ Not built       |
| `services/llm.js` — real Gemini/DeepSeek calls          | ❌ Stubbed         |
| `services/recording.js` — real upload + transcription   | ❌ Stubbed         |
| Supabase DB schema + RLS policies                       | ❌ Not applied     |
| Contacts/interactions wired to Supabase (mock data now) | ❌ Using MMKV mock |
| Contact deduplication (pg_trgm fuzzy match)             | ❌ Not built       |
| Push notifications (send-reminders cron)                | ❌ Not connected   |
| Deploy echoforge.to/relic pages                         | ❌ Local only      |
| Real App Store link in landing page                     | ❌ Placeholder     |

## Next Build Priority

1. Apply Supabase schema (migrations for all tables + RLS)
2. Build `process-recording` + `save-extraction` Edge Functions (the core loop)
3. Wire `services/recording.js` to real upload + transcription
4. Build `generate-brief` Edge Function + wire Brief tab
5. Build `send-reminders` pg_cron job + push notification delivery
6. Deploy echoforge-web to Vercel, submit app to App Store
