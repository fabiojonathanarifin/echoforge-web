export default function VialPrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">
        Vial: Peptide Calculator / Privacy Policy
      </h1>
      <p className="text-muted">Last updated: April 23, 2026</p>

      <p className="text-foreground">
        This Privacy Policy describes how Vial (operated by Fabio Jonathan
        Arifin via EchoForge) handles information when you use the Vial iOS
        application. We built Vial to be local-first: your protocol data stays
        on your device and never touches our servers.
      </p>

      <h2 className="text-xl font-medium text-foreground">Contact</h2>
      <p className="text-foreground">
        Operator: <strong>Fabio Jonathan Arifin</strong>
        <br />
        Email:{" "}
        <a
          href="mailto:support@echoforge.to"
          className="text-accent hover:underline"
        >
          support@echoforge.to
        </a>
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Your Data Stays on Your Device
      </h2>
      <p className="text-foreground">
        All protocol data, injection logs, and vial configurations are stored
        exclusively on your device using on-device SQLite. This data is never
        uploaded to any server, never synced to the cloud, and never accessible
        by us. No account is required to use Vial.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Information We Collect
      </h2>
      <p className="text-foreground">
        Vial collects minimal information, and none of it is linked to your
        identity:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>
          <strong>Anonymous usage analytics.</strong> Pseudonymized events such
          as which features are used and session duration, collected via PostHog.
          This data is not linked to you personally and is used only to improve
          the app.
        </li>
        <li>
          <strong>Crash and diagnostic data.</strong> Anonymous crash reports
          and performance data via PostHog error tracking. Not linked to your
          identity.
        </li>
        <li>
          <strong>Purchase and entitlement status.</strong> Whether you have
          purchased the app or a subscription, managed via RevenueCat. We do not
          receive, store, or process your payment card information.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        Information We Do Not Collect
      </h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>Your name, email address, or any account credentials</li>
        <li>Your peptide protocols, injection logs, or dose history</li>
        <li>Your location</li>
        <li>Any health or medical data</li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        How We Use Information
      </h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          Improving app features and fixing bugs using anonymous usage patterns
          (PostHog).
        </li>
        <li>
          Managing your app purchase and entitlements (RevenueCat).
        </li>
        <li>
          Responding to support requests when you contact us directly.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        We Do Not Sell Your Data
      </h2>
      <p className="text-foreground">
        We do not sell your personal information. We do not share your data with
        advertisers or use it for advertising profiling.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Third-Party Service Providers
      </h2>
      <p className="text-foreground">
        Vial uses the following third-party providers:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>RevenueCat.</strong> Subscription and purchase entitlement
          management.
        </li>
        <li>
          <strong>PostHog.</strong> Anonymous analytics and crash reporting.
          Data is pseudonymized and not linked to personal identity.
        </li>
      </ul>
      <p className="text-foreground">
        These providers may process data in the United States or other
        jurisdictions. We do not share your data with any other third parties.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Vial AI (Launching May 7, 2026)
      </h2>
      <p className="text-foreground">
        When you use Vial AI (included with Vial Lifetime or available as an
        add-on subscription), your chat messages are sent to OpenAI for
        processing. We do not store chat messages on our servers. OpenAI
        processes these messages per their own privacy policy. You can clear
        your chat history at any time from within the app.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Purchases and Payments
      </h2>
      <p className="text-foreground">
        All purchases are processed through the Apple App Store. We do not
        handle or store payment card data. Subscription management and
        cancellation are done through your Apple ID account settings. Refund
        requests are subject to Apple&apos;s refund policies.
      </p>

      <h2 className="text-xl font-medium text-foreground">Data Retention</h2>
      <p className="text-foreground">
        Your on-device data persists until you delete the app or use the Reset
        all data option in Settings. Anonymous analytics data is retained by
        PostHog per their standard retention policy. RevenueCat retains purchase
        records for subscription management purposes.
      </p>

      <h2 className="text-xl font-medium text-foreground">Your Rights</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>Access.</strong> All your protocol and log data is on your
          device and accessible directly in the app.
        </li>
        <li>
          <strong>Deletion.</strong> Delete all on-device data via Settings, then
          Reset all data. To request removal of anonymous analytics records,
          contact us at the email below.
        </li>
        <li>
          <strong>Opt-out.</strong> Contact us if you wish to opt out of
          anonymous analytics collection.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">Security</h2>
      <p className="text-foreground">
        Because your protocol data never leaves your device, it is protected by
        your device&apos;s own security. Communications with third-party services
        use TLS encryption in transit. No system is perfectly secure, but our
        local-first approach significantly limits exposure.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Children&apos;s Privacy
      </h2>
      <p className="text-foreground">
        Vial is rated 17+ and is not intended for anyone under 17 years of age.
        We do not knowingly collect any data from minors.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Medical Disclaimer
      </h2>
      <p className="text-foreground">
        Vial is an informational tracking and calculation tool. It does not
        provide medical advice and is not a substitute for consultation with a
        licensed healthcare provider. Always follow the guidance of your
        physician or compounding pharmacist.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Changes to This Policy
      </h2>
      <p className="text-foreground">
        We may update this policy from time to time. Material changes will be
        communicated through the app or via the support email below.
      </p>

      <h2 className="text-xl font-medium text-foreground">Contact</h2>
      <p className="text-foreground">
        Questions or requests:{" "}
        <a
          href="mailto:support@echoforge.to"
          className="text-accent hover:underline"
        >
          support@echoforge.to
        </a>
      </p>
    </main>
  );
}
