"use client";

import Link from "next/link";
import { ShieldCheck, Mail, Phone, ExternalLink, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 md:py-24 bg-gradient-to-b from-blue-50 via-white-100/30 to-blue-200/50 border-t border-blue-200/50">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-10 md:mb-20">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
              <ShieldCheck className="text-white w-6 h-6" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-2xl text-[#1E3A8A] tracking-tight">CivicFlow</span>
          </div>
          <p className="text-[14px] md:text-base text-slate-500 font-medium leading-[1.6]">
            Dedicated to transparent governance and modern digital services for every citizen. Experience the future of civic engagement.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-400 hover:text-[#2563EB] transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-[#2563EB] transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-[#2563EB] transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        {/* Navigation and Resources sit side-by-side on mobile */}
        <div className="grid grid-cols-2 md:contents gap-8 md:gap-0">
          <div className="lg:ml-12">
            <h4 className="font-black text-slate-900 mb-5 md:mb-8 uppercase tracking-widest text-[12px] md:text-sm">Navigation</h4>
            <ul className="space-y-3 md:space-y-5 text-[14px] md:text-base font-bold text-slate-400">
              <li><Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#2563EB] transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-[#2563EB] transition-colors">Services</Link></li>
              <li><Link href="/directory" className="hover:text-[#2563EB] transition-colors">Directory</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 mb-5 md:mb-8 uppercase tracking-widest text-[12px] md:text-sm">Resources</h4>
            <ul className="space-y-3 md:space-y-5 text-[14px] md:text-base font-bold text-slate-400">
              <li><Link href="#" className="hover:text-[#2563EB] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#2563EB] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#2563EB] transition-colors">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-[#2563EB] transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 mt-2 md:mt-0 pt-6 md:pt-0 border-t border-slate-200/50 md:border-none">
          <h4 className="font-black text-slate-900 mb-0 uppercase tracking-widest text-[12px] md:text-sm hidden md:block">Contact Us</h4>
          <div className="flex flex-col gap-4 md:gap-5 text-slate-500 font-medium text-[14px] md:text-base">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#2563EB]" />
              <span>support@civicflow.gov</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#2563EB]" />
              <span>(555) 123-4567</span>
            </div>
          </div>
          <Link href="/directory" className="inline-flex items-center justify-center md:justify-start gap-3 px-6 py-3.5 md:py-3 border border-slate-100 bg-white rounded-xl md:rounded-2xl text-[#1E3A8A] font-black text-sm shadow-sm hover:shadow-md transition-all w-full md:w-fit mt-2 md:mt-0">
            <ExternalLink className="w-4 h-4" />
            View Directory
          </Link>
        </div>
      </div>
      
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-8 md:pt-10 border-t border-slate-200/50 md:border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <p className="text-[12px] md:text-sm font-bold text-slate-400 text-center md:text-left">© 2024 CivicFlow Government. All rights reserved.</p>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] font-black text-slate-300 uppercase tracking-widest flex-wrap justify-center">
          <span>Security Certified</span>
          <span>Official Govt Website</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
