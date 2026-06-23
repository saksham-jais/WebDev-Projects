'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Filter,
  MapPin,
  Building,
  Hash,
  LayoutGrid,
  Info
} from 'lucide-react';

const LegacyLocatePropertyPage = () => {
  const [propertyCount, setPropertyCount] = useState('NA');

  return (
    <AdminShell title="Legacy-Locate Property" subtitle="Geospatial visualization for historical property records">
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Historical Record Lookup</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-600 transition-colors">
                    <LayoutGrid size={18} />
                  </div>
                  <select className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm font-bold outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-50 transition-all appearance-none bg-white">
                    <option value="">Select Zone</option>
                    {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-600 transition-colors">
                    <Building size={18} />
                  </div>
                  <select className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm font-bold outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-50 transition-all appearance-none bg-white">
                    <option value="">Select Ward</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property No</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-600 transition-colors">
                    <Hash size={18} />
                  </div>
                  <input type="text" placeholder="Property No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm font-bold outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-50 transition-all" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-8">
              <div className="flex items-center gap-4">
                <button type="submit" className="bg-slate-900 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-slate-100">
                  <Search size={18} /> Search Legacy
                </button>
                <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-10 py-3 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                  <RotateCcw size={18} /> Reset
                </button>
              </div>

              <div className="flex items-center gap-3 px-6 py-3 bg-amber-50 rounded-2xl border border-amber-100">
                <Info size={16} className="text-amber-600" />
                <span className="text-xs font-black text-amber-700 uppercase tracking-wider">
                  Legacy Properties: <span className="text-slate-900">{propertyCount}</span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 h-[600px]">
        {/* Sidebar List */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-50 bg-slate-50/50">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <MapPin size={16} className="text-amber-600" /> Legacy Records
            </h4>
          </div>
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            <div className="space-y-4">
              {[1,2,3,4,5,6,7,8,9,10].map((item) => (
                <div key={item} className="p-5 rounded-3xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Record #{item}</span>
                    <div className="w-2 h-2 rounded-full bg-amber-500 shadow-sm" />
                  </div>
                  <h5 className="font-black text-slate-900 text-sm group-hover:text-amber-600 transition-colors">OLD-2024-{item}55</h5>
                  <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">Ward 49 - Mohalla Basantpur</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map View */}
        <div className="bg-slate-200 rounded-[2.5rem] border border-slate-200 shadow-inner overflow-hidden relative">
          {/* Mock Map Background */}
          <div className="absolute inset-0 bg-[#f4f1ea] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <MapPin size={32} className="text-amber-600" />
              </div>
              <div>
                <p className="text-slate-900 font-black uppercase tracking-[0.25em]">Legacy GIS Viewer</p>
                <p className="text-slate-400 text-xs font-bold mt-2">Rendering Historical Plot Data Layers</p>
              </div>
            </div>
          </div>
          
          {/* Map Controls Mockup */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <div className="p-2 bg-white rounded-xl shadow-xl border border-slate-100 flex flex-col gap-1">
              <button className="w-10 h-10 rounded-lg hover:bg-slate-50 flex items-center justify-center font-black text-slate-900 border-b border-slate-50">+</button>
              <button className="w-10 h-10 rounded-lg hover:bg-slate-50 flex items-center justify-center font-black text-slate-900">−</button>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6">
            <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/20 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Historical Map Mode | © GMC Archives
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default LegacyLocatePropertyPage;
