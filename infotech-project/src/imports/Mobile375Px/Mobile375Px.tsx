import React from "react";
import svgPaths from "./svg-1a3qe0dvod";
import imgRectangle21 from "./7ecdfb0dfe09205ba0ef305198bbce94f69730e0.png";
import imgRectangle1 from "./8922662aa38585d484ec4496cd82e1bf4f2c4842.png";
import imgRectangle3 from "./bf446093ff5b8425752106b412466c2edd14e6e7.png";
import imgRectangle2 from "./e9ebf5be4cc3304fdb1d12ce61b01056f2ba2933.png";
import { imgVector } from "./svg-pi4kb";
import { 
  Menu, X, Home, Info, Briefcase, Tag, HelpCircle, User
} from "lucide-react";

function Group1() {
  return (
    <div className="col-1 h-[33.133px] ml-0 mt-0 relative row-1 w-[30.29px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.2903 33.1332">
        <g id="Group">
          <path d={svgPaths.p1c79f300} fill="url(#paint0_linear_1_2395)" id="Vector" />
          <path d={svgPaths.p1f84b30} fill="url(#paint1_linear_1_2395)" id="Vector_2" />
          <path d={svgPaths.p3b0d6a00} fill="var(--fill-0, #4356D6)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2395" x1="21.4891" x2="21.1788" y1="12.0818" y2="28.5823">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2395" x1="25.5537" x2="22.2535" y1="27.9891" y2="40.2082">
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

function Group2() {
  return (
    <div className="col-1 h-[16.054px] ml-[3.71px] mt-[5.75px] relative row-1 w-[18.099px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.099 16.0543">
        <g id="Group">
          <path d={svgPaths.p284cbd00} fill="url(#paint0_linear_1_2581)" id="Vector" />
          <path d={svgPaths.p30cf3f80} fill="var(--fill-0, #4356D6)" id="Vector_2" />
          <path d={svgPaths.p70e0100} fill="url(#paint1_linear_1_2581)" id="Vector_3" />
          <path d={svgPaths.p1769e900} fill="url(#paint2_linear_1_2581)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2581" x1="5.83307" x2="7.05005" y1="-0.82917" y2="27.77">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2581" x1="15.8485" x2="17.2562" y1="-4.13072" y2="28.951">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2581" x1="1.18574" x2="2.47558" y1="-1.78183" y2="28.529">
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

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Objects() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="OBJECTS">
      <Group />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] h-[34px] items-center relative shrink-0 w-[122px]">
      <Objects />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[33px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Logo
      </p>
    </div>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Info, label: "About Us" },
    { icon: Briefcase, label: "Our Services" },
    { icon: Tag, label: "Pricing" },
    { icon: HelpCircle, label: "FAQ" },
    { icon: User, label: "Contact" },
  ];

  return (
    <div className="fixed inset-0 z-[3000] flex">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative ml-auto h-screen w-[85%] bg-white shadow-2xl flex flex-col p-6 overflow-y-auto z-[3001]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Objects />
            <span className="font-bold text-[24px] text-black">Logo</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="size-8 text-gray-500" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
            >
              <div className="size-10 flex items-center justify-center rounded-lg bg-gray-50">
                <item.icon className="size-5 text-gray-600" />
              </div>
              <span className="text-[17px] font-medium text-gray-700">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <button className="w-full bg-[#4356d6] text-white py-4 rounded-xl font-semibold text-[17px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame6({ onOpen }: { onOpen: () => void }) {
  return (
    <button 
      onClick={onOpen}
      className="content-stretch flex items-start relative shrink-0 size-[24px] hover:opacity-70 transition-opacity cursor-pointer z-[100]"
    >
      <Menu className="size-full text-black" />
    </button>
  );
}

function Frame5({ onOpenMenu }: { onOpenMenu?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame29 />
      <Frame6 onOpen={onOpenMenu || (() => {})} />
    </div>
  );
}

function Frame7({ onOpenMenu }: { onOpenMenu?: () => void }) {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_0px_3px_rgba(0,0,0,0.11)] flex flex-col items-start left-0 px-[16px] py-[10px] top-0 w-[375px] z-[50]">
      <Frame5 onOpenMenu={onOpenMenu} />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[13.207px] left-[16px] top-[159px] w-[230px]">
      <div className="absolute inset-[-11.36%_0_-11.23%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230.362 16.1896">
          <g id="Group 4">
            <path d={svgPaths.p19274180} id="Vector 1" stroke="var(--stroke-0, #FA1239)" strokeWidth="3" />
            <path d={svgPaths.p2cf3c0} id="Vector 2" stroke="var(--stroke-0, #FA1239)" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <rect fill="var(--fill-0, #4356D6)" height="24" rx="12" width="24" />
          <path d={svgPaths.p37a539c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Check />
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        End-to-end compliance support
      </p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <rect fill="var(--fill-0, #4356D6)" height="24" rx="12" width="24" />
          <path d={svgPaths.p37a539c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Check1 />
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regulatory filings made simple
      </p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <rect fill="var(--fill-0, #4356D6)" height="24" rx="12" width="24" />
          <path d={svgPaths.p37a539c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Check2 />
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black w-[275px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Tailored solutions for independent analysts & firms`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[315px]">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <div className="bg-[#4356d6] h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Buttons">
        <div aria-hidden="true" className="absolute border border-[#4356d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[14px] relative size-full">
            <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Get Started
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(67,86,214,0)] h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Buttons">
        <div aria-hidden="true" className="absolute border-2 border-[#4356d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[14px] relative size-full">
            <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4356d6] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` Book a Consultation`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#fafbff] content-stretch flex flex-col gap-[26px] h-[650px] items-center py-[26px] relative shrink-0 w-full">
      <p className="capitalize font-['Roboto:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[0px] text-black text-center w-[343px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[48px] text-[38px]">{`Simplifying `}</span>
        <span className="leading-[48px] text-[#4356d6] text-[38px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Compliance
        </span>
        <span className="leading-[48px] text-[38px]">{` for Research Analysts`}</span>
      </p>
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black text-center w-[343px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stay focused on your insights—we’ll handle the compliance. Our expert solutions ensure your research practices meet every regulatory requirement with confidence and ease
      </p>
      <Frame14 />
      <Frame />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[656px] items-center px-[16px] relative shrink-0 w-[375px]">
      <Frame28 />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 h-[21.146px] ml-[13px] mt-0 relative row-1 w-[85px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.0001 21.1461">
        <g id="Group">
          <path d={svgPaths.p76a1c00} fill="var(--fill-0, #E2E2FF)" id="Vector" />
          <path d={svgPaths.p2fdbb900} fill="var(--fill-0, #E2E2FF)" id="Vector_2" />
          <path d={svgPaths.p34210480} fill="var(--fill-0, #E2E2FF)" id="Vector_3" />
          <path d={svgPaths.p3e1c1500} fill="var(--fill-0, #E2E2FF)" id="Vector_4" />
          <path d={svgPaths.p37ef4380} fill="var(--fill-0, #E2E2FF)" id="Vector_5" />
          <path d={svgPaths.p1e473500} fill="var(--fill-0, #E2E2FF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 h-[242.446px] ml-0 mt-[12.69px] relative row-1 w-[350px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 242.446">
        <g id="Group">
          <path d={svgPaths.p2aca7300} fill="var(--fill-0, #E5E5FF)" id="Vector" />
          <path d={svgPaths.p34e62900} fill="var(--fill-0, #E5E5FF)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p38c57280} fill="var(--fill-0, #E5E5FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 h-[56.482px] ml-[232.85px] mt-[197.95px] relative row-1 w-[66.133px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.1332 56.4825">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p2da4f500} fill="var(--fill-0, #E2E2FF)" id="Vector" />
            <path d={svgPaths.p307b630} fill="var(--fill-0, #B7B7FF)" id="Vector_2" />
            <path d={svgPaths.p2c741900} fill="var(--fill-0, #B7B7FF)" id="Vector_3" />
            <path d={svgPaths.p3430c200} fill="var(--fill-0, #B7B7FF)" id="Vector_4" />
            <path d={svgPaths.p2958f080} fill="var(--fill-0, #B7B7FF)" id="Vector_5" />
          </g>
          <path d={svgPaths.pb5a9210} fill="var(--fill-0, #B7B7FF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 h-[254.786px] ml-[83.51px] mt-0 relative row-1 w-[134.372px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.372 254.786">
        <g id="Group">
          <path d={svgPaths.pa567800} fill="var(--fill-0, #1B1B43)" id="Vector" />
          <g id="Group_2">
            <g id="Group_3">
              <path d={svgPaths.p2363ddf0} fill="var(--fill-0, #FFBC96)" id="Vector_2" />
              <path d={svgPaths.p28e4bfc0} fill="var(--fill-0, #1B1B43)" id="Vector_3" />
              <path d={svgPaths.pf466400} fill="var(--fill-0, #656590)" id="Vector_4" />
              <path d={svgPaths.p3690500} fill="var(--fill-0, #656590)" id="Vector_5" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.p25e5ffb0} fill="var(--fill-0, #FFBC96)" id="Vector_6" />
              <path d={svgPaths.p34f67700} fill="var(--fill-0, #1B1B43)" id="Vector_7" />
              <path d={svgPaths.pd8cf480} fill="var(--fill-0, #656590)" id="Vector_8" />
              <path d={svgPaths.p22223b00} fill="var(--fill-0, #656590)" id="Vector_9" />
            </g>
            <path d={svgPaths.p285c9380} fill="var(--fill-0, #5254CF)" id="Vector_10" />
            <path d={svgPaths.p10d3400} fill="var(--fill-0, #5254CF)" id="Vector_11" />
            <path d={svgPaths.p22bb93a0} fill="var(--fill-0, #1B1B43)" id="Vector_12" opacity="0.6" />
            <path d={svgPaths.p1774d300} fill="var(--fill-0, #1B1B43)" id="Vector_13" />
            <path d={svgPaths.p31033600} fill="var(--fill-0, #1B1B43)" id="Vector_14" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p2fe88c00} fill="var(--fill-0, #FFBC96)" id="Vector_15" />
            <path d={svgPaths.p22a92b80} fill="var(--fill-0, #D28572)" id="Vector_16" />
            <path d={svgPaths.pcc91b00} fill="var(--fill-0, #1B1B43)" id="Vector_17" />
            <path d={svgPaths.p245cd600} fill="var(--fill-0, #1B1B43)" id="Vector_18" />
            <path d={svgPaths.p1605ee00} fill="var(--fill-0, #FFBC96)" id="Vector_19" />
            <g id="Group_6">
              <path d={svgPaths.p3f3ad300} fill="var(--fill-0, white)" id="Vector_20" />
              <path d={svgPaths.p3b092d70} fill="var(--fill-0, #5254CF)" id="Vector_21" />
            </g>
            <path d={svgPaths.p300e9e00} fill="var(--fill-0, #FFBC96)" id="Vector_22" />
            <g id="Group_7">
              <path d={svgPaths.p39e79c00} fill="var(--fill-0, #5254CF)" id="Vector_23" />
              <path d={svgPaths.pb046d00} fill="var(--fill-0, #5254CF)" id="Vector_24" />
              <path d={svgPaths.p2e22d180} fill="var(--fill-0, #5254CF)" id="Vector_25" />
              <path d={svgPaths.p14ef0a00} fill="var(--fill-0, #5254CF)" id="Vector_26" />
            </g>
            <path d={svgPaths.p1be20f80} fill="var(--fill-0, #D28572)" id="Vector_27" />
            <g id="Group_8">
              <path d={svgPaths.p1f7de800} fill="var(--fill-0, #D28572)" id="Vector_28" />
              <path d={svgPaths.pb245f80} fill="var(--fill-0, #D28572)" id="Vector_29" />
              <path d={svgPaths.p3d59a800} fill="var(--fill-0, #D28572)" id="Vector_30" />
              <path d={svgPaths.p23974b00} fill="var(--fill-0, #D28572)" id="Vector_31" />
            </g>
            <path d={svgPaths.p1becb600} fill="var(--fill-0, #D28572)" id="Vector_32" />
            <path d={svgPaths.pf4a6280} fill="var(--fill-0, #FE5B52)" id="Vector_33" opacity="0.4" />
            <path d={svgPaths.pe48f300} fill="var(--fill-0, #FE5B52)" id="Vector_34" opacity="0.4" />
            <path d={svgPaths.p2fd08f70} fill="var(--fill-0, #D28572)" id="Vector_35" />
            <path d={svgPaths.p32357172} fill="var(--fill-0, #D28572)" id="Vector_36" />
            <path d={svgPaths.p24b79b00} fill="var(--fill-0, #D28572)" id="Vector_37" />
          </g>
          <g id="Group_9">
            <path d={svgPaths.p23e709b0} fill="var(--fill-0, #FFBC96)" id="Vector_38" />
            <path d={svgPaths.p1f220c00} fill="var(--fill-0, #D28572)" id="Vector_39" />
            <path d={svgPaths.pbc41100} fill="var(--fill-0, #FFBC96)" id="Vector_40" />
            <path d={svgPaths.p2ce42c40} fill="var(--fill-0, #1B1B43)" id="Vector_41" />
            <path d={svgPaths.p76a1200} fill="var(--fill-0, #FFBC96)" id="Vector_42" />
            <path d={svgPaths.p11931580} fill="var(--fill-0, #1B1B43)" id="Vector_43" />
            <g id="Group_10">
              <path d={svgPaths.p22dfd780} fill="var(--fill-0, #1B1B43)" id="Vector_44" />
              <path d={svgPaths.p1130da00} fill="var(--fill-0, #1B1B43)" id="Vector_45" />
              <path d={svgPaths.p3b74f80} fill="var(--fill-0, #1B1B43)" id="Vector_46" />
              <path d={svgPaths.p778cfc0} fill="var(--fill-0, #1B1B43)" id="Vector_47" />
              <path d={svgPaths.p3827600} fill="var(--fill-0, #1B1B43)" id="Vector_48" />
              <g id="Group_11">
                <path d={svgPaths.p2513be80} fill="var(--fill-0, #1B1B43)" id="Vector_49" />
                <path d={svgPaths.p34906a80} fill="var(--fill-0, white)" id="Vector_50" />
              </g>
              <path d={svgPaths.p9952080} fill="var(--fill-0, #FE5B52)" id="Vector_51" opacity="0.4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Objects1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="OBJECTS">
      <Group5 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-[#5254cf] col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[34px_34px] ml-0 mt-0 relative row-1 size-[34px]" style={{ maskImage: `url('${imgRectangle21}')` }} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-px items-start leading-[normal] relative shrink-0 w-[117px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[19px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trusted by
      </p>
      <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#4356d6] text-[22px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        250+
      </p>
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[19px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Professionals
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[6px] items-center justify-center ml-[27.5px] mt-[147px] p-[4px] relative rounded-[10px] row-1">
      <MaskGroup />
      <Frame1 />
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[41px] place-items-start relative row-1">
      <Objects1 />
      <Frame2 />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
      <Group13 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center justify-center relative shrink-0">
      <Frame10 />
      <Group15 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#fafbff] content-stretch flex h-[1008px] items-start justify-center relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[1008px] items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[26px] items-start justify-center relative shrink-0 text-black text-center w-full">
      <div className="flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[34px]">
          <span className="leading-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Why `}</span>
          <span className="leading-[48px] text-[#4356d6]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Compliance Matters `}</span>
          <span className="leading-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            for Research Analysts
          </span>
        </p>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        In today’s regulatory environment, even a small oversight can lead to penalties, reputational risks, and loss of client trust. We help Research Analysts and firms navigate complex compliance requirements so they can focus on delivering high-quality research without worry.
      </p>
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[3.1%] mt-0 place-items-start relative row-1 w-[96.9%]" data-name="Group">
      <div className="col-1 h-[162.318px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-65.873px_-45.967px] mask-size-[343px_343px] ml-0 mt-0 relative row-1 w-full" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 218.231 162.318">
          <path d={svgPaths.p11c90d80} fill="var(--fill-0, #FCFBFF)" id="Vector" />
        </svg>
      </div>
      <p className="aspect-[41.15999984741211/15.777996063232422] col-1 font-['Poppins:SemiBold',sans-serif] leading-[normal] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-140.157px_-83.6px] mask-size-[343px_343px] ml-[34.04%] mt-[37.63px] not-italic relative row-1 text-[#3b3dba] text-[10.25px] w-[18.86%]" style={{ maskImage: `url('${imgVector}')` }}>
        50 / 100
      </p>
      <div className="col-1 h-[162.318px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-65.873px_-45.967px] mask-size-[343px_343px] ml-0 mt-0 relative row-1 w-full" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <div className="col-1 h-[162.318px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-58.896px_-50.153px] mask-size-[343px_343px] ml-0 mt-[4.19px] relative row-1 w-[96.9%]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 218.231 162.318">
          <path d={svgPaths.p114be4c0} fill="var(--fill-0, #1574DD)" id="Vector" />
        </svg>
      </div>
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 h-[114.892px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-82.693px_-62.827px] mask-size-[343px_343px] ml-[10.57%] mt-[16.86px] relative row-1 w-[77.37%]" style={{ maskImage: `url('${imgVector}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174.244 114.892">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p5f5200} fill="var(--fill-0, #3B3DBA)" id="Vector" />
            <path d={svgPaths.p1d8d2700} fill="var(--fill-0, #3B3DBA)" id="Vector_2" />
            <path d={svgPaths.p20594d00} fill="var(--fill-0, #1574DD)" id="Vector_3" />
            <path d="M174.244 89.7193H51.0133" id="Vector_4" stroke="var(--stroke-0, #1574DD)" strokeMiterlimit="10" strokeWidth="0.75" />
          </g>
          <path d={svgPaths.p6782b00} fill="var(--fill-0, #1574DD)" id="Vector_5" />
          <path d={svgPaths.p3f3c4d00} fill="var(--fill-0, #3B3DBA)" id="Vector_6" />
          <path d={svgPaths.p1075bc80} fill="var(--fill-0, #1574DD)" id="Vector_7" />
          <path d={svgPaths.p1ba74300} fill="var(--fill-0, #3B3DBA)" id="Vector_8" />
          <path d={svgPaths.p217ffe00} fill="var(--fill-0, #3B3DBA)" id="Vector_9" />
          <path d={svgPaths.p9d71800} fill="var(--fill-0, #1574DD)" id="Vector_10" />
          <path d={svgPaths.p96842e0} fill="var(--fill-0, #3B3DBA)" id="Vector_11" />
          <path d={svgPaths.p32205a00} fill="var(--fill-0, #3B3DBA)" id="Vector_12" />
          <path d={svgPaths.p1204980} fill="var(--fill-0, #1574DD)" id="Vector_13" />
          <path d={svgPaths.pbc4d900} fill="var(--fill-0, #3B3DBA)" id="Vector_14" />
          <path d={svgPaths.p27f1da00} fill="var(--fill-0, #3B3DBA)" id="Vector_15" />
          <path d={svgPaths.pd26f800} fill="var(--fill-0, #3B3DBA)" id="Vector_16" />
          <path d={svgPaths.p3890ac00} fill="var(--fill-0, #3B3DBA)" id="Vector_17" />
          <path d={svgPaths.p312400} fill="var(--fill-0, #3B3DBA)" id="Vector_18" />
          <path d={svgPaths.p2b67b940} fill="var(--fill-0, #3B3DBA)" id="Vector_19" />
          <path d={svgPaths.p2c0f0a80} fill="var(--fill-0, #3B3DBA)" id="Vector_20" />
          <path d={svgPaths.pe90f700} fill="var(--fill-0, #3B3DBA)" id="Vector_21" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group14 />
      <Group17 />
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[17.17%] mt-[45.97px] place-items-start relative row-1 w-[65.66%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 h-[91.472px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.498 91.472">
        <g id="Group">
          <path d={svgPaths.p2b522370} fill="var(--fill-0, #999997)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 h-[75.742px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.499 75.7422">
        <g id="Group">
          <path d={svgPaths.p3b1f0380} fill="var(--fill-0, #4B4B4B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[80.89%] mt-[13.26px] place-items-start relative row-1 w-[11.68%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Group23() {
  return (
    <div className="col-1 h-[36.491px] ml-[29.39%] mt-[8.55px] relative row-1 w-[55.21%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.7745 36.4906">
        <g id="Group">
          <path d={svgPaths.p20fd8280} fill="var(--fill-0, #4B4B4B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[30.96%] mt-[72.31px] place-items-start relative row-1 w-[69.04%]" data-name="Group">
      <Group20 />
      <Group21 />
      <Group23 />
    </div>
  );
}

function Group24() {
  return (
    <div className="col-1 h-[65.781px] ml-[62.51%] mt-[2px] relative row-1 w-[24.7%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.3203 65.7811">
        <g id="Group">
          <path d={svgPaths.pd6c9b00} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="col-1 h-[11.781px] ml-[72.57%] mt-0 relative row-1 w-[7.47%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4825 11.7814">
        <g id="Group">
          <path d={svgPaths.p23f1f200} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="col-1 h-[66.338px] ml-[5.17%] mt-0 relative row-1 w-[94.83%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3612 66.3381">
        <g id="Group">
          <path d={svgPaths.p2fadb500} fill="var(--fill-0, #1574DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="col-1 h-[18.331px] ml-0 mt-[9.6px] relative row-1 w-[19.12%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.7415 18.3306">
        <g id="Group">
          <path d={svgPaths.p32230800} fill="var(--fill-0, #1574DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="col-1 h-[9.317px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.2644 9.31665">
        <g id="Group">
          <path d={svgPaths.p3da0100} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[14.15%] mt-[49.96px] place-items-start relative row-1 w-[64%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group32() {
  return (
    <div className="col-1 h-[3.607px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7943 3.60658">
        <g id="Group">
          <path d={svgPaths.p3d845180} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[20.88%] mt-[15.27px] place-items-start relative row-1 w-[56.41%]" data-name="Group">
      <Group32 />
    </div>
  );
}

function Group34() {
  return (
    <div className="col-1 h-[2.232px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2644 2.23177">
        <g id="Group">
          <path d={svgPaths.p9ae2200} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[21.47%] mt-[33.79px] place-items-start relative row-1 w-[46.5%]" data-name="Group">
      <Group34 />
    </div>
  );
}

function Group36() {
  return (
    <div className="col-1 h-[47.647px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1057 47.6467">
        <g id="Group">
          <path d={svgPaths.p3d2be7d0} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[71.82%] mt-[14.46px] place-items-start relative row-1 w-[22.1%]" data-name="Group">
      <Group36 />
    </div>
  );
}

function Group38() {
  return (
    <div className="col-1 h-[9.073px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0398 9.0733">
        <g id="Group">
          <path d={svgPaths.p224d9e00} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[36.2%] mt-[0.53px] place-items-start relative row-1 w-[39.45%]" data-name="Group">
      <Group38 />
    </div>
  );
}

function Group26() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[56.5%] mt-[32.82px] place-items-start relative row-1 w-[27.33%]" data-name="Group">
      <Group27 />
      <Group28 />
      <Group29 />
      <Group31 />
      <Group33 />
      <Group35 />
      <Group37 />
    </div>
  );
}

function Group40() {
  return (
    <div className="col-1 h-[14.767px] ml-[17.19%] mt-[62.49px] relative row-1 w-[12.87%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2376 14.7668">
        <g id="Group">
          <path d={svgPaths.p17c50a00} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="col-1 h-[19.088px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0905 19.0879">
        <g id="Group">
          <path d={svgPaths.p4ab5580} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="col-1 h-[3.221px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3184 3.22096">
        <g id="Group">
          <path d={svgPaths.p26612af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[61.2%] mt-[10.88px] place-items-start relative row-1 w-[34.29%]" data-name="Group">
      <Group44 />
    </div>
  );
}

function Group46() {
  return (
    <div className="col-1 h-[2.299px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.52704 2.29949">
        <g id="Group">
          <path d={svgPaths.p2b206d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[53.93%] mt-[3.1px] place-items-start relative row-1 w-[5.08%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="col-1 h-[2.299px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.52705 2.29927">
        <g id="Group">
          <path d={svgPaths.p279b700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[50.11%] mt-[3.01px] place-items-start relative row-1 w-[5.07%]" data-name="Group">
      <Group48 />
    </div>
  );
}

function Group50() {
  return (
    <div className="col-1 h-[2.299px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.52705 2.29947">
        <g id="Group">
          <path d={svgPaths.p3d963100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[45.36%] mt-[2.75px] place-items-start relative row-1 w-[5.07%]" data-name="Group">
      <Group50 />
    </div>
  );
}

function Group52() {
  return (
    <div className="col-1 h-[2.299px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.52704 2.29924">
        <g id="Group">
          <path d={svgPaths.p28224d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[40.41%] mt-[2.08px] place-items-start relative row-1 w-[5.07%]" data-name="Group">
      <Group52 />
    </div>
  );
}

function Group53() {
  return (
    <div className="col-1 h-[5.476px] ml-[4.1%] mt-0 relative row-1 w-[26.78%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.05749 5.47625">
        <g id="Group">
          <path d={svgPaths.pf05ac00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="col-1 h-[17.348px] ml-0 mt-[1.74px] relative row-1 w-[83.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.9773 17.3483">
        <g id="Group">
          <path d={svgPaths.p122a3000} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-[68.56px] place-items-start relative row-1 w-[23.86%]" data-name="Group">
      <Group42 />
      <Group43 />
      <Group45 />
      <Group47 />
      <Group49 />
      <Group51 />
      <Group53 />
      <Group54 />
    </div>
  );
}

function Group55() {
  return (
    <div className="col-1 h-[71.792px] ml-[19.67%] mt-0 relative row-1 w-[80.33%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.308 71.7917">
        <g id="Group">
          <path d={svgPaths.pec55100} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="col-1 h-[40.727px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.3419 40.7273">
        <g id="Group">
          <path d={svgPaths.p2e219a00} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[28.19%] mt-[26.2px] place-items-start relative row-1 w-[30.4%]" data-name="Group">
      <Group57 />
    </div>
  );
}

function Group39() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-[76.09px] place-items-start relative row-1 w-[75.39%]" data-name="Group">
      <Group40 />
      <Group41 />
      <Group55 />
      <Group56 />
    </div>
  );
}

function Group61() {
  return (
    <div className="col-1 h-[16.738px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5303 16.7378">
        <g id="Group">
          <path d={svgPaths.p4185980} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group60() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group61 />
    </div>
  );
}

function Group63() {
  return (
    <div className="col-1 h-[7.318px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18652 7.31849">
        <g id="Group">
          <path d={svgPaths.p1d668b00} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[3.64%] mt-[4.54px] place-items-start relative row-1 w-[62.33%]" data-name="Group">
      <Group63 />
    </div>
  );
}

function Group59() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[38.19%] mt-[15.46px] place-items-start relative row-1 w-[52.61%]" data-name="Group">
      <Group60 />
      <Group62 />
    </div>
  );
}

function Group65() {
  return (
    <div className="col-1 h-[22.302px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9199 22.3019">
        <g id="Group">
          <path d={svgPaths.p37938370} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[8.43%] mt-[1.76px] place-items-start relative row-1 w-[86.32%]" data-name="Group">
      <Group65 />
    </div>
  );
}

function Group67() {
  return (
    <div className="col-1 h-[1.968px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75787 1.9676">
        <g id="Group">
          <path d={svgPaths.p30af8b80} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group66() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[27.04%] mt-[17.1px] place-items-start relative row-1 w-[17.15%]" data-name="Group">
      <Group67 />
    </div>
  );
}

function Group69() {
  return (
    <div className="col-1 h-[1.404px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05341 1.40442">
        <g id="Group">
          <path d={svgPaths.p1a04f100} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[19.8%] mt-[13.19px] place-items-start relative row-1 w-[4.81%]" data-name="Group">
      <Group69 />
    </div>
  );
}

function Group71() {
  return (
    <div className="col-1 h-[1.404px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05338 1.40442">
        <g id="Group">
          <path d={svgPaths.p1dc8b900} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group70() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[39.81%] mt-[12.7px] place-items-start relative row-1 w-[4.81%]" data-name="Group">
      <Group71 />
    </div>
  );
}

function Group72() {
  return (
    <div className="col-1 h-[13.585px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9184 13.5854">
        <g id="Group">
          <path d={svgPaths.p37de6300} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group75() {
  return (
    <div className="col-1 h-[0.802px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.8579 0.802243">
        <g id="Group">
          <path d={svgPaths.p8fc7b00} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group75 />
    </div>
  );
}

function Group73() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[30.9%] mt-[20.22px] place-items-start relative row-1 w-[8.48%]" data-name="Group">
      <Group74 />
    </div>
  );
}

function Group77() {
  return (
    <div className="col-1 h-[1.487px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.84743 1.48737">
        <g id="Group">
          <path d={svgPaths.p1789e800} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[46.29%] mt-[13.91px] place-items-start relative row-1 w-[12.99%]" data-name="Group">
      <Group77 />
    </div>
  );
}

function Group79() {
  return (
    <div className="col-1 h-[1.486px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.36386 1.48604">
        <g id="Group">
          <path d={svgPaths.p1fcfe650} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group78() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[11.42%] mt-[14.63px] place-items-start relative row-1 w-[10.78%]" data-name="Group">
      <Group79 />
    </div>
  );
}

function Group82() {
  return (
    <div className="col-1 h-[1.876px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.14154 1.87555">
        <g id="Group">
          <path d={svgPaths.p3f43f700} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group81() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group82 />
    </div>
  );
}

function Group80() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[39.5%] mt-[9.5px] place-items-start relative row-1 w-[14.33%]" data-name="Group">
      <Group81 />
    </div>
  );
}

function Group85() {
  return (
    <div className="col-1 h-[2.199px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.91318 2.19892">
        <g id="Group">
          <path d={svgPaths.p21057580} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group84() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group85 />
    </div>
  );
}

function Group83() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[12.87%] mt-[9.52px] place-items-start relative row-1 w-[13.29%]" data-name="Group">
      <Group84 />
    </div>
  );
}

function Group89() {
  return (
    <div className="col-1 h-[7.523px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99854 7.52269">
        <g id="Group">
          <path d={svgPaths.p2184df80} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group88() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group89 />
    </div>
  );
}

function Group87() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-[81.48%]" data-name="Group">
      <Group88 />
    </div>
  );
}

function Group91() {
  return (
    <div className="col-1 h-[4.944px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94396 4.94396">
        <g id="Group">
          <path d={svgPaths.p140f8380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group90() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[32.84%] mt-[6.15px] place-items-start relative row-1 w-[67.16%]" data-name="Group">
      <Group91 />
    </div>
  );
}

function Group95() {
  return (
    <div className="col-1 h-[4.218px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.49482 4.21791">
        <g id="Group">
          <path d={svgPaths.p2703d180} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group94() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group95 />
    </div>
  );
}

function Group93() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group94 />
    </div>
  );
}

function Group92() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[29.59%] mt-[1.41px] place-items-start relative row-1 w-[33.89%]" data-name="Group">
      <Group93 />
    </div>
  );
}

function Group86() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[66.08%] mt-[9.98px] place-items-start relative row-1 w-[33.58%]" data-name="Group">
      <Group87 />
      <Group90 />
      <Group92 />
    </div>
  );
}

function Group98() {
  return (
    <div className="col-1 h-[5.911px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.15049 5.9113">
        <g id="Group">
          <path d={svgPaths.p1888c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group97() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[40.47%] mt-[0.04px] place-items-start relative row-1 w-[35.35%]" data-name="Group">
      <Group98 />
    </div>
  );
}

function Group100() {
  return (
    <div className="col-1 h-[5.911px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.15051 5.91131">
        <g id="Group">
          <path d={svgPaths.p90afb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-[0.74px] place-items-start relative row-1 w-[35.35%]" data-name="Group">
      <Group100 />
    </div>
  );
}

function Group103() {
  return (
    <div className="col-1 h-[2.865px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.49019 2.86469">
        <g id="Group">
          <path d={svgPaths.p391c5b00} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group102() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group103 />
    </div>
  );
}

function Group101() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[30.21%] mt-[2.81px] place-items-start relative row-1 w-[10.23%]" data-name="Group">
      <Group102 />
    </div>
  );
}

function Group106() {
  return (
    <div className="col-1 h-[0.626px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.3612 0.62604">
        <g id="Group">
          <path d={svgPaths.p2f556000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group105() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group106 />
    </div>
  );
}

function Group104() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[32.96%] mt-[2.49px] place-items-start relative row-1 w-[9.34%]" data-name="Group">
      <Group105 />
    </div>
  );
}

function Group109() {
  return (
    <div className="col-1 h-[2.17px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.94144 2.17006">
        <g id="Group">
          <path d={svgPaths.p3983e0f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group108() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group109 />
    </div>
  );
}

function Group107() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[72.95%] mt-0 place-items-start relative row-1 w-[27.05%]" data-name="Group">
      <Group108 />
    </div>
  );
}

function Group96() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[6.7%] mt-[10.42px] place-items-start relative row-1 w-[66.47%]" data-name="Group">
      <Group97 />
      <Group99 />
      <Group101 />
      <Group104 />
      <Group107 />
    </div>
  );
}

function Group58() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[62.95%] mt-[5.4px] place-items-start relative row-1 w-[13.1%]" data-name="Group">
      <Group59 />
      <Group64 />
      <Group66 />
      <Group68 />
      <Group70 />
      <Group72 />
      <Group73 />
      <Group76 />
      <Group78 />
      <Group80 />
      <Group83 />
      <Group86 />
      <Group96 />
    </div>
  );
}

function Group111() {
  return (
    <div className="col-1 h-[16.685px] ml-[20.89%] mt-[61.3px] relative row-1 w-[12.42%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.45308 16.6852">
        <g id="Group">
          <path d={svgPaths.p3e67ed00} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group113() {
  return (
    <div className="col-1 h-[13.896px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7146 13.8961">
        <g id="Group">
          <path d={svgPaths.p35bea740} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group115() {
  return (
    <div className="col-1 h-[8.013px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35782 8.01285">
        <g id="Group">
          <path d={svgPaths.p1839cb80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group114() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[73.55%] mt-[4.61px] place-items-start relative row-1 w-[25.62%]" data-name="Group">
      <Group115 />
    </div>
  );
}

function Group117() {
  return (
    <div className="col-1 h-[1.49px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.34597 1.49014">
        <g id="Group">
          <path d={svgPaths.p1d57ae00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group116() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[47.2%] mt-[4.59px] place-items-start relative row-1 w-[8.17%]" data-name="Group">
      <Group117 />
    </div>
  );
}

function Group119() {
  return (
    <div className="col-1 h-[1.49px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.34598 1.49012">
        <g id="Group">
          <path d={svgPaths.p34f14200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group118() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[43.67%] mt-[5.14px] place-items-start relative row-1 w-[8.17%]" data-name="Group">
      <Group119 />
    </div>
  );
}

function Group121() {
  return (
    <div className="col-1 h-[1.49px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.34598 1.49012">
        <g id="Group">
          <path d={svgPaths.p3bd6c800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group120() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[39.03%] mt-[5.72px] place-items-start relative row-1 w-[8.17%]" data-name="Group">
      <Group121 />
    </div>
  );
}

function Group123() {
  return (
    <div className="col-1 h-[1.49px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.34597 1.49014">
        <g id="Group">
          <path d={svgPaths.p134c0f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group122() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[33.42%] mt-[5.98px] place-items-start relative row-1 w-[8.17%]" data-name="Group">
      <Group123 />
    </div>
  );
}

function Group124() {
  return (
    <div className="col-1 h-[5.327px] ml-[0.72%] mt-[6.63px] relative row-1 w-[24.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.14029 5.3268">
        <g id="Group">
          <path d={svgPaths.pa50fe70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group125() {
  return (
    <div className="col-1 h-[1.939px] ml-0 mt-[11.96px] relative row-1 w-[99.98%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7079 1.93863">
        <g id="Group">
          <path d={svgPaths.p34a6780} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group112() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-[74.04px] place-items-start relative row-1 w-[37.74%]" data-name="Group">
      <Group113 />
      <Group114 />
      <Group116 />
      <Group118 />
      <Group120 />
      <Group122 />
      <Group124 />
      <Group125 />
    </div>
  );
}

function Group126() {
  return (
    <div className="col-1 h-[67.104px] ml-[7.29%] mt-0 relative row-1 w-[92.71%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70.5432 67.1043">
        <g id="Group">
          <path d={svgPaths.p1bdb7880} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group128() {
  return (
    <div className="col-1 h-[39.089px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.2173 39.0887">
        <g id="Group">
          <path d={svgPaths.paa9fe40} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group127() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[29.15%] mt-[21.85px] place-items-start relative row-1 w-[69.94%]" data-name="Group">
      <Group128 />
    </div>
  );
}

function Group130() {
  return (
    <div className="col-1 h-[13.575px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4269 13.575">
        <g id="Group">
          <path d={svgPaths.pfc3780} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group129() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[75.58%] mt-[9.59px] place-items-start relative row-1 w-[20.27%]" data-name="Group">
      <Group130 />
    </div>
  );
}

function Group132() {
  return (
    <div className="col-1 h-[28.739px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.48571 28.739">
        <g id="Group">
          <path d={svgPaths.pcfa4580} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group131() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[5.12%] mt-[1.99px] place-items-start relative row-1 w-[5.89%]" data-name="Group">
      <Group132 />
    </div>
  );
}

function Group110() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[41.26%] mt-[76.09px] place-items-start relative row-1 w-[45.49%]" data-name="Group">
      <Group111 />
      <Group112 />
      <Group126 />
      <Group127 />
      <Group129 />
      <Group131 />
    </div>
  );
}

function Group134() {
  return (
    <div className="col-1 h-[8.673px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0785 8.67313">
        <g id="Group">
          <path d={svgPaths.p2135e0f0} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group133() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[15.9%] mt-[136.28px] place-items-start relative row-1 w-[7.22%]" data-name="Group">
      <Group134 />
    </div>
  );
}

function Group136() {
  return (
    <div className="col-1 h-[1.883px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0899 1.883">
        <g id="Group">
          <path d={svgPaths.p212cf700} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group135() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[48.73%] mt-[136.47px] place-items-start relative row-1 w-[9.02%]" data-name="Group">
      <Group136 />
    </div>
  );
}

function Group138() {
  return (
    <div className="col-1 h-[33.48px] ml-0 mt-[13.52px] relative row-1 w-[97.28%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0368 33.48">
        <g id="Group">
          <path d={svgPaths.p3207ccf0} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group140() {
  return (
    <div className="col-1 h-[1.84px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.24901 1.84013">
        <g id="Group">
          <path d={svgPaths.p36777300} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group139() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[61.36%] mt-[35.57px] place-items-start relative row-1 w-[10.59%]" data-name="Group">
      <Group140 />
    </div>
  );
}

function Group142() {
  return (
    <div className="col-1 h-[1.526px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.05699 1.52554">
        <g id="Group">
          <path d={svgPaths.p42b1000} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group141() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[64.73%] mt-[34.87px] place-items-start relative row-1 w-[10.11%]" data-name="Group">
      <Group142 />
    </div>
  );
}

function Group144() {
  return (
    <div className="col-1 h-[21.584px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3801 21.5836">
        <g id="Group">
          <path d={svgPaths.p11e9c00} fill="var(--fill-0, #1574DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group143() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[56.69%] mt-0 place-items-start relative row-1 w-[43.31%]" data-name="Group">
      <Group144 />
    </div>
  );
}

function Group146() {
  return (
    <div className="col-1 h-[14.583px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.81958 14.583">
        <g id="Group">
          <path d={svgPaths.p158c6900} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group145() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[58.79%] mt-[6.36px] place-items-start relative row-1 w-[4.54%]" data-name="Group">
      <Group146 />
    </div>
  );
}

function Group137() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[61.37%] mt-[34.9px] place-items-start relative row-1 w-[23.99%]" data-name="Group">
      <Group138 />
      <Group139 />
      <Group141 />
      <Group143 />
      <Group145 />
    </div>
  );
}

function Group148() {
  return (
    <div className="col-1 h-[10.579px] ml-[6.64%] mt-[28.82px] relative row-1 w-[93.36%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.6583 10.5788">
        <g id="Group">
          <path d={svgPaths.p2c032080} fill="var(--fill-0, #3B3DBA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group150() {
  return (
    <div className="col-1 h-[34.439px] ml-[5.88%] mt-[0.21px] relative row-1 w-[94.12%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5416 34.4386">
        <g id="Group">
          <path d={svgPaths.p16281bf0} fill="var(--fill-0, #3B3DBA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group151() {
  return (
    <div className="col-1 h-[34.439px] ml-0 mt-0 relative row-1 w-[94.12%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5414 34.4387">
        <g id="Group">
          <path d={svgPaths.p11223cf0} fill="var(--fill-0, #3B3DBA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group152() {
  return (
    <div className="col-1 h-[7.783px] ml-[38.96%] mt-[15.28px] relative row-1 w-[15.4%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.79423 7.78283">
        <g id="Group">
          <path d={svgPaths.p658c100} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group154() {
  return (
    <div className="col-1 h-[27.201px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.68226 27.2006">
        <g id="Group">
          <path d={svgPaths.p21a1c680} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group153() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[84.26%] mt-[4.95px] place-items-start relative row-1 w-[10.61%]" data-name="Group">
      <Group154 />
    </div>
  );
}

function Group149() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-[71.47%]" data-name="Group">
      <Group150 />
      <Group151 />
      <Group152 />
      <Group153 />
    </div>
  );
}

function Group147() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[36.14%] mt-[44.3px] place-items-start relative row-1 w-[36.92%]" data-name="Group">
      <Group148 />
      <Group149 />
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <Group19 />
      <Group24 />
      <Group25 />
      <Group26 />
      <Group39 />
      <Group58 />
      <Group110 />
      <Group133 />
      <Group135 />
      <Group137 />
      <Group147 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[40.14%] mt-[152.85px] place-items-start relative row-1 w-[48.78%]" data-name="Clip path group">
      <Group18 />
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="Group">
      <ClipPathGroup />
      <ClipPathGroup1 />
    </div>
  );
}

function Objects2() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1 w-full" data-name="OBJECTS">
      <Group9 />
    </div>
  );
}

function Group156() {
  return (
    <div className="col-1 h-[51.337px] ml-0 mt-0 relative row-1 w-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.0334 51.337">
        <g id="Group">
          <path d={svgPaths.p37094f80} fill="var(--fill-0, #4356D6)" id="Vector" />
          <path d={svgPaths.p1572e600} fill="var(--fill-0, #4356D6)" id="Vector_2" />
          <path d={svgPaths.p33957800} fill="var(--fill-0, #B2C0FE)" id="Vector_3" />
          <path d={svgPaths.p13d9b580} fill="var(--fill-0, #B2C0FE)" id="Vector_4" />
          <path d={svgPaths.p102af300} fill="var(--fill-0, #B2C0FE)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group157() {
  return (
    <div className="col-1 h-[24.506px] ml-[23.36%] mt-[45.35px] relative row-1 w-[62.74%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.4305 24.5064">
        <g id="Group">
          <path d={svgPaths.p16f14c80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p31ab4200} fill="var(--fill-0, #4356D6)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group155() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-[9.02%] mt-[245.62px] place-items-start relative row-1 w-[19.25%]" data-name="Group">
      <Group156 />
      <Group157 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Objects2 />
      <Group155 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-[#4356d6] col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[36px_36px] ml-0 mt-0 relative row-1 size-[36px]" style={{ maskImage: `url('${imgRectangle1}')` }} />
    </div>
  );
}

function Frame24() {
  return (
    <div className="capitalize content-stretch flex flex-[1_0_0] flex-col gap-[11px] h-[137px] items-start min-w-px relative text-black">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold h-[32px] leading-[32px] relative shrink-0 text-[22px] w-[193px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Regulatory Clarity
      </p>
      <div className="font-['Roboto:Regular',sans-serif] font-normal h-[107px] leading-[0] min-w-full relative shrink-0 text-[18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px] mb-0">We decode complex compliance rules into simple, actionable steps.</p>
        <p className="leading-[32px]">​</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[26px] h-[137px] items-start relative shrink-0 w-full">
      <MaskGroup1 />
      <Frame24 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fafbff] h-[177px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e7ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Frame22 />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-[#4356d6] col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[36px_36px] ml-0 mt-0 relative row-1 size-[36px]" style={{ maskImage: `url('${imgRectangle3}')` }} />
    </div>
  );
}

function Frame25() {
  return (
    <div className="capitalize content-stretch flex flex-[1_0_0] flex-col gap-[11px] h-[164px] items-start min-w-px relative text-black">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold h-[61px] leading-[32px] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hassle-Free Filings Clarity
      </p>
      <div className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-h-px relative text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px] mb-0">From registration to ongoing reporting—we manage it end-to-end.</p>
        <p className="leading-[32px]">​</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[26px] items-start min-h-px relative w-full">
      <MaskGroup2 />
      <Frame25 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#fafbff] h-[204px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e7ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Frame23 />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-[#4356d6] col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[36px_36px] ml-0 mt-0 relative row-1 size-[36px]" style={{ maskImage: `url('${imgRectangle2}')` }} />
    </div>
  );
}

function Frame27() {
  return (
    <div className="capitalize content-stretch flex flex-[1_0_0] flex-col gap-[11px] items-start justify-center min-w-px relative text-black">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Risk Protection
      </p>
      <div className="font-['Roboto:Regular',sans-serif] font-normal h-[59px] leading-[0] min-w-full relative shrink-0 text-[18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px] mb-0">Stay ahead of audits, inspections, and compliance gaps with proactive support.</p>
        <p className="leading-[32px]">​</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[26px] h-[142px] items-start relative shrink-0 w-full">
      <MaskGroup3 />
      <Frame27 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#fafbff] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e7ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <Frame26 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <Frame16 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Group158() {
  return (
    <div className="absolute inset-[33.43%_75.22%_64.42%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.0001 21.1461">
        <g id="Group">
          <path d={svgPaths.p76a1c00} fill="var(--fill-0, #E2E2FF)" id="Vector" />
          <path d={svgPaths.p2fdbb900} fill="var(--fill-0, #E2E2FF)" id="Vector_2" />
          <path d={svgPaths.p34210480} fill="var(--fill-0, #E2E2FF)" id="Vector_3" />
          <path d={svgPaths.p3e1c1500} fill="var(--fill-0, #E2E2FF)" id="Vector_4" />
          <path d={svgPaths.p37ef4380} fill="var(--fill-0, #E2E2FF)" id="Vector_5" />
          <path d={svgPaths.p1e473500} fill="var(--fill-0, #E2E2FF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start justify-center relative shrink-0 w-full">
      <Group12 />
      <Frame17 />
      <Group158 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[36px] items-start px-[16px] relative size-full">
        <Frame15 />
        <Frame18 />
        <div className="absolute flex h-[97.228px] items-center justify-center left-[283px] top-[440px] w-[95.187px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-[53.41deg]">
            <div className="h-[63.833px] relative w-[73.703px]" data-name="path20605">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73.7032 63.8327">
                <path d={svgPaths.p2f121bc0} fill="var(--fill-0, #B2C0FE)" id="path20605" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[50px] items-start left-0 top-[55px] w-[375px]">
      <Frame9 />
      <Frame19 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[91px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 15">
        <g id="Frame 247">
          <path d={svgPaths.p2ea01100} fill="var(--fill-0, #FFAB00)" id="Vector" />
          <path d={svgPaths.p10157200} fill="var(--fill-0, #FFAB00)" id="Vector_2" />
          <path d={svgPaths.p119ae400} fill="var(--fill-0, #FFAB00)" id="Vector_3" />
          <path d={svgPaths.p279e5800} fill="var(--fill-0, #FFAB00)" id="Vector_4" />
          <path d={svgPaths.p1ba46440} fill="var(--fill-0, #FFAB00)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0">
      <Frame3 />
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[19px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Clients Rating
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute backdrop-blur-[45.5px] bg-[rgba(255,255,255,0.79)] content-stretch flex gap-[10px] items-center justify-center left-[181px] p-[6px] rounded-[10px] top-[861px]">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4356d6] text-[22px] whitespace-nowrap">4.8</p>
      <Frame4 />
    </div>
  );
}

export default function Mobile375Px() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-white relative size-full" data-name="Mobile 375px">
      <Frame7 onOpenMenu={() => setIsMenuOpen(true)} />
      <Group4 />
      <Frame31 />
      <div className="absolute flex h-[30.407px] items-center justify-center left-[67px] top-[166.43px] w-[185.153px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-176.44deg]">
          <div className="h-[19px] relative w-[184.329px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.329 19">
              <path d={svgPaths.p3ad8d080} fill="var(--fill-0, #4356D6)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Frame32 />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}