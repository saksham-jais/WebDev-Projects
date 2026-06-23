'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Building2, 
  User, 
  Anchor, 
  Map, 
  Calendar, 
  MapPin, 
  BadgeIndianRupee,
  Save,
  ChevronLeft,
  FileUp,
  Hash
} from 'lucide-react';
import Link from 'next/link';

const LegacyDemandMatchPage = () => {
  return (
    <AdminShell title="Legacy Match Demand" subtitle="Synchronize and match legacy property tax demands">
      <div className="mb-8 flex items-center justify-between">
        <Link 
          href="/admin/property/legacy-property" 
          className="bg-white text-slate-600 border border-slate-200 rounded-xl px-6 py-2.5 text-sm font-black hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
        >
          <ChevronLeft size={18} /> Back
        </Link>
      </div>

      <form className="space-y-8 pb-12">
        {/* Basic Details Section */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Building2 size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Basic Details</h3>
              <p className="text-sm text-slate-500">Core property identification and owner information</p>
            </div>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Address Code <span className="text-red-500">*</span></label>
              <div className="relative">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Address Code" disabled className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm bg-slate-50 font-bold text-slate-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Owner Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Owner Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Father Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Father Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ARV <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="number" placeholder="ARV" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Old ARV <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="number" placeholder="Old ARV" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ARV Increase <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="number" placeholder="Increased ARV" disabled className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm bg-slate-50 font-bold text-slate-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone <span className="text-red-500">*</span></label>
              <div className="relative">
                <Map className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 bg-white font-medium">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward <span className="text-red-500">*</span></label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 bg-white font-medium">
                  <option value="">Select Ward</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mohalla</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 bg-white font-medium">
                  <option value="">--Select Mohalla--</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">HT <span className="text-red-500">*</span></label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 bg-white font-medium">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">WT <span className="text-red-500">*</span></label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 bg-white font-medium">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ST <span className="text-red-500">*</span></label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 bg-white font-medium">
                <option value="Y">Yes</option>
                <option value="N">No</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Arrear Bill No <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="number" placeholder="Arrear Bill No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Bill No <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="number" placeholder="Current Bill No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Map ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="Map Id" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">GIS ID <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="GIS ID" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bill Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">GIS Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">House No <span className="text-red-500">*</span></label>
              <div className="relative">
                <Anchor className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="text" placeholder="House No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="space-y-2 lg:col-span-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stat Code / Property Type</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm outline-none appearance-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 bg-white font-medium">
                  <option value="">--Select Stat Type--</option>
                  <option value="A">GOVERNMENT BUIDING/SEMI GOVERNMENT BUIDING/SCHOOL</option>
                  <option value="G">GOVERNMENT</option>
                  <option value="N">MANDI PARISAL</option>
                  <option value="B">HOTEL/RESTARA/SHOPPING COMPLEX/CLINIC</option>
                  <option value="C">COMMERCIAL</option>
                  <option value="S">SCHOOL</option>
                  <option value="Z">Residential(Z)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Demand Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Net Demand Card */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-sky-50/50 flex items-center gap-3">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                <BadgeIndianRupee size={18} />
              </div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Net Demand</h4>
            </div>
            <div className="p-6 space-y-4 flex-1">
              {['Current HT', 'Current WT', 'Current ST', 'Arrear HT', 'Arrear WT', 'Arrear ST', 'Arrear Interest HT', 'Arrear Interest WT', 'Arrear Interest ST'].map(label => (
                <div key={label} className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{label} <span className="text-red-500">*</span></label>
                  <input type="number" placeholder={label} className="w-full rounded-xl border border-slate-100 bg-slate-50/30 px-4 py-2.5 text-sm outline-none focus:border-sky-300 transition-all font-bold text-slate-700" />
                </div>
              ))}
            </div>
          </div>

          {/* Net Collection Card */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-emerald-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                  <BadgeIndianRupee size={18} />
                </div>
                <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Net Collection</h4>
              </div>
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
            </div>
            <div className="p-6 space-y-4 flex-1">
              {['Current HT', 'Current WT', 'Current ST', 'Arrear HT', 'Arrear WT', 'Arrear ST', 'Arrear Interest HT', 'Arrear Interest WT', 'Arrear Interest ST'].map(label => (
                <div key={label} className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{label} <span className="text-red-500">*</span></label>
                  <input type="number" placeholder={label} disabled className="w-full rounded-xl border border-slate-100 bg-slate-100/50 px-4 py-2.5 text-sm font-bold text-slate-400 cursor-not-allowed" />
                </div>
              ))}
            </div>
          </div>

          {/* Net Pending Card */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-rose-50/50 flex items-center gap-3">
              <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white">
                <BadgeIndianRupee size={18} />
              </div>
              <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Net Pending</h4>
            </div>
            <div className="p-6 space-y-4 flex-1">
              {['Current HT', 'Current WT', 'Current ST', 'Arrear HT', 'Arrear WT', 'Arrear ST', 'Arrear Interest HT', 'Arrear Interest WT', 'Arrear Interest ST'].map(label => (
                <div key={label} className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{label} <span className="text-red-500">*</span></label>
                  <input type="number" placeholder={label} disabled className="w-full rounded-xl border border-slate-100 bg-slate-100/50 px-4 py-2.5 text-sm font-bold text-slate-400 cursor-not-allowed" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Summaries Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Net Summaries */}
          <div className="bg-slate-900 rounded-[2rem] p-8 space-y-6 text-white shadow-xl shadow-slate-200">
            {['Net Current', 'Net Arrear', 'Net Arrear Interest', 'Net Demand'].map(label => (
              <div key={label} className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label} <span className="text-rose-500">*</span></label>
                <input type="number" placeholder={label} disabled className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-lg font-black text-white outline-none" />
              </div>
            ))}
          </div>

          {/* Collection Summaries */}
          <div className="bg-emerald-900 rounded-[2rem] p-8 space-y-6 text-white shadow-xl shadow-emerald-100">
            {['Net Collection Current', 'Net Collection Arrear', 'Net Collection Arrear Interest', 'Net Collection Demand'].map(label => (
              <div key={label} className="space-y-2">
                <label className="text-[10px] font-black text-emerald-300/60 uppercase tracking-[0.2em]">{label} <span className="text-rose-500">*</span></label>
                <input type="number" placeholder={label} disabled className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-lg font-black text-white outline-none" />
              </div>
            ))}
          </div>

          {/* Pending Summaries */}
          <div className="bg-rose-900 rounded-[2rem] p-8 space-y-6 text-white shadow-xl shadow-rose-100">
            {['Net Pending Current', 'Net Pending Arrear', 'Net Pending Arrear Interest', 'Net Pending Demand'].map(label => (
              <div key={label} className="space-y-2">
                <label className="text-[10px] font-black text-rose-300/60 uppercase tracking-[0.2em]">{label} <span className="text-rose-500">*</span></label>
                <input type="number" placeholder={label} disabled className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-lg font-black text-white outline-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Pending Demand Table Section */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-xl font-black text-slate-900">Pending Demand as of April</h3>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100 uppercase text-[10px] tracking-widest">
                <tr>
                  <th className="px-8 py-5">Financial Year</th>
                  <th className="px-8 py-5 text-right">HT</th>
                  <th className="px-8 py-5 text-right">WT</th>
                  <th className="px-8 py-5 text-right">ST</th>
                  <th className="px-8 py-5 text-right">Discount</th>
                  <th className="px-8 py-5 text-right">Interest</th>
                  <th className="px-8 py-5 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors font-medium">
                  <th className="px-8 py-5 text-slate-900 font-bold">Till March 2024 (Arrear)*</th>
                  <td className="px-8 py-5 text-right">0</td>
                  <td className="px-8 py-5 text-right">0</td>
                  <td className="px-8 py-5 text-right">0</td>
                  <td className="px-8 py-5 text-right text-rose-500">0</td>
                  <td className="px-8 py-5 text-right text-emerald-500">0</td>
                  <td className="px-8 py-5 text-right font-black">0</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors font-medium">
                  <th className="px-8 py-5 text-slate-900 font-bold">2024-2025 (Current)</th>
                  <td className="px-8 py-5 text-right">0</td>
                  <td className="px-8 py-5 text-right">0</td>
                  <td className="px-8 py-5 text-right">0</td>
                  <td className="px-8 py-5 text-right text-rose-500">0</td>
                  <td className="px-8 py-5 text-right text-emerald-500">0</td>
                  <td className="px-8 py-5 text-right font-black">0</td>
                </tr>
              </tbody>
              <tfoot className="bg-slate-900 text-white font-black">
                <tr>
                  <td className="px-8 py-6 text-right uppercase tracking-[0.2em] text-[10px]" colSpan={6}>Grand Total</td>
                  <td className="px-8 py-6 text-right text-lg">0</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Proof Upload Section */}
        <section className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-xl font-black text-slate-900">Proof Documentation</h3>
          </div>
          <div className="p-8">
             <div className="max-w-xl mx-auto border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center bg-slate-50/50 group hover:border-blue-400 transition-all cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 mx-auto mb-4 shadow-sm group-hover:scale-110 group-hover:text-blue-500 transition-all">
                  <FileUp size={32} />
                </div>
                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Upload Proof Document</p>
                <p className="text-xs text-slate-500 mt-2">Click to select file or drag and drop here</p>
                <input type="file" className="hidden" />
             </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-6">
           <button 
             type="submit" 
             className="bg-blue-600 text-white rounded-[1.5rem] px-12 py-4 text-sm font-black hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-100 uppercase tracking-[0.2em]"
           >
             <Save size={20} /> Update Demand
           </button>
        </div>
      </form>
    </AdminShell>
  );
};

export default LegacyDemandMatchPage;
