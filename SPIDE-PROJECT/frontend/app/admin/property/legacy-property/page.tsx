'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Plus, 
  Download, 
  Eye, 
  PenLine, 
  MessageCircle, 
  MessageSquare, 
  Mail, 
  MapPin, 
  BookUser, 
  SquarePen,
  Search,
  RotateCcw
} from 'lucide-react';

interface LegacyProperty {
  id: number;
  addressCode: string;
  owner: string;
  mobileNo: string;
  zone: string;
  ward: string;
  mohalla: string;
  houseNo: string;
  oldArv: string;
  currentArv: string;
  ht: string;
  wt: string;
  st: string;
  arrear: string;
  arrearInterest: string;
  current: string;
  currentInterest: string;
  totalDemand: string;
}

const LegacyPropertyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    ward: '',
    mohalla: '',
    houseNo: '',
    addressCode: '',
    ownerName: '',
    mobileNo: ''
  });

  const sampleData: LegacyProperty[] = [
    {
      id: 1,
      addressCode: '01020005CP',
      owner: 'SMT ISHRAWATI DEVI',
      mobileNo: '9999999999',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0005C',
      oldArv: '2016',
      currentArv: '2016',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '714',
      arrearInterest: '28',
      current: '242',
      currentInterest: '0',
      totalDemand: '984'
    },
    {
      id: 2,
      addressCode: '01020010-S',
      owner: 'BHATAWAR PRASAD SHARMA',
      mobileNo: '9129591020',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0010',
      oldArv: '320',
      currentArv: '1210',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '345',
      arrearInterest: '17',
      current: '145',
      currentInterest: '0',
      totalDemand: '507'
    },
    {
      id: 3,
      addressCode: '01020015-G',
      owner: 'CHERKUT BHUJ',
      mobileNo: '0',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0015',
      oldArv: '500',
      currentArv: '3629',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '2825',
      arrearInterest: '2747',
      current: '435',
      currentInterest: '0',
      totalDemand: '6007'
    },
    {
      id: 4,
      addressCode: '01020018-E',
      owner: 'RAM DEO KEWAT',
      mobileNo: '7398097419',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0018',
      oldArv: '250',
      currentArv: '5040',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '1755',
      arrearInterest: '73',
      current: '605',
      currentInterest: '0',
      totalDemand: '2433'
    },
    {
      id: 5,
      addressCode: '01020021-H',
      owner: 'BHOLAI RAM',
      mobileNo: '0',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0021',
      oldArv: '300',
      currentArv: '6350',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '2214',
      arrearInterest: '91',
      current: '762',
      currentInterest: '0',
      totalDemand: '3067'
    },
    {
      id: 6,
      addressCode: '01020028AJ',
      owner: 'BASMATI DEVI, PRABHU',
      mobileNo: '0',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0028A',
      oldArv: '756',
      currentArv: '3024',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '1180',
      arrearInterest: '105',
      current: '363',
      currentInterest: '0',
      totalDemand: '1648'
    },
    {
      id: 7,
      addressCode: '01020031-O',
      owner: 'JHINKU RAM',
      mobileNo: '0',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0031',
      oldArv: '250',
      currentArv: '2016',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '663',
      arrearInterest: '29',
      current: '242',
      currentInterest: '0',
      totalDemand: '934'
    },
    {
      id: 8,
      addressCode: '01020032-W',
      owner: 'SRI CHANDRIKA',
      mobileNo: '0',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0032',
      oldArv: '0',
      currentArv: '1890',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '0',
      arrearInterest: '0',
      current: '0',
      currentInterest: '0',
      totalDemand: '0'
    },
    {
      id: 9,
      addressCode: '01020004BY',
      owner: 'DEO BALI SINGH',
      mobileNo: '0',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0004B',
      oldArv: '5400',
      currentArv: '7560',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '15290',
      arrearInterest: '14032',
      current: '907',
      currentInterest: '0',
      totalDemand: '30229'
    },
    {
      id: 10,
      addressCode: '01020003-J',
      owner: 'PARDESHI',
      mobileNo: '0',
      zone: 'Zone 5',
      ward: '4',
      mohalla: 'MANBELA PEER SHAHEED',
      houseNo: '0003',
      oldArv: '250',
      currentArv: '2520',
      ht: 'Y',
      wt: 'N',
      st: 'N',
      arrear: '542',
      arrearInterest: '36',
      current: '302',
      currentInterest: '0',
      totalDemand: '880'
    }
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
      ward: '',
      mohalla: '',
      houseNo: '',
      addressCode: '',
      ownerName: '',
      mobileNo: ''
    });
  };

  const ActionIcons = () => (
    <div className="flex flex-wrap gap-1.5 min-w-[240px]">
      <button className="p-1 hover:bg-orange-50 rounded text-orange-500" title="Edit Demand">
        <Plus size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-slate-600" title="Download">
        <Download size={16} />
      </button>
      <button className="p-1 hover:bg-emerald-50 rounded text-emerald-600" title="View">
        <Eye size={16} />
      </button>
      <button className="p-1 hover:bg-red-50 rounded text-red-500" title="Edit">
        <PenLine size={16} />
      </button>
      <button className="p-1 hover:bg-sky-50 rounded text-sky-600 font-black text-xs" title="Legacy ARV">
        A
      </button>
      <button className="p-1 hover:bg-emerald-50 rounded text-emerald-500" title="WhatsApp">
        <MessageCircle size={16} />
      </button>
      <button className="p-1 hover:bg-blue-50 rounded text-blue-500" title="SMS">
        <MessageSquare size={16} />
      </button>
      <button className="p-1 hover:bg-indigo-50 rounded text-indigo-500" title="Email">
        <Mail size={16} />
      </button>
      <button className="p-1 hover:bg-sky-50 rounded text-sky-400" title="Location">
        <MapPin size={16} />
      </button>
      <button className="p-1 hover:bg-pink-50 rounded text-pink-600" title="Contact">
        <BookUser size={16} />
      </button>
      <button className="p-1 hover:bg-orange-50 rounded text-orange-600" title="Match Demand">
        <SquarePen size={16} />
      </button>
    </div>
  );

  return (
    <AdminShell title="Legacy Property" subtitle="Search and manage legacy property records">
      <div className="flex justify-end mb-6">
        <button className="bg-[#d88a3f] text-white px-8 py-2.5 rounded-full font-bold shadow-lg hover:brightness-110 transition-all">
          New
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <form onSubmit={handleSearch} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Ward</label>
                <select 
                  name="ward" 
                  value={formData.ward} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>Select Ward</option>
                  {[1, 2, 3, '3 (NEW)', 4, 5, '6 (NEW)', 6, 7, 8, 9, 10, '11 (NEW)', 11, 12, 13, 14, 15].map(w => (
                    <option key={w} value={w}>{w}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mohalla</label>
                <select 
                  name="mohalla" 
                  value={formData.mohalla} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>Select Mohalla</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">House No</label>
                <input 
                  type="text" 
                  name="houseNo" 
                  placeholder="House No" 
                  value={formData.houseNo} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Address Code</label>
                <input 
                  type="text" 
                  name="addressCode" 
                  placeholder="Address Code" 
                  value={formData.addressCode} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Owner Name</label>
                <input 
                  type="text" 
                  name="ownerName" 
                  placeholder="Owner Name" 
                  value={formData.ownerName} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mobile No</label>
                <input 
                  type="text" 
                  name="mobileNo" 
                  placeholder="Mobile No" 
                  value={formData.mobileNo} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
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
          <table className="w-full text-[13px] text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-4 whitespace-nowrap">Sr. No</th>
                <th className="px-4 py-4 whitespace-nowrap">Address Code</th>
                <th className="px-4 py-4 whitespace-nowrap">Owner</th>
                <th className="px-4 py-4 whitespace-nowrap">Mobile No</th>
                <th className="px-4 py-4 whitespace-nowrap">Zone</th>
                <th className="px-4 py-4 whitespace-nowrap">Ward</th>
                <th className="px-4 py-4 whitespace-nowrap">Mohalla</th>
                <th className="px-4 py-4 whitespace-nowrap">House No</th>
                <th className="px-4 py-4 whitespace-nowrap">Old ARV</th>
                <th className="px-4 py-4 whitespace-nowrap">Current ARV</th>
                <th className="px-4 py-4 whitespace-nowrap">HT</th>
                <th className="px-4 py-4 whitespace-nowrap">WT</th>
                <th className="px-4 py-4 whitespace-nowrap">ST</th>
                <th className="px-4 py-4 whitespace-nowrap">Arrear</th>
                <th className="px-4 py-4 whitespace-nowrap">Arrear Interest</th>
                <th className="px-4 py-4 whitespace-nowrap">Current</th>
                <th className="px-4 py-4 whitespace-nowrap">Current Interest</th>
                <th className="px-4 py-4 whitespace-nowrap">Total Demand</th>
                <th className="px-4 py-4 text-center sticky right-0 bg-slate-50 shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 text-slate-500 whitespace-nowrap">{index + 1}</td>
                  <td className="px-4 py-4 font-black text-slate-900 whitespace-nowrap">{item.addressCode}</td>
                  <td className="px-4 py-4 font-medium text-slate-700 whitespace-nowrap">{item.owner}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.mobileNo}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.zone}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.ward}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.mohalla}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.houseNo}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.oldArv}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.currentArv}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.ht}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.wt}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.st}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.arrear}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.arrearInterest}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.current}</td>
                  <td className="px-4 py-4 text-slate-600 whitespace-nowrap">{item.currentInterest}</td>
                  <td className="px-4 py-4 font-black text-slate-900 whitespace-nowrap">₹{item.totalDemand}</td>
                  <td className="px-4 py-4 sticky right-0 bg-white shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)]">
                    <ActionIcons />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Total Record - 211609 | Page {currentPage} of 21161
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600">First</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600">Previous</button>
              <button className="w-8 h-8 rounded-lg bg-slate-900 text-white text-xs font-bold shadow-lg shadow-slate-200">1</button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">2</button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50">3</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600">Next</button>
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-600">Last</button>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              {[10, 50, 1000].map(size => (
                <button 
                  key={size}
                  onClick={() => setItemsPerPage(size)}
                  className={`w-10 h-8 rounded-lg text-xs font-bold transition-all ${
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

export default LegacyPropertyPage;
