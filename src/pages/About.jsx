import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import DisclaimerBox from "@/components/DisclaimerBox";
import { TESTIMONIALS, INSTAGRAM_LINK, INSTAGRAM_HANDLE } from "@/lib/site";

const FOUNDER_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/4b3a7cdf4_generated_9c59b202.png";

export default function About() {
  return (
    <>
      <SEO title="About — Nithin, founder of GotMeNow" description="The story behind GotMeNow — built as a content brand and community, now a consulting practice grounded in straight talk." image={FOUNDER_IMG} />

      <section className="pt-32 sm:pt-40 pb-20">
        <div className="container-tight grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#3d97e8] mb-6">About</div>
            <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] text-[#0A2540]">
              I built an audience before I sold anything.
            </h1>
            <p className="mt-7 text-lg text-[#475569] leading-relaxed max-w-xl">
              I'm Nithin. I started GotMeNow as content — honest notes on business, startups, and building a second income — and it grew into a community of ambitious Indian professionals who wanted the same thing: a credible, no-nonsense guide instead of another hype merchant.
            </p>
            <p className="mt-5 text-lg text-[#475569] leading-relaxed max-w-xl">
              Today GotMeNow is a consulting practice. The community is still free. The consulting is paid and selective — because real strategy takes focus, and focus can't be scaled to everyone.
            </p>
            <Link to="/book" className="btn-sienna mt-9">Work with me <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[#0A2540]">
              <img src={FOUNDER_IMG} alt="Nithin, founder of GotMeNow" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-foreground/10">
        <div className="container-tight">
          <SectionHeader number="01" eyebrow="Mission" title="Why GotMeNow exists." intro="There's enough noise. What ambitious people need is a clear map and someone honest enough to redraw it when reality changes." />
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {[
              { t: "Strategy first", d: "Frameworks before tactics. The thinking is the asset." },
              { t: "No guarantees", d: "Anyone promising guaranteed outcomes is lying to you. I won't." },
              { t: "Built in public", d: "The content and community came first. The consulting is an extension of it." },
            ].map((c) => (
              <div key={c.t} className="bg-[#F8FAFC] p-8">
                <h3 className="font-display text-2xl text-[#0A2540] mb-3">{c.t}</h3>
                <p className="text-[#475569] leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A2540] text-[#F8FAFC]">
        <div className="container-tight">
          <SectionHeader number="02" eyebrow="Credibility" title="Where I come from." dark intro="A short list, because credibility is earned not declared." />
          <ul className="mt-12 space-y-6 max-w-2xl">
            {[
              "Built and ran an Instagram content brand and a WhatsApp community around business, startup, and income strategy.",
              "Mapped nine countries' startup, accelerator, and relocation pathways — orientation, not immigration advice.",
              "Worked with founders and professionals across business positioning, launch planning, and income system design.",
              "Prioritised straight talk over reach — the community grew because the advice held up.",
            ].map((p) => (
              <li key={p} className="flex gap-4 pb-6 border-b border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3d97e8] mt-3 flex-shrink-0" />
                <span className="text-lg text-[#F8FAFC]/85 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-10 text-[#3d97e8] font-medium hover:underline">
            See the work at {INSTAGRAM_HANDLE} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight">
          <SectionHeader number="03" eyebrow="Proof" title="Results, described honestly." intro="Qualitative outcomes only. Names where permission was given. No income figures, no guarantees." align="center" />
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="bg-[#F8FAFC] p-8">
                <p className="text-lg text-[#0A2540] leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-foreground/10">
                  <div className="font-semibold text-[#0A2540]">{t.name}</div>
                  <div className="text-sm text-[#475569]">{t.role}</div>
                  <div className="text-xs text-[#3d97e8] mt-1">{t.result}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <DisclaimerBox>
              Results vary by individual effort and circumstance. Testimonials describe qualitative outcomes and are not a promise of similar results. GotMeNow provides strategy and education, not guaranteed outcomes.
            </DisclaimerBox>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}