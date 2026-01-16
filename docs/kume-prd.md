# KUME — MVP Product Requirements Document

**Version:** 1.0 | **Date:** January 2026  
**Target:** TestFlight in 4 days | $5K MRR in 3 weeks

---

## 1. Executive Summary

Kume is an AI-powered trip planning mobile app that generates personalized travel itineraries in seconds. Users select a destination, choose their interests, and receive a complete day-by-day travel plan with maps, directions, and local recommendations.

### Key Differentiators

- **Speed:** Generate complete itineraries in under 3 seconds for cached cities
- **Personality:** Cute cat mascot (Kume) creates emotional connection
- **Simplicity:** 3-tap experience from open to itinerary
- **Viral-ready:** Designed for TikTok shareability

### Business Model

- $9.99/week subscription (no trial)
- $79.99/year subscription (7-day free trial)
- $59.99 yearly discount (exit-intent offer only)
- 1 free trip for all users (conversion hook)

### Target Metrics (3 weeks)

- $5,000 MRR
- 10,000+ downloads
- 3-5% conversion rate
- 2-3 viral TikTok videos (100K+ views)

---

## 2. User Flow

### Complete Journey (12 Steps)

1. **App Launch** → Splash screen with mascot animation (0.5s)
2. **Magic Demo** → Pre-filled Tokyo example showing the "wow moment"
3. **Account Creation** → Email/Apple/Google sign-up (required)
4. **Paywall** → Subscription options (can dismiss for 1 free trip)
5. **Home Screen** → Search bar + popular destinations + past trips
6. **City Selection** → Search or tap popular city card
7. **Trip Config** → Select dates + toggle categories
8. **AI Place Suggestions** → Scrollable grid of recommended spots
9. **Selection** → User picks spots OR taps "Let AI decide"
10. **Generation** → Loading screen with mascot animation (<3s)
11. **Itinerary View** → Map + day-by-day breakdown
12. **Actions** → Get directions, share, save, edit

---

## 3. Screen Specifications

### Screen 1: Splash

- **Duration:** 0.5 seconds
- **Elements:** Kume logo + mascot with subtle bounce animation
- **Background:** Coral (#FF6B6B) full screen

### Screen 2: Onboarding Magic Demo

- **Purpose:** Show the "magic moment" before asking for anything
- **Content:** Pre-filled 3-day Tokyo itinerary
- **Animation:** Auto-scroll through days, mascot pointing
- **CTA:** "Create Your Trip" button (coral)
- **Copy:** "See how easy it is? Let's plan YOUR adventure!"

### Screen 3: Authentication

- **Options:** Continue with Apple (top), Google, Email
- **Required:** Yes - needed for trip saving and paywall
- **Mascot:** Cat waving, speech bubble "Let's go exploring!"

### Screen 4: Paywall

- **Headline:** "Unlock Unlimited Adventures"
- **Subhead:** "Plan every trip with your AI travel companion"
- **Features:**
  - ✓ Unlimited trip planning
  - ✓ 500+ destinations worldwide
  - ✓ Offline access to saved trips
  - ✓ Priority AI generation
- **Default selection:** Yearly ($79.99) pre-selected
- **weekly option:** $9.99/mo (no trial)
- **Dismiss:** Small X in corner → shows "1 Free Trip" badge
- **Exit intent:** On X tap, show $59.99 yearly discount offer modal
- **Mascot:** Cat with pleading eyes (begging pose)
- **Social proof:** "Join 10,000+ happy travelers"

### Screen 5: Home

- **Header:** "Where to next?" + mascot peek from corner
- **Search bar:** "Search any city..." with magnifying glass
- **Popular destinations:** Horizontal scroll of city cards with photos
- **My trips:** Vertical list of saved trips (or empty state with mascot)
- **Free user badge:** "1 Free Trip" pill in top right if not subscribed

### Screen 6: City Search

- **Search:** Auto-complete with Google Places API
- **Results:** City name + country + small photo
- **Popular:** Show popular cities when search empty

### Screen 7: Trip Configuration

- **City header:** Large photo + city name + country
- **Date picker:** Start date + End date OR "Number of days" toggle
- **Categories:** Grid of toggleable category pills (all 10)
- **Default:** 3 days, Food + Historical + Instagram pre-selected
- **CTA:** "Find Places" button (coral)

### Screen 8: AI Place Suggestions

- **Layout:** Scrollable grid of place cards (2 columns)
- **Card content:** Photo, name, rating, category badge, short description
- **Selection:** Tap to select (coral checkmark overlay)
- **Counter:** "X spots selected" sticky at bottom
- **Let AI decide:** Button to auto-select optimal mix
- **CTA:** "Generate Itinerary" (enabled when spots >= days)

### Screen 9: Generation Loading

- **Duration:** Target <3 seconds
- **Mascot:** Cat walking animation with dotted path trail
- **Text:** Rotating messages:
  - "Planning your adventure..."
  - "Finding the best routes..."
  - "Almost there!"
- **Progress:** Paw print stepping animation

### Screen 10: Itinerary View

- **Header:** Trip name + city + dates + share button
- **Map section:** Interactive map with numbered pins + route lines
- **Day tabs:** Horizontal day selector (Day 1, Day 2, etc.)
- **Timeline:** Vertical list of places with times + travel duration between
- **Place card:** Photo, name, time slot, "Get Directions" button
- **Actions:** Share (generates image), Edit, Save
- **Directions:** Deep link to Google Maps/Apple Maps

---

## 4. Categories (10 Total)

| Emoji | Category             | Google Places Type                      |
| ----- | -------------------- | --------------------------------------- |
| 🍜    | Food & Dining        | restaurant, cafe, bakery                |
| 🛍️    | Shopping             | shopping_mall, store, market            |
| ⛩️    | Temples & Shrines    | hindu_temple, church, mosque, synagogue |
| 🏛️    | Historical Sites     | museum, landmark, monument              |
| 🎭    | Cultural Experiences | art_gallery, theater, cultural_center   |
| 🌸    | Nature & Parks       | park, garden, natural_feature           |
| 🎢    | Entertainment        | amusement_park, zoo, aquarium           |
| 📸    | Instagram Spots      | tourist_attraction, point_of_interest   |
| 🌙    | Nightlife            | bar, night_club, casino                 |
| 💆    | Wellness & Spa       | spa, gym, wellness_center               |

---

## 5. Design System

### 5.1 Color Palette (Airbnb-style B&W + Coral Accent)

| Token                | Hex         | Usage                        |
| -------------------- | ----------- | ---------------------------- |
| background-primary   | #FFFFFF     | Main backgrounds             |
| background-secondary | #F7F7F7     | Cards, inputs                |
| background-tertiary  | #EBEBEB     | Borders, dividers            |
| text-primary         | #222222     | Headlines, body              |
| text-secondary       | #717171     | Descriptions, meta           |
| text-tertiary        | #B0B0B0     | Placeholders                 |
| **accent-primary**   | **#FF6B6B** | **CTAs, selected states**    |
| accent-hover         | #FF5252     | Button press                 |
| accent-light         | #FFE8E8     | Selected backgrounds, badges |
| success              | #00A699     | Confirmations                |
| error                | #FF385C     | Errors, warnings             |

### 5.2 Typography

| Style    | Font           | Size | Weight         |
| -------- | -------------- | ---- | -------------- |
| Hero     | SF Pro Display | 32px | Bold (700)     |
| Title    | SF Pro Display | 24px | Semibold (600) |
| Headline | SF Pro Text    | 18px | Semibold (600) |
| Body     | SF Pro Text    | 16px | Regular (400)  |
| Caption  | SF Pro Text    | 14px | Regular (400)  |
| Small    | SF Pro Text    | 12px | Medium (500)   |

### 5.3 Spacing

- **Base unit:** 4px
- **Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64
- **Screen padding:** 16px horizontal
- **Card padding:** 16px all sides
- **Border radius:** 8px (small), 12px (medium), 16px (large)

### 5.4 Mascot (Kume)

- **Style:** 2D illustration, fluffy grey tabby cat
- **Accessories:** Coral backpack, gold compass necklace
- **Poses needed:**
  - `default` — Sitting, neutral (home screen peek)
  - `walking` — Loading states (with dotted path)
  - `begging` — Paywall (pleading eyes, paws together)
  - `celebrating` — Success (jumping, confetti)
  - `thinking` — Processing (paw on chin)
  - `oops` — Error (embarrassed, sweat drop)
  - `sleeping` — Idle/inactive (curled up, zzz)
  - `empty` — Empty state (looking at blank map)

---

## 6. Technical Architecture

### 6.1 Tech Stack

| Layer      | Technology                | Why                              |
| ---------- | ------------------------- | -------------------------------- |
| Framework  | React Native Expo SDK 52+ | Fast iteration, OTA updates      |
| Navigation | expo-router               | File-based routing               |
| Backend    | Supabase                  | Postgres + Auth + Edge Functions |
| AI         | OpenAI GPT-4o-mini        | ~$0.01-0.03 per itinerary        |
| Places     | Google Places API         | Photos, ratings, details         |
| Payments   | RevenueCat                | Cross-platform subscriptions     |
| Maps       | react-native-maps         | Google Maps SDK                  |
| Analytics  | Mixpanel or PostHog       | Funnel tracking                  |

### 6.2 Speed Optimization

**Target: Under 3 seconds from tap to full itinerary**

1. **Pre-cache top 30 cities** with 100+ places each stored in Supabase
2. **Cache by city + category** for instant retrieval
3. **Progressive loading** — skeleton loaders, blur-up images
4. **Stream AI response** — show itinerary as it generates

**Pre-cached cities:** Tokyo, Paris, NYC, London, Rome, Barcelona, Seoul, Bangkok, Dubai, Bali, Singapore, Amsterdam, Berlin, Sydney, Los Angeles, San Francisco, Miami, Chicago, Toronto, Vancouver, Hong Kong, Taipei, Osaka, Kyoto, Istanbul, Prague, Vienna, Lisbon, Athens, Cairo

### 6.3 Cost Estimates

| Service              | 10K users/mo   | 100K users/mo        |
| -------------------- | -------------- | -------------------- |
| OpenAI (GPT-4o-mini) | $100-300       | $1,000-3,000         |
| Google Places API    | $0 (free tier) | $500-1,000           |
| Supabase             | $0-25          | $75-150              |
| RevenueCat           | $0             | $0 (until $2.5K MTR) |
| **TOTAL**            | **$100-325**   | **$1,575-4,150**     |

---

## 7. Database Schema (Supabase)

```sql
-- profiles (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT,
  display_name TEXT,
  is_premium BOOLEAN DEFAULT FALSE,
  subscription_tier TEXT, -- 'weekly' | 'yearly' | 'yearly discount'
  free_trips_remaining INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- trips
CREATE TABLE trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  city_name TEXT NOT NULL,
  country TEXT,
  city_photo_url TEXT,
  num_days INT NOT NULL,
  categories TEXT[],
  itinerary JSONB, -- full AI-generated itinerary
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- cached_places (pre-fetched from Google)
CREATE TABLE cached_places (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  city_name TEXT NOT NULL,
  category TEXT NOT NULL,
  google_place_id TEXT UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  photo_url TEXT,
  rating DECIMAL(2,1),
  review_count INT,
  lat DECIMAL(10,7),
  lng DECIMAL(10,7),
  cached_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_trips_user ON trips(user_id);
CREATE INDEX idx_cached_city_cat ON cached_places(city_name, category);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own profile" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Own trips" ON trips FOR ALL USING (auth.uid() = user_id);
```

### Itinerary JSONB Structure

```json
{
  "city": "Tokyo",
  "days": [
    {
      "day_number": 1,
      "title": "Historic Asakusa & Modern Shibuya",
      "places": [
        {
          "google_place_id": "xxx",
          "name": "Senso-ji Temple",
          "photo_url": "https://...",
          "category": "temples_shrines",
          "start_time": "09:00",
          "end_time": "10:30",
          "duration_minutes": 90,
          "travel_time_to_next": 25,
          "lat": 35.7147,
          "lng": 139.7966
        }
      ]
    }
  ]
}
```

---

## 8. File Structure (~25 files)

```
kume/
├── app/                      # Expo Router screens
│   ├── _layout.tsx           # Root layout + providers
│   ├── index.tsx             # Splash → redirect
│   ├── onboarding.tsx        # Magic demo
│   ├── auth.tsx              # Sign in/up
│   ├── paywall.tsx           # Subscriptions
│   ├── (tabs)/               # Main app tabs
│   │   ├── _layout.tsx       # Tab navigator
│   │   ├── index.tsx         # Home
│   │   ├── trips.tsx         # My trips
│   │   └── profile.tsx       # Settings
│   └── trip/
│       ├── [city].tsx        # Trip config
│       ├── places.tsx        # Place selection
│       ├── generating.tsx    # Loading
│       └── [id].tsx          # Itinerary view
├── components/               # Reusable UI
│   ├── Button.tsx
│   ├── PlaceCard.tsx
│   ├── CategoryPill.tsx
│   ├── CityCard.tsx
│   ├── DayTimeline.tsx
│   ├── MapView.tsx
│   ├── Mascot.tsx
│   └── PaywallModal.tsx
├── lib/                      # Utilities
│   ├── supabase.ts
│   ├── openai.ts
│   ├── places.ts
│   ├── revenue.ts
│   └── constants.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useTrips.ts
│   └── useSubscription.ts
├── assets/
│   └── mascot/               # Kume poses (PNG)
└── supabase/
    └── functions/
        └── generate-itinerary/
```

---

## 9. Key Components

### Button

```typescript
interface ButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  children: React.ReactNode;
}
// primary = coral bg, white text
// secondary = white bg, coral border
// ghost = transparent, text only
```

### PlaceCard

```typescript
interface PlaceCardProps {
  place: {
    id: string;
    name: string;
    photo_url: string;
    rating: number;
    category: string;
    description?: string;
  };
  selected?: boolean;
  onPress?: () => void;
  variant: "selection" | "itinerary";
}
// selection = checkmark overlay when selected
// itinerary = shows time slot + directions button
```

### CategoryPill

```typescript
interface CategoryPillProps {
  category: { id: string; label: string; emoji: string };
  selected: boolean;
  onToggle: () => void;
}
// unselected = grey bg, dark text
// selected = coral light bg (#FFE8E8), coral text
```

### Mascot

```typescript
type MascotPose =
  | "default"
  | "walking"
  | "begging"
  | "celebrating"
  | "thinking"
  | "oops"
  | "sleeping"
  | "empty";

interface MascotProps {
  pose: MascotPose;
  size: "sm" | "md" | "lg";
  speechBubble?: string;
}
```

---

## 10. API Integrations

### OpenAI (Itinerary Generation)

**Endpoint:** Supabase Edge Function  
**Model:** gpt-4o-mini

**System Prompt:**

```
You are Kume's travel planning AI. Given a list of selected places,
create an optimized day-by-day itinerary. Consider:
- Geographic proximity (minimize travel time)
- Logical flow (breakfast spots in morning)
- Opening hours when available
- Balanced pacing (not too rushed)

Return JSON: { days: [{ day_number, title, places: [{ place_id, start_time,
end_time, duration_minutes, travel_time_to_next }] }] }
```

### Google Places API

- **Nearby Search:** Find places by category in a city
- **Place Details:** Get photos, ratings, hours
- **Place Photos:** High-quality images (400px width)
- **Autocomplete:** City search suggestions
- **Free tier:** $200/week = ~6,000 requests

### RevenueCat

**Products:**

- `kume_weekly` — $9.99/mo
- `kume_yearly` — $79.99/yr (7-day trial)
- `kume_yearly_discount` — $59.99

**Entitlement:** `premium` grants unlimited trips

**Webhook:** Sync subscription status to Supabase `profiles.is_premium`

---

## 11. Monetization Strategy

### Pricing Matrix

| Tier            | Price         | Trial      | When Shown           |
| --------------- | ------------- | ---------- | -------------------- |
| weekly          | $9.99/mo      | None       | Always               |
| **Yearly** ★    | **$79.99/yr** | **7 days** | **Default selected** |
| Yearly Discount | $59.99        | N/A        | Exit-intent only     |

### Paywall Triggers

1. **After onboarding:** Soft paywall (can dismiss for 1 free trip)
2. **Free trip used:** Hard paywall (must subscribe to continue)
3. **Exit intent (tap X):** Show $59.99 yearly discount modal
4. **Settings:** "Upgrade" button always visible

### Yearly Discount Offer Modal (Exit Intent)

- **Trigger:** User taps X on main paywall
- **Headline:** "Wait! Special offer just for you"
- **Price display:** ~~$99~~ → **$59.99 TODAY ONLY**
- **Urgency:** "This offer won't appear again"
- **Mascot:** Begging pose with sparkly eyes
- **Buttons:** "Get Yearly Discount Access" (coral) / "No thanks" (grey text)

---

## 12. 4-Day Launch Checklist

### Day 1: Foundation

- [ ] Initialize Expo project + TypeScript
- [ ] Set up Supabase project + run schema SQL
- [ ] Configure auth (Apple, Google, Email)
- [ ] Build auth flow (auth.tsx)
- [ ] Create Button, Card base components
- [ ] Set up constants.ts (colors, categories)

### Day 2: Core Flow

- [ ] Home screen with city search
- [ ] Trip config screen (dates, categories)
- [ ] Google Places API integration
- [ ] Place selection screen with PlaceCards
- [ ] OpenAI Edge Function for itinerary
- [ ] Loading screen with mascot animation

### Day 3: Itinerary & Map

- [ ] Itinerary view with day tabs
- [ ] Map integration with pins + route lines
- [ ] Day timeline component
- [ ] Google Maps deep linking
- [ ] Save trip to Supabase
- [ ] My Trips list screen

### Day 4: Paywall & Polish

- [ ] RevenueCat integration
- [ ] Paywall screen with all tiers
- [ ] Exit-intent yearly discount modal
- [ ] Onboarding magic demo screen
- [ ] Add all mascot poses
- [ ] App icon + splash screen
- [ ] TestFlight build + submit
- [ ] Record 3 TikTok demo videos

---

## 13. Success Metrics

### Week 1

- TestFlight live ✓
- App Store submission
- 10+ TikTok videos posted
- 50+ beta testers

### Week 2

- App Store approved
- 1,000+ downloads
- $1,000 revenue
- 1 viral TikTok (50K+ views)
- 3%+ conversion rate

### Week 3 ($5K MRR)

- 5,000+ downloads
- **$5,000 MRR**
- ~330 paid subscribers OR ~170 yearly discount purchases
- Product Hunt launch
- 4.5+ App Store rating

### Key Analytics Events

```
app_opened
onboarding_completed
auth_completed
paywall_viewed
paywall_dismissed
yearly_discount_offer_viewed
subscription_started (tier, price)
trip_started (city)
places_selected (count)
itinerary_generated (city, days)
directions_opened
trip_shared
```

---

## 14. TikTok Viral Strategy

### Content Formula

1. **Hook (0-1s):** "POV: Planning Tokyo trip in 10 seconds"
2. **Demo (1-8s):** Pick city → toggle categories → BOOM full itinerary
3. **Result (8-10s):** Show beautiful map with pins + day breakdown
4. **CTA:** "Link in bio" or app name watermark

### Posting Schedule

- 3-5 videos per day
- Multiple accounts (2-3)
- Different cities/angles each video

### Influencer Outreach

- DM 30-50 travel micro-influencers
- Offer $50-200 per post
- Focus on 10K-100K follower accounts
- Target: Travel, lifestyle, Gen Z creators

---

## Summary

**App Name:** Kume  
**Tagline:** "Plan your perfect trip in 10 seconds"  
**Mascot:** Kume (grey tabby cat with coral backpack)  
**Colors:** B&W + Coral (#FF6B6B)  
**Pricing:** $9.99/mo, $79.99/yr, $59.99 yearly discount  
**Goal:** $5K MRR in 3 weeks

**Ship fast. Iterate faster. Let's go! 🐱🚀**
