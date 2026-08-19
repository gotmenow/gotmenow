import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import DisclaimerBox from "@/components/DisclaimerBox";
import CountryAccordion from "@/components/CountryAccordion";
import { SERVICES } from "@/lib/site";

const IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/220ab52b1_generated_96106598.png";

export default function StartupConsulting() {
  const s = SERVICES[1];
  return (
    <>
      <SEO title="Startup Consulting — GotMeNow" description="Idea validation, launch planning, and structuring for first-time founders — including overseas accelerator and relocation routes across 9 countries." image={IMG} />

      <section className="pt-32 sm:pt-40 pb-20">
        <div className="container-tight grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00a99d] mb-6">{s.number} — Service</div>
            <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] text-[#000000]">{s.title}</h1>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed max-w-xl">{s.short}</p>
            <Link to="/book" className="btn-sienna mt-8">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[16/10] overflow-hidden bg-[#000000]">
              <img src={IMG} alt="Startup consulting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-foreground/10">
        <div className="container-tight grid lg:grid-cols-2 gap-16">
          <SectionHeader number="01" eyebrow="Scope" title="What it covers." />
          <ul className="space-y-5">
            {s.covers.map((c) => (
              <li key={c} className="flex gap-4 pb-5 border-b border-foreground/10">
                <Check className="w-5 h-5 text-[#00a99d] flex-shrink-0 mt-0.5" />
                <span className="text-lg text-[#000000] leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[#000000] text-[#F8FAFC]">
        <div className="container-tight grid lg:grid-cols-2 gap-16">
          <SectionHeader number="02" eyebrow="Audience" title="Who it's for." dark />
          <ul className="space-y-5">
            {s.forWhom.map((c) => (
              <li key={c} className="flex gap-4 pb-5 border-b border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a99d] mt-3 flex-shrink-0" />
                <span className="text-lg text-[#F8FAFC]/85 leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nine-route navigator */}
      <section className="py-20">
        <div className="container-tight">
          <SectionHeader number="03" eyebrow="Global Mobility" title="Exploring an overseas startup path?" intro="Nine countries, each with a differentiating hook. Orientation only — not immigration advice, not a guarantee of approval." />
          <div className="mt-16">
            <CountryAccordion />
          </div>
          <div className="mt-10">
            <DisclaimerBox>
              Country pathway information is provided for orientation only. GotMeNow does not provide immigration, legal, or visa advice and does not guarantee any outcome, including visa or accelerator acceptance. For regulated matters consult a licensed professional in the relevant jurisdiction.
            </DisclaimerBox>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-foreground/10">
        <div className="container-tight">
          <SectionHeader number="04" eyebrow="Engagement" title="What a client engagement looks like." />
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {s.process.map((p, i) => (
              <div key={p.step} className="bg-[#F8FAFC] p-8 sm:p-10">
                <div className="section-number text-5xl opacity-20 mb-6">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl text-[#000000] mb-3">{p.step}</h3>
                <p className="text-[#475569] leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}