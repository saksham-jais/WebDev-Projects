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
  LayoutGrid
} from 'lucide-react';

const LegacyReassessmentPage = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const tabs = ['Completed', 'Pending', 'Rejected'];

  const sampleData = [
    { id: 1, propertyNo: 'GMC_PROP000699', ownerName: 'pppp', mobile: '9097229447', requestedBy: 'Rohit Rai', requestedDate: '26/06/2024', approvedBy: 'Rohit Rai', approvedDate: '26/06/2024' },
    { id: 2, propertyNo: 'GMC_PROP000699', ownerName: 'pppp', mobile: '9097229447', requestedBy: 'Ravi', requestedDate: '03/06/2024', approvedBy: 'Ravi', approvedDate: '03/06/2024' },
    { id: 3, propertyNo: 'GMC_PROP000699', ownerName: 'pppp', mobile: '9097229447', requestedBy: 'Ravi', requestedDate: '03/06/2024', approvedBy: 'Ravi', approvedDate: '03/06/2024' },
    { id: 4, propertyNo: 'GMC_PROP000650', ownerName: 'KIRAN TRIPATHI', mobile: '9415396236', requestedBy: 'Ravi', requestedDate: '28/05/2024', approvedBy: 'Ravi', approvedDate: '28/05/2024' },
    { id: 5, propertyNo: 'GMC_PROP000648', ownerName: 'TEST MASTER', mobile: '9211420786', requestedBy: 'Rohit Rai', requestedDate: '28/05/2024', approvedBy: 'Rohit Rai', approvedDate: '28/05/2024' },
    { id: 6, propertyNo: 'GMC_PROP000617', ownerName: 'AGAM SWAROOP', mobile: '9415857521', requestedBy: 'Ravi', requestedDate: '27/05/2024', approvedBy: 'Ravi', approvedDate: '27/05/2024' },
    { id: 7, propertyNo: 'GMC_PROP000607', ownerName: 'BADAMI DEVI', mobile: '6361957253', requestedBy: 'Ravi', requestedDate: '27/05/2024', approvedBy: 'Ravi', approvedDate: '27/05/2024' },
    { id: 8, propertyNo: 'GMC_PROP000605', ownerName: 'VIJAY LUXMI SRIVASTAV', mobile: '8808456178', requestedBy: 'Rohit Rai', requestedDate: '27/05/2024', approvedBy: 'Rohit Rai', approvedDate: '27/05/2024' },
    { id: 9, propertyNo: 'GMC_PROP000605', ownerName: 'VIJAY LUXMI SRIVASTAV', mobile: '8808456178', requestedBy: 'Rohit Rai', requestedDate: '27/05/2024', approvedBy: 'Rohit Rai', approvedDate: '27/05/2024' },
    { id: 10, propertyNo: 'GMC_PROP000602', ownerName: 'MAYA SINGH', mobile: '9451030970', requestedBy: 'Rohit Rai', requestedDate: '27/05/2024', approvedBy: 'Rohit Rai', approvedDate: '27/05/2024' }
  ];

  return (
    <AdminShell title="Reassessment List" subtitle="Manage and approve property reassessment requests">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Search Requests</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property No</label>
                <div className="relative">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Property No" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
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

            <div className="flex items-center gap-4 pt-4">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-12 py-3.5 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
                <Search size={18} /> Search
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-12 py-3.5 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Reset
              </button>
              <button type="button" className="bg-emerald-600 text-white rounded-xl px-12 py-3.5 text-sm font-black hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-emerald-100 ml-auto">
                 Download Excel
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
                <th className="px-6 py-5 whitespace-nowrap">Property No</th>
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
                  <td className="px-6 py-4 font-black text-slate-900">{item.propertyNo}</td>
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

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2 font-black text-slate-900">
              Total Record - 3908
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Total Pages - 391</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">First</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">Prev</button>
              <button className="w-9 h-9 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-200">1</button>
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

export default LegacyReassessmentPage;
