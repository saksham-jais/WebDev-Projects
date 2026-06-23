"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { XCircle, CheckCircle2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { adminApi } from "@/lib/api";

type SurveyorRecord = {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  username: string;
  defaultPassword?: string;
  profilePictureName?: string;
  createdAt: string;
  assignedWards?: string;
  active?: boolean;
  avatarUrl?: string;
};

function formatTime(value?: string) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function SurveyorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = React.use(params);
  const [surveyor, setSurveyor] = useState<SurveyorRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const allSurveyors = await adminApi.getSurveyors();
        const found = allSurveyors?.find((s: SurveyorRecord) => s.id === id);
        if (found) {
          setSurveyor(found);
        }
      } catch (e) {
        console.error("Failed to fetch surveyor:", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  if (loading) {
    return (
      <AdminShell title="Surveyor Details" subtitle="">
        <div className="p-10 flex justify-center">
          <div className="animate-pulse flex space-x-4 w-full max-w-7xl">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-200 rounded w-1/4"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-12 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-12 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-12 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </AdminShell>
    );
  }

  if (!surveyor) {
    return (
      <AdminShell title="Surveyor Details" subtitle="">
        <div className="bg-white rounded-[20px] shadow-sm p-8 text-center text-slate-500 font-medium border border-slate-200 max-w-7xl">
          Surveyor not found.
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell
      title="Surveyor Details"
      subtitle=""
    >
      <div className="space-y-6 max-w-7xl">
        
        {/* Surveyor Information Card */}
        <section className="bg-white border border-slate-200 rounded-[20px] shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h3 className="text-[15px] font-bold text-slate-800">Surveyor Information</h3>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Profile Picture</label>
                <img
                  src={surveyor.avatarUrl || "/profile-placeholder.png"}
                  alt={surveyor.fullName}
                  className="w-20 h-20 rounded-full object-cover border border-slate-200 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Username</label>
                <div className="bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-[14px] text-slate-700">
                  {surveyor.username}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Mobile</label>
                <div className="bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-[14px] text-slate-700">
                  {surveyor.mobile}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Status</label>
                <div>
                  {surveyor.active ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 text-[13px] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 text-[13px] font-bold">
                      <XCircle className="w-3.5 h-3.5" /> Inactive
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Full Name</label>
                <div className="bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-[14px] text-slate-700 uppercase">
                  {surveyor.fullName}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Email</label>
                <div className="bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-[14px] text-slate-700">
                  {surveyor.email}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Role</label>
                <div className="bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-[14px] text-slate-700 capitalize">
                  surveyor
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-slate-500 mb-2">Created At</label>
                <div className="bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-3 text-[14px] text-slate-700">
                  {formatTime(surveyor.createdAt)}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Assigned Wards Card */}
        <section className="bg-white border border-slate-200 rounded-[20px] shadow-sm overflow-hidden mt-6">
          <div className="px-6 py-5 border-b border-slate-100">
            <h3 className="text-[15px] font-bold text-slate-800">Assigned Wards</h3>
          </div>
          <div className="p-8">
            {(!surveyor.assignedWards || surveyor.assignedWards === "N/A") ? (
              <p className="text-center text-slate-500 text-[14px]">No wards have been assigned to this surveyor.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {surveyor.assignedWards.split(",").map((ward, i) => (
                  <span key={i} className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-[14px] font-bold border border-blue-100">
                    {ward.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

      </div>
    </AdminShell>
  );
}
