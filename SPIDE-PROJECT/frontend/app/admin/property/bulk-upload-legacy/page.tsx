'use client';

import React, { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { 
  Wallet, 
  Upload, 
  ChevronRight, 
  FileSpreadsheet,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const BulkUploadLegacyPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    zone: '',
    ward: '',
    mohalla: '',
    arrears: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsSubmitting(false);
      setUploadStatus('success');
      setTimeout(() => setUploadStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <AdminShell title="Bulk Upload GMC Legacy" subtitle="Upload property records in bulk via CSV">
      <div className="max-w-5xl">
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Wallet size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Upload Details</h3>
                <p className="text-slate-500 text-sm">Select location and file for bulk processing</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Zone</label>
                  <select 
                    name="zone" 
                    value={formData.zone} 
                    onChange={handleInputChange} 
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white"
                    required
                  >
                    <option value="" disabled>Select Zone</option>
                    {[1, 2, 3, 4, 5].map(z => (
                      <option key={z} value={z}>Zone {z}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Ward</label>
                  <select 
                    name="ward" 
                    value={formData.ward} 
                    onChange={handleInputChange} 
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white"
                    required
                  >
                    <option value="" disabled>Select Ward</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Mohalla</label>
                  <select 
                    name="mohalla" 
                    value={formData.mohalla} 
                    onChange={handleInputChange} 
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all appearance-none bg-white"
                    required
                  >
                    <option value="" disabled>Select Mohalla</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Arrears</label>
                  <input 
                    type="number" 
                    name="arrears" 
                    placeholder="Enter Amount" 
                    value={formData.arrears} 
                    onChange={handleInputChange} 
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <label className="text-sm font-bold text-slate-700 mb-4 block">CSV File</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept=".csv" 
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    required
                  />
                  <div className={`
                    border-2 border-dashed rounded-[2rem] p-12 flex flex-col items-center justify-center transition-all
                    ${formData.file ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50/50'}
                  `}>
                    {formData.file ? (
                      <>
                        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                          <FileSpreadsheet size={32} />
                        </div>
                        <p className="text-emerald-700 font-bold">{formData.file.name}</p>
                        <p className="text-emerald-500 text-sm mt-1">{(formData.file.size / 1024).toFixed(2)} KB</p>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors mb-4">
                          <Upload size={32} />
                        </div>
                        <p className="text-slate-700 font-bold">Click to browse or drag and drop</p>
                        <p className="text-slate-400 text-sm mt-1">Only CSV files are supported</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="flex items-center gap-2">
                  {uploadStatus === 'success' && (
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm animate-in fade-in slide-in-from-left-4">
                      <CheckCircle2 size={18} /> File uploaded successfully!
                    </div>
                  )}
                  {uploadStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 font-bold text-sm animate-in fade-in slide-in-from-left-4">
                      <AlertCircle size={18} /> Error uploading file. Please try again.
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`
                    px-12 py-4 rounded-2xl font-bold text-white shadow-xl transition-all flex items-center gap-2
                    ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 active:scale-95'}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit <ChevronRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-[2rem] p-8 flex gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
            <AlertCircle size={20} />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-amber-900">Upload Instructions</h4>
            <ul className="text-amber-800/80 text-sm space-y-1 list-disc pl-4 leading-relaxed">
              <li>Ensure the CSV file follows the standard GMC Legacy format.</li>
              <li>Column headers must match the system requirements exactly.</li>
              <li>Maximum file size allowed is 50MB.</li>
              <li>Processing time may vary depending on the number of records.</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminShell>
  );
};

export default BulkUploadLegacyPage;
