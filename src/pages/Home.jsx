import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Rocket, TrendingUp, ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import ServiceSlider from "@/components/ServiceSlider";
import { SERVICES, TRUST_POINTS, TESTIMONIALS, WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/Icons";
import { useEffect, useRef, useState } from "react";

const ICONS = { Briefcase, Rocket, TrendingUp };

const HERO_IMG = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/05b099f4f_watermark-removed-Gemini_Generated_Image_2.png";

function TrustCounter({ value, label, delay }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); obs.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className={`font-display text-4xl sm:text-5xl text-[#000000] transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: `${delay}ms` }}>
        {value}
      </div>
      <div className="mt-2 text-xs sm:text-sm text-[#475569] leading-snug max-w-[180px] mx-auto sm:mx-0">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO title="GotMeNow — Strategy Over Noise" description="Straight-talk consulting for people building a business, a startup, or a second income. Business, startup, and passive income strategy consulting by Nithin." image={HERO_IMG} />

      {/* HERO */}
      <section className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
        <div className="container-tight grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00a99d] mb-6">Strategy Over Noise</div>
            <ServiceSlider />
            <p className="mt-7 text-lg text-[#475569] leading-relaxed max-w-xl">
              No hype. No guarantees. Just clear strategy from someone who built an audience and a brand — and now helps ambitious professionals build the same.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/book" className="btn-sienna">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">Join our WhatsApp Community</a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={HERO_IMG}
              alt="Nithin, founder of GotMeNow"
              className="w-full h-auto select-none"
              style={{ WebkitMaskImage: "radial-gradient(118% 122% at 60% 38%, #000 50%, transparent 74%)", maskImage: "radial-gradient(118% 122% at 60% 38%, #000 50%, transparent 74%)" }}
            />
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-[#F8FAFC] border border-foreground/10 px-6 py-4">
              <div className="text-xs text-[#475569] uppercase tracking-widest">Founder</div>
              <div className="font-display text-2xl text-[#000000]">Nithin</div>
            </div>
          </div>
        </div>

        {/* Straight-talk ticker */}
        <div className="mt-20 border-y border-foreground/10 py-4 overflow-hidden bg-[#F8FAFC]">
          <div className="flex gap-12 whitespace-nowrap animate-[scroll_28s_linear_infinite]" style={{ animation: "scroll 28s linear infinite" }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center text-sm font-medium tracking-[0.2em] uppercase text-[#475569]">
                <span>No Hype</span><span className="text-[#00a99d]">—</span>
                <span>No Guarantees</span><span className="text-[#00a99d]">—</span>
                <span>Just Infrastructure</span><span className="text-[#00a99d]">—</span>
                <span>Strategy First</span><span className="text-[#00a99d]">—</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE PILLARS */}
      <section className="py-20 sm:py-28">
        <div className="container-tight">
          <SectionHeader number="01" eyebrow="Three Pillars" title="One framework. Three ways to apply it." intro="Every engagement is built on the same straight-talk approach — applied to the problem in front of you." />
          <div className="mt-16 grid gap-px bg-foreground/10 sm:grid-cols-3 border border-foreground/10">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <Link key={s.slug} to={s.path} className="group bg-[#F8FAFC] p-8 sm:p-10 flex flex-col transition-colors hover:bg-white">
                  <div className="flex items-center justify-between mb-8">
                    <span className="section-number text-5xl opacity-25">{s.number}</span>
                    <Icon className="w-7 h-7 text-[#00a99d]" />
                  </div>
                  <h3 className="font-display text-3xl text-[#000000] mb-3">{s.title}</h3>
                  <p className="text-[#475569] leading-relaxed text-[15px] flex-1">{s.short}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#00a99d]">
                    Learn more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY GOTMENOW TRUST STRIP */}
      <section className="py-20 bg-[#000000] text-[#F8FAFC]">
        <div className="container-tight">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {TRUST_POINTS.map((t, i) => <TrustCounter key={i} {...t} delay={i * 120} />)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="container-tight">
          <SectionHeader number="02" eyebrow="Proof" title="What clients actually say." intro="Qualitative results, shared honestly. Outcomes depend on your effort and circumstances." align="center" />
          <div className="mt-16">
            <TestimonialCarousel testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* INSTAGRAM STRIP */}
      <section className="py-20 border-y border-foreground/10 bg-white">
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#00a99d] mb-3">Follow the work</div>
            <h3 className="font-display text-3xl sm:text-4xl text-[#000000]">{INSTAGRAM_HANDLE}</h3>
            <p className="mt-3 text-[#475569] max-w-md">Daily strategy, founder notes, and passive income thinking — no fluff.</p>
          </div>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-sienna">
            <InstagramIcon className="w-5 h-5" /> Follow on Instagram
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}