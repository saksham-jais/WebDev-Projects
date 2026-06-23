"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const textMap: Record<string, string> = {
  "Home": "होम",
  "About": "परिचय",
  "Services": "सेवाएं",
  "Directory": "निर्देशिका",
  "Contact Us": "संपर्क करें",
  "Contact": "संपर्क",
  "E-Service": "ई-सेवा",
  "Tax Collector": "टैक्स कलेक्टर",
  "Know Your Tax Collector": "अपना टैक्स कलेक्टर जानें",
  "Login": "लॉगिन",
  "Official Login": "अधिकारी लॉगिन",
  "Customer Login": "नागरिक लॉगिन",
  "Choose Your Login Type": "अपना लॉगिन प्रकार चुनें",
  "Select the appropriate portal to continue.": "आगे बढ़ने के लिए उपयुक्त पोर्टल चुनें।",
  "For municipal staff, officers, and administrators.": "नगरपालिका स्टाफ, अधिकारियों और प्रशासकों के लिए।",
  "For residents to access services, requests, and updates.": "निवासियों के लिए सेवाएं, अनुरोध और अपडेट देखने हेतु।",
  "Continue": "आगे बढ़ें",
  "Official Municipal Portal": "आधिकारिक नगर पालिका पोर्टल",
  "Building a Smarter,": "एक स्मार्ट",
  "Connected Community": "जुड़ा हुआ समुदाय",
  "Experience transparent governance and high-efficiency e-services designed for the modern citizen. Your gateway to municipal resources and city updates.": "आधुनिक नागरिक के लिए पारदर्शी शासन और उच्च-कार्यक्षमता ई-सेवाओं का अनुभव करें। नगर संसाधनों और शहर के अपडेट के लिए आपका प्रवेश द्वार।",
  "Access E-Services": "ई-सेवाएं देखें",
  "Our Mission": "हमारा मिशन",
  "Our Commitment": "हमारी प्रतिबद्धता",
  "Need Assistance?": "सहायता चाहिए?",
  "Get in Touch": "संपर्क करें",
  "View Directory": "निर्देशिका देखें",
  "Latest Updates": "नवीनतम अपडेट",
  "View All": "सभी देखें",
  "View All News": "सभी समाचार देखें",
  "Loading latest updates...": "नवीनतम अपडेट लोड हो रहे हैं...",
  "No updates available at this time.": "इस समय कोई अपडेट उपलब्ध नहीं है।",
  "About CivicFlow": "सिविकफ्लो के बारे में",
  "Municipal Directory": "नगरपालिका निर्देशिका",
  "Citizen Support Center": "नागरिक सहायता केंद्र",
  "Send a Message": "संदेश भेजें",
  "Full Name": "पूरा नाम",
  "Email Address": "ईमेल पता",
  "Subject": "विषय",
  "Your Message": "आपका संदेश",
  "How can we assist you?": "हम आपकी कैसे सहायता कर सकते हैं?",
  "Search": "खोजें",
  "Select Ward": "वार्ड चुनें",
  "Search services...": "सेवाएं खोजें...",
  "Create Card": "कार्ड बनाएं",
  "Ward Filter": "वार्ड फ़िल्टर",
  "Ward Collector Cards": "वार्ड कलेक्टर कार्ड",
  "Select a ward and click Search to view collectors": "कलेक्टर देखने के लिए वार्ड चुनें और खोजें पर क्लिक करें",
  "Please select a ward and click Search to display collector cards.": "कलेक्टर कार्ड दिखाने के लिए वार्ड चुनें और खोजें पर क्लिक करें।",
  "No tax collectors found for this ward.": "इस वार्ड के लिए कोई टैक्स कलेक्टर नहीं मिला।",
  "Select language": "भाषा चुनें",
  "English": "अंग्रेज़ी",
  "Hindi": "हिंदी",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।"
};

const sortedPairs = Object.entries(textMap).sort((a, b) => b[0].length - a[0].length);

const textOriginals = new WeakMap<Text, string>();
const attrOriginals = new WeakMap<Element, Map<string, string>>();

function translateFromOriginal(value: string, language: "en" | "hi") {
  if (language === "en") {
    return value;
  }

  let translated = value;
  for (const [en, hi] of sortedPairs) {
    translated = translated.replaceAll(en, hi);
  }
  return translated;
}

function processTextNode(node: Text, language: "en" | "hi") {
  const current = node.nodeValue ?? "";
  if (!textOriginals.has(node)) {
    textOriginals.set(node, current);
  }
  const original = textOriginals.get(node) ?? current;
  const parentTag = (node.parentElement?.tagName || "").toLowerCase();
  if (parentTag === "script" || parentTag === "style") {
    return;
  }
  node.nodeValue = translateFromOriginal(original, language);
}

function processElementAttributes(el: Element, language: "en" | "hi") {
  const attrs = ["placeholder", "title", "aria-label"];
  let originalMap = attrOriginals.get(el);
  if (!originalMap) {
    originalMap = new Map<string, string>();
    attrOriginals.set(el, originalMap);
  }

  attrs.forEach((attr) => {
    if (!el.hasAttribute(attr)) {
      return;
    }

    const current = el.getAttribute(attr) ?? "";
    if (!originalMap!.has(attr)) {
      originalMap!.set(attr, current);
    }

    const original = originalMap!.get(attr) ?? current;
    el.setAttribute(attr, translateFromOriginal(original, language));
  });
}

function processTree(root: ParentNode, language: "en" | "hi") {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    processTextNode(current as Text, language);
    current = walker.nextNode();
  }

  if (root instanceof Element) {
    processElementAttributes(root, language);
  }

  root.querySelectorAll("*").forEach((el) => processElementAttributes(el, language));
}

export default function LanguageAutoTranslator() {
  const { language } = useLanguage();

  useEffect(() => {
    processTree(document.body, language);

    let isApplying = false;
    let rafId: number | null = null;

    const observer = new MutationObserver((mutations) => {
      if (isApplying) {
        return;
      }

      const rootsToTranslate = new Set<Element>();

      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            if ((node as Text).parentElement) {
              rootsToTranslate.add((node as Text).parentElement as Element);
            }
          }
          if (node.nodeType === Node.ELEMENT_NODE) {
            rootsToTranslate.add(node as Element);
          }
        });
      }

      if (rootsToTranslate.size === 0) {
        return;
      }

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        isApplying = true;
        rootsToTranslate.forEach((root) => processTree(root, language));
        isApplying = false;
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [language]);

  return null;
}
