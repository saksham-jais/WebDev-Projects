'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  User, 
  Building, 
  Anchor, 
  Route, 
  MapPin, 
  Calendar,
  Save,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const LegacyArvUpdatePage = () => {
  const [formData, setFormData] = useState({
    addressCode: '',
    ownerName: '',
    fatherName: '',
    houseNo: '',
    arv: '',
    zone: '',
    ward: '',
    mohalla: '',
    ht: 'N',
    wt: 'N',
    st: 'N',
    mapId: '',
    gisId: '',
    billDate: '',
    gisDate: ''
  });

  return (
    <AdminShell title="Update ARV" subtitle="Modify property Annual Rental Value and associated details">
      <div className="flex justify-end mb-6">
        <Link 
          href="/admin/property/legacy-property" 
          className="bg-slate-900 text-white rounded-2xl px-8 py-3 text-sm font-black hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200 uppercase tracking-widest"
        >
          <ArrowLeft size={18} /> Back
        </Link>
      </div>

      <div className="space-y-8">
        {/* Search Section */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                  Address Code <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-focus-within:text-blue-600 group-focus-within:bg-blue-50 transition-all">
                    <User size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter Address Code"
                    className="w-full rounded-[1.25rem] border border-slate-200 pl-16 pr-6 py-4 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" 
                  />
                </div>
              </div>
              <div>
                <button className="bg-blue-600 text-white rounded-[1.25rem] px-10 py-4 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100 uppercase tracking-widest">
                  <Search size={18} /> Search Record
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Form */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Building size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Basic Details</h3>
                <p className="text-slate-500 text-sm font-medium">Verify and update property identity information</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Owner Name */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Owner Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Building size={18} /></div>
                  <input type="text" placeholder="Owner Name" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* Father Name */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Father Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Anchor size={18} /></div>
                  <input type="text" placeholder="Father Name" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* House No */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">House No <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Anchor size={18} /></div>
                  <input type="text" placeholder="House No" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* ARV */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">ARV <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Anchor size={18} /></div>
                  <input type="number" placeholder="Annual Rental Value" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* Zone */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Zone <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Route size={18} /></div>
                  <select className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                    <option value="">Select Zone</option>
                    {[1,2,3,4,5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                  </select>
                </div>
              </div>

              {/* Ward */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Ward <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Building size={18} /></div>
                  <select className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                    <option value="">Select Ward</option>
                  </select>
                </div>
              </div>

              {/* Mohalla */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Mohalla</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Building size={18} /></div>
                  <select className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                    <option value="">--Select Mohalla--</option>
                  </select>
                </div>
              </div>

              {/* HT */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">HT <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Route size={18} /></div>
                  <select className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </select>
                </div>
              </div>

              {/* WT */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">WT <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Route size={18} /></div>
                  <select className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </select>
                </div>
              </div>

              {/* ST */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">ST <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Route size={18} /></div>
                  <select className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all appearance-none bg-white">
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                  </select>
                </div>
              </div>

              {/* Map ID */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Map ID <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Anchor size={18} /></div>
                  <input type="text" placeholder="Map Id" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* GIS ID */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">GIS ID <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Anchor size={18} /></div>
                  <input type="text" placeholder="GIS ID" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* Bill Date */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Bill Date <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Anchor size={18} /></div>
                  <input type="date" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              {/* GIS Date */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">GIS Date <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Anchor size={18} /></div>
                  <input type="date" className="w-full rounded-2xl border border-slate-200 pl-12 pr-6 py-3.5 text-sm font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Table */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-10">
            <h5 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-2">
              Tax Summary
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[10px] uppercase tracking-widest font-black">Calculated</span>
            </h5>
            <div className="overflow-x-auto rounded-3xl border border-slate-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Financial Year</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">HT</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">WT</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">ST</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest text-amber-600">Interest</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-900 uppercase tracking-widest text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-900">Till March 2024 (Arrear)*</td>
                    <td className="px-8 py-6 text-slate-500 font-medium">0.00</td>
                    <td className="px-8 py-6 text-slate-500 font-medium">0.00</td>
                    <td className="px-8 py-6 text-slate-500 font-medium">0.00</td>
                    <td className="px-8 py-6 text-amber-600 font-black">0</td>
                    <td className="px-8 py-6 text-right font-black text-slate-900">0.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-900">2024-2025 (Current)</td>
                    <td className="px-8 py-6 text-slate-500 font-medium">0.00</td>
                    <td className="px-8 py-6 text-slate-500 font-medium">0.00</td>
                    <td className="px-8 py-6 text-slate-500 font-medium">0.00</td>
                    <td className="px-8 py-6 text-amber-600 font-black">0</td>
                    <td className="px-8 py-6 text-right font-black text-slate-900">0.00</td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-900 text-white">
                  <tr>
                    <td colSpan={5} className="px-8 py-5 text-right font-black uppercase text-xs tracking-widest">Grand Total</td>
                    <td className="px-8 py-5 text-right font-black text-lg tracking-wider">0.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-12 flex justify-end">
              <button className="bg-slate-900 text-white rounded-2xl px-16 py-5 text-sm font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-200 uppercase tracking-[0.2em]">
                <Save size={20} /> Update Record
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default LegacyArvUpdatePage;
