"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { publicApi } from "@/lib/api";

const fallbackContactDetails = [
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: "Main Office",
    details: ["Nagar Palika Parishad", "Aboke Nagar Dewariya, Deoria", "Uttar Pradesh 274001"],
    bgColor: "bg-blue-50",
  },
  {
    icon: <Phone className="w-6 h-6 text-indigo-600" />,
    title: "Phone Support",
    details: ["General Inquiries: 05568 297 530", "Citizen Helpline: 1800-123-4567", "Available Mon–Fri, 9AM–6PM"],
    bgColor: "bg-indigo-50",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email Correspondence",
    details: ["Official: eonppdeo@gmail.com", "Citizen Care: info@npdeoria.gov.in"],
    bgColor: "bg-blue-50",
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: "Office Hours",
    details: ["Monday - Friday: 10:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    bgColor: "bg-indigo-50",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    title: "Emergency Services",
    details: ["For life-threatening emergencies, please dial 112 immediately."],
    bgColor: "bg-red-50",
  },
];

const fallbackMobileContactDetails = [
  {
    icon: <Phone className="w-5 h-5 text-[#3B82F6]" />,
    title: "Citizen Helpline",
    subtitle: "+1 (555) 0123-4567",
    actionText: "Call",
    actionLink: "tel:+155501234567"
  },
  {
    icon: <Mail className="w-5 h-5 text-[#3B82F6]" />,
    title: "Official Email",
    subtitle: "support@civicflow.gov",
    actionText: "Mail",
    actionLink: "mailto:support@civicflow.gov"
  },
  {
    icon: <Clock className="w-5 h-5 text-[#3B82F6]" />,
    title: "Office Hours",
    subtitle: "Mon-Fri: 9 AM - 5 PM",
    actionText: "Info",
    actionLink: "#"
  }
];

export default function ContactInfo() {
  const [contactDetails, setContactDetails] = useState(fallbackContactDetails);
  const [mobileContactDetails, setMobileContactDetails] = useState(fallbackMobileContactDetails);

  useEffect(() => {
    publicApi.getOfficials()
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          return;
        }

        const officialCards = data.slice(0, 3).map((official: any, index: number) => ({
          icon: index === 0 ? <MapPin className="w-6 h-6 text-blue-600" /> : index === 1 ? <Phone className="w-6 h-6 text-indigo-600" /> : <Mail className="w-6 h-6 text-blue-600" />,
          title: official.designation || official.name,
          details: [official.name, official.department || "Municipal Department", official.email || official.phone || "Contact available on request"],
          bgColor: index % 2 === 0 ? "bg-blue-50" : "bg-indigo-50",
        }));

        const officialMobileCards = data.slice(0, 3).map((official: any, index: number) => ({
          icon: index === 0 ? <Phone className="w-5 h-5 text-[#3B82F6]" /> : index === 1 ? <Mail className="w-5 h-5 text-[#3B82F6]" /> : <Clock className="w-5 h-5 text-[#3B82F6]" />,
          title: official.designation || official.name,
          subtitle: official.email || official.phone || official.department || "Municipal contact",
          actionText: index === 0 ? "Call" : index === 1 ? "Mail" : "Info",
          actionLink: index === 0 && official.phone ? `tel:${official.phone.replace(/[^\d+]/g, "")}` : index === 1 && official.email ? `mailto:${official.email}` : "#",
        }));

        setContactDetails([...officialCards, fallbackContactDetails[3], fallbackContactDetails[4]]);
        setMobileContactDetails(officialMobileCards);
      })
      .catch(() => {
        setContactDetails(fallbackContactDetails);
        setMobileContactDetails(fallbackMobileContactDetails);
      });
  }, []);

  return (
    <div className="space-y-6">
      {/* Desktop Heading */}
      <div className="hidden md:block mb-10">
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Get In Touch</h2>
        <p className="text-slate-500 font-medium leading-relaxed max-w-md">
          Choose the channel that works best for you. Our administrative team is distributed across specific service departments to provide direct support.
        </p>
      </div>

      {/* Mobile Heading */}
      <div className="md:hidden mb-6">
        <h2 className="text-[22px] font-bold text-slate-900 mb-1.5 tracking-tight">Get In Touch</h2>
        <p className="text-[#64748B] text-[13px] font-medium leading-relaxed">
          Choose the channel that works best for you.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-6">
        {contactDetails.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-start gap-6 p-8 rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all group"
          >
            <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              {item.details.map((detail, dIdx) => (
                <p key={dIdx} className="text-slate-500 text-sm font-medium leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Vertical List (Matches Mockup) */}
      <div className="md:hidden flex flex-col gap-4 pb-6">
        {mobileContactDetails.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[20px] border border-slate-100 p-4 pl-5 flex items-center shadow-[0_2px_12px_rgba(0,0,0,0.015)]">
            <div className="w-[46px] h-[46px] bg-[#EFF6FF] rounded-[14px] flex items-center justify-center shrink-0 mr-4">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0 pr-2">
              <h3 className="text-[14.5px] font-[800] text-[#1E293B] mb-0.5 tracking-tight truncate">{item.title}</h3>
              <p className="text-[12.5px] text-[#64748B] font-medium truncate">{item.subtitle}</p>
            </div>
            <a href={item.actionLink} className="shrink-0 px-5 py-2 rounded-[14px] border border-slate-200 text-[12.5px] font-bold text-[#3B82F6] hover:bg-slate-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              {item.actionText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
