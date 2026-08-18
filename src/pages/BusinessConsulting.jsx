import { Link } from "react-router-dom";
import { ArrowRight, Check, Cpu, Megaphone, Search, Code } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import DisclaimerBox from "@/components/DisclaimerBox";
import { SERVICES } from "@/lib/site";

const IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/5f81034c6_generated_ad5baaf3.png";

const OFFERING_ICONS = { Cpu, Megaphone, Search, Code };

export default function BusinessConsulting() {
  const s = SERVICES[0];
  return (
    <>
      <SEO title="Business Consulting — GotMeNow" description="Strategy, operations, and growth advisory for existing businesses that have stopped scaling predictably. Consulting, not guaranteed outcomes." image={IMG} />

      <section className="pt-32 sm:pt-40 pb-20">
        <div className="container-tight grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#3d97e8] mb-6">{s.number} — Service</div>
            <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] text-[#0A2540]">{s.title}</h1>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed max-w-xl">{s.short}</p>
            <Link to="/book" className="btn-sienna mt-8">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[16/10] overflow-hidden bg-[#0A2540]">
              <img src={IMG} alt="Business consulting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="py-20 border-t border-foreground/10">
        <div className="container-tight grid lg:grid-cols-2 gap-16">
          <SectionHeader number="01" eyebrow="Scope" title="What it covers." />
          <ul className="space-y-5">
            {s.covers.map((c) => (
              <li key={c} className="flex gap-4 pb-5 border-b border-foreground/10">
                <Check className="w-5 h-5 text-[#3d97e8] flex-shrink-0 mt-0.5" />
                <span className="text-lg text-[#0A2540] leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 border-t border-foreground/10 bg-white">
        <div className="container-tight">
          <SectionHeader eyebrow="Service Offerings" title="What we build under this vertical." intro="Four hands-on capabilities that sit underneath business consulting — each scoped to a real business outcome." />
          <div className="mt-16 grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {s.offerings.map((o) => {
              const Icon = OFFERING_ICONS[o.icon];
              return (
                <div key={o.title} className="bg-[#F8FAFC] p-8 sm:p-10 flex gap-6">
                  <div className="w-12 h-12 rounded-sm bg-[#0A2540] text-[#3d97e8] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#0A2540] mb-2">{o.title}</h3>
                    <p className="text-[#475569] leading-relaxed">{o.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-[#0A2540] text-[#F8FAFC]">
        <div className="container-tight grid lg:grid-cols-2 gap-16">
          <SectionHeader number="02" eyebrow="Audience" title="Who it's for." dark />
          <ul className="space-y-5">
            {s.forWhom.map((c) => (
              <li key={c} className="flex gap-4 pb-5 border-b border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3d97e8] mt-3 flex-shrink-0" />
                <span className="text-lg text-[#F8FAFC]/85 leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-tight">
          <SectionHeader number="03" eyebrow="Engagement" title="What a client engagement looks like." intro="A structured process — not a template. The depth scales to your situation." />
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {s.process.map((p, i) => (
              <div key={p.step} className="bg-[#F8FAFC] p-8 sm:p-10">
                <div className="section-number text-5xl opacity-20 mb-6">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl text-[#0A2540] mb-3">{p.step}</h3>
                <p className="text-[#475569] leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <DisclaimerBox>
              Consulting provides strategy, systems, and education — not guaranteed financial, operational, or business outcomes. Results depend on your individual effort, market conditions, and circumstances. This is not a substitute for licensed financial, legal, or tax advice.
            </DisclaimerBox>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}