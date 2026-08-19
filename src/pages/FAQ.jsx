import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/site";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <SEO title="FAQ — GotMeNow Consulting" description="Common questions about how GotMeNow consulting works — scope, pricing approach, timelines, sessions, and how the WhatsApp community relates to consulting." jsonLd={FAQ_JSONLD} />

      <section className="pt-32 sm:pt-40 pb-20">
        <div className="container-tight max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00a99d] mb-6">FAQ</div>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.02] text-[#000000]">Straight answers.</h1>
          <p className="mt-5 text-lg text-[#475569] leading-relaxed max-w-xl">If your question isn't here, the free fit-assessment call is the fastest way to get it answered.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-tight max-w-3xl">
          <div className="border-t border-foreground/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-foreground/10">
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
                    <span className={`font-display text-xl sm:text-2xl ${isOpen ? "text-[#00a99d]" : "text-[#000000]"}`}>{f.q}</span>
                    {isOpen ? <Minus className="w-5 h-5 flex-shrink-0 text-[#00a99d]" /> : <Plus className="w-5 h-5 flex-shrink-0 text-[#475569]" />}
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-[#475569] leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Still have a question?" subtitle="Book a free fit-assessment call and ask it directly." primaryLabel="Book a Free Consultation" showSecondary={false} />
    </>
  );
}