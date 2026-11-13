// Generates /robots.txt. Welcomes all crawlers, including AI answer-engine bots
// (GPTBot, PerplexityBot, ClaudeBot, Google-Extended), which must be allowed for
// the site to be cited in AI answers. Only the admin area and API are disallowed.
import { SITE_URL } from "@/constants/branding";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
