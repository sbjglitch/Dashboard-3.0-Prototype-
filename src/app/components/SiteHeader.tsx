import { ChevronDown } from "lucide-react";
import imgGovernmentOfKeralaLogo from "../../assets/828f18076f30eadbc8ffd05a9253419bb04f21ef.png";
import imgLsgdLogo2 from "../../assets/7c183a0a0c9ac3c4483c0f6d150efedb7cac5cb1.png";
import svgPaths from "../../imports/svg-hkl0il95bp";

export function SiteHeader() {
  return (
    <header className="bg-white h-auto md:h-[80px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] sticky top-0 z-40">
      <div className="flex flex-wrap items-center justify-between px-4 md:px-[32px] py-3 md:py-0 h-full gap-3 md:gap-0">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="h-[28px] w-[64px] md:h-[36.871px] md:w-[84.634px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.6339 36.871">
              <g id="Logo">
                <path clipRule="evenodd" d={svgPaths.p13e027c0} fill="#09327B" fillRule="evenodd" />
                <path d={svgPaths.pafeb100} fill="#E83A7A" />
                <path d={svgPaths.p137eb400} fill="#E83A7A" />
                <path d={svgPaths.p23ef9ec0} fill="#00B2EB" />
              </g>
            </svg>
          </div>
          <div className="h-[44px] w-px bg-[#D6E1F3] hidden md:block" />
          <img alt="" className="h-[28px] w-[44px] md:h-[34.973px] md:w-[54.557px] object-cover hidden sm:block" src={imgGovernmentOfKeralaLogo} />
          <img alt="" className="h-[26px] w-[44px] md:h-[31.475px] md:w-[53.159px] object-cover hidden sm:block" src={imgLsgdLogo2} />
          <div className="flex flex-col gap-0.5 md:gap-2 hidden lg:flex">
            <p className="font-sans text-[12px] text-[#5c6e93]">Government of Kerala</p>
            <p className="font-sans font-semibold text-[14px] text-[#232f50]">
              Local Self Government Department
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-12">
          <button type="button" className="flex items-center gap-2 cursor-pointer hidden md:flex">
            <span className="font-sans font-medium text-[14px] text-[#09327b]">
              മലയാളം
            </span>
            <ChevronDown className="w-4 h-4 text-[#09327b]" />
          </button>
          <button type="button" className="font-sans font-semibold text-[14px] text-[#09327b] cursor-pointer hidden lg:block">
            About K-smart
          </button>
          <div className="flex items-center gap-2">
            <button className="px-4 md:px-8 py-1.5 md:py-2 border border-[#e83a7a] rounded-full font-sans font-semibold text-[12px] md:text-[14px] text-[#e83a7a] hover:bg-[#e83a7a] hover:text-white transition-colors">
              Register
            </button>
            <button className="px-4 md:px-8 py-1.5 md:py-2 bg-[#e83a7a] rounded-full font-sans font-semibold text-[12px] md:text-[14px] text-white hover:bg-[#d62d69] transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
