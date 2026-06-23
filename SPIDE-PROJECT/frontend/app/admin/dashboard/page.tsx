"use client";

import AdminDashboardContent from "@/components/AdminDashboardContent";
import AdminShell from "@/components/AdminShell";

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Dashboard Overview" subtitle="Welcome back, Administrator. Manage municipal content and records from one place.">
      <AdminDashboardContent />
    </AdminShell>
  );
}
