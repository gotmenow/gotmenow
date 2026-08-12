import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function CTASection({ title = "Ready to build with a clear strategy?", subtitle = "Book a free fit-assessment call. No pressure, no hype — just a straight conversation about whether this is the right fit.", primaryLabel = "Book a Free Consultation", primaryTo = "/book", showSecondary = true }) {
  return (
    <section className="bg-[#0F172A] text-[#F8FAFC]">
      <div className="container-tight py-20 sm:py-28 text-center">
        <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] max-w-3xl mx-auto">{title}</h2>
        <p className="mt-6 text-base sm:text-lg text-[#F8FAFC]/70 max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryTo} className="btn-sienna w-full sm:w-auto">{primaryLabel} <ArrowRight className="w-4 h-4" /></Link>
          {showSecondary && (
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-[#0F172A]">Join the WhatsApp Community</a>
          )}
        </div>
      </div>
    </section>
  );
}