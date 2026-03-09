export const metadata = {
  title: "Privacy Policy | DiggerInsights",
  description: "Privacy Policy for the DiggerInsights newsletter.",
};

export default function DiggerInsightsPrivacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">DiggerInsights — Privacy Policy</h1>
      <p className="text-muted">Last updated: March 9, 2026</p>

      <p className="text-foreground">
        This Privacy Policy explains how DiggerInsights (operated by EchoForge) collects, uses, and
        discloses information when you subscribe to or read the DiggerInsights newsletter.
      </p>

      <h2 className="text-xl font-medium text-foreground">Contact</h2>
      <p className="text-foreground">
        Operator: <strong>EchoForge</strong>
        <br />
        Contact:{" "}
        <a href="mailto:privacy@echoforge.to" className="text-accent hover:underline">
          privacy@echoforge.to
        </a>
      </p>

      <h2 className="text-xl font-medium text-foreground">Information We Collect</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>Email address:</strong> provided when you subscribe to the newsletter. Used solely
          to deliver newsletter editions and service communications.
        </li>
        <li>
          <strong>Engagement data:</strong> open rates, click-through rates, and reading behavior
          collected by our newsletter platform (beehiiv) to help us improve content.
        </li>
        <li>
          <strong>Device and browser information:</strong> standard technical data collected
          automatically when you open emails or visit our publication page.
        </li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">How We Use Your Information</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>Deliver the DiggerInsights newsletter to your inbox.</li>
        <li>Analyze aggregate readership data to improve content quality and relevance.</li>
        <li>Send occasional service-related communications (e.g., changes to the newsletter).</li>
      </ul>
      <p className="text-foreground">
        We do not sell your email address or personal data. We do not share subscriber information
        with third parties for marketing purposes.
      </p>

      <h2 className="text-xl font-medium text-foreground">Third-Party Services</h2>
      <p className="text-foreground">
        DiggerInsights is delivered via{" "}
        <a href="https://www.beehiiv.com/privacy" className="text-accent hover:underline">
          beehiiv
        </a>
        , which processes your email address and engagement data on our behalf. beehiiv has its own
        privacy policy governing how it handles subscriber data.
      </p>

      <h2 className="text-xl font-medium text-foreground">Data Retention</h2>
      <p className="text-foreground">
        Your email address is retained for as long as you remain subscribed. Engagement analytics are
        retained for up to 12 months. When you unsubscribe, your email address is removed from our
        active mailing list.
      </p>

      <h2 className="text-xl font-medium text-foreground">Your Rights and Choices</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>
          <strong>Unsubscribe:</strong> every newsletter email includes an unsubscribe link at the
          bottom. One click removes you from the mailing list.
        </li>
        <li>
          <strong>Data deletion:</strong> contact us at{" "}
          <a href="mailto:privacy@echoforge.to" className="text-accent hover:underline">
            privacy@echoforge.to
          </a>{" "}
          to request full deletion of your data.
        </li>
        <li>
          <strong>Access:</strong> contact us to request a copy of the data we hold about you.
        </li>
      </ul>
      <p className="text-foreground">
        If you are located in the European Economic Area (EEA), you may have additional rights under
        the GDPR, including the right to access, rectify, erase, and restrict processing of your
        personal data. California residents may exercise rights under the CCPA, including the right
        to know and delete personal information. We do not sell your data. To exercise any of these
        rights, contact{" "}
        <a href="mailto:privacy@echoforge.to" className="text-accent hover:underline">
          privacy@echoforge.to
        </a>
        .
      </p>

      <h2 className="text-xl font-medium text-foreground">Children</h2>
      <p className="text-foreground">
        DiggerInsights is not directed at children under 13. We do not knowingly collect personal
        information from anyone under 13.
      </p>

      <h2 className="text-xl font-medium text-foreground">Changes to This Policy</h2>
      <p className="text-foreground">
        We may update this policy from time to time. Changes will be posted on this page with an
        updated effective date. Continued subscription after changes constitutes acceptance.
      </p>

      <h2 className="text-xl font-medium text-foreground">Contact Us</h2>
      <p className="text-foreground">
        Questions about this policy? Email{" "}
        <a href="mailto:privacy@echoforge.to" className="text-accent hover:underline">
          privacy@echoforge.to
        </a>
      </p>
    </main>
  );
}
