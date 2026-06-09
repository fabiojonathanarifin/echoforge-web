export const metadata = {
  title: "Privacy Policy | Almanack",
  description:
    "Almanack is local-first. Your voice never leaves your phone, your memory is encrypted on device, and there is no cloud database. Full disclosure of every data flow.",
  robots: { index: true, follow: true },
};

export default function AlmanackPrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <div className="space-y-4">
        <a
          href="/almanack"
          className="text-accent hover:underline inline-flex items-center gap-2 text-sm font-medium"
        >
          ← Back to Almanack
        </a>
        <h1 className="text-2xl font-semibold text-foreground">
          Almanack / Privacy Policy
        </h1>
        <p className="text-muted">Effective date: June 10, 2026</p>
      </div>

      <p className="text-foreground">
        This Privacy Policy describes how Almanack (operated by Fabio Jonathan
        Arifin via EchoForge, the &quot;Operator&quot;) handles information
        when you use the Almanack iOS application. Almanack is built
        local-first: your voice recordings never leave your device, and your
        memory database exists only on your phone. There is no cloud copy.
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
        Your Memory Stays on Your Device
      </h2>
      <p className="text-foreground">
        All entries, decisions, commitments, tasks, and transcripts you create
        in Almanack are stored exclusively on your device in a local database
        encrypted at rest with SQLCipher. The encryption key is stored in the
        iOS keychain. You can additionally enable a Face ID lock inside the
        app. There is no cloud database. We cannot read, access, or recover
        your memory because no copy of it ever reaches our servers.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Voice and Transcription
      </h2>
      <p className="text-foreground">
        Transcription runs entirely on your device using a local Whisper
        model. Your audio is never uploaded anywhere. By default, the audio
        recording is deleted from your device immediately after transcription
        completes. Only the resulting text remains, stored in your encrypted
        local database.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        AI Processing of Transcript Text
      </h2>
      <p className="text-foreground">
        Two features require a network call: structuring your spoken notes
        into decisions, commitments, and tasks, and answering questions about
        your own history. For these, transcript text (and the relevant stored
        text needed to answer a question) is sent from your device to a
        Cloudflare Worker proxy we operate, which forwards it to AI providers
        (OpenAI and Anthropic models accessed via OpenRouter) solely to
        generate the structured output or answer. The proxy does not store
        your content. These providers process text under their API terms. We
        do not use your content to train models, and these API providers state
        that API inputs are not used to train their models. See{" "}
        <a
          href="https://openrouter.ai/privacy"
          className="text-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          OpenRouter
        </a>
        ,{" "}
        <a
          href="https://openai.com/policies/privacy-policy/"
          className="text-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          OpenAI
        </a>
        , and{" "}
        <a
          href="https://www.anthropic.com/legal/privacy"
          className="text-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Anthropic
        </a>{" "}
        privacy policies.
      </p>

      <h2 className="text-xl font-medium text-foreground">Sign-In</h2>
      <p className="text-foreground">
        You can sign in with Apple or Google. The resulting identity is stored
        on your device only and is used to associate your subscription and to
        gate access to the app. We do not maintain a server-side account
        database for Almanack.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Purchases and Subscriptions
      </h2>
      <p className="text-foreground">
        All purchases are processed by Apple through the App Store. We never
        receive or store your payment card data. Subscription status is
        managed via RevenueCat, which receives a pseudonymous app user
        identifier and your entitlement status, not your name or payment
        details. See{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="text-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          RevenueCat&apos;s privacy policy
        </a>
        .
      </p>

      <h2 className="text-xl font-medium text-foreground">Analytics</h2>
      <p className="text-foreground">
        Almanack may collect optional anonymous product analytics via PostHog
        (for example, which features are used and in-app errors) to fix bugs
        and prioritize improvements. Analytics events never include your
        entries, decisions, commitments, or transcripts, and are not linked to
        your real-world identity. See{" "}
        <a
          href="https://posthog.com/privacy"
          className="text-accent hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          PostHog&apos;s privacy policy
        </a>
        .
      </p>

      <h2 className="text-xl font-medium text-foreground">
        What We Do Not Do
      </h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>We do not sell your data. Ever.</li>
        <li>We do not show ads or share data with advertisers.</li>
        <li>We do not upload your audio. It never leaves the device.</li>
        <li>
          We do not keep a cloud copy of your memory. There is nothing for us
          to read, leak, or hand over.
        </li>
        <li>We do not use your content to train AI models.</li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">Data Deletion</h2>
      <p className="text-foreground">
        Go to Settings, then Delete account and data inside the app. This
        erases everything: your encrypted database, transcripts, and sign-in
        identity. Because there is no cloud copy, deletion is immediate and
        complete. Deleting the app from your phone has the same effect on
        your local data. To request deletion of anonymous analytics events or
        RevenueCat purchase records, email us at{" "}
        <a
          href="mailto:support@echoforge.to"
          className="text-accent hover:underline"
        >
          support@echoforge.to
        </a>
        .
      </p>

      <h2 className="text-xl font-medium text-foreground">Security</h2>
      <p className="text-foreground">
        Your memory is encrypted at rest on your device with SQLCipher, keyed
        from the iOS keychain, and protected by your device&apos;s own
        security (passcode, Face ID, Secure Enclave). All network calls use
        TLS encryption in transit. No system is perfectly secure, but keeping
        your data off our servers entirely removes the largest class of risk.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Children&apos;s Privacy
      </h2>
      <p className="text-foreground">
        Almanack is not directed to children under 13 and children under 13
        are not permitted to use it. We do not knowingly collect any data from
        children under 13. If you believe we have, email us and we will delete
        the records.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        International Transfers
      </h2>
      <p className="text-foreground">
        Our third-party service providers are located primarily in the United
        States. By using the AI structuring and question-answering features
        outside the United States, you acknowledge that transcript text may be
        processed in the United States.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Changes to This Policy
      </h2>
      <p className="text-foreground">
        We may update this policy from time to time. Material changes will be
        communicated through the app and reflected in the effective date
        above.
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
