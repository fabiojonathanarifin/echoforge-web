export const metadata = {
  title: "Terms of Service | Almanack",
  description:
    "Terms of Service for Almanack, the voice-first decision memory app. Subscriptions, acceptable use, content ownership, and disclaimers.",
  robots: { index: true, follow: true },
};

export default function AlmanackTermsOfService() {
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
          Almanack / Terms of Service
        </h1>
        <p className="text-muted">Effective date: June 10, 2026</p>
      </div>

      <p className="text-foreground">
        These Terms of Service (&quot;Terms&quot;) govern your use of
        Almanack, an iOS application provided by Fabio Jonathan Arifin
        (&quot;Operator&quot;, operating as EchoForge). By downloading,
        installing, or using Almanack, you agree to these Terms and the
        Privacy Policy. If you do not agree, do not use the app.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        1. What Almanack Is
      </h2>
      <p className="text-foreground">
        Almanack is a personal decision-memory app. You speak; Almanack
        transcribes your words on your device and structures them into
        decisions, commitments, and tasks. It resurfaces relevant records,
        answers questions about your own history, and reminds you of
        commitments you have logged. Almanack is a personal record-keeping
        tool, not a professional advisor of any kind.
      </p>

      <h2 className="text-lg font-medium text-foreground">2. Eligibility</h2>
      <p className="text-foreground">
        You must be at least 13 years old to use Almanack, and old enough to
        form a binding contract in your jurisdiction or have parental consent.
        By using Almanack you confirm you meet these requirements and will use
        the app in compliance with all applicable laws.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        3. Purchases and Subscriptions
      </h2>
      <p className="text-foreground">
        Almanack requires a subscription, purchased through the Apple App
        Store:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>
          <strong>Almanack Monthly ($19 / month).</strong> Auto-renewing
          subscription. Renews monthly until canceled.
        </li>
        <li>
          <strong>Almanack Annual ($190 / year).</strong> Auto-renewing
          subscription with a 7-day free trial for new subscribers. After the
          trial, your Apple ID is charged $190 and the subscription renews
          annually until canceled. Cancel before the trial ends to avoid being
          charged.
        </li>
      </ul>
      <p className="text-foreground">
        Subscriptions are charged to your Apple ID account at purchase
        confirmation (or after the free trial, if applicable) and auto-renew
        unless canceled at least 24 hours before the end of the current
        period. You can manage and cancel subscriptions at any time in your
        App Store account settings. Prices may vary by country and are shown
        in the app before purchase.
      </p>

      <h2 className="text-lg font-medium text-foreground">4. Refunds</h2>
      <p className="text-foreground">
        All purchases are processed by Apple through the App Store. Refund
        requests are subject to Apple&apos;s refund policies. Contact Apple
        directly via reportaproblem.apple.com for refund requests. The
        Operator does not process refunds directly and offers no refunds
        beyond what Apple&apos;s policies provide.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        5. Your Content
      </h2>
      <p className="text-foreground">
        Everything you record and everything Almanack structures from it
        (entries, decisions, commitments, tasks, transcripts) is yours. You
        retain full ownership. Your content is stored only on your device in
        an encrypted local database and never leaves your device, with one
        exception: transcript text is transmitted to our Cloudflare Worker
        proxy and forwarded to AI providers solely to structure your notes
        and answer your questions, as described in the Privacy Policy. The
        Operator does not store your content on any server and claims no
        rights to it.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        6. Acceptable Use
      </h2>
      <p className="text-foreground">You agree not to:</p>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>Use Almanack for any unlawful purpose.</li>
        <li>
          Record other people where doing so violates applicable recording or
          privacy laws in your jurisdiction.
        </li>
        <li>
          Attempt to bypass, disable, or interfere with subscription
          verification, rate limits, or any security mechanism in Almanack.
        </li>
        <li>
          Reverse-engineer, decompile, disassemble, or attempt to derive the
          source code of Almanack except where the law expressly permits.
        </li>
        <li>
          Use the AI features to generate content that violates the terms of
          the underlying AI providers.
        </li>
      </ul>

      <h2 className="text-lg font-medium text-foreground">
        7. Not Professional Advice
      </h2>
      <p className="text-foreground">
        Almanack records and structures your own words. Nothing in Almanack,
        including AI-generated structuring, summaries, or answers, is
        medical, legal, financial, tax, or investment advice. Decisions you
        make and act on are your own. Consult a qualified professional for
        advice specific to your situation.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        8. AI Accuracy Disclaimer
      </h2>
      <p className="text-foreground">
        AI structuring can make mistakes. A transcribed word can be wrong, a
        commitment can be attributed to the wrong person, a date can be
        misread, and an answer about your history can be incomplete. Verify
        important commitments, deadlines, and decisions against your own
        records before acting on them. Almanack is a memory aid, not a system
        of record for matters where an error would cause serious harm.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        9. Third-Party Services
      </h2>
      <p className="text-foreground">
        Almanack integrates with RevenueCat (subscription management), PostHog
        (optional anonymous analytics), Cloudflare Workers (AI proxy), and
        OpenAI and Anthropic models via OpenRouter (AI processing of
        transcript text). By using Almanack you acknowledge that limited data
        is processed by these providers in accordance with their terms and our
        Privacy Policy.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        10. Disclaimers (No Warranty)
      </h2>
      <p className="text-foreground">
        ALMANACK IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
        WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT
        LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, NON-INFRINGEMENT, OR ACCURACY. THE OPERATOR MAKES NO
        REPRESENTATION REGARDING THE ACCURACY OF ANY TRANSCRIPTION, ANY
        AI-GENERATED STRUCTURING OR ANSWER, ANY REMINDER FIRING AT THE
        EXPECTED TIME, OR THE AVAILABILITY OR UPTIME OF THE AI FEATURES.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        11. Limitation of Liability
      </h2>
      <p className="text-foreground">
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
        THE OPERATOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT
        LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, MISSED
        COMMITMENTS, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN
        CONNECTION WITH YOUR USE OF ALMANACK OR ANY DECISIONS MADE BASED ON
        INFORMATION DISPLAYED IN ALMANACK. THE OPERATOR&apos;S TOTAL
        CUMULATIVE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR
        RELATING TO THESE TERMS OR YOUR USE OF ALMANACK WILL NOT EXCEED THE
        GREATER OF (A) THE AMOUNT YOU PAID THE OPERATOR FOR ALMANACK IN THE
        TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B)
        ONE HUNDRED U.S. DOLLARS ($100). SOME JURISDICTIONS DO NOT ALLOW THE
        EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THESE
        LIMITATIONS MAY NOT APPLY TO YOU.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        12. Governing Law
      </h2>
      <p className="text-foreground">
        These Terms are governed by the laws of the State of California,
        United States, without regard to its conflict-of-law principles,
        except that mandatory consumer-protection law of your country of
        residence may apply where it provides greater protection.
      </p>

      <h2 className="text-lg font-medium text-foreground">13. Termination</h2>
      <p className="text-foreground">
        You may stop using Almanack at any time. Deleting the app or using
        Settings, then Delete account and data, removes all on-device data.
        The Operator may suspend or terminate your access for violations of
        these Terms or where required by law. Sections 5, 7, 8, 10, 11, and
        12 survive termination.
      </p>

      <h2 className="text-lg font-medium text-foreground">14. Changes</h2>
      <p className="text-foreground">
        We may update these Terms from time to time. Material changes will be
        communicated through the app and reflected in the effective date
        above. Continued use of Almanack after changes take effect constitutes
        your acceptance of the updated Terms.
      </p>

      <h2 className="text-lg font-medium text-foreground">15. Contact</h2>
      <p className="text-foreground">
        Questions or notices:{" "}
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
