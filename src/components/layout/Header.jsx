import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/Icons";
import Logo from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setOpenSection(null); }, [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F8FAFC]/90 backdrop-blur-md border-b border-foreground/10" : "bg-transparent"}`}>
      <div className="container-tight flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center group">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) =>
            l.children ? (
              <div key={l.label} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium tracking-wide text-[#475569] hover:text-[#3d97e8] transition-colors">
                  {l.label} <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
                  <div className="w-80 bg-[#F8FAFC] border border-foreground/10 shadow-xl p-6">
                    {l.children.map((c) => (
                      <div key={c.path} className="mb-5 last:mb-0">
                        <Link to={c.path} className="block font-display text-lg text-[#0A2540] hover:text-[#3d97e8] transition-colors">{c.label}</Link>
                        {c.children && (
                          <div className="mt-2 ml-3 border-l border-foreground/10 pl-3 space-y-2">
                            {c.children.map((sc) => (
                              <Link key={sc.path} to={sc.path} className="block text-sm text-[#475569] hover:text-[#3d97e8] transition-colors">{sc.label}</Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.path} to={l.path} className={`text-sm font-medium tracking-wide transition-colors hover:text-[#3d97e8] ${location.pathname === l.path ? "text-[#3d97e8]" : "text-[#475569]"}`}>
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp community" className="p-2 text-[#475569] hover:text-[#0A2540] transition-colors">
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 text-[#475569] hover:text-[#0A2540] transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <Link to="/book" className="btn-sienna text-sm">Book a Free Consultation</Link>
        </div>

        <button className="lg:hidden p-2 text-[#0A2540]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F8FAFC] border-t border-foreground/10 max-h-[80vh] overflow-y-auto">
          <nav className="container-tight py-4 flex flex-col">
            {NAV_LINKS.map((l) =>
              l.children ? (
                <div key={l.label} className="border-b border-foreground/5">
                  <button
                    onClick={() => setOpenSection(openSection === l.label ? null : l.label)}
                    className="w-full flex items-center justify-between py-3 text-base font-medium text-[#0A2540]"
                  >
                    {l.label} <ChevronDown className={`w-4 h-4 transition-transform ${openSection === l.label ? "rotate-180" : ""}`} />
                  </button>
                  {openSection === l.label && (
                    <div className="pb-3">
                      {l.children.map((c) => (
                        <div key={c.path}>
                          <Link to={c.path} className="block py-2 ml-2 text-base font-medium text-[#0A2540]">{c.label}</Link>
                          {c.children && c.children.map((sc) => (
                            <Link key={sc.path} to={sc.path} className="block py-2 ml-6 text-sm text-[#475569]">{sc.label}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={l.path} to={l.path} className={`py-3 text-base font-medium border-b border-foreground/5 ${location.pathname === l.path ? "text-[#3d97e8]" : "text-[#0A2540]"}`}>
                  {l.label}
                </Link>
              )
            )}
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