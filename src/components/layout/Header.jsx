import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F8FAFC]/90 backdrop-blur-md border-b border-foreground/10" : "bg-transparent"}`}>
      <div className="container-tight flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-tight text-[#0F172A]">GotMeNow</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C2410C] group-hover:scale-150 transition-transform" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link key={l.path} to={l.path} className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C2410C] ${location.pathname === l.path ? "text-[#C2410C]" : "text-[#475569]"}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp community" className="p-2 text-[#475569] hover:text-[#0F172A] transition-colors">
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 text-[#475569] hover:text-[#0F172A] transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <Link to="/book" className="btn-sienna text-sm">Book a Free Consultation</Link>
        </div>

        <button className="lg:hidden p-2 text-[#0F172A]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F8FAFC] border-t border-foreground/10">
          <nav className="container-tight py-4 flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link key={l.path} to={l.path} className={`py-3 text-base font-medium border-b border-foreground/5 ${location.pathname === l.path ? "text-[#C2410C]" : "text-[#0F172A]"}`}>
                {l.label}
              </Link>
            ))}
            <Link to="/book" className="btn-sienna mt-5 w-full">Book a Free Consultation</Link>
            <div className="flex items-center gap-4 mt-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#475569] text-sm"><WhatsAppIcon className="w-5 h-5" /> WhatsApp Community</a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#475569] text-sm"><InstagramIcon className="w-5 h-5" /> Instagram</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}