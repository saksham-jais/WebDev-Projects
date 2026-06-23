"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, TrendingUp, Users, ShieldCheck, Calendar, Clock, MapPin, Mail, ChevronRight, Building2, Trophy, ExternalLink, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { publicApi } from "@/lib/api";

const fallbackImpacts = [
  { label: "2.5 Lakh+", sub: "Citizens Served", icon: Users },
  { label: "50+", sub: "Municipal Projects", icon: Building2 },
  { label: "15+", sub: "Awards Received", icon: Trophy },
  { label: "98%", sub: "Service Rating", icon: TrendingUp },
];

const fallbackLeaders = [
  { 
    name: "Honourable Anjali Verma", 
    role: "Chairman, Municipal Board", 
    badge: "Chairman",
    email: "chairman.office@civicflow.gov.in",
    location: "Main Municipal Office, Sector 1",
    image: "https://images.unsplash.com/photo-1494790108377-be9ce29b2933?q=80&w=2574&auto=format&fit=crop",
    quote: '"Dedicated to sustainable urban development and transparent governance for over 15 years."'
  },
  { 
    name: "Sri Sanjay Kumar Tiwari", 
    role: "Executive Officer", 
    badge: "Executive Officer",
    email: "eo.projects@civicflow.gov",
    location: "Deoria Nagar Palika Parishad",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
    quote: '"Expert in municipal administration and digital transformation of public services."'
  },
  { 
    name: "Dr. Priya Sharma", 
    role: "Health Commissioner", 
    badge: "Health Commissioner",
    email: "priya.sharma@civicflow.gov",
    location: "Public Health Wing, NPP",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    quote: '"Leading city-wide health initiatives and sanitation excellence programs."'
  },
];

export default function AboutPage() {
  const [stats, setStats] = useState<any>(null);
  const [officials, setOfficials] = useState(fallbackLeaders);

  useEffect(() => {
    publicApi.getStats()
      .then(setStats)
      .catch(() => setStats(null));

    publicApi.getOfficials()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setOfficials(data.slice(0, 3).map((official: any) => ({
            name: official.name,
            role: official.designation || "Municipal Officer",
            badge: official.department || "Official",
            email: official.email,
            location: official.department || "Municipal Office",
            image: official.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
            quote: `"Serving the city through ${official.department || "municipal operations"}."`,
          })));
        }
      })
      .catch(() => setOfficials(fallbackLeaders));
  }, []);

  const impacts = stats
    ? [
        { label: `${stats.totalUsers ?? 0}`, sub: "Registered Users", icon: Users },
        { label: `${stats.totalServices ?? 0}`, sub: "Live Services", icon: Building2 },
        { label: `${stats.totalOfficials ?? 0}`, sub: "Officials Listed", icon: Trophy },
        { label: `${stats.totalUpdates ?? 0}`, sub: "City Updates", icon: TrendingUp },
      ]
    : fallbackImpacts;

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Page Header - Redesigned to match Services Portal Style */}
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
                About CivicFlow
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                Empowering citizens through transparent governance and innovative digital transformation for a smarter, more connected community.
              </p>
            </div>

            {/* Mobile Header Content */}
            <div className="md:hidden flex flex-col items-start text-left pb-4 w-full">
              <h1 className="text-[28px] font-bold text-white mb-3 tracking-tight">
                About CivicFlow
              </h1>
              <p className="text-white/80 text-[15px] font-medium leading-[1.6] max-w-[300px]">
                Empowering citizens through transparent governance and innovative digital transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-20 -mt-6 md:-mt-24 px-6 md:px-12 lg:px-24 mb-24 md:mb-40">
        <div className="max-w-7xl mx-auto flex justify-center">
          {/* Desktop Mission UI */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex max-w-5xl w-full rounded-[48px] shadow-[0_40px_130px_rgba(0,0,0,0.06)] border border-white/25 flex-col items-center text-center relative overflow-hidden"
          >
            {/* Multi-layered Glass Background for perfect bleed */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl -z-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/85 to-white/100 -z-10" />
            
            <div className="relative z-10 pt-16 pb-20 px-10 md:px-16 lg:px-24 flex flex-col items-center">
              <div className="w-20 h-20 bg-[#2563EB]/5 rounded-[24px] flex items-center justify-center text-[#2563EB] mb-8 shadow-inner border border-[#2563EB]/10">
                <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />
              </div>
              
              <h2 className="text-4xl font-black mb-10 text-[#0F172A] tracking-tight">Our Mission</h2>
              
              <div className="space-y-8 max-w-4xl text-center">
                <p className="text-[#64748B] text-lg font-medium leading-[1.8] tracking-tight">
                  CivicFlow Nagar Palika Parishad is the municipal governing body responsible for civic administration and infrastructure development in our city. Committed to creating a clean, green, and inclusive urban environment, the Parishad strives to improve the quality of life for its citizens through effective governance, sanitation, public services, and modern urban planning.
                </p>
                <p className="text-[#64748B] text-lg font-medium leading-[1.8] tracking-tight">
                  With a focus on transparency, digitization, and community participation, CivicFlow Nagar Palika is steadily working toward building a sustainable and progressive city that serves as a model for modern administration.
                </p>
              </div>
              
              <button className="mt-12 flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-slate-100 bg-white text-slate-900 font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group/btn w-auto">
                Read Our Charter <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Mobile Mission UI (Matches Screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:hidden bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 p-6 relative overflow-hidden"
          >
            {/* Subtle top gradient from image */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/70 to-transparent -z-10" />
            
            <div className="flex items-center gap-3 mb-5 mt-2">
               <div className="w-1 h-6 bg-[#3B82F6] rounded-full" />
               <h2 className="text-[19px] font-bold text-slate-800 tracking-tight">Our Mission</h2>
            </div>

            <p className="text-[14px] leading-[1.7] text-slate-500 mb-6 font-medium">
              Deoria Nagar Palika Parishad is the municipal governing body responsible for civic administration and infrastructure development in Deoria city.<br/>
              With a focus on <strong className="text-[#3B82F6] font-[700]">transparency</strong>, <strong className="text-[#3B82F6] font-[700]">digitization</strong>, and community participation, we are steadily working toward building a resilient urban environment.
            </p>

            <button className="text-[14px] font-[700] text-[#3B82F6] flex items-center gap-1.5 hover:underline transition-colors mt-2">
               Read Governance Report <ExternalLink className="w-4 h-4 ml-0.5 stroke-[2.5]" />
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Split Divider */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center gap-8 -mb-12 relative z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-300" />
      </div>

      {/* Impact Section */}
      <section className="py-12 md:py-32 bg-white">
        {/* Desktop Heading */}
        <div className="hidden md:block px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E293B] mb-6 tracking-tight">Our Impact</h2>
          <p className="text-[#94A3B8] text-xl font-medium">Measured results of our commitment to civic excellence and public service.</p>
        </div>

        {/* Mobile Heading */}
        <div className="md:hidden px-6 text-left mb-6">
          <h2 className="text-[22px] font-bold text-[#1E293B] mb-1 tracking-tight">Our Impact</h2>
          <p className="text-[#64748B] text-[13px] font-medium">The numbers that define our growth in 2024</p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10 }}
              className="p-10 rounded-[32px] border border-slate-50 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.03)] text-center flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 bg-blue-50/50 rounded-full flex items-center justify-center text-[#2563EB]">
                <impact.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <div>
                <div className="text-4xl font-black text-[#1E293B] mb-2">{impact.label}</div>
                <div className="text-[11px] text-[#94A3B8] font-black uppercase tracking-[0.15em]">{impact.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex overflow-x-auto gap-4 px-6 pb-4 snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {impacts.map((impact, index) => {
            const colors = [
              "text-[#3B82F6]",
              "text-[#10B981]",
              "text-[#F59E0B]",
              "text-[#8B5CF6]"
            ];
            const colorClass = colors[index % colors.length];
            return (
              <div 
                key={index}
                className="snap-start flex-shrink-0 w-[140px] h-[160px] rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-5 flex flex-col"
              >
                <impact.icon className={`w-5 h-5 ${colorClass} mb-4`} strokeWidth={2.5} />
                <div className="mt-auto">
                  <div className="text-[22px] font-black text-[#1E293B] mb-0.5 tracking-tight leading-none">{impact.label}</div>
                  <div className="text-[12px] text-[#64748B] font-medium leading-snug">{impact.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Split Divider */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center gap-8 -mb-12 relative z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-300" />
      </div>

      {/* Leadership Section */}
      <section className="py-12 md:py-32 bg-white relative">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
          {/* Desktop Heading */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-[#1E293B] mb-6 tracking-tight">Our Leadership</h2>
              <p className="text-[#94A3B8] text-xl font-medium leading-relaxed">Meet the dedicated officials driving our city&apos;s vision forward with integrity and passion.</p>
            </div>
            <button className="px-8 py-3 rounded-full border border-slate-100 text-[#1E293B] font-bold text-sm hover:bg-slate-50 transition-all shadow-sm bg-white">
              Full Directory
            </button>
          </div>
          
          {/* Mobile Heading */}
          <div className="md:hidden text-left mb-6 mt-4">
            <h2 className="text-[24px] font-bold text-[#1E293B] mb-1 tracking-tight">Leadership</h2>
            <p className="text-[#64748B] text-[13px] font-medium">The visionaries leading our municipal success</p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {officials.map((leader, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[40px] border border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                <div className="pt-12 pb-8 px-10 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  
                  <div className="mb-8">
                    <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#2563EB] rounded-full text-[11px] font-black uppercase tracking-wider mb-4">
                      {leader.badge}
                    </div>
                    <h3 className="text-2xl font-black text-[#1E293B] mb-1 tracking-tight">{leader.name}</h3>
                    <p className="text-[#94A3B8] text-sm font-semibold">{leader.role}</p>
                  </div>
                  
                  <div className="flex flex-col gap-4 text-sm text-[#64748B] font-medium w-full pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-3 justify-center">
                      <MapPin className="w-4 h-4 text-[#2563EB]/60" />
                      <span>{leader.location}</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <Mail className="w-4 h-4 text-[#2563EB]/60" />
                      <span>{leader.email}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-6 bg-slate-50/50 hover:bg-blue-50 text-[#2563EB] font-black text-sm uppercase tracking-widest transition-all border-t border-slate-100">
                  View Office Profile
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile List */}
          <div className="md:hidden flex flex-col gap-4 mb-4">
            {officials.map((leader, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-5 flex flex-col"
              >
                {/* Top flex row */}
                <div className="flex gap-4 items-center mb-5">
                  <div className="relative flex-shrink-0">
                    <img src={leader.image} alt={leader.name} className="w-16 h-16 rounded-full object-cover shadow-sm" />
                  </div>
                  <div className="overflow-hidden flex-1">
                    <span className="inline-block bg-[#F1F6FD] text-[#4F627A] font-bold px-3 py-1 rounded-full mb-1 text-[10px] leading-none w-fit">
                      {leader.badge}
                    </span>
                    <h3 className="text-[16px] font-[800] text-[#1E293B] leading-tight truncate w-full">{leader.name}</h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] mt-1 font-medium truncate">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                      <span className="truncate">{leader.location}</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[14px] italic text-[#64748B] mb-5 leading-relaxed font-medium">
                  {leader.quote}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                    <Phone className="w-4 h-4" /> Call
                  </button>
                  <button className="flex-1 flex justify-center items-center gap-2 py-3 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                    <Mail className="w-4 h-4" /> Email
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-slate-50/80 rounded-[40px] border border-slate-100 flex items-center gap-8 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-[#2563EB] rounded-[24px] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#1E293B] mb-2 tracking-tight">Weekly Review Meetings</h4>
                <p className="text-[#64748B] font-medium">Every Monday at 10:00 AM, Town Hall Meeting Room 1.</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-[#E0F2FE]/50 rounded-[40px] border border-blue-100 flex items-center gap-8 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-[#0EA5E9] rounded-[24px] flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:rotate-6 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#1E293B] mb-2 tracking-tight">Grievance Cell Open Hours</h4>
                <p className="text-[#64748B] font-medium">Tue & Thu, 2:00 PM - 5:00 PM. No appointment needed.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-12 md:pb-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Desktop CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex relative bg-[#2563EB] rounded-[48px] overflow-hidden p-12 md:p-20 text-center flex-col items-center gap-10 shadow-[0_40px_100px_rgba(37,99,235,0.15)]"
          >
            {/* Subtle gloss overlay to match design */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-5xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter md:whitespace-nowrap">Experience Our E-Services</h2>
              <p className="text-blue-50/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Ready to engage with our digital platform? Access permits, pay taxes, and track requests directly from your dashboard.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/services" className="px-10 py-5 bg-white text-[#2563EB] font-black rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/10 text-center">
                Go to Services
              </Link>
              <Link href="/support" className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-all text-center">
                Help Center
              </Link>
            </div>
          </motion.div>

          {/* Mobile CTA (Matches SupportSection Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:hidden bg-[#2e6fe6] rounded-[24px] p-8 pb-10 flex flex-col items-center text-center shadow-md mb-8"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-white stroke-[1.5]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">E-Services</h2>
            <p className="text-white/90 text-[15px] leading-relaxed mb-8 px-2 font-medium max-w-[280px]">
              Access permits, pay taxes, and track requests seamlessly from your phone.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Link href="/services" className="bg-white text-[#2563EB] px-8 py-3.5 rounded-full font-bold text-[14px] shadow-sm transition-all hover:bg-slate-50 text-center w-full">
                Go to Services
              </Link>
              <Link href="/support" className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-[14px] transition-all hover:bg-white/10 text-center w-full">
                Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

