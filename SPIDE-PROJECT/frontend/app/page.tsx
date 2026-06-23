"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import HighlightsTicker from "@/components/HighlightsTicker";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { publicApi } from "@/lib/api";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

const MOCK_UPDATES = [
  {
    id: 1,
    title: "City Council Approves New Downtown Revitalization Project",
    content: "The City Council voted unanimously to approve the comprehensive downtown revitalization plan. This $50M project will bring new green spaces, improved pedestrian walkways, and upgraded municipal infrastructure over the next three years.",
    category: "Development",
    publishedAt: "2026-03-24T10:00:00Z",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    title: "Annual Property Tax Assessments Mailed This Week",
    content: "Notice to all property owners: The 2026 property tax assessment notices have been mailed. Residents have 30 days from the date of receipt to file appeals. You can view your assessment online via the portal.",
    category: "Finance",
    publishedAt: "2026-03-20T14:30:00Z",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    title: "Registration Now Open for Summer Youth Programs",
    content: "Parks and Recreation is excited to announce that registration for all summer youth programs, including sports leagues, art camps, and educational workshops, is now officially open. Spots are filling up extremely fast.",
    category: "Community",
    publishedAt: "2026-03-18T09:15:00Z",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

  useEffect(() => {
    publicApi.getUpdates()
      .then((data) => {
        if (data && data.length > 0) {
          setUpdates(data);
        } else {
          setUpdates(MOCK_UPDATES);
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err?.message || "Network error");
        setUpdates(MOCK_UPDATES);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Navbar />
      <HighlightsTicker />
      <Hero />
      <Features />

      {error && (
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-8">
          <div className="rounded-md bg-red-50 border border-red-100 text-red-700 px-4 py-3 text-sm">
            Unable to load live updates — showing cached content. {error}
          </div>
        </div>
      )}

      {/* Split Divider */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center gap-8 -mb-12 relative z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-300" />
      </div>

      {/* Latest Updates Section */}
      <section className="py-16 md:py-32 bg-white">
        {/* Desktop Header */}
        <div className="hidden md:flex px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Latest Updates</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Stay informed with the newest announcements, project milestones, and upcoming community events in our city.
            </p>
          </div>
          <Link href="/news" className="px-8 py-3 rounded-full border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
            View All News <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden px-6 max-w-7xl mx-auto flex justify-between items-end mb-6">
          <h2 className="text-[22px] font-black text-slate-900 tracking-tight leading-none">Latest Updates</h2>
          <Link href="/news" className="text-[#3B82F6] text-[13px] font-bold flex items-center gap-1 mb-0.5">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid px-6 md:px-12 lg:px-24 max-w-7xl mx-auto md:grid-cols-3 gap-10">
          {loading ? (
            <div className="col-span-3 py-24 text-center text-slate-400 font-medium">Loading latest updates...</div>
          ) : updates.length === 0 ? (
            <div className="col-span-3 py-24 text-center text-slate-400 font-medium whitespace-pre-wrap">No updates available at this time.</div>
          ) : (
            updates.map((update) => (
              <motion.div
                key={update.id}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col h-full group hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[13px] font-bold text-slate-400 uppercase tracking-wider">
                    {update.publishedAt ? new Date(update.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "MARCH 15, 2024"}
                  </span>
                  <span className="px-4 py-1.5 bg-blue-50 text-[#2563EB] text-[11px] font-black rounded-full uppercase tracking-tight">
                    {update.category || "General"}
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-6 text-slate-900 leading-tight group-hover:text-[#2563EB] transition-colors line-clamp-2">
                  {update.title}
                </h3>

                <p className="text-slate-500 font-medium text-base leading-[1.6] mb-8 line-clamp-3">
                  {update.content}
                </p>

                <div className="mt-auto">
                  <Link href={`/news/${update.id}`} className="text-[#2563EB] text-sm font-black flex items-center gap-2 hover:gap-3 transition-all">
                    Read Story <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Mobile Vertical List */}
        <div className="md:hidden px-6 max-w-7xl mx-auto flex flex-col gap-4">
          {loading ? (
             <div className="py-12 text-center text-slate-400 font-medium text-sm">Loading latest updates...</div>
          ) : updates.length === 0 ? (
             <div className="py-12 text-center text-slate-400 font-medium text-sm">No updates available at this time.</div>
          ) : (
            updates.map((update) => (
              <div key={update.id} className="bg-white rounded-[24px] border border-slate-100 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
                {/* Top Row: Category and Date */}
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-[#eff6ff] text-[#2563EB] px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide">
                    {update.category || "General"}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[11px] font-semibold text-slate-500">
                      {update.publishedAt ? new Date(update.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "March 15, 2026"}
                    </span>
                  </div>
                </div>

                {/* Title and Content */}
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-2">
                  {update.title}
                </h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed mb-5 line-clamp-2">
                  {update.content}
                </p>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-auto">
                  <Link href={`/news/${update.id}`} className="text-[#3B82F6] text-[13px] font-bold flex items-center gap-1">
                    Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <img 
                    src={update.authorImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} 
                    alt="Author" 
                    className="w-6 h-6 rounded-full object-cover border border-slate-200" 
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <SupportSection />

      <Footer />
    </main>
  );
}

