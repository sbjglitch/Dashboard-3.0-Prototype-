import { ChevronDown } from "lucide-react";
import imgGovernmentOfKeralaLogo from "../../assets/828f18076f30eadbc8ffd05a9253419bb04f21ef.png";
import imgLsgdLogo2 from "../../assets/7c183a0a0c9ac3c4483c0f6d150efedb7cac5cb1.png";
import svgPaths from "../../imports/svg-hkl0il95bp";

export function HeaderV3() {
  return (
    <header className="bg-white h-auto md:h-[80px] border-b border-[#e8eff4] sticky top-0 z-40">
      <div className="h-full flex flex-wrap items-center justify-between gap-3 px-4 md:px-[42px] py-3 md:py-0">
        <div className="flex items-center gap-3 md:gap-[24px] min-w-0">
          <div className="h-[28px] w-[64px] md:h-[36.871px] md:w-[84.634px] shrink-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.6339 36.871" role="img" aria-label="K-SMART">
              <path clipRule="evenodd" d={svgPaths.p13e027c0} fill="#09327B" fillRule="evenodd" />
              <path d={svgPaths.pafeb100} fill="#E83A7A" />
              <path d={svgPaths.p137eb400} fill="#E83A7A" />
              <path d={svgPaths.p23ef9ec0} fill="#00B2EB" />
            </svg>
          </div>
          <span className="h-[44px] w-px bg-[#d6e1f3] hidden md:block" aria-hidden="true" />
          <img alt="Government of Kerala" className="h-[34.973px] w-[54.557px] object-cover hidden sm:block" src={imgGovernmentOfKeralaLogo} />
          <img alt="Local Self Government Department" className="h-[31.475px] w-[53.159px] object-cover hidden sm:block" src={imgLsgdLogo2} />
          <div className="hidden lg:flex flex-col gap-[8px]">
            <p className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Government of Kerala</p>
            <p className="font-sans font-medium text-[14px] text-[#232f50] leading-[20px]">Local Self Government Department</p>
          </div>
        </div>

        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            className="inline-flex items-center gap-[10px] h-[36px] px-[16px] bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-semibold text-[14px] text-[#232f50] hover:border-[#09327b] transition-colors"
          >
            മലയാളം
            <ChevronDown className="size-[16px] text-[#232f50]" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="h-[36px] px-[32px] bg-[#e83a7a] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-semibold text-[14px] text-white hover:bg-[#d62d69] transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
