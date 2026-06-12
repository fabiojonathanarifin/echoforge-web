export const metadata = {
  title: "Privacy Policy | Almanack",
  description:
    "Your voice never leaves your phone. Your memory syncs encrypted, isolated to your account, exportable and deletable anytime. Full disclosure of every data flow.",
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
        <p className="text-muted">Effective date: June 13, 2026</p>
      </div>

      <p className="text-foreground">
        This Privacy Policy describes how Almanack (operated by Fabio Jonathan
        Arifin via EchoForge, the &quot;Operator&quot;) handles information
        when you use the Almanack iOS application and web application. The
        short version: your voice recordings never leave your phone, your
        memory syncs encrypted so it works on your phone and at your desk, it
        is isolated to your account, never used to train anything, and you can
        export or permanently delete all of it at any time.
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
        Where Your Memory Lives
      </h2>
      <p className="text-foreground">
        On your phone, entries, decisions, commitments, tasks, and transcripts
        are stored in a local database encrypted at rest with SQLCipher, keyed
        from the iOS keychain, with an optional Face ID lock. So Almanack works
        on your phone and at your desk, your memory also syncs to a database we
        operate (hosted on Supabase, encrypted at rest and in transit).
        Row-level security enforced by the database itself isolates your rows
        to your account: queries from any client can only ever return your own
        data. Files you attach (screenshots, documents) are stored in a private
        Cloudflare R2 bucket, accessible only through short-lived signed links
        generated for your authenticated session. We do not read your memory,
        and it is never used to train any model.
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
        AI Processing of Transcript Text and Attached Images
      </h2>
      <p className="text-foreground">
        Two features require a network call: structuring your spoken notes
        into decisions, commitments, and tasks, and answering questions about
        your own history. For these, transcript text (and the relevant stored
        text needed to answer a question) is sent from your device to a
        Cloudflare Worker proxy we operate, which forwards it to AI providers
        (OpenAI and Anthropic models accessed via OpenRouter) solely to
        generate the structured output or answer. If you choose to attach a
        photo or screenshot to a capture, that image is sent the same way,
        once, to be read into the structured note; the image itself is stored
        in your private attachment storage. The proxy does not store your
        content. These providers process text under their API terms. We
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

      <h2 className="text-xl font-medium text-foreground">Accounts</h2>
      <p className="text-foreground">
        You sign in with Apple or Google (handled by Supabase Auth). We store
        the email address and authentication identifiers your provider shares,
        nothing more. The account exists so your memory can sync between your
        phone and the web app and so your data can be isolated to you. Your
        subscription is tied to your Apple ID through the App Store and can be
        restored on any device signed into that Apple ID.
      </p>

      <h2 className="text-xl font-medium text-foreground">
        Connecting Your AI (MCP)
      </h2>
      <p className="text-foreground">
        If you create an API key in Settings to query your memory from an AI
        assistant, only a hash of that key is stored; the key itself is shown
        to you once. Anything an assistant retrieves through that key flows to
        the assistant you connected, under that provider&apos;s terms. Entries
        you mark personal are never returned through this surface. You can
        revoke any key instantly in Settings.
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
        <li>We do not read your memory or mine it for any purpose.</li>
        <li>We do not use your content to train AI models.</li>
        <li>We do not hold your data hostage: export everything as markdown anytime.</li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">
        Export and Deletion
      </h2>
      <p className="text-foreground">
        You can export your entire memory as a markdown file anytime from
        Settings. Deleting your account (Settings, then Delete account) erases
        everything immediately and permanently: every entry, decision,
        commitment, transcript, attachment, and API key, on the server and from
        the device once it syncs. There is no retention window and no recovery.
        To request deletion of anonymous analytics events or RevenueCat
        purchase records, email us at{" "}
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
        On device, your memory is encrypted at rest with SQLCipher, keyed from
        the iOS keychain, and protected by your device&apos;s own security
        (passcode, Face ID, Secure Enclave). On the server, your data is
        encrypted at rest and in transit, isolated to your account by
        database-enforced row-level security, and administrative credentials
        never ship to any client. No system is perfectly secure, but every
        layer here is designed so that a failure in one does not expose your
        memory.
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
