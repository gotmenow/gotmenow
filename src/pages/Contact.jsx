import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE, EMAIL } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/Icons";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await base44.entities.Lead.create({ ...form, phone: "n/a", service_interest: "Not sure yet", source: "contact" });
      setStatus("done");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <SEO title="Contact — GotMeNow" description="Get in touch with GotMeNow via email, Instagram, or the WhatsApp community." />

      <section className="pt-32 sm:pt-40 pb-20">
        <div className="container-tight grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C2410C] mb-6">Contact</div>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.02] text-[#0F172A]">Reach me directly.</h1>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed max-w-md">
              For consulting, the booking page is faster. For everything else, here are the channels that actually reach me.
            </p>

            <div className="mt-10 space-y-5">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-sm border border-foreground/15 flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#475569] uppercase tracking-widest">Email</div>
                  <div className="font-display text-xl text-[#0F172A]">{EMAIL}</div>
                </div>
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-sm border border-foreground/15 flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#475569] uppercase tracking-widest">Instagram</div>
                  <div className="font-display text-xl text-[#0F172A]">{INSTAGRAM_HANDLE}</div>
                </div>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-sm border border-foreground/15 flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#475569] uppercase tracking-widest">WhatsApp Community</div>
                  <div className="font-display text-xl text-[#0F172A]">Join the community</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white border border-foreground/10 p-8 sm:p-10">
              <h2 className="font-display text-2xl text-[#0F172A] mb-6">Send a quick message</h2>
              {status === "done" ? (
                <div className="py-10 text-center">
                  <p className="text-lg text-[#0F172A] font-display">Message sent. I'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full px-4 py-3.5 border border-foreground/15 rounded-sm input-focus outline-none" />
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full px-4 py-3.5 border border-foreground/15 rounded-sm input-focus outline-none" />
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message" className="w-full px-4 py-3.5 border border-foreground/15 rounded-sm input-focus outline-none resize-none" />
                  {status === "error" && <p className="text-sm text-[#C2410C]">Something went wrong. Please try WhatsApp instead.</p>}
                  <button type="submit" disabled={status === "loading"} className="btn-sienna w-full disabled:opacity-60">
                    {status === "loading" ? "Sending..." : "Send message"} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}