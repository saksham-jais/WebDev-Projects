"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HelpCircle, AlertCircle } from "lucide-react";

export default function NeedAssistanceSection() {
  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Need further assistance?</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            Our support team is available to help you navigate our services and connect you with the right department.
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
  );
}
