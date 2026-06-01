export const metadata = {
  title: "Support | Vial: Peptide Tracker",
  description:
    "Get help with Vial. Contact, FAQ, common issues, and how to manage your subscription, data, and Apple Health sync.",
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: "How do I restore a previous purchase on a new device?",
    a: "Open Vial, go to Settings (gear icon on Today or Tracker) and tap Restore Purchases. If you originally bought from the paywall, the Restore Purchases button at the top of the paywall does the same thing. As long as you are signed into the same Apple ID that made the purchase, your access will be re-activated.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are billed and managed by Apple, not by Vial. On your iPhone, open the Settings app, tap your name at the top, tap Subscriptions, find Vial, and choose Cancel Subscription. Your access continues until the end of the current billing period.",
  },
  {
    q: "I bought Vial Lifetime. Is it really forever?",
    a: "Yes. Vial Lifetime is a one-time non-consumable in-app purchase. It unlocks every feature in the app permanently for any Apple ID that made the purchase, on any iPhone signed into that Apple ID.",
  },
  {
    q: "How do I export my data?",
    a: "Go to Settings, scroll to Data, and tap Export CSV for a spreadsheet of your dose history, or Export full backup for a JSON file containing every protocol, vial, log, metric, and side-effect entry. Both files are shared through the standard iOS share sheet, so you can save them to Files, email them to yourself, or send to your doctor.",
  },
  {
    q: "I lost all my data after deleting and reinstalling the app. Can I recover it?",
    a: "Vial stores your data on your device only. If you delete the app without first exporting a backup, the data is gone permanently. There is no cloud copy because we never upload it. Always run Settings > Data > Export full backup before deleting or switching phones.",
  },
  {
    q: "How do I restore from a backup file?",
    a: "Go to Settings, scroll to Data, tap Restore from backup, and pick the JSON file you exported earlier. Restoring overwrites your current data, so you will be asked to confirm first.",
  },
  {
    q: "Why are my Apple Health weight and mood readings appearing in Vial?",
    a: "If you grant Apple Health permission during onboarding, Vial reads weight, height, BMI, resting heart rate, steps, active energy, and sleep so it can show you protocol-relevant trends. Vial also writes your logged weight, mood, and side effects back to Apple Health so the data shows up alongside your other health records. You can disable Apple Health sync any time from Settings.",
  },
  {
    q: "My notifications stopped firing. What do I check?",
    a: "First, open the iPhone Settings app, find Vial, and confirm Notifications are enabled. Then re-open Vial and go to Settings > Reminders to confirm the reminders are turned on for each protocol. If you recently changed your protocol schedule, the reminders may need to be re-saved by opening the protocol once.",
  },
  {
    q: "Does Vial AI replace a doctor or pharmacist?",
    a: "No. Vial AI is educational only. It is configured to refuse personalized dosing, missed-dose recovery, and symptom evaluation, and to redirect those questions to your prescriber. Always consult a licensed clinician for any medical decision.",
  },
  {
    q: "Why am I running out of Vial AI messages on the free tier?",
    a: "Free users get a limited number of AI messages so you can experience the coach before upgrading. Once the quota is used, you will see an upgrade prompt. Upgrading to any paid Vial plan removes the limit entirely.",
  },
  {
    q: "The calculator looks wrong. What do I do?",
    a: "Double-check your inputs: vial total (mg), bacteriostatic water (mL), and target dose (mcg or mg). Make sure the syringe size matches the syringe you actually have. If you still believe the math is off, email support@echoforge.to with the inputs you used and the expected result, and we will look at it.",
  },
  {
    q: "Is the app available on Android?",
    a: "Not yet. Vial is iPhone only for now. An Android version is on the roadmap but not scheduled.",
  },
];

export default function VialSupport() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-foreground">
          Vial: Peptide Tracker / Support
        </h1>
        <p className="text-muted">
          Help, FAQ, and how to reach a human.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-medium text-foreground">Contact</h2>
        <p className="text-foreground">
          Email{" "}
          <a
            href="mailto:support@echoforge.to"
            className="text-accent hover:underline"
          >
            support@echoforge.to
          </a>
          . Solo team, real human reply, typically within 48 hours. Include your iOS version and a description of what you did just before the issue started — it speeds things up.
        </p>
        <p className="text-foreground">
          For subscription billing or refund requests, Apple handles those directly. On your iPhone, open the Settings app, tap your name, then Subscriptions or Purchase History. Vial cannot issue refunds because Apple controls the transaction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-5">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="space-y-1">
              <h3 className="text-base font-medium text-foreground">{q}</h3>
              <p className="text-foreground">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium text-foreground">Quick troubleshooting</h2>
        <ul className="list-disc list-inside text-foreground space-y-2">
          <li>
            <strong>App will not open or crashes on launch.</strong> Force-quit Vial (swipe up from the bottom and flick the Vial card off the top), wait a few seconds, and re-open. If it still crashes, restart your iPhone. If that does not work, update Vial from the App Store and try again. As a last resort, email support before deleting the app so we can help recover your data.
          </li>
          <li>
            <strong>Premium features are locked even though I purchased.</strong> Open the paywall or Settings and tap Restore Purchases. Make sure you are signed into the same Apple ID that made the purchase. Subscriptions can take a moment to sync from Apple to RevenueCat after a fresh install.
          </li>
          <li>
            <strong>Apple Health is not syncing.</strong> Open the iPhone Settings app, tap Privacy and Security > Health > Vial, and confirm every category you want is toggled on. Then open Vial > Settings > Sync now to force a fresh pull.
          </li>
          <li>
            <strong>A reminder fired at the wrong time.</strong> Reminders use your phone time zone at the moment the protocol is saved. If you have traveled across time zones, re-open the protocol and tap Save to reschedule against your current time zone.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium text-foreground">Privacy and data</h2>
        <p className="text-foreground">
          Vial stores your protocol data on your device only. Nothing is uploaded to a Vial server. Read the full{" "}
          <a href="/vial/privacy" className="text-accent hover:underline">
            Privacy Policy
          </a>{" "}
          for the complete list of third parties and what each one receives.
        </p>
        <p className="text-foreground">
          To delete every piece of data Vial stores on your device, open Settings, scroll to Data, and tap Reset all data. There is no separate account to delete because Vial does not have accounts.
        </p>
      </section>

      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-xl font-medium text-foreground">Still need help?</h2>
        <p className="text-foreground">
          The FAQ above covers the most common questions. If your answer is not there, email support and a human will reply.
        </p>
        <a
          href="mailto:support@echoforge.to?subject=Vial%20support"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-base font-medium text-background hover:opacity-90 transition-opacity"
        >
          Email support@echoforge.to
        </a>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-medium text-foreground">Legal</h2>
        <ul className="list-disc list-inside text-foreground space-y-1">
          <li>
            <a href="/vial/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/vial/terms" className="text-accent hover:underline">
              Terms of Use
            </a>
          </li>
        </ul>
        <p className="text-muted text-sm">
          Vial is a personal tracking and calculation tool. It is not a medical device, prescription service, or healthcare provider. Nothing in the app or on this support page is medical advice. Always consult a licensed clinician before starting, changing, or stopping any peptide, supplement, or protocol.
        </p>
      </section>
    </main>
  );
}
