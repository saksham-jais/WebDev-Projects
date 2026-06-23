"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ShieldAlert,
  BarChart3,
  LogOut,
  UserRound,
  Menu,
  X,
  Layers,
  ChevronDown,
  BadgeCheck,
  Plus,
  Map,
} from "lucide-react";

type AdminShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AdminShell({ title, subtitle, children }: AdminShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isSurveyorsMenuOpen, setIsSurveyorsMenuOpen] = useState(false);
  const [isPropertyMgmtOpen, setIsPropertyMgmtOpen] = useState(false);
  const [isSafOpen, setIsSafOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isMastersOpen, setIsMastersOpen] = useState(false);

  const [adminUser, setAdminUser] = useState("Admin User");

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    const storedAdminUser = window.localStorage.getItem("adminUser");

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    if (storedAdminUser) {
      setAdminUser(storedAdminUser);
    }
  }, [router]);

  const closeSidebarOnMobile = () => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setIsSidebarOpen(false);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("adminUser");
    router.push("/admin/login");
  };

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile menu button moved into the header to avoid overlapping content */}

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-slate-900/50 transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside className={`fixed lg:sticky lg:top-0 inset-y-0 left-0 z-50 lg:z-auto w-[21rem] lg:w-[23rem] bg-slate-900 text-white p-6 flex flex-col lg:min-h-screen lg:h-screen overflow-hidden transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <button
          type="button"
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden self-end mb-2 rounded-lg p-1 text-slate-300 hover:text-white hover:bg-white/10"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center font-black">C</div>
          <div>
            <p className="font-bold text-xl leading-none">CivicFlow Admin</p>
            <p className="text-[11px] text-slate-400 mt-1">Municipal control center</p>
          </div>
        </div>

        <nav className="flex-1 min-h-0 space-y-2 overflow-y-auto pr-3 custom-scrollbar">
          <Link
            href="/admin/dashboard"
            onClick={closeSidebarOnMobile}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
              isActive("/admin/dashboard") ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>

          {/* <Link
            href="/admin/citizens"
            onClick={closeSidebarOnMobile}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
              isActive("/admin/citizens") ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Users className="w-4 h-4" /> Citizens
          </Link> */}

          {/* <Link
            href="/admin/services/requests"
            onClick={closeSidebarOnMobile}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
              isActive("/admin/services/requests") ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileText className="w-4 h-4" /> Service Requests
          </Link> */}

          {/* <Link
            href="/admin/statistics"
            onClick={closeSidebarOnMobile}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
              isActive("/admin/statistics") ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BarChart3 className="w-4 h-4" /> Statistics
          </Link> */}

          {/* <Link
            href="/admin/audit-logs"
            onClick={closeSidebarOnMobile}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
              isActive("/admin/audit-logs") ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <ShieldAlert className="w-4 h-4" /> Audit Logs
          </Link> */}

          <div className="pt-3 mt-3 border-t border-white/10 uppercase text-[10px] font-bold text-slate-500 tracking-widest px-3">
            Property Management
          </div>

          <div className="mt-2">
            <button
              type="button"
              onClick={() => setIsSafOpen((prev) => !prev)}
              className={`flex items-center justify-between gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                isSafOpen ? "bg-white/10 text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <FileText className="w-4 h-4" /> Self Assessment Form
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isSafOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isSafOpen && (
              <div className="mt-1 pl-3 border-l-2 border-orange-300/50 ml-3 space-y-1">
                <Link
                  href="/admin/property/new-assessment"
                  onClick={closeSidebarOnMobile}
                  className="block p-2.5 w-full text-sm font-bold text-slate-400 hover:text-white transition-colors"
                >
                  NNG New Assessment
                </Link>
                <Link
                  href="/admin/property/estimated-tax"
                  onClick={closeSidebarOnMobile}
                  className="block p-2.5 w-full text-sm font-bold text-slate-400 hover:text-white transition-colors"
                >
                  Estimated Property Tax
                </Link>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsPropertyMgmtOpen((prev) => !prev)}
              className="mt-1 flex items-center justify-between gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-slate-300 hover:text-white hover:bg-white/5 text-left"
            >
              <span className="inline-flex items-center gap-3">
                <Layers className="w-4 h-4" /> SAF Application
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isPropertyMgmtOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isPropertyMgmtOpen && (
              <div className="mt-1 pl-3 border-l-2 border-orange-300/50 ml-3 space-y-1">
                { [
                  { label: "Property List", href: "/admin/property/property-list" },
                  { label: "Legacy Property", href: "/admin/property/legacy-property" },
                  { label: "Bulk Upload GMC Legacy", href: "/admin/property/bulk-upload-legacy" },
                  { label: "Demand Updated", href: "/admin/property/demand-updated" },
                  { label: "Collections", href: "/admin/property/collections" },
                  { label: "My Collections", href: "/admin/property/my-collections" },
                  { label: "Demands", href: "/admin/property/demands" },
                  { label: "Updated Location", href: "/admin/property/updated-location" },
                  { label: "Updated Contact", href: "/admin/property/updated-contact" },
                  { label: "Reassessment List", href: "/admin/property/legacy-reassessment" },
                  { label: "Legacy ARV Update", href: "/admin/property/legacy-arv-update" },
                  { label: "Legacy ARV Update List", href: "/admin/property/legacy-arv-update-list" },
                  { label: "Mohalla Demand", href: "/admin/property/mohalla-demand" },
                  { label: "Locate Property", href: "/admin/property/locate-property" },
                  { label: "Legacy-Locate Property", href: "/admin/property/legacy-locate-property" },
                  { label: "Edit Property Request", href: "/admin/property/edit-property-request" },
                  { label: "New Reassessment List", href: "/admin/property/new-reassessment-list" },
                  { label: "Legacy Demand Match", href: "/admin/property/legacy-demand-match" },
                  { label: "Update Payment Mode", href: "/admin/property/update-payment-mode" },
                  { label: "Survey", href: "/admin/property/survey" },
                  { label: "Notice", href: "/admin/property/notice" },
                  { label: "Notice List", href: "/admin/property/notice-list" },
                  { label: "GIS Upload", href: "/admin/property/gis-upload" },
                ].map((item) => {
                  if (item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeSidebarOnMobile}
                        className={`block p-2.5 w-full text-sm font-bold text-slate-400 hover:text-white transition-colors ${
                          isActive(item.href) ? "text-white bg-white/10" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="block w-full p-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsReportOpen((prev) => !prev)}
              className={`mt-1 flex items-center justify-between gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                isReportOpen ? "bg-white/10 text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <BarChart3 className="w-4 h-4" /> Report
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isReportOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isReportOpen && (
              <div className="mt-1 pl-3 border-l-2 border-orange-300/50 ml-3 space-y-1">
                {[
                  { label: "Ward Wise Collection", href: "/admin/reports/ward-wise-collection" },
                  { label: "Counter Report NNG", href: "/admin/reports/counter-report" },
                  { label: "Zone and Ward Wise Report", href: "/admin/reports/zone-ward-wise" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeSidebarOnMobile}
                    className={`block p-2.5 w-full text-sm font-semibold transition-all text-left ${
                      isActive(item.href) ? "text-white bg-white/10 rounded-lg" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsMastersOpen((prev) => !prev)}
              className={`mt-1 flex items-center justify-between gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                isMastersOpen ? "bg-white/10 text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <ShieldAlert className="w-4 h-4" /> Masters
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMastersOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isMastersOpen && (
              <div className="mt-1 pl-3 border-l-2 border-orange-300/50 ml-3 space-y-1">
                {[
                  "Construction Type",
                  "Floor Type",
                  "Honoriffic Type",
                  "Municipal Type",
                  "Occupancy Type",
                  "Road Type",
                  "Usages Type",
                  "User Type",
                  "Financial Year",
                  "Ownership",
                  "Vacant Land Rate",
                  "State",
                  "District",
                  "City/Village",
                  "Zone",
                  "Ward",
                ].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="block w-full p-2.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 mt-3 border-t border-white/10 uppercase text-[10px] font-bold text-slate-500 tracking-widest px-3">
            Operations
          </div>

          <div className="mt-0">
            <button
              type="button"
              onClick={() => setIsServicesMenuOpen((prev) => !prev)}
              className={`flex items-center justify-between gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                isServicesMenuOpen ? "bg-white/10 text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <Layers className="w-4 h-4" /> Services
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesMenuOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            {isServicesMenuOpen && (
              <div className="mt-1 pl-3 border-l border-white/10 ml-3 space-y-1">
                <Link
                  href="/admin/services"
                  onClick={closeSidebarOnMobile}
                  className={`flex items-center gap-3 p-2.5 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                    isActive("/admin/services") ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Layers className="w-4 h-4" /> Service Management
                </Link>
                <Link
                  href="/admin/services/add"
                  onClick={closeSidebarOnMobile}
                  className={`flex items-center gap-3 p-2.5 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                    isActive("/admin/services/add") ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Plus className="w-4 h-4" /> Create New Service
                </Link>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsSurveyorsMenuOpen((prev) => !prev)}
            className={`flex items-center justify-between gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
              isSurveyorsMenuOpen ? "bg-white/10 text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="inline-flex items-center gap-3">
              <BadgeCheck className="w-4 h-4" /> Surveyors
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isSurveyorsMenuOpen ? "rotate-180" : "rotate-0"}`} />
          </button>

          {isSurveyorsMenuOpen && (
            <div className="mt-1 pl-3 border-l border-white/10 ml-3 space-y-1">
              <Link
                href="/admin/surveyors"
                onClick={closeSidebarOnMobile}
                className={`flex items-center gap-3 p-2.5 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                  isActive("/admin/surveyors") ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Users className="w-4 h-4" /> Surveyor Management
              </Link>
              <Link
                href="/admin/surveyors/add"
                onClick={closeSidebarOnMobile}
                className={`flex items-center gap-3 p-2.5 w-full rounded-xl text-sm font-semibold transition-all text-left ${
                  isActive("/admin/surveyors/add") ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Plus className="w-4 h-4" /> Add Surveyor
              </Link>
            </div>
          )}

          <Link
            href="/admin/zones"
            onClick={closeSidebarOnMobile}
            className={`flex items-center gap-3 p-3 w-full rounded-xl text-sm font-semibold transition-all text-left ${
              isActive("/admin/zones") ? "bg-white/10 text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Map className="w-4 h-4" /> Zone & Ward Mgmt
          </Link>
        </nav>

        <div className="shrink-0 pt-6 border-t border-white/10 space-y-2">
          <Link href="#" className="flex items-center gap-3 p-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-semibold transition-all">
            <Settings className="w-4 h-4" /> Settings
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 w-full text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl text-sm font-semibold transition-all"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0 overflow-auto p-4 md:p-6 lg:p-8 lg:pt-8 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.08),_transparent_32%),radial-gradient(circle_at_left,_rgba(34,197,94,0.05),_transparent_28%)]">
        <header className="relative mb-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 px-4 py-4 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.45)] backdrop-blur md:mb-8 md:px-6 md:py-6">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-sky-50" />
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="md:hidden flex items-center justify-between w-full">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md text-slate-700 hover:bg-white/10"
                aria-label="Open sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex-1 flex items-center justify-end gap-3">
                <div className="flex flex-col text-left mr-3">
                  <span className="text-xs font-semibold text-slate-900 truncate max-w-[200px]" title={adminUser}>{adminUser}</span>
                  <span className="text-[10px] text-slate-400">Signed in</span>
                </div>

                <div className="h-8 w-8 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                  <UserRound className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="space-y-2 md:flex-1">
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-700">
                <span className="h-2 w-2 rounded-full bg-sky-500" /> {title}
              </div> */}
              <h1 className="max-w-2xl text-2xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-500 md:text-base">{subtitle}</p>
            </div>
            <div className="hidden md:flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
              <div className="flex flex-col text-left leading-tight">
                <span className="max-w-[220px] truncate text-sm font-bold text-slate-900" title={adminUser}>
                  {adminUser}
                </span>
                <span className="text-[11px] text-slate-400">Signed in</span>
              </div>

              <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md shrink-0">
                <UserRound className="h-4.5 w-4.5" />
              </div>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
