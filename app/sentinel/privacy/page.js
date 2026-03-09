import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | SENTINEL",
  description: "Privacy Policy for SENTINEL, a browser-based spatial intelligence platform by EchoForge.",
};

const BG = "#0A0A0F";
const SURFACE = "#111118";
const BORDER = "#1E1E2A";
const ACCENT = "#3B82F6";
const TEXT_SECONDARY = "#94A3B8";
const TEXT_TERTIARY = "#475569";

export default function SentinelPrivacyPage() {
  return (
    <div className="min-h-screen text-[#F8FAFC] font-sans" style={{ backgroundColor: BG }}>
      <header className="border-b py-6" style={{ backgroundColor: SURFACE, borderColor: BORDER }}>
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link href="/sentinel" className="flex items-center gap-2 font-bold text-lg text-white hover:opacity-80 transition-opacity">
            <Image
              src="/asset/sentinel/icon-transparent-bg.png"
              alt="SENTINEL"
              width={32}
              height={32}
              className="rounded-lg"
            />
            SENTINEL
          </Link>
          <span className="text-sm" style={{ color: TEXT_SECONDARY }}>Privacy Policy</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p style={{ color: TEXT_SECONDARY }}>Effective date: March 9, 2026</p>
        </div>

        <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
          EchoForge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates SENTINEL, a browser-based spatial
          intelligence platform. This policy explains what information we collect, how we use it, and the choices
          you have. By using SENTINEL, you agree to this policy.
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-4 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL does not require user accounts or login. We collect minimal information:
          </p>
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>
              <strong className="text-white">Usage analytics</strong>: anonymized event data (pages viewed,
              features used) collected via PostHog to help us improve the platform.
            </li>
            <li>
              <strong className="text-white">AI queries</strong>: text you enter into the &quot;Query the
              World&quot; input is sent to OpenAI for processing. Queries are processed in real time and are not
              stored on our servers beyond the active session.
            </li>
            <li>
              <strong className="text-white">Standard web data</strong>: your browser type and device type may
              be included in analytics events. We do not log or store IP addresses.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>Provide and operate the SENTINEL platform, including AI-generated intelligence briefings.</li>
            <li>Analyze aggregate usage patterns to improve features and fix bugs.</li>
          </ul>
          <p className="mt-4 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We do not sell your data. We do not create user profiles. We do not require login or collect personal
            identifiers.
          </p>
        </Section>

        <Section title="3. Third-Party Services">
          <p className="mb-4 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL uses the following third-party services. Each has its own privacy policy:
          </p>
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>
              <strong className="text-white">OpenAI</strong>: AI analysis and natural language query processing.{" "}
              <a href="https://openai.com/privacy" className="underline hover:text-white transition-colors" style={{ color: ACCENT }}>openai.com/privacy</a>
            </li>
            <li>
              <strong className="text-white">Cesium Ion</strong>: 3D globe rendering and building geometry.{" "}
              <a href="https://cesium.com/legal/privacy" className="underline hover:text-white transition-colors" style={{ color: ACCENT }}>cesium.com/legal/privacy</a>
            </li>
            <li>
              <strong className="text-white">OpenSky Network</strong>: live aircraft tracking data.{" "}
              <a href="https://opensky-network.org/about/privacy-policy" className="underline hover:text-white transition-colors" style={{ color: ACCENT }}>opensky-network.org/privacy</a>
            </li>
            <li>
              <strong className="text-white">CelesTrak</strong>: satellite orbital data (TLE).{" "}
              <a href="https://celestrak.org" className="underline hover:text-white transition-colors" style={{ color: ACCENT }}>celestrak.org</a>
            </li>
            <li>
              <strong className="text-white">PostHog</strong>: product analytics.{" "}
              <a href="https://posthog.com/privacy" className="underline hover:text-white transition-colors" style={{ color: ACCENT }}>posthog.com/privacy</a>
            </li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li><strong className="text-white">Personal data</strong>: we do not store personal data. No accounts, no profiles.</li>
            <li><strong className="text-white">AI queries</strong>: processed in real time and not persisted beyond the session.</li>
            <li><strong className="text-white">Analytics events</strong>: retained for up to 12 months.</li>
          </ul>
        </Section>

        <Section title="5. Cookies">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL uses cookies only for PostHog product analytics. We do not use advertising cookies,
            tracking pixels, or third-party marketing cookies.
          </p>
        </Section>

        <Section title="6. Children">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL is not directed at children under 13. We do not knowingly collect personal information from
            anyone under 13. If we learn that we have, we will delete that information immediately.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We may update this policy from time to time. We will post the updated policy on this page with a new
            effective date. Continued use of SENTINEL after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Questions about this policy? Email us at{" "}
            <a href="mailto:privacy@echoforge.to" className="underline hover:text-white transition-colors" style={{ color: ACCENT }}>
              privacy@echoforge.to
            </a>
          </p>
        </Section>
      </main>

      <footer className="border-t py-10 text-center" style={{ borderColor: BORDER }}>
        <div className="flex justify-center gap-6 text-sm mb-4" style={{ color: TEXT_SECONDARY }}>
          <Link href="/sentinel" className="hover:text-white transition-colors">&larr; Back to SENTINEL</Link>
          <Link href="/sentinel/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <p className="text-xs" style={{ color: TEXT_TERTIARY }}>&copy; {new Date().getFullYear()} EchoForge. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}
