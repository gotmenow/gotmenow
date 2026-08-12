import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const KEY = "gmn_consent_v1";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 inset-x-4 sm:inset-x-auto sm:right-6 z-50 max-w-md">
      <div className="bg-[#0F172A] text-[#F8FAFC] p-5 shadow-2xl rounded-sm border border-white/10">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm leading-relaxed text-[#F8FAFC]/80">
            We use cookies to understand how the site is used. See our{" "}
            <Link to="/privacy" className="underline text-[#C2410C]">Privacy Policy</Link>.
          </p>
          <button onClick={accept} aria-label="Dismiss" className="text-[#F8FAFC]/50 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
        <button onClick={accept} className="btn-sienna w-full mt-4 text-sm">Accept</button>
      </div>
    </div>
  );
}