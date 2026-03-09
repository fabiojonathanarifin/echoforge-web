import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | Relic",
  description: "Terms of Service for the Relic iOS app.",
};

const BG = "#0C0A09";
const SURFACE = "#1C1917";
const BORDER = "#292524";
const AMBER = "#F59E0B";
const TEXT_SECONDARY = "#A8A29E";
const TEXT_TERTIARY = "#78716C";

export default function RelicTermsPage() {
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
          <span className="text-sm" style={{ color: TEXT_SECONDARY }}>Terms of Service</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
          <p style={{ color: TEXT_SECONDARY }}>Effective date: March 1, 2026</p>
        </div>

        <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
          These Terms of Service (&quot;Terms&quot;) govern your use of Relic, an iOS application operated by EchoForge
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading or using Relic, you agree to these Terms. If you do not
          agree, do not use the app.
        </p>

        <Section title="1. Acceptance of Terms">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            By creating an account or using any part of the Relic service, you confirm that you are at least 13 years
            old and that you agree to be bound by these Terms and our Privacy Policy.
          </p>
        </Section>

        <Section title="2. License to Use">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use Relic for your personal,
            non-commercial purposes. You may not copy, modify, distribute, sell, or sublicense any part of the app
            without our written consent.
          </p>
        </Section>

        <Section title="3. Your Account">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>You are responsible for maintaining the security of your account credentials.</li>
            <li>You must notify us immediately if you suspect unauthorized access to your account.</li>
            <li>You may not share your account with others or use another person&apos;s account.</li>
            <li>You may delete your account at any time via Settings → Delete Account.</li>
          </ul>
        </Section>

        <Section title="4. Subscriptions and Billing">
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>Relic offers a free tier and a Pro subscription (monthly or annual).</li>
            <li>Subscriptions are billed through the Apple App Store and are subject to Apple&apos;s payment terms.</li>
            <li>Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date.</li>
            <li>To cancel, go to your device&apos;s iOS Settings → [Your Name] → Subscriptions → Relic.</li>
            <li>We do not offer refunds outside of what Apple&apos;s App Store policies provide.</li>
          </ul>
        </Section>

        <Section title="5. Acceptable Use">
          <p className="mb-3 leading-relaxed" style={{ color: TEXT_SECONDARY }}>You agree not to:</p>
          <ul className="space-y-3 list-disc list-inside leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            <li>Use Relic for any illegal purpose or in violation of any applicable law.</li>
            <li>Attempt to reverse-engineer, decompile, or extract the source code of the app.</li>
            <li>Scrape, crawl, or use automated means to access the service.</li>
            <li>Upload content that is harmful, abusive, or violates third-party rights.</li>
            <li>Attempt to gain unauthorized access to our systems or data.</li>
          </ul>
        </Section>

        <Section title="6. Your Content">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            You retain ownership of all data you create or upload in Relic (voice recordings, contact notes, etc.).
            By using the service, you grant EchoForge a limited license to process, store, and display your content
            solely for the purpose of providing the Relic service to you. We do not use your content to train AI models
            or share it with third parties except as described in our Privacy Policy.
          </p>
        </Section>

        <Section title="7. AI Processing">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Relic uses AI to transcribe voice recordings and extract contact information. AI-generated outputs may
            contain errors or inaccuracies. You should review extracted data before saving it. We make no warranty
            regarding the accuracy of AI-generated content, and you should not rely solely on it for important
            decisions.
          </p>
        </Section>

        <Section title="8. Termination">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We may suspend or terminate your account if you violate these Terms, with or without notice. You may
            terminate your account at any time by deleting it in Settings. Upon termination, your data will be
            permanently deleted from our servers as described in our Privacy Policy.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Relic is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied,
            including but not limited to warranties of merchantability, fitness for a particular purpose, or
            non-infringement. We do not warrant that the service will be uninterrupted, error-free, or secure.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            To the maximum extent permitted by law, EchoForge shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of Relic. Our total liability for any
            claim shall not exceed the amount you paid us in the 12 months preceding the claim.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            These Terms are governed by the laws of the jurisdiction in which EchoForge is established, without
            regard to conflict of law principles. Any disputes shall be resolved in the courts of that jurisdiction.
          </p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            We may update these Terms from time to time. We will notify you of material changes via email or an in-app
            notice. Continued use of Relic after changes constitutes your acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
            Questions about these Terms? Email us at{" "}
            <a href="mailto:legal@echoforge.to" className="underline hover:text-white transition-colors" style={{ color: AMBER }}>
              legal@echoforge.to
            </a>
          </p>
        </Section>
      </main>

      <footer className="border-t py-10 text-center" style={{ borderColor: BORDER }}>
        <div className="flex justify-center gap-6 text-sm mb-4" style={{ color: TEXT_SECONDARY }}>
          <Link href="/relic" className="hover:text-white transition-colors">← Back to Relic</Link>
          <Link href="/relic/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
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
