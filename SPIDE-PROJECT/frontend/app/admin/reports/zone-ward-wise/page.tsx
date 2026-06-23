'use client';

import React from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Search, 
  RotateCcw, 
  Download, 
  Calendar,
  Filter,
  ArrowLeft,
  Settings,
  BadgeIndianRupee,
  MapPin,
  Building2,
  Table as TableIcon
} from 'lucide-react';
import Link from 'next/link';

const ZoneWardWiseReportPage = () => {
  const sampleData = [
    {
      zone: 'Zone 2',
      totalCollection: 138071228.40,
      wards: [
        { id: '19', properties: 1241, collection: 6422678.00 },
        { id: '21', properties: 1598, collection: 25057500.00 },
        { id: '25', properties: 1231, collection: 5696231.00 },
        { id: '30', properties: 1264, collection: 9800481.00 },
        { id: '35', properties: 1562, collection: 7203398.20 }
      ]
    },
    {
      zone: 'Zone 1',
      totalCollection: 299312155.70,
      wards: [
        { id: '1', properties: 2958, collection: 57347652.00 },
        { id: '3', properties: 2680, collection: 16929248.40 },
        { id: '5', properties: 3135, collection: 9576830.02 }
      ]
    }
  ];

  return (
    <AdminShell title="Zone and Ward Wise Report" subtitle="Comparative analysis of property counts and collection totals across administrative divisions">
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <TableIcon size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Report Filters</h3>
          </div>
        </div>

        <div className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">State</label>
                <select disabled className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm bg-slate-50 text-slate-400 font-medium">
                  <option value="2">Uttar Pradesh</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">District</label>
                <select disabled className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm bg-slate-50 text-slate-400 font-medium">
                  <option value="2">Gorakhpur</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">City/Village</label>
                <select disabled className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm bg-slate-50 text-slate-400 font-medium">
                  <option value="2">Gorakpur</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Zone</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select Zone</option>
                  {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ward</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select Ward</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Collected By</label>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white font-medium">
                  <option value="">Select</option>
                  <option value="NNG">NNG</option>
                  <option value="LGF">LGF</option>
                  <option value="NNGaLGF">NNG & LGF</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date From</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date To</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="date" className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <button type="submit" className="bg-blue-600 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-blue-100">
                <Search size={18} /> Search
              </button>
              <button type="button" className="bg-emerald-600 text-white rounded-xl px-10 py-3 text-sm font-black hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-emerald-100">
                <Download size={18} /> Download Report
              </button>
              <button type="button" className="bg-slate-100 text-slate-600 rounded-xl px-10 py-3 text-sm font-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                <RotateCcw size={18} /> Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-900 text-slate-300 font-bold">
              <tr>
                <th className="px-6 py-5 whitespace-nowrap">Sr. No</th>
                <th className="px-6 py-5 whitespace-nowrap">Zone Name</th>
                <th className="px-6 py-5 whitespace-nowrap">Ward No</th>
                <th className="px-6 py-5 whitespace-nowrap text-right">Total Property</th>
                <th className="px-6 py-5 whitespace-nowrap text-right">Total Collection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((group, groupIdx) => (
                <React.Fragment key={group.zone}>
                  {group.wards.map((ward, wardIdx) => (
                    <tr key={ward.id} className="hover:bg-slate-50 transition-colors">
                      {wardIdx === 0 && (
                        <>
                          <td rowSpan={group.wards.length + 1} className="px-6 py-4 text-slate-400 font-black border-r border-slate-100 align-top">
                            {groupIdx + 1}
                          </td>
                          <td rowSpan={group.wards.length + 1} className="px-6 py-4 font-black text-slate-900 border-r border-slate-100 align-top bg-slate-50/30">
                            <div className="flex items-center gap-2">
                              <MapPin size={14} className="text-blue-500" />
                              {group.zone}
                            </div>
                          </td>
                        </>
                      )}
                      <td className="px-6 py-4 text-slate-600 font-bold border-r border-slate-100">
                         Ward {ward.id}
                      </td>
                      <td className="px-6 py-4 text-right font-black text-slate-900 border-r border-slate-100">
                        {ward.properties.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1.5 font-bold text-slate-700">
                          <BadgeIndianRupee size={14} className="text-slate-400" />
                          {ward.collection.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-900/[0.02] font-black">
                    <td colSpan={2} className="px-6 py-4 text-right text-xs uppercase tracking-widest text-slate-500">
                      Total Collection of {group.zone}
                    </td>
                    <td className="px-6 py-4 text-right text-blue-600">
                      <span className="inline-flex items-center gap-1.5">
                        <BadgeIndianRupee size={14} />
                        {group.totalCollection.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
};

export default ZoneWardWiseReportPage;
