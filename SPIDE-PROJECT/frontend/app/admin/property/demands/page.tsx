'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Filter,
  Calendar,
  Smartphone,
  Hash,
  User,
  LayoutGrid
} from 'lucide-react';

const DemandsPage = () => {
  const [formData, setFormData] = useState({
    state: 'Uttar Pradesh',
    ulb: 'Gorakhpur Municipal Corporation',
    zone: '',
    ward: '',
    propertyType: '',
    propertyNo: '',
    applicationNo: '',
    dateFrom: '',
    dateTo: '',
    ownerName: '',
    nonzero: '',
    mobileNo: '',
    oldHoldingNo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AdminShell title="Demand List" subtitle="Track and manage property tax demands">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Search Demands</h3>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">State</label>
                <input 
                  type="text" 
                  value="Uttar Pradesh" 
                  disabled 
                  className="w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm text-slate-400 font-medium outline-none cursor-not-allowed" 
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">ULB</label>
                <input 
                  type="text" 
                  value="Gorakhpur Municipal Corporation" 
                  disabled 
                  className="w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm text-slate-400 font-medium outline-none cursor-not-allowed" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select name="zone" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select name="ward" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">Select Ward</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Type</label>
                <select name="propertyType" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">Select Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property No</label>
                <div className="relative">
                  <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Property No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Application No</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Application No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date From</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date To</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
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
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Non-Zero</label>
                <select name="nonzero" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white font-bold text-slate-700">
                  <option value="">Select</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile No</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Mobile Number" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Old Holding No</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Old Holding Number" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-12 py-3.5 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100 uppercase tracking-widest">
                <Search size={18} /> Search Demands
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-12 py-3.5 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 p-20 flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-sm text-slate-300">
          <Search size={40} />
        </div>
        <div className="space-y-1">
          <h4 className="font-black text-slate-900 uppercase tracking-tighter">No Demands Found</h4>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">Enter search criteria above to find property tax demands within the system.</p>
        </div>
      </div>
    </AdminShell>
  );
};

export default DemandsPage;
