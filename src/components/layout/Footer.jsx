import { Link } from "react-router-dom";
import { WHATSAPP_LINK, INSTAGRAM_LINK, INSTAGRAM_HANDLE, EMAIL, BLOG_LINK, NAV_LINKS } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/Icons";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-[#F8FAFC] mt-20">
      <div className="container-tight py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo height={42} className="mb-4" />
            <p className="text-sm leading-relaxed text-[#F8FAFC]/70 max-w-sm">
              Straight-talk consulting for people building a business, a startup, or a second income — without the noise.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp community" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A2540] transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0A2540] transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#F8FAFC]/50 mb-4">Explore</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.path}><Link to={l.path} className="text-sm text-[#F8FAFC]/80 hover:text-[#3d97e8] transition-colors">{l.label}</Link></li>
              ))}
              <li><Link to="/book" className="text-sm text-[#3d97e8] hover:underline">Book a Consultation</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-[#F8FAFC]/50 mb-4">Connect</div>
            <ul className="space-y-3">
              <li><a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-[#F8FAFC]/80 hover:text-[#3d97e8] transition-colors">{INSTAGRAM_HANDLE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="text-sm text-[#F8FAFC]/80 hover:text-[#3d97e8] transition-colors">{EMAIL}</a></li>
              <li><a href={BLOG_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-[#F8FAFC]/80 hover:text-[#3d97e8] transition-colors">Blog & Resources ↗</a></li>
            </ul>
            <div className="mt-6 space-y-2">
              <Link to="/privacy" className="block text-xs text-[#F8FAFC]/60 hover:text-[#F8FAFC]">Privacy Policy</Link>
              <Link to="/terms" className="block text-xs text-[#F8FAFC]/60 hover:text-[#F8FAFC]">Terms of Service</Link>
              <Link to="/disclaimer" className="block text-xs text-[#F8FAFC]/60 hover:text-[#F8FAFC]">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[#F8FAFC]/50">© {new Date().getFullYear()} GotMeNow. All rights reserved. Consulting provides guidance and education, not guaranteed outcomes.</p>
          <p className="text-xs text-[#F8FAFC]/40">Built with intention.</p>
        </div>
      </div>
    </footer>
  );
}