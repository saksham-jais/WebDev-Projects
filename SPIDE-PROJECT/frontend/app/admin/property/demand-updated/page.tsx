'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Eye,
  Calendar,
  MapPin,
  User,
  Activity
} from 'lucide-react';

interface UpdatedDemand {
  id: number;
  zone: string;
  propertyNo: string;
  doneBy: string;
  doneOn: string;
}

const DemandUpdatedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    addressCode: '',
    zone: '',
    dateFrom: '',
    dateTo: ''
  });

  const sampleData: UpdatedDemand[] = [
    { id: 1, zone: 'Zone 5', propertyNo: '01020001-T', doneBy: 'Rohit Rai', doneOn: '2025-09-03' },
    { id: 2, zone: 'Zone 5', propertyNo: '01020002BI', doneBy: 'Rohit Rai', doneOn: '2025-09-03' },
    { id: 3, zone: 'Zone 2', propertyNo: 'TEST0015-G', doneBy: 'Admin', doneOn: '2025-09-04' },
    { id: 4, zone: 'Zone 5', propertyNo: '01020005CP', doneBy: 'Rohit Rai', doneOn: '2025-09-04' },
    { id: 5, zone: 'Zone 5', propertyNo: '01020001BA', doneBy: 'Rohit Rai', doneOn: '2025-09-05' },
    { id: 6, zone: 'Zone 3', propertyNo: '07110233-B', doneBy: 'Rohit Rai', doneOn: '2025-09-11' },
    { id: 7, zone: 'Zone 2', propertyNo: '15040391-N', doneBy: 'Rohit Rai', doneOn: '2025-09-12' },
    { id: 8, zone: 'Zone 2', propertyNo: '15040391-N', doneBy: 'Pradeep', doneOn: '2025-09-12' },
    { id: 9, zone: 'Zone', propertyNo: 'test123456', doneBy: 'Admin', doneOn: '2025-09-16' },
    { id: 10, zone: 'Zone 2', propertyNo: 'TEST0015-G', doneBy: 'Admin', doneOn: '2025-09-16' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching...', formData);
  };

  const handleReset = () => {
    setFormData({
      addressCode: '',
      zone: '',
      dateFrom: '',
      dateTo: ''
    });
  };

  return (
    <AdminShell title="Demand Updated List" subtitle="Track and view updated property demands">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Address Code</label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="addressCode" 
                    placeholder="Address Code" 
                    value={formData.addressCode} 
                    onChange={handleInputChange} 
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                  />
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Zone</label>
                <select 
                  name="zone" 
                  value={formData.zone} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white"
                >
                  <option value="" disabled>Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => (
                    <option key={z} value={z}>Zone {z}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Date From</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="dateFrom" 
                    value={formData.dateFrom} 
                    onChange={handleInputChange} 
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                  />
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Date To</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="dateTo" 
                    value={formData.dateTo} 
                    onChange={handleInputChange} 
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                  />
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" className="bg-slate-900 text-white rounded-xl px-8 py-2.5 text-sm font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> Search
              </button>
              <button type="button" onClick={handleReset} className="bg-slate-100 text-slate-600 rounded-xl px-8 py-2.5 text-sm font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                <RotateCcw size={16} /> Reset
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
                <th className="px-8 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-8 py-5 whitespace-nowrap">Zone</th>
                <th className="px-8 py-5 whitespace-nowrap">Property No</th>
                <th className="px-8 py-5 whitespace-nowrap">Done By</th>
                <th className="px-8 py-5 whitespace-nowrap">Done On</th>
                <th className="px-8 py-5 whitespace-nowrap text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-4 text-slate-500 font-medium">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      {item.zone}
                    </div>
                  </td>
                  <td className="px-8 py-4 font-black text-slate-900">{item.propertyNo}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <User size={14} className="text-slate-400" />
                      {item.doneBy}
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                      <Calendar size={14} className="text-slate-300" />
                      {item.doneOn}
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex justify-center">
                      <button className="p-2 hover:bg-emerald-50 rounded-lg text-emerald-600 transition-all active:scale-90" title="View Details">
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
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-blue-500" />
              Total Records: 4304
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Page {currentPage} of 431</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">First</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Prev</button>
              <button className="w-9 h-9 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg shadow-slate-200">1</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">2</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">3</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Next</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Last</button>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              {[10, 50, 100].map(size => (
                <button 
                  key={size}
                  onClick={() => setItemsPerPage(size)}
                  className={`w-11 h-9 rounded-xl text-xs font-bold transition-all ${
                    itemsPerPage === size 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
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

export default DemandUpdatedPage;
