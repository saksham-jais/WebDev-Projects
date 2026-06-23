"use client";

import { MapPin, Navigation, ExternalLink, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Visit Our Office</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <p className="text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          Conveniently located in the heart of downtown. Our doors are open for in-person consultations and municipal filing.
        </p>
      </div>

      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Desktop Map Layout */}
        <div className="hidden md:block relative h-[600px] w-full bg-slate-100 rounded-[48px] overflow-hidden shadow-inner border border-slate-100">
          {/* Mock Map Background - Using a subtle grid/pattern to mimic a map */}
          <div className="absolute inset-0 opacity-40" 
               style={{ 
                 backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
                 backgroundSize: `40px 40px, 100px 100px, 100px 100px` 
               }} 
          />
          
          {/* Map Marker and Popup */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-600/40 relative z-20"
            >
              <div className="w-10 h-10 border-4 border-white pb-1 flex items-center justify-center rounded-lg">
                <MapPin className="w-5 h-5" fill="currentColor" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rotate-45 -z-10" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 bg-white p-8 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-slate-50 min-w-[320px] text-center"
            >
              <h3 className="font-black text-xl text-slate-900 mb-2">City Hall Central</h3>
              <p className="text-slate-400 text-sm font-medium mb-8">
                123 Governance Plaza, Deoria,<br />Uttar Pradesh 274001
              </p>
              <div className="flex gap-3 justify-center">
                <button className="px-6 py-3 rounded-full border border-slate-100 text-[13px] font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-blue-500" /> Directions
                </button>
                <button className="px-6 py-3 rounded-full bg-blue-600 text-white text-[13px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                   View Larger <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Office Status Popup */}
          <div className="absolute bottom-10 right-10">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-[24px] shadow-xl border border-white/50 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Office Status</p>
                <p className="text-slate-900 font-bold">Currently Open <span className="text-slate-400 font-medium">(Closes 5PM)</span></p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Map Layout */}
        <div className="md:hidden relative w-full h-[380px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200">
          {/* Background Map Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22e0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale-[0.2]" />
          <div className="absolute inset-0 bg-black/10" />

          {/* Floating Center Card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[280px]">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-6 pb-7 shadow-xl flex flex-col items-center text-center"
            >
              {/* Map Pin Icon */}
              <div className="w-14 h-14 bg-[#3B82F6] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              
              <h3 className="text-[18px] font-[800] text-slate-900 mb-1 tracking-tight">Civic Center HQ</h3>
              <p className="text-[10px] font-[800] text-[#94A3B8] uppercase tracking-widest mb-6">Main Municipal Building</p>
              
              <button className="w-full py-3.5 bg-[#0F172A] text-white text-[13px] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-md">
                <Navigation className="w-4 h-4 fill-white" /> Get Directions
              </button>
            </motion.div>
          </div>

          {/* Live Traffic Badge */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-white/50 flex flex-row items-center gap-1.5">
               <Globe className="w-3.5 h-3.5 text-slate-600" />
               <span className="text-[11px] font-[800] text-slate-700">Live Traffic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
