import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Cpu, Megaphone, Search, Code } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import DisclaimerBox from "@/components/DisclaimerBox";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/site";

const ICONS = { Cpu, Megaphone, Search, Code };

export default function ServiceOffering() {
  const { offering } = useParams();
  const data = SERVICES[0].offerings.find((o) => o.slug === offering);
  if (!data) return <Navigate to="/business-consulting" replace />;
  const Icon = ICONS[data.icon] || Cpu;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.title} — GotMeNow`,
    serviceType: data.title,
    description: data.desc,
    url: `https://gotmenow.com/business-consulting/${data.slug}`,
    areaServed: "Worldwide",
    provider: { "@type": "Organization", name: "GotMeNow", url: "https://gotmenow.com" },
  };

  return (
    <>
      <SEO title={`${data.title} — GotMeNow Consulting`} description={data.desc} jsonLd={jsonLd} />

      <section className="pt-32 sm:pt-40 pb-16">
        <div className="container-tight">
          <Link to="/business-consulting" className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#00a99d] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Business Consulting
          </Link>
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00a99d] mb-6">What We Do · Business Consulting</div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-sm bg-[#000000] text-[#00a99d] flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-[#000000]">{data.title}</h1>
              <p className="mt-4 text-lg text-[#00a99d] font-medium">{data.tagline}</p>
            </div>
          </div>
          <p className="mt-8 text-lg text-[#475569] leading-relaxed max-w-3xl">{data.desc}</p>
        </div>
      </section>

      <section className="py-16 border-t border-foreground/10">
        <div className="container-tight">
          <SectionHeader eyebrow="How we approach it" title="A method, not a deliverable." intro="Each engagement follows the same straight-talk method — adapted to the problem in front of you." />
          <div className="mt-14 grid gap-px bg-foreground/10 sm:grid-cols-3 border border-foreground/10">
            {data.approach.map((a, i) => (
              <div key={i} className="bg-[#F8FAFC] p-8">
                <div className="font-display text-3xl text-[#00a99d] mb-4">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-[#000000] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-foreground/10">
        <div className="container-tight max-w-3xl">
          <DisclaimerBox title="Important">
            This is a consulting service providing strategy and education. It is not a guarantee of any specific outcome, ranking, revenue, or product result. Results depend on your effort, market, and execution. For legal, tax, or regulated matters, consult a licensed professional.
          </DisclaimerBox>
        </div>
      </section>

      <CTASection title={`Ready to explore ${data.title}?`} primaryLabel="Book a Free Consultation" />
    </>
  );
}