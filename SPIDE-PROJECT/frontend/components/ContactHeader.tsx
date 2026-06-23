"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <section className="relative pt-32 pb-6 md:pt-44 md:pb-32 bg-[#0F172A] overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute top-0 right-1/2 w-[800px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full -mr-96 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full -ml-48 -mb-48" />
      
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop Header Content */}
          <div className="hidden md:flex flex-col items-start text-left">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3B82F6] mb-6 block">
              Nagar Palika Parishad
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Citizen Support Center
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
              Whether you&apos;re reporting an issue, seeking information, or just want to say hello, the Civic Connect team is ready to listen and assist.
            </p>
          </div>

          {/* Mobile Header Content */}
          <div className="md:hidden flex flex-col items-start text-left pb-4 w-full">
            <h1 className="text-[28px] font-bold text-white mb-3 tracking-tight">
              Citizen Support Center
            </h1>
            <p className="text-white/80 text-[15px] font-medium leading-[1.6] max-w-[300px]">
              Whether you&apos;re reporting an issue or seeking information, our team is ready to assist.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
