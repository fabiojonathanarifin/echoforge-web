import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | SENTINEL",
  description: "Terms of Service for SENTINEL, a browser-based spatial intelligence platform by EchoForge.",
};

const BG = "#0A0A0F";
const SURFACE = "#111118";
const BORDER = "#1E1E2A";
const ACCENT = "#3B82F6";
const TEXT_SECONDARY = "#94A3B8";
const TEXT_TERTIARY = "#475569";

export default function SentinelTermsPage() {
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
          <span className="text-sm" style={{ color: TEXT_SECONDARY }}>Terms of Service</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p style={{ color: TEXT_SECONDARY }}>Effective date: March 9, 2026</p>
        </div>

        <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
          These Terms of Service (&quot;Terms&quot;) govern your use of SENTINEL, a browser-based spatial
          intelligence platform operated by EchoForge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
          accessing or using SENTINEL, you agree to these Terms. If you do not agree, do not use the platform.
        </p>

        <Section title="1. Acceptance of Terms">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            By accessing or using any part of SENTINEL, you confirm that you are at least 13 years old and that
            you agree to be bound by these Terms and our Privacy Policy. No account creation is required.
          </p>
        </Section>

        <Section title="2. License to Use">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use SENTINEL for your
            personal, non-commercial purposes. You may not copy, modify, distribute, sell, or sublicense any
            part of the platform without our written consent.
          </p>
        </Section>

        <Section title="3. No Account Required">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL does not require registration or login. The platform is publicly accessible. No personal
            credentials are collected or managed.
          </p>
        </Section>

        <Section title="4. AI-Generated Content">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL uses AI (powered by OpenAI) to generate intelligence briefings, parse natural language
            queries, and detect anomalous patterns. AI-generated outputs are informational only and may contain
            errors or inaccuracies. You should not rely on SENTINEL output for military, governmental, security,
            or any critical decision-making. We make no warranty regarding the accuracy, completeness, or
            timeliness of AI-generated content.
          </p>
        </Section>

        <Section title="5. Data Sources and Accuracy">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL aggregates publicly available data from third-party sources including OpenSky Network,
            CelesTrak, OpenStreetMap, and Cesium Ion. We do not guarantee the accuracy, completeness, or
            real-time nature of this data. Data feeds may experience delays, outages, or inaccuracies outside
            our control.
          </p>
        </Section>

        <Section title="6. Acceptable Use">
          <p className="mb-3 leading-relaxed" style={{ color: TEXT_SECONDARY }}>You agree not to:</p>
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>Use SENTINEL for illegal surveillance or any activity that violates applicable law.</li>
            <li>Misrepresent SENTINEL output as classified, official, or government-sourced intelligence.</li>
            <li>Attempt to reverse-engineer, decompile, or extract the source code of the platform.</li>
            <li>Scrape, crawl, or use automated means to access the service at scale.</li>
            <li>Attempt to access non-public data or bypass rate limits on third-party data feeds.</li>
            <li>Use SENTINEL to harass, track, or target individuals.</li>
          </ul>
        </Section>

        <Section title="7. Intellectual Property">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            The SENTINEL user interface, branding, code, and design are the property of EchoForge. Third-party
            data sources displayed within SENTINEL are subject to their own respective licenses and terms of use.
          </p>
        </Section>

        <Section title="8. Disclaimer of Warranties">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            SENTINEL is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            express or implied, including but not limited to warranties of merchantability, fitness for a
            particular purpose, or non-infringement. We do not warrant that the service will be uninterrupted,
            error-free, or secure.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            To the maximum extent permitted by law, EchoForge shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of SENTINEL. This includes, without
            limitation, any decisions or actions taken based on AI-generated analysis or third-party data
            displayed within the platform.
          </p>
        </Section>

        <Section title="10. Governing Law">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            These Terms are governed by the laws of the jurisdiction in which EchoForge is established, without
            regard to conflict of law principles. Any disputes shall be resolved in the courts of that
            jurisdiction.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We may update these Terms from time to time. We will post the updated Terms on this page with a new
            effective date. Continued use of SENTINEL after changes constitutes your acceptance of the updated
            Terms.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Questions about these Terms? Email us at{" "}
            <a href="mailto:legal@echoforge.to" className="underline hover:text-white transition-colors" style={{ color: ACCENT }}>
              legal@echoforge.to
            </a>
          </p>
        </Section>
      </main>

      <footer className="border-t py-10 text-center" style={{ borderColor: BORDER }}>
        <div className="flex justify-center gap-6 text-sm mb-4" style={{ color: TEXT_SECONDARY }}>
          <Link href="/sentinel" className="hover:text-white transition-colors">&larr; Back to SENTINEL</Link>
          <Link href="/sentinel/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
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
