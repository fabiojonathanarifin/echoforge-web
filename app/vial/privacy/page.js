export const metadata = {
  title: "Privacy Policy | Vial: Peptide Tracker",
  description:
    "Vial is local-first. Your protocol data stays on your device. Anonymous analytics only. Full disclosure of every third-party data flow.",
  robots: { index: true, follow: true },
};

export default function VialPrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">
        Vial: Peptide Tracker / Privacy Policy
      </h1>
      <p className="text-muted">Last updated: May 4, 2026</p>

      <p className="text-foreground">
        This Privacy Policy describes how Vial (operated by Fabio Jonathan
        Arifin via EchoForge, the &quot;Operator&quot;) handles information
        when you use the Vial iOS application. We built Vial to be local-first:
        your protocol data lives on your device and never reaches our servers.
      </p>

      <h2 className="text-xl font-medium text-foreground">Contact</h2>
      <p className="text-foreground">
        Operator: <strong>Fabio Jonathan Arifin</strong> (EchoForge)
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
        Your Protocol Data Stays on Your Device
      </h2>
      <p className="text-foreground">
        All protocol data, injection logs, vial configurations, body metrics,
        bloodwork values, progress photos, and chat history are stored
        exclusively on your device using on-device SQLite. This data is never
        uploaded to any server, never synced to the cloud, and never accessible
        by us. No account is required to use Vial.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Apple Privacy Nutrition Label Summary
      </h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>Data Used to Track You:</strong> None by default. If we run
          paid advertising campaigns, the Singular attribution SDK may collect
          IDFA and link Purchase History to it solely to measure which ad
          campaign drove your install or purchase. This requires your explicit
          consent through the iOS App Tracking Transparency prompt. If you
          decline, no IDFA-based tracking occurs.
        </li>
        <li>
          <strong>Data Linked to You</strong> (App Functionality): a stable
          per-device identifier (iOS Vendor ID, IDFV — not the advertising
          identifier), Purchase History (RevenueCat keyed to the IDFV), Health
          (peptide protocol context sent to Vial AI keyed to the IDFV), and
          User Content (Vial AI chat messages keyed to the IDFV). We do not
          collect names, emails, account IDs, or any cross-app advertising
          identifier in this configuration.
        </li>
        <li>
          <strong>Data Not Linked to You</strong> (Analytics): Product
          Interaction, Crash Data, and Performance Data via PostHog. PostHog
          uses its own anonymous identifier separate from the rest of the
          stack.
        </li>
        <li>
          <strong>Data Not Collected:</strong> Apple Health imports (read-only
          on device, never uploaded), location, contacts, financial info, your
          free-text notes, your peptide protocol history (stays on device), and
          your name / email / phone (no auth or contact form).
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>
          <strong>Anonymous usage analytics.</strong> Pseudonymized events
          (e.g. which features are used, session duration, in-app errors)
          collected via PostHog. PostHog is configured without IDFA access.
          Events are not linked to your real-world identity. Used to fix bugs
          and prioritize features.
        </li>
        <li>
          <strong>Crash and diagnostic data.</strong> Anonymous crash and
          performance data via PostHog error tracking. Not linked to your
          identity.
        </li>
        <li>
          <strong>Purchase and entitlement status.</strong> Whether you have
          purchased a subscription or the lifetime in-app purchase, managed via
          RevenueCat. We do not receive, store, or process your payment card
          information. Apple processes the purchase.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        Information We Do Not Collect
      </h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>Your name, email address, or any account credentials</li>
        <li>
          Your peptide protocols, injection logs, body metrics, bloodwork
          values, progress photos, or dose history
        </li>
        <li>Your real-time location</li>
        <li>Apple Health data (read-only, only with explicit grant, never uploaded)</li>
        <li>Any IDFA, advertising identifier, or cross-app tracking signal</li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        We Do Not Sell or Share Your Data
      </h2>
      <p className="text-foreground">
        We do not sell your personal information. We do not share your data
        with advertisers, data brokers, or analytics aggregators. We do not
        engage in cross-app tracking. We have not built and do not maintain any
        advertising profile of you.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Third-Party Service Providers
      </h2>
      <p className="text-foreground">
        Vial uses the following third-party providers, each with a defined role
        and minimal data exposure:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>
          <strong>Apple App Store / RevenueCat.</strong> Subscription and
          purchase entitlement management. RevenueCat receives a transaction
          identifier, your subscription status, and the iOS Vendor ID (IDFV)
          for your device, which is used as an anonymous identifier. IDFV is
          not the advertising identifier (IDFA) and is reset when all apps
          from the same vendor are uninstalled. RevenueCat does not receive
          your name, email, or payment card data. See{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            RevenueCat&apos;s privacy policy
          </a>
          .
        </li>
        <li>
          <strong>PostHog.</strong> Anonymous product analytics and crash
          reporting. Events use a randomly generated device fingerprint, not a
          personal identifier. You can disable analytics from Settings inside
          the app. See{" "}
          <a
            href="https://posthog.com/privacy"
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            PostHog&apos;s privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Cloudflare Workers.</strong> Used only when you send a
          message to Vial AI. The Worker receives your message, your active
          protocol context (peptide, dose, schedule), and a per-device rate
          limit identifier so we can prevent abuse. The Worker does not store
          message content. See{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cloudflare&apos;s privacy policy
          </a>
          .
        </li>
        <li>
          <strong>OpenRouter and OpenAI.</strong> The Worker forwards your Vial
          AI message to OpenAI via OpenRouter for processing. Messages are
          used solely to generate the response and are not used for AI model
          training. See{" "}
          <a
            href="https://openrouter.ai/privacy"
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            OpenRouter
          </a>{" "}
          and{" "}
          <a
            href="https://openai.com/policies/privacy-policy/"
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            OpenAI privacy policies
          </a>
          .
        </li>
        <li>
          <strong>Singular (only when paid ads are running).</strong> Mobile
          attribution provider. When enabled, Singular receives a device
          identifier and, if you grant the iOS App Tracking Transparency
          prompt, your IDFA. Used solely to measure which paid ad campaign
          drove your install and which campaigns convert into purchases. Not
          enabled in builds where the Singular SDK key is not configured.
          See{" "}
          <a
            href="https://www.singular.net/privacy/"
            className="text-accent hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Singular&apos;s privacy policy
          </a>
          .
        </li>
      </ul>
      <p className="text-foreground">
        These providers may process data in the United States or other
        jurisdictions. We do not share your data with any other third parties.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Vial AI (Available with Vial)
      </h2>
      <p className="text-foreground">
        When you use Vial AI, your message and a small amount of structured
        protocol context (active peptide name, dose, schedule, last logged
        dose, recent injection sites, side effects logged in the last 14 days)
        are transmitted from your device to Cloudflare Workers, then to
        OpenRouter, then to OpenAI for processing. The response is streamed
        back to your device. We do not store messages on our servers. OpenAI
        and OpenRouter process under their own privacy policies and do not use
        your messages to train models. You can clear your chat history at any
        time from within the app.
      </p>
      <p className="text-foreground">
        A consent sheet appears before your first Vial AI message disclosing
        this data flow. Your consent is recorded with a timestamp on your
        device. You can decline and continue to use the rest of Vial.
      </p>
      <p className="text-foreground">
        <strong>Vial AI is educational only.</strong> It is not medical advice,
        cannot diagnose, cannot prescribe, and cannot recommend a specific
        dose. Responses can contain inaccuracies. Always consult a licensed
        clinician for your specific situation.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Apple Health
      </h2>
      <p className="text-foreground">
        Vial offers an optional, read-only integration with Apple Health to
        import your weight history. The integration runs only with your
        explicit grant and only on your device. Imported values are stored
        locally and are never uploaded to our servers or any third party.
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
        Your on-device data persists until you delete the app or use the
        &quot;Reset all data&quot; option in Settings. Anonymous analytics
        events are retained by PostHog for up to 12 months. RevenueCat retains
        purchase records for the duration required to manage your subscription
        and as required by law.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Your Rights (GDPR, UK GDPR, and Applicable Privacy Laws)
      </h2>
      <p className="text-foreground">
        If you are in the European Economic Area, the United Kingdom, or
        another jurisdiction with similar protections, you have the following
        rights with respect to personal data we process:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>Access.</strong> All your protocol and log data is on your
          device and accessible directly inside the app. To request a copy of
          any anonymous analytics events tied to your device fingerprint,
          email us.
        </li>
        <li>
          <strong>Erasure.</strong> Delete all on-device data via Settings →
          &quot;Reset all data&quot;. To request deletion of anonymous
          analytics records or RevenueCat purchase records, email us.
        </li>
        <li>
          <strong>Rectification.</strong> Edit your data directly in the app.
        </li>
        <li>
          <strong>Restriction and objection.</strong> Disable analytics from
          Settings. You may also email us to object to any processing.
        </li>
        <li>
          <strong>Portability.</strong> Use the in-app CSV export to receive a
          structured copy of your protocols and logs.
        </li>
        <li>
          <strong>Lodge a complaint.</strong> You may complain to your local
          data protection authority. We hope you contact us first.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        California Residents (CCPA / CPRA)
      </h2>
      <p className="text-foreground">
        California residents have the right to know what personal information
        is collected, the right to delete personal information, the right to
        correct inaccurate personal information, the right to opt out of the
        sale or sharing of personal information, and the right to non-
        discrimination for exercising these rights. We do not sell or share
        personal information for cross-context behavioral advertising. To
        exercise any right, email{" "}
        <a
          href="mailto:support@echoforge.to"
          className="text-accent hover:underline"
        >
          support@echoforge.to
        </a>
        . We will respond within 45 days.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Do Not Track and Global Privacy Control
      </h2>
      <p className="text-foreground">
        Vial does not engage in cross-context behavioral tracking and does not
        change behavior in response to Do Not Track or Global Privacy Control
        signals because no such tracking exists in the app to disable.
      </p>

      <h2 className="text-xl font-medium text-foreground">Security</h2>
      <p className="text-foreground">
        Your protocol data does not leave your device, so it is protected by
        your device&apos;s own security (passcode, Face ID, Secure Enclave).
        Communications with third-party services use TLS encryption in
        transit. The Cloudflare Worker enforces a per-device daily rate limit
        and validates an app-level shared secret on every request. No system
        is perfectly secure, but our local-first approach significantly
        limits exposure.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Children&apos;s Privacy
      </h2>
      <p className="text-foreground">
        Vial is rated 17+ and is not intended for anyone under 17. We do not
        knowingly collect any data from minors. If you believe we have, email
        us and we will delete the records.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        International Transfers
      </h2>
      <p className="text-foreground">
        Our third-party service providers are located primarily in the United
        States. By using Vial outside the United States, you acknowledge that
        anonymous analytics, purchase records, and (if you use Vial AI)
        message content may be processed in the United States.
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
        communicated through the app and reflected in the &quot;Last
        updated&quot; date above.
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
