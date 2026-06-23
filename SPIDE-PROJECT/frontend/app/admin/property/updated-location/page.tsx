'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Filter,
  Calendar,
  Hash,
  MapPin,
  User,
  ArrowRight
} from 'lucide-react';

const UpdatedLocationPage = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const sampleData = [
    { id: 1, propertyNo: '25010832BF', date: '15/07/2024', oldLong: 'N/A', oldLat: 'N/A', newLong: 'N/A', newLat: 'N/A', updatedBy: 'Admin' }
  ];

  return (
    <AdminShell title="Location List" subtitle="Track and manage property geographical location updates">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Search Records</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Type</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white">
                  <option value="">Select Property Type</option>
                  <option value="GMCLEGACY">GMCLEGACY</option>
                  <option value="GMCNEW">GMCNEW</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property No</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Property No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
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
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button type="submit" className="bg-slate-900 text-white rounded-xl px-12 py-3.5 text-sm font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <Search size={18} /> Search
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-12 py-3.5 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mb-6">
        <div className="inline-flex p-1 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setActiveTab('Completed')}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'Completed' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-6 py-5 whitespace-nowrap">Property No</th>
                <th className="px-6 py-5 whitespace-nowrap">Date</th>
                <th className="px-6 py-5 whitespace-nowrap text-amber-600 bg-amber-50/30">Old Longitude</th>
                <th className="px-6 py-5 whitespace-nowrap text-amber-600 bg-amber-50/30">Old Latitude</th>
                <th className="px-6 py-5 whitespace-nowrap text-emerald-600 bg-emerald-50/30">New Longitude</th>
                <th className="px-6 py-5 whitespace-nowrap text-emerald-600 bg-emerald-50/30">New Latitude</th>
                <th className="px-6 py-5 whitespace-nowrap">Updated By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-900">{item.propertyNo}</td>
                  <td className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px] tracking-wider">{item.date}</td>
                  <td className="px-6 py-4 text-slate-400 italic bg-amber-50/10">{item.oldLong}</td>
                  <td className="px-6 py-4 text-slate-400 italic bg-amber-50/10">{item.oldLat}</td>
                  <td className="px-6 py-4 text-slate-400 italic bg-emerald-50/10">{item.newLong}</td>
                  <td className="px-6 py-4 text-slate-400 italic bg-emerald-50/10">{item.newLat}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                        <User size={14} />
                      </div>
                      <span className="text-slate-600 font-medium">{item.updatedBy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
};

export default UpdatedLocationPage;
