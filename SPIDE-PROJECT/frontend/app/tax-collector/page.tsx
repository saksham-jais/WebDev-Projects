"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { motion } from "framer-motion";
import { ChevronRight, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { useMemo, useState } from "react";

const taxCollectors = [
  {
    ward: "Ward 1",
    name: "Sri Rajesh Kumar",
    title: "Tax Collector",
    dept: "Revenue & Assessment",
    email: "eo.projects@civicflow.gov",
    phone: "+91 555 456 7890",
    address: "City Hall, Wing A, Suite 103",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    ward: "Ward 1",
    name: "Neha Sinha",
    title: "Assistant Tax Collector",
    dept: "Revenue & Assessment",
    email: "neha.sinha@civicflow.gov",
    phone: "+91 555 456 7891",
    address: "City Hall, Wing A, Suite 104",
    image: "https://images.unsplash.com/photo-1494790108377-be9ce29b2933?q=80&w=1200&auto=format&fit=crop",
  },
  {
    ward: "Ward 2",
    name: "Priya Sharma",
    title: "Tax Collector",
    dept: "Revenue & Assessment",
    email: "tax.ward2@civicflow.gov",
    phone: "+91 555 467 8901",
    address: "Zone Office B, Ward 2",
    image: "https://images.unsplash.com/photo-1494790108377-be9ce29b2933?q=80&w=1200&auto=format&fit=crop",
  },
  {
    ward: "Ward 2",
    name: "Arun Mehta",
    title: "Assistant Tax Collector",
    dept: "Revenue & Assessment",
    email: "arun.mehta@civicflow.gov",
    phone: "+91 555 467 8902",
    address: "Zone Office B, Ward 2",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    ward: "Ward 3",
    name: "Amit Verma",
    title: "Tax Collector",
    dept: "Revenue & Assessment",
    email: "tax.ward3@civicflow.gov",
    phone: "+91 555 478 9012",
    address: "Municipal Office, Ward 3 Desk",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    ward: "Ward 3",
    name: "Farah Khan",
    title: "Junior Tax Collector",
    dept: "Revenue & Assessment",
    email: "farah.khan@civicflow.gov",
    phone: "+91 555 478 9013",
    address: "Municipal Office, Ward 3 Desk",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
  {
    ward: "Ward 4",
    name: "Anjali Verma",
    title: "Tax Collector",
    dept: "Revenue & Assessment",
    email: "tax.ward4@civicflow.gov",
    phone: "+91 555 489 0123",
    address: "Town Hall Annex, Ward 4",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
];

const wardOptions = Array.from(new Set(taxCollectors.map((collector) => collector.ward)));

export default function TaxCollectorPage() {
  const [selectedWard, setSelectedWard] = useState("");
  const [appliedWard, setAppliedWard] = useState("");

  const visibleCollectors = useMemo(() => {
    if (!appliedWard) {
      return [];
    }

    return taxCollectors.filter((collector) => collector.ward === appliedWard);
  }, [appliedWard]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="relative pt-32 pb-12 md:pt-44 md:pb-32 bg-[#0F172A] overflow-hidden">
        <div className="absolute top-0 right-1/2 w-[800px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full -mr-96 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full -ml-48 -mb-48" />

        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hidden md:flex flex-col items-start text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3B82F6] mb-6 block">
                Revenue & Assessment
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Tax Collector Directory
              </h1>
              <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                Find ward-wise tax collector contact details in one place to quickly connect with the right municipal revenue officer.
              </p>
            </div>

            <div className="md:hidden flex flex-col items-start text-left pb-4">
              <h1 className="text-[28px] font-bold text-white mb-3 tracking-tight">
                Tax Collector Directory
              </h1>
              <p className="text-white/80 text-[15px] font-medium leading-[1.6] max-w-[300px]">
                Find ward-wise tax collector teams and access verified contact details quickly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] bg-white border border-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.06)] p-7 md:p-10"
            >
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Ward Filter</h2>
              <p className="mt-3 text-slate-500 leading-relaxed">
                Select a ward and click Create Card to refresh the cards on the right.
              </p>

              <div className="mt-8 space-y-4">
                <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Select Ward
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={selectedWard}
                    onChange={(e) => setSelectedWard(e.target.value)}
                    className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900 font-semibold outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select Ward
                    </option>
                    {wardOptions.map((ward) => (
                      <option key={ward} value={ward}>
                        {ward}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    disabled={!selectedWard}
                    onClick={() => setAppliedWard(selectedWard)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-6 py-4 text-white font-bold shadow-lg shadow-blue-500/20 hover:bg-[#1d4ed8] transition-colors disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed"
                  >
                    Search
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-500">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-black text-slate-900">Ward Lookup</div>
                  <div className="mt-1">Filter by ward and team member.</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-black text-slate-900">Quick Contact</div>
                  <div className="mt-1">Email, phone, and office address.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full rounded-[32px] bg-white shadow-[0_26px_80px_rgba(15,23,42,0.12)] border border-slate-100 p-5 md:p-6">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900">Ward Collector Cards</h2>
                    <p className="text-sm text-slate-500 mt-1">
                      {appliedWard ? `Showing collectors for ${appliedWard}` : "Select a ward and click Search to view collectors"}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#2563EB] shrink-0">
                    <UserRound className="w-4 h-4" />
                    {visibleCollectors.length} Found
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
                  {visibleCollectors.map((collector, index) => (
                    <motion.div
                      key={`${collector.ward}-${collector.name}`}
                      whileHover={{ y: -4 }}
                      className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-[0_8px_20px_rgba(15,23,42,0.05)] flex flex-col h-full min-w-0"
                    >
                      <div className="flex items-start gap-5">
                        <div className="relative flex-shrink-0">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-slate-100 bg-white">
                            <SafeImage
                              src={collector.image}
                              alt={collector.name}
                              className="w-full h-full object-cover"
                              fallbackType="person"
                            />
                          </div>
                          <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-[3px] border-white ${index % 2 === 0 ? "bg-emerald-500" : "bg-red-500"}`} />
                        </div>

                        <div className="min-w-0 flex-1 pt-1">
                          <div className="inline-flex px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] border border-slate-200">
                            {collector.ward}
                          </div>
                          <h3 className="mt-3 text-[17px] md:text-[18px] font-black text-[#3B82F6] uppercase tracking-tight leading-snug line-clamp-2">
                            {collector.name}
                          </h3>
                          <p className="mt-1 text-[11px] font-black uppercase tracking-[0.25em] text-[#2563EB] leading-relaxed break-words">
                            {collector.title}
                          </p>
                          <div className="mt-2 inline-flex px-3 py-1.5 rounded-full bg-blue-50 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100">
                            {collector.dept}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3 text-[13px] md:text-sm">
                        <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                          <Mail className="w-4 h-4 text-blue-400" />
                          <span className="break-all">{collector.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                          <Phone className="w-4 h-4 text-blue-400" />
                          <span>{collector.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          <span>{collector.address}</span>
                        </div>
                      </div>

                      <button className="mt-6 w-full rounded-full border border-slate-200 bg-white py-3.5 text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 shadow-[0_6px_18px_rgba(15,23,42,0.08)] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        Contact Collector
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {visibleCollectors.length === 0 && (
                  <div className="py-12 text-center text-slate-400 font-medium">
                    {appliedWard ? "No tax collectors found for this ward." : "Please select a ward and click Search to display collector cards."}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
