"use client";

import Link from "next/link";
import { HelpCircle, AlertCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <>
      {/* Desktop CTA */}
      <section className="hidden md:block py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Need a faster resolution?</h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Browse our frequent questions or report public issues directly through our dedicated portal for immediate tracking.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/faqs" 
                className="px-10 py-5 bg-white border border-slate-100 text-slate-900 font-bold rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3"
              >
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Visit FAQ Center
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="/report" 
                className="px-10 py-5 bg-[#3B82F6] text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
              >
                <AlertCircle className="w-5 h-5" />
                Report an Issue
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile CTA (Matches SupportSection / Need Assistance design) */}
      <section className="md:hidden px-6 py-6 pb-20 bg-white">
        <div className="bg-[#2e6fe6] rounded-[24px] p-8 pb-10 flex flex-col items-center text-center shadow-md">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-5">
            <MessageCircle className="w-6 h-6 text-white stroke-[1.5]" />
          </div>
          <h2 className="text-[22px] font-bold text-white mb-3">Need a faster resolution?</h2>
          <p className="text-white/90 text-[14px] leading-relaxed mb-8 px-2 font-medium">
            Browse our frequent questions or report public issues directly for faster tracking.
          </p>
          
          <div className="flex flex-col gap-3 w-full max-w-[280px]">
            <Link 
              href="/faqs" 
              className="bg-white text-[#2563EB] px-8 py-3.5 rounded-full font-bold text-[14px] shadow-sm w-full transition-all hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-4 h-4" /> Visit FAQ
            </Link>
            
            <Link 
              href="/report" 
              className="bg-blue-700/50 border border-blue-400/30 text-white px-8 py-3.5 rounded-full font-bold text-[14px] shadow-sm w-full transition-all hover:bg-blue-600 flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-4 h-4" /> Report Issue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
