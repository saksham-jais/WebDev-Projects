"use client";

import { Home, Users, FileText, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function MobileNav() {
  const pathname = usePathname();
  const { language } = useLanguage();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const t = {
    home: language === "hi" ? "होम" : "Home",
    eService: language === "hi" ? "ई-सेवा" : "E-Service",
    directory: language === "hi" ? "निर्देशिका" : "Directory",
    taxCollector: language === "hi" ? "टैक्स कलेक्टर" : "Tax Collector",
  };

  const navItems = [
    { name: t.home, href: "/", icon: Home },
    { name: t.eService, href: "/services", icon: FileText },
    { name: t.directory, href: "/directory", icon: Users },
    { name: t.taxCollector, href: "/tax-collector", icon: UserRound },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200/60 pb-[env(safe-area-inset-bottom)] z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="grid grid-cols-4 items-center gap-1 px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 w-full py-1 ${
                isActive ? "text-[#3B82F6]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className={`text-[10px] leading-tight whitespace-nowrap text-center ${isActive ? 'font-bold' : 'font-semibold'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
