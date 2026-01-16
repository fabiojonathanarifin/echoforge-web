# Voice-First AI Planner - Product Requirements Document

## Executive Summary

**Product Name:** [TBD - suggestion: "Spoken" or "Whisper Plan"]  
**Target Launch:** Q1 2026  
**Version:** 1.0 (MVP)  
**Team Size:** Solo founder (indiehacker project)  
**Tech Stack:** React Native, Supabase, OpenAI API (GPT-4o mini)

### Vision

A voice-first AI planner that lets busy professionals and indie builders manage their schedule by simply speaking to their phone—no typing, no manual entry, no friction.

### Success Criteria (3 months post-launch)

- 10,000+ downloads
- 1,000+ weekly active users
- 200+ paid subscribers ($39/year tier)
- 15%+ D7 retention rate
- At least one viral TikTok/Reel (100K+ views)

---

## Problem Statement

**Target Users:** Busy professionals, indie builders, overwhelmed parents, freelancers, consultants

**Core Problems:**

1. Manual calendar/task entry is time-consuming and breaks flow state
2. Context switching between multiple apps (calendar, tasks, notes) creates friction
3. Existing solutions require too much manual maintenance
4. Planning feels like a chore, not a support system

**Why Now:**

- Voice AI quality (speech-to-text, NLP) has reached consumer-grade reliability
- Tiimo just won iPhone App of the Year 2025 proving demand for next-gen planning
- Post-COVID remote work has made scheduling chaos universal
- Users are overwhelmed by too many productivity apps

---

## Competitive Analysis

| App            | Pricing        | Strength                                           | Weakness                      | Our Advantage                 |
| -------------- | -------------- | -------------------------------------------------- | ----------------------------- | ----------------------------- |
| **Tiimo**      | $54/yr         | Neurodivergent focus, visual timeline, Apple award | Niche positioning, complex UI | Broader audience, simpler UX  |
| **Hero**       | Free + Premium | All-in-one, family sharing, 300K users             | Not voice-first, cluttered    | Voice-first = faster, cleaner |
| **Structured** | $42-54/yr      | Zen aesthetic, timeline view                       | Manual entry only             | Voice eliminates friction     |
| **Grit**       | ~$40/yr        | Habit tracking, gamification                       | Not scheduling-focused        | Combines planning + habits    |

**Key Differentiation:** We're the ONLY voice-first AI planner for mainstream professionals (not ADHD-specific), with couple/family sharing built in from day one.

---

## Target Users & Personas

### Primary Persona: "Alex the Indie Builder"

- **Age:** 28-38
- **Occupation:** Solo founder, freelancer, consultant
- **Pain:** Juggling client work, building side projects, personal life—planning feels impossible
- **Behavior:** Active on Twitter/X, tries new productivity tools monthly, values speed over features
- **Quote:** "I want to brain dump my week and have it just... handled."

### Secondary Persona: "Jordan the Overwhelmed Parent"

- **Age:** 30-42
- **Occupation:** Working parent (remote or hybrid)
- **Pain:** Managing kids' schedules, household tasks, work meetings, partner coordination
- **Behavior:** Uses Instagram/TikTok, searches "productivity hacks," shares tips with mom groups
- **Quote:** "I need my partner to know what's happening today without me explaining it 10 times."

### Tertiary Persona: "Sam the Busy Consultant"

- **Age:** 26-45
- **Occupation:** Consultant, account manager, client-facing role
- **Pain:** Back-to-back meetings, travel, no time to organize
- **Behavior:** LinkedIn user, values professionalism, pays for tools that work
- **Quote:** "I'm always in meetings—I need to plan between calls."

---

## Product Vision & Scope

### V1 Core Features (MVP - Launch Ready)

#### 1. Voice-First Task Input + AI Chat Interface ⭐ CORE MAGIC

**Two Modes of Interaction:**

**Mode A: Quick Voice Capture (Primary - Simplest)**

1. User taps mic button (or uses widget)
2. Speaks naturally: "Schedule dentist Tuesday 2pm, call mom tomorrow afternoon, buy groceries tonight"
3. App shows real-time transcription
4. Tasks appear instantly in timeline with auto-generated emoji
5. User can edit/adjust immediately

**Mode B: Conversational AI Planning (Tiimo-style - V1 Feature)**

1. User taps "Chat with Magda" button or types/speaks: "Organize my day" or "Can you adjust my schedule?"
2. AI responds conversationally, aware of existing schedule
3. AI can:
   - Ask clarifying questions ("What would you like to adjust?")
   - Suggest changes ("Want me to move your meeting to give you lunch time?")
   - Show current schedule inline in chat
   - Request approval for changes (especially recurring tasks)
4. User approves/rejects suggestions via chat or action buttons
5. Changes apply to timeline immediately

**Technical Architecture:**

**Quick Voice Capture Pipeline:**

- iOS native `Speech` framework for STT (free, fast)
- Send transcription to Supabase Edge Function → OpenAI API
- GPT-4o mini with structured JSON output
- Parse: title, date, time, category, duration, + emoji (AI-generated based on task content)
- Insert to database, return to frontend

**Conversational AI Chat Pipeline:**

- Chat interface (similar to ChatGPT UI)
- Each message sent to OpenAI API with conversation history + user's current schedule context
- System prompt makes AI aware of:
  - User's timezone
  - Today's date/time
  - All existing tasks (fetched from database)
  - User's typical routines (learned over time)
- AI can call "functions" to:
  - `get_schedule(date)` - Fetch tasks for specific date
  - `create_task(title, date, time, category, duration)` - Add new task
  - `update_task(task_id, changes)` - Modify existing task
  - `delete_task(task_id)` - Remove task
  - `get_habits()` - Fetch user's habits
  - `create_habit(title, days_of_week, time_of_day, category, duration)` - Create new habit
  - `update_habit(habit_id, changes)` - Modify habit
  - `delete_habit(habit_id)` - Remove habit
  - `get_todo()` - Fetch todo items
  - `create_todo_item(title, category, priority)` - Add to todo
  - `schedule_todo_item(item_id, date, time)` - Convert todo item to task
  - `suggest_schedule_adjustment()` - Propose optimizations
- Responses include both text explanation and action buttons ("Approve", "Reject", "Approve for this instance only")

**System Prompt for Conversational AI (Simplified):**

```
You are Magda, an AI planning assistant. You help users organize their schedule through natural conversation.

Current context:
- User timezone: {timezone}
- Current date/time: {now}
- User's tasks today: {tasks_json}

Your capabilities:
- View user's schedule
- Add/edit/delete tasks
- Suggest schedule optimizations
- Ask clarifying questions when needed

Tone: Friendly, concise, proactive but not pushy. Use emojis occasionally.

When suggesting changes to recurring tasks, ALWAYS ask: "Just this instance, this and future, or all instances?"

Format responses as JSON with:
{
  "message": "Your conversational response",
  "actions": [
    {"type": "create_task", "data": {...}},
    {"type": "show_schedule", "date": "2026-01-20"}
  ],
  "requires_approval": true/false
}
```

**Chat UI Components:**

**Quick Action Chips (Always visible above chat input):**

- 🧠 "Organize my thoughts to plan"
- 📦 "Add tasks to my to-do"
- 📅 "Plan my week"
- 🔄 "Adjust my day"
- ✨ Custom user favorites (learned over time)

**Message Bubbles:**

- User messages: Right-aligned, dark gray `#3C3C3E`, white text
- AI messages: Left-aligned, purple gradient `#6B5FD6` to `#8B7FDE`, white text
- Action buttons below AI messages: Outlined, white border, tap to approve/reject

**Inline Task Display in Chat:**
When AI says "Here's what you have today:", show task cards inline:

```
┌─────────────────────────────┐
│ TODAY                       │
│ ┌─────────────────────────┐ │
│ │ ✏️ Clear tasks          │ │
│ │ Today • Anytime • 30m   │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ 🌅 Morning routine      │ │
│ │ Today • Anytime • 30m   │ │
│ └─────────────────────────┘ │
│ [Scroll for more ↓]         │
└─────────────────────────────┘
```

**Approval Flow for Task Changes:**
When AI suggests changing a recurring task:

- Show task details: "You are about to update a weekly task titled 'Go to bed,' scheduled from 10:00 PM to 10:05 PM on December 24, 2025."
- 3 button options:
  1. "Approve for this instance only"
  2. "Approve for this and future instances"
  3. "Approve for all instances"
- Apply change only after user taps

**Edge Cases:**

- Ambiguous requests: AI asks clarifying questions before acting
- Conflicting tasks: AI warns "This overlaps with [existing task]. Want me to reschedule one?"
- No tasks to show: AI responds warmly: "Your schedule is clear! Want to add something?"
- Failed actions: AI explains "I couldn't add that task because [reason]. Can you try rephrasing?"

**Performance Targets:**

- Quick voice: <3 seconds from voice stop → tasks appear
- Chat response: <2 seconds for AI reply
- Inline schedule display: <1 second to load

**Free vs Pro Differences:**

- Free: 3 chat messages/day (in addition to 3 quick voice inputs)
- Pro: Unlimited chat + voice inputs

---

#### 2. Visual Timeline (Zen Design)

**Layout:**

- Today view (default): Hour-by-hour timeline (6am-11pm)
- Tasks appear as blocks (drag-and-drop to reschedule)
- Color-coded by category (work, personal, health, etc.)
- Clean, minimal UI inspired by Structured app aesthetic
- Empty states: Motivational, not sterile

**Features:**

- Swipe left/right for yesterday/tomorrow
- Pinch to zoom timeline (see more/less hours)
- Tap task for details/edit
- Checkboxes to complete tasks
- Overdue tasks highlighted gently (not aggressive red)

**Categories (Default):**

- Work
- Personal
- Health
- Social
- Errands
- User can add custom categories

---

#### 3. Calendar Integration (Sync)

**Direction:** Two-way sync with Google Calendar & Apple Calendar

**User Flow:**

1. During onboarding: "Connect your calendar?" (optional but recommended)
2. OAuth flow for Google, iOS Permissions for Apple
3. Import existing events as read-only blocks in timeline
4. Tasks created in our app can be pushed to external calendars (user setting)

**Technical:**

- Supabase handles OAuth tokens securely
- Poll for calendar updates (every 15-30 min)
- Conflict detection: Warn user if voice task overlaps calendar event

**Source of Truth:** Our app = tasks, External calendar = events. Distinction in UI.

---

#### 4. Habits (Recurring Tasks) 🎯 V1 Feature

**Purpose:** Create recurring tasks with customizable days of the week and times

**Features:**

- Create habit with title, category, emoji, days of week (Mon-Sun), time, duration
- System auto-generates tasks for selected days each week (next 2 weeks)
- Edit habit → Updates future tasks, keeps completed ones
- Enable/disable habit → Stops generating new tasks, keeps existing ones
- Delete habit → Option to delete all generated tasks or keep them
- Tasks generated from habits show indicator in timeline
- Tasks inherit: title, category, emoji, time, duration from habit

**User Flow:**

1. User creates habit: "Morning workout" → Mon, Wed, Fri at 7am, 30min
2. System generates tasks for next 2 weeks automatically
3. User completes tasks as normal
4. On app open, system checks and generates missing tasks
5. User edits habit time → Future tasks update, past ones unchanged

**Technical:**

- Store habits in `habits` table
- Tasks have `habit_id` reference and `source: 'habit'`
- Generate tasks on app open and when habits change
- Check for existing tasks before generating (avoid duplicates)

#### 5. Todo & Brain Dump 🗂️ V1 Feature

**Purpose:** Capture tasks without dates ("I need to remember this later")

**Features:**

- Voice input without dates → Goes to Todo automatically
- AI suggests priority based on keywords ("urgent", "asap" → high, "someday" → low)
- Swipe right on todo item → "Schedule this" (opens scheduling modal)
- Swipe left → Delete
- Sort by priority (high → medium → low), then by creation date
- Weekly review prompt: "You have 12 todo items—schedule them?"
- Schedule multiple items at once

**User Flow:**

1. User says: "Remember to buy groceries" (no date) → Goes to todo
2. User says: "Urgent: Call client ASAP" → Goes to todo with high priority
3. Later, user swipes right → Schedules with date/time
4. Todo item converts to task and is removed from todo

**Technical:**

- Store in `todo_items` table (no date/time fields)
- Priority: low/medium/high (default: medium)
- When scheduling, create task and delete todo item
- Voice parsing separates items with dates (tasks) from items without (todo)

---

#### 6. Basic Sharing (Couple/Family Feature - V1.2)

**MVP Scope for V1:**

- Share "Today's Plan" as text/link (read-only)
- Copy-paste friendly format or iMessage link preview

**V1.2 (Month 2-3):**

- Invite partner/family member to app
- Each person has own account, can opt to share specific categories
- Shared timeline view: See partner's "work" and "personal" but not "health" (privacy controls)
- One-tap check-in: "I'm running late on dentist" updates partner's view

---

#### 7. Authentication & Sign In 🔐 V1 Feature

**Purpose:** Secure user authentication with multiple sign-in options

**Sign-In Methods:**

1. **Email/Password**

   - Traditional email + password sign-up
   - Email verification required
   - Password reset via email

2. **Apple Sign In** (iOS)

   - Native iOS Apple Sign In button
   - Uses `expo-apple-authentication`
   - Privacy-focused, no email sharing option
   - Required for App Store approval

3. **Google Sign In**
   - OAuth 2.0 flow via Supabase Auth
   - Uses `expo-auth-session` or `@react-native-google-signin/google-signin`
   - One-tap sign-in experience

**User Flow:**

1. On first launch → Show onboarding with sign-in options
2. User chooses method → Complete authentication flow
3. Create user profile in Supabase `users` table
4. Store auth session in AsyncStorage (via Supabase)
5. Auto-sign-in on subsequent app opens

**Technical:**

- Supabase Auth handles all authentication
- Store user profile: email, timezone, preferences
- Session persistence via AsyncStorage
- Handle token refresh automatically
- Sign out → Clear session and local data

**Security:**

- Row-Level Security (RLS) ensures users only see their own data
- OAuth tokens stored securely in Supabase
- No passwords stored (handled by Supabase)
- Session tokens expire and refresh automatically

#### 8. Auto-Generated Task Icons/Emoji 🎨

**Purpose:** Visual distinction and personality for tasks without manual selection

**How it works:**

- When task is created (via voice or chat), GPT generates appropriate emoji
- Prompt includes: "Based on task title '{title}' and category '{category}', suggest ONE emoji that best represents this task. Return only the emoji character."
- Examples:
  - "Call mom" → 📞
  - "Dentist appointment" → 🦷
  - "Buy groceries" → 🛒
  - "Work on pitch deck" → 💼
  - "Go to gym" → 🏋️
  - "Meditation" → 🧘

**Fallback:**

- If API fails: Use category default emoji (Work=💼, Personal=🏠, Health=❤️, etc.)
- User can manually change emoji by tapping task → edit icon

**Technical:**

- Add `emoji` field to tasks table (TEXT, max 4 chars for multi-byte emoji)
- Call GPT-4o mini with simple prompt (costs ~$0.0001 per task)
- Cache common task→emoji mappings to reduce API calls

#### 9. Notifications & Reminders 🔔 V1 Feature

**Purpose:** Keep users aware of upcoming tasks without being intrusive

**Notification Types:**

1. **Before Task Reminder**

   - Default: 15 minutes before task start time
   - Customizable: 5, 10, 15, 30, or 60 minutes before
   - User can toggle ON/OFF per task
   - Default setting configurable in Settings

2. **At Start Time**

   - Notifies exactly when task is scheduled to begin
   - Default: OFF (opt-in per task)
   - Useful for critical appointments or time-sensitive tasks
   - Default setting configurable in Settings

3. **After Task Ends**
   - Notifies when task duration is complete
   - Default: OFF (opt-in per task)
   - Useful for time-boxed work sessions
   - Default setting configurable in Settings

**Daily Summaries:**

- **Morning Briefing:** "Good morning! Here's what's on your plate today"

  - Default time: 8:00 AM (customizable)
  - Shows today's tasks count and first few items
  - Toggle ON/OFF in Settings

- **Evening Review:** "3 tasks incomplete—reschedule or mark done?"
  - Default time: 8:00 PM (customizable)
  - Shows incomplete tasks for the day
  - Toggle ON/OFF in Settings

**User Controls:**

- **Per-Task Settings:** When creating/editing a task, user can toggle:
  - Remind me before (with time picker: 5/10/15/30/60 min)
  - Notify at start time
  - Notify when task ends
- **Default Settings:** In Settings screen, user can set defaults for all new tasks
- **Global Toggle:** Master switch to enable/disable all notifications
- **Loud Notifications:** Option to bypass silent mode (requires special permission, opt-in)

**Technical:**

- Use `expo-notifications` for local notifications
- Schedule notifications when task is created/updated
- Cancel notifications when task is deleted or completed
- Handle timezone properly (use user's timezone from profile)
- Store notification preferences in `users.preferences` JSONB field

---

### V1 Excluded (Save for V2)

- Advanced AI suggestions ("You should block lunch time")
- Web app (mobile-first)
- Collaboration features beyond basic sharing (V1.2)
- Time tracking
- Focus timers
- Note-taking beyond task descriptions
- Habit analytics/streaks (habits exist but no tracking UI in V1)

---

## User Experience & Design Principles

### Design Philosophy: "Warm Minimalism with Depth"

- **Calm, not chaotic:** Soft colors, gentle animations, no red "urgency" alerts
- **Voice-first, not voice-only:** Allow manual input for precision
- **Invisible AI:** Users shouldn't think "I'm using AI"—it just works
- **Speed:** Every action in ≤3 taps or 1 voice command
- **Modern 2025 aesthetic:** Dark mode default, card-based UI, soft rounded edges, depth via shadows

### Visual Design System

**Design Style:** Modern Dark Productivity (2025 trends)

- Card-based layout with clear elevation via shadows (NOT glassmorphism)
- Soft, rounded edges throughout for warmth and approachability
- Dark mode as default (light mode is V2)
- Clean minimalism with intentional pops of color
- 3D isometric illustrations for marketing/onboarding only (not in actual UI)

**Background Colors:**

- Primary: Deep charcoal `#1C1C1E` (iOS system background dark)
- Alternative: Deep navy `#0A1929` (slightly warmer feel)
- Surface/Cards: Elevated `#2C2C2E` (not pure black—softer on eyes)

**Text Colors:**

- Primary: Off-white `#F5F5F7` (not pure white—easier on eyes)
- Secondary: Medium gray `#A0A0A0` (for timestamps, details, metadata)
- Tertiary: Subtle gray `#666666` (for timeline hour markers)
- All text meets WCAG contrast guidelines (4.5:1 for normal, 3:1 for large)

**Accent Colors (Category-based):**

- Work: Soft purple `#8B7FDE`
- Personal: Sage green `#7FB069`
- Health: Peach `#F4A89D`
- Social: Sky blue `#7DBAED`
- Errands: Warm yellow `#F4C95D`
- User can customize category colors in settings

**Shadows (for depth):**

- Card shadow: `0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)`
- Button shadow: `0 4px 12px rgba(0, 0, 0, 0.5)`
- Voice button glow: `0 4px 16px rgba(139, 127, 222, 0.3)` (purple accent)

**Border Radius:**

- Task cards: 12px
- Buttons: 16px
- Modals/Sheets: 20px
- Voice input button: 50% (perfect circle)

### Typography System

**Font Family:** SF Pro (iOS native system font)

- Excellent readability
- No custom font loading = better performance
- Familiar to iOS users

**Font Weights & Sizes:**

- **Task titles:** 18px, Semibold (600), `#F5F5F7`
- **Task details:** 14px, Regular (400), `#A0A0A0`
- **Metadata:** 12px, Regular (400), `#666666`
- **Section headers:** 24px, Bold (700), `#F5F5F7`
- **Body text:** 16px, Regular (400), `#F5F5F7`

**Hierarchy Rules:**

- Clear size jumps (18→14→12px)
- Weight contrast (Bold headers, Regular body)
- Color contrast (White for primary, Gray for secondary)

### Component Design Specs

**Task Card:**

```
┌─────────────────────────────────────┐
│ ▮ Call mom                          │ ← 18px Semibold, category color dot
│   Personal • 2:00 PM • 30min        │ ← 14px Regular, gray
└─────────────────────────────────────┘
```

- Background: `#2C2C2E`
- Border-left: 4px solid (category color)
- Border-radius: 12px
- Shadow: Card shadow (see above)
- Padding: 16px
- Margin-bottom: 8px

**Voice Input Button (Primary CTA):**

- Size: 72px diameter (large, easy to tap)
- Background: Linear gradient `135deg, #8B7FDE → #7DBAED` (purple to blue)
- Icon: Microphone (white, 32px)
- Shadow: `0 4px 16px rgba(139, 127, 222, 0.3)`
- Animation: Subtle pulse when active (scale 1.0 → 1.05, 1s loop)
- Position: Bottom center, floating above timeline

**Timeline View:**

- Hour markers: Left side, 14px Regular, `#666666`
- Hour dividers: 1px horizontal lines, `#333333` (very subtle)
- Current time indicator: 2px line in accent color with small dot
- Tasks: Float on timeline as cards (positioned by time)
- Background: `#1C1C1E` (main bg)

**Onboarding Screens:**

- Use 3D isometric illustrations (outsource to Fiverr/Dribbble)
- Style: Soft colors, rounded shapes, workspace/planning themes
- Similar to reference image (desk, calendar, organized life)
- Illustrations only for onboarding + App Store screenshots

### Interactions & Microanimations

**Haptic Feedback:**

- Task completion: Light impact
- Voice input start: Medium impact
- Voice input end: Success notification
- Drag-and-drop: Selection feedback

**Animations (keep subtle):**

- Voice button pulse: 1s loop, scale 1.0 → 1.05
- Task creation: Fade in + slide up (200ms ease-out)
- Task completion: Scale down + fade out (150ms)
- Drag-and-drop: Magnetic snap to hour slots (spring animation)
- Screen transitions: Smooth push/modal (iOS native)

**Microinteractions:**

- Checkbox: Checkmark draw animation (100ms)
- Category dot: Gentle glow on selection
- Swipe actions: Reveal with follow gesture

### Design Anti-Patterns (What to AVOID)

❌ Pure black backgrounds `#000000` (causes eye strain, too harsh)
❌ Pure white text `#FFFFFF` (too high contrast on dark bg)
❌ Glassmorphism/transparency effects (harder to read, performance cost)
❌ Over-the-top animations (keep smooth but purposeful)
❌ Too many colors (stick to 5 category colors)
❌ Skeuomorphism (no fake leather, stitching, etc.)
❌ Aggressive red for urgency (use amber `#F4C95D` if needed)

---

## Technical Architecture

### Data Storage Strategy: **Online-Only (No SQLite)**

**Architecture Decision:**

- Supabase is the single source of truth
- No local SQLite database
- App requires internet connection for CRUD operations (Create, Update, Delete)
- Read-only viewing of cached data allowed when offline

**Rationale:**

1. Core features (voice parsing, AI chat, calendar sync) require internet anyway
2. Simpler architecture = faster shipping + fewer bugs
3. No sync conflicts or "offline queue" complexity
4. Real-time collaboration (shared planning) works seamlessly
5. Target users (indie builders, consultants, parents) are rarely fully offline

**Offline Handling:**

**When User Goes Offline:**

1. **Detect offline state** using `NetInfo` (React Native library)
2. **Show banner** at top of screen:

   ```
   ┌─────────────────────────────────────┐
   │ ⚠️ No internet connection           │
   │ You're viewing offline. Connect to  │
   │ add or edit tasks.                  │
   └─────────────────────────────────────┘
   ```

   - Background: Amber `#F4C95D` with low opacity
   - Auto-hide when online again (smooth slide-up animation)

3. **Disable actions:**

   - Voice button: Grayed out, shows tooltip "Requires internet"
   - Chat input: Disabled with placeholder "Connect to chat with Magda"
   - Add task button: Disabled
   - Edit/delete: Disabled (show toast: "Connect to make changes")
   - Drag-and-drop: Disabled

4. **Allow read-only viewing:**

   - User can scroll timeline
   - User can see task details (tap to view, but can't edit)
   - Show last-fetched data from memory (React state)
   - Display "(Viewing offline)" in header

5. **When back online:**
   - Auto-refresh data from Supabase
   - Banner slides away
   - Re-enable all actions
   - Optional: Show success toast "Back online ✓"

**Technical Implementation:**

```javascript
import NetInfo from "@react-native-community/netinfo";

// In App.js or root component
const [isOffline, setIsOffline] = useState(false);

useEffect(() => {
  const unsubscribe = NetInfo.addEventListener((state) => {
    setIsOffline(!state.isConnected);

    if (state.isConnected) {
      // Back online - refresh data
      refreshTasksFromSupabase();
    }
  });

  return () => unsubscribe();
}, []);

// Pass isOffline as prop to all components
// Disable buttons, show banner, etc.
```

**In-Memory Cache (React State Only):**

- Keep fetched tasks in React state/context
- When user opens app → fetch from Supabase → store in state
- When offline → display from state (stale data is fine for viewing)
- No persistent cache (no AsyncStorage for tasks)

**Exception: User Preferences**

- Store settings in AsyncStorage (theme, notification preferences, onboarding completion)
- These don't need to sync, safe to store locally

**Error Handling:**

- Network request fails → Show toast: "Connection lost. Trying again..."
- Retry failed requests automatically (3 attempts with exponential backoff)
- If still fails after retries → Show banner + disable actions

### Frontend: React Native (Expo)

**Why:**

- Cross-platform (iOS first, Android v2)
- Fast iteration
- Rich ecosystem
- Expo managed workflow for easier native module integration

**Language & Code Philosophy:**

- **JavaScript (NOT TypeScript)** - Faster iteration, less boilerplate, perfect for solo dev
- **Self-documenting code** - Descriptive variable/function names over excessive comments
- **Inline comments only for complex logic** - If function is straightforward, name should explain it
- **Lean & scalable** - No overengineering, no premature optimization, ship fast
- **Solo-friendly architecture** - Avoid patterns that require teams (microservices, complex abstractions)

**Code Style Principles:**

```javascript
// ✅ GOOD: Self-documenting
const isUserOnline = checkNetworkConnection();
const filteredTodayTasks = tasks.filter((task) => task.date === today);

// ❌ BAD: Needs comments to understand
const x = checkNet(); // checks if user online
const t = tasks.filter((t) => t.d === td); // filter today tasks

// ✅ GOOD: Complex logic with inline comment
function calculateTaskOverlap(task1, task2) {
  // Check if tasks overlap by comparing start/end times
  // Returns true if any minute overlaps
  const task1End = task1.startTime + task1.duration;
  const task2End = task2.startTime + task2.duration;
  return task1.startTime < task2End && task2.startTime < task1End;
}

// ✅ GOOD: Simple function, no comment needed
function isTaskCompleted(task) {
  return task.completed === true;
}
```

**Naming Conventions:**

- Variables: `camelCase` (e.g., `userTasks`, `isOffline`)
- Functions: `camelCase` with verb prefix (e.g., `fetchTasks`, `handleVoiceInput`, `createNewTask`)
- Components: `PascalCase` (e.g., `TaskCard`, `VoiceButton`, `OfflineBanner`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`, `MAX_TASKS_FREE_TIER`)
- Files: Match component/function name (e.g., `TaskCard.js`, `useNetworkStatus.js`)

**Folder Structure (Flat & Simple):**

```
src/
├── components/        # Reusable UI components
├── screens/          # Full-screen views
├── hooks/            # Custom React hooks
├── store/            # Zustand stores
├── utils/            # Helper functions
├── api/              # Supabase/API calls
└── constants/        # Colors, strings, config
```

**State Management:**

- **Zustand** for global state (tasks, user, offline status, chat conversations)
- React Context API as fallback for deeply nested component props
- Why Zustand: Lightweight, less boilerplate than Redux, works well with React Native

**Core Dependencies (Use Latest Versions):**

**Expo & React Native:**

- `expo` - Managed workflow
- `react-native` - Core framework
- `expo-router` (or React Navigation v6+) - Navigation/routing

**State Management:**

- `zustand` - Global state management

**UI & Animations:**

- `react-native-reanimated` - Smooth animations (drag-and-drop, transitions)
- `react-native-gesture-handler` - Touch gestures and swipes
- `react-native-calendars` (or build custom timeline) - Calendar/timeline view
- Expo built-in components (View, Text, ScrollView, etc.)

**Voice & Audio:**

- `expo-speech` - iOS native speech-to-text (or `@react-native-voice/voice` if more control needed)
- `expo-av` - Audio playback (for future voice output feature in V2)

**Network & API:**

- `@react-native-community/netinfo` - Online/offline detection
- `@supabase/supabase-js` - Supabase client
- `axios` or `fetch` (native) - HTTP requests to OpenAI API (via Supabase Edge Functions)

**Calendar Integration:**

- `expo-calendar` - iOS/Android calendar access (or `react-native-calendar-events` for more features)
- Google Calendar API integration (via Supabase Edge Functions + OAuth)

**Notifications:**

- `expo-notifications` - Local and push notifications
- `expo-background-fetch` - Background task execution (for notification scheduling)

**Storage:**

- `@react-native-async-storage/async-storage` - Local storage for user preferences only (NOT tasks)

**Widgets:**

- `react-native-widget-extension` (or Expo native module) - iOS home screen widgets
- `expo-intent-launcher` (Android equivalent in V2)

**Utilities:**

- `date-fns` or `dayjs` - Date manipulation (lighter than moment.js)
- `react-native-uuid` - Generate unique IDs for tasks
- `expo-haptics` - Haptic feedback
- `expo-blur` - Blur effects (if needed for modals/overlays)

**Development Tools:**

- `@expo/vector-icons` - Icon library (Ionicons, MaterialIcons, etc.)
- `expo-dev-client` - Custom dev client for native modules

**Authentication:**

- Supabase Auth (built into `@supabase/supabase-js`)
- `expo-apple-authentication` - Apple Sign In (iOS)
- `expo-auth-session` - OAuth flows (Google Sign In, Google Calendar)
- `@react-native-google-signin/google-signin` - Alternative Google Sign In option

**Deep Linking:**

- `expo-linking` - Handle deep links (widget taps, Siri shortcuts)

**Notes:**

- **JavaScript only** - No TypeScript to keep velocity high
- Use latest stable versions at time of project init
- Expo SDK 50+ recommended (check compatibility with all libraries)
- Avoid deprecated packages (check npm/expo docs before adding)
- Keep dependencies minimal to reduce app size and build complexity
- **No overengineering** - If a feature doesn't need a library, write 10 lines of code instead

---

### Backend: Supabase

**Why:**

- Postgres database (relational for tasks/users)
- Real-time subscriptions (for shared plans)
- Edge Functions for API calls (OpenAI)
- Row-level security (RLS) for multi-user
- Built-in auth (email, Google OAuth)

**Database Schema (Simplified):**

```sql
-- Users table
users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  created_at TIMESTAMP,
  timezone TEXT,
  preferences JSONB -- notification settings, categories, etc.
)

-- Tasks table
tasks (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  scheduled_date DATE,
  scheduled_time TIME,
  duration_minutes INT,
  emoji TEXT, -- max 4 chars for multi-byte emoji
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  source TEXT, -- 'voice', 'manual', 'calendar_sync', 'habit', 'todo'
  habit_id UUID REFERENCES habits(id) NULLABLE -- if task generated from habit
)

-- Habits table
habits (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  category TEXT,
  emoji TEXT, -- max 4 chars
  days_of_week INTEGER[], -- array of 0-6, where 0=Sunday, 6=Saturday
  time_of_day TIME, -- HH:mm format
  duration_minutes INT,
  enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Todo items table
todo_items (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  emoji TEXT, -- max 4 chars
  priority TEXT DEFAULT 'medium', -- 'low', 'medium', 'high'
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Chat conversations table (for conversational AI)
chat_conversations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  created_at TIMESTAMP,
  last_message_at TIMESTAMP
)

-- Chat messages table
chat_messages (
  id UUID PRIMARY KEY,
  conversation_id UUID REFERENCES chat_conversations(id),
  role TEXT, -- 'user' or 'assistant'
  content TEXT,
  actions JSONB, -- [{type: 'create_task', data: {...}}]
  requires_approval BOOLEAN DEFAULT FALSE,
  approved_at TIMESTAMP,
  created_at TIMESTAMP
)

-- Task changes log (for approval flow)
task_change_proposals (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  task_id UUID REFERENCES tasks(id),
  proposed_changes JSONB,
  approval_status TEXT, -- 'pending', 'approved_once', 'approved_future', 'approved_all', 'rejected'
  chat_message_id UUID REFERENCES chat_messages(id),
  created_at TIMESTAMP,
  resolved_at TIMESTAMP
)
shared_plans (
  id UUID PRIMARY KEY,
  owner_id UUID REFERENCES users(id),
  shared_with_user_id UUID REFERENCES users(id),
  permissions JSONB, -- { "categories": ["work", "personal"] }
  created_at TIMESTAMP
)

-- Calendar connections table
calendar_connections (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  provider TEXT, -- 'google', 'apple'
  access_token TEXT ENCRYPTED,
  refresh_token TEXT ENCRYPTED,
  last_synced TIMESTAMP
)
```

---

### AI Pipeline (Voice → Tasks)

**Step 1: Speech to Text**

- Use iOS native `Speech` framework (free, fast, works offline)
- Transcription sent to backend

**Step 2: Task Parsing**

- Supabase Edge Function calls OpenAI API (GPT-4o mini for cost)
- Prompt engineering:

```
You are a task parser. Extract tasks from this voice input.
Return JSON array of tasks with: title, date (YYYY-MM-DD or null), time (HH:MM or null), category (work/personal/health/social/errands), estimated_duration_minutes.

User timezone: {user_timezone}
Current date/time: {now}

Input: "{transcription}"

Rules:
- "tomorrow" = {tomorrow_date}
- "tonight" = today after 6pm
- "next Tuesday" = calculate date
- If no time specified, default to 9am for morning tasks, 2pm for afternoon, 7pm for evening
- If duration not mentioned, estimate: meetings=60min, calls=30min, errands=30min, tasks=45min
```

**Step 3: Insert to Database**

- Validate parsed data
- Insert tasks with user_id, source='voice'
- Return task IDs to frontend

**Performance Target:** <3 seconds from voice stop → tasks appear

---

### Calendar Sync Logic

**Google Calendar:**

- OAuth 2.0 via Supabase Auth
- Poll via Google Calendar API (REST)
- Import events as read-only "blocks" in timeline
- Optionally export our tasks as Google Calendar events (user toggle)

**Apple Calendar:**

- iOS `EventKit` framework
- Request permissions on device
- Read events locally, sync to Supabase (encrypted)

**Sync Frequency:** Every 30 minutes or on app open

---

## Monetization Strategy

### Freemium Model

**Free Tier:**

- 3 voice inputs/day (quick capture)
- 3 chat messages/day (conversational AI)
- Apple Calendar sync only (1 calendar)
- Basic categories
- Standard notifications
- Widget access
- Auto-generated emoji for tasks

**Pro Tier: $5.99/month or $49.99/year**

- Unlimited voice inputs
- Unlimited chat with AI
- Google Calendar + Apple Calendar sync
- Custom categories
- Shared planning (up to 3 people)
- Priority support
- AI schedule optimization suggestions (V2)
- Export data
- Recurring task templates

**Lifetime: $99** (launch promo only, limited to first 100 users)

### Revenue Projections (Conservative)

**Month 3:**

- 10,000 downloads
- 5% conversion to paid = 500 users
- 70% monthly, 30% yearly
- (350 × $5.99) + (150 × $49.99/12) = $2,096 + $625 = **~$2,721 MRR**

**Month 6:**

- 25,000 downloads
- 5% conversion = 1,250 paid
- **~$6,802 MRR**

**Costs:**

- Supabase: $25/month (Pro plan)
- OpenAI API: ~$300/month (10K users, avg 5 voice inputs + 3 chat messages/day)
  - Voice parsing: 10K × 5 × 200 tokens = 10M tokens/month × $0.15/1M = $150
  - Chat: 10K × 3 × 500 tokens = 15M tokens/month × $0.15/1M = $225... (reduced from initial estimate, more accurate)
- Apple Developer: $99/year (~$8/month)
- Domain/hosting: $20/month
- **Total: ~$373/month**

**Break-even:** ~138 paid users (achievable by Month 2)

---

## Go-to-Market Strategy

### Phase 1: Pre-Launch (4 weeks before launch)

**Build in Public (Twitter/X):**

- Daily/weekly updates with screenshots
- Share design decisions: "Should I use sage or purple?"
- Behind-the-scenes: "Debugging voice input for 6 hours"
- Polls: "What would you name this: Spoken, Whisper, DayVoice?"

**Email List:**

- Landing page with waitlist (mention in Twitter bio)
- Offer early access (TestFlight) to first 100 signups
- "Reserve your lifetime deal" CTA

**Product Hunt Prep:**

- Draft PH post
- Recruit 10 beta users to comment/upvote on launch day
- Schedule for Tuesday or Wednesday (best traffic days)

---

### Phase 2: Launch Week

**Day 1 (Monday):**

- Product Hunt launch
- Twitter thread: "I built a voice-first planner because..."
- Post in r/indiehackers, r/SideProject (not spammy, share story)

**Day 2-3:**

- Respond to ALL comments/feedback
- Share "Launch Day" results: "We hit #3 on PH!"

**Day 4-7:**

- First TikTok/Reel videos (3-5 posts):
  - "How I plan my week in 30 seconds"
  - "POV: You hate typing tasks" (relatable hook)
  - "I built an app that actually gets me"

---

### Phase 3: Growth (Week 2 → Month 3)

**Content Blitz (TikTok/Instagram Reels):**

- Post 3x/week for 8 weeks = 24 videos
- Mix formats: demos, testimonials, before/after, "day in the life"
- Use trending audio (but make it fit context)
- Hashtags: #productivity #planning #indiehacker #momlife (depending on target)

**Reddit Strategy (NON-SPAMMY):**

- Comment genuinely in r/productivity, r/getdisciplined, r/ADHD
- When someone asks "best planning app?", respond helpfully with options including ours
- Share as founder: "Hey, I'm building X because I had this problem—feedback welcome"

**Partnerships:**

- DM 10 productivity YouTubers/TikTokers (micro-influencers, 10K-100K followers)
- Offer free lifetime access for honest review
- Target: 2-3 say yes

**Email Nurture:**

- Week 1: Welcome, quick start guide
- Week 2: "You haven't added a task yet—try this"
- Week 3: "Power tip: Use voice while making coffee"
- Week 4: "Upgrade to Pro for family sharing" (soft sell)

---

### Phase 4: Viral Push (Month 2-3)

**User-Generated Content:**

- Email paid users: "Share how you use [app name], tag us!"
- Repost best user videos (with permission)
- Feature "User of the Week" in app

**Referral Program (V1.2):**

- "Invite 3 friends → get 1 month Pro free"
- Trackable links via Supabase

**Press Outreach:**

- Pitch to: TechCrunch (indiehacker angle), The Verge (voice AI angle), Fast Company (productivity)
- Angle: "Why one developer is challenging Tiimo's Apple award with a voice-first approach"

---

## Success Metrics & KPIs

### Acquisition Metrics

- Downloads/week
- Source: Organic search, Product Hunt, TikTok, Reddit, referral
- Waitlist → download conversion rate

### Activation Metrics (Critical for retention)

- % users who complete onboarding
- % users who add first task via voice (within 24 hours)
- Time to first voice input (goal: <2 minutes)

### Engagement Metrics

- Daily Active Users (DAU)
- Average voice inputs/user/day (goal: 2-3)
- D1, D7, D30 retention rates
- Tasks completed/day

### Revenue Metrics

- Free → Paid conversion rate (goal: 5%)
- Monthly Recurring Revenue (MRR)
- Customer Acquisition Cost (CAC) via paid ads (if we run any)
- Lifetime Value (LTV)

### Viral Metrics

- Shares of "Today's Plan" link
- Social media mentions
- Referral link clicks

### Qualitative Metrics

- App Store reviews (goal: 4.5+ stars)
- Support tickets (goal: <5/week in first 3 months)
- User testimonials we can use in marketing

---

## Development Roadmap

### Pre-Launch (4 weeks - launching late January 2026)

**Week 1: Core Infrastructure**

- [ ] React Native project init (Expo)
- [ ] Supabase setup (database, auth, edge functions)
- [ ] Authentication: Email, Apple Sign In, Google Sign In
- [ ] iOS Speech framework integration
- [ ] OpenAI task parsing (quick voice capture)
- [ ] Basic UI: Voice button, task list with emoji
- [ ] Chat UI skeleton (message bubbles, input)

**Week 2: Timeline, Chat AI & Editing**

- [ ] Timeline view (hour blocks)
- [ ] Drag-and-drop tasks
- [ ] Edit task modal (including emoji picker)
- [ ] Categories (default + custom)
- [ ] Task completion
- [ ] Conversational AI integration (OpenAI function calling)
- [ ] Quick action chips in chat
- [ ] Approval flow for task changes
- [ ] Habits: Create/edit habits, auto-generate tasks
- [ ] Todo: Capture items without dates, priority suggestions

**Week 3: Calendar Sync, Widget & Onboarding**

- [ ] Apple Calendar integration
- [ ] Google Calendar OAuth + sync
- [ ] Home screen widget (small, medium, large)
- [ ] Widget voice button deep link
- [ ] Onboarding flow (3 screens max, explain chat vs voice)
- [ ] Settings screen (notifications, calendar toggle)

**Week 4: Polish, TestFlight & Marketing Prep**

- [ ] Notifications (local + push)
- [ ] Auto-generated emoji for tasks
- [ ] Dark mode polish
- [ ] Error handling (no internet, speech fail, API errors)
- [ ] Chat history view
- [ ] Habits: UI polish, task generation testing
- [ ] Todo: UI polish, scheduling flow testing
- [ ] TestFlight build to 30 beta users
- [ ] Bug fixes from beta feedback
- [ ] Landing page live (with waitlist→beta conversion)
- [ ] Prepare Product Hunt launch materials
- [ ] Record 5 demo videos for TikTok/Reels

---

### Launch Week (Week 5 - Late January 2026)

- [ ] Submit to App Store (allow 2-3 days for review)
- [ ] Product Hunt launch (Tuesday or Wednesday)
- [ ] Twitter launch thread with demo GIF
- [ ] Post in r/indiehackers, r/SideProject, r/productivity
- [ ] Email 30 beta users → ask for App Store reviews
- [ ] First 3 TikTok/Reels videos go live

---

### Post-Launch Iterations

**V1.1 (Week 6-8):**

- [ ] Bug fixes from user feedback
- [ ] Performance optimization (voice → task speed, chat response time)
- [ ] Siri Shortcuts integration ("Hey Siri, add task in Magda")
- [ ] Habits: Habit analytics/streaks (completion tracking)
- [ ] Todo: Weekly review feature (Sunday: "Review your incomplete tasks")
- [ ] Chat conversation history persistence

**V1.2 (Month 2-3):**

- [ ] Shared planning (multi-user, invite via email/link)
- [ ] Referral system ("Invite 3 friends → 1 month Pro free")
- [ ] Habits: Advanced patterns (every N days, monthly, custom schedules)
- [ ] Export data (CSV, iCal format)
- [ ] AI schedule optimization ("You have 2 hours free Friday—want me to block focus time?")
- [ ] Custom quick action chips (user can add their own)

**V2 (Month 4-6):**

- [ ] Android version (React Native makes this easier)
- [ ] Light mode (toggle in settings)
- [ ] Web app (read-only, view schedule on desktop)
- [ ] Advanced AI suggestions (based on completion patterns)
- [ ] Habit tracking integration (connect tasks to habits)
- [ ] Focus timer (Pomodoro-style, integrated with tasks)
- [ ] Voice output (AI reads your schedule back to you)
- [ ] Calendar event creation from Magda → external calendars (two-way sync)

---

## Risks & Mitigation

### Risk 1: Voice Recognition Accuracy

**Impact:** High – core feature fails if STT is unreliable  
**Mitigation:**

- Use iOS native Speech (most accurate)
- Allow manual editing immediately
- Add "Try again" button if transcription looks wrong
- Prompt user: "Did I get that right?"

### Risk 2: OpenAI API Costs Spike

**Impact:** Medium – profitability at risk  
**Mitigation:**

- Use GPT-4o mini (cheapest)
- Cache common phrases/patterns
- Set per-user daily limits (free: 20 voice inputs/day)
- Monitor costs weekly

### Risk 3: User Adoption (Voice is Weird)

**Impact:** High – people might not want to talk to phone  
**Mitigation:**

- Onboarding emphasizes privacy (not recording, just parsing)
- Demo video shows how natural it is
- Offer manual input as fallback
- Market to early adopters (indie hackers) who embrace new tech

### Risk 4: Calendar Sync Bugs

**Impact:** Medium – broken sync = bad UX  
**Mitigation:**

- Read-only sync first (don't modify external calendars)
- Clear UI: "Synced from Google Calendar" label
- Manual refresh button
- Extensive testing with real calendars

### Risk 5: Too Niche (Can't Scale Beyond Indie Hackers)

**Impact:** High – limited market size  
**Mitigation:**

- Start with indie hackers (beachhead), expand to parents/consultants
- Content strategy targets multiple personas
- V1.2 shared planning appeals to families

### Risk 6: Strong Competitor Response

**Impact:** Medium – Tiimo/Hero add voice features  
**Mitigation:**

- Ship fast, iterate faster
- Build community loyalty (build in public)
- Differentiate on simplicity (we do ONE thing well)

---

## Open Questions & Decisions Needed

### ✅ DECISIONS MADE:

1. **App Name:** Magda (from "mind" - Greek origin, clean, memorable)

2. **Pricing Finalized:**

   - Monthly: $5.99
   - Yearly: $49.99 (saves ~30%)
   - Lifetime: $99 (launch promo, limited quantity)
   - Free tier: 3 tasks/day limit

3. **Design Implementation:**

   - Dark mode only for V1 (light mode in V2)
   - Use exact color codes from Design System section
   - Auto-generate emoji/icon for each task based on content (AI-powered)
   - Outsource 3D illustrations for onboarding (budget: $200-400)

4. **Launch Date:** 4 weeks from now (Late January 2026)

5. **Beta Group Size:** 30 users for TestFlight

6. **Voice Trigger Options (V1):**

   - Primary: Large button in app
   - Widget: Shows today's schedule (date, tasks, time, duration) with voice button
   - Siri Shortcut in V1.1

7. **Free Tier Limit:** 3 tasks per day (encourages upgrade without being too restrictive)

---

## Appendix: User Stories

### As Alex (Indie Builder):

- I want to **add tasks while coding** so I don't break flow
- I want to **see my client calls + personal tasks in one view** so I don't double-book
- I want to **share my availability with my co-founder** so we can coordinate

### As Jordan (Parent):

- I want to **tell my phone our family's week while driving** so I can plan without stopping
- I want my **partner to see what's happening today** so they don't ask me 10 times
- I want to **set reminders for kids' activities** so I never miss pickup

### As Sam (Consultant):

- I want to **schedule follow-ups between meetings** so I don't forget
- I want to **see conflicts before they happen** so I can reschedule
- I want to **look organized to clients** so I maintain professionalism

---

## Final Notes

This PRD is intentionally lean to ship v1 fast. Features not in v1 (habits, time tracking, advanced AI) are not mistakes—they're strategic cuts to reach launch in 8 weeks.

**Core Belief:** If we nail voice input + clean timeline + basic sharing, we have a viable product. Everything else is iteration.

**Next Steps:**

1. Finalize open questions (name, pricing, colors)
2. Set up dev environment (React Native + Supabase)
3. Start Week 1 tasks (voice integration)
4. Build landing page + waitlist
5. Tweet about it

**Let's ship this. 🚀**
