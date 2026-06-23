'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Eye, 
  Edit3, 
  Trash2, 
  Download, 
  MessageCircle, 
  Mail, 
  MapPin, 
  BookUser, 
  RefreshCw,
  UserCog,
  FileText,
  Search,
  RotateCcw
} from 'lucide-react';

interface Property {
  id: number;
  propertyNo: string;
  owners: string;
  mobileNo: string;
  zone: string;
  ward: string;
  address: string;
  type: string;
  totalDemand: string;
  createdBy: string;
  createdOn: string;
  activeBy?: string;
  activeOn?: string;
  status: string;
  hasMarker?: boolean;
}

const PropertyList = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    zone: '',
    ward: '',
    propertyType: '',
    propertyNo: '',
    applicationNo: '',
    applicationDateFrom: '',
    applicationDateTo: '',
    ownerName: '',
    mobileNo: '',
    oldHoldingNumber: '',
    status: 'Active'
  });

  // Sample data extracted from the user's provided HTML
  const allProperties: Property[] = [
    {
      id: 1,
      propertyNo: 'GMC_PROP000702',
      owners: '0',
      mobileNo: '1234567890',
      zone: 'Zone 1',
      ward: '14',
      address: '00',
      type: 'Others',
      totalDemand: '3331.00',
      createdBy: 'Ravi',
      createdOn: '17/09/2024',
      activeBy: 'Ravi',
      activeOn: '17/09/2024',
      status: 'Active'
    },
    {
      id: 2,
      propertyNo: 'GMC_PROP000701',
      owners: 'TEST BY ROHIT',
      mobileNo: '1234567898',
      zone: 'Zone 1',
      ward: '1',
      address: 'NAABCHSHJD AJHSDGE GKP',
      type: 'Residential',
      totalDemand: '11952.00',
      createdBy: 'Rohit Rai',
      createdOn: '08/08/2024',
      activeBy: 'Rohit Rai',
      activeOn: '08/08/2024',
      status: 'Active'
    },
    {
      id: 3,
      propertyNo: 'GMC_PROP000700',
      owners: 'ROHIT RAI',
      mobileNo: '7800540088',
      zone: 'Zone 1',
      ward: '14',
      address: 'nAGaytri nagar gorakhpur',
      type: 'Residential',
      totalDemand: '11159.00',
      createdBy: 'Rohit Rai',
      createdOn: '08/08/2024',
      activeBy: 'Rohit Rai',
      activeOn: '08/08/2024',
      status: 'Active'
    },
    {
      id: 4,
      propertyNo: 'GMC_PROP000699',
      owners: 'pppp',
      mobileNo: '9097229447',
      zone: 'Zone 5',
      ward: '2',
      address: '00TESTJANGAL TULSIRAM',
      type: 'Residential',
      totalDemand: '16709.00',
      createdBy: 'Ravi',
      createdOn: '03/06/2024',
      activeBy: 'NA',
      activeOn: 'NA',
      status: 'Active'
    },
    {
      id: 5,
      propertyNo: 'GMC_PROP000698',
      owners: 'AMARJIT MISHRA',
      mobileNo: '9838077024',
      zone: 'Zone 5',
      ward: '37',
      address: '241GBASARATPUR EASTBASARATPUR EAST',
      type: 'Residential',
      totalDemand: '15154.00',
      createdBy: 'PARITOSH TIWARI',
      createdOn: '31/05/2024',
      activeBy: 'Ravi',
      activeOn: '31/05/2024',
      status: 'Active',
      hasMarker: true
    },
    {
      id: 6,
      propertyNo: 'GMC_PROP000697',
      owners: 'PRABHAWATI MISHRA',
      mobileNo: '9415317490',
      zone: 'Zone 5',
      ward: '29',
      address: '603BCHACKSA HUSAINGORAKHPUR',
      type: 'Residential',
      totalDemand: '23772.00',
      createdBy: 'PARITOSH TIWARI',
      createdOn: '31/05/2024',
      activeBy: 'Ravi',
      activeOn: '31/05/2024',
      status: 'Active'
    },
    {
      id: 7,
      propertyNo: 'GMC_PROP000696',
      owners: 'SHANTI RANI',
      mobileNo: '6387626521',
      zone: 'Zone 5',
      ward: '29',
      address: '594ACHACKSA HUSAINGORAKHPUR',
      type: 'Residential',
      totalDemand: '340.00',
      createdBy: 'PARITOSH TIWARI',
      createdOn: '31/05/2024',
      activeBy: 'Ravi',
      activeOn: '31/05/2024',
      status: 'Active'
    },
    {
      id: 8,
      propertyNo: 'GMC_PROP000695',
      owners: 'BRIJESH KUMAR GUPTA',
      mobileNo: '9795439789',
      zone: 'Zone 5',
      ward: '29',
      address: '396CJATEPUR NORTH NEW AREA GORAKHPUR',
      type: 'Residential',
      totalDemand: '4660.00',
      createdBy: 'PARITOSH TIWARI',
      createdOn: '31/05/2024',
      activeBy: 'Ravi',
      activeOn: '31/05/2024',
      status: 'Active'
    },
    {
      id: 9,
      propertyNo: 'GMC_PROP000694',
      owners: 'RAM NARAYAN YADAV',
      mobileNo: '9140097967',
      zone: 'Zone 5',
      ward: '29',
      address: '600CHACKSA HUSAINGORAKHPUR',
      type: 'Residential',
      totalDemand: '1921.00',
      createdBy: 'PARITOSH TIWARI',
      createdOn: '31/05/2024',
      activeBy: 'Ravi',
      activeOn: '31/05/2024',
      status: 'Active'
    },
    {
      id: 10,
      propertyNo: 'GMC_PROP000693',
      owners: 'DHRU NARAYAN ROY',
      mobileNo: '8318531194',
      zone: 'Zone 5',
      ward: '29',
      address: '601CHACKSA HUSAINGORAKHPUR',
      type: 'Residential',
      totalDemand: '3908.00',
      createdBy: 'PARITOSH TIWARI',
      createdOn: '31/05/2024',
      activeBy: 'Ravi',
      activeOn: '31/05/2024',
      status: 'Active',
      hasMarker: true
    }
  ];

  const getPropertyData = () => {
    // In a real app, this would filter based on activeTab
    // For now, returning all for Active, and empty for others
    if (activeTab === 'Active') return allProperties;
    return [];
  };

  const properties = getPropertyData();
  const paginatedProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search with filters:', formData);
  };

  const handleReset = () => {
    setFormData({
      zone: '',
      ward: '',
      propertyType: '',
      propertyNo: '',
      applicationNo: '',
      applicationDateFrom: '',
      applicationDateTo: '',
      ownerName: '',
      mobileNo: '',
      oldHoldingNumber: '',
      status: 'Active'
    });
    setCurrentPage(1);
  };

  const ActionIcons = ({ hasMarker }: { hasMarker?: boolean }) => (
    <div className="flex flex-wrap gap-1.5 min-w-[220px]">
      <button className="p-1 hover:bg-slate-100 rounded text-emerald-600" title="View">
        <Eye size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-sky-500 flex items-center justify-center font-bold text-[10px]" title="UP Edit">
        <span className="w-4 h-4 border border-sky-500 rounded flex items-center justify-center">R</span>
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-sky-500" title="Edit">
        <Edit3 size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-sky-500" title="Update ID">
        <UserCog size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-rose-500" title="Delete">
        <Trash2 size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-red-600" title="Delete Red">
        <Trash2 size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-slate-600" title="Download">
        <Download size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-emerald-500" title="WhatsApp">
        <MessageCircle size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-blue-500" title="SMS">
        <MessageCircle size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-indigo-500" title="Email">
        <Mail size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-sky-400" title="Location">
        <MapPin size={16} />
      </button>
      <button className="p-1 hover:bg-slate-100 rounded text-pink-600" title="Contact">
        <BookUser size={16} />
      </button>
    </div>
  );

  return (
    <AdminShell title="Property List" subtitle="Manage and view all properties in the system">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <form onSubmit={handleSearch} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Zone</label>
                <select 
                  name="zone" 
                  value={formData.zone} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>Select Zone</option>
                  <option value="1">Zone 1</option>
                  <option value="2">Zone 2</option>
                  <option value="3">Zone 3</option>
                  <option value="4">Zone 4</option>
                  <option value="5">Zone 5</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Ward</label>
                <select 
                  name="ward" 
                  value={formData.ward} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>Select Ward</option>
                  {/* Wards would be populated based on zone */}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Property Type</label>
                <select 
                  name="propertyType" 
                  value={formData.propertyType} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>Select Property Type</option>
                  <option value="1">Residential</option>
                  <option value="2">Vacant Land</option>
                  <option value="3">Non Residential</option>
                  <option value="15">Others</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Property No</label>
                <input 
                  type="text" 
                  name="propertyNo" 
                  placeholder="Property No" 
                  value={formData.propertyNo} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Application No</label>
                <input 
                  type="text" 
                  name="applicationNo" 
                  placeholder="Application No" 
                  value={formData.applicationNo} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Application Date From</label>
                <input 
                  type="date" 
                  name="applicationDateFrom" 
                  value={formData.applicationDateFrom} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Application Date To</label>
                <input 
                  type="date" 
                  name="applicationDateTo" 
                  value={formData.applicationDateTo} 
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

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Old Holding No</label>
                <input 
                  type="text" 
                  name="oldHoldingNumber" 
                  placeholder="Old Holding No" 
                  value={formData.oldHoldingNumber} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Status</label>
                <select 
                  name="status" 
                  value={formData.status} 
                  onChange={handleInputChange} 
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="" disabled>Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Mutated">Mutated</option>
                  <option value="Deleted">Deleted</option>
                </select>
              </div>

              <div className="flex items-end gap-2 lg:col-span-1">
                <button type="submit" className="flex-1 bg-slate-900 text-white rounded-xl px-4 py-2.5 text-sm font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  <Search size={16} /> Search
                </button>
                <button type="button" onClick={handleReset} className="bg-slate-100 text-slate-600 rounded-xl px-4 py-2.5 text-sm font-bold hover:bg-slate-200 transition-all">
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button type="button" className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-xl px-6 py-2.5 text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                <Download size={16} /> Download Excel
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mb-6 overflow-x-auto">
        <div className="flex border-b border-slate-200 min-w-max">
          {['Active', 'Pending', 'Rejected', 'Mutated', 'Open Ledger'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
              className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${
                activeTab === tab 
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">Sr. No</th>
                <th className="px-6 py-4 whitespace-nowrap">Property No</th>
                <th className="px-6 py-4 whitespace-nowrap">Owners(s)</th>
                <th className="px-6 py-4 whitespace-nowrap">Mobile No</th>
                <th className="px-6 py-4 whitespace-nowrap">Zone</th>
                <th className="px-6 py-4 whitespace-nowrap">Ward</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4 whitespace-nowrap">Type</th>
                <th className="px-6 py-4 whitespace-nowrap">Total Demand</th>
                <th className="px-6 py-4 whitespace-nowrap">Created By</th>
                <th className="px-6 py-4 whitespace-nowrap">Created On</th>
                {activeTab === 'Active' && (
                  <>
                    <th className="px-6 py-4 whitespace-nowrap">Active By</th>
                    <th className="px-6 py-4 whitespace-nowrap">Active On</th>
                  </>
                )}
                <th className="px-6 py-4 text-center sticky right-0 bg-slate-50 shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedProperties.length > 0 ? (
                paginatedProperties.map((property, index) => (
                  <tr key={property.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="px-6 py-4 font-black text-slate-900 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {property.propertyNo}
                        {property.hasMarker && <MapPin size={14} className="text-blue-500 fill-blue-50" />}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">{property.owners}</td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{property.mobileNo}</td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{property.zone}</td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{property.ward}</td>
                    <td className="px-6 py-4 text-slate-500 max-w-xs truncate">{property.address}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        property.type === 'Residential' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {property.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-black text-slate-900 whitespace-nowrap">₹{property.totalDemand}</td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{property.createdBy}</td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{property.createdOn}</td>
                    {activeTab === 'Active' && (
                      <>
                        <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{property.activeBy}</td>
                        <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{property.activeOn}</td>
                      </>
                    )}
                    <td className="px-6 py-4 sticky right-0 bg-white shadow-[-10px_0_10px_-10px_rgba(0,0,0,0.1)]">
                      <ActionIcons hasMarker={property.hasMarker} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={15} className="px-6 py-12 text-center text-slate-500 italic">
                    No properties found for the selected tab.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {properties.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Total Records: {properties.length} | Page {currentPage} of {totalPages}
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(1)} 
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-50"
              >
                «
              </button>
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                disabled={currentPage === 1}
                className="px-3 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 disabled:opacity-50"
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
                <button 
                  key={i + 1} 
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                    currentPage === i + 1 
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                disabled={currentPage === totalPages}
                className="px-3 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 disabled:opacity-50"
              >
                Next
              </button>
              <button 
                onClick={() => setCurrentPage(totalPages)} 
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 disabled:opacity-50"
              >
                »
              </button>
              
              <div className="ml-4 flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Show:</span>
                <select 
                  value={itemsPerPage} 
                  onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                  className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-bold text-slate-700 outline-none focus:border-blue-500"
                >
                  <option value={10}>10</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .text-success { color: #10b981; }
        .text-info { color: #0ea5e9; }
        .text-danger { color: #ef4444; }
        .border-info { border-color: #0ea5e9; }
      `}</style>
    </AdminShell>
  );
};

export default PropertyList;
