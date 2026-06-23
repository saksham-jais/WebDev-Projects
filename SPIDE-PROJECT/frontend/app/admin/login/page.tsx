"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authApi } from "@/lib/api";
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  Eye, 
  EyeOff, 
  Lock, 
  UserRound,
  ShieldCheck,
  Sparkles,
  Command,
  Sun,
  Moon,
  Activity,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('admin-theme') as 'light' | 'dark';
    if (savedTheme) setTheme(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('admin-theme', newTheme);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authApi.login({
        username: username.trim(),
        password: password,
      });
      window.localStorage.setItem("authToken", response.token);
      window.localStorage.setItem("adminUser", username.trim());
      router.push("/admin/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === 'dark';

  if (!mounted) return <div className="min-h-screen bg-slate-900" />;

  return (
    <main className={`min-h-screen relative overflow-hidden flex items-center justify-center p-4 transition-colors duration-700 ${isDark ? 'bg-[#020617]' : 'bg-[#EEF2FF]'}`}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] transition-all duration-1000 ${isDark ? 'bg-indigo-600/20 animate-pulse' : 'bg-cyan-300/20'}`} />
        <div className={`absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] transition-all duration-1000 ${isDark ? 'bg-blue-600/20' : 'bg-blue-400/15'}`} />
      </div>

      <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative w-full max-w-[1240px] min-h-[780px] rounded-[48px] border backdrop-blur-3xl transition-all duration-700 overflow-hidden grid lg:grid-cols-[1.05fr_0.95fr] ${
          isDark 
            ? 'border-white/10 bg-slate-900/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]' 
            : 'border-white/60 bg-white/70 shadow-[0_30px_90px_rgba(30,64,175,0.14)]'
        }`}
      >
        {/* Left Side - Hero Content */}
        <section className="relative hidden lg:flex flex-col justify-between p-16 overflow-hidden">
          <AnimatePresence mode="wait">
            {isDark ? (
              /* Dark Mode Hero: "Empowering Governance" */
              <motion.div 
                key="dark-hero"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute inset-0 flex flex-col justify-between p-16"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-transparent opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                      <Command className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-white/90">SPIDE-OS</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-widest">
                      <Sparkles size={14} /> Official Administrator Access
                    </div>
                    <h1 className="text-7xl font-black tracking-tight text-white leading-[0.95]">
                      Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Governance.</span>
                    </h1>
                  </div>
                  <p className="text-slate-400 text-xl leading-relaxed max-w-md">
                    Securely manage Deoria Nagar Palika Parishad operations with our next-generation administrative portal.
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-10">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                   </div>
                   <div className="text-sm">
                      <p className="font-black text-white">12.5k+</p>
                      <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Active Records Managed</p>
                   </div>
                </div>
              </motion.div>
            ) : (
              /* Light Mode Hero: "Secure Civic Operations Hub" (Classic) */
              <motion.div 
                key="light-hero"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute inset-0 flex flex-col justify-between p-16 text-white"
                style={{
                  backgroundImage: "linear-gradient(140deg, rgba(2,6,23,0.78) 10%, rgba(30,58,138,0.58) 70%), url('https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1800&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(45,212,191,0.2),transparent_35%)]" />
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] font-black text-blue-100">
                    Administrative Command Access
                  </span>
                </div>

                <div className="relative z-10 max-w-xl">
                  <p className="text-blue-100/90 font-semibold text-lg">Deoria Nagar Palika Parishad</p>
                  <h1 className="mt-4 text-6xl font-black tracking-[-0.03em] leading-[0.94]">Secure Civic Operations Hub</h1>
                  <p className="mt-6 text-blue-100/85 text-lg leading-relaxed">
                    Centralized access for municipal officers to oversee city services, governance records, and department workflows.
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-3 max-w-md">
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <p className="text-[10px] tracking-[0.18em] font-black uppercase text-blue-100/80">Security</p>
                    <p className="mt-1 text-2xl font-black">AES</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <p className="text-[10px] tracking-[0.18em] font-black uppercase text-blue-100/80">Session</p>
                    <p className="mt-1 text-2xl font-black">24H</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <p className="text-[10px] tracking-[0.18em] font-black uppercase text-blue-100/80">Trust</p>
                    <p className="mt-1 text-2xl font-black">Gov</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Right Side - Login Form Section */}
        <section className={`relative flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16 transition-colors duration-700 ${isDark ? 'bg-slate-950/20' : 'bg-white/30'}`}>
          
          {/* Header Controls */}
          <div className="w-full flex items-center justify-end gap-3 mb-8 sm:mb-12 lg:mb-0 lg:absolute lg:top-10 lg:right-10 lg:w-auto lg:gap-4 z-20">
             <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-700 shadow-sm group ${
                isDark 
                  ? 'bg-slate-900 border-white/5 text-amber-400 hover:bg-slate-800' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            >
              {isDark ? <Sun size={18} className="group-hover:rotate-45 transition-transform" /> : <Moon size={18} className="group-hover:-rotate-12 transition-transform" />}
            </button>
            <Link 
              href="/" 
              className={`flex items-center gap-2 transition-colors text-sm font-black uppercase tracking-widest group ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {isDark ? "Back" : "Return Home"}
            </Link>
          </div>

          <div className="w-full max-w-[440px] space-y-10">
            {/* Logo/Icon */}
            <div className="text-center space-y-4">
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl rotate-3 transition-all duration-700 hover:rotate-0 cursor-default ${
                isDark ? 'bg-indigo-600 shadow-indigo-500/20' : 'bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_12px_28px_rgba(37,99,235,0.35)]'
              }`}>
                <Building2 size={36} />
              </div>
              <div className="space-y-2">
                <h2 className={`text-4xl font-black tracking-tight transition-colors duration-700 ${isDark ? 'text-white' : 'text-slate-900'}`}>Portal Login</h2>
                <p className={`font-medium transition-colors duration-700 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Sign in to manage administrative operations</p>
              </div>
            </div>

            {/* Error Message */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-2xl border text-sm font-bold text-center transition-colors duration-700 ${
                    isDark 
                      ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' 
                      : 'bg-rose-50 border-rose-200 text-rose-600'
                  }`}
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2 group">
                <div className="relative">
                  <UserRound className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-700 ${
                    isDark ? 'text-slate-500 group-focus-within:text-indigo-400' : 'text-slate-400 group-focus-within:text-blue-600'
                  }`} size={20} />
                  <input 
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Admin ID (Email)"
                    required
                    className={`w-full border rounded-2xl py-4.5 pl-14 pr-6 text-sm font-bold outline-none transition-all duration-700 ${
                      isDark 
                        ? 'bg-slate-900/50 border-white/5 text-white focus:border-indigo-500/50 focus:bg-slate-900 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-slate-600' 
                        : 'bg-white border-slate-200 text-slate-900 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-50 shadow-sm placeholder:text-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <div className="relative">
                  <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-700 ${
                    isDark ? 'text-slate-500 group-focus-within:text-indigo-400' : 'text-slate-400 group-focus-within:text-blue-600'
                  }`} size={20} />
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className={`w-full border rounded-2xl py-4.5 pl-14 pr-14 text-sm font-bold outline-none transition-all duration-700 ${
                      isDark 
                        ? 'bg-slate-900/50 border-white/5 text-white focus:border-indigo-500/50 focus:bg-slate-900 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-slate-600' 
                        : 'bg-white border-slate-200 text-slate-900 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-50 shadow-sm placeholder:text-slate-400'
                    }`}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-5 top-1/2 -translate-y-1/2 transition-colors duration-700 ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between px-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="peer sr-only" 
                    />
                    <div className={`w-5 h-5 border-2 rounded-md transition-all duration-700 flex items-center justify-center ${
                      rememberMe 
                        ? (isDark ? 'border-indigo-500' : 'border-cyan-500 shadow-sm') 
                        : (isDark ? 'border-slate-700' : 'border-slate-300')
                    }`}>
                      <Check className={`w-3.5 h-3.5 transition-all duration-300 ${
                        rememberMe ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      } ${isDark ? 'text-indigo-400' : 'text-cyan-600'}`} strokeWidth={4} />
                    </div>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-700 ${isDark ? 'text-slate-500 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-900'}`}>Keep me signed in</span>
                </label>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-700 ${
                  isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-100 shadow-sm'
                }`}>
                   <ShieldCheck size={12} className="text-emerald-500" />
                   <span className={`text-[9px] font-black uppercase tracking-wider transition-colors duration-700 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>Official Only</span>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className={`w-full rounded-2xl py-4.5 text-sm font-black uppercase tracking-[0.2em] shadow-2xl transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4 ${
                  isDark 
                    ? 'bg-indigo-600 text-white shadow-indigo-500/20 hover:bg-indigo-500 hover:-translate-y-0.5' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_14px_28px_rgba(16,185,129,0.28)] hover:from-emerald-600 hover:to-teal-600 hover:-translate-y-0.5'
                }`}
              >
                {loading ? "Authenticating..." : (
                  <>Log In <ArrowRight size={18} /></>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="pt-10 flex flex-col items-center gap-6">
              <p className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-700 ${isDark ? 'text-slate-600' : 'text-slate-300'}`}>Authorized Personnel Only</p>
              <p className={`text-[10px] font-black uppercase tracking-[0.14em] text-center max-w-[280px] transition-colors duration-700 ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>
                Dev admin: admin@example.com/adminspide
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </main>
  );
}
