"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import AdminShell from "@/components/AdminShell";

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

type ServiceFormState = {
  title: string;
  description: string;
  category: string;
  iconName: string;
  link: string;
  isActive: boolean;
};

const STORAGE_KEY = "adminServices";

const emptyForm: ServiceFormState = {
  title: "",
  description: "",
  category: "Available",
  iconName: "",
  link: "",
  isActive: true,
};

const loadServices = (): ServiceRecord[] => {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as ServiceRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export default function AddServicePage() {
  const router = useRouter();
  const [form, setForm] = useState<ServiceFormState>(emptyForm);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const existing = loadServices();
    const record: ServiceRecord = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title: form.title,
      description: form.description,
      category: form.category,
      iconName: form.iconName,
      link: form.link,
      isActive: form.isActive,
      createdAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...existing]));
    router.push("/admin/services");
  };

  return (
    <AdminShell
      title="Create New Service"
      subtitle="Create and publish a new citizen-facing municipal service."
    >
      <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-8 w-full">
        <h2 className="text-xl font-black text-slate-900 mb-6">Service Details</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-600">Service Title *</label>
              <input
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                placeholder="Service title"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600">Category *</label>
              <input
                value={form.category}
                onChange={(event) => setForm({ ...form, category: event.target.value })}
                placeholder="Category"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">Description *</label>
            <textarea
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
              placeholder="Service description"
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-600">Icon Name</label>
              <input
                value={form.iconName}
                onChange={(event) => setForm({ ...form, iconName: event.target.value })}
                placeholder="e.g. Droplets"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600">Optional Link</label>
              <input
                value={form.link}
                onChange={(event) => setForm({ ...form, link: event.target.value })}
                placeholder="https://..."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          <label className="inline-flex items-center gap-3 text-sm font-semibold text-slate-600">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={(event) => setForm({ ...form, isActive: event.target.checked })}
              className="h-4 w-4 rounded border-slate-300"
            />
            Active Service
          </label>

          <div className="pt-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              <Save className="w-4 h-4" /> Save Service
            </button>
          </div>
        </form>
      </section>
    </AdminShell>
  );
}
