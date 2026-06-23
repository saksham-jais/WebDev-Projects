"use client";

import { useState } from "react";
import AdminShell from "@/components/AdminShell";
import { Save, Building2, MapPin, ClipboardList, Users, Layers3, FileText, BadgeIndianRupee, CalendarDays } from "lucide-react";

export default function EstimatedTaxPage() {
  const [checking, setChecking] = useState(false);

  const handleCheckDemand = (e: React.FormEvent) => {
    e.preventDefault();
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      window.alert("Estimate flow stubbed. Connect to backend to compute demand.");
    }, 600);
  };

  return (
    <AdminShell title="Estimate Property Tax" subtitle="Estimate property tax using available property details.">
      <div className="space-y-6">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_-40px_rgba(15,23,42,0.32)]">
          {/* <div className="border-b border-slate-100 bg-gradient-to-r from-sky-50 via-white to-indigo-50 px-6 py-5 md:px-8 md:py-6">
            <div className="flex items-center gap-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                <ClipboardList className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-700">Property Tax</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">Estimate Property Tax</h2>
              </div>
            </div>
          </div> */}

          <form onSubmit={handleCheckDemand} className="space-y-6 px-6 py-6 md:px-8 md:py-8">
            <section className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-950">Property Details</h3>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Name of Municipality <span className="text-rose-500">*</span></label>
                  <input disabled placeholder="Municipality Name" className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Year Of Assessment <span className="text-rose-500">*</span></label>
                  <input disabled placeholder="2026" className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">New Holding Number <span className="text-rose-500">*</span></label>
                  <input disabled placeholder="It Will Be Auto Generate" className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Old Holding Number <span className="text-rose-500">*</span></label>
                  <input placeholder="Old Holding Number" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Property Type <span className="text-rose-500">*</span></label>
                  <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none">
                    <option value="">--Select Property Type--</option>
                    <option value="Residential">Residential</option>
                    <option value="Non Residential">Non Residential</option>
                    <option value="Vacant Land">Vacant Land</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">IsMatched <span className="text-rose-500">*</span></label>
                  <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none">
                    <option disabled>IsMatched</option>
                    <option value="Yes">Matched</option>
                    <option value="No">Not Matched</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Road On which Located <span className="text-rose-500">*</span></label>
                  <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none">
                    <option value="" disabled>--Select Road On which Located--</option>
                    <option value="14">Road 12 -24 m</option>
                    <option value="13">Road &gt; 24 m</option>
                    <option value="15">Road &lt; 12 m</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Date Of Acquisition / Construction of Property <span className="text-rose-500">*</span></label>
                  <input type="date" max="2026-05-01" min="1988-01-01" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Area Of Plot <span className="text-rose-500">*</span></label>
                  <input type="number" placeholder="Area Of Plot" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-600">Build Up Area <span className="text-rose-500">*</span></label>
                  <input type="number" placeholder="Enter Build up area" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none" />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" id="waterConnection" className="h-4 w-4 rounded border-slate-300" />
                  <label htmlFor="waterConnection" className="text-sm text-slate-700">Water Connection</label>
                </div>
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-sm">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-950">Floor Details</h3>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="text-left text-sm text-slate-500">
                      <th className="px-3 py-2">Sr. No</th>
                      <th className="px-3 py-2">Floor No</th>
                      <th className="px-3 py-2">Residential Type</th>
                      <th className="px-3 py-2">Construction Type</th>
                      <th className="px-3 py-2">Occupancy Type</th>
                      <th className="px-3 py-2">Build Up Area</th>
                      <th className="px-3 py-2">Date From</th>
                      <th className="px-3 py-2">Date To</th>
                      <th className="px-3 py-2">Edit</th>
                      <th className="px-3 py-2">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-4 text-slate-400" colSpan={10}>
                        No floors added yet.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-4">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-sm">
                {checking ? 'Checking...' : 'Check Demand'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </AdminShell>
  );
}
