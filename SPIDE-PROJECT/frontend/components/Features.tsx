"use client";

import { Building2, Users, FileText, HelpCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Urban Development",
    description: "Planning smart cities with sustainable architecture and green spaces for a better tomorrow."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Citizen Services",
    description: "Streamlining government interactions with digital-first solutions and 24/7 accessibility."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Transparency",
    description: "Ensuring open access to municipal records, budgets, and project updates for all citizens."
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "24/7 Support",
    description: "A dedicated helpdesk ready to assist with any civic concerns or service inquiries."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Desktop Header */}
        <div className="text-center mb-24 hidden md:block">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">Our Commitment</h2>
          <div className="w-16 h-1.5 bg-[#2563EB] mx-auto mb-10 rounded-full" />
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Dedicated to improving the quality of life for all citizens through modern infrastructure, transparent leadership, and sustainable growth.
          </p>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-start justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-1">Our Commitment</h2>
            <p className="text-sm text-slate-500 font-medium">Dedicated to improving quality of life</p>
          </div>
          <TrendingUp className="w-6 h-6 text-indigo-200 mt-1" />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="p-10 rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center group hover:shadow-[0_40px_80px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-[28px] flex items-center justify-center text-[#2563EB] mb-10 transition-colors group-hover:bg-[#2563EB] group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 leading-tight">{feature.title}</h3>
              <p className="text-slate-500 font-medium text-base leading-[1.6]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="min-w-[260px] snap-center p-5 rounded-2xl border border-slate-200 bg-white flex flex-col items-start shadow-sm"
            >
              <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center text-white mb-4 [&>svg]:w-6 [&>svg]:h-6">
                {feature.icon}
              </div>
              <h3 className="text-[17px] font-bold mb-1.5 text-slate-900 tracking-tight">{feature.title}</h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed mb-6 line-clamp-3">
                {feature.description}
              </p>
              <div className="mt-auto">
                <a href="#" className="text-sm font-semibold text-[#3B82F6]">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
