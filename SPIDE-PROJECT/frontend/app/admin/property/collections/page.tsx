'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Download, 
  FileText, 
  Eye, 
  PenLine, 
  XCircle, 
  UserCircle, 
  MessageCircle, 
  MessageSquare, 
  Mail,
  Filter,
  Calendar,
  Wallet
} from 'lucide-react';

interface PaymentRecord {
  id: number;
  holdingNo: string;
  receiptNo: string;
  zone: string;
  ward: string;
  payee: string;
  amount: string;
  date: string;
  mode: string;
  madeAt: string;
  collectedBy: string;
  approvedBy: string;
}

const CollectionsPage = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    zone: '',
    ward: '',
    madeAt: '',
    collector: '',
    fy: '',
    dateFrom: '',
    dateTo: '',
    holdingNo: '',
    receiptNo: '',
    status: ''
  });

  const tabs = [
    'Completed', 
    'Cheque Pending', 
    'Cheque Rejected', 
    'NB/DD Pending', 
    'NB/DD Verified', 
    'NB/DD Not Verified', 
    'Rejected'
  ];

  const sampleData: PaymentRecord[] = [
    { id: 1, holdingNo: '05050357-K', receiptNo: 'RECEIPT1777706579', zone: 'Zone 5', ward: '43', payee: 'NA', amount: '2539.00', date: '02/05/2026', mode: 'NB', madeAt: 'Online', collectedBy: 'Online', approvedBy: 'NA' },
    { id: 2, holdingNo: '261405112R', receiptNo: 'RECEIPT1777706561', zone: 'Zone 1', ward: '6 (NEW)', payee: 'NA', amount: '1048.00', date: '02/05/2026', mode: 'NB', madeAt: 'Online', collectedBy: 'Online', approvedBy: 'NA' },
    { id: 3, holdingNo: '14040381-E', receiptNo: 'RECEIPT1777706556', zone: 'Zone 3', ward: '51', payee: 'KUMAR', amount: '2267.00', date: '02/05/2026', mode: 'Cash', madeAt: 'CW', collectedBy: 'Mohd Sayeed', approvedBy: 'NA' },
    { id: 4, holdingNo: '07010040BC', receiptNo: 'RECEIPT1777706489', zone: 'Zone 4', ward: '32', payee: 'GAUTAM,GOVIND,GOPI', amount: '719.00', date: '02/05/2026', mode: 'Cash', madeAt: 'CW', collectedBy: 'AMIT SAURABH VERMA', approvedBy: 'NA' },
    { id: 5, holdingNo: '30020014XW', receiptNo: 'RECEIPT1777706479', zone: 'Zone 2', ward: '60', payee: 'FARHAT MAHMOOD', amount: '3290.00', date: '02/05/2026', mode: 'NB', madeAt: 'Online', collectedBy: 'Online', approvedBy: 'NA' },
    { id: 6, holdingNo: '05070529-Z', receiptNo: 'RECEIPT1777706454', zone: 'Zone 5', ward: '7', payee: 'BRIJESH KUMAR KUSHWAHA', amount: '1079.00', date: '02/05/2026', mode: 'Cash', madeAt: 'TC', collectedBy: 'SHIVAM AGRAHARI', approvedBy: 'NA' },
    { id: 7, holdingNo: '14040425AY', receiptNo: 'RECEIPT1777706438', zone: 'Zone 3', ward: '51', payee: 'KUMAR', amount: '701.00', date: '02/05/2026', mode: 'Cash', madeAt: 'CW', collectedBy: 'Mohd Sayeed', approvedBy: 'NA' },
    { id: 8, holdingNo: '05010339NH', receiptNo: 'RECEIPT1777706428', zone: 'Zone 5', ward: '37', payee: 'PRATIBHA RAJ', amount: '1352.00', date: '02/05/2026', mode: 'NB', madeAt: 'Online', collectedBy: 'Online', approvedBy: 'NA' },
    { id: 9, holdingNo: '05010350DP', receiptNo: 'RECEIPT1777706397', zone: 'Zone 5', ward: '37', payee: 'SMT SAKUNTALA TIWARI', amount: '3239.00', date: '02/05/2026', mode: 'NB', madeAt: 'Online', collectedBy: 'Online', approvedBy: 'NA' },
    { id: 10, holdingNo: '03010297VR', receiptNo: 'RECEIPT1777706391', zone: 'Zone 5', ward: '70', payee: 'NA', amount: '1658.00', date: '02/05/2026', mode: 'NB', madeAt: 'Online', collectedBy: 'Online', approvedBy: 'NA' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const ActionIcons = () => (
    <div className="flex items-center gap-1.5 min-w-[200px]">
      <button className="p-1.5 hover:bg-emerald-50 rounded-lg text-emerald-600 transition-all" title="View">
        <Eye size={16} />
      </button>
      <button className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-600 transition-all" title="Edit">
        <PenLine size={16} />
      </button>
      <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 transition-all" title="Download PDF">
        <FileText size={16} />
      </button>
      <button className="p-1.5 hover:bg-red-50 rounded-lg text-red-500 transition-all" title="Reject Payment">
        <XCircle size={16} />
      </button>
      <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-700 transition-all" title="Payee Name">
        <UserCircle size={16} />
      </button>
      <button className="p-1.5 hover:bg-emerald-50 rounded-lg text-emerald-500 transition-all" title="WhatsApp">
        <MessageCircle size={16} />
      </button>
      <button className="p-1.5 hover:bg-blue-50 rounded-lg text-blue-500 transition-all" title="SMS">
        <MessageSquare size={16} />
      </button>
      <button className="p-1.5 hover:bg-indigo-50 rounded-lg text-indigo-500 transition-all" title="Email">
        <Mail size={16} />
      </button>
    </div>
  );

  return (
    <AdminShell title="Payments List" subtitle="Monitor and manage tax collection payments">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Filter size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Advanced Search</h3>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select name="zone" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select name="ward" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">Select Ward</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Payment Made At</label>
                <select name="madeAt" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">--Select--</option>
                  <option value="TC">TC</option>
                  <option value="CW">CW</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Collector</label>
                <select name="collector" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">--Select Collector--</option>
                  <option value="testtc">Test TC</option>
                  <option value="CHANDRA">CHANDRA BHUSHAN</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Financial Year</label>
                <select name="fy" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">--Select Year--</option>
                  <option value="2024_2025">2024-2025</option>
                  <option value="2025_2026">2025-2026</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date From</label>
                <input type="date" name="dateFrom" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date To</label>
                <input type="date" name="dateTo" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Holding No.</label>
                <input type="text" name="holdingNo" placeholder="Holding No" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Receipt No.</label>
                <input type="text" name="receiptNo" placeholder="Receipt No" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</label>
                <select name="status" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 appearance-none bg-white">
                  <option value="">Select Status</option>
                  <option value="Completed">Completed</option>
                  <option value="Rejected">Rejected</option>
                </select>
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

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === tab 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
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
                <th className="px-4 py-5 whitespace-nowrap sticky left-0 bg-slate-50 z-20">Sr. No</th>
                <th className="px-6 py-5 whitespace-nowrap sticky left-12 bg-slate-50 z-20">Holding No</th>
                <th className="px-6 py-5 whitespace-nowrap sticky left-[10.5rem] bg-slate-50 z-20">Receipt No</th>
                <th className="px-6 py-5 whitespace-nowrap">Zone</th>
                <th className="px-4 py-5 whitespace-nowrap">Ward</th>
                <th className="px-6 py-5 whitespace-nowrap">Payee</th>
                <th className="px-6 py-5 whitespace-nowrap">Amount</th>
                <th className="px-6 py-5 whitespace-nowrap">Date</th>
                <th className="px-4 py-5 whitespace-nowrap">Mode</th>
                <th className="px-6 py-5 whitespace-nowrap text-center sticky right-0 bg-slate-50 shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)] z-20">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-4 py-4 text-slate-500 font-medium sticky left-0 bg-white group-hover:bg-slate-50 z-10">{index + 1}</td>
                  <td className="px-6 py-4 font-black text-slate-900 sticky left-12 bg-white group-hover:bg-slate-50 z-10">{item.holdingNo}</td>
                  <td className="px-6 py-4 font-bold text-blue-600 sticky left-[10.5rem] bg-white group-hover:bg-slate-50 z-10 uppercase tracking-tighter text-[11px]">{item.receiptNo}</td>
                  <td className="px-6 py-4 text-slate-600">{item.zone}</td>
                  <td className="px-4 py-4 text-slate-600">{item.ward}</td>
                  <td className="px-6 py-4 text-slate-700 font-medium">{item.payee}</td>
                  <td className="px-6 py-4 font-black text-slate-900">₹{item.amount}</td>
                  <td className="px-6 py-4 text-slate-500 font-bold text-xs uppercase">{item.date}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase ${
                      item.mode === 'NB' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {item.mode}
                    </span>
                  </td>
                  <td className="px-6 py-4 sticky right-0 bg-white group-hover:bg-slate-50 shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)] z-10">
                    <ActionIcons />
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-900 text-white font-black">
                <td colSpan={6} className="px-6 py-5 text-right uppercase tracking-widest text-xs">Total Amount</td>
                <td className="px-6 py-5 text-lg">₹17,892.00</td>
                <td colSpan={3}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Wallet size={14} className="text-blue-500" />
              Total Records: 192772
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div>Page {currentPage} of 19278</div>
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

export default CollectionsPage;
