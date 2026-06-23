"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { publicApi } from "@/lib/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await publicApi.submitContactMessage(formData);
      setStatus("success");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Desktop Form */}
      <div className="hidden md:block bg-white p-12 md:p-16 rounded-[48px] border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative overflow-hidden">
        {/* Design elements from image */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Send a Message</h2>
            <p className="text-slate-400 font-medium text-sm">Our department heads respond within 24 business hours.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-700"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-700"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we assist you?"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-700"
            />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your inquiry in detail..."
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-700 resize-none"
            />
          </div>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4 text-emerald-700 font-bold"
              >
                <CheckCircle2 className="w-6 h-6" />
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-700 font-bold"
              >
                <AlertCircle className="w-6 h-6" />
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 disabled:opacity-70 group"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-center text-slate-400 text-xs font-medium">
            By clicking send, you agree to our <a href="#" className="underline text-blue-500">Terms of Service</a> and <a href="#" className="underline text-blue-500">Privacy Policy</a>.
          </p>
        </form>
      </div>

      {/* Mobile Form (Matches Mockup) */}
      <div className="md:hidden flex flex-col pt-4">
        {/* Header */}
        <div className="mb-6 px-1">
          <h2 className="text-[26px] font-[800] text-slate-900 tracking-tight mb-1">Send a Message</h2>
          <p className="text-[#64748B] text-[14px]">Response time: within 24 hours.</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-5">
          {/* Card Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-slate-700 font-[800] text-[15px]">
              <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
              New Inquiry Form
            </div>
            <ChevronUp className="w-5 h-5 text-slate-400" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {/* Hidden subject field for form validation when omitted from mobile UI */}
            <input type="hidden" name="subject" value={formData.subject || "Mobile Inquiry"} />
            
            {/* FULL NAME */}
            <div className="space-y-2">
              <label className="text-[11px] font-[800] text-[#8492A6] tracking-[0.05em] uppercase">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-slate-700 text-[14px] placeholder-slate-400"
              />
            </div>

            {/* EMAIL ADDRESS */}
            <div className="space-y-2">
              <label className="text-[11px] font-[800] text-[#8492A6] tracking-[0.05em] uppercase">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-slate-700 text-[14px] placeholder-slate-400"
              />
            </div>

            {/* YOUR MESSAGE */}
            <div className="space-y-2">
              <label className="text-[11px] font-[800] text-[#8492A6] tracking-[0.05em] uppercase">Your Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we assist you today?"
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition-all text-slate-700 text-[14px] resize-none placeholder-slate-400"
              />
            </div>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-emerald-700 font-bold text-[13px]"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Message sent successfully.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-700 font-bold text-[13px]"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-[#4174EA] hover:bg-[#3461CB] text-white font-[800] text-[14px] rounded-[10px] transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
