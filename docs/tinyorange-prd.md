# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TinyOrange is a minimalist todo list application with multi-device sync. It consists of three main parts:

- **Backend**: Express + MongoDB API for sync and authentication
- **Web**: Next.js landing page and web dashboard
- **Desktop**: Electron desktop application (macOS and Windows)

## Development Commands

### Running the Application

```bash
# Run all (backend + web)
npm run dev

# Run individual services
npm run dev:backend  # Backend API (port 8080)
npm run dev:web      # Next.js web app (port 3000)
npm run dev:desktop  # Electron desktop app
```

### Building

```bash
# Web
npm run build:web
cd web && npm run build

# Desktop - macOS
cd desktop && yarn build:mac              # DMG build
cd desktop && yarn build:mac:publish      # Build + publish to R2
cd desktop && yarn build:mac-dev          # Dev build (no signing)
cd desktop && yarn build:mas              # Mac App Store build
cd desktop && yarn build:testflight       # TestFlight build

# Desktop - Windows
cd desktop && yarn build:win              # NSIS installer
cd desktop && yarn build:win:publish      # Build + publish to R2

# Backend (runs with node --max-old-space-size=256 --expose-gc)
cd backend && npm start
```

### Testing & Linting

```bash
# Backend
cd backend && npm run dev    # Uses nodemon for hot reload

# Web
cd web && npm run lint       # Next.js linting
```

## Architecture

### Backend (Express + MongoDB)

**Entry point**: `backend/index.js`

**Structure**:
- `/src/config/` - DB, Firebase, Stripe configuration
- `/src/controllers/` - Request handlers (auth, todos, sync, stripe, etc.)
- `/src/models/` - Mongoose schemas (User, Todo, GroupColor, SyncLog)
- `/src/routes/` - Express routes
- `/src/middleware/` - Auth, error handling, rate limiting
- `/src/libs/stripe/` - Stripe integration (checkout, webhooks, subscriptions)

**Key patterns**:
- JWT authentication with Firebase Admin SDK
- Rate limiting (100 req/10min per IP)
- Security headers via Helmet
- MongoDB sanitization, XSS protection, HPP
- Stripe webhook handling (raw body parsing before JSON middleware)
- Memory monitoring in production (triggers GC at >200MB)

**Database Collections**:
- `users` - User accounts, subscription status, preferences, devices
- `todos` - User todos with sync versioning
- `groupColors` - Color customization for todo groups
- `syncLog` - Sync operation history

### Web (Next.js)

**Entry point**: `web/app/page.js`

**Structure**:
- `/app/` - Next.js app directory (pages, API routes)
- `/components/ui/` - shadcn/ui components
- `/components/auth/` - Sign in/up forms
- `/lib/` - Utilities, AuthContext, API client, Firebase config
- `/public/assets/` - Screenshots, logos

**Key patterns**:
- Firebase authentication (Google OAuth, email/password)
- Tailwind CSS with shadcn/ui components
- Stripe integration for subscriptions
- Dark theme (Obsidian-like aesthetic)
- Brand color: `#e69138` (orange)

### Desktop (Electron)

**Entry point**: `desktop/src/main/index.js`

**Structure**:
- `/src/main/` - Electron main process (window management, IPC, auth)
- `/src/renderer/` - React UI (Vite + React)
- `/src/renderer/src/components/` - React components
- `/src/renderer/src/store/` - State management (not Zustand, uses window.api)
- `/resources/` - Icons, sounds (tick sounds for todo completion)

**Key patterns**:
- Electron Store for local data persistence
- IPC communication via `window.api` preload bridge
- OAuth flow using custom protocol handler (`tinyorange://`)
- Auto-updater with electron-updater
- Sound effects on todo completion (can be muted)
- Group-based todo organization with color coding

**State management**:
- Uses `window.api` IPC bridge (NOT Zustand)
- Store methods: `getTodos()`, `saveTodos()`, `getGroupColors()`, etc.
- Sync store handles backend synchronization

**Important**: Desktop has workspace conflicts - use special install scripts:
```bash
cd desktop
npm run install-deps        # macOS/Linux
npm run install-deps:windows # Windows
npm run install-package <pkg>      # Add dependency
npm run install-dev-package <pkg>  # Add dev dependency
```

## Sync Architecture

The app supports multi-device sync with a freemium model:

- **Free trial**: 14 days full access
- **After trial**: Single device only (no sync)
- **Premium**: Unlimited devices + sync

**Sync flow**:
1. Client maintains local todos with client-generated IDs: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
2. Backend preserves client IDs in `localId` field
3. Delta sync using `syncVersion` for conflict resolution
4. `lastSyncedAt` timestamps track sync state
5. Middleware `checkSyncAccess` enforces subscription limits

**Data synced**:
- Todos (text, completed status, group, isDummy flag)
- Group colors (key-value pairs)
- User preferences (font, fontSize, isMuted, groupMode)

## Environment Variables

### Backend
```bash
NODE_ENV=development|production
PORT=8080
MONGODB_URI=<mongodb connection string>
JWT_SECRET=<jwt secret>
STRIPE_SECRET_KEY=<stripe key>
STRIPE_WEBHOOK_SECRET=<webhook secret>
NEXT_PUBLIC_APP_URL=<frontend url>
FIREBASE_* # Firebase Admin SDK config
```

### Web
```bash
NEXT_PUBLIC_FIREBASE_* # Firebase client config
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<stripe key>
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Desktop
```bash
AUTH_SERVER_URL=http://localhost:3000
API_URL=http://localhost:8080
UPDATE_SERVER_URL=https://download.tinyorange.app

# For builds
APPLE_ID=<apple id email>
APPLE_ID_PASSWORD=<app-specific password>
APPLE_TEAM_ID=<team id>
WIN_CSC_LINK=<path to cert.pfx>
WIN_CSC_KEY_PASSWORD=<cert password>
```

## Build & Distribution

### macOS Builds

**Configurations** (via electron-builder):
- `electron-builder.yml` - Production DMG (code signing + notarization)
- `electron-builder.dev.yml` - Dev build (no signing)
- `electron-builder.mas.yml` - Mac App Store
- `electron-builder.testflight.yml` - TestFlight (dev provisioning)

**Requirements**:
- Valid Apple Developer certificates in Keychain
- Provisioning profiles in `build/` directory
- Notarization env vars set (APPLE_ID, APPLE_ID_PASSWORD, APPLE_TEAM_ID)

**Skip notarization**: `SKIP_NOTARIZE=true yarn build:mac-dev`

### Windows Builds

**Configuration**: `electron-builder.windows.yml`
- NSIS installer (x64)
- Code signing optional (set WIN_CSC_* env vars)

### Publishing Updates

Uses Cloudflare R2 for distribution:
- macOS: `yarn build:mac:publish` → `scripts/publish-to-r2.js`
- Windows: `yarn build:win:publish` → `scripts/publish-to-r2-windows.js`

Electron auto-updater checks UPDATE_SERVER_URL for new versions.

## Code Patterns

### Authentication Flow
1. Web/Desktop → Firebase Auth (Google OAuth or email/password)
2. Client receives Firebase ID token
3. Backend verifies token with Firebase Admin SDK
4. Backend issues JWT for API access
5. Desktop stores JWT in Electron Store

### Stripe Integration
- Checkout sessions created via backend (`/api/stripe/create-checkout-session`)
- Webhooks handle subscription events (`/api/stripe/webhook`)
- User subscription status stored in MongoDB `users.subscription`
- Middleware checks subscription for sync access

### Todo Groups
- Each todo has a `group` property (default: "General")
- Empty groups represented by "dummy" todos (`isDummy: true`)
- Group colors stored as key-value pairs (group name → color hex)
- `groupMode` preference toggles group-based UI

## Common Gotchas

1. **Desktop dependencies**: MUST use `npm run install-deps` due to workspace conflicts
2. **Stripe webhook**: Requires raw body parsing BEFORE `express.json()` middleware
3. **Memory management**: Backend monitors memory and triggers GC at >200MB
4. **Sync conflicts**: Use `syncVersion` field, prefer client changes for better UX
5. **Environment setup**: Desktop needs .env for AUTH_SERVER_URL and API_URL
6. **Provisioning profiles**: Must be named exactly and placed in `build/` directory
7. **Protocol handler**: macOS requires `tinyorange://` scheme registered in Info.plist
8. **CORS**: Backend allows credentials, origin depends on NODE_ENV

## Database Indexes

```javascript
db.users.createIndex({ email: 1 }, { unique: true })
db.todos.createIndex({ userId: 1, updatedAt: -1 })
db.todos.createIndex({ userId: 1, syncVersion: 1 })
db.groupColors.createIndex({ userId: 1 })
```

## Brand & Design

- **Name**: TinyOrange
- **Tagline**: "Todo list, but orange. It's kinda important, but not red important"
- **Primary color**: `#e69138` (orange)
- **Aesthetic**: Minimalist, Obsidian-like dark theme
- **Philosophy**: Productivity over complexity
