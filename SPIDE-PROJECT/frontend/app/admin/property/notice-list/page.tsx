'use client';

import React from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Download,
  FileText,
  BadgeIndianRupee,
  Calendar,
  Search,
  RotateCcw,
  Filter
} from 'lucide-react';

const NoticeListPage = () => {
  const sampleData = [
    { id: 1, noticeNo: '1', date: '06/04/2024', ownerName: 'Solomon', amount: '1100' },
    { id: 2, noticeNo: '2', date: '11/05/2024', ownerName: 'Alok kumar mall', amount: '0' },
    { id: 3, noticeNo: '3', date: '21/05/2024', ownerName: 'test', amount: '6100' }
  ];

  return (
    <AdminShell title="Notice List" subtitle="Archive of all generated property tax and legal notices">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Filter Notices</h3>
          </div>
        </div>
        <div className="p-8">
           <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Notice Number</label>
                <input type="text" placeholder="Enter Notice No" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date</label>
                <input type="date" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500" />
              </div>
              <div className="flex items-end gap-3">
                <button type="submit" className="bg-blue-600 text-white rounded-xl px-8 py-2.5 text-sm font-black hover:bg-blue-700 flex items-center gap-2">
                  <Search size={18} /> Search
                </button>
                <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-8 py-2.5 text-sm font-black hover:bg-slate-200 flex items-center gap-2">
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
                <th className="px-6 py-5 whitespace-nowrap">Notice No</th>
                <th className="px-6 py-5 whitespace-nowrap">Date</th>
                <th className="px-6 py-5 whitespace-nowrap">Owner Name</th>
                <th className="px-6 py-5 whitespace-nowrap text-right">Amount</th>
                <th className="px-6 py-5 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-900">{item.noticeNo}</td>
                  <td className="px-6 py-4 text-slate-500 font-medium">{item.date}</td>
                  <td className="px-6 py-4 text-slate-600 font-bold">{item.ownerName}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-1.5 font-black text-slate-900">
                      <BadgeIndianRupee size={14} className="text-slate-400" />
                      {item.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 hover:bg-rose-50 rounded-lg text-rose-600 transition-all group-hover:scale-110" title="Download PDF">
                      <Download size={18} />
                    </button>
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
              <button disabled className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 opacity-50 cursor-not-allowed">First</button>
              <button disabled className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 opacity-50 cursor-not-allowed">Prev</button>
              <button className="w-9 h-9 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg shadow-slate-200">1</button>
              <button disabled className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 opacity-50 cursor-not-allowed">Next</button>
              <button disabled className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 opacity-50 cursor-not-allowed">Last</button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default NoticeListPage;
