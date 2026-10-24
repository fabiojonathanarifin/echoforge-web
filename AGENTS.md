# EchoForge Web Engineering Context

## Stack and structure
- JavaScript, Next.js App Router, React, and Tailwind CSS.
- `app/(studio)` contains the studio homepage, Apps directory, legal directory, and shared studio layout.
- Product landing pages and legal routes also live under `app/`.
- `components/AppCard.jsx` renders product cards.
- `lib/` contains server helpers and shared data. `public/` holds static brand assets.
- Existing API routes support Protos redemption and authenticated admin tools for Protos and Aksara. Supabase remains the data layer.

## Portfolio conventions
- `lib/products.js` owns product order and card content for the homepage and Apps directory.
- The first four products are Oaktally, Airlophone, ReadersGuild, and Protos. Kume is always last.
- Homepage membership is explicit per product; the Apps directory includes the full catalog.
- Almanack is hidden from studio cards and legal navigation; its existing redirects remain in `next.config.mjs`.
- Preserve shared AppCard styling and the existing theme tokens in `app/globals.css`.

## Workflow and verification
- Work directly on main; do not create branches, PRs, or worktrees.
- Preserve unrelated working-tree changes.
- Use focused source checks and `npm run build`. Browser and simulator use requires Fabio's explicit permission.
- Deploy web services to Railway. The production start command reads `PORT`.
- Never expose server credentials in client components or output.
