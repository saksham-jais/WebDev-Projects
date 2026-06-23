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
  Ban,
  User,
  Smartphone
} from 'lucide-react';

const LegacyArvUpdateListPage = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const tabs = ['Completed', 'Pending', 'Rejected'];

  const sampleData = [
    { id: 1, propertyNo: 'TEST0015-G', requestedBy: 'soloadmin', requestedDate: '28/07/2025', approvedBy: 'soloadmin', approvedDate: '28/07/2025' },
    { id: 2, propertyNo: '25060070HR', requestedBy: 'rohitrai', requestedDate: '19/07/2025', approvedBy: 'rohitrai', approvedDate: '19/07/2025' },
    { id: 3, propertyNo: '26041162-W', requestedBy: 'soloadmin', requestedDate: '07/02/2025', approvedBy: 'soloadmin', approvedDate: '07/02/2025' },
    { id: 4, propertyNo: '27030693-W', requestedBy: 'soloadmin', requestedDate: '07/02/2025', approvedBy: 'soloadmin', approvedDate: '07/02/2025' },
    { id: 5, propertyNo: '05030442-N', requestedBy: 'rohitrai', requestedDate: '17/01/2025', approvedBy: 'rohitrai', approvedDate: '17/01/2025' },
    { id: 6, propertyNo: 'TEST000014', requestedBy: 'rohitrai', requestedDate: '23/09/2024', approvedBy: 'rohitrai', approvedDate: '23/09/2024' },
    { id: 7, propertyNo: 'TEST000014', requestedBy: 'rohitrai', requestedDate: '23/09/2024', approvedBy: 'rohitrai', approvedDate: '23/09/2024' },
    { id: 8, propertyNo: 'TEST000014', requestedBy: 'rohitrai', requestedDate: '23/09/2024', approvedBy: 'rohitrai', approvedDate: '23/09/2024' },
    { id: 9, propertyNo: 'TEST000014', requestedBy: 'rohitrai', requestedDate: '23/09/2024', approvedBy: 'rohitrai', approvedDate: '23/09/2024' },
    { id: 10, propertyNo: 'TEST000014', requestedBy: 'rohitrai', requestedDate: '23/09/2024', approvedBy: 'rohitrai', approvedDate: '23/09/2024' }
  ];

  return (
    <AdminShell title="Legacy ARV Update List" subtitle="Audit trail for all property rental value modifications">
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Filter Update Requests</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Address Code</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Address Code" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Owner Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Owner Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mobile No</label>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Mobile No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date From</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date To</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-all" />
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

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-6 py-5 whitespace-nowrap">Property No</th>
                <th className="px-6 py-5 whitespace-nowrap">Requested By</th>
                <th className="px-6 py-5 whitespace-nowrap">Requested Date</th>
                {activeTab !== 'Pending' && (
                  <>
                    <th className="px-6 py-5 whitespace-nowrap">{activeTab === 'Completed' ? 'Approved By' : 'Rejected By'}</th>
                    <th className="px-6 py-5 whitespace-nowrap">{activeTab === 'Completed' ? 'Approved Date' : 'Rejected Date'}</th>
                  </>
                )}
                <th className="px-6 py-5 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-900">{item.propertyNo}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                        <User size={14} />
                      </div>
                      <span className="text-slate-600 font-bold text-xs uppercase">{item.requestedBy}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-medium text-xs">{item.requestedDate}</td>
                  {activeTab !== 'Pending' && (
                    <>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 ${activeTab === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} rounded-full flex items-center justify-center`}>
                            {activeTab === 'Completed' ? <Check size={14} /> : <Ban size={14} />}
                          </div>
                          <span className="text-slate-600 font-bold text-xs uppercase">{item.approvedBy}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium text-xs">{item.approvedDate}</td>
                    </>
                  )}
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-all" title="View">
                        <Eye size={18} />
                      </button>
                      {activeTab === 'Pending' && (
                        <>
                          <button className="p-2 hover:bg-emerald-50 rounded-lg text-emerald-600 transition-all" title="Accept">
                            <Check size={18} />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-all" title="Reject">
                            <Ban size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2 font-black text-slate-900">
              Total Record - 121
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Total Pages - 13</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">First</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">Prev</button>
              <button className="w-9 h-9 rounded-xl bg-slate-900 text-white text-xs font-bold">1</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">2</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">3</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">Next</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">Last</button>
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

export default LegacyArvUpdateListPage;
