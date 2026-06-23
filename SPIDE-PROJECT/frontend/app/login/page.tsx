"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Building2, UserRound, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6 py-28 md:py-32">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-black text-slate-900">Choose Your Login Type</h1>
            <p className="text-slate-500 mt-3 text-sm md:text-base">Select the appropriate portal to continue.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/admin/login" className="group">
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm group-hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">Official Login</h2>
                <p className="text-slate-600 mt-2 text-sm">For municipal staff, officers, and administrators.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-blue-700 font-bold text-sm">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>

            <Link href="/login/customer" className="group">
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm group-hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <UserRound className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900">Customer Login</h2>
                <p className="text-slate-600 mt-2 text-sm">For residents to access services, requests, and updates.</p>
                <div className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
