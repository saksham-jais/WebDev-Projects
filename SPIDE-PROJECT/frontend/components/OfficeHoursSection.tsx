"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import SafeImage from "./SafeImage";

export default function OfficeHoursSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#3B82F6] rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100/50">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Standard <br /> Office Hours
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed mb-12">
              Our municipal departments are open for in-person consultations during standard business hours. For specific departmental appointments, please contact the officer directly.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-[22px] flex items-center justify-center flex-shrink-0 group-hover:border-blue-100 transition-colors">
                  <Calendar className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Monday – Friday</h4>
                  <p className="text-slate-400 font-medium">Main Hall: 8:00 AM – 5:00 PM</p>
                  <p className="text-slate-400 font-medium">E-Service Kiosks: 24/7 Access</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-[22px] flex items-center justify-center flex-shrink-0 group-hover:border-blue-100 transition-colors">
                  <Clock className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Saturday & Holidays</h4>
                  <p className="text-slate-400 font-medium">Main Hall: Closed</p>
                  <p className="text-slate-400 font-medium">Emergency Helpdesk: Available via Phone</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-16 px-10 py-5 bg-[#3B82F6] text-white rounded-[24px] font-black text-xs uppercase tracking-[0.15em] hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25 flex items-center gap-3"
            >
              Book an Appointment
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right Column: Location Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Card Container */}
            <div className="relative rounded-[56px] overflow-hidden aspect-[4/5] shadow-[0_40px_100px_rgba(0,0,0,0.1)] group bg-slate-100">
              <SafeImage
                src="/civic_center_hall.png"
                alt="Main Civic Center Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                fallbackType="building"
              />
              
              {/* Location Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
                <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#3B82F6] mb-4">Location</span>
                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Main Civic Center Plaza</h3>
                <p className="text-white/70 font-medium text-lg">452 Governance Way, CivicFlow Metro</p>
              </div>
            </div>

            {/* Verified Badge - Moved OUTSIDE overflow-hidden to prevent clipping of shadow */}
            <div className="absolute -top-4 -right-4 p-7 bg-white/95 backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-start gap-4 max-w-[260px] border border-white/20 z-20">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-widest text-[#3B82F6] mb-1">Verified</span>
                <p className="text-slate-900 text-sm font-bold leading-snug">
                  98% In-person satisfaction rate for 2024
                </p>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
