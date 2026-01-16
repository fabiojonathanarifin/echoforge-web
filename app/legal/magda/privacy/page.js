export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Magda — Privacy Policy</h1>
      <p className="text-muted">Last updated: January 17, 2026</p>

      <p className="text-foreground">
        This Privacy Policy explains how Magda (operated by Fabio Jonathan
        Arifin) collects, uses, and discloses information when you use the Magda
        mobile application and related services.
      </p>

      <h2 className="text-xl font-medium text-foreground">Contact</h2>
      <p className="text-foreground">
        Operator: <strong>Fabio</strong>
        <br />
        Contact: <a href="mailto:fabio@echoforge.to" className="text-accent hover:underline">fabio@echoforge.to</a>
      </p>

      <h2 className="text-xl font-medium text-foreground">Data We Collect</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>Account information:</strong> email and display name (provided
          at sign-up).
        </li>
        <li>
          <strong>Calendars & events:</strong> calendar events and metadata if
          you grant calendar access. Imported calendar events are used to detect
          conflicts and display your schedule.
        </li>
        <li>
          <strong>Transcriptions (speech-to-text):</strong> We process speech
          input into text (transcriptions).{" "}
          <strong>No voice recordings are stored.</strong>
        </li>
        <li>
          <strong>Usage & analytics:</strong> anonymous or pseudonymized usage
          data for product improvement (PostHog).
        </li>
        <li>
          <strong>Payment & subscription status:</strong> stored via RevenueCat
          (we do not store credit card details).
        </li>
        <li>
          <strong>Advertising optimization:</strong> We use TikTok and Facebook (Meta) SDKs to track installations and subscription events to optimize our advertising campaigns.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">How We Use Your Data</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          Provide and operate the Magda service (task parsing, scheduling,
          timeline display).
        </li>
        <li>
          Process speech input using OpenAI (GPT-4o mini) to extract tasks and
          metadata.
        </li>
        <li>
          Sync and show your calendar events (read-only import when you grant
          permission).
        </li>
        <li>Authenticate and manage accounts via Supabase.</li>
        <li>Manage subscriptions and entitlements via RevenueCat.</li>
        <li>Analyze app performance and user behaviour using PostHog.</li>
        <li>
          Optimize advertising campaigns using TikTok and Facebook (Meta) SDKs
          by tracking app installs and subscriptions.
        </li>
        <li>
          Send service-related communications (support, critical notices) via
          Zoho mail.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">Third-Party Services</h2>
      <p className="text-foreground">
        We rely on third-party providers: Supabase (authentication & database),
        OpenAI (transcription and parsing using GPT-4o mini), RevenueCat
        (subscription management), PostHog (analytics), TikTok and Facebook
        (advertising optimization), and Zoho (email). These
        providers may process data in the United States or other jurisdictions.
      </p>

      <h2 className="text-xl font-medium text-foreground">No Voice Recordings</h2>
      <p className="text-foreground">
        Magda uses on-device or platform speech-to-text to convert spoken words
        to text. We <strong>do not</strong> store raw audio/voice recordings.
        Only the resulting transcriptions (text) are sent to our backend and to
        OpenAI for parsing.
      </p>

      <h2 className="text-xl font-medium text-foreground">Payment & Refunds</h2>
      <p className="text-foreground">
        Subscriptions are processed via the App Store / Google Play through
        RevenueCat. We do not store or process payment card data. Cancellation
        and refund policies are governed by the platform (Apple / Google);
        please contact the store for refunds. We maintain subscription status to
        grant or revoke access.
      </p>

      <h2 className="text-xl font-medium text-foreground">Data Retention & Deletion</h2>
      <p className="text-foreground">
        When you delete your account, we will delete your personal data and
        associated records promptly. You can delete your account from inside the
        app (Settings → Delete account). After deletion, your data will be
        removed and will not be used to rebuild profiles.
      </p>

      <h2 className="text-xl font-medium text-foreground">Your Rights</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>Access:</strong> You may request a copy of personal data we
          hold about you.
        </li>
        <li>
          <strong>Correction:</strong> You may request correction of inaccurate
          information.
        </li>
        <li>
          <strong>Deletion:</strong> You can delete your account and personal
          data in-app.
        </li>
        <li>
          <strong>Opt-out:</strong> You can opt out of analytics collection in
          Settings.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">Security</h2>
      <p className="text-foreground">
        We use industry-standard measures to protect data in transit and at rest
        (TLS, authentication via Supabase). While we work to secure data, no
        system is fully secure; we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-medium text-foreground">Children's Privacy</h2>
      <p className="text-foreground">
        Our service is not directed to children under 13 years of age. We do not
        knowingly collect any data from children under 13. If you are under 13,
        please do not use Magda.
      </p>

      <h2 className="text-xl font-medium text-foreground">International Transfers</h2>
      <p className="text-foreground">
        Data may be transferred to, stored, and processed in the United States
        and other jurisdictions where our providers operate.
      </p>

      <h2 className="text-xl font-medium text-foreground">Changes to this Policy</h2>
      <p className="text-foreground">
        We may update this policy from time to time. If we make material
        changes, we will notify you through the app or by email.
      </p>

      <h2 className="text-xl font-medium text-foreground">Contact</h2>
      <p className="text-foreground">
        For questions or requests:{" "}
        <a href="mailto:fabio@echoforge.to" className="text-accent hover:underline">fabio@echoforge.to</a>
      </p>
    </main>
  );
}
