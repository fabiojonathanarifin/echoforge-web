# EchoForge Web Engineering Context

## Stack and structure
- JavaScript, Next.js App Router, React, Tailwind CSS, and the existing Framer Motion dependency.
- `app/(studio)` contains the public homepage, Apps directory, Studio page, Legal directory, and shared layout.
- `components/studio/` owns the black-and-ivory presentation. `app/(studio)/studio.css` scopes design tokens, layout, motion, and responsive rules to `.echo-studio`. Its `:has()` root rule sets the matching overscroll background only on studio pages.
- Individual product pages, legal policies, admin tools, and APIs remain outside the studio route group. Supabase remains the data/auth layer.

## Portfolio and content
- `lib/products.js` owns catalog order and destinations: Oaktally, Airlophone, ReadersGuild, and Protos lead; Kume is last.
- `lib/studioProducts.js` owns studio copy and verified media URLs. `BrandElements` renders selected products and the compact directory from these shared sources.
- Product captures are real app media, never recreated interfaces. Oaktally, ReadersGuild, and Protos use R2 custom domains; Airlophone uses its existing public recording. New hosted media belongs in R2.
- `lib/studioFounder.js` owns factual founder text and the supplied dark portrait, hosted in R2 at `media.oaktally.app/echoforge/2026-11-05/`. `FounderPortrait` uses a consistent 4:5 crop and `STUDIO_FOUNDER.name` for the public caption. Full legal-name data remains separate.
- `lib/studioLegal.js` owns existing policy destinations. Legal policy contents are unchanged.
- EchoForge is the public brand. Do not claim Pelagos Hill LLC exists while formation is in progress. Do not infer a current city from legacy bios.
- Almanack is hidden from catalog and legal navigation; existing redirects remain in `next.config.mjs`.

## Motion and branding
- `BrandMotion` owns tween-based hero pointer/scroll depth, viewport/background-aware line movement, staggered reveals, and layered product captures. Hero artwork has extra vertical coverage so parallax cannot expose an edge above the divider.
- `EchoLines` shares the line geometry across hero, About, Studio heading, and footer, with distinct gradient IDs. Secondary motifs are static; About motifs use radial alpha masks to fade without square edges.
- `ProductClip` owns viewport/background pause, reduced-motion autoplay guards, a five-play cap, and playback-error handling. `showControls` defaults to true; the studio passes false. Videos hold their final frame after five plays.
- `FounderPortrait` uses grayscale by default, restoring color on hover/focus or touch/keyboard toggle. The whole frame scales to 1.03, anchored at the bottom; the image is not internally zoomed. CSS tokens set color to 800ms and growth to 1100ms. Reduced motion removes growth and transitions.
- `constants/branding.js` owns the chosen Flow mark, ivory/black icon palette, and metadata copy. `BrandMark` and `scripts/generate-brand-assets.mjs` share this source.
- Run `node scripts/generate-brand-assets.mjs` to regenerate Next.js icons, public favicon variants, and social-preview assets. Metadata cache keys use `flow-1`.
- Motion uses explicit timing and easing, never springs. Content remains available before hydration; `useMotionEnabled` preserves matching server/client initial markup.

## Routing and operations
- Public routes are `/`, `/apps`, `/studio`, and `/legal`, with indexable metadata and canonical URLs. The existing sitemap lists those routes.
- `/prototype` and `/brand-preview` review URLs redirect to their public equivalents. `/brand-preview/icons` redirects to `/`.
- Railway builds and starts through the existing package scripts; `start` reads `PORT`. Pushes to `main` trigger the connected deployment.
- Preserve product/API/admin routes, credentials, and unrelated working-tree changes.

## Workflow and verification
- Work directly on main; no branches, PRs, or worktrees.
- Use focused source checks, ESLint on changed JavaScript, and `npm run build`.
- Browser and simulator use requires Fabio's explicit permission. Desktop/mobile browser checks were authorized for this redesign.
- Verify production through Railway status and direct public HTTP checks. Never expose server credentials in tools or client code.
