import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Relic",
  description: "Privacy Policy for the Relic iOS app.",
};

const BG = "#0C0A09";
const SURFACE = "#1C1917";
const BORDER = "#292524";
const AMBER = "#F59E0B";
const TEXT_SECONDARY = "#A8A29E";
const TEXT_TERTIARY = "#78716C";

export default function RelicPrivacyPage() {
  return (
    <div className="min-h-screen text-[#FAFAF9] font-sans" style={{ backgroundColor: BG }}>
      {/* Header */}
      <header className="border-b py-6" style={{ backgroundColor: SURFACE, borderColor: BORDER }}>
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link href="/relic" className="flex items-center gap-2 font-bold text-lg text-white hover:opacity-80 transition-opacity">
            <Image
              src="/asset/relic/icon-trasnparent-bg.png"
              alt="Relic"
              width={32}
              height={32}
              className="rounded-lg"
            />
            Relic
          </Link>
          <span className="text-sm" style={{ color: TEXT_SECONDARY }}>Privacy Policy</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p style={{ color: TEXT_SECONDARY }}>Effective date: March 1, 2026</p>
        </div>

        <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
          EchoForge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) built Relic as an iOS application. This policy explains
          what information we collect, how we use it, and the choices you have. By using Relic, you agree to
          this policy.
        </p>

        <Section title="1. Information We Collect">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li><strong className="text-white">Account information</strong>:your name and email address, provided when you sign in with Apple or Google.</li>
            <li><strong className="text-white">Voice recordings</strong>:audio files you record within the app. We request microphone access solely to let you record post-meeting voice notes describing people you&apos;ve met. Recordings are uploaded for transcription and deleted from our servers after processing is complete.</li>
            <li><strong className="text-white">Contact and relationship data</strong>:names, roles, notes, and details you add or that are extracted from your voice recordings.</li>
            <li><strong className="text-white">Usage analytics</strong>:anonymized event data (screens viewed, features used) collected via PostHog to help us improve the app.</li>
            <li><strong className="text-white">Subscription status</strong>:managed by RevenueCat to determine your plan and entitlements.</li>
            <li><strong className="text-white">Push notification token</strong>:used solely to deliver pre-meeting briefings and reminders to your device.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>Provide and operate the Relic service, including AI extraction and pre-meeting briefings.</li>
            <li>Send you push notifications for reminders and briefings you have requested.</li>
            <li>Process payments and manage your subscription.</li>
            <li>Analyze aggregate usage to improve features and fix bugs.</li>
            <li>Respond to support requests.</li>
          </ul>
          <p className="mt-4 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We do not sell your data. We do not use your contact or voice data to train AI models.
          </p>
        </Section>

        <Section title="3. Third-Party Services">
          <p className="mb-4 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Relic uses the following third-party services. Each has its own privacy policy:
          </p>
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li><strong className="text-white">Supabase</strong>:authentication, database, and file storage. <a href="https://supabase.com/privacy" className="underline hover:text-white transition-colors" style={{ color: AMBER }}>supabase.com/privacy</a></li>
            <li><strong className="text-white">RevenueCat</strong>:subscription management and payment processing. <a href="https://www.revenuecat.com/privacy" className="underline hover:text-white transition-colors" style={{ color: AMBER }}>revenuecat.com/privacy</a></li>
            <li><strong className="text-white">PostHog</strong>:product analytics. <a href="https://posthog.com/privacy" className="underline hover:text-white transition-colors" style={{ color: AMBER }}>posthog.com/privacy</a></li>
            <li><strong className="text-white">DeepInfra (Whisper)</strong>:voice transcription. Audio is processed and not retained.</li>
            <li><strong className="text-white">Google Gemini</strong>:AI extraction of contact details from transcripts.</li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li><strong className="text-white">Voice recordings</strong>:deleted from our servers after processing is complete.</li>
            <li><strong className="text-white">Contact and relationship data</strong>:retained until you delete your account.</li>
            <li><strong className="text-white">Analytics events</strong>:retained for up to 12 months.</li>
          </ul>
        </Section>

        <Section title="5. Your Rights and Choices">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li><strong className="text-white">Access and correction</strong>:you can view and edit your contact data within the app at any time.</li>
            <li><strong className="text-white">Account deletion</strong>:go to Settings → Delete Account. This permanently removes all your data from our servers.</li>
            <li><strong className="text-white">Push notifications</strong>:disable at any time in your device&apos;s iOS Settings.</li>
            <li><strong className="text-white">Data portability</strong>:contact us to request a copy of your data.</li>
          </ul>
          <p className="mt-4 leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            If you are located in the European Economic Area (EEA), you may have additional rights under the General Data
            Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, and object
            to processing of your personal data. If you are a California resident, the California Consumer Privacy Act
            (CCPA) grants you the right to know what personal information we collect, request its deletion, and opt out of
            its sale (we do not sell your data). To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@echoforge.to" className="underline hover:text-white transition-colors" style={{ color: AMBER }}>
              privacy@echoforge.to
            </a>.
          </p>
        </Section>

        <Section title="6. Children">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Relic is not directed at children under 13. We do not knowingly collect personal information from anyone
            under 13. If we learn that we have, we will delete that information immediately.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We may update this policy from time to time. We will notify you of material changes via email or an
            in-app notice. Continued use of Relic after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Questions about this policy? Email us at{" "}
            <a href="mailto:privacy@echoforge.to" className="underline hover:text-white transition-colors" style={{ color: AMBER }}>
              privacy@echoforge.to
            </a>
          </p>
        </Section>
      </main>

      <footer className="border-t py-10 text-center" style={{ borderColor: BORDER }}>
        <div className="flex justify-center gap-6 text-sm mb-4" style={{ color: TEXT_SECONDARY }}>
          <Link href="/relic" className="hover:text-white transition-colors">← Back to Relic</Link>
          <Link href="/relic/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <p className="text-xs" style={{ color: TEXT_TERTIARY }}>© {new Date().getFullYear()} EchoForge. All rights reserved.</p>
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
