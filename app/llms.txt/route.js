import { buildLlmsTxt } from "@/lib/studioSeo";

// Plain-text studio summary for AI answer engines (llmstxt.org convention).
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
