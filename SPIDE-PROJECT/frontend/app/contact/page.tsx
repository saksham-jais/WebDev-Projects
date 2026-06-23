"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/ContactHeader";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import ContactCTA from "@/components/ContactCTA";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <ContactHeader />

      {/* Main Content Section */}
      <section className="pt-8 pb-20 md:py-24 bg-white relative">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 lg:gap-20 items-stretch">
            {/* Left Side: Contact Information */}
            <div className="mb-12 lg:mb-0 w-full relative z-20">
              <ContactInfo />
            </div>

            {/* Mobile Split Divider */}
            <div className="lg:hidden flex items-center gap-6 w-full mb-12 relative z-10 opacity-70">
              <div className="flex-1 h-px bg-gradient-to-r from-white via-slate-200 to-slate-300" />
              <div className="w-2 h-2 rounded-full bg-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-400/20" />
              <div className="flex-1 h-px bg-gradient-to-l from-white via-slate-200 to-slate-300" />
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full relative z-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Split Divider */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex items-center gap-8 -mb-12 relative z-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-slate-300" />
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/20" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 to-slate-300" />
      </div>

      {/* Map Section */}
      <ContactMap />

      {/* CTA Section */}
      <ContactCTA />

      <Footer />
    </main>
  );
}
