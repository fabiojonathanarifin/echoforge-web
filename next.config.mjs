/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export removed: we now expose API routes (e.g. /api/protos/redeem/attach)
  // and an authenticated /admin section, both of which require a Node runtime.
  // Railway auto-detects Next via Nixpacks and runs `next start`.
  reactCompiler: true,
};

export default nextConfig;
