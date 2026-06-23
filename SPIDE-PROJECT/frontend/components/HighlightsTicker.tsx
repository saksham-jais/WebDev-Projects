"use client";

import { Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const HighlightsTicker = () => {
  const { language } = useLanguage();

  const highlights =
    language === "hi"
      ? [
          "ऑनलाइन संपत्ति कर भुगतान पोर्टल 24x7 उपलब्ध",
          "नए नागरिक सेवा केंद्र सोमवार से शुरू",
          "ग्रीष्मकालीन युवा कार्यक्रम के लिए पंजीकरण खुला",
          "सार्वजनिक शिकायत ट्रैकिंग अब रियल-टाइम में",
          "वार्ड-स्तरीय स्वच्छता अभियान का नया शेड्यूल जारी",
        ]
      : [
          "Property tax payments are now available online 24x7",
          "New citizen service center opens this Monday",
          "Summer youth program registrations are now live",
          "Public grievance tracking now updates in real-time",
          "Ward-level sanitation drive schedule has been published",
        ];

  const scrollingItems = [...highlights, ...highlights];

  return (
    <section className="relative mt-15 md:mt-20 overflow-hidden border-y border-blue-200/40 bg-gradient-to-r from-[#0B1226] via-[#1E3A8A] to-[#1D4ED8] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,197,253,0.25),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(147,197,253,0.2),transparent_35%)]" />

      <div className="relative flex items-center gap-2 py-3 pl-3 md:pl-0">
        <div className="flex shrink-0 items-center gap-2 px-3 md:pl-12 lg:pl-24 md:pr-2 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.16em] md:tracking-[0.18em] text-blue-100/95">
          <Sparkles className="h-3.5 w-3.5" />
          {language === "hi" ? "हाइलाइट्स" : "Highlights"}
        </div>

        <div className="highlights-marquee w-full overflow-hidden">
          <div className="highlights-track">
            {scrollingItems.map((item, index) => (
              <div key={`${item}-${index}`} className="inline-flex shrink-0 items-center gap-3 px-5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-200/90" />
                <p className="text-sm md:text-[15px] font-semibold tracking-[0.01em] text-blue-50/95 whitespace-nowrap">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsTicker;