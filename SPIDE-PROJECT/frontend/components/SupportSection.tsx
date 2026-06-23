"use client";

import { Phone, Mail, MessageSquare, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const SupportSection = () => {
  return (
    <>
      {/* Desktop Support Section */}
      <section className="hidden md:block py-24 bg-[#2563EB]">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[48px] p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Need Assistance?</h2>
              <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed">
                Our dedicated municipal support team is here to help you navigate services, report issues, or answer any questions about our city&apos;s operations.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-[#2563EB] px-10 py-5 rounded-2xl text-lg font-black shadow-xl flex items-center gap-3 transition-all whitespace-nowrap min-w-fit"
              >
                <MessageSquare className="w-6 h-6" />
                Get in Touch
              </motion.button>
              
              <div className="flex flex-col gap-6 text-white">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold">support@civicflow.gov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Support Section */}
      <section className="md:hidden px-6 py-12 bg-white">
        <div className="bg-[#2e6fe6] rounded-[24px] p-8 pb-10 flex flex-col items-center text-center shadow-md">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-5">
            <MessageCircle className="w-6 h-6 text-white stroke-[1.5]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Need Assistance?</h2>
          <p className="text-white/90 text-[15px] leading-relaxed mb-8 px-2 font-medium max-w-[280px]">
            Our municipal team is here to help you with all your queries and service requests.
          </p>
          <button className="bg-white text-[#2563EB] px-8 py-3.5 rounded-full font-bold text-[14px] shadow-sm w-fit transition-all hover:bg-slate-50">
            Get In Touch
          </button>
        </div>
      </section>
    </>
  );
};

export default SupportSection;
