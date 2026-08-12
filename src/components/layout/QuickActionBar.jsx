import { WHATSAPP_LINK } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/Icons";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function QuickActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-foreground/10 bg-[#F8FAFC]/95 backdrop-blur-md">
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 text-sm font-medium text-[#0F172A] border-r border-foreground/10">
        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> WhatsApp
      </a>
      <Link to="/book" className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white bg-[#C2410C]">
        <Phone className="w-4 h-4" /> Book a Call
      </Link>
    </div>
  );
}