'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Calendar, 
  Upload, 
  FileUp, 
  CheckCircle2,
  AlertCircle,
  FileText,
  Trash2,
  Database
} from 'lucide-react';

const GISUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <AdminShell title="GIS Upload" subtitle="Synchronize geospatial data with the property management system">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <Database size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Upload GIS Data</h3>
              <p className="text-sm text-slate-500 font-medium">Select a date and upload your Shapefile or CSV data</p>
            </div>
          </div>

          <form className="p-10 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Select Snapshot Date</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    <Calendar size={20} />
                  </div>
                  <input 
                    type="date" 
                    className="w-full rounded-2xl border-2 border-slate-100 pl-12 pr-4 py-4 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                  />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                  The date when the GIS data was captured or exported.
                </p>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">File Selection</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    className="hidden" 
                    id="gis-file-upload"
                  />
                  <label 
                    htmlFor="gis-file-upload"
                    className="flex flex-col items-center justify-center w-full min-h-[160px] border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50/30 hover:bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50 transition-all cursor-pointer p-6"
                  >
                    {!selectedFile ? (
                      <>
                        <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all">
                          <FileUp size={24} />
                        </div>
                        <p className="text-sm font-black text-slate-900 mb-1">Click to Upload</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Supports .zip, .csv, .json</p>
                      </>
                    ) : (
                      <div className="flex items-center gap-4 w-full">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-100">
                          <CheckCircle2 size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-black text-slate-900 truncate">{selectedFile.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button 
                          type="button"
                          onClick={(e) => { e.preventDefault(); setSelectedFile(null); }}
                          className="p-2 hover:bg-rose-50 rounded-xl text-rose-500 transition-all"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <AlertCircle size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-amber-900 uppercase tracking-widest">Important Instruction</h4>
                <p className="text-[11px] text-amber-700 font-bold leading-relaxed">
                  Ensure the file follows the standard schema. GIS IDs must match the property database to avoid synchronization errors. Max file size: 50MB.
                </p>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white rounded-[2rem] py-5 text-sm font-black hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 uppercase tracking-[0.3em]"
            >
              <Upload size={20} /> Initialize GIS Sync
            </button>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center gap-5">
             <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <FileText size={24} />
             </div>
             <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Successful Sync</p>
                <p className="text-sm font-black text-slate-900">May 01, 2026 - 14:22</p>
             </div>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center gap-5">
             <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <CheckCircle2 size={24} />
             </div>
             <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Health</p>
                <p className="text-sm font-black text-slate-900 text-emerald-600">All Nodes Active</p>
             </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default GISUploadPage;
