'use client';

import React from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Building2, 
  User, 
  Anchor, 
  Calendar, 
  MapPin, 
  Plus,
  Save,
  ChevronRight,
  ShieldCheck,
  LayoutGrid,
  Map,
  BadgeIndianRupee
} from 'lucide-react';

const NoticePage = () => {
  return (
    <AdminShell title="Notice" subtitle="Generate and issue property-related legal and tax notices">
      <form className="space-y-8 pb-12">
        {/* Basic Details */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <LayoutGrid size={20} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Basic Details</h3>
                <p className="text-sm text-slate-500">Notice recipient and property identification</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Owner Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Owner Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Son/Daughter Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Son/Daughter Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Neighborhood <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Neighborhood" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone <span className="text-red-500">*</span></label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                <option value="">--Select Zone--</option>
                {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward <span className="text-red-500">*</span></label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                <option value="">--Select Ward--</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Address/Street Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Address/Street Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">PinCode</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="PinCode" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mohalla</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Mohalla" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Financial Year <span className="text-red-500">*</span></label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                <option value="">--Select Financial Year--</option>
                {['2026-2027', '2025-2026', '2024-2025', '2023-2024', '2022-2023'].map(yr => <option key={yr} value={yr}>{yr}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Asset Identification Number <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Asset Identification Number" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Present Building Number <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Present Building Number" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Proposed/New Building Number <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Proposed/New Building Number" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enter Name" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Serial No <span className="text-red-500">*</span></label>
              <input type="number" placeholder="Serial No" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                <BadgeIndianRupee size={20} />
              </div>
              <h3 className="text-xl font-black text-slate-900">Property Details</h3>
            </div>
            <button type="button" className="bg-blue-600 text-white rounded-xl px-6 py-2 text-xs font-black hover:bg-blue-700 transition-all flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
              <Plus size={14} /> Add Detail
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100 uppercase text-[10px] tracking-widest">
                <tr>
                  <th className="px-6 py-4">Sr. No</th>
                  <th className="px-6 py-4">Use of Property</th>
                  <th className="px-6 py-4">Annual Appraisal</th>
                  <th className="px-6 py-4">House Tax</th>
                  <th className="px-6 py-4">Burning</th>
                  <th className="px-6 py-4">Drainage Tax</th>
                  <th className="px-6 py-4">Current Demand</th>
                  <th className="px-6 py-4">Arrears</th>
                  <th className="px-6 py-4">Interest</th>
                  <th className="px-6 py-4">User Charge</th>
                  <th className="px-6 py-4">Sum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-slate-50/30">
                  <td colSpan={10} className="px-6 py-4 text-right font-black text-slate-900 uppercase tracking-widest text-[10px]">Total</td>
                  <td className="px-6 py-4 font-black text-slate-900">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Property Description */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white">
                <Map size={20} />
              </div>
              <h3 className="text-xl font-black text-slate-900">Property Description</h3>
            </div>
            <button type="button" className="bg-blue-600 text-white rounded-xl px-6 py-2 text-xs font-black hover:bg-blue-700 transition-all flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
              <Plus size={14} /> Add Description
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100 uppercase text-[10px] tracking-widest">
                <tr>
                  <th className="px-6 py-4">Sr. No</th>
                  <th className="px-6 py-4">Use of Building</th>
                  <th className="px-6 py-4">After Survey Road Location</th>
                  <th className="px-6 py-4">Plot Area (Survey)</th>
                  <th className="px-6 py-4">Est. Covered Area (Survey)</th>
                  <th className="px-6 py-4">Carpet Area Floor-wise (Survey)</th>
                  <th className="px-6 py-4">Vacant Land (Survey)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 italic text-slate-400">
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-xs font-bold uppercase tracking-widest">No description added yet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex items-center justify-end gap-4">
          <button type="submit" className="bg-blue-600 text-white rounded-2xl px-12 py-4 text-sm font-black hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-100 uppercase tracking-[0.2em]">
            <Save size={20} /> Submit Notice
          </button>
        </div>
      </form>
    </AdminShell>
  );
};

export default NoticePage;
