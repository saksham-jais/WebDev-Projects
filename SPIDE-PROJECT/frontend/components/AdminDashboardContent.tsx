'use client';

import React, { useState } from 'react';
import {
  Gauge,
  ChevronDown,
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  Clock,
  Download,
  RotateCcw,
  TrendingUp,
  Coins,
  History,
  CalendarDays,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboardContent = () => {
  const [activeTab, setActiveTab] = useState('property-tax');

  const overviewData = [
    { label: "Today", value: "₹ 4.25 L", count: "124", color: "bg-amber-500" },
    { label: "Week", value: "₹ 28.90 L", count: "856", color: "bg-blue-500" },
    { label: "Month", value: "₹ 1.45 Cr", count: "4,250", color: "bg-emerald-500" },
    { label: "Financial Year", value: "₹ 12.80 Cr", count: "38,400", color: "bg-indigo-500" }
  ];

  const todayCollectionData = [
    { zone: "Zone 1", value: 35, color: "from-slate-200 to-slate-100" },
    { zone: "Zone 2", value: 65, color: "from-slate-200 to-slate-100" },
    { zone: "Zone 3", value: 45, color: "from-slate-200 to-slate-100" },
    { zone: "Zone 4", value: 90, color: "from-blue-600 to-blue-400 shadow-xl shadow-blue-100" },
    { zone: "Zone 5", value: 55, color: "from-slate-200 to-slate-100" }
  ];

  const yesterdayCollectionData = [
    { zone: "Zone 1", value: 75, color: "from-slate-200 to-slate-100" },
    { zone: "Zone 2", value: 45, color: "from-slate-200 to-slate-100" },
    { zone: "Zone 3", value: 85, color: "from-emerald-600 to-emerald-400 shadow-xl shadow-emerald-100" },
    { zone: "Zone 4", value: 40, color: "from-slate-200 to-slate-100" },
    { zone: "Zone 5", value: 65, color: "from-slate-200 to-slate-100" }
  ];

  const chartMaxHeight = 180;
  const chartScaleMarks = [100, 75, 50, 25, 0];

  return (
    <div className="w-full space-y-8">
      {/* Header Section */}
      {/* <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100 flex-shrink-0">
            <Gauge size={32} />
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome to CivicFlow Dashboard</h2>
            <p className="text-slate-500 font-medium">Real-time analytical overview of property tax and municipal collections.</p>
          </div>
        </div>
      </div> */}

      {/* Tabs and Filters */}
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/50 bg-slate-100/50 p-4 md:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid w-full max-w-[320px] grid-cols-2 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('property-tax')}
            className={`w-full rounded-xl px-5 py-3 text-sm font-black transition-all ${activeTab === 'property-tax' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Property Tax
          </button>
          <button
            disabled
            className="w-full rounded-xl px-5 py-3 text-sm font-black text-slate-300 cursor-not-allowed"
          >
            Water Tax
          </button>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-[460px]">
          <div className="flex w-full items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <label className="shrink-0 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Zone</label>
            <select className="min-w-0 w-full appearance-none bg-transparent text-sm font-bold outline-none border-none pr-4">
              <option value="All">All Zones</option>
              <option value="1,5">Zone 1 and 5</option>
              <option value="2,3,4">Zone 2,3 and 4</option>
              {[1, 2, 3, 4, 5].map(z => <option key={z} value={z}>Zone {z}</option>)}
            </select>
            <ChevronDown size={14} className="text-slate-400" />
          </div>

          <div className="flex w-full items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <label className="shrink-0 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Collected By</label>
            <select className="min-w-0 w-full appearance-none bg-transparent text-sm font-bold outline-none border-none pr-4">
              <option value="NNG">NNG</option>
              <option value="LGF">LGF</option>
              <option value="NNGaLGF">NNG & LGF</option>
            </select>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Total Demand Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase tracking-widest">Total Demand</h3>
            </div>
            <button className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
              <RotateCcw size={18} />
            </button>
          </div>
          <div className="px-6 py-6 grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <p className="whitespace-nowrap text-[1.2rem] leading-none font-black text-slate-900">₹ 8.42 Cr</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Arrear Demand</p>
            </div>
            <div className="space-y-1.5">
              <p className="whitespace-nowrap text-[1.2rem] leading-none font-black text-slate-900">₹ 12.15 Cr</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Demand</p>
            </div>
            <div className="space-y-1.5">
              <p className="whitespace-nowrap text-[1.2rem] leading-none font-black text-blue-600">₹ 20.57 Cr</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Demand</p>
            </div>
          </div>
          <div className="mt-auto bg-slate-950/5 px-1 pb-1 pt-0.5">
            <div className="h-1 bg-blue-500 w-[65%]" />
          </div>
        </div>

        {/* Property Data Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                <Building2 size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase tracking-widest">Property Data</h3>
            </div>
            <button className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
              <RotateCcw size={18} />
            </button>
          </div>
          <div className="px-6 py-6 grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <p className="whitespace-nowrap text-[1.2rem] leading-none font-black text-slate-900">84,250</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Houses</p>
            </div>
            <div className="space-y-1.5">
              <p className="whitespace-nowrap text-[1.2rem] leading-none font-black text-emerald-600">52,140</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Collected</p>
            </div>
            <div className="space-y-1.5">
              <p className="whitespace-nowrap text-[1.2rem] leading-none font-black text-rose-500">32,110</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pending</p>
            </div>
          </div>
          <div className="mt-auto bg-slate-950/5 px-1 pb-1 pt-0.5">
            <div className="h-1 bg-emerald-500 w-[72%]" />
          </div>
        </div>
      </div>

      {/* Charts Mocks */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <History size={20} className="text-emerald-500" />
              <h4 className="font-black text-slate-900 tracking-tight uppercase tracking-widest">Today&apos;s Collection - Zone Wise</h4>
            </div>
            <Download size={18} className="text-slate-400 cursor-pointer" />
          </div>
          <div className="flex h-[240px] gap-3 px-2 pb-2">
            <div className="flex w-9 flex-col justify-between py-1 text-[10px] font-black text-slate-300">
              {chartScaleMarks.map((mark) => (
                <span key={mark} className="leading-none">
                  {mark}%
                </span>
              ))}
            </div>

            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-1">
                {chartScaleMarks.map((mark) => (
                  <div key={mark} className="h-px w-full bg-slate-100" />
                ))}
              </div>

              <div className="relative flex h-full items-end justify-between gap-4 px-2">
                {todayCollectionData.map((item) => {
                  const barHeight = Math.max(24, (item.value / 100) * chartMaxHeight);

                  return (
                    <div key={item.zone} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <div className="relative flex w-full items-end justify-center">
                        <span className="absolute -top-7 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-black text-white shadow-sm">
                          {item.value}%
                        </span>
                        <motion.div
                          initial={false}
                          animate={{ height: `${barHeight}px` }}
                          style={{ height: `${barHeight}px` }}
                          className={`w-full max-w-[40px] rounded-t-xl bg-gradient-to-t ${item.color}`}
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.zone}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays size={20} className="text-blue-500" />
              <h4 className="font-black text-slate-900 tracking-tight uppercase tracking-widest">Collection till Yesterday - Zone Wise</h4>
            </div>
            <Download size={18} className="text-slate-400 cursor-pointer" />
          </div>
          <div className="flex h-[240px] gap-3 px-2 pb-2">
            <div className="flex w-9 flex-col justify-between py-1 text-[10px] font-black text-slate-300">
              {chartScaleMarks.map((mark) => (
                <span key={mark} className="leading-none">
                  {mark}%
                </span>
              ))}
            </div>

            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-1">
                {chartScaleMarks.map((mark) => (
                  <div key={mark} className="h-px w-full bg-slate-100" />
                ))}
              </div>

              <div className="relative flex h-full items-end justify-between gap-4 px-2">
                {yesterdayCollectionData.map((item) => {
                  const barHeight = Math.max(24, (item.value / 100) * chartMaxHeight);

                  return (
                    <div key={item.zone} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <div className="relative flex w-full items-end justify-center">
                        <span className="absolute -top-7 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-black text-white shadow-sm">
                          {item.value}%
                        </span>
                        <motion.div
                          initial={false}
                          animate={{ height: `${barHeight}px` }}
                          style={{ height: `${barHeight}px` }}
                          className={`w-full max-w-[40px] rounded-t-xl bg-gradient-to-t ${item.color}`}
                        />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.zone}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {overviewData.map((item, index) => (
          <div key={item.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 group hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <Coins size={18} />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
            </div>
            <div className="space-y-1">
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">{item.value}</h4>
              <p className="text-xs font-bold text-slate-500 flex items-center gap-1.5 uppercase tracking-widest">
                {item.count} Transactions
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth</span>
              <span className="text-xs font-black text-emerald-600">+12.5%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardContent;
