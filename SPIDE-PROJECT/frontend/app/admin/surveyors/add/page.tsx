"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { adminApi } from "@/lib/api";

type SurveyorFormState = {
  fullName: string;
  email: string;
  mobile: string;
  defaultPassword: string;
  profilePictureName: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

const emptyForm: SurveyorFormState = {
  fullName: "",
  email: "",
  mobile: "",
  defaultPassword: "surveyor@123",
  profilePictureName: "",
};

export default function AddSurveyorPage() {
  const router = useRouter();
  const [form, setForm] = useState<SurveyorFormState>(emptyForm);
  const [surveyorCount, setSurveyorCount] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    adminApi.getSurveyors().then((data: any[]) => {
      setSurveyorCount(data?.length || 0);
    }).catch(() => {});
  }, []);

  const generatedUsername = useMemo(() => {
    const compact = form.fullName.replace(/\s+/g, "").toUpperCase().slice(0, 3) || "SUR";
    const serial = String(surveyorCount + 1).padStart(3, "0");
    return `DEO-${compact}-${serial}`;
  }, [form.fullName, surveyorCount]);

  const uploadToCloudinary = async (file: File) => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      throw new Error("Authentication required for image upload.");
    }

    const signResponse = await fetch(`${API_BASE_URL}/api/v1/uploads/cloudinary/sign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ folder: "civicflow/surveyors" }),
    });

    if (!signResponse.ok) {
      throw new Error("Unable to initialize image upload.");
    }

    const signData = (await signResponse.json()) as {
      cloudName: string;
      apiKey: string;
      folder: string;
      timestamp: number;
      signature: string;
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", signData.apiKey);
    formData.append("timestamp", String(signData.timestamp));
    formData.append("signature", signData.signature);
    formData.append("folder", signData.folder);

    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${signData.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!uploadResponse.ok) {
      throw new Error("Image upload failed.");
    }

    const uploadData = (await uploadResponse.json()) as { secure_url?: string };
    if (!uploadData.secure_url) {
      throw new Error("Cloudinary did not return image URL.");
    }

    return uploadData.secure_url;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUploadError("");
    setUploading(true);

    let avatarUrl: string | undefined;
    try {
      if (selectedFile) {
        avatarUrl = await uploadToCloudinary(selectedFile);
      }
    } catch (error) {
      setUploading(false);
      setUploadError(error instanceof Error ? error.message : "Image upload failed.");
      return;
    }

    try {
      await adminApi.createSurveyor({
        fullName: form.fullName,
        email: form.email,
        mobile: form.mobile,
        username: generatedUsername,
        defaultPassword: form.defaultPassword,
        profilePictureName: form.profilePictureName,
        avatarUrl,
        active: false,
      });
      router.push("/admin/surveyors");
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "Failed to save surveyor.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <AdminShell
      title="Add New Surveyor"
      subtitle="Create credentials and profile details for field surveyors."
    >
      <section className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-8 w-full">
        <h2 className="text-xl font-black text-slate-900 mb-6">Surveyor Details</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-600">Full Name *</label>
              <input
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                placeholder="Full Name"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600">Email Address *</label>
              <input
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="Email Address"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600">Mobile Number *</label>
              <input
                value={form.mobile}
                onChange={(event) => setForm({ ...form, mobile: event.target.value })}
                placeholder="Mobile Number"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-600">Auto-Generated Username *</label>
              <input
                value={generatedUsername}
                readOnly
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">Default Password *</label>
            <input
              value={form.defaultPassword}
              readOnly
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-600">Profile Picture (Optional)</label>
            <div className="mt-2 rounded-xl border border-slate-200 p-3 w-full">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0] || null;
                  setSelectedFile(file);
                  setForm({ ...form, profilePictureName: file?.name || "" });
                }}
                className="text-sm text-slate-600 file:mr-4 file:rounded-lg file:border file:border-slate-300 file:bg-white file:px-3 file:py-1.5"
              />
              {form.profilePictureName && <p className="mt-2 text-xs text-slate-500">Selected: {form.profilePictureName}</p>}
              {uploadError && <p className="mt-2 text-xs text-rose-600">{uploadError}</p>}
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={uploading}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              <Save className="w-4 h-4" /> {uploading ? "Uploading..." : "Save"}
            </button>
          </div>
        </form>
      </section>
    </AdminShell>
  );
}
