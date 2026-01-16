export default function KumePrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-8 text-[#222222]">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-[#717171]">Last updated: October 01, 2025</p>
      </div>

      <section className="space-y-4">
        <p>
          This privacy notice for <strong>Kume</strong> ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Download and use our mobile application (Kume), or any other application of ours that links to this privacy notice</li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p>
          Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:fabio@echoforge.to" className="text-[#FF6B6B] hover:underline">fabio@echoforge.to</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Summary of Key Points</h2>
        <div className="space-y-4 text-sm bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
          <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
          <p><strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information (such as geolocation or device access) when necessary with your consent or as otherwise permitted by applicable law.</p>
          <p><strong>Do we collect any information from third parties?</strong> No, we do not collect any information from third parties.</p>
          <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We also use OpenAI to process itinerary requests and Google Places to show locations.</p>
        </div>
      </section>

      <section className="space-y-4 text-neutral-800">
        <h2 className="text-2xl font-bold">1. What Information Do We Collect?</h2>
        <p>We collect personal information that you provide to us (names, email addresses, phone numbers) when you register on the Services. We also automatically collect certain information when you visit or navigate the Services, such as IP address, browser/device characteristics, and usage data.</p>
        
        <h3 className="text-xl font-bold pt-4">Mobile Device Access</h3>
        <p>We may request access or permission to certain features from your mobile device, including your mobile device's camera, gallery, sensors, and location features. This is primarily needed to provide the AI itinerary services and map features.</p>
      </section>

      <section className="space-y-4 text-neutral-800">
        <h2 className="text-2xl font-bold">2. How Do We Process Your Information?</h2>
        <p>We process your personal information for a variety of reasons, including:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>To facilitate account creation and authentication via Supabase.</li>
          <li>To generate personalized itineraries using OpenAI GPT-4o-mini.</li>
          <li>To provide location details via Google Places API.</li>
          <li>To manage subscriptions and payments via RevenueCat.</li>
          <li>To respond to user inquiries and offer support.</li>
          <li>To protect our Services from fraud and security threats.</li>
        </ul>
      </section>

      <section className="space-y-4 text-neutral-800">
        <h2 className="text-2xl font-bold">3. Third-Party Services</h2>
        <p>We share information with specific third parties to provide our services:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Supabase:</strong> For user authentication and database management.</li>
          <li><strong>OpenAI:</strong> To process travel preferences and generate itineraries.</li>
          <li><strong>Google Places:</strong> To fetch photos, ratings, and location data.</li>
          <li><strong>RevenueCat:</strong> To manage in-app subscriptions and payment status.</li>
        </ul>
      </section>

      <section className="space-y-4 text-neutral-800">
        <h2 className="text-2xl font-bold">4. How Long Do We Keep Your Information?</h2>
        <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice, or until you delete your account. When you delete your account, we deactivate or delete your account and information from our active databases.</p>
      </section>

      <section className="space-y-4 text-neutral-800">
        <h2 className="text-2xl font-bold">5. Contact Us</h2>
        <p>If you have questions or comments about this notice, you may email us at <a href="mailto:fabio@echoforge.to" className="text-[#FF6B6B] hover:underline">fabio@echoforge.to</a>.</p>
      </section>
    </main>
  );
}
