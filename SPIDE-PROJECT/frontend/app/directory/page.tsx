"use client";

import { useMemo, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfficeHoursSection from "@/components/OfficeHoursSection";
import NeedAssistanceSection from "@/components/NeedAssistanceSection";
import SafeImage from "@/components/SafeImage";
import { Search, Mail, Phone, MapPin, ChevronRight, Users2, SlidersHorizontal, Clock, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { publicApi } from "@/lib/api";

const fallbackOfficials = [
  { name: "SRI YOGENDRA SINGH", title: "Administrator & Collector", dept: "Administrative Lead", email: "collector.civicflow@gov.in", phone: "+91 555 234 5678", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
  { name: "HON. ANJALI VERMA", title: "Chairman, Municipal Board", dept: "Executive Chairman", email: "chairman.office@civicflow.gov.in", phone: "+91 555 345 6789", image: "https://images.unsplash.com/photo-1494790108377-be9ce29b2933?q=80&w=2574&auto=format&fit=crop" },
  { name: "SRI RAJESH KUMAR", title: "Executive Officer", dept: "Service Execution", email: "eo.projects@civicflow.gov", phone: "+91 555 456 7890", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
  { name: "LINDA WU", title: "Urban Planning Lead", dept: "Development", email: "l.wu@civicflow.gov", phone: "+91 555 678-9012" },
  { name: "DAVID CHEN", title: "Parks & Recreation Manager", dept: "Community Services", email: "d.chen@civicflow.gov", phone: "+91 555 789-0123" },
];
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DirectoryContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<"none" | "az" | "dept">("none");
  const [officials, setOfficials] = useState(fallbackOfficials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    publicApi.getOfficials()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setOfficials(data.map((official: any) => ({
            name: official.name,
            title: official.designation || official.title || "Municipal Official",
            dept: official.department || official.dept || "Municipal Department",
            email: official.email,
            phone: official.phone,
            image: official.imageUrl || official.image,
          })));
        }
      })
      .catch(() => setOfficials(fallbackOfficials))
      .finally(() => setLoading(false));
  }, []);

  const filteredOfficials = useMemo(() => {
    let result = [...officials];

    // Apply Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(o =>
        o.name.toLowerCase().includes(q) ||
        o.title.toLowerCase().includes(q) ||
        o.dept.toLowerCase().includes(q)
      );
    }

    // Apply Sort
    if (sortBy === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "dept") {
      result.sort((a, b) => a.dept.localeCompare(b.dept));
    }

    return result;
  }, [searchQuery, sortBy]);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Page Header - Unified Portal Style */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-32 bg-[#0F172A] overflow-hidden">
        {/* Subtle background gradient glow */}
        <div className="absolute top-0 right-1/2 w-[800px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full -mr-96 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full -ml-48 -mb-48" />

        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            {/* Desktop Header Content */}
            <div className="hidden md:flex flex-col items-center w-full">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3B82F6] mb-6 block">
                Nagar Palika Parishad
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Municipal Directory
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                Find contact information and office locations for our municipal team. We are dedicated to transparent, accessible governance for every citizen.
              </p>
            </div>

            {/* Mobile Header Content */}
            <div className="md:hidden flex flex-col items-start text-left pb-4 w-full">
              <h1 className="text-[28px] font-bold text-white mb-3 tracking-tight">
                Municipal Directory
              </h1>
              <p className="text-white/80 text-[15px] font-medium leading-[1.6] max-w-[300px]">
                Find contact information and office locations for our municipal team. Core commitment to transparent governance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar - Floating Style from Image */}
      <section className="relative z-20 -mt-8 md:-mt-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Desktop Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex bg-white p-2 md:p-3 rounded-[24px] md:rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex-col md:flex-row items-center gap-3 border border-blue-50/50"
          >
            <div className="relative flex-1 w-full flex items-center group">
              <span className="absolute left-6 text-slate-400 w-[18px] h-[18px] group-focus-within:text-[#3B82F6] transition-colors">
                <Search className="w-[18px] h-[18px]" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, or department..."
                className="w-full bg-transparent text-slate-700 pl-14 pr-6 py-3.5 rounded-full border border-transparent focus:bg-slate-50 outline-none transition-all placeholder:text-slate-400 text-[14.5px] font-medium"
              />
            </div>
            <button className="w-full md:w-auto bg-[#3B82F6] text-white text-[11px] font-black uppercase tracking-wider px-8 py-4 rounded-full hover:bg-blue-600 transition-all flex items-center justify-center gap-2.5 shadow-md shadow-blue-500/20">
              <Users2 className="w-[15px] h-[15px]" />
              Directory Tips
            </button>
          </motion.div>

          {/* Mobile Floating Search Field */}
          <div className="md:hidden pb-2">
            <div className="bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 flex items-center">
              <Search className="w-[18px] h-[18px] text-slate-400 ml-3 mr-2" />
              <input 
                type="text" 
                placeholder="Search directory..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-slate-700 text-[15px] px-2 py-3 placeholder:text-slate-400 w-full"
              />
              <button 
                 onClick={() => setSortBy(sortBy === "az" ? "none" : "az")}
                 className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors">
                <SlidersHorizontal className="w-[18px] h-[18px] text-slate-600" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex mt-10 justify-between items-center px-4">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Showing <b className="text-slate-900">{loading ? "..." : filteredOfficials.length}</b> active officials
            </span>
            <div className="flex gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
              <button
                onClick={() => setSortBy(sortBy === "az" ? "none" : "az")}
                className={`hover:text-[#3B82F6] transition-colors ${sortBy === "az" ? "text-[#3B82F6]" : ""}`}
              >
                A-Z Sort
              </button>
              <button
                onClick={() => setSortBy(sortBy === "dept" ? "none" : "dept")}
                className={`hover:text-[#3B82F6] transition-colors ${sortBy === "dept" ? "text-[#3B82F6]" : ""}`}
              >
                By Department
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Officials Grid Desktop & Mobile */}
      <section className="pt-4 pb-8 md:py-24 bg-white overflow-hidden">
        
        {/* Desktop Officials Grid */}
        <div className="hidden md:grid px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredOfficials.length === 0 ? (
            <div className="col-span-full py-20 text-center text-slate-400 font-medium italic">No results found for &quot;{searchQuery}&quot;.</div>
          ) : (
            filteredOfficials.map((official, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 bg-white border border-slate-50 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all flex flex-col items-center text-center gap-10"
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-slate-100 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-xl ring-1 ring-slate-100">
                    <SafeImage
                      src={official.image || ""}
                      alt={official.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {/* Status Indicator from Image */}
                  <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white shadow-inner ${index === 2 ? 'bg-red-500' : 'bg-green-500'}`} />
                </div>

                <div>
                  <h3 className="font-black text-xl text-slate-900 mb-2 tracking-tight group-hover:text-[#3B82F6] transition-colors">{official.name}</h3>
                  <p className="text-[#3B82F6] text-[11px] font-black uppercase tracking-[0.15em] mb-4">{official.title}</p>
                  <div className="inline-block px-4 py-1 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100/50">
                    {official.dept}
                  </div>
                </div>

                <div className="space-y-6 w-full text-left pt-2">
                  <div className="flex items-center gap-4 text-sm text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400/60" />
                    <span className="truncate">{official.email}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
                    <Phone className="w-4 h-4 text-blue-400/60" />
                    {official.phone}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
                    <MapPin className="w-4 h-4 text-blue-400/60" />
                    <span className="text-xs">City Hall, Wing A, Suite {101 + index}</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-white border border-slate-100 text-slate-900 font-black text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md">
                  Contact Officer <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))
          )}
        </div>

        {/* Mobile Filters and Results Component */}
        <div className="md:hidden px-6 pt-2 pb-8">
          <div className="flex overflow-x-auto gap-2 pb-4 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {["All", "Administration", "Engineering", "Public Health"].map((filter, i) => (
              <button key={i} className={`whitespace-nowrap px-4 py-[7px] rounded-full text-[13px] font-bold ${i === 0 ? 'bg-[#3B82F6] text-white shadow-sm' : 'bg-[#F1F5F9] text-slate-600'}`}>
                {filter}
              </button>
            ))}
          </div>

          <p className="text-[11px] font-bold text-slate-400 tracking-wider mb-4 uppercase">
            {loading ? "Loading officers..." : `Showing ${filteredOfficials.length} Officers`}
          </p>

          <div className="flex flex-col gap-4">
            {filteredOfficials.length === 0 ? (
               <div className="py-20 text-center text-slate-400 font-medium italic text-sm">No results found for &quot;{searchQuery}&quot;.</div>
            ) : (
              filteredOfficials.map((official, index) => (
                <div key={index} className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] pt-5 pb-0 flex flex-col">
                  {/* Top Section */}
                  <div className="px-5 flex gap-4 items-center mb-5">
                    <div className="relative flex-shrink-0">
                      <SafeImage src={official.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format"} alt={official.name} className="w-14 h-14 rounded-full object-cover border border-slate-50 bg-pink-50" />
                      <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ${index % 2 === 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                    </div>
                    <div className="overflow-hidden">
                      <h3 className="text-[16px] font-bold text-slate-900 leading-tight truncate w-full">{official.name}</h3>
                      <p className="text-[#3B82F6] text-[13px] font-medium leading-snug">{official.title}</p>
                      <div className="mt-1.5 inline-flex items-center bg-[#F1F5F9] text-slate-600 px-3 py-0.5 rounded-full text-[10px] font-bold">
                        {official.dept}
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Row */}
                  <div className="mx-5 mb-5 bg-[#F8FAFC] rounded-2xl p-2.5 flex justify-between items-center px-4">
                    <button className="flex flex-1 justify-center items-center gap-1.5 text-[12px] font-bold text-slate-700 hover:text-[#3B82F6]">
                      <Phone className="w-4 h-4 text-[#3B82F6]" /> Call
                    </button>
                    <div className="w-px h-4 bg-slate-200" />
                    <button className="flex flex-1 justify-center items-center gap-1.5 text-[12px] font-bold text-slate-700 hover:text-[#3B82F6]">
                      <Mail className="w-4 h-4 text-[#3B82F6]" /> Email
                    </button>
                    <div className="w-px h-4 bg-slate-200" />
                    <button className="flex flex-1 justify-center items-center gap-1.5 text-[12px] font-bold text-slate-700 hover:text-[#3B82F6]">
                      <MapPin className="w-4 h-4 text-[#3B82F6]" /> Map
                    </button>
                  </div>

                  {/* Location Details */}
                  <div className="px-5 mb-4 flex items-center gap-2.5 text-[12px] font-medium text-slate-500">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    Nagar Palika Parishad, Deoria
                  </div>

                  {/* Bottom Accordion Trigger */}
                  <div className="border-t border-slate-100 p-3.5 px-5 flex justify-between items-center cursor-pointer hover:bg-slate-50 rounded-b-3xl">
                    <div className="flex items-center gap-2 text-[12.5px] font-bold text-slate-600">
                      <Clock className="w-4 h-4 text-[#3B82F6]" />
                      Office Hours & Availability
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Split Divider */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center gap-8 -mb-12 relative z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-300" />
      </div>

      <OfficeHoursSection />

      {/* Split Divider */}
      {/* <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center gap-8 -mb-12 relative z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-300" />
      </div> */}

      <NeedAssistanceSection />

      <Footer />
    </main>
  );
}

export default function DirectoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    }>
      <DirectoryContent />
    </Suspense>
  );
}
