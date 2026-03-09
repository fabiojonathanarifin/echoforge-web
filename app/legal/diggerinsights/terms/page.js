export const metadata = {
  title: "Terms of Service | DiggerInsights",
  description: "Terms of Service for the DiggerInsights newsletter.",
};

export default function DiggerInsightsTerms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">DiggerInsights — Terms of Service</h1>
      <p className="text-muted">Last updated: March 9, 2026</p>

      <p className="text-foreground">
        These Terms of Service (&quot;Terms&quot;) govern your use of DiggerInsights, a newsletter
        operated by EchoForge (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By subscribing to
        or reading DiggerInsights, you agree to these Terms.
      </p>

      <h2 className="text-xl font-medium text-foreground">1. The Service</h2>
      <p className="text-foreground">
        DiggerInsights is a free daily newsletter covering emerging startups, technology, and
        innovation. Content is delivered via email and published on our beehiiv publication page.
      </p>

      <h2 className="text-xl font-medium text-foreground">2. Subscription</h2>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>Subscription is free and requires only a valid email address.</li>
        <li>You may unsubscribe at any time using the link in any newsletter email.</li>
        <li>We reserve the right to remove subscribers who abuse the service.</li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">3. Content</h2>
      <p className="text-foreground">
        All content published by DiggerInsights is for informational purposes only. We make
        reasonable efforts to ensure accuracy but do not guarantee that all information is complete,
        current, or error-free. Nothing in DiggerInsights constitutes financial, investment, legal,
        or professional advice. You should not make business or investment decisions based solely on
        our content.
      </p>

      <h2 className="text-xl font-medium text-foreground">4. Intellectual Property</h2>
      <p className="text-foreground">
        All original content, branding, and design of DiggerInsights are the property of EchoForge.
        You may share newsletter links and excerpts with attribution. You may not republish full
        newsletter editions, scrape content at scale, or use our content for commercial purposes
        without written permission.
      </p>

      <h2 className="text-xl font-medium text-foreground">5. Acceptable Use</h2>
      <p className="text-foreground">You agree not to:</p>
      <ul className="list-disc list-inside text-foreground space-y-1">
        <li>Subscribe with fraudulent or disposable email addresses at scale.</li>
        <li>Scrape, crawl, or use automated means to extract newsletter content.</li>
        <li>Redistribute our content for commercial gain without permission.</li>
        <li>Attempt to gain unauthorized access to our systems or subscriber data.</li>
      </ul>

      <h2 className="text-xl font-medium text-foreground">6. Third-Party Links</h2>
      <p className="text-foreground">
        DiggerInsights may contain links to third-party websites, products, or services. We are not
        responsible for the content, accuracy, or practices of any third-party sites. Inclusion of a
        link does not imply endorsement.
      </p>

      <h2 className="text-xl font-medium text-foreground">7. Disclaimer of Warranties</h2>
      <p className="text-foreground">
        DiggerInsights is provided &quot;as is&quot; without warranties of any kind, express or
        implied. We do not warrant that the newsletter will be delivered without interruption or
        error, or that all content will be accurate or up to date.
      </p>

      <h2 className="text-xl font-medium text-foreground">8. Limitation of Liability</h2>
      <p className="text-foreground">
        To the maximum extent permitted by law, EchoForge shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of or reliance
        on DiggerInsights content. This includes any decisions made based on information in the
        newsletter.
      </p>

      <h2 className="text-xl font-medium text-foreground">9. Changes to These Terms</h2>
      <p className="text-foreground">
        We may update these Terms from time to time. Changes will be posted on this page with an
        updated effective date. Continued subscription after changes constitutes acceptance.
      </p>

      <h2 className="text-xl font-medium text-foreground">10. Contact Us</h2>
      <p className="text-foreground">
        Questions about these Terms? Email{" "}
        <a href="mailto:legal@echoforge.to" className="text-accent hover:underline">
          legal@echoforge.to
        </a>
      </p>
    </main>
  );
}
