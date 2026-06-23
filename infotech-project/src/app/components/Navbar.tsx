import { useState } from "react";
import svgPaths from "../../imports/Desktop1440Px/svg-37exuv1xns";
import { Phone, Menu, X } from "lucide-react";

function LogoIcon() {
  return (
    <div className="relative shrink-0" style={{ width: 46, height: 50 }}>
      <svg width="46" height="50" fill="none" viewBox="0 0 45.7095 49.9992">
        <g>
          <path d={svgPaths.p2b8be980} fill="url(#logo_grad1)" />
          <path d={svgPaths.p9b3d700} fill="url(#logo_grad2)" />
          <path d={svgPaths.p11724b80} fill="#4356D6" />
        </g>
        <defs>
          <linearGradient id="logo_grad1" x1="32.428" x2="31.9597" y1="18.2318" y2="43.1316" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
          <linearGradient id="logo_grad2" x1="38.5617" x2="33.5817" y1="42.2365" y2="60.6757" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", active: true },
    { label: "About Us", active: false },
    { label: "Our Services", active: false },
    { label: "Pricing", active: false },
    { label: "FAQ", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <nav className="landing-navbar absolute top-0 left-0 right-0 z-50 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
      {/* 3-column layout: logo | nav-center | cta — guarantees true centering */}
      <div className="landing-navbar__inner max-w-[1440px] mx-auto px-6 lg:px-[72px] h-[70px] lg:h-[85px] hidden lg:flex items-center justify-between">
        {/* Logo — Left aligned */}
        <div className="landing-navbar__brand-wrap flex-1 flex justify-start">
          <div className="landing-navbar__brand flex items-center gap-2">
            <LogoIcon />
            <span className="landing-navbar__brand-text font-['Roboto:Bold',sans-serif] font-bold text-[32px] lg:text-[36px] text-black tracking-tight" style={{ fontVariationSettings: "'wdth' 100" }}>
              Logo
            </span>
          </div>
        </div>

        {/* Desktop Nav Links — Center aligned */}
        <div className="landing-navbar__links flex-initial flex items-center justify-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`landing-navbar__link px-5 py-2 font-['Roboto:Medium',sans-serif] font-medium text-[16px] lg:text-[18px] capitalize whitespace-nowrap transition-colors hover:text-[#4356d6] ${
                link.active ? "text-[#4356d6]" : "text-[#282828]"
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Us Button — Right aligned */}
        <div className="landing-navbar__cta-wrap flex-1 flex justify-end">
          <button className="group landing-navbar__cta flex items-center gap-2 bg-[#4356d6] hover:bg-white border-2 border-[#4356d6] transition-all duration-300 text-white hover:text-[#4356d6] px-6 py-[12px] rounded-[8px] font-['Roboto:Medium',sans-serif] font-medium text-[16px] lg:text-[18px] capitalize whitespace-nowrap">
            <Phone size={20} className="shrink-0 transition-colors duration-300" />
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile/Tablet header row (shown below lg) */}
      <div className="lg:hidden max-w-[1440px] mx-auto px-6 h-[70px] flex items-center justify-between">
        <div className="landing-navbar__brand flex items-center gap-3">
          <LogoIcon />
          <span className="font-['Roboto:Bold',sans-serif] font-bold text-[28px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>Logo</span>
        </div>

        {/* Tablet: Contact + Menu */}
        <div className="landing-navbar__tablet-controls hidden md:flex lg:hidden items-center gap-4">
          <button className="group landing-navbar__tablet-cta flex items-center gap-2 bg-[#4356d6] hover:bg-white border-2 border-[#4356d6] transition-all duration-300 text-white hover:text-[#4356d6] px-4 py-2.5 rounded-[8px] font-['Roboto:Medium',sans-serif] font-medium text-[16px] capitalize whitespace-nowrap">
            <Phone size={18} className="shrink-0 transition-colors duration-300" />
            Contact us
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="landing-navbar__menu-toggle p-1">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile: Just hamburger */}
        <div className="landing-navbar__mobile-toggle flex md:hidden items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet menu dropdown */}
      {menuOpen && (
        <div className="landing-navbar__dropdown lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`landing-navbar__dropdown-link py-2 font-['Roboto:Medium',sans-serif] font-medium text-[16px] capitalize transition-colors hover:text-[#4356d6] ${
                link.active ? "text-[#4356d6]" : "text-[#282828]"
              }`}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 md:hidden">
            <button className="group landing-navbar__dropdown-cta w-full flex items-center justify-center gap-2 bg-[#4356d6] hover:bg-white border-2 border-[#4356d6] transition-all duration-300 text-white hover:text-[#4356d6] px-4 py-3 rounded-[8px] font-['Roboto:Medium',sans-serif] font-medium text-[16px] capitalize">
              <Phone size={18} className="shrink-0 transition-colors duration-300" />
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
