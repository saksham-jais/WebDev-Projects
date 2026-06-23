'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Filter,
  Calendar,
  Hash,
  Mail,
  Smartphone,
  User,
  ArrowRight
} from 'lucide-react';

const UpdatedContactPage = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const sampleData = [
    { id: 1, propertyNo: '05030442-N', date: '31/07/2024', oldEmail: 'NA', oldMobile: '8574525891', newEmail: 'rohitrrai91@gmail.com', newMobile: '7800540088', updatedBy: 'Rohit Rai' },
    { id: 2, propertyNo: '05010001-X', date: '01/08/2024', oldEmail: 'NA', oldMobile: '0', newEmail: 'na@gmail.com', newMobile: '7398839791', updatedBy: 'Rohit Rai' },
    { id: 3, propertyNo: '05010009-J', date: '01/08/2024', oldEmail: 'NA', oldMobile: '0', newEmail: 'na@gmail.com', newMobile: '7398901508', updatedBy: 'Rohit Rai' },
    { id: 4, propertyNo: '05010010-W', date: '01/08/2024', oldEmail: 'NA', oldMobile: '0', newEmail: 'na@gmail.com', newMobile: '7786820988', updatedBy: 'Rohit Rai' },
    { id: 5, propertyNo: '05010012-M', date: '01/08/2024', oldEmail: 'NA', oldMobile: '0', newEmail: 'na@gmail.com', newMobile: '7518995154', updatedBy: 'Rohit Rai' },
    { id: 6, propertyNo: '05010013-U', date: '01/08/2024', oldEmail: 'NA', oldMobile: '0', newEmail: 'na@gmail.com', newMobile: '9838085960', updatedBy: 'Rohit Rai' },
    { id: 7, propertyNo: 'TEST000001', date: '01/08/2024', oldEmail: 'NA', oldMobile: '7299424027', newEmail: 'solomon@logikoof.com', newMobile: '7299424027', updatedBy: 'Admin' },
    { id: 8, propertyNo: '05020253-M', date: '03/08/2024', oldEmail: 'NA', oldMobile: '0', newEmail: 'pandeyrss1995@gmail.com', newMobile: '09169033731', updatedBy: 'Ravi' },
    { id: 9, propertyNo: '05020257AQ', date: '03/08/2024', oldEmail: 'NA', oldMobile: '0', newEmail: 'raj.s@logikoof.in', newMobile: '09335666743', updatedBy: 'Ravi' },
    { id: 10, propertyNo: '05020257AQ', date: '03/08/2024', oldEmail: 'raj.s@logikoof.in', oldMobile: '09335666743', newEmail: 'raj.s@logikoof.in', newMobile: '9335666743', updatedBy: 'Ravi' }
  ];

  return (
    <AdminShell title="Contact List" subtitle="Monitor changes to property owner contact information">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Filter Changes</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Type</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white font-medium">
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
                <th className="px-6 py-5 whitespace-nowrap text-amber-600 bg-amber-50/30">Old Email</th>
                <th className="px-6 py-5 whitespace-nowrap text-amber-600 bg-amber-50/30">Old Mobile</th>
                <th className="px-6 py-5 whitespace-nowrap text-emerald-600 bg-emerald-50/30">New Email</th>
                <th className="px-6 py-5 whitespace-nowrap text-emerald-600 bg-emerald-50/30">New Mobile</th>
                <th className="px-6 py-5 whitespace-nowrap">Updated By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-900">{item.propertyNo}</td>
                  <td className="px-6 py-4 font-bold text-slate-500 uppercase text-[10px] tracking-wider">{item.date}</td>
                  <td className="px-6 py-4 text-slate-400 italic bg-amber-50/10 text-xs">{item.oldEmail}</td>
                  <td className="px-6 py-4 text-slate-400 bg-amber-50/10 font-bold text-xs">{item.oldMobile}</td>
                  <td className="px-6 py-4 text-emerald-600 font-medium bg-emerald-50/10 text-xs">{item.newEmail}</td>
                  <td className="px-6 py-4 text-emerald-700 font-black bg-emerald-50/10 text-xs">{item.newMobile}</td>
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

export default UpdatedContactPage;
