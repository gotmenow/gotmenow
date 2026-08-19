import SEO from "@/components/SEO";
import { EMAIL } from "@/lib/site";

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer — GotMeNow" description="Important disclaimer about the nature of GotMeNow's consulting services." />
      <section className="pt-32 sm:pt-40 pb-24">
        <div className="container-tight max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00a99d] mb-6">Legal</div>
          <h1 className="font-display text-5xl sm:text-6xl text-[#000000]">Disclaimer</h1>

          <div className="mt-10 p-6 bg-[#000000] text-[#F8FAFC] border-l-4 border-[#00a99d]">
            <p className="text-base font-medium leading-relaxed">
              GotMeNow provides guidance and education, not guaranteed financial, immigration, or legal outcomes. Results depend on individual effort and circumstances. This is not a substitute for licensed legal, immigration, or financial advice.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-[#475569] leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">No income or outcome claims</h2>
              <p>Nothing on this site constitutes a promise, projection, or guarantee of income, returns, business success, visa approval, or any specific outcome. Any testimonial describes a qualitative experience and is not a promise of similar results for you.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Not regulated advice</h2>
              <p>Consulting covers strategy and education. It is not legal advice, immigration advice, tax advice, or regulated financial or investment advice. For such matters, engage a licensed professional in the relevant jurisdiction before acting.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Country pathway information</h2>
              <p>Any reference to startup, accelerator, or relocation pathways across countries is provided for general orientation only. Regulations change, and eligibility depends on individual circumstances. We do not guarantee any visa, accelerator, or relocation outcome.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Your responsibility</h2>
              <p>You are responsible for your own decisions and outcomes. Consulting is a tool to support your judgement, not a replacement for it.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-[#000000] mb-3">Contact</h2>
              <p>Questions: {EMAIL}.</p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}