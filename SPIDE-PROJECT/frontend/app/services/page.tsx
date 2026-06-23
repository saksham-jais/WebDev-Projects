"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, FileText, Home, Droplets, Trash2, Heart, MessageSquare, Download, Clock, ChevronRight, Briefcase, Ruler, ShieldCheck, Phone, Search, SlidersHorizontal, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo, Suspense } from "react";
import { publicApi } from "@/lib/api";

// Helper to map icons and colors based on service type
// ... existing getServiceDesign ...
const getServiceDesign = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("tax")) return { icon: <CreditCard className="w-6 h-6" />, color: "bg-blue-600", light: "bg-blue-50", text: "text-blue-600" };
  if (t.includes("birth") || t.includes("death")) return { icon: <FileText className="w-6 h-6" />, color: "bg-indigo-600", light: "bg-indigo-50", text: "text-indigo-600" };
  if (t.includes("building") || t.includes("permission")) return { icon: <Home className="w-6 h-6" />, color: "bg-[#0EA5E9]", light: "bg-[#0EA5E9]/10", text: "text-[#0EA5E9]" }; // Light blue
  if (t.includes("water")) return { icon: <Droplets className="w-6 h-6" />, color: "bg-cyan-600", light: "bg-cyan-50", text: "text-cyan-600" };
  if (t.includes("sanitation") || t.includes("trash")) return { icon: <Trash2 className="w-6 h-6" />, color: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-600" };
  if (t.includes("trade") || t.includes("license")) return { icon: <Briefcase className="w-6 h-6" />, color: "bg-blue-700", light: "bg-blue-50", text: "text-blue-700" };
  if (t.includes("grievance")) return { icon: <MessageSquare className="w-6 h-6" />, color: "bg-blue-500", light: "bg-blue-50", text: "text-blue-500" };
  if (t.includes("form") || t.includes("download")) return { icon: <Download className="w-6 h-6" />, color: "bg-slate-600", light: "bg-slate-100", text: "text-slate-600" };
  if (t.includes("track")) return { icon: <Clock className="w-6 h-6" />, color: "bg-indigo-800", light: "bg-indigo-50", text: "text-indigo-800" };
  return { icon: <FileText className="w-6 h-6" />, color: "bg-blue-600", light: "bg-blue-50", text: "text-blue-600" };
};

const staticServices = [
  { id: "s1", title: "Property Tax", description: "Pay municipal taxes online securely and instantly.", category: "Finance" },
  { id: "s2", title: "Water Connection", description: "Apply for new water and sewerage connections.", category: "Utilities" },
  { id: "s3", title: "Waste Management", description: "Schedule door-to-door garbage pickup or report issues.", category: "Sanitation" },
  { id: "s4", title: "Permits/Licenses", description: "Get trade licenses, building approvals, and business permits.", category: "Admin" },
  { id: "s5", title: "Legal Services", description: "Birth/Death certificates, affidavits, and official forms.", category: "Legal" },
  { id: "s6", title: "Track Status", description: "Check real-time status of your ongoing applications.", category: "Services" },
  { id: "s7", title: "Public Grievance", description: "Register complaints regarding civic amenities and track resolution.", category: "Support" },
  { id: "s8", title: "Download Forms", description: "Access all official municipal forms in PDF format.", category: "Downloads" },
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [services, setServices] = useState<any[]>(staticServices);
  const [loading, setLoading] = useState(true);
  const [localSearch, setLocalSearch] = useState(initialSearch);

  useEffect(() => {
    publicApi.getServices()
      .then((data) => {
        if (data && data.length > 0) {
          setServices(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLocalSearch(initialSearch);
  }, [initialSearch]);

  const filteredServices = useMemo(() => {
    if (!localSearch.trim()) return services;
    const q = localSearch.toLowerCase();
    return services.filter(s => 
      s.title.toLowerCase().includes(q) || 
      s.description?.toLowerCase().includes(q) ||
      s.category?.toLowerCase().includes(q)
    );
  }, [services, localSearch]);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Page Header - Redesigned to match image */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-32 bg-[#0F172A] overflow-hidden">
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
                E-Services Portal
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                Access municipal services online from the comfort of your home. Simple, fast, and transparent governance at your fingertips.
              </p>
            </div>

            {/* Mobile Header Content */}
            <div className="md:hidden flex flex-col items-start text-left pb-4">
              <h1 className="text-[28px] font-bold text-white mb-3 tracking-tight">
                Municipal E-Services
              </h1>
              <p className="text-white/80 text-[15px] font-medium leading-[1.6] max-w-[300px]">
                Access digital government services from the comfort of your home. Fast, secure, and transparent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Floating Search Field */}
      <div className="md:hidden px-6 -mt-8 relative z-20 mb-10">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 flex items-center">
          <Search className="w-[18px] h-[18px] text-slate-400 ml-3 mr-2" />
          <input 
            type="text" 
            placeholder="Search services..." 
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-slate-700 text-[15px] px-2 py-3 placeholder:text-slate-400 w-full"
          />
          <button className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors">
            <SlidersHorizontal className="w-[18px] h-[18px] text-slate-600" />
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <section className="pt-2 pb-24 md:py-24 bg-white">
        {/* Desktop Header for Services Grid */}
        <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-8 mb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
              {localSearch ? `Search Results for "${localSearch}"` : "Available Services"}
            </h2>
            <p className="text-slate-400 font-medium">
              {localSearch ? `Showing ${filteredServices.length} matching services` : "Digitized services for seamless access to municipal facilities"}
            </p>
          </div>
          <div className="flex gap-4">
             <button 
               onClick={() => setLocalSearch("")}
               className={`px-6 py-2 rounded-full border border-slate-100 text-sm font-bold shadow-sm transition-all ${!localSearch ? 'bg-slate-50 text-slate-400' : 'bg-white text-slate-900 hover:bg-slate-50'}`}
             >
               All Services
             </button>
             <button className="px-6 py-2 rounded-full text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">Recently Added</button>
          </div>
        </div>

        {/* Mobile Header for Services Grid */}
        <div className="md:hidden px-6 flex justify-between items-end mb-4 pt-4">
          <h2 className="text-[17px] font-extrabold text-[#111827]">
            {localSearch ? 'Search Results' : 'Featured Services'}
          </h2>
          <Link href="#" className="text-[13px] font-bold text-[#3B82F6] mb-0.5">
            View All
          </Link>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid px-6 md:px-12 lg:px-24 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-32 text-center text-slate-400 font-medium">Loading digital portal...</div>
          ) : filteredServices.length === 0 ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-32 text-center text-slate-400 font-medium italic">
              {localSearch ? `No matches found for "${localSearch}". Try a different term.` : "No services are currently taking requests."}
            </div>
          ) : (
            filteredServices.map((service, index) => {
              const design = getServiceDesign(service.title);
              const isActive = service.isActive !== false;
              return (
                <motion.div
                  key={service.id || index}
                  whileHover={{ y: -8 }}
                  className="p-10 rounded-[32px] border border-slate-50 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-start gap-10 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all"
                >
                  <div className="flex justify-between items-start w-full">
                    <div className={`w-14 h-14 ${design.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                      {design.icon}
                    </div>
                    <span className="text-[10px] font-bold text-[#64748B] bg-slate-50 px-3 py-1 rounded-full uppercase tracking-widest border border-slate-100/50">
                      {isActive ? (service.category || "Available") : "Inactive"}
                    </span>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <h3 className="font-black text-xl text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 font-medium">
                      {service.description || `Digitized services for seamless access to ${service.title.toLowerCase()} facilities.`}
                    </p>
                  </div>

                  {service.link ? (
                    <a
                      href={service.link}
                      className="flex items-center gap-2 text-blue-600 text-[11px] font-black uppercase tracking-wider hover:gap-3 transition-all"
                    >
                      Launch Service <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-blue-600 text-[11px] font-black uppercase tracking-wider hover:gap-3 transition-all">
                      Launch Service <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              );
            })
          )}
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden px-6 grid grid-cols-2 gap-3 pb-8">
          {loading ? (
             <div className="col-span-2 py-16 text-center text-slate-400 font-medium text-sm">Loading services...</div>
          ) : filteredServices.length === 0 ? (
             <div className="col-span-2 py-16 text-center text-slate-400 font-medium italic text-sm">
               {localSearch ? `No matches found for "${localSearch}".` : "No services available."}
             </div>
          ) : (
            filteredServices.map((service, index) => {
              const design = getServiceDesign(service.title);
              const isActive = service.isActive !== false;
              return (
                <div key={service.id || index} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.015)] flex flex-col">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${design.light} ${design.text} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-[1.5]`}>
                    {design.icon}
                  </div>
                  <h3 className="text-[13.5px] font-bold text-slate-900 mb-1 leading-snug tracking-tight">{service.title}</h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mb-5">
                    {service.description || `Access ${service.title.toLowerCase()}`}
                  </p>
                  
                  <div className="mt-auto pt-2 flex justify-between items-center border-slate-50">
                    <span className="text-[10px] font-bold text-slate-600">{isActive ? "Available" : "Inactive"}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-32 bg-white md:bg-slate-50/50 relative overflow-hidden">
        {/* Subtle background pattern/glow (Desktop only) */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-100/20 blur-[120px] rounded-full -z-0" />
        
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
          
          {/* Desktop Heading */}
          <div className="hidden md:flex max-w-3xl mx-auto mb-20 text-center flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#1E293B] mb-6 tracking-tight text-center">How It Works</h2>
            <p className="text-[#94A3B8] text-xl font-medium leading-relaxed max-w-2xl mx-auto text-center">
              Follow these four simple steps to complete any official request through our digital portal without visiting city hall.
            </p>
          </div>

          {/* Desktop Steps Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-blue-100 -z-0" />
            
            {[
              { num: "01", title: "Choose Service", desc: "Select the appropriate municipal service from our catalog of digital offerings." },
              { num: "02", title: "Fill Application", desc: "Complete the secure online application form with required details and information." },
              { num: "03", title: "Submit Documents", desc: "Upload digital copies of necessary documents and make online payments if required." },
              { num: "04", title: "Track Progress", desc: "Monitor your application status and receive digital updates until final completion." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-12">
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-slate-100 group-hover:text-blue-50 transition-colors -z-0 select-none">
                    {step.num}
                  </span>
                  <div className="w-14 h-14 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-[#2563EB] font-black text-lg relative z-10 shadow-sm group-hover:border-[#2563EB]/50 transition-all group-hover:scale-110">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-black text-[#1E293B] mb-4 tracking-tight text-center">{step.title}</h4>
                <p className="text-[#64748B] text-sm font-medium leading-[1.8] max-w-[240px] text-center px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile How It Works UI (Matches Timeline Mockup) */}
          <div className="md:hidden bg-[#F8FAFC] rounded-[32px] p-6 pb-8 border border-slate-100 mb-6">
            <h2 className="text-[19px] font-[800] text-[#1E293B] mb-8 tracking-tight">How It Works</h2>
            
            <div className="flex flex-col">
              {[
                { num: "01", title: "Select Service", desc: "Choose from our digitized catalog of municipal services." },
                { num: "02", title: "Fill Application", desc: "Complete the online form with your required details." },
                { num: "03", title: "Submit & Pay", desc: "Upload documents and make a secure digital payment." },
                { num: "04", title: "Track Progress", desc: "Receive real-time updates via SMS and dashboard." }
              ].map((step, idx, arr) => (
                <div key={idx} className="flex gap-5 relative">
                  {/* Timeline Column */}
                  <div className="flex flex-col items-center">
                    <div className="w-[38px] h-[38px] rounded-full bg-[#EFF6FF] border border-[#BFDBFE]/60 flex items-center justify-center text-[#2563EB] font-bold text-[13px] z-10 shrink-0">
                      {step.num}
                    </div>
                    {/* Dashed Line */}
                    {idx < arr.length - 1 && (
                      <div className="w-px flex-1 border-l-2 border-dashed border-slate-200 mt-2 mb-2"></div>
                    )}
                  </div>
                  
                  {/* Content Column */}
                  <div className={`flex flex-col pt-1.5 ${idx < arr.length - 1 ? 'pb-8' : 'pb-0'}`}>
                    <h4 className="text-[14.5px] font-[800] text-[#1E293B] mb-1.5 leading-none tracking-tight">{step.title}</h4>
                    <p className="text-[13px] text-[#64748B] font-medium leading-relaxed max-w-[240px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="pb-12 md:pb-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Desktop CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex relative bg-[#2563EB] rounded-[48px] overflow-hidden p-12 md:p-20 text-center flex-col items-center gap-10 shadow-[0_40px_100px_rgba(37,99,235,0.15)]"
          >
            {/* Subtle gloss overlay to match design */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            {/* Design elements from image: check icon box */}
            <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#2563EB]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Need Help with E-Services?</h2>
              <p className="text-blue-50/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Our dedicated digital support team is available 24/7 to assist you with application submissions, technical issues, or document requirements.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="tel:555297530" className="px-10 py-5 bg-white text-[#2563EB] font-black rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                Call: (555) 297-530
              </Link>
              <Link href="mailto:support@civicflow.gov" className="px-10 py-5 bg-white text-[#2563EB] font-black rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center">
                Email Support
              </Link>
            </div>

            <div className="relative z-10 flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              All communications are encrypted and secure
            </div>
          </motion.div>

          {/* Mobile CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:hidden bg-[#2e6fe6] rounded-[24px] p-8 pb-10 flex flex-col items-center text-center shadow-md mb-8"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6 text-white stroke-[1.5]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Need Help?</h2>
            <p className="text-white/90 text-[15px] leading-relaxed mb-8 px-2 font-medium max-w-[280px]">
              Our support team is available 24/7 to assist with applications or technical issues.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Link href="tel:555297530" className="bg-white text-[#2563EB] px-8 py-3.5 rounded-full font-bold text-[14px] shadow-sm transition-all hover:bg-slate-50 text-center w-full flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Support
              </Link>
              <Link href="mailto:support@civicflow.gov" className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-[14px] transition-all hover:bg-white/10 text-center w-full flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Email Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}
