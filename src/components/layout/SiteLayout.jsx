import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import QuickActionBar from "./QuickActionBar";
import CookieConsent from "./CookieConsent";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <QuickActionBar />
      <CookieConsent />
    </div>
  );
}