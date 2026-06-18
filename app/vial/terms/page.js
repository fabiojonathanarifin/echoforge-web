export const metadata = {
  title: "Terms of Use | Vial: Peptide Tracker",
  description:
    "Vial is a personal tracking and logging tool. Not medical advice. Not a medical device. Educational only.",
  robots: { index: true, follow: true },
};

export default function VialTermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">
        Vial: Peptide Tracker / Terms of Use
      </h1>
      <p className="text-muted">Last updated: June 19, 2026</p>

      <p className="text-foreground">
        These Terms of Use (&quot;Terms&quot;) govern your use of Vial, an iOS
        application provided by Fabio Jonathan Arifin (&quot;Operator&quot;,
        operating as EchoForge). By downloading, installing, or using Vial,
        you agree to these Terms and the Privacy Policy. If you do not agree,
        do not use the app.
      </p>

      <h2 className="text-lg font-medium text-foreground">1. What Vial Is</h2>
      <p className="text-foreground">
        Vial is a personal tracking and logging tool. It helps you record a
        dose you were already prescribed, track and schedule your own protocol,
        rotate injection sites, log body metrics, and read general educational
        information about peptides. Vial is not a medical device. It does not
        diagnose, treat, cure, or prevent any condition, does not recommend or
        calculate a dose, and does not provide dosing instructions.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        2. Eligibility and Lawful Use
      </h2>
      <p className="text-foreground">
        You must be at least 18 years old to use Vial. By using Vial, you
        confirm that:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>
          You will only use Vial to track substances that are legally
          prescribed to you by a licensed clinician or are otherwise lawfully
          permitted in your jurisdiction.
        </li>
        <li>
          You understand that some compounds Vial supports tracking, including
          but not limited to BPC-157, TB-500, CJC-1295, Ipamorelin, GHK-Cu,
          MOTS-c, Epitalon, Tesamorelin, and Sermorelin, are not approved by
          the U.S. Food and Drug Administration for human use, may not be
          legal to possess or import in your jurisdiction, and may not be
          eligible for compounding under FDA section 503A. You are solely
          responsible for compliance with all applicable laws.
        </li>
        <li>
          You will not use Vial to facilitate the use of any substance
          prohibited by anti-doping authorities (such as WADA or USADA) if you
          are subject to such authorities.
        </li>
        <li>
          You will not rely on Vial in lieu of consultation with a licensed
          clinician.
        </li>
        <li>
          You accept full responsibility for any decisions you make based on
          information displayed in Vial.
        </li>
      </ul>

      <p className="text-foreground">
        <strong>Assumption of risk.</strong> Researching, possessing, preparing,
        reconstituting, administering, or using peptides, GLP-1 medications, or
        related compounds can carry serious risks, including side effects,
        adverse or allergic reactions, incorrect dosage or administration,
        contamination, impurity, mislabeling, counterfeit product, drug
        interactions, infection, injury, and in rare cases death. Many of these
        compounds are not approved by the FDA for human use and have limited or
        no human safety data. You accept all of these risks and take full
        responsibility for every decision, action, and outcome related to any
        substance you track with Vial.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        3. Medical Disclaimer
      </h2>
      <p className="text-foreground">
        All information provided by Vial, including peptide reference data,
        half-life estimates, calendar timelines, body-metric trends, and any
        AI-generated educational responses, is provided for informational and
        personal record-keeping purposes only. It does not constitute medical
        advice and must not be used as a substitute for consultation with a
        licensed healthcare provider.
      </p>
      <p className="text-foreground">
        Always consult your physician, prescriber, or compounding pharmacist
        before beginning, adjusting, or stopping any peptide protocol.
      </p>
      <p className="text-foreground">
        <strong>No dosing instructions.</strong> Vial does not recommend,
        suggest, calculate, or determine a dose, schedule, or protocol for you,
        and it does not provide dosing instructions of any kind. You enter a
        dose you were already prescribed, and Vial records and organizes it. It
        is not a recommendation of how much to take.
      </p>
      <p className="text-foreground">
        <strong>Half-life and medication-level estimates.</strong> Any half-life
        curve, peak-timing indicator, or medication-level estimate in Vial is
        based on general published values and the numbers you enter. It is not
        personalized or clinically verified and does not account for your
        metabolism, body composition, organ function, drug interactions, or the
        specific product you use. Do not use these estimates to make any dosing,
        timing, administration, or other medical decision.
      </p>
      <p className="text-foreground">
        <strong>Reminders and notifications.</strong> Reminders, alerts, and
        notifications are convenience features only. They can be delayed, missed,
        duplicated, or fail to deliver because of device settings, operating
        system behavior, permissions, connectivity, or other factors outside our
        control. Do not rely on Vial reminders or notifications for any medical,
        medication, dosing, treatment, emergency, or safety-critical decision.
      </p>
      <p className="text-foreground">
        <strong>No professional relationship; emergencies.</strong> Using Vial
        does not create a physician-patient, pharmacist-patient, or any other
        professional or clinical relationship between you and the Operator. Vial
        is not designed for medical emergencies. If you think you may be having a
        medical emergency, call 911 or your local emergency number immediately.
      </p>

      <h2 className="text-lg font-medium text-foreground">4. Vial AI</h2>
      <p className="text-foreground">
        Vial AI, included with the Vial subscription and the Vial Lifetime
        in-app purchase, is an educational chat assistant. It is not a medical
        professional, cannot diagnose, cannot prescribe, and cannot recommend a
        specific dose, dose change, or dose timing. Vial AI is configured to
        refuse personalized clinical questions and to redirect users to their
        prescriber.
      </p>
      <p className="text-foreground">
        Vial AI responses can contain inaccuracies, omissions, or outdated
        information. You should verify any factual claim with a qualified
        clinician and the current prescribing information for your specific
        drug. Do not act on Vial AI output without confirming with a licensed
        professional.
      </p>
      <p className="text-foreground">
        Vial AI is powered by OpenAI via OpenRouter. By using Vial AI you
        acknowledge that your messages and a small set of structured protocol
        context fields are processed by these providers as described in the
        Privacy Policy.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        5. Purchases and Subscriptions
      </h2>
      <p className="text-foreground">
        Vial is offered as a freemium app. A single active protocol and your
        first vial tracked to the last dose are free without purchase. Premium
        features unlock with one of the following purchases through the Apple
        App Store:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-2">
        <li>
          <strong>Vial Monthly ($14.99 / month).</strong> Auto-renewing
          subscription. Renews monthly until canceled. All premium features
          including Vial AI.
        </li>
        <li>
          <strong>Vial Yearly ($49.99 / year).</strong> Auto-renewing
          subscription. Renews annually until canceled. New subscribers
          receive a Pay-Up-Front Introductory Offer of $29.99 for the first
          year, after which the price reverts to the standard $49.99 per year.
          Apple enforces eligibility for the introductory price.
        </li>
        <li>
          <strong>Vial Lifetime ($99.99 one-time).</strong> Non-consumable
          in-app purchase. Permanent access to all premium features for the
          lifetime of the app on your Apple ID. Family Sharing supported. The
          Operator may withdraw the Lifetime offer from the active offering at
          any time without notice. Existing Lifetime purchases remain valid.
        </li>
      </ul>
      <p className="text-foreground">
        Auto-renewing subscriptions will be charged to your Apple ID account
        at the time of purchase confirmation and will auto-renew unless
        canceled at least 24 hours before the end of the current period. You
        can manage and cancel subscriptions at any time through your Apple ID
        account settings.
      </p>

      <h2 className="text-lg font-medium text-foreground">6. Refunds</h2>
      <p className="text-foreground">
        All purchases are processed by Apple through the App Store. Refund
        requests are subject to Apple&apos;s refund policies. Contact Apple
        directly via reportaproblem.apple.com for refund requests. The
        Operator does not process refunds directly.
      </p>

      <h2 className="text-lg font-medium text-foreground">7. Your Data</h2>
      <p className="text-foreground">
        All protocol data, injection logs, vial configurations, body metrics,
        bloodwork values, and progress photos you create in Vial are stored
        locally on your device. You retain full ownership. The Operator does
        not access, store, or process this content. See the Privacy Policy
        for the complete data flow.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        8. Acceptable Use
      </h2>
      <p className="text-foreground">
        You agree not to:
      </p>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>Use Vial for any unlawful purpose.</li>
        <li>
          Attempt to bypass, disable, or otherwise interfere with the in-app
          purchase verification, the medical disclaimer, the AI safety
          guardrails, or any security mechanism in Vial.
        </li>
        <li>
          Reverse-engineer, decompile, disassemble, or attempt to derive the
          source code of Vial except where the law expressly permits.
        </li>
        <li>
          Use Vial to provide medical advice to other people or to operate a
          health practice.
        </li>
        <li>
          Submit prompts to Vial AI designed to extract dosing recommendations,
          diagnostic conclusions, or treatment guidance.
        </li>
      </ul>

      <h2 className="text-lg font-medium text-foreground">
        9. Third-Party Services
      </h2>
      <p className="text-foreground">
        Vial integrates with RevenueCat (purchase management), PostHog
        (anonymous analytics), Cloudflare Workers (Vial AI proxy), and OpenAI
        via OpenRouter (Vial AI processing). By using Vial you acknowledge
        that limited data is processed by these providers in accordance with
        their terms and our Privacy Policy.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        10. Disclaimers (No Warranty)
      </h2>
      <p className="text-foreground">
        VIAL IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
        WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT
        LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, NON-INFRINGEMENT, OR ACCURACY. THE OPERATOR MAKES NO
        REPRESENTATION REGARDING THE ACCURACY OF ANY PEPTIDE REFERENCE DATA,
        ANY HALF-LIFE OR MEDICATION-LEVEL ESTIMATE, ANY AI-GENERATED RESPONSE,
        OR THE AVAILABILITY OR UPTIME OF VIAL OR VIAL AI. ALL INFORMATION IN
        VIAL IS A CONVENIENCE FOR PERSONAL RECORD-KEEPING ONLY; ALWAYS VERIFY
        WITH A LICENSED CLINICIAN OR PHARMACIST.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        11. Limitation of Liability
      </h2>
      <p className="text-foreground">
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
        THE OPERATOR BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT
        LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER
        INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF
        VIAL OR ANY DECISIONS MADE BASED ON INFORMATION DISPLAYED IN VIAL.
        THE OPERATOR&apos;S TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY AND ALL
        CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF VIAL
        WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID THE OPERATOR
        FOR VIAL IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE
        CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100). SOME JURISDICTIONS DO
        NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF
        THESE LIMITATIONS MAY NOT APPLY TO YOU.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        12. Indemnification
      </h2>
      <p className="text-foreground">
        You agree to indemnify, defend, and hold harmless the Operator,
        EchoForge, and their affiliates from and against any and all claims,
        liabilities, damages, losses, costs, and expenses (including
        reasonable legal fees) arising out of or related to: (a) your use of
        Vial, (b) your violation of these Terms, (c) your violation of any
        applicable law or regulation in connection with peptide use,
        possession, or importation, or (d) any decisions you or any third
        party make based on information displayed in Vial or generated by
        Vial AI.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        13. Dispute Resolution and Class Action Waiver
      </h2>
      <p className="text-foreground">
        Any dispute, claim, or controversy arising out of or relating to these
        Terms or your use of Vial (a &quot;Dispute&quot;) will be resolved
        exclusively through final and binding individual arbitration
        administered by JAMS pursuant to its Streamlined Arbitration Rules.
        The arbitration will be conducted in English. The seat of arbitration
        will be the State of California, United States, unless applicable
        consumer protection law of your residence requires another forum.
      </p>
      <p className="text-foreground">
        YOU AND THE OPERATOR EACH WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS
        ACTION, COLLECTIVE ACTION, OR REPRESENTATIVE PROCEEDING. Disputes must
        be brought in your individual capacity. The arbitrator may not
        consolidate more than one person&apos;s claims and may not preside
        over any form of representative or class proceeding.
      </p>
      <p className="text-foreground">
        Notwithstanding the foregoing, either party may bring an individual
        action in small-claims court for any Dispute that qualifies. Either
        party may also seek injunctive or equitable relief in any court of
        competent jurisdiction to protect intellectual property rights.
      </p>
      <p className="text-foreground">
        If you reside in the European Economic Area, the United Kingdom, or
        another jurisdiction where mandatory arbitration is unenforceable,
        these arbitration provisions do not apply to you to the extent
        prohibited by your local law, and you may bring claims in your local
        courts as your law permits.
      </p>

      <h2 className="text-lg font-medium text-foreground">14. Governing Law</h2>
      <p className="text-foreground">
        These Terms are governed by the laws of the State of California,
        United States, without regard to its conflict-of-law principles,
        except that mandatory consumer-protection law of your country of
        residence may apply where it provides greater protection.
      </p>

      <h2 className="text-lg font-medium text-foreground">15. Termination</h2>
      <p className="text-foreground">
        You may stop using Vial at any time. Deleting the app removes all
        on-device data. The Operator may suspend or terminate your access for
        violations of these Terms or where required by law. Sections 3, 7, 8,
        10, 11, 12, 13, 14, and 16 survive termination.
      </p>

      <h2 className="text-lg font-medium text-foreground">16. Severability</h2>
      <p className="text-foreground">
        If any provision of these Terms is held unenforceable, that provision
        will be modified to the minimum extent necessary to make it
        enforceable, and the remaining provisions will continue in full force
        and effect.
      </p>

      <h2 className="text-lg font-medium text-foreground">17. Changes</h2>
      <p className="text-foreground">
        We may update these Terms from time to time. Material changes will be
        communicated through the app and reflected in the &quot;Last
        updated&quot; date above. Continued use of Vial after changes take
        effect constitutes your acceptance of the updated Terms.
      </p>

      <h2 className="text-lg font-medium text-foreground">
        18. Apple App Store
      </h2>
      <p className="text-foreground">
        Vial is distributed through the Apple App Store. These Terms are between
        you and the Operator only, not Apple, and Apple is not responsible for
        Vial or its content. Your license to use Vial is limited to Apple-branded
        devices you own or control and is subject to the Apple Media Services
        Terms and Conditions. Apple has no obligation to provide maintenance or
        support for Vial. If Vial fails to conform to any applicable warranty,
        you may notify Apple and Apple may refund the purchase price, if any; to
        the maximum extent permitted by law, Apple has no other warranty
        obligation with respect to Vial. The Operator, not Apple, is responsible
        for addressing any claims relating to Vial, including product liability,
        legal or regulatory compliance, and consumer protection claims, and for
        any third-party claim that Vial infringes intellectual property rights.
        Apple and its subsidiaries are third-party beneficiaries of these Terms
        and may enforce them against you.
      </p>

      <h2 className="text-lg font-medium text-foreground">19. Contact</h2>
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
