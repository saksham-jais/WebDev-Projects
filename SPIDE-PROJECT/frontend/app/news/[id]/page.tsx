"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { publicApi } from "@/lib/api";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const fallbackNews = [
  {
    id: "1",
    title: "City Council Approves New Downtown Revitalization Project",
    content:
      "The City Council voted unanimously to approve the comprehensive downtown revitalization plan. This project will bring new green spaces, improved pedestrian walkways, and upgraded municipal infrastructure over the next three years.",
    category: "Development",
    publishedAt: "2026-03-24T10:00:00Z",
  },
  {
    id: "2",
    title: "Annual Property Tax Assessments Mailed This Week",
    content:
      "The 2026 property tax assessment notices have been mailed. Residents have 30 days from receipt to file appeals and can view assessments online via the citizen portal.",
    category: "Finance",
    publishedAt: "2026-03-20T14:30:00Z",
  },
  {
    id: "3",
    title: "Registration Now Open for Summer Youth Programs",
    content:
      "Registration for all summer youth programs, including sports leagues, art camps, and educational workshops, is now officially open. Spots are filling quickly.",
    category: "Community",
    publishedAt: "2026-03-18T09:15:00Z",
  },
];

export default function NewsDetailPage() {
  const params = useParams<{ id: string }>();
  const id = String(params?.id || "");

  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  const article = useMemo(
    () => updates.find((item) => String(item.id) === id),
    [updates, id]
  );

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-36 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-16 md:pb-24">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All News
        </Link>

        {loading ? (
          <div className="rounded-3xl border border-slate-100 p-8 md:p-10 text-slate-500 font-medium">
            Loading article...
          </div>
        ) : !article ? (
          <div className="rounded-3xl border border-slate-100 p-8 md:p-10">
            <h1 className="text-2xl font-black text-slate-900 mb-3">News Not Found</h1>
            <p className="text-slate-600 mb-6">
              We could not find the story for this link. It may have been removed or the URL is incorrect.
            </p>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm"
            >
              View All News
            </Link>
          </div>
        ) : (
          <article className="rounded-3xl border border-slate-100 bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wide">
                <Tag className="w-3.5 h-3.5" />
                {article.category || "General"}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm font-semibold">
                <Calendar className="w-4 h-4" />
                {article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "March 15, 2026"}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-slate-700 text-base md:text-lg leading-8 whitespace-pre-wrap">
              {article.content}
            </p>
          </article>
        )}
      </section>

      <Footer />
    </main>
  );
}
