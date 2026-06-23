'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Filter,
  Calendar,
  Hash,
  Eye,
  Check,
  User,
  Download
} from 'lucide-react';

const NewReassessmentListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const sampleData = [
    { id: 1, propertyNo: 'GMC_PROP1020', ownerName: 'Aniket', mobile: '9658452158', requestedBy: 'Rohit Rai', requestedDate: '26/04/2024', approvedBy: 'Rohit Rai', approvedDate: '26/04/2024' },
    { id: 2, propertyNo: 'GMC_PROP1021', ownerName: 'Vikas', mobile: '9658452158', requestedBy: 'Rohit Rai', requestedDate: '27/04/2024', approvedBy: 'Rohit Rai', approvedDate: '27/04/2024' },
    { id: 3, propertyNo: 'GMC_PROP1022', ownerName: 'Ujjwal', mobile: '9658255248', requestedBy: 'Rohit Rai', requestedDate: '28/04/2024', approvedBy: 'Rohit Rai', approvedDate: '28/04/2024' }
  ];

  return (
    <AdminShell title="New Reassessment List" subtitle="List of newly submitted property reassessment requests">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Search Filter</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Number</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Enter Property No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Application Date From</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Application Date To</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-12 py-3.5 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
                <Search size={18} /> Property Search
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-12 py-3.5 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Property Reset
              </button>
              <button type="button" className="bg-emerald-600 text-white rounded-xl px-12 py-3.5 text-sm font-black hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-emerald-100 ml-auto">
                 <Download size={18} /> Download Excel
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
                <th className="px-6 py-5 whitespace-nowrap">Property NO</th>
                <th className="px-6 py-5 whitespace-nowrap">Ownername</th>
                <th className="px-6 py-5 whitespace-nowrap">Mobile Number</th>
                <th className="px-6 py-5 whitespace-nowrap">Requested By</th>
                <th className="px-6 py-5 whitespace-nowrap">Requested Date</th>
                <th className="px-6 py-5 whitespace-nowrap">Approved By</th>
                <th className="px-6 py-5 whitespace-nowrap">Approved Date</th>
                <th className="px-6 py-5 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-900 uppercase">{item.propertyNo}</td>
                  <td className="px-6 py-4 text-slate-600 font-bold">{item.ownerName}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{item.mobile}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                        <User size={14} />
                      </div>
                      <span className="text-slate-600 font-bold text-xs">{item.requestedBy}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-medium text-xs whitespace-nowrap">{item.requestedDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                        <Check size={14} />
                      </div>
                      <span className="text-slate-600 font-bold text-xs">{item.approvedBy}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-medium text-xs whitespace-nowrap">{item.approvedDate}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-all" title="View">
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2 font-black text-slate-900">
              Total Record - {sampleData.length}
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Total Pages - 1</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">First</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Prev</button>
              <button className="w-9 h-9 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-200">1</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Next</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Last</button>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              {[10, 50, 100].map(size => (
                <button 
                  key={size}
                  onClick={() => setItemsPerPage(size)}
                  className={`w-11 h-9 rounded-xl text-xs font-bold transition-all ${
                    itemsPerPage === size 
                      ? 'bg-slate-900 text-white shadow-lg' 
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default NewReassessmentListPage;
