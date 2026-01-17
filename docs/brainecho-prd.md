# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Brainecho is a voice-first AI thinking assistant that transforms spoken thoughts into structured outputs. Users record or upload audio, which is transcribed and then processed by AI into various formats (social posts, summaries, outlines, etc.) while preserving their authentic voice.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Dual system (JWT tokens + Firebase Auth)
- **AI Services**: OpenAI GPT-4o/GPT-4o-mini for processing
- **Transcription**: DeepInfra Whisper API with chunked processing
- **Storage**: Cloudflare R2 for audio files
- **Payments**: Stripe for subscriptions
- **Email**: Resend for magic links
- **Deployment**: Railway with Docker support

## Development Commands

```bash
# Development
npm run dev                    # Start dev server on port 3000
npm run build                  # Build for production
npm start                      # Start production server

# Code Quality
npm run lint                   # Run ESLint
npm run lint:fix              # Auto-fix linting issues
npm run format                # Format code with Prettier
npm run format:check          # Check formatting without changes

# Testing
npm test                      # Run all tests
npm run test:watch            # Run tests in watch mode
npm run test:coverage         # Generate coverage report
npm run test:ci               # CI test mode (no watch)
npm run test:unit             # Unit tests only
npm run test:integration      # Integration tests only
npm run test:api              # API tests only

# Docker
npm run docker:build          # Build Docker image
npm run docker:run            # Run Docker container
npm run docker:build-run      # Build and run in one command
npm run docker:dev            # Run with hot reload
npm run docker:clean          # Clean up Docker artifacts
```

## Core Architecture

### Dual Authentication System

The app uses TWO authentication systems side by side:

1. **JWT Tokens** (legacy, email magic links)
   - `lib/config/auth.js` - Token generation/verification
   - Tokens stored in cookies or Authorization header
   - 7-day expiration by default

2. **Firebase Auth** (new, primary for mobile)
   - `lib/config/firebase-admin.js` - Server-side Firebase
   - Client uses Firebase SDK directly
   - ID tokens verified on server

**Auth Middleware Pattern**:
```javascript
// lib/middleware/auth.js
requireAuth(handler)          // Requires valid JWT or Firebase token
optionalAuth(handler)         // User optional
requireActiveSubscription()   // Requires premium plan
requireAdmin()               // Requires admin/internal account
```

### Session Processing Pipeline

The core value flow: **Audio → Transcript → AI Processing → Outputs**

1. **Audio Upload** (`/api/audio/transcribe`)
   - Accepts file upload or URL
   - Validates format and size
   - Stores in Cloudflare R2
   - Routes to transcription service

2. **Transcription** (`lib/services/transcription.js`)
   - DeepInfra Whisper API (openai/whisper-large-v3-turbo)
   - **Chunked Processing**: Files >27s are split using FFmpeg
   - Parallel chunk processing (up to 25 concurrent)
   - Single FFmpeg command creates all chunks at once
   - Returns combined transcript with usage tracking

3. **Session Creation** (`/api/sessions/route.js`)
   - Creates Session document with transcript
   - Links to User
   - Triggers AI processing

4. **AI Processing** (`/api/sessions/process`)
   - Picks prompt based on mode + format
   - Calls OpenAI API
   - Stores output in session.outputs array
   - Each output has: format, content, model, writingStyle, createdAt

### User & Subscription Model

**Account Types** (User.accountType):
- `user` - Regular users (requires billing)
- `demo` - Demo accounts (7 session limit)
- `admin` - Full access to admin features
- `internal` - Internal team (no billing required)

**Subscription Plans** (User.subscription.planType):
- `free` - 15 minutes transcription/month, unlimited sessions
- `premium_weekly/monthly/annual/lifetime` - Unlimited transcription

**Usage Tracking**:
- `usage.transcriptionMinutesThisMonth` - Billing minutes (rounded up)
- `usage.transcriptionSecondsThisMonth` - Precise usage
- `usage.sessionsThisMonth` - Session count
- Monthly auto-reset on first of month

**Key User Methods**:
```javascript
user.hasActiveSubscription()           // Check if premium
user.getPlanLimits()                   // Get current plan limits
user.canCreateSession(estimatedMinutes) // Check if can transcribe
user.incrementTranscriptionUsage(minutes) // Track usage
user.getTranscriptionUsage()           // Get usage stats
```

### Thinking Modes & Writing Styles

**5 Thinking Modes** (lib/utils/prompts.js):
- `write` - Polish transcript with writing style
- `summary` - Comprehensive markdown summary
- `outline` - Hierarchical structure with →/• bullets
- `brainstorm` - Creative expansions and connections
- `learn` - Study materials with questions & activities

**Writing Styles** (two types):
1. **Template Writing Styles** - Curated by admins
   - Global collection shared across users
   - Users add to their personal library
   - Stored in `TemplateWritingStyle` collection

2. **Custom Writing Styles** - User-created
   - Analyzed from writing samples
   - Stored in `CustomWritingStyle` collection
   - Each has styleProfile with tone, vocabulary, patterns, etc.

**Style Application**:
- Only applies to `write` mode
- Other modes use their own specialized prompts
- Prompt builder in `lib/utils/prompts.js`:
  - `writeModeTemplateStylePrompt(transcript, style)`
  - `writeModeCustomStylePrompt(transcript, style)`

### Output Formats (Write Mode Only)

Available formats when using write mode (lib/services/prompt-picker.js):
- Social: `x_post`, `linkedin_post`, `ig_caption`, `fb_post`, `x_thread`
- Writing: `journal`, `email`, `newsletter`, `blogpost`, `text_message`
- Utility: `grammar_fix`, `content_script`, `clean_up`
- Summaries: `short_summary`, `comprehensive_summary`, `key_takeaways`, `meeting_notes`, `outlines`

## Key API Routes

### Authentication
- `POST /api/auth/login` - Send magic link email
- `GET /api/auth/verify` - Verify JWT token
- `POST /api/auth/firebase/signin` - Firebase auth
- `POST /api/auth/firebase/signup` - Firebase signup

### Sessions
- `GET /api/sessions` - List user sessions (with filters)
- `POST /api/sessions` - Create session with transcript
- `GET /api/sessions/[id]` - Get session details
- `PUT /api/sessions/[id]` - Update session (tags, notes, favorite)
- `DELETE /api/sessions/[id]` - Delete session
- `POST /api/sessions/process` - Process transcript into outputs
- `POST /api/sessions/[id]/process` - Reprocess existing session
- `POST /api/sessions/[id]/tags` - Manage session tags

### Audio
- `POST /api/audio/transcribe` - Transcribe audio file

### Payments (Stripe)
- `POST /api/payments/checkout` - Create checkout session
- `POST /api/payments/portal` - Customer portal session
- `POST /api/payments/webhook` - Stripe webhook handler

### User Management
- `GET /api/user/usage` - Get usage stats
- `GET /api/user/subscription` - Get subscription info
- `PUT /api/user/settings` - Update user settings
- `DELETE /api/user/delete` - Delete account + data
- `GET /api/user/export` - Export all user data

## Important Patterns

### Middleware Composition

```javascript
// Compose multiple middleware functions
import { compose, requireAuth, rateLimit } from '@/lib/middleware/auth';

export const POST = compose(
  rateLimit({ maxRequests: 10, windowMs: 60000 }),
  requireAuth
)(async (request, context) => {
  // Handler with request.user available
});
```

### Error Handling Standard

All API routes follow this pattern:
```javascript
try {
  await connectDB();
  // ... business logic
  return NextResponse.json({ data }, { status: 200 });
} catch (error) {
  console.error('Error:', error);
  return NextResponse.json(
    { error: error.message },
    { status: 500 }
  );
}
```

### AI Prompt Structure

All AI prompts follow strict patterns:
- **Voice Preservation**: Never over-polish, keep authentic tone
- **Punctuation Rule**: No em dashes (—), en dashes (–), or semicolons
- **JSON Response**: Return raw JSON, no markdown code blocks
- **Empty Handling**: Return `{"content": ""}` if unclear
- **Content Safety**: Rephrase inappropriate content constructively

### Transcription Optimization

**Chunked Processing Algorithm** (for files >27 seconds):
1. Single FFmpeg command creates all chunks (massive speedup)
2. Process chunks in parallel batches (25 concurrent)
3. Combine results with proper timestamp adjustment
4. Clean up chunk files immediately

**Performance Metrics**:
- Chunking: ~2s per batch of chunks
- Transcription: ~3s per batch of 25 chunks
- Overall: Typically 2-5x faster than realtime

## Database Models

### User Schema Key Fields
```javascript
{
  email: String (unique),
  firebaseUid: String (unique, sparse),
  accountType: 'admin' | 'demo' | 'internal' | 'user',
  niche: String (for personalization),
  stripeCustomerId: String,

  preferences: {
    defaultThinkingMode: String,
    defaultWritingStyle: ObjectId,
    theme: 'light' | 'dark' | 'system',
    // ... more
  },

  writingStyleCollections: {
    templateWritingStyles: [ObjectId],
    customWritingStyles: [ObjectId]
  },

  subscription: {
    status: String,
    planType: String,
    currentPeriodEnd: Date,
    // ... more
  },

  usage: {
    transcriptionMinutesThisMonth: Number,
    transcriptionSecondsThisMonth: Number,
    sessionsThisMonth: Number,
    monthlyResetDate: Date
  }
}
```

### Session Schema Key Fields
```javascript
{
  userId: ObjectId,
  title: String,

  audio: {
    fileUrl: String,
    duration: Number,
    fileSize: Number
  },

  transcript: {
    text: String,
    language: String
  },

  outputs: [{
    format: String,
    content: String,
    model: String,
    writingStyle: { id, name },
    createdAt: Date
  }],

  isFavorite: Boolean,
  tags: [String],
  suggestedTags: [String]
}
```

## Environment Variables

Critical env vars (see `.env.example` for full list):
- `MONGODB_URI` - MongoDB connection string
- `OPENAI_API_KEY` - OpenAI API key
- `DEEPINFRA_API_KEY` - DeepInfra for transcription
- `JWT_SECRET` - JWT signing secret
- `NEXT_PUBLIC_FIREBASE_*` - Firebase config (public)
- `FIREBASE_SERVICE_ACCOUNT_KEY` - Firebase admin SDK (server-side)
- `CLOUDFLARE_R2_*` - R2 storage credentials
- `STRIPE_SECRET_KEY` - Stripe API key
- `RESEND_API_KEY` - Email sending

## Testing Strategy

Focus on critical paths:
- Authentication flows (magic link, Firebase)
- Payment webhooks (subscription lifecycle)
- Usage tracking (limits, resets)
- Session creation and processing pipeline
- AI prompt generation

Run tests before committing:
```bash
npm run test:api          # API route tests
npm run test:integration  # Database integration tests
npm run test:coverage     # Check coverage thresholds
```

## Deployment

**Railway Deployment** (primary):
- Dockerfile provided with FFmpeg pre-installed
- Auto-deploys from main branch
- Set all env vars in Railway dashboard
- Uses `railway.json` for configuration

**Docker Local Testing**:
```bash
npm run docker:build-run
# App runs on http://localhost:3000
```

## Common Development Tasks

### Adding a New Thinking Mode

1. Add prompt in `lib/utils/prompts.js`:
```javascript
export const newModeSinglePrompt = transcript => {
  return `Your prompt here...`;
};
```

2. Update `buildAIPrompt()` switch statement
3. Add to User model's `defaultThinkingMode` enum
4. Update frontend mode selector

### Adding a New Output Format

1. Add prompt in `lib/services/prompt-picker.js`:
```javascript
const new_format_Prompt = buildPrompt(
  'System message',
  [/* rules */]
);
```

2. Add to `promptMap` object
3. Update Session model's `outputs.format` enum
4. Update frontend format selector

### Modifying AI Processing

AI processing happens in `/api/sessions/process`:
1. Extract mode, format, writingStyle from request
2. Build appropriate prompt using `buildAIPrompt()` or `promptPicker()`
3. Call OpenAI API with GPT-4o or GPT-4o-mini
4. Parse JSON response
5. Add to session.outputs array

**Important**: Always return raw JSON from AI, never markdown code blocks.

### Working with Stripe Webhooks

Webhook handler at `/api/payments/webhook`:
- Verifies Stripe signature
- Handles events: `checkout.session.completed`, `customer.subscription.*`, etc.
- Updates User.subscription fields
- Creates/updates Stripe customer

Test webhooks locally with Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/payments/webhook
```

## File Structure Notes

- `app/api/` - All API routes (Next.js App Router convention)
- `lib/models/` - Mongoose schemas
- `lib/services/` - Business logic (transcription, prompts, etc.)
- `lib/middleware/` - Request middleware (auth, rate limiting)
- `lib/config/` - Configuration (auth, database, Firebase)
- `lib/utils/` - Utility functions and constants
- `components/` - React components (organized by feature)
- `hooks/` - Custom React hooks

## Git Hooks

Pre-commit hooks (Husky + lint-staged):
- Auto-lint and format staged files
- Runs ESLint --fix
- Runs Prettier --write
- Ensures code quality before commit

## Admin Features

Admin/internal accounts have access to:
- `/api/admin/users` - User management
- `/api/admin/usage` - Usage analytics
- `/api/admin/template-writing-styles` - Manage global styles
- `/api/admin/redemption-codes` - Generate promo codes

Check admin access with `hasAdminAccess(user)` helper.
