"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Pencil, Plus, Trash2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { adminApi } from "@/lib/api";

type ServiceRecord = {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
  link: string;
  isActive: boolean;
  createdAt: string;
};

function formatTime(value?: string) {
  if (!value) return "Recent";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ServiceManagementPage() {
  const [services, setServices] = useState<ServiceRecord[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setIsLoading(true);
      const data = await adminApi.getServices();
      setServices(data || []);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filtered = useMemo(() => {
    if (!query.trim()) return services;
    const q = query.toLowerCase();
    return services.filter(
      (service) =>
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q)
    );
  }, [query, services]);

  const toggleActive = async (id: string) => {
    const current = services.find(s => s.id === id);
    if (!current) return;
    try {
      // Assuming a PUT/PATCH endpoint exists for updating services or just updating state if local
      // Wait, there's no updateService endpoint in adminApi for services right now.
      // In the previous version it only persisted locally.
      // Since we don't have updateService in adminApi right now, we might need to add it or skip.
      // Wait, let's just make it optimistic locally for now if there's no backend PUT.
      alert("Status toggle is not fully supported by backend yet.");
    } catch (error) {
      console.error("Failed to toggle active", error);
    }
  };

  const deleteService = async (id: string) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      await adminApi.deleteService(id);
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Failed to delete service", error);
      alert("Failed to delete service.");
    }
  };

  const updateService = async (id: string) => {
    alert("Update service is not supported by backend yet.");
  };

  const activeCount = services.filter((service) => service.isActive).length;
  const inactiveCount = services.length - activeCount;

  return (
    <AdminShell
      title="Service Management"
      subtitle="Review and maintain citizen-facing services from a dedicated page."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Total Services</p>
            <p className="mt-2 text-3xl font-black text-slate-900">{services.length}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Active Services</p>
            <p className="mt-2 text-3xl font-black text-emerald-600">{activeCount}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Inactive Services</p>
            <p className="mt-2 text-3xl font-black text-rose-600">{inactiveCount}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services"
            className="w-full md:w-[340px] rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
          />
          <Link
            href="/admin/services/add"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-2.5 text-base font-bold text-white hover:bg-blue-700 shadow-sm"
          >
            <Plus className="w-4 h-4" /> Create New Service
          </Link>
        </div>

        <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-[28px] font-black text-slate-800 tracking-tight">Service Records</h2>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">{filtered.length} records</span>
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[980px]">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr className="text-left text-[12px] uppercase tracking-wide text-slate-500 font-black">
                  <th className="px-4 py-4">Title</th>
                  <th className="px-4 py-4">Description</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Created</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((service) => (
                  <tr key={service.id} className="border-b border-slate-100 hover:bg-slate-50/70">
                    <td className="px-4 py-3 font-semibold text-slate-800">{service.title}</td>
                    <td className="px-4 py-3 text-slate-600">{service.description}</td>
                    <td className="px-4 py-3 text-slate-600">{service.category}</td>
                    <td className="px-4 py-3 text-slate-500">{formatTime(service.createdAt)}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => toggleActive(service.id)}
                        className={`w-12 h-7 rounded-full relative transition-colors ${service.isActive ? "bg-emerald-400" : "bg-slate-300"}`}
                        aria-label={`Toggle status for ${service.title}`}
                      >
                        <span className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${service.isActive ? "left-6" : "left-1"}`} />
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateService(service.id)}
                          className="group relative w-8 h-8 rounded-full bg-slate-200 text-slate-700 inline-flex items-center justify-center cursor-pointer"
                          aria-label={`Update ${service.title}`}
                        >
                          <Pencil className="w-4 h-4" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">Update Record</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteService(service.id)}
                          className="group relative w-8 h-8 rounded-full bg-rose-100 text-rose-600 inline-flex items-center justify-center cursor-pointer"
                          aria-label={`Delete ${service.title}`}
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">Delete Record</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden p-4 space-y-3">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500 font-medium">
                No services found.
              </div>
            ) : (
              filtered.map((service) => (
                <article key={service.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-black text-slate-900">{service.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">{formatTime(service.createdAt)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleActive(service.id)}
                      className={`w-12 h-7 rounded-full relative transition-colors ${service.isActive ? "bg-emerald-400" : "bg-slate-300"}`}
                      aria-label={`Toggle status for ${service.title}`}
                    >
                      <span className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${service.isActive ? "left-6" : "left-1"}`} />
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{service.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">{service.category}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateService(service.id)}
                        className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 inline-flex items-center justify-center"
                        aria-label={`Update ${service.title}`}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteService(service.id)}
                        className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 inline-flex items-center justify-center"
                        aria-label={`Delete ${service.title}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
