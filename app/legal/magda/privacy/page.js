export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-2xl font-semibold">Magda — Privacy Policy</h1>
      <p className="text-neutral-400">Last updated: January 1, 2026</p>

      <p className="text-neutral-300">
        This Privacy Policy explains how Magda (operated by Fabio Jonathan
        Arifin) collects, uses, and discloses information when you use the Magda
        mobile application and related services.
      </p>

      <h2 className="text-xl font-medium">Contact</h2>
      <p className="text-neutral-300">
        Operator: <strong>Fabio Jonathan Arifin</strong>
        <br />
        Contact: <a href="mailto:fabio@echoforge.to">fabio@echoforge.to</a>
      </p>

      <h2 className="text-xl font-medium">Data We Collect</h2>
      <ul className="list-disc list-inside text-neutral-300 space-y-1">
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
      </ul>

      <h2 className="text-xl font-medium">How We Use Your Data</h2>
      <ul className="list-disc list-inside text-neutral-300 space-y-1">
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
          Send service-related communications (support, critical notices) via
          Zoho mail.
        </li>
      </ul>

      <h2 className="text-xl font-medium">Third-Party Services</h2>
      <p className="text-neutral-300">
        We rely on third-party providers: Supabase (authentication & database),
        OpenAI (transcription and parsing using GPT-4o mini), RevenueCat
        (subscription management), PostHog (analytics), and Zoho (email). These
        providers may process data in the United States or other jurisdictions.
      </p>

      <h2 className="text-xl font-medium">No Voice Recordings</h2>
      <p className="text-neutral-300">
        Magda uses on-device or platform speech-to-text to convert spoken words
        to text. We <strong>do not</strong> store raw audio/voice recordings.
        Only the resulting transcriptions (text) are sent to our backend and to
        OpenAI for parsing.
      </p>

      <h2 className="text-xl font-medium">Payment & Refunds</h2>
      <p className="text-neutral-300">
        Subscriptions are processed via the App Store / Google Play through
        RevenueCat. We do not store or process payment card data. Cancellation
        and refund policies are governed by the platform (Apple / Google);
        please contact the store for refunds. We maintain subscription status to
        grant or revoke access.
      </p>

      <h2 className="text-xl font-medium">Data Retention & Deletion</h2>
      <p className="text-neutral-300">
        When you delete your account, we will delete your personal data and
        associated records promptly. You can delete your account from inside the
        app (Settings → Delete account). After deletion, your data will be
        removed and will not be used to rebuild profiles.
      </p>

      <h2 className="text-xl font-medium">Your Rights</h2>
      <ul className="list-disc list-inside text-neutral-300 space-y-1">
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

      <h2 className="text-xl font-medium">Security</h2>
      <p className="text-neutral-300">
        We use industry-standard measures to protect data in transit and at rest
        (TLS, authentication via Supabase). While we work to secure data, no
        system is fully secure; we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-medium">Children</h2>
      <p className="text-neutral-300">
        Magda is not directed to children under 13. If you are under 13, do not
        use the app. If we become aware we have collected data from a child
        under 13, we will take steps to delete it.
      </p>

      <h2 className="text-xl font-medium">International Transfers</h2>
      <p className="text-neutral-300">
        Data may be transferred to, stored, and processed in the United States
        and other jurisdictions where our providers operate.
      </p>

      <h2 className="text-xl font-medium">Changes to this Policy</h2>
      <p className="text-neutral-300">
        We may update this policy from time to time. If we make material
        changes, we will notify you through the app or by email.
      </p>

      <h2 className="text-xl font-medium">Contact</h2>
      <p className="text-neutral-300">
        For questions or requests:{" "}
        <a href="mailto:fabio@echoforge.to">fabio@echoforge.to</a>
      </p>
    </main>
  );
}
