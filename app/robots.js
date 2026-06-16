// Generates /robots.txt (Next.js file convention). Welcomes all crawlers,
// including AI answer-engine bots (GPTBot, PerplexityBot, ClaudeBot,
// Google-Extended), which must be allowed for the site to be cited in AI
// answers. Only the authenticated admin area and API are disallowed.
const SITE = "https://echoforge.to";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
