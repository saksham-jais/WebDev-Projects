"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, ChevronDown, Building2, UserRound, Bell, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Navbar = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const loginMenuRef = useRef<HTMLDivElement>(null);
  const notificationMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const t = {
    home: language === "hi" ? "होम" : "Home",
    about: language === "hi" ? "परिचय" : "About",
    services: language === "hi" ? "सेवाएं" : "Services",
    directory: language === "hi" ? "निर्देशिका" : "Directory",
    contact: language === "hi" ? "संपर्क करें" : "Contact Us",
    taxCollector: language === "hi" ? "अपना टैक्स कलेक्टर जानें" : "Know Your Tax Collector",
    login: language === "hi" ? "लॉगिन" : "Login",
    officialLogin: language === "hi" ? "अधिकारी लॉगिन" : "Official Login",
    customerLogin: language === "hi" ? "नागरिक लॉगिन" : "Customer Login",
    notifications: language === "hi" ? "सूचनाएं" : "Notifications",
    noNotifications: language === "hi" ? "कोई नई सूचना नहीं" : "No new notifications",
  };

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/services", label: t.services },
    { href: "/directory", label: t.directory },
    { href: "/contact", label: t.contact },
  ];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (loginMenuRef.current && !loginMenuRef.current.contains(event.target as Node)) {
        setIsLoginMenuOpen(false);
      }
      if (notificationMenuRef.current && !notificationMenuRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-15 md:h-20 flex items-center px-4">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <ShieldCheck className="text-white w-6 h-6" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-2xl text-[#1E3A8A] tracking-tight hidden sm:block">CivicFlow</span>
      </div>

      <div className="hidden md:flex items-center gap-10 ml-20 h-full">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href}
              href={link.href} 
              className={`relative h-full flex items-center text-[15px] font-semibold transition-colors ${
                isActive ? "text-[#2563EB]" : "text-slate-500 hover:text-[#2563EB]"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="ml-auto hidden md:flex items-center gap-4">
        <div className="shrink-0">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "hi")}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[13px] font-semibold text-slate-700 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        <Link href="/tax-collector" className="shrink-0 hidden xl:inline-flex">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mr-3 px-5 py-2.5 rounded-xl text-[14px] font-bold border border-blue-100 text-[#2563EB] bg-blue-50/70 hover:bg-blue-100 transition-all whitespace-nowrap"
          >
            {t.taxCollector}
          </motion.button>
        </Link>

        <div ref={loginMenuRef} className="relative shrink-0">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#1e40af" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLoginMenuOpen((prev) => !prev)}
            className="bg-[#2563EB] text-white px-5 py-2.5 rounded-xl text-[14px] font-bold shadow-lg shadow-blue-500/25 transition-all text-center whitespace-nowrap inline-flex items-center gap-2"
          >
            {t.login}
            <ChevronDown className="w-4 h-4" />
          </motion.button>

          <div className={`absolute right-0 top-full pt-2 transition-all duration-200 z-50 ${isLoginMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"}`}>
            <div className="w-56 rounded-2xl border border-slate-100 bg-white shadow-xl p-2">
              <Link
                href="/admin/login"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#2563EB] transition-colors"
              >
                <Building2 className="w-4 h-4" />
                <span className="font-semibold text-sm">{t.officialLogin}</span>
              </Link>
              <Link
                href="/login/customer"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-[#2563EB] transition-colors"
              >
                <UserRound className="w-4 h-4" />
                <span className="font-semibold text-sm">{t.customerLogin}</span>
              </Link>
            </div>
          </div>
        </div>

        <div ref={notificationMenuRef} className="relative shrink-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsNotificationOpen((prev) => !prev)}
            className="relative w-11 h-11 rounded-xl border border-blue-500/30 bg-[#2563EB] text-white shadow-lg shadow-blue-500/25 hover:bg-[#1d4ed8] transition-all flex items-center justify-center"
            aria-label={t.notifications}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500" />
          </motion.button>

          <div className={`absolute right-0 top-full pt-2 transition-all duration-200 z-50 ${isNotificationOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"}`}>
            <div className="w-72 rounded-2xl border border-slate-100 bg-white shadow-xl p-4">
              <h4 className="text-sm font-black text-slate-900 mb-3">{t.notifications}</h4>
              <p className="text-sm text-slate-500">{t.noNotifications}</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={mobileMenuRef} className="md:hidden ml-auto relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="relative w-10 h-10 rounded-lg border border-blue-500/30 bg-[#2563EB] text-white flex items-center justify-center"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-full pt-2 z-50 w-56"
          >
            <div className="rounded-2xl border border-slate-100 bg-white shadow-xl p-3 space-y-3">
              <div className="border-b border-slate-100 pb-3">
                <label className="text-xs font-semibold text-slate-700 block mb-2">Language</label>
                <select
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value as "en" | "hi");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-semibold text-slate-700 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#2563EB] transition-colors text-sm font-semibold"
                >
                  <Bell className="w-4 h-4" />
                  {t.notifications}
                </button>
              </div>

              <div className="space-y-2">
                <Link
                  href="/admin/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#2563EB] transition-colors text-sm font-semibold"
                >
                  <Building2 className="w-4 h-4" />
                  {t.officialLogin}
                </Link>
                <Link
                  href="/login/customer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#2563EB] transition-colors text-sm font-semibold"
                >
                  <UserRound className="w-4 h-4" />
                  {t.customerLogin}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
