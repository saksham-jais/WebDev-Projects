"use client";

import React, { useMemo, useState } from "react";
import Modal from "@/components/Modal";
import ZoneWardSelector from "@/components/ZoneWardSelector";
import PasswordModal from "@/components/PasswordModal";
import EditSurveyorModal from "@/components/EditSurveyorModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, KeyRound, Map, Pencil, Plus, Trash2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { adminApi } from "@/lib/api";

type SurveyorRecord = {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  username: string;
  defaultPassword: string;
  profilePictureName?: string;
  createdAt: string;
  assignedWards?: string;
  active?: boolean;
  avatarUrl?: string;
};

export default function SurveyorManagementPage() {
  const router = useRouter();
  const [surveyors, setSurveyors] = useState<SurveyorRecord[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const pageSize = 10;
  const [isLoading, setIsLoading] = useState(true);
  
  // Modals state
  const [assignModalOpen, setAssignModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  
  const [selectedSurveyor, setSelectedSurveyor] = useState<SurveyorRecord | null>(null);
  const [selectedWardNames, setSelectedWardNames] = useState<string[]>([]);

  React.useEffect(() => {
    fetchSurveyors();
  }, []);

  const fetchSurveyors = async () => {
    try {
      setIsLoading(true);
      const data = await adminApi.getSurveyors();
      setSurveyors(data || []);
    } catch (error: any) {
      console.error("Failed to fetch surveyors:", error);
      
      // Handle Unauthorized/Forbidden
      if (error.message?.includes("403") || error.message?.includes("401")) {
        router.push("/admin/login");
        return;
      }

      // Handle Network/Server Down (TypeError: Failed to fetch)
      if (error.message?.includes("fetch") || error.name === "TypeError") {
        alert("Unable to connect to the server. Please ensure the backend is running at http://localhost:8080");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const activeCount = surveyors.filter((surveyor) => surveyor.active).length;
  const assignedCount = surveyors.filter((surveyor) => (surveyor.assignedWards || "N/A") !== "N/A").length;

  const filteredSurveyors = useMemo(() => {
    if (!query.trim()) return surveyors;
    const q = query.toLowerCase();
    return surveyors.filter(
      (surveyor) =>
        surveyor.username.toLowerCase().includes(q) ||
        surveyor.fullName.toLowerCase().includes(q) ||
        surveyor.email.toLowerCase().includes(q) ||
        surveyor.mobile.toLowerCase().includes(q)
    );
  }, [query, surveyors]);

  const totalPages = Math.max(1, Math.ceil(filteredSurveyors.length / pageSize));
  const paginatedSurveyors = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredSurveyors.slice(start, start + pageSize);
  }, [filteredSurveyors, page]);

  const deleteSurveyor = async (id: string) => {
    if (!window.confirm("Delete this surveyor?")) return;
    try {
      await adminApi.deleteSurveyor(id);
      const next = surveyors.filter((surveyor) => surveyor.id !== id);
      setSurveyors(next);
      if (page > 1 && (page - 1) * pageSize >= next.length) {
        setPage((prev) => prev - 1);
      }
    } catch (error) {
      console.error("Failed to delete surveyor:", error);
      alert("Failed to delete surveyor.");
    }
  };

  const toggleStatus = async (id: string) => {
    const current = surveyors.find(s => s.id === id);
    if (!current) return;
    try {
      const updated = await adminApi.updateSurveyor(id, { active: !current.active });
      setSurveyors(surveyors.map(s => s.id === id ? updated : s));
    } catch (error) {
      console.error("Failed to toggle surveyor status:", error);
      alert("Failed to toggle surveyor status.");
    }
  };

  const viewRecord = (surveyor: SurveyorRecord) => {
    router.push(`/admin/surveyors/${surveyor.id}`);
  };

  const openAssignWardModal = (id: string) => {
    const current = surveyors.find((item) => item.id === id);
    if (!current) return;
    setSelectedSurveyor(current);
    // Parse assignedWards as ward names
    setSelectedWardNames(
      current.assignedWards && current.assignedWards !== "N/A"
        ? current.assignedWards.split(",").map(w => w.trim()).filter(Boolean)
        : []
    );
    setAssignModalOpen(true);
  };

  const handleAssignWards = async () => {
    if (!selectedSurveyor) return;
    try {
      // Save as comma-separated ward names
      const value = selectedWardNames.join(", ");
      const updated = await adminApi.updateSurveyor(selectedSurveyor.id, { assignedWards: value || "N/A" });
      setSurveyors(surveyors.map(s => s.id === selectedSurveyor.id ? updated : s));
      setAssignModalOpen(false);
      setSelectedSurveyor(null);
      setSelectedWardNames([]);
    } catch (error) {
      console.error("Failed to assign ward:", error);
      alert("Failed to assign ward.");
    }
  };

  const openPasswordModal = (id: string) => {
    const current = surveyors.find((item) => item.id === id);
    if (!current) return;
    setSelectedSurveyor(current);
    setPasswordModalOpen(true);
  };

  const handleUpdatePassword = async (newPassword: string) => {
    if (!selectedSurveyor) return;
    try {
      const updated = await adminApi.updateSurveyor(selectedSurveyor.id, { defaultPassword: newPassword });
      setSurveyors(surveyors.map(s => s.id === selectedSurveyor.id ? updated : s));
      setPasswordModalOpen(false);
      setSelectedSurveyor(null);
    } catch (error) {
      console.error("Failed to change password:", error);
      throw error;
    }
  };

  const openEditModal = (id: string) => {
    const current = surveyors.find((item) => item.id === id);
    if (!current) return;
    setSelectedSurveyor(current);
    setEditModalOpen(true);
  };

  const handleUpdateRecord = async (data: any) => {
    if (!selectedSurveyor) return;
    try {
      const updated = await adminApi.updateSurveyor(selectedSurveyor.id, data);
      setSurveyors(surveyors.map(s => s.id === selectedSurveyor.id ? updated : s));
      setEditModalOpen(false);
      setSelectedSurveyor(null);
    } catch (error) {
      console.error("Failed to update record:", error);
      throw error;
    }
  };

  return (
    <AdminShell
      title="Surveyor Management"
      subtitle="Review and manage all created surveyors from a dedicated page."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Total Surveyors</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{surveyors.length}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Active Surveyors</p>
            <p className="mt-2 text-3xl font-black text-emerald-600">{activeCount}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Assigned Wards</p>
            <p className="mt-2 text-3xl font-black text-blue-600">{assignedCount}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Search surveyors"
            className="w-full md:w-[340px] rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between gap-4">
            <h2 className="text-[32px] font-black text-slate-800 tracking-tight">Surveyor Records</h2>
            <Link
              href="/admin/surveyors/add"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-2.5 text-base font-bold text-white hover:bg-blue-700 shadow-sm whitespace-nowrap"
            >
              <Plus className="w-4 h-4" /> Add New Surveyor
            </Link>
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[1120px]">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-left text-[13px] uppercase tracking-wide text-slate-500 font-black">
                  <th className="px-4 py-4">Sr. No.</th>
                  <th className="px-4 py-4">Profile</th>
                  <th className="px-4 py-4">Username</th>
                  <th className="px-4 py-4">Full Name</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Assigned Wards</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {paginatedSurveyors.map((surveyor, index) => {
                  const srNo = (page - 1) * pageSize + index + 1;
                  return (
                    <tr key={surveyor.id} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                      <td className="px-4 py-3 text-slate-700 font-semibold">{srNo}</td>
                      <td className="px-4 py-3">
                        <img
                          src={surveyor.avatarUrl}
                          alt={surveyor.fullName}
                          className="w-11 h-11 rounded-full object-cover border border-slate-200"
                        />
                      </td>
                      <td className="px-4 py-3 text-slate-700 font-medium">{surveyor.username}</td>
                      <td className="px-4 py-3 text-slate-700 font-semibold uppercase">{surveyor.fullName}</td>
                      <td className="px-4 py-3 text-slate-600">{surveyor.email}</td>
                      <td className="px-4 py-3 text-slate-600">{surveyor.assignedWards || "N/A"}</td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() => toggleStatus(surveyor.id)}
                          className={`w-12 h-7 rounded-full relative transition-colors ${surveyor.active ? "bg-emerald-400" : "bg-slate-300"}`}
                          aria-label={`Toggle status for ${surveyor.fullName}`}
                        >
                          <span className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${surveyor.active ? "left-6" : "left-1"}`} />
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => viewRecord(surveyor)}
                            title="View"
                            className="group relative w-8 h-8 rounded-full bg-blue-100 text-blue-600 inline-flex items-center justify-center cursor-pointer"
                            aria-label={`View ${surveyor.fullName}`}
                          >
                            <Eye className="w-4 h-4" />
                            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => openAssignWardModal(surveyor.id)}
                            title="Assign Ward"
                            className="group relative w-8 h-8 rounded-full bg-violet-100 text-violet-600 inline-flex items-center justify-center cursor-pointer"
                            aria-label={`Assign Ward ${surveyor.fullName}`}
                          >
                            <Map className="w-4 h-4" />
                            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">Assign Ward</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => openPasswordModal(surveyor.id)}
                            title="Change Password"
                            className="group relative w-8 h-8 rounded-full bg-amber-100 text-amber-600 inline-flex items-center justify-center cursor-pointer"
                            aria-label={`Change Password ${surveyor.fullName}`}
                          >
                            <KeyRound className="w-4 h-4" />
                            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">Change Password</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => openEditModal(surveyor.id)}
                            title="Update Record"
                            className="group relative w-8 h-8 rounded-full bg-slate-200 text-slate-700 inline-flex items-center justify-center cursor-pointer"
                            aria-label={`Update Record ${surveyor.fullName}`}
                          >
                            <Pencil className="w-4 h-4" />
                            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">Update Record</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => deleteSurveyor(surveyor.id)}
                            title="Delete Record"
                            className="group relative w-8 h-8 rounded-full bg-rose-100 text-rose-600 inline-flex items-center justify-center cursor-pointer"
                            aria-label={`Delete ${surveyor.fullName}`}
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">Delete Record</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {paginatedSurveyors.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-10 text-center text-slate-500 font-medium">
                      No surveyor records found for &quot;{query}&quot;.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="md:hidden p-4 space-y-3">
            {paginatedSurveyors.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500 font-medium">
                No surveyor records found.
              </div>
            ) : (
              paginatedSurveyors.map((surveyor) => (
                <article key={surveyor.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <img src={surveyor.avatarUrl} alt={surveyor.fullName} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-slate-900 text-sm leading-tight">{surveyor.fullName}</p>
                      <p className="text-xs text-slate-500 mt-1 truncate">{surveyor.email}</p>
                      <p className="text-xs text-slate-500 truncate">{surveyor.mobile}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleStatus(surveyor.id)}
                      className={`w-12 h-7 rounded-full relative transition-colors ${surveyor.active ? "bg-emerald-400" : "bg-slate-300"}`}
                      aria-label={`Toggle status for ${surveyor.fullName}`}
                    >
                      <span className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${surveyor.active ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">{surveyor.username}</span>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">{surveyor.assignedWards || "N/A"}</span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <button type="button" onClick={() => viewRecord(surveyor)} className="rounded-lg border border-slate-200 px-2 py-2 text-xs font-semibold text-slate-700">View</button>
                    <button type="button" onClick={() => openAssignWardModal(surveyor.id)} className="rounded-lg border border-slate-200 px-2 py-2 text-xs font-semibold text-slate-700">Assign</button>
                    <button type="button" onClick={() => openPasswordModal(surveyor.id)} className="rounded-lg border border-slate-200 px-2 py-2 text-xs font-semibold text-slate-700">Password</button>
                    <button type="button" onClick={() => openEditModal(surveyor.id)} className="rounded-lg border border-slate-200 px-2 py-2 text-xs font-semibold text-slate-700">Update</button>
                    <button type="button" onClick={() => deleteSurveyor(surveyor.id)} className="col-span-2 rounded-lg border border-rose-200 bg-rose-50 px-2 py-2 text-xs font-semibold text-rose-600">Delete Record</button>
                  </div>
                </article>
              ))
            )}
          </div>

          <div className="px-6 py-4 flex items-center justify-center gap-3 border-t border-slate-100 text-slate-700">
            <span className="text-sm md:text-base font-semibold">Page {page} of {totalPages}</span>
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page <= 1}
              className="px-4 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold disabled:opacity-40"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page >= totalPages}
              className="px-4 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold disabled:opacity-40"
            >
              Next
            </button>
            <span className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 text-sm">Page</span>
            <button
              type="button"
              onClick={() => setPage(1)}
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold"
            >
              Go
            </button>
          </div>
        </section>
      </div>
      <Modal
        open={assignModalOpen}
        onClose={() => { setAssignModalOpen(false); setSelectedSurveyor(null); }}
        title="Assign Wards to Surveyor"
      >
        <ZoneWardSelector
          selectedNames={selectedWardNames}
          onChange={setSelectedWardNames}
          onCancel={() => { setAssignModalOpen(false); setSelectedSurveyor(null); }}
          onSave={handleAssignWards}
        />
      </Modal>

      <Modal
        open={passwordModalOpen}
        onClose={() => { setPasswordModalOpen(false); setSelectedSurveyor(null); }}
        title={`Change Password: ${selectedSurveyor?.username}`}
      >
        <PasswordModal
          initialPassword={selectedSurveyor?.defaultPassword}
          onSave={handleUpdatePassword}
          onCancel={() => { setPasswordModalOpen(false); setSelectedSurveyor(null); }}
        />
      </Modal>

      <Modal
        open={editModalOpen}
        onClose={() => { setEditModalOpen(false); setSelectedSurveyor(null); }}
        title="Edit Surveyor Record"
      >
        {selectedSurveyor && (
          <EditSurveyorModal
            surveyor={selectedSurveyor}
            onSave={handleUpdateRecord}
            onCancel={() => { setEditModalOpen(false); setSelectedSurveyor(null); }}
          />
        )}
      </Modal>
    </AdminShell>
  );
}
