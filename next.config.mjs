/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export removed: we now expose API routes (e.g. /api/protos/redeem/attach)
  // and an authenticated /admin section, both of which require a Node runtime.
  // Railway auto-detects Next via Nixpacks and runs `next start`.
  reactCompiler: true,

  // Almanack moved to its own home at usealmanack.com (almanack-web repo).
  // Keep the old echoforge.to links alive by forwarding them to the new home.
  async redirects() {
    return [
      { source: "/almanack", destination: "https://usealmanack.com", permanent: true },
      { source: "/almanack/faq", destination: "https://usealmanack.com/faq", permanent: true },
      { source: "/almanack/mcp", destination: "https://usealmanack.com/mcp", permanent: true },
      { source: "/legal/almanack/privacy", destination: "https://usealmanack.com/privacy", permanent: true },
      { source: "/legal/almanack/terms", destination: "https://usealmanack.com/terms", permanent: true },
    ];
  },
};

export default nextConfig;
