# EchoForge Web Engineering Context

## Stack and structure
- JavaScript, Next.js App Router, React, Tailwind CSS, and the existing Framer Motion dependency.
- `app/(studio)` contains the public homepage, Apps directory, studio bio, legal directory, and shared layout.
- Dedicated product landing pages, product legal routes, admin tools, and API routes remain outside the studio route group.
- `components/studio/` owns the coastal presentation. `app/(studio)/studio.css` scopes its palette, typography, responsive sizing, and motion rules to `.coastal`, without restyling product or admin pages.
- Existing API routes support Protos redemption and authenticated Protos/Aksara admin tools. Supabase remains the data layer.

## Portfolio and content
- `lib/products.js` owns catalog order, destination links, icons, and homepage membership. The first four are Oaktally, Airlophone, ReadersGuild, and Protos. Kume is last.
- `lib/studioProducts.js` owns direct studio copy and verified screenshot/recording URLs. `ProductGallery` and `ProductDirectory` consume the shared catalog.
- `ProductArtwork` frames actual product media, never recreated app interfaces. ReadersGuild and Protos use existing R2 custom domains; Oaktally and Airlophone reference media already served by their public sites. New hosted media belongs in Cloudflare R2.
- Screenshot provenance: Oaktally's `src/constants/appScreens.js` identifies demo-budget simulator captures; ReadersGuild's `src/lib/press-kit.ts` lists real app captures; Protos's `components/landing/content.js` and Airlophone's `components/DemoClip.tsx` define the recordings.
- `lib/studioFounder.js` owns founder text, product-origin stories, and the existing public boat portrait URL. `FounderPortrait` is shared by the homepage and studio page. Ground claims in source press materials and Fabio's context; do not infer a current city from conflicting legacy bios.
- `lib/studioLegal.js` owns existing legal-link destinations. Legal policy contents are unchanged.
- EchoForge is the public brand. Do not claim Pelagos Hill LLC exists or replace legal entities while formation is in progress.
- Almanack is hidden from the public catalog and legal navigation; existing redirects remain in `next.config.mjs`.

## Motion and branding
- `StudioMotion` provides scroll-linked movement and once-per-visit gallery entrances. Timed transitions use tween easing, never springs. Content remains visible before JS loads.
- `ProductClip` owns viewport/background pause, reduced-motion autoplay guards, a five-play cap, manual controls, and playback-error handling. Do not nest its controls inside product links.
- `constants/branding.js` owns the wave path and metadata palette used by `StudioMark` and `scripts/generate-brand-assets.mjs`.
- Run `node scripts/generate-brand-assets.mjs` to regenerate existing Next.js icons, public favicon variants, and social-preview images in their conventional locations.
- The coast photo uses an attributed Unsplash URL; typography uses Google Fonts. These external assets need network access.

## Routing and operations
- Public navigation uses `/`, `/apps`, `/studio`, and `/legal`. Old `/prototype` routes redirect to the corresponding public pages.
- Public studio metadata allows indexing; canonical URLs and sitemap entries reflect production routes.
- Railway runs the app through the existing `start` script, which reads `PORT`. Pushes to `main` trigger the connected deployment.
- Preserve product/API/admin routes, credentials, and unrelated working-tree changes.

## Workflow and verification
- Work directly on main; no branches, PRs, or worktrees.
- Use focused source checks, ESLint on changed JavaScript, and `npm run build`.
- Browser and simulator use requires Fabio's explicit permission. Desktop/mobile browser checks were authorized for this redesign.
- Verify production deployments through Railway status when authenticated and direct public HTTP checks.
- Never expose server credentials in client components or tool output.
