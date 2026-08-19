import SEO from "@/components/SEO";
import { EMAIL } from "@/lib/site";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — GotMeNow" description="How GotMeNow collects, uses, and protects your data." />
      <section className="pt-32 sm:pt-40 pb-24">
        <div className="container-tight max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00a99d] mb-6">Legal</div>
          <h1 className="font-display text-5xl sm:text-6xl text-[#000000]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#475569]">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <div className="mt-10 space-y-8 text-[#475569] leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">What we collect</h2>
              <p>When you submit the consultation or contact form, we collect your name, email, phone/WhatsApp number, the service you're interested in, and the message you provide. We may also collect basic analytics data about how the site is used.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">How we use it</h2>
              <p>We use your information solely to respond to your enquiry, assess fit for consulting, and schedule and conduct any engagement. We do not sell, rent, or share your data with third parties for marketing purposes.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Cookies</h2>
              <p>We use cookies to understand how the site is used and to improve it. You can decline cookies; the site remains usable. Our cookie consent banner lets you control this.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Data retention</h2>
              <p>We retain lead information for as long as is necessary to fulfil the purpose for which it was collected, and thereafter for legitimate record-keeping. You may request deletion at any time.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Your rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at {EMAIL}.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Third-party links</h2>
              <p>The site links to Instagram, WhatsApp, and our blog at gotmenow.com. Those platforms have their own privacy policies which we encourage you to review.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Contact</h2>
              <p>For any privacy question, write to {EMAIL}.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}