import { useState } from "react";
import { createPortal } from "react-dom";
import svgPaths from "./svg-ub4ajke14u";
import imgRectangle21 from "./c12498dd93673d586fd6ccbc0341c1dffb2ed61b.png";
import { imgVector } from "./svg-vdpu0";
import {
  Search, FileText, ShieldCheck,
  Menu, X, Home, Info, Sparkles, Tag, MessageCircleQuestion, User, Phone
} from "lucide-react";


function Group15() {
  return (
    <div className="flex flex-col items-center relative shrink-0 text-center w-full max-w-[650px] gap-2">
      <h1 className="capitalize font-['Roboto:Bold',sans-serif] font-bold m-0 relative text-black text-[54px] leading-[1.2]">
        <span>Simplifying </span>
        <span className="text-[#4356d6] relative inline-block">
          Compliance
          <div className="absolute -bottom-2 left-0 w-full h-[19px] pointer-events-none">
            <div className="flex-none rotate-[-176.44deg]">
              <div className="h-[19px] relative w-full" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 349 19">
                  <path d="M178.801 11.2523C238.699 8.55216 297.495 4.70814 338.387 0.0918884C341.342 -0.308714 346.039 0.65708 347.96 1.89253C349.872 3.12695 349.022 4.6129 346.434 4.87738C304.141 9.65201 241.852 12.9795 178.801 14.9649V11.2523ZM178.801 17.0036C242.956 15.0788 305.569 11.8025 347.119 7.34466C348.978 7.12728 348.811 5.98499 346.711 6.17184C306.039 10.7607 243.332 14.2372 178.801 16.3085V17.0036ZM10.2377 15.5503C55.7742 15.5632 117.86 13.9996 178.801 11.2523V14.9649C117.417 16.8975 55.3134 17.558 10.2377 17.0404C9.31155 17.029 9.20153 16.6579 9.20611 16.2873C9.21299 15.9183 9.33448 15.5503 10.2377 15.5503ZM178.801 16.3085C114.822 18.3623 49.0528 19.0341 1.19872 18.0367C-0.243202 18.0082 -0.48162 18.5165 1.01991 18.5455C48.7548 19.502 114.552 18.9306 178.801 17.0036V16.3085Z" fill="var(--fill-0, #4356D6)" id="Vector"></path>
                </svg>
              </div>
            </div>
          </div>
        </span>
        <br />
        <span>For Research Analysts</span>
      </h1>
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Check />
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black whitespace-nowrap text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Check1 />
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black whitespace-nowrap text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Check2 />
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black whitespace-nowrap text-left" style={{ fontVariationSettings: "'wdth' 100" }}>{`Tailored solutions for independent analysts & firms`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-fit mx-auto">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      {/* Get Started - Solid to Outline */}
      <button className="group bg-[#4356d6] hover:bg-white border-2 border-[#4356d6] content-stretch flex gap-[10px] h-[46px] items-center justify-center px-[22px] py-[14px] relative rounded-[8px] shrink-0 w-[213px] transition-all duration-300" data-name="Buttons">
        <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-white group-hover:text-[#4356d6] whitespace-nowrap transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>{`Get Started `}</p>
      </button>

      {/* Book a Consultation - Outline to Solid */}
      <button className="group bg-transparent hover:bg-[#4356d6] border-2 border-[#4356d6] content-stretch flex gap-[10px] h-[46px] items-center justify-center px-[22px] py-[14px] relative rounded-[8px] shrink-0 transition-all duration-300" data-name="Buttons">
        <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4356d6] group-hover:text-white text-[18px] whitespace-nowrap transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>{` Book a Consultation`}</p>
      </button>
    </div>
  );
}

function Frame8() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[26px] items-center ml-0 mt-0 relative row-1 w-full">
      <Group15 />
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black text-center w-[588px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stay focused on your insights—we’ll handle the compliance. Our expert solutions ensure your research practices meet every regulatory requirement with confidence and ease
      </p>
      <Frame13 />
      <Frame />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[440.559px] ml-0 mt-[23.05px] relative row-1 w-[636px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 636 440.559">
        <g id="Group">
          <path d={svgPaths.p2fe4bc00} fill="var(--fill-0, #E5E5FF)" id="Vector" />
          <path d={svgPaths.p1818d80} fill="var(--fill-0, #E5E5FF)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p32234700} fill="var(--fill-0, #E5E5FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 h-[102.636px] ml-[423.13px] mt-[359.99px] relative row-1 w-[120.173px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.173 102.636">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1a785900} fill="var(--fill-0, #E2E2FF)" id="Vector" />
            <path d={svgPaths.p1af12200} fill="var(--fill-0, #B7B7FF)" id="Vector_2" />
            <path d={svgPaths.p10132e00} fill="var(--fill-0, #B7B7FF)" id="Vector_3" />
            <path d={svgPaths.p1af90cf0} fill="var(--fill-0, #B7B7FF)" id="Vector_4" />
            <path d={svgPaths.p135a3300} fill="var(--fill-0, #B7B7FF)" id="Vector_5" />
          </g>
          <path d={svgPaths.pf750b00} fill="var(--fill-0, #B7B7FF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 h-[462.983px] ml-[151.74px] mt-0 relative row-1 w-[244.173px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244.173 462.983">
        <g id="Group">
          <path d={svgPaths.p4a75e00} fill="var(--fill-0, #1B1B43)" id="Vector" />
          <g id="Group_2">
            <g id="Group_3">
              <path d={svgPaths.p2c1eb200} fill="var(--fill-0, #FFBC96)" id="Vector_2" />
              <path d={svgPaths.p3032b9c0} fill="var(--fill-0, #1B1B43)" id="Vector_3" />
              <path d={svgPaths.pa0a9a00} fill="var(--fill-0, #656590)" id="Vector_4" />
              <path d={svgPaths.pd7df100} fill="var(--fill-0, #656590)" id="Vector_5" />
            </g>
            <g id="Group_4">
              <path d={svgPaths.p2ecb6e80} fill="var(--fill-0, #FFBC96)" id="Vector_6" />
              <path d={svgPaths.p9613500} fill="var(--fill-0, #1B1B43)" id="Vector_7" />
              <path d={svgPaths.p345b2000} fill="var(--fill-0, #656590)" id="Vector_8" />
              <path d={svgPaths.p3ef61c00} fill="var(--fill-0, #656590)" id="Vector_9" />
            </g>
            <path d={svgPaths.p38a80380} fill="var(--fill-0, #5254CF)" id="Vector_10" />
            <path d={svgPaths.p31c33880} fill="var(--fill-0, #5254CF)" id="Vector_11" />
            <path d={svgPaths.p1e641140} fill="var(--fill-0, #1B1B43)" id="Vector_12" opacity="0.6" />
            <path d={svgPaths.p3b1b6c00} fill="var(--fill-0, #1B1B43)" id="Vector_13" />
            <path d={svgPaths.p91bc500} fill="var(--fill-0, #1B1B43)" id="Vector_14" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p32b67a00} fill="var(--fill-0, #FFBC96)" id="Vector_15" />
            <path d={svgPaths.p311bf680} fill="var(--fill-0, #D28572)" id="Vector_16" />
            <path d={svgPaths.p3966d880} fill="var(--fill-0, #1B1B43)" id="Vector_17" />
            <path d={svgPaths.p3810e700} fill="var(--fill-0, #1B1B43)" id="Vector_18" />
            <path d={svgPaths.p34af8320} fill="var(--fill-0, #FFBC96)" id="Vector_19" />
            <g id="Group_6">
              <path d={svgPaths.p80e6d00} fill="var(--fill-0, white)" id="Vector_20" />
              <path d={svgPaths.p3461b680} fill="var(--fill-0, #5254CF)" id="Vector_21" />
            </g>
            <path d={svgPaths.p334e0800} fill="var(--fill-0, #FFBC96)" id="Vector_22" />
            <g id="Group_7">
              <path d={svgPaths.p3bbc9b00} fill="var(--fill-0, #5254CF)" id="Vector_23" />
              <path d={svgPaths.p33259400} fill="var(--fill-0, #5254CF)" id="Vector_24" />
              <path d={svgPaths.pfa29380} fill="var(--fill-0, #5254CF)" id="Vector_25" />
              <path d={svgPaths.p2ed0bc00} fill="var(--fill-0, #5254CF)" id="Vector_26" />
            </g>
            <path d={svgPaths.p3b1e9cf2} fill="var(--fill-0, #D28572)" id="Vector_27" />
            <g id="Group_8">
              <path d={svgPaths.p2690d900} fill="var(--fill-0, #D28572)" id="Vector_28" />
              <path d={svgPaths.p13ceca0} fill="var(--fill-0, #D28572)" id="Vector_29" />
              <path d={svgPaths.p4e6d100} fill="var(--fill-0, #D28572)" id="Vector_30" />
              <path d={svgPaths.p2f262480} fill="var(--fill-0, #D28572)" id="Vector_31" />
            </g>
            <path d={svgPaths.pec11700} fill="var(--fill-0, #D28572)" id="Vector_32" />
            <path d={svgPaths.p15eb4580} fill="var(--fill-0, #FE5B52)" id="Vector_33" opacity="0.4" />
            <path d={svgPaths.p2c631200} fill="var(--fill-0, #FE5B52)" id="Vector_34" opacity="0.4" />
            <path d={svgPaths.p3afd9000} fill="var(--fill-0, #D28572)" id="Vector_35" />
            <path d={svgPaths.p26feed80} fill="var(--fill-0, #D28572)" id="Vector_36" />
            <path d={svgPaths.p3b19ea80} fill="var(--fill-0, #D28572)" id="Vector_37" />
          </g>
          <g id="Group_9">
            <path d={svgPaths.p25805600} fill="var(--fill-0, #FFBC96)" id="Vector_38" />
            <path d={svgPaths.p246a6980} fill="var(--fill-0, #D28572)" id="Vector_39" />
            <path d={svgPaths.p3c3043f0} fill="var(--fill-0, #FFBC96)" id="Vector_40" />
            <path d={svgPaths.p6df4d80} fill="var(--fill-0, #1B1B43)" id="Vector_41" />
            <path d={svgPaths.p26716c00} fill="var(--fill-0, #FFBC96)" id="Vector_42" />
            <path d={svgPaths.p3e35000} fill="var(--fill-0, #1B1B43)" id="Vector_43" />
            <g id="Group_10">
              <path d={svgPaths.p1e953a80} fill="var(--fill-0, #1B1B43)" id="Vector_44" />
              <path d={svgPaths.p31e86ec0} fill="var(--fill-0, #1B1B43)" id="Vector_45" />
              <path d={svgPaths.p1d4c0200} fill="var(--fill-0, #1B1B43)" id="Vector_46" />
              <path d={svgPaths.p2849780} fill="var(--fill-0, #1B1B43)" id="Vector_47" />
              <path d={svgPaths.p1b981570} fill="var(--fill-0, #1B1B43)" id="Vector_48" />
              <g id="Group_11">
                <path d={svgPaths.p64e4b80} fill="var(--fill-0, #1B1B43)" id="Vector_49" />
                <path d={svgPaths.p2d06a600} fill="var(--fill-0, white)" id="Vector_50" />
              </g>
              <path d={svgPaths.pbbd6f80} fill="var(--fill-0, #FE5B52)" id="Vector_51" opacity="0.4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Objects() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[58.69px] place-items-start relative row-1" data-name="OBJECTS">
      <Group />
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 h-[29.398px] ml-[1.84px] mt-0 relative row-1 w-[118.172px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.172 29.3985">
        <g id="Group">
          <path d={svgPaths.p2f8b9c00} fill="var(--fill-0, #E2E2FF)" id="Vector" />
          <path d={svgPaths.p6235f10} fill="var(--fill-0, #E2E2FF)" id="Vector_2" />
          <path d={svgPaths.p28724f00} fill="var(--fill-0, #E2E2FF)" id="Vector_3" />
          <path d={svgPaths.p22d8c980} fill="var(--fill-0, #E2E2FF)" id="Vector_4" />
          <path d={svgPaths.p16a91100} fill="var(--fill-0, #E2E2FF)" id="Vector_5" />
          <path d={svgPaths.p1febb300} fill="var(--fill-0, #E2E2FF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function BannerImage() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Banner Image">
      <Objects />
      <Group4 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-[#5254cf] col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[80px_80px] ml-0 mt-0 relative row-1 size-[80px]" style={{ maskImage: `url('${imgRectangle21}')` }} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-px items-start leading-[normal] relative shrink-0 w-[123px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[20px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trusted by
      </p>
      <p className="font-['Roboto:ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#4356d6] text-[40px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        250+
      </p>
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[20px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Professionals
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[20px] h-[104px] items-center justify-center ml-0 mt-[100.93px] px-[20px] py-[30px] relative rounded-[10px] row-1">
      <MaskGroup />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[16.353px] relative shrink-0 w-[101.613px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.613 16.3533">
        <g id="Frame 247">
          <path d={svgPaths.p2e56c230} fill="var(--fill-0, #FFAB00)" id="Vector" />
          <path d={svgPaths.p38cbfc00} fill="var(--fill-0, #FFAB00)" id="Vector_2" />
          <path d={svgPaths.p2bce9900} fill="var(--fill-0, #FFAB00)" id="Vector_3" />
          <path d={svgPaths.p2ec80940} fill="var(--fill-0, #FFAB00)" id="Vector_4" />
          <path d={svgPaths.p224d8f80} fill="var(--fill-0, #FFAB00)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0">
      <Frame6 />
      <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Clients Rating
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="backdrop-blur-[45.5px] bg-[rgba(255,255,255,0.79)] col-1 content-stretch flex gap-[20px] h-[90.349px] items-center justify-center ml-[263.16px] mt-0 px-[15px] py-[20px] relative rounded-[10px] row-1">
      <p className="capitalize font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#4356d6] text-[40px] whitespace-nowrap">4.8</p>
      <Frame7 />
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45px] mt-[203.07px] place-items-start relative row-1">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Group21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BannerImage />
      <Group13 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-center leading-[0] left-1/2 top-[149px] w-full max-w-[700px]">
      <Group11 />
      <Group21 />
    </div>
  );
}

function HeroSection1() {
  return (
    <div className="bg-[#fafbff] h-[1328px] overflow-clip relative shrink-0 w-full" data-name="HeroSection2">
      <div className="absolute left-[-368px] size-[974px] top-[212px]">
        <div className="absolute inset-[-25.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1474 1474">
            <g filter="url(#filter0_f_1_2230)" id="Ellipse 8">
              <circle cx="737" cy="737" fill="var(--fill-0, #F5F6FA)" r="487" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1474" id="filter0_f_1_2230" width="1474" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_2230" stdDeviation="125" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame26 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 h-[49.999px] ml-0 mt-0 relative row-1 w-[45.709px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.7095 49.9992">
        <g id="Group">
          <path d={svgPaths.p2b8be980} fill="url(#paint0_linear_1_2117)" id="Vector" />
          <path d={svgPaths.p9b3d700} fill="url(#paint1_linear_1_2117)" id="Vector_2" />
          <path d={svgPaths.p11724b80} fill="var(--fill-0, #4356D6)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2117" x1="32.428" x2="31.9597" y1="18.2318" y2="43.1316">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2117" x1="38.5617" x2="33.5817" y1="42.2365" y2="60.6757">
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

function Group7() {
  return (
    <div className="col-1 h-[24.226px] ml-[5.6px] mt-[8.68px] relative row-1 w-[27.312px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3122 24.2266">
        <g id="Group">
          <path d={svgPaths.p32282e80} fill="url(#paint0_linear_1_2069)" id="Vector" />
          <path d={svgPaths.p109ef200} fill="var(--fill-0, #4356D6)" id="Vector_2" />
          <path d={svgPaths.p101703c0} fill="url(#paint1_linear_1_2069)" id="Vector_3" />
          <path d={svgPaths.p9202900} fill="url(#paint2_linear_1_2069)" id="Vector_4" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2069" x1="8.8024" x2="10.6389" y1="-1.25125" y2="41.9059">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2069" x1="23.9161" x2="26.0404" y1="-6.23341" y2="43.688">
            <stop stopColor="#2945A8" />
            <stop offset="0.1945" stopColor="#25409B" />
            <stop offset="0.5538" stopColor="#1B3179" />
            <stop offset="0.9534" stopColor="#0D1E4C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2069" x1="1.78943" x2="3.73582" y1="-2.68884" y2="43.0512">
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

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group6 />
      <Group7 />
    </div>
  );
}

function Objects1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="OBJECTS">
      <Group5 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] h-[58px] items-center relative shrink-0">
      <Objects1 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[43px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    { icon: Sparkles, label: "Our Services" },
    { icon: Tag, label: "Pricing" },
    { icon: MessageCircleQuestion, label: "FAQ" },
    { icon: User, label: "Contact" },
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end overflow-hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto h-screen w-[85%] bg-white shadow-2xl flex flex-col p-6 overflow-y-auto z-[3001]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Objects1 />
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

function Frame9({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      className="content-stretch flex items-center justify-center relative shrink-0 size-[44px] hover:opacity-70 transition-opacity cursor-pointer z-[100] bg-transparent"
      aria-label="Open Menu"
    >
      <Menu className="size-8 text-black" />
    </button>
  );
}

function Frame27({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0">
      <button className="group bg-[#4356d6] hover:bg-white border-2 border-[#4356d6] content-stretch flex gap-[10px] h-[46px] items-center justify-center px-[22px] py-[14px] relative rounded-[8px] shrink-0 cursor-pointer transition-all duration-300" data-name="Buttons">
        <Phone className="size-[22px] text-white group-hover:text-[#4356d6] transition-colors duration-300" />
        <p className="capitalize font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-white group-hover:text-[#4356d6] whitespace-nowrap transition-colors duration-300" style={{ fontVariationSettings: "'wdth' 100" }}>
          Contact us
        </p>
      </button>
      <Frame9 onOpen={onOpenMenu} />
    </div>
  );
}

function Frame1({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <div className="content-stretch flex justify-between h-[100px] items-center px-[20px] relative shrink-0 w-full">
      <Frame14 />
      <Frame27 onOpenMenu={onOpenMenu} />
    </div>
  );
}

function Frame2({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[100px] items-start left-0 top-0 w-[768px] z-[999] pointer-events-auto">
      <Frame1 onOpenMenu={onOpenMenu} />
    </div>
  );
}

function HeroSection({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[1328px] items-start left-0 top-0 w-[768px]" data-name="Hero Section1">
      <HeroSection1 />
      <Frame2 onOpenMenu={onOpenMenu} />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="capitalize flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center w-[603.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="text-[46px]">
          <span className="leading-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Why `}</span>
          <span className="leading-[60px] text-[#4356d6]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Compliance Matters `}</span>
          <span className="leading-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            for Research Analysts
          </span>
        </p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="capitalize font-['Roboto:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[18px] text-black text-center w-[603.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        In today’s regulatory environment, even a small oversight can lead to penalties, reputational risks, and loss of client trust. We help Research Analysts and firms navigate complex compliance requirements so they can focus on delivering high-quality research without worry.
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-center relative shrink-0 w-full max-w-[603.5px]">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[12.08px] mt-0 place-items-start relative row-1" data-name="Group">
      <div className="col-1 h-[281.099px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-114.076px_-79.604px] mask-size-[594px_594px] ml-0 mt-0 relative row-1 w-[377.928px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377.928 281.099">
          <path d={svgPaths.p2ef29f80} fill="var(--fill-0, #FCFBFF)" id="Vector" />
        </svg>
      </div>
      <p className="col-1 font-['Poppins:SemiBold',sans-serif] h-[27.324px] leading-[normal] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-242.722px_-144.777px] mask-size-[594px_594px] ml-[128.65px] mt-[65.17px] not-italic relative row-1 text-[#3b3dba] text-[15.255px] w-[71.28px]" style={{ maskImage: `url('${imgVector}')` }}>
        50 / 100
      </p>
      <div className="col-1 h-[281.099px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-114.076px_-79.604px] mask-size-[594px_594px] ml-0 mt-0 relative row-1 w-[377.928px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <div className="col-1 h-[281.099px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-101.995px_-86.854px] mask-size-[594px_594px] ml-0 mt-[7.25px] relative row-1 w-[377.928px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377.928 281.099">
          <path d={svgPaths.p332ab500} fill="var(--fill-0, #1574DD)" id="Vector" />
        </svg>
      </div>
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 h-[198.967px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-143.206px_-108.803px] mask-size-[594px_594px] ml-[41.21px] mt-[29.2px] relative row-1 w-[301.751px]" style={{ maskImage: `url('${imgVector}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301.751 198.967">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p31176980} fill="var(--fill-0, #3B3DBA)" id="Vector" />
            <path d={svgPaths.p2f981400} fill="var(--fill-0, #3B3DBA)" id="Vector_2" />
            <path d={svgPaths.p4f93a80} fill="var(--fill-0, #1574DD)" id="Vector_3" />
            <path d="M301.751 155.374H88.3431" id="Vector_4" stroke="var(--stroke-0, #1574DD)" strokeMiterlimit="10" strokeWidth="0.75" />
          </g>
          <path d={svgPaths.p3c8eb400} fill="var(--fill-0, #1574DD)" id="Vector_5" />
          <path d={svgPaths.p1779480} fill="var(--fill-0, #3B3DBA)" id="Vector_6" />
          <path d={svgPaths.p14754f00} fill="var(--fill-0, #1574DD)" id="Vector_7" />
          <path d={svgPaths.p304ed480} fill="var(--fill-0, #3B3DBA)" id="Vector_8" />
          <path d={svgPaths.p1fdb2e00} fill="var(--fill-0, #3B3DBA)" id="Vector_9" />
          <path d={svgPaths.p8e6b700} fill="var(--fill-0, #1574DD)" id="Vector_10" />
          <path d={svgPaths.p3d8af180} fill="var(--fill-0, #3B3DBA)" id="Vector_11" />
          <path d={svgPaths.p1966a300} fill="var(--fill-0, #3B3DBA)" id="Vector_12" />
          <path d={svgPaths.p22cb8500} fill="var(--fill-0, #1574DD)" id="Vector_13" />
          <path d={svgPaths.p376dc500} fill="var(--fill-0, #3B3DBA)" id="Vector_14" />
          <path d={svgPaths.pe163480} fill="var(--fill-0, #3B3DBA)" id="Vector_15" />
          <path d={svgPaths.p14ed1800} fill="var(--fill-0, #3B3DBA)" id="Vector_16" />
          <path d={svgPaths.p2e9c45c0} fill="var(--fill-0, #3B3DBA)" id="Vector_17" />
          <path d={svgPaths.p38371c50} fill="var(--fill-0, #3B3DBA)" id="Vector_18" />
          <path d={svgPaths.p2ea87600} fill="var(--fill-0, #3B3DBA)" id="Vector_19" />
          <path d={svgPaths.p12d4f800} fill="var(--fill-0, #3B3DBA)" id="Vector_20" />
          <path d={svgPaths.p190d6cf2} fill="var(--fill-0, #3B3DBA)" id="Vector_21" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group14 />
      <Group17 />
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[101.99px] mt-[79.6px] place-items-start relative row-1" data-name="Group">
      <Group10 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 h-[158.409px] ml-0 mt-0 relative row-1 w-[200.016px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200.016 158.409">
        <g id="Group">
          <path d={svgPaths.p1fe0f400} fill="var(--fill-0, #999997)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="col-1 h-[131.169px] ml-0 mt-0 relative row-1 w-[23.377px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3773 131.169">
        <g id="Group">
          <path d={svgPaths.p380bbf00} fill="var(--fill-0, #4B4B4B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[161.79px] mt-[22.96px] place-items-start relative row-1" data-name="Group">
      <Group24 />
    </div>
  );
}

function Group25() {
  return (
    <div className="col-1 h-[63.194px] ml-[58.78px] mt-[14.82px] relative row-1 w-[110.443px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.443 63.1936">
        <g id="Group">
          <path d={svgPaths.p19d82880} fill="var(--fill-0, #4B4B4B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[89.69px] mt-[125.22px] place-items-start relative row-1" data-name="Group">
      <Group20 />
      <Group23 />
      <Group25 />
    </div>
  );
}

function Group26() {
  return (
    <div className="col-1 h-[113.918px] ml-[181.09px] mt-[3.46px] relative row-1 w-[71.558px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.5575 113.918">
        <g id="Group">
          <path d={svgPaths.p28c6f880} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="col-1 h-[20.403px] ml-[210.26px] mt-0 relative row-1 w-[21.617px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6169 20.4029">
        <g id="Group">
          <path d={svgPaths.p38951900} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="col-1 h-[114.883px] ml-[4.1px] mt-0 relative row-1 w-[75.092px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.092 114.883">
        <g id="Group">
          <path d={svgPaths.p24abcf0} fill="var(--fill-0, #1574DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="col-1 h-[31.745px] ml-0 mt-[16.62px] relative row-1 w-[15.138px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1383 31.7446">
        <g id="Group">
          <path d={svgPaths.pa2fda00} fill="var(--fill-0, #1574DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="col-1 h-[16.134px] ml-0 mt-0 relative row-1 w-[50.679px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.6794 16.1344">
        <g id="Group">
          <path d={svgPaths.p3fe38d00} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11.2px] mt-[86.52px] place-items-start relative row-1" data-name="Group">
      <Group32 />
    </div>
  );
}

function Group34() {
  return (
    <div className="col-1 h-[6.246px] ml-0 mt-0 relative row-1 w-[44.67px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.67 6.24579">
        <g id="Group">
          <path d={svgPaths.pd2ab300} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.53px] mt-[26.45px] place-items-start relative row-1" data-name="Group">
      <Group34 />
    </div>
  );
}

function Group36() {
  return (
    <div className="col-1 h-[3.865px] ml-0 mt-0 relative row-1 w-[36.825px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8251 3.86486">
        <g id="Group">
          <path d={svgPaths.p3d17800} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[17px] mt-[58.52px] place-items-start relative row-1" data-name="Group">
      <Group36 />
    </div>
  );
}

function Group38() {
  return (
    <div className="col-1 h-[82.514px] ml-0 mt-0 relative row-1 w-[17.501px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5008 82.5136">
        <g id="Group">
          <path d={svgPaths.p2cd5c8f2} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group37() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[56.87px] mt-[25.04px] place-items-start relative row-1" data-name="Group">
      <Group38 />
    </div>
  );
}

function Group40() {
  return (
    <div className="col-1 h-[15.713px] ml-0 mt-0 relative row-1 w-[31.241px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2409 15.7129">
        <g id="Group">
          <path d={svgPaths.p20db700} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[28.66px] mt-[0.91px] place-items-start relative row-1" data-name="Group">
      <Group40 />
    </div>
  );
}

function Group28() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[163.69px] mt-[56.84px] place-items-start relative row-1" data-name="Group">
      <Group29 />
      <Group30 />
      <Group31 />
      <Group33 />
      <Group35 />
      <Group37 />
      <Group39 />
    </div>
  );
}

function Group42() {
  return (
    <div className="col-1 h-[25.573px] ml-[37.54px] mt-[108.22px] relative row-1 w-[28.12px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.12 25.5729">
        <g id="Group">
          <path d={svgPaths.p26a9d700} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="col-1 h-[33.056px] ml-0 mt-0 relative row-1 w-[52.11px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.1101 33.056">
        <g id="Group">
          <path d={svgPaths.p143d1200} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group46() {
  return (
    <div className="col-1 h-[5.578px] ml-0 mt-0 relative row-1 w-[17.869px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8693 5.57799">
        <g id="Group">
          <path d={svgPaths.pe962670} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[31.89px] mt-[18.85px] place-items-start relative row-1" data-name="Group">
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="col-1 h-[3.982px] ml-0 mt-0 relative row-1 w-[2.644px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.64449 3.98221">
        <g id="Group">
          <path d={svgPaths.p1e1e6280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group47() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[28.1px] mt-[5.37px] place-items-start relative row-1" data-name="Group">
      <Group48 />
    </div>
  );
}

function Group50() {
  return (
    <div className="col-1 h-[3.982px] ml-0 mt-0 relative row-1 w-[2.645px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.64451 3.98183">
        <g id="Group">
          <path d={svgPaths.p10956f80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group49() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[26.11px] mt-[5.21px] place-items-start relative row-1" data-name="Group">
      <Group50 />
    </div>
  );
}

function Group52() {
  return (
    <div className="col-1 h-[3.982px] ml-0 mt-0 relative row-1 w-[2.645px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.64451 3.98217">
        <g id="Group">
          <path d={svgPaths.p3207bf00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group51() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.64px] mt-[4.76px] place-items-start relative row-1" data-name="Group">
      <Group52 />
    </div>
  );
}

function Group54() {
  return (
    <div className="col-1 h-[3.982px] ml-0 mt-0 relative row-1 w-[2.644px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.64449 3.98177">
        <g id="Group">
          <path d={svgPaths.p33539300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[21.06px] mt-[3.6px] place-items-start relative row-1" data-name="Group">
      <Group54 />
    </div>
  );
}

function Group55() {
  return (
    <div className="col-1 h-[9.484px] ml-[2.14px] mt-0 relative row-1 w-[13.954px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9538 9.48366">
        <g id="Group">
          <path d={svgPaths.p12f2d6f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="col-1 h-[30.043px] ml-0 mt-[3.01px] relative row-1 w-[43.255px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.2551 30.0433">
        <g id="Group">
          <path d={svgPaths.p15a1d8a0} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[118.74px] place-items-start relative row-1" data-name="Group">
      <Group44 />
      <Group45 />
      <Group47 />
      <Group49 />
      <Group51 />
      <Group53 />
      <Group55 />
      <Group56 />
    </div>
  );
}

function Group57() {
  return (
    <div className="col-1 h-[124.327px] ml-[42.97px] mt-0 relative row-1 w-[175.444px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175.444 124.327">
        <g id="Group">
          <path d={svgPaths.p367f7200} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="col-1 h-[70.531px] ml-0 mt-0 relative row-1 w-[66.4px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.3997 70.5307">
        <g id="Group">
          <path d={svgPaths.p36f08300} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[61.57px] mt-[45.37px] place-items-start relative row-1" data-name="Group">
      <Group59 />
    </div>
  );
}

function Group41() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[131.78px] place-items-start relative row-1" data-name="Group">
      <Group42 />
      <Group43 />
      <Group57 />
      <Group58 />
    </div>
  );
}

function Group63() {
  return (
    <div className="col-1 h-[28.986px] ml-0 mt-0 relative row-1 w-[19.968px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9679 28.9861">
        <g id="Group">
          <path d={svgPaths.p594bff0} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group62() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group63 />
    </div>
  );
}

function Group65() {
  return (
    <div className="col-1 h-[12.674px] ml-0 mt-0 relative row-1 w-[12.445px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4455 12.674">
        <g id="Group">
          <path d={svgPaths.p23c1a7f0} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group64() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.73px] mt-[7.86px] place-items-start relative row-1" data-name="Group">
      <Group65 />
    </div>
  );
}

function Group61() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.5px] mt-[26.77px] place-items-start relative row-1" data-name="Group">
      <Group62 />
      <Group64 />
    </div>
  );
}

function Group67() {
  return (
    <div className="col-1 h-[38.622px] ml-0 mt-0 relative row-1 w-[32.765px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7651 38.6219">
        <g id="Group">
          <path d={svgPaths.p23507100} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group66() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.2px] mt-[3.05px] place-items-start relative row-1" data-name="Group">
      <Group67 />
    </div>
  );
}

function Group69() {
  return (
    <div className="col-1 h-[3.407px] ml-0 mt-0 relative row-1 w-[6.508px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5078 3.40744">
        <g id="Group">
          <path d={svgPaths.p1653dc00} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group68() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.27px] mt-[29.61px] place-items-start relative row-1" data-name="Group">
      <Group69 />
    </div>
  );
}

function Group71() {
  return (
    <div className="col-1 h-[2.432px] ml-0 mt-0 relative row-1 w-[1.824px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82427 2.43215">
        <g id="Group">
          <path d={svgPaths.p4b32e00} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group70() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.52px] mt-[22.84px] place-items-start relative row-1" data-name="Group">
      <Group71 />
    </div>
  );
}

function Group73() {
  return (
    <div className="col-1 h-[2.432px] ml-0 mt-0 relative row-1 w-[1.824px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.82421 2.43215">
        <g id="Group">
          <path d={svgPaths.p32262500} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group72() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.11px] mt-[21.99px] place-items-start relative row-1" data-name="Group">
      <Group73 />
    </div>
  );
}

function Group74() {
  return (
    <div className="col-1 h-[23.527px] ml-0 mt-0 relative row-1 w-[37.958px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.9578 23.5269">
        <g id="Group">
          <path d={svgPaths.p3643c600} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group77() {
  return (
    <div className="col-1 h-[1.389px] ml-0 mt-0 relative row-1 w-[3.217px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.21747 1.38931">
        <g id="Group">
          <path d={svgPaths.p298b4b00} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group77 />
    </div>
  );
}

function Group75() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11.73px] mt-[35.02px] place-items-start relative row-1" data-name="Group">
      <Group76 />
    </div>
  );
}

function Group79() {
  return (
    <div className="col-1 h-[2.576px] ml-0 mt-0 relative row-1 w-[4.931px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93112 2.57579">
        <g id="Group">
          <path d={svgPaths.p8fa2100} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group78() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[17.57px] mt-[24.09px] place-items-start relative row-1" data-name="Group">
      <Group79 />
    </div>
  );
}

function Group81() {
  return (
    <div className="col-1 h-[2.573px] ml-0 mt-0 relative row-1 w-[4.094px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.09368 2.5735">
        <g id="Group">
          <path d={svgPaths.p39127e00} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group80() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.34px] mt-[25.33px] place-items-start relative row-1" data-name="Group">
      <Group81 />
    </div>
  );
}

function Group84() {
  return (
    <div className="col-1 h-[3.248px] ml-0 mt-0 relative row-1 w-[5.44px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.44046 3.24804">
        <g id="Group">
          <path d={svgPaths.p2b4f8300} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group83() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group84 />
    </div>
  );
}

function Group82() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.99px] mt-[16.45px] place-items-start relative row-1" data-name="Group">
      <Group83 />
    </div>
  );
}

function Group87() {
  return (
    <div className="col-1 h-[3.808px] ml-0 mt-0 relative row-1 w-[5.045px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.04498 3.80805">
        <g id="Group">
          <path d={svgPaths.p2f532800} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group87 />
    </div>
  );
}

function Group85() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.89px] mt-[16.48px] place-items-start relative row-1" data-name="Group">
      <Group86 />
    </div>
  );
}

function Group91() {
  return (
    <div className="col-1 h-[13.028px] ml-0 mt-0 relative row-1 w-[10.388px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3881 13.0276">
        <g id="Group">
          <path d={svgPaths.pfb89780} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group90() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group91 />
    </div>
  );
}

function Group89() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group90 />
    </div>
  );
}

function Group93() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[8.562px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.56184 8.56184">
        <g id="Group">
          <path d={svgPaths.p53cc280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group92() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.19px] mt-[10.64px] place-items-start relative row-1" data-name="Group">
      <Group93 />
    </div>
  );
}

function Group97() {
  return (
    <div className="col-1 h-[7.304px] ml-0 mt-0 relative row-1 w-[4.32px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.32047 7.30449">
        <g id="Group">
          <path d={svgPaths.p17636800} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group96() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group97 />
    </div>
  );
}

function Group95() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group96 />
    </div>
  );
}

function Group94() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.77px] mt-[2.45px] place-items-start relative row-1" data-name="Group">
      <Group95 />
    </div>
  );
}

function Group88() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.08px] mt-[17.28px] place-items-start relative row-1" data-name="Group">
      <Group89 />
      <Group92 />
      <Group94 />
    </div>
  );
}

function Group100() {
  return (
    <div className="col-1 h-[10.237px] ml-0 mt-0 relative row-1 w-[8.919px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.9195 10.2371">
        <g id="Group">
          <path d={svgPaths.p10fc6200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group99() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.21px] mt-[0.07px] place-items-start relative row-1" data-name="Group">
      <Group100 />
    </div>
  );
}

function Group102() {
  return (
    <div className="col-1 h-[10.237px] ml-0 mt-0 relative row-1 w-[8.92px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.91954 10.2371">
        <g id="Group">
          <path d={svgPaths.p11f53800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group101() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[1.27px] place-items-start relative row-1" data-name="Group">
      <Group102 />
    </div>
  );
}

function Group105() {
  return (
    <div className="col-1 h-[4.961px] ml-0 mt-0 relative row-1 w-[2.581px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58068 4.96102">
        <g id="Group">
          <path d={svgPaths.p1384f5e0} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group104() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group105 />
    </div>
  );
}

function Group103() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[7.62px] mt-[4.87px] place-items-start relative row-1" data-name="Group">
      <Group104 />
    </div>
  );
}

function Group108() {
  return (
    <div className="col-1 h-[1.084px] ml-0 mt-0 relative row-1 w-[2.357px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.35731 1.08416">
        <g id="Group">
          <path d={svgPaths.pa5c3f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group107() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group108 />
    </div>
  );
}

function Group106() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[8.32px] mt-[4.31px] place-items-start relative row-1" data-name="Group">
      <Group107 />
    </div>
  );
}

function Group111() {
  return (
    <div className="col-1 h-[3.758px] ml-0 mt-0 relative row-1 w-[6.826px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.8257 3.75807">
        <g id="Group">
          <path d={svgPaths.p3301ed00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group110() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group111 />
    </div>
  );
}

function Group109() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[18.4px] mt-0 place-items-start relative row-1" data-name="Group">
      <Group110 />
    </div>
  );
}

function Group98() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.55px] mt-[18.05px] place-items-start relative row-1" data-name="Group">
      <Group99 />
      <Group101 />
      <Group103 />
      <Group106 />
      <Group109 />
    </div>
  );
}

function Group60() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[182.38px] mt-[9.36px] place-items-start relative row-1" data-name="Group">
      <Group61 />
      <Group66 />
      <Group68 />
      <Group70 />
      <Group72 />
      <Group74 />
      <Group75 />
      <Group78 />
      <Group80 />
      <Group82 />
      <Group85 />
      <Group88 />
      <Group98 />
    </div>
  );
}

function Group113() {
  return (
    <div className="col-1 h-[28.895px] ml-[27.53px] mt-[106.16px] relative row-1 w-[16.371px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3706 28.895">
        <g id="Group">
          <path d={svgPaths.p7fb6600} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group115() {
  return (
    <div className="col-1 h-[24.065px] ml-0 mt-0 relative row-1 w-[49.727px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.7273 24.065">
        <g id="Group">
          <path d={svgPaths.p3f819b00} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group117() {
  return (
    <div className="col-1 h-[13.876px] ml-0 mt-0 relative row-1 w-[12.742px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7421 13.8765">
        <g id="Group">
          <path d={svgPaths.p15d12000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group116() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[36.57px] mt-[7.99px] place-items-start relative row-1" data-name="Group">
      <Group117 />
    </div>
  );
}

function Group119() {
  return (
    <div className="col-1 h-[2.581px] ml-0 mt-0 relative row-1 w-[4.063px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.06269 2.58059">
        <g id="Group">
          <path d={svgPaths.p1230ed00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group118() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[23.47px] mt-[7.94px] place-items-start relative row-1" data-name="Group">
      <Group119 />
    </div>
  );
}

function Group121() {
  return (
    <div className="col-1 h-[2.581px] ml-0 mt-0 relative row-1 w-[4.063px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.06271 2.58055">
        <g id="Group">
          <path d={svgPaths.p2a9c8f80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group120() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[21.72px] mt-[8.9px] place-items-start relative row-1" data-name="Group">
      <Group121 />
    </div>
  );
}

function Group123() {
  return (
    <div className="col-1 h-[2.581px] ml-0 mt-0 relative row-1 w-[4.063px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.06271 2.58055">
        <g id="Group">
          <path d={svgPaths.p39758200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group122() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[19.41px] mt-[9.9px] place-items-start relative row-1" data-name="Group">
      <Group123 />
    </div>
  );
}

function Group125() {
  return (
    <div className="col-1 h-[2.581px] ml-0 mt-0 relative row-1 w-[4.063px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.06269 2.58059">
        <g id="Group">
          <path d={svgPaths.p2347e380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group124() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.62px] mt-[10.36px] place-items-start relative row-1" data-name="Group">
      <Group125 />
    </div>
  );
}

function Group126() {
  return (
    <div className="col-1 h-[9.225px] ml-[0.36px] mt-[11.48px] relative row-1 w-[12.365px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3654 9.22484">
        <g id="Group">
          <path d={svgPaths.p722f680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group127() {
  return (
    <div className="col-1 h-[3.357px] ml-0 mt-[20.71px] relative row-1 w-[49.716px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.7157 3.35727">
        <g id="Group">
          <path d={svgPaths.p102d1500} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group114() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[128.22px] place-items-start relative row-1" data-name="Group">
      <Group115 />
      <Group116 />
      <Group118 />
      <Group120 />
      <Group122 />
      <Group124 />
      <Group126 />
      <Group127 />
    </div>
  );
}

function Group128() {
  return (
    <div className="col-1 h-[116.21px] ml-[9.61px] mt-0 relative row-1 w-[122.165px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.165 116.21">
        <g id="Group">
          <path d={svgPaths.p251e0000} fill="var(--fill-0, #00184C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group130() {
  return (
    <div className="col-1 h-[67.693px] ml-0 mt-0 relative row-1 w-[92.161px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.1605 67.6929">
        <g id="Group">
          <path d={svgPaths.p2f6b4e70} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group129() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[38.42px] mt-[37.84px] place-items-start relative row-1" data-name="Group">
      <Group130 />
    </div>
  );
}

function Group132() {
  return (
    <div className="col-1 h-[23.509px] ml-0 mt-0 relative row-1 w-[26.716px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.7159 23.5089">
        <g id="Group">
          <path d={svgPaths.p2e535e80} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group131() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[99.6px] mt-[16.6px] place-items-start relative row-1" data-name="Group">
      <Group132 />
    </div>
  );
}

function Group134() {
  return (
    <div className="col-1 h-[49.77px] ml-0 mt-0 relative row-1 w-[7.768px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.76826 49.7695">
        <g id="Group">
          <path d={svgPaths.p1b969b00} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group133() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.74px] mt-[3.44px] place-items-start relative row-1" data-name="Group">
      <Group134 />
    </div>
  );
}

function Group112() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[119.53px] mt-[131.77px] place-items-start relative row-1" data-name="Group">
      <Group113 />
      <Group114 />
      <Group128 />
      <Group129 />
      <Group131 />
      <Group133 />
    </div>
  );
}

function Group136() {
  return (
    <div className="col-1 h-[15.02px] ml-0 mt-0 relative row-1 w-[20.917px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9173 15.0199">
        <g id="Group">
          <path d={svgPaths.pb52ac00} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group135() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[46.06px] mt-[236px] place-items-start relative row-1" data-name="Group">
      <Group136 />
    </div>
  );
}

function Group138() {
  return (
    <div className="col-1 h-[3.261px] ml-0 mt-0 relative row-1 w-[26.132px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1323 3.26094">
        <g id="Group">
          <path d={svgPaths.p30dd8471} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group137() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[141.17px] mt-[236.33px] place-items-start relative row-1" data-name="Group">
      <Group138 />
    </div>
  );
}

function Group140() {
  return (
    <div className="col-1 h-[57.98px] ml-0 mt-[23.42px] relative row-1 w-[67.603px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.6031 57.98">
        <g id="Group">
          <path d={svgPaths.p2a981e00} fill="var(--fill-0, #FFA189)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group142() {
  return (
    <div className="col-1 h-[3.187px] ml-0 mt-0 relative row-1 w-[7.358px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.35835 3.18669">
        <g id="Group">
          <path d={svgPaths.p343bd80} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group141() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[42.64px] mt-[61.59px] place-items-start relative row-1" data-name="Group">
      <Group142 />
    </div>
  );
}

function Group144() {
  return (
    <div className="col-1 h-[2.642px] ml-0 mt-0 relative row-1 w-[7.026px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.02581 2.6419">
        <g id="Group">
          <path d={svgPaths.pa67c480} fill="var(--fill-0, #E87E64)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group143() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[44.98px] mt-[60.38px] place-items-start relative row-1" data-name="Group">
      <Group144 />
    </div>
  );
}

function Group146() {
  return (
    <div className="col-1 h-[37.378px] ml-0 mt-0 relative row-1 w-[30.098px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0984 37.378">
        <g id="Group">
          <path d={svgPaths.p16c47500} fill="var(--fill-0, #1574DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group145() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[39.4px] mt-0 place-items-start relative row-1" data-name="Group">
      <Group146 />
    </div>
  );
}

function Group148() {
  return (
    <div className="col-1 h-[25.255px] ml-0 mt-0 relative row-1 w-[3.151px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.15111 25.2545">
        <g id="Group">
          <path d={svgPaths.p28141000} fill="var(--fill-0, #0559B5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group147() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.86px] mt-[11.01px] place-items-start relative row-1" data-name="Group">
      <Group148 />
    </div>
  );
}

function Group139() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[177.79px] mt-[60.44px] place-items-start relative row-1" data-name="Group">
      <Group140 />
      <Group141 />
      <Group143 />
      <Group145 />
      <Group147 />
    </div>
  );
}

function Group150() {
  return (
    <div className="col-1 h-[18.32px] ml-[7.11px] mt-[49.91px] relative row-1 w-[99.851px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.8514 18.3201">
        <g id="Group">
          <path d={svgPaths.p2ca3ab80} fill="var(--fill-0, #3B3DBA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group152() {
  return (
    <div className="col-1 h-[59.64px] ml-[4.5px] mt-[0.36px] relative row-1 w-[71.941px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9408 59.64">
        <g id="Group">
          <path d={svgPaths.p30807b40} fill="var(--fill-0, #3B3DBA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group153() {
  return (
    <div className="col-1 h-[59.64px] ml-0 mt-0 relative row-1 w-[71.941px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9406 59.6401">
        <g id="Group">
          <path d={svgPaths.p11367200} fill="var(--fill-0, #3B3DBA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group154() {
  return (
    <div className="col-1 h-[13.478px] ml-[29.78px] mt-[26.47px] relative row-1 w-[11.766px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7661 13.4781">
        <g id="Group">
          <path d={svgPaths.p20145080} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group156() {
  return (
    <div className="col-1 h-[47.105px] ml-0 mt-0 relative row-1 w-[8.109px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.10863 47.1054">
        <g id="Group">
          <path d={svgPaths.p2153e9a0} fill="var(--fill-0, #5254CF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group155() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[64.4px] mt-[8.57px] place-items-start relative row-1" data-name="Group">
      <Group156 />
    </div>
  );
}

function Group151() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group152 />
      <Group153 />
      <Group154 />
      <Group155 />
    </div>
  );
}

function Group149() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[104.71px] mt-[76.72px] place-items-start relative row-1" data-name="Group">
      <Group150 />
      <Group151 />
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group19 />
      <Group26 />
      <Group27 />
      <Group28 />
      <Group41 />
      <Group60 />
      <Group112 />
      <Group135 />
      <Group137 />
      <Group139 />
      <Group149 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[238.45px] mt-[264.69px] place-items-start relative row-1" data-name="Clip path group">
      <Group18 />
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <ClipPathGroup />
      <ClipPathGroup1 />
    </div>
  );
}

function Objects2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="OBJECTS">
      <Group8 />
    </div>
  );
}

function Group158() {
  return (
    <div className="col-1 h-[88.904px] ml-0 mt-0 relative row-1 w-[114.355px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114.355 88.9045">
        <g id="Group">
          <path d={svgPaths.p7f69380} fill="var(--fill-0, #4356D6)" id="Vector" />
          <path d={svgPaths.p3d70fa00} fill="var(--fill-0, #4356D6)" id="Vector_2" />
          <path d={svgPaths.pee47870} fill="var(--fill-0, #B2C0FE)" id="Vector_3" />
          <path d={svgPaths.p4f01880} fill="var(--fill-0, #B2C0FE)" id="Vector_4" />
          <path d={svgPaths.pb730a00} fill="var(--fill-0, #B2C0FE)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group159() {
  return (
    <div className="col-1 h-[42.44px] ml-[26.71px] mt-[78.54px] relative row-1 w-[71.748px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.7485 42.4397">
        <g id="Group">
          <path d={svgPaths.p38d5c880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1ffbdc70} fill="var(--fill-0, #4356D6)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group157() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[53.57px] mt-[425.36px] place-items-start relative row-1" data-name="Group">
      <Group158 />
      <Group159 />
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Objects2 />
      <Group157 />
      <div className="col-1 flex h-[135.066px] items-center justify-center ml-[481px] mt-[5px] relative row-1 w-[132.231px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[53.41deg]">
          <div className="h-[88.674px] relative w-[102.386px]" data-name="path20605">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102.386 88.6741">
              <path d={svgPaths.p1162fd70} fill="var(--fill-0, #B2C0FE)" id="path20605" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group22 />
    </div>
  );
}

function CardContent({ icon: Icon, title, desc, isHovered }: { icon: any, title: string, desc: string, isHovered?: boolean }) {
  return (
    <div className="flex gap-[20px] items-start p-[24px] transition-colors duration-300">
      <div className={`p-3 rounded-lg shrink-0 transition-colors duration-300 ${isHovered ? 'bg-[#4356d6] text-white' : 'bg-[#eef2ff] text-[#4356d6]'}`}>
        <Icon size={24} />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <h3 className={`font-['Roboto:SemiBold',sans-serif] font-semibold text-[22px] capitalize transition-colors duration-300 ${isHovered ? 'text-[#4356d6]' : 'text-black'}`}>
          {title}
        </h3>
        <p className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] leading-[26px] text-[#4b4b4b]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-[#fafbff] border-2 rounded-[12px] w-full max-w-[600px] transition-all duration-300 cursor-pointer ${hovered ? 'border-[#4356d6] shadow-lg translate-y-[-4px]' : 'border-[#e2e7ff]'}`}
    >
      <CardContent
        icon={Search}
        title="Regulatory Clarity"
        desc="We decode complex compliance rules into simple, actionable steps."
        isHovered={hovered}
      />
    </div>
  );
}

function Frame17() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-[#fafbff] border-2 rounded-[12px] w-full max-w-[600px] transition-all duration-300 cursor-pointer ${hovered ? 'border-[#4356d6] shadow-lg translate-y-[-4px]' : 'border-[#e2e7ff]'}`}
    >
      <CardContent
        icon={FileText}
        title="Hassle-Free Filings Clarity"
        desc="From registration to ongoing reporting—we manage it end-to-end."
        isHovered={hovered}
      />
    </div>
  );
}

function Frame18() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-[#fafbff] border-2 rounded-[12px] w-full max-w-[600px] transition-all duration-300 cursor-pointer ${hovered ? 'border-[#4356d6] shadow-lg translate-y-[-4px]' : 'border-[#e2e7ff]'}`}
    >
      <CardContent
        icon={ShieldCheck}
        title="Risk Protection"
        desc="Stay ahead of audits, inspections, and compliance gaps with proactive support."
        isHovered={hovered}
      />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <Frame30 />
      <Group12 />
      <Frame16 />
    </div>
  );
}

function Group160() {
  return (
    <div className="absolute inset-[58.93%_78.97%_38.94%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.521 34.1658">
        <g id="Group">
          <path d={svgPaths.p2c6cdd00} fill="var(--fill-0, #E2E2FF)" id="Vector" />
          <path d={svgPaths.p36ad4c00} fill="var(--fill-0, #E2E2FF)" id="Vector_2" />
          <path d={svgPaths.pb1e6780} fill="var(--fill-0, #E2E2FF)" id="Vector_3" />
          <path d={svgPaths.p1ffb5180} fill="var(--fill-0, #E2E2FF)" id="Vector_4" />
          <path d={svgPaths.pb7c8280} fill="var(--fill-0, #E2E2FF)" id="Vector_5" />
          <path d={svgPaths.p3d810d80} fill="var(--fill-0, #E2E2FF)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[10px] items-start left-0 overflow-clip px-[20px] py-[50px] top-[1328px] w-[768px]">
      <Frame31 />
      <Group160 />
    </div>
  );
}

export default function Tablet768Px() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white relative size-full" data-name="Tablet 768px">
      <HeroSection onOpenMenu={() => setIsMenuOpen(true)} />
      <Frame19 />
      {isMenuOpen && createPortal(
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />,
        document.body
      )}
    </div>
  );
}