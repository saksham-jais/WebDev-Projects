import HeroIllustration from "./HeroIllustration";
import svgPaths from "../../imports/Desktop1440Px/svg-37exuv1xns";

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
        <rect fill="#4356D6" height="24" rx="12" width="24" />
        <path
          d={svgPaths.p37a539c0}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

const checkItems = [
  "End-To-End Compliance Support",
  "Regulatory Filings Made Simple",
  "Tailored Solutions For Independent Analysts & Firms",
];

export default function HeroSection() {
  return (
    <section className="landing-hero bg-[#fafbff] pt-[70px] lg:pt-[100px] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute left-[-200px] top-[100px] w-[600px] h-[600px] rounded-full bg-[#F5F6FA] blur-[125px] opacity-80 pointer-events-none" />

      <div className="landing-hero__inner max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[72px]">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center min-h-[calc(100vh-100px)] lg:min-h-[729px] py-12 lg:py-0 lg:gap-10">
          {/* Left: Text Content */}
          <div className="landing-hero__content flex flex-col gap-6 lg:gap-7 w-full lg:w-[606px] shrink-0 z-10 lg:pt-[80px] lg:pb-[40px] md:items-center md:text-center">
            {/* Heading */}
            <div className="relative">
              <h1
                className="landing-hero__title font-['Roboto:Bold',sans-serif] font-bold text-[38px] md:text-[52px] lg:text-[64px] leading-[1.25] text-black capitalize md:max-w-[640px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                <span>Simplifying </span>
                <span className="landing-hero__title-accent text-[#4356d6] relative inline-block">
                  Compliance
                  {/* Underline decoration */}
                  <svg
                    className="absolute left-0 w-full"
                    style={{ bottom: "-6px", height: "12px" }}
                    viewBox="0 0 349 19"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={svgPaths.p306de800}
                      fill="#4356D6"
                      transform="rotate(180, 174.5, 9.5)"
                    />
                  </svg>
                </span>
                <span> For</span>
                <br className="hidden sm:block" />
                <span> Research Analysts</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="landing-hero__desc font-['Roboto:Regular',sans-serif] font-normal text-[16px] md:text-[18px] leading-[32px] text-black capitalize md:max-w-[650px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert Solutions Ensure
              Your Research Practices Meet Every Regulatory Requirement With Confidence And Ease
            </p>

            {/* Checklist */}
            <div className="landing-hero__checklist flex flex-col gap-[6px] md:items-center">
              {checkItems.map((item) => (
                <div key={item} className="landing-hero__checkitem flex items-center gap-4 md:justify-center md:w-full">
                  <CheckIcon />
                  <p
                    className="font-['Roboto:Regular',sans-serif] font-normal text-[16px] md:text-[18px] leading-[32px] text-black capitalize"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="landing-hero__actions flex flex-col sm:flex-row gap-4 items-start sm:items-center md:justify-center md:w-full">
              <button
                className="landing-btn landing-btn--primary bg-[#4356d6] hover:bg-[#3347c5] transition-colors text-white px-6 py-3 rounded-[8px] font-['Roboto:Medium',sans-serif] font-medium text-[16px] md:text-[18px] capitalize whitespace-nowrap w-full sm:w-auto"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Get Started
              </button>
              <button
                className="landing-btn landing-btn--ghost border-2 border-[#4356d6] text-[#4356d6] hover:bg-[#4356d6] hover:text-white transition-colors px-6 py-3 rounded-[8px] font-['Roboto:Medium',sans-serif] font-medium text-[16px] md:text-[18px] capitalize whitespace-nowrap w-full sm:w-auto"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Book A Consultation
              </button>
            </div>
          </div>

          {/* Desktop Illustration (absolute positioned on the right) */}
          <div className="landing-hero__art hidden lg:flex flex-1 justify-end items-center pointer-events-none">
            <div style={{ transform: "scale(0.78)", transformOrigin: "center right" }}>
              <HeroIllustration />
            </div>
          </div>

          {/* Tablet/Mobile Illustration (below text) */}
          <div className="landing-hero__art-mobile lg:hidden w-full flex items-center justify-center mt-8 overflow-hidden md:mt-10">
            <div style={{ transform: "scale(0.72)", transformOrigin: "top center", height: "420px" }}>
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
