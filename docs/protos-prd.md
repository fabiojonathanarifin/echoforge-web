# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Protos is an offline-first Bible study mobile app built with React Native and Expo. The app provides Bible reading (BSB translation), commentary integration (Tyndale, JFB), verse highlights, notes, and reading progress tracking with optional cloud sync via Supabase.

## Development Commands

```bash
# Start development server
npx expo start

# Run on specific platform
npx expo run:ios
npx expo run:android

# Lint code
npm run lint
```

## Architecture

### Offline-First Data Flow

```
React Native UI → Zustand Store → MMKV Cache → SQLite Database
                                                    ↓
                                          Supabase Cloud Sync (premium)
```

- **MMKV**: Fast session cache for current chapter data and preferences
- **SQLite**: Persistent offline storage for Bible content, user highlights, notes
- **Supabase**: Cloud sync for authenticated users (pull on app start, push on background)

### Store Architecture (Zustand)

| Store                    | Purpose                                                        |
| ------------------------ | -------------------------------------------------------------- |
| `useLibraryStore`        | Bible/commentary data, navigation, database connections        |
| `useThemeStore`          | Font settings (separate Bible vs app fonts), theme preferences |
| `useAuthStore`           | Supabase authentication and user sessions                      |
| `useUserProfileStore`    | User profile data and preferences                              |
| `useHighlightsStore`     | Verse highlighting with sync                                   |
| `useNotesStore`          | Verse notes with sync                                          |
| `useReadingSessionStore` | Reading progress tracking                                      |
| `useSupabaseSync`        | Cloud synchronization logic                                    |
| `useRevenueCatStore`     | Premium subscriptions                                          |

### File Structure

```
app/                    # Expo Router pages (file-based routing)
├── (tabs)/             # Main tab navigation (dashboard, bible, highlights, notes, library)
├── (auth)/             # Authentication screens
├── (onboarding)/       # Onboarding flow
├── (bible)/            # Bible-related modals (word study, word selection)
└── (tools)/            # Tools screens (word search)

stores/                 # Zustand state management
hooks/                  # Custom hooks (useAutoSync, useFeatureTutorial, etc.)
constants/              # App constants (Colors, Fonts, BibleBooks, metrics)
components/             # Reusable UI components

assets/databases/       # Prebuilt SQLite databases (BSB Bible, Tyndale, JFB commentary)
```

### Bible Navigation Pattern

The Bible reader uses dynamic routing: `app/(tabs)/bible/[book]/[chapter].jsx`

Navigation data:

- Book codes are 3-letter IDs: `GEN`, `EXO`, `JHN`, `REV`, etc.
- Chapter data fetched from SQLite, cached in MMKV per session
- Mode toggle between Bible text and commentary

## Key Patterns

### SQLite Timestamp Handling

Always use ISO 8601 format and `datetime()` wrapper:

```js
// Creating timestamps
const now = new Date().toISOString();

// Querying with proper sorting
await db.getAllAsync(
  `SELECT * FROM notes WHERE user_id = ?
   ORDER BY datetime(updated_at) DESC LIMIT ?`,
  [userId, limit]
);

// UPSERT pattern using excluded.column
await db.runAsync(
  `INSERT INTO highlights (...) VALUES (?, ?, ?, ?)
   ON CONFLICT(user_id, verse_id) DO UPDATE SET
     color = excluded.color,
     updated_at = excluded.updated_at`,
  [id, userId, verseId, now]
);
```

### Font Separation

Bible reading fonts (user-customizable) are separate from app-wide fonts (always Georgia):

```js
// For Bible reading screens
const { bibleFontPreset, bibleCustomFontSize } = useThemeStore();

// For all other screens (dashboard, notes, highlights)
const currentFont = useThemeStore.getState().getCurrentFont();
```

### Sync Strategy

- **Pull on app start**: Get latest data from Supabase
- **Push on background**: Backup local changes
- **Full sync on foreground**: Push + pull with rate limiting (30s minimum interval)
- **Conflict resolution**: Last-write-wins using `updated_at` timestamps

### Authentication Flow

Using Supabase Auth with Zustand:

1. `initAuth()` sets up auth state listener in `_layout.jsx`
2. Route protection checks `user` and `initialized` states
3. Profile initialization triggers after auth state changes

## Tech Stack

- **React Native 0.81** with **Expo 54** (Expo Router for navigation)
- **JavaScript** (not TypeScript) with `.jsx` extensions
- **Zustand 5** for state management
- **expo-sqlite** for local database
- **react-native-mmkv** for fast key-value cache
- **Supabase** for auth and cloud sync
- **RevenueCat** for subscriptions

## Code Style

- Use `.jsx` for React components, `.js` for utilities/stores
- Use `StyleSheet.create()` for styling with `Colors.dark.*` constants
- File imports: React → React Native → Third-party → Local components → Constants → Hooks
- Use 8px spacing increments and consistent border radius (8px, 12px, 16px)
