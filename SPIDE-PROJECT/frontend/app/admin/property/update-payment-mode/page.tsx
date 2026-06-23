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
  User,
  Download,
  FileText,
  Map,
  Building2
} from 'lucide-react';

const UpdatePaymentModePage = () => {
  const [activeTab, setActiveTab] = useState('Pending');
  const tabs = ['Pending', 'Completed', 'Rejected'];

  const sampleData = [
    { id: 1, receiptNo: 'RECEIPT1771569882', receiptDate: '2026-02-20', propertyNo: '03010259QM', ownerName: '-', mobile: '-', requestedBy: 'Rohit Rai', requestedDate: '2026-02-20' },
    { id: 2, receiptNo: 'RECEIPT_1737960535', receiptDate: '2025-01-27', propertyNo: '27030938DL', ownerName: '-', mobile: '-', requestedBy: 'Rohit Rai', requestedDate: '2025-03-31' },
    { id: 3, receiptNo: 'RECEIPT_1737960535', receiptDate: '2025-01-27', propertyNo: '27030938DL', ownerName: '-', mobile: '-', requestedBy: 'Rohit Rai', requestedDate: '2025-03-31' },
    { id: 4, receiptNo: 'RECEIPT_1737960535', receiptDate: '2025-01-27', propertyNo: '27030938DL', ownerName: '-', mobile: '-', requestedBy: 'Rohit Rai', requestedDate: '2025-03-31' },
    { id: 5, receiptNo: 'RECEIPT_1737960535', receiptDate: '2025-01-27', propertyNo: '27030938DL', ownerName: '-', mobile: '-', requestedBy: 'Rohit Rai', requestedDate: '2025-03-31' }
  ];

  return (
    <AdminShell title="Update Payment Mode List" subtitle="Manage and verify payment mode update requests">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Search Filter</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">State</label>
                <select disabled className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm bg-slate-50 font-medium text-slate-400 cursor-not-allowed">
                  <option value="2">Uttar Pradesh</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">District</label>
                <select disabled className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm bg-slate-50 font-medium text-slate-400 cursor-not-allowed">
                  <option value="2">Gorakhpur</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City/Village</label>
                <select disabled className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm bg-slate-50 font-medium text-slate-400 cursor-not-allowed">
                  <option value="2">Gorakpur</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                  <option value="">Select Ward</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Type</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
                  <option value="">Select Property Type</option>
                  <option value="1">Residential</option>
                  <option value="3">Non Residential</option>
                  <option value="2">Vacant Land</option>
                  <option value="15">Others</option>
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
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">App Date From</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">App Date To</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Owner Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="text" placeholder="Enter Owner Name" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
                <Search size={18} /> Search
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-10 py-3 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Reset
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <button type="button" className="bg-emerald-600 text-white rounded-xl px-6 py-3 text-sm font-black hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-emerald-100">
                  <Download size={18} /> Excel
                </button>
                <button type="button" className="bg-rose-600 text-white rounded-xl px-6 py-3 text-sm font-black hover:bg-rose-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-rose-100">
                  <FileText size={18} /> PDF
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2.5 rounded-full text-sm font-black transition-all whitespace-nowrap ${
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
                <th className="px-6 py-5 whitespace-nowrap">Receipt No</th>
                <th className="px-6 py-5 whitespace-nowrap">Receipt Date</th>
                <th className="px-6 py-5 whitespace-nowrap">Property No</th>
                <th className="px-6 py-5 whitespace-nowrap">Ownername</th>
                <th className="px-6 py-5 whitespace-nowrap">Mobile Number</th>
                <th className="px-6 py-5 whitespace-nowrap">Requested By</th>
                <th className="px-6 py-5 whitespace-nowrap">Requested Date</th>
                <th className="px-6 py-5 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-blue-600 text-xs">{item.receiptNo}</td>
                  <td className="px-6 py-4 text-slate-500 font-medium text-xs">{item.receiptDate}</td>
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

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2 font-black text-slate-900">
              Total Record - 27
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Total Pages - 3</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">First</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Prev</button>
              <button className="w-9 h-9 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-200">1</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">2</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">3</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">Next</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">Last</button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default UpdatePaymentModePage;
