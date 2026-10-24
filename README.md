# EchoForge

Independent software studio website, built with Next.js, React, and Tailwind CSS.

## Local development

```sh
npm ci
npm run dev
```

The studio is at `/`, with `/apps`, `/studio`, and `/legal`. Product landing pages and authenticated admin tools retain their existing routes. See `PRD.md` and `AGENTS.md` for product and engineering context.

## Production on Railway

The existing Railway service deploys from GitHub `main`. Railway builds with `npm run build` and starts with `npm start`; the start script uses Railway's `PORT` variable. Keep existing server environment variables in the Railway service, never in the repository.

For a fresh service, connect this repository in Railway, select `main`, configure the existing server variables, set the build/start commands above, and attach the custom domain `echoforge.to`.

## Brand assets

```sh
node scripts/generate-brand-assets.mjs
```

This regenerates the existing favicon, device icons, and social-preview assets from `constants/branding.js`. Product screenshots and recordings use their existing public URLs. New uploaded media must use Cloudflare R2.
