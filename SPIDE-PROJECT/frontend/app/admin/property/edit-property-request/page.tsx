'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Hash,
  User,
  Calendar,
  Eye,
  Check,
  Ban,
  Filter
} from 'lucide-react';

const EditPropertyRequestPage = () => {
  const [activeTab, setActiveTab] = useState('Pending');
  const tabs = ['Pending', 'Approved', 'Rejected'];

  const sampleData = [
    { id: 1, holdingNo: '24060010HR', requestedBy: 'clerk_amit', requestedDate: '28/10/2025', approvedBy: 'tax_sup_1', approvedDate: '29/10/2025' },
    { id: 2, holdingNo: '25060070HR', requestedBy: 'rohitrai', requestedDate: '19/10/2025', approvedBy: 'rohitrai', approvedDate: '19/10/2025' },
    { id: 3, holdingNo: '26041162-W', requestedBy: 'admin', requestedDate: '07/10/2025', approvedBy: 'admin', approvedDate: '07/10/2025' },
  ];

  return (
    <AdminShell title="Edit Property Request" subtitle="Manage and audit basic property update requests">
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Search Request</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property No</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <Hash size={18} />
                  </div>
                  <input type="text" placeholder="Property No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button type="submit" className="bg-slate-900 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-slate-100">
                  <Search size={18} /> Search
                </button>
                <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-10 py-3 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                  <RotateCcw size={18} /> Reset
                </button>
              </div>
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
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
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
                <th className="px-8 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-8 py-5 whitespace-nowrap">Holding No</th>
                <th className="px-8 py-5 whitespace-nowrap">Requested By</th>
                <th className="px-8 py-5 whitespace-nowrap text-center">Requested Date</th>
                {activeTab !== 'Pending' && (
                  <>
                    <th className="px-8 py-5 whitespace-nowrap">{activeTab === 'Approved' ? 'Approved By' : 'Rejected By'}</th>
                    <th className="px-8 py-5 whitespace-nowrap text-center">{activeTab === 'Approved' ? 'Approved Date' : 'Rejected Date'}</th>
                  </>
                )}
                <th className="px-8 py-5 whitespace-nowrap text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-8 py-4 font-black text-slate-900">{item.holdingNo}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                        <User size={14} />
                      </div>
                      <span className="text-slate-600 font-bold text-xs uppercase tracking-tight">{item.requestedBy}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase">
                      <Calendar size={12} /> {item.requestedDate}
                    </div>
                  </td>
                  {activeTab !== 'Pending' && (
                    <>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 ${activeTab === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} rounded-full flex items-center justify-center`}>
                            {activeTab === 'Approved' ? <Check size={14} /> : <Ban size={14} />}
                          </div>
                          <span className="text-slate-600 font-bold text-xs uppercase tracking-tight">{item.approvedBy}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4 text-center">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 ${activeTab === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} rounded-lg text-[10px] font-black uppercase`}>
                          <Calendar size={12} /> {item.approvedDate}
                        </div>
                      </td>
                    </>
                  )}
                  <td className="px-8 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2.5 hover:bg-blue-50 rounded-xl text-blue-600 transition-all shadow-sm bg-white border border-slate-100" title="View Details">
                        <Eye size={18} />
                      </button>
                      {activeTab === 'Pending' && (
                        <>
                          <button className="p-2.5 hover:bg-emerald-50 rounded-xl text-emerald-600 transition-all shadow-sm bg-white border border-slate-100" title="Approve">
                            <Check size={18} />
                          </button>
                          <button className="p-2.5 hover:bg-red-50 rounded-xl text-red-600 transition-all shadow-sm bg-white border border-slate-100" title="Reject">
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

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2 font-black text-slate-900">
              Total Requests - 24
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Page 1 of 3</div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg shadow-slate-200">1</button>
            <button className="w-10 h-10 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">2</button>
            <button className="w-10 h-10 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">3</button>
            <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest">Next</button>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default EditPropertyRequestPage;
