import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { base44 } from "@/api/base44Client";
import { WHATSAPP_LINK, EMAIL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/Icons";

const SERVICES_OPTIONS = ["Business Consulting", "Startup Consulting", "Passive Income Consulting", "Not sure yet"];

export default function BookConsultation() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service_interest: "Business Consulting", message: "" });
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    const filled = ["name", "email", "phone", "service_interest", "message"].filter((k) => form[k]).length;
    setProgress(((filled + (value ? 1 : 0)) / 5) * 100);
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await base44.entities.Lead.create({ ...form, source: "website" });
      setProgress(100);
      setStatus("done");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <>
        <SEO title="Book a Consultation — GotMeNow" description="Book a free fit-assessment consultation call with GotMeNow." />
        <section className="pt-40 pb-32 min-h-[70vh] flex items-center">
          <div className="container-tight max-w-xl text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C2410C] flex items-center justify-center mb-8">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-[#0F172A]">Your request is in.</h1>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
              Thanks, {form.name.split(" ")[0] || "there"}. I'll personally review your goal and reach out to schedule your fit-assessment call. For a faster response, join the WhatsApp community below.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-sienna"><WhatsAppIcon className="w-5 h-5" /> Join WhatsApp Community</a>
              <a href={`mailto:${EMAIL}`} className="btn-ghost">Email me instead</a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO title="Book a Consultation — GotMeNow" description="Book a free fit-assessment consultation call with GotMeNow. Paid consulting service; free calls are for fit assessment only." />

      <section className="pt-32 sm:pt-40 pb-24">
        <div className="container-tight max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C2410C] mb-6">Book a Consultation</div>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.02] text-[#0F172A]">Let's see if this is the right fit.</h1>
          <p className="mt-5 text-lg text-[#475569] leading-relaxed">
            A free call to assess fit — your situation, your goal, and whether consulting is genuinely the right move for you.
          </p>

          <div className="mt-8 p-4 bg-[#0F172A] text-[#F8FAFC] rounded-sm text-sm font-medium">
            This is a paid consulting service. Free calls are for fit assessment only.
          </div>

          {/* Progress bar */}
          <div className="mt-10 h-1 bg-foreground/10 overflow-hidden">
            <div className="h-full bg-[#C2410C] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          <form onSubmit={submit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Name</label>
              <input
                type="text" required value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-foreground/15 rounded-sm input-focus outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Email</label>
              <input
                type="email" required value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-foreground/15 rounded-sm input-focus outline-none"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Phone / WhatsApp number</label>
              <input
                type="tel" required value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-foreground/15 rounded-sm input-focus outline-none"
                placeholder="+91 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Which service are you interested in?</label>
              <select
                required value={form.service_interest}
                onChange={(e) => update("service_interest", e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-foreground/15 rounded-sm input-focus outline-none"
              >
                {SERVICES_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Brief description of your goal</label>
              <textarea
                required rows={5} value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-foreground/15 rounded-sm input-focus outline-none resize-none"
                placeholder="Where are you now, and what are you trying to build?"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-[#C2410C]">Something went wrong submitting. Please try again, or reach me on WhatsApp.</p>
            )}

            <button type="submit" disabled={status === "loading"} className="btn-sienna w-full disabled:opacity-60">
              {status === "loading" ? "Sending..." : "Request my free fit-assessment call"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-6 text-xs text-[#475569] leading-relaxed">
            By submitting you agree to our Terms of Service and Privacy Policy. Consulting provides guidance and education, not guaranteed financial, immigration, or legal outcomes.
          </p>
        </div>
      </section>
    </>
  );
}