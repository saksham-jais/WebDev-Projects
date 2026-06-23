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
  BadgeIndianRupee
} from 'lucide-react';
import Link from 'next/link';

const WardWiseCollectionReportPage = () => {
  return (
    <AdminShell title="Ward Wise Collection Inside Reports" subtitle="Detailed breakdown of collections by ward and payment mode">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">UP Date Range-Ward-MOP-Report</h3>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select Ward</option>
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

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
                <Search size={18} /> Search
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-6 py-5 whitespace-nowrap">Ward Name</th>
                <th className="px-6 py-5 text-right whitespace-nowrap">Cash</th>
                <th className="px-6 py-5 text-right whitespace-nowrap">NB</th>
                <th className="px-6 py-5 text-right whitespace-nowrap">Cheque</th>
                <th className="px-6 py-5 text-right whitespace-nowrap">DD</th>
                <th className="px-6 py-5 text-right whitespace-nowrap">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td colSpan={7} className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center justify-center gap-4 text-slate-400">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <Settings className="w-8 h-8 animate-spin-slow" />
                    </div>
                    <p className="font-bold text-sm uppercase tracking-widest">No Data Found</p>
                    <p className="text-xs max-w-xs leading-relaxed text-slate-400/80">Select parameters and search to view the ward-wise collection summary.</p>
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

export default WardWiseCollectionReportPage;
