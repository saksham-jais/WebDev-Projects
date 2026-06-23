'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Download,
  Filter,
  Building,
  Hash,
  LayoutGrid
} from 'lucide-react';

const MohallaDemandPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const wards = [
    '1', '2', '3', '3_NEW', '4', '5', '6_NEW', '6', '7', '8', '9', '10', 
    '11_NEW', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '30_NEW',
    '31', '31_NEW', '32', '33', '34', '35', '36', '37_NEW', '37', '38',
    '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62',
    '63', '64', '65', '66', '67', '68', '69', '70'
  ];

  const sampleData = [
    { id: 1, mohalla: 'ABU BAZAR', ward: '49' },
    { id: 2, mohalla: 'ALHADADPUR', ward: '55' },
    { id: 3, mohalla: 'ALI NAGAR NORTH', ward: '61' },
    { id: 4, mohalla: 'ALI NAGAR SOUTH', ward: '61' },
    { id: 5, mohalla: 'ANDHIYARI BAGH', ward: '23' },
    { id: 6, mohalla: 'ANDHIYARI BAGH', ward: '49' },
    { id: 7, mohalla: 'ASKAR GANJ', ward: '66' },
    { id: 8, mohalla: 'AWASH VIKASH COLONY-JHARKHANDI', ward: '1' },
    { id: 9, mohalla: 'BADGO', ward: '11 (NEW)' },
    { id: 10, mohalla: 'BANKATI CHACK', ward: '53' },
    { id: 11, mohalla: 'BARGADAWA', ward: '10' },
    { id: 12, mohalla: 'BASANTPUR KHAS', ward: '35' },
    { id: 13, mohalla: 'BASANTPUR MUTNAZA', ward: '35' },
    { id: 14, mohalla: 'BASARATPUR EAST', ward: '37' },
    { id: 15, mohalla: 'BASARATPUR KHAS', ward: '7' },
    { id: 16, mohalla: 'BASARATPUR KHASH(S.B.I.COLONY)', ward: '7' },
    { id: 17, mohalla: 'BASARATPUR WEST', ward: '7' },
    { id: 18, mohalla: 'BASARATPUR WEST', ward: '9' },
    { id: 19, mohalla: 'BASARATPUR WEST', ward: '43' },
    { id: 20, mohalla: 'BASARATPUR WEST', ward: '70' }
  ];

  return (
    <AdminShell title="Mohalla Demand" subtitle="Generate and download demand reports organized by locality">
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Locality Filter</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward Selection</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <LayoutGrid size={18} />
                  </div>
                  <select className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-3 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white">
                    <option value="">Select Ward</option>
                    {wards.map(w => <option key={w} value={w}>{w.includes('NEW') ? w : `Ward ${w}`}</option>)}
                  </select>
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

      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="px-8 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-8 py-5 whitespace-nowrap">Mohalla Name</th>
                <th className="px-8 py-5 whitespace-nowrap">Ward Number</th>
                <th className="px-8 py-5 whitespace-nowrap text-center">Export Demand</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-4 text-slate-500 font-medium">{index + 1}</td>
                  <td className="px-8 py-4 font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.mohalla}</td>
                  <td className="px-8 py-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-black uppercase">
                      <Hash size={12} /> {item.ward}
                    </div>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <button className="inline-flex items-center gap-2 px-6 py-2 bg-rose-50 text-rose-600 rounded-xl text-xs font-black hover:bg-rose-600 hover:text-white transition-all shadow-sm border border-rose-100 uppercase tracking-widest">
                      <Download size={14} /> PDF Demand
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
              Total Mohallas - 238
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Viewing 20 per page</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button className="w-9 h-9 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg shadow-slate-200">1</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">2</button>
              <button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">3</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default MohallaDemandPage;
