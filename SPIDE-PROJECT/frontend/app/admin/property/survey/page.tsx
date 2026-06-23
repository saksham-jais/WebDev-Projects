'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Filter,
  Map,
  Building2,
  User,
  BadgeIndianRupee,
  Eye,
  Settings,
  MoreHorizontal
} from 'lucide-react';

const SurveyPage = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const tabs = ['Active', 'Disabled'];

  return (
    <AdminShell title="Survey" subtitle="Review and manage property survey data and valuations">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Survey Filter</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                  <option value="">Select Ward</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mohalla</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Mohalla" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Owner Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Owner Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ARV From</label>
                <div className="relative">
                  <BadgeIndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="number" placeholder="ARV From" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ARV To</label>
                <div className="relative">
                  <BadgeIndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="number" placeholder="ARV To" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-12 py-3.5 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
                <Search size={18} /> Search
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-12 py-3.5 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2.5 rounded-full text-sm font-black transition-all ${
              activeTab === tab 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-6 py-5 whitespace-nowrap">Zone</th>
                <th className="px-6 py-5 whitespace-nowrap">Ward</th>
                <th className="px-6 py-5 whitespace-nowrap text-center">Status</th>
                <th className="px-6 py-5 whitespace-nowrap">Address Code</th>
                <th className="px-6 py-5 whitespace-nowrap">Mohalla</th>
                <th className="px-6 py-5 whitespace-nowrap">House No</th>
                <th className="px-6 py-5 whitespace-nowrap">Owner Name</th>
                <th className="px-6 py-5 whitespace-nowrap">Father/Husband Name</th>
                <th className="px-6 py-5 text-right whitespace-nowrap">ARV</th>
                <th className="px-4 py-5 text-center whitespace-nowrap">HT</th>
                <th className="px-4 py-5 text-center whitespace-nowrap">WT</th>
                <th className="px-4 py-5 text-center whitespace-nowrap">ST</th>
                <th className="px-6 py-5 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td colSpan={14} className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center justify-center gap-4 text-slate-400">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                      <Settings className="w-8 h-8 animate-spin-slow" />
                    </div>
                    <p className="font-bold text-sm uppercase tracking-widest">No Data Found</p>
                    <p className="text-xs max-w-xs leading-relaxed text-slate-400/80">Try adjusting your filters or search criteria to see survey records here.</p>
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

export default SurveyPage;
