'use client';

import React from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Download, 
  Calendar,
  Filter,
  ArrowLeft,
  Settings,
  BadgeIndianRupee,
  LayoutGrid
} from 'lucide-react';
import Link from 'next/link';

const CounterReportPage = () => {
  return (
    <AdminShell title="Counter Reports" subtitle="Detailed transaction logs of collections at various NNG counters">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Counter Filters</h3>
          </div>
          <Link 
            href="/admin/reports" 
            className="flex items-center gap-2 bg-slate-100 text-slate-600 px-5 py-2 rounded-xl text-xs font-black hover:bg-slate-200 transition-all uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

        <div className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select Zone</option>
                  <option value="1,5">Zone 1 and 5</option>
                  <option value="2,3,4">Zone 2,3 and 4</option>
                  <option value="1">Zone 1</option>
                  <option value="2">Zone 2</option>
                  <option value="3">Zone 3</option>
                  <option value="4">Zone 4</option>
                  <option value="5">Zone 5</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select Ward</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Collected By</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select</option>
                  <option value="NNG">NNG</option>
                  <option value="LGF">LGF</option>
                  <option value="NNGaLGF">NNG & LGF</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date From</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date To</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
                <Search size={18} /> Search Report
              </button>
              <button type="button" className="bg-emerald-600 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-emerald-100">
                <Download size={18} /> Download Excel
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-10 py-3 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-[11px] text-left border-collapse">
            <thead className="bg-slate-900 text-slate-300 font-bold border-b border-slate-800">
              <tr>
                {[
                  "Sr. No", "Address Code", "Zone", "Ward", "Property No", "Receipt No", "Receipt Date", "Mode", 
                  "Cheque Number", "Bank Name", "Arrear HT", "Current HT", "PRI_HT", "Interest HT", "Rebate HT", "Received HT", 
                  "Arrear WT", "Current WT", "PRI_WT", "Interest WT", "Rebate WT", "Received WT", "Arrear ST", "Current ST", 
                  "PRI_ST", "Interest ST", "Rebate ST", "Received ST", "Other Charges", "Total Interest", "Total Rebate", 
                  "Total Amount", "Total Received", "Collected By"
                ].map((header) => (
                  <th key={header} className="px-3 py-4 whitespace-nowrap border-r border-slate-800 last:border-0">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td colSpan={34} className="px-6 py-24 text-center">
                  <div className="flex flex-col items-center justify-center gap-4 text-slate-400">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <LayoutGrid className="w-8 h-8 animate-pulse text-slate-300" />
                    </div>
                    <p className="font-bold text-xs uppercase tracking-[0.2em]">No Transaction Data Found</p>
                    <p className="text-[10px] max-w-sm leading-relaxed text-slate-400/80">Use the filters above to retrieve detailed counter collection reports. Data will be displayed in this grid once search is complete.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
};

export default CounterReportPage;
