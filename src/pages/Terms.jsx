import SEO from "@/components/SEO";
import { EMAIL } from "@/lib/site";

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service — GotMeNow" description="Terms governing the use of GotMeNow consulting services and this website." />
      <section className="pt-32 sm:pt-40 pb-24">
        <div className="container-tight max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00a99d] mb-6">Legal</div>
          <h1 className="font-display text-5xl sm:text-6xl text-[#000000]">Terms of Service</h1>
          <p className="mt-4 text-sm text-[#475569]">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <div className="mt-10 space-y-8 text-[#475569] leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Nature of the service</h2>
              <p>GotMeNow provides consulting services consisting of strategy, frameworks, and education. Consulting is a paid service. Any free call is for fit assessment only and does not constitute a consulting engagement.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">No guaranteed outcomes</h2>
              <p>GotMeNow does not guarantee any financial, business, immigration, visa, or income outcome. Results depend entirely on your individual effort, circumstances, and market conditions. Any claim of guaranteed results would be inaccurate.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Not legal, financial, or immigration advice</h2>
              <p>Consulting is not a substitute for advice from a licensed professional. For immigration, legal, tax, or regulated financial matters, consult a qualified professional in the relevant jurisdiction.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Pricing and engagements</h2>
              <p>Pricing depends on scope and is communicated after a fit-assessment call. Engagements are scoped in writing. Free calls do not create any obligation on either party.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Cancellations and refunds</h2>
              <p>Scheduled sessions may be rescheduled with reasonable notice. If you choose to discontinue an engagement, work delivered up to that point remains yours.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Community</h2>
              <p>The WhatsApp community is a free, open space and is separate from paid consulting. Joining the community does not constitute an engagement and confers no consulting entitlement.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Acceptable use</h2>
              <p>You agree not to misuse the site, submit false information, or attempt to disrupt its operation. We may restrict access for misuse.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Contact</h2>
              <p>Questions about these terms: {EMAIL}.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}