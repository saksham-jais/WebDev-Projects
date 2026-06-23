"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { publicApi } from "@/lib/api";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";

const fallbackNews = [
  {
    id: 1,
    title: "City Council Approves New Downtown Revitalization Project",
    content:
      "The City Council voted unanimously to approve the comprehensive downtown revitalization plan. This project will bring new green spaces, improved pedestrian walkways, and upgraded municipal infrastructure over the next three years.",
    category: "Development",
    publishedAt: "2026-03-24T10:00:00Z",
  },
  {
    id: 2,
    title: "Annual Property Tax Assessments Mailed This Week",
    content:
      "The 2026 property tax assessment notices have been mailed. Residents have 30 days from receipt to file appeals and can view assessments online via the citizen portal.",
    category: "Finance",
    publishedAt: "2026-03-20T14:30:00Z",
  },
  {
    id: 3,
    title: "Registration Now Open for Summer Youth Programs",
    content:
      "Registration for all summer youth programs, including sports leagues, art camps, and educational workshops, is now officially open. Spots are filling quickly.",
    category: "Community",
    publishedAt: "2026-03-18T09:15:00Z",
  },
  {
    id: 4,
    title: "Ward-Level Sanitation Drive Schedule Released",
    content:
      "Municipal sanitation teams will begin the quarterly ward-level cleanup campaign this week. Citizens can check their ward dates and report follow-up needs through the help desk.",
    category: "Sanitation",
    publishedAt: "2026-03-14T08:00:00Z",
  },
];

export default function NewsPage() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    publicApi
      .getUpdates()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setUpdates(data);
        } else {
          setUpdates(fallbackNews);
        }
      })
      .catch(() => setUpdates(fallbackNews))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return updates;
    const q = query.toLowerCase();
    return updates.filter((item) =>
      (item.title || "").toLowerCase().includes(q) ||
      (item.content || "").toLowerCase().includes(q) ||
      (item.category || "").toLowerCase().includes(q)
    );
  }, [updates, query]);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 md:pt-44 md:pb-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute top-0 right-1/2 w-[700px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full -mr-96 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full -ml-48 -mb-48" />

        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
          <div className="hidden md:block">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3B82F6] mb-6 block">
              City Information Desk
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              View All News
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
              Track every municipal update, policy notice, and service announcement in one place.
            </p>
          </div>

          <div className="md:hidden">
            <h1 className="text-[30px] font-black text-white mb-3 tracking-tight">View All News</h1>
            <p className="text-white/80 text-[15px] font-medium leading-[1.6] max-w-[320px]">
              Municipal updates, policy notices, and community announcements.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-10 md:py-16 max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm font-semibold">
            <Newspaper className="w-4 h-4" />
            {loading ? "Loading updates..." : `${filtered.length} news item(s)`}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, category, or content"
            className="w-full md:w-[420px] rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {loading ? (
            <div className="md:col-span-2 py-16 text-center text-slate-400 font-medium">Loading latest news...</div>
          ) : filtered.length === 0 ? (
            <div className="md:col-span-2 py-16 text-center text-slate-400 font-medium">No matching news found.</div>
          ) : (
            filtered.map((item, index) => (
              <motion.article
                key={item.id || index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-black uppercase tracking-wide">
                    {item.category || "General"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.publishedAt
                      ? new Date(item.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Mar 15, 2026"}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 mb-3 leading-tight">
                  {item.title}
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {item.content}
                </p>

                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
