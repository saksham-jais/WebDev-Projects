'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Download, 
  FileText, 
  Filter,
  Calendar,
  Wallet,
  ArrowRight
} from 'lucide-react';

interface MyCollectionRecord {
  id: number;
  holdingNo: string;
  receiptNo: string;
  status: string;
  zone: string;
  ward: string;
  payee: string;
  amount: string;
  date: string;
  mode: string;
  transactionId: string;
  bankName: string;
  madeAt: string;
  collectedBy: string;
}

const MyCollectionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    zone: '',
    ward: '',
    mop: '',
    status: '',
    dateFrom: '',
    dateTo: ''
  });

  const sampleData: MyCollectionRecord[] = [
    { id: 1, holdingNo: '04070207VG', receiptNo: 'RECEIPT1774417322', status: 'Completed', zone: 'Zone 1', ward: '28', payee: 'SMT.CHANDRAWATI DEVI', amount: '7002.00', date: '25/03/2026', mode: 'NB', transactionId: '', bankName: '', madeAt: 'CW', collectedBy: 'Dheeraj srivastava' },
    { id: 2, holdingNo: '26080623-R', receiptNo: 'RECEIPT1773817253', status: 'Completed', zone: 'Zone 1', ward: '1', payee: 'RAMESHWAR MANI', amount: '612.00', date: '18/03/2026', mode: 'Cash', transactionId: '', bankName: '', madeAt: 'CW', collectedBy: 'Dheeraj srivastava' },
    { id: 3, holdingNo: '26041051AZ', receiptNo: 'RECEIPT1772693683', status: 'Completed', zone: 'Zone 1', ward: '3', payee: 'SRI PARDESHI YADAV', amount: '454.00', date: '05/03/2026', mode: 'Cash', transactionId: '', bankName: '', madeAt: 'CW', collectedBy: 'Dheeraj srivastava' },
    { id: 4, holdingNo: '27030390-G', receiptNo: 'RECEIPT1769510109', status: 'Completed', zone: 'Zone 1', ward: '15', payee: 'ABHISEK,RAJNI,RICHA DIPTI', amount: '12000.00', date: '27/01/2026', mode: 'NB', transactionId: '', bankName: '', madeAt: 'CW', collectedBy: 'Dheeraj srivastava' },
    { id: 5, holdingNo: '03090115EA', receiptNo: 'RECEIPT1760522524', status: 'Completed', zone: 'Zone 5', ward: '6', payee: 'ONLINE PAYMENT', amount: '1246.00', date: '15/10/2025', mode: 'NB', transactionId: '', bankName: '', madeAt: 'CW', collectedBy: 'Dheeraj srivastava' },
    { id: 6, holdingNo: '12030249-A', receiptNo: 'RECEIPT1757576998', status: 'Completed', zone: 'Zone 3', ward: '26', payee: 'BINOD KUMAR', amount: '15196.00', date: '11/09/2025', mode: 'NB', transactionId: '', bankName: '', madeAt: 'TC', collectedBy: 'Dheeraj srivastava' },
    { id: 7, holdingNo: '14050061AA', receiptNo: 'RECEIPT1757567181', status: 'Completed', zone: 'Zone 2', ward: '67', payee: 'SHAMMO KHATOON, KHAN SHABNA ABDUL SAMAD', amount: '32162.00', date: '11/09/2025', mode: 'NB', transactionId: '', bankName: '', madeAt: 'System', collectedBy: 'Dheeraj srivastava' },
    { id: 8, holdingNo: '05020969AD', receiptNo: 'RECEIPT1755929063', status: 'Completed', zone: 'Zone 5', ward: '31', payee: 'SMT SANDHYA PANDEY', amount: '1161.00', date: '23/08/2025', mode: 'NB', transactionId: '', bankName: '', madeAt: 'TC', collectedBy: 'Dheeraj srivastava' },
    { id: 9, holdingNo: '29070300ZE', receiptNo: 'RECEIPT_1753514773', status: 'Completed', zone: 'Zone 2', ward: '21', payee: 'SUBHASH C.,SACHCHIDANAND', amount: '25738.00', date: '26/07/2025', mode: 'NB', transactionId: '', bankName: '', madeAt: 'TC', collectedBy: 'Dheeraj srivastava' },
    { id: 10, holdingNo: '29100016CR', receiptNo: 'RECEIPT_1753278395', status: 'Completed', zone: 'Zone 2', ward: '46', payee: 'SATISH PRASAD BARANWAL', amount: '7241.00', date: '23/07/2025', mode: 'NB', transactionId: '', bankName: '', madeAt: 'TC', collectedBy: 'Dheeraj srivastava' }
  ];

  return (
    <AdminShell title="My Collections" subtitle="View and track your personal tax collection records">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Filter Records</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">Select Ward</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Payment Mode</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">--Select Mode--</option>
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                  <option value="DD">DD</option>
                  <option value="NB">Cards/Net Banking</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">--Select Status--</option>
                  <option value="Completed">Paid</option>
                  <option value="VerificationPending">Verification Pending</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date From</label>
                <input type="date" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date To</label>
                <input type="date" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button type="submit" className="bg-slate-900 text-white rounded-xl px-8 py-3 text-sm font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> Search
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-8 py-3 text-sm font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                <RotateCcw size={16} /> Reset
              </button>
              <button type="button" className="bg-emerald-600 text-white rounded-xl px-8 py-3 text-sm font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-100 ml-auto">
                <Download size={16} /> Download Excel
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
                <th className="px-4 py-5 whitespace-nowrap sticky left-0 bg-slate-50 z-20">Sr. No</th>
                <th className="px-6 py-5 whitespace-nowrap sticky left-12 bg-slate-50 z-20">Holding No</th>
                <th className="px-6 py-5 whitespace-nowrap sticky left-[10.5rem] bg-slate-50 z-20">Receipt No</th>
                <th className="px-6 py-5 whitespace-nowrap">Status</th>
                <th className="px-6 py-5 whitespace-nowrap">Zone</th>
                <th className="px-4 py-5 whitespace-nowrap">Ward</th>
                <th className="px-6 py-5 whitespace-nowrap">Payee</th>
                <th className="px-6 py-5 whitespace-nowrap">Amount</th>
                <th className="px-6 py-5 whitespace-nowrap">Date</th>
                <th className="px-4 py-5 whitespace-nowrap">Mode</th>
                <th className="px-6 py-5 whitespace-nowrap">TXN ID/Cheque No</th>
                <th className="px-6 py-5 whitespace-nowrap">Bank Name</th>
                <th className="px-6 py-5 whitespace-nowrap">Made At</th>
                <th className="px-6 py-5 whitespace-nowrap">Collector</th>
                <th className="px-6 py-5 whitespace-nowrap text-center sticky right-0 bg-slate-50 shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)] z-20">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-4 py-4 text-slate-500 font-medium sticky left-0 bg-white group-hover:bg-slate-50 z-10">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-900 sticky left-12 bg-white group-hover:bg-slate-50 z-10">{item.holdingNo}</td>
                  <td className="px-6 py-4 font-bold text-blue-600 sticky left-[10.5rem] bg-white group-hover:bg-slate-50 z-10 uppercase tracking-tighter text-[11px]">{item.receiptNo}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{item.zone}</td>
                  <td className="px-4 py-4 text-slate-600">{item.ward}</td>
                  <td className="px-6 py-4 text-slate-700 font-medium whitespace-nowrap">{item.payee}</td>
                  <td className="px-6 py-4 font-black text-slate-900">₹{item.amount}</td>
                  <td className="px-6 py-4 text-slate-500 font-bold text-xs uppercase">{item.date}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase ${
                      item.mode === 'NB' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {item.mode}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400 italic text-xs">{item.transactionId || 'N/A'}</td>
                  <td className="px-6 py-4 text-slate-400 italic text-xs">{item.bankName || 'N/A'}</td>
                  <td className="px-6 py-4 font-bold text-slate-600">{item.madeAt}</td>
                  <td className="px-6 py-4 text-slate-500 text-xs font-medium">{item.collectedBy}</td>
                  <td className="px-6 py-4 sticky right-0 bg-white group-hover:bg-slate-50 shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)] z-10 text-center">
                    <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-all" title="View Receipt">
                      <FileText size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Wallet size={14} className="text-blue-500" />
              Total Records: 466
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Page {currentPage} of 47</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">First</button>
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">Prev</button>
              <button className="w-9 h-9 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg shadow-slate-200">1</button>
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

export default MyCollectionsPage;
