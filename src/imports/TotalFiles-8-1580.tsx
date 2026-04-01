import svgPaths from "./svg-7qsh820fhe";

function BreadcrumbItems() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Breadcrumb Items">
      <p className="font-sans font-semibold leading-[24px] relative shrink-0 text-[#5c6e93]">{`Building Permissions `}</p>
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[#5c6e93]">/</p>
      <p className="font-sans font-semibold leading-[24px] relative shrink-0 text-[#5c6e93]">{`Permits & Approvals`}</p>
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[#5c6e93]">/</p>
      <p className="font-sans font-semibold leading-[24px] relative shrink-0 text-[#232f50]">General Permit</p>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 text-[16px] whitespace-nowrap" data-name="Breadcrumbs">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50]">
        <p className="leading-[24px]">Total Files</p>
      </div>
      <BreadcrumbItems />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <g id="Group">
            <path d="M10.0833 0.75H12.75V3.41667" id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M8.75 4.75L12.75 0.75" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M3.41667 12.75H0.75V10.0833" id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M4.75 8.75L0.75 12.75" id="Path_4" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Full Screen</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p37ec7cc0} id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p263ef380} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Close</p>
    </div>
  );
}

function FullScreenButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Full Screen Button">
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Full Screen, Arrow">
                <Group />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Close Button">
        <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
          <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Delete, Disabled">
                  <Group2 />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Breadcrumbs />
          <FullScreenButton />
        </div>
      </div>
    </div>
  );
}

function BreadcrumbItems1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[16px] whitespace-nowrap" data-name="Breadcrumb Items">
      <p className="font-sans font-semibold leading-[24px] relative shrink-0 text-[#5c6e93]">Thiruvananthapuram</p>
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[#5c6e93]">/</p>
      <p className="font-sans font-semibold leading-[24px] relative shrink-0 text-[#5c6e93]">Grama Pnachayath</p>
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[#5c6e93]">/</p>
      <p className="font-sans font-semibold leading-[24px] relative shrink-0 text-[#5c6e93]">Attingal</p>
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[#5c6e93]">/</p>
      <p className="font-sans font-semibold leading-[24px] relative shrink-0 text-[#232f50]">JC1</p>
    </div>
  );
}

function Breadcrumbs1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Breadcrumbs">
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <g id="Group_2">
              <path d="M3.33333 8H12.6667" id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M6.66667 4.66667L3.33333 8" id="Path_2" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M6.66667 11.3333L3.33333 8" id="Path_3" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <g id="Path_4" />
          </g>
        </svg>
      </div>
      <BreadcrumbItems1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p396e8020} id="Path_2" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M19 19L15.71 15.71" id="Path_3" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[400px]" data-name="Search Container">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic opacity-50 relative shrink-0 text-[#222533] text-[14px] whitespace-nowrap">Search</p>
        <div className="relative shrink-0 size-[24px]" data-name="Search Icon">
          <Group3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path" />
          <path d="M10 14.1667V2.5" id="Path_2" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M16.6667 17.5H3.33333" id="Path_3" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p22c53b40} id="Path_4" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SearchContainer1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[107px]" data-name="Search Container">
      <div className="content-stretch flex items-center justify-between overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Export</p>
        <div className="relative shrink-0 size-[20px]" data-name="Interface, Essential/Download, Save, Upload">
          <Group4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <SearchContainer />
      <SearchContainer1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[4]">
      <Breadcrumbs1 />
      <Frame12 />
    </div>
  );
}

function BreadcrumbItems2() {
  return (
    <div className="content-stretch flex flex-col font-sans font-semibold gap-[4px] items-start justify-center leading-[24px] relative shrink-0 text-[16px] whitespace-nowrap" data-name="Breadcrumb Items">
      <p className="relative shrink-0 text-[#232f50]">Sarath Babu John</p>
      <p className="relative shrink-0 text-[#5c6e93]">{`Secretary `}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white content-stretch flex items-center p-[16px] relative rounded-[16px] shrink-0 w-[384px] z-[3]">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <BreadcrumbItems2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#f2f6ff] text-[14px]">
        <p className="leading-[normal]">Total Files</p>
      </div>
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white">500,000</p>
    </div>
  );
}

function StatisticsRow() {
  return (
    <div className="bg-[#00a78e] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Column />
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+73.74px)] top-[-90.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#f2f6ff] text-[14px]">
        <p className="leading-[normal]">{`Files Disposed `}</p>
      </div>
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white">500,000</p>
    </div>
  );
}

function StatisticsRow1() {
  return (
    <div className="bg-[#009fd2] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Column1 />
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+74.17px)] top-[-90.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#f2f6ff] text-[14px]">
        <p className="leading-[normal]">{`Files In Process `}</p>
      </div>
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white">500,000</p>
    </div>
  );
}

function StatisticsRow2() {
  return (
    <div className="bg-[#7b61ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Column2 />
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+73.6px)] top-[-90.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#f2f6ff] text-[14px]">
        <p className="leading-[normal]">{`Files Parked `}</p>
      </div>
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white">500,000</p>
    </div>
  );
}

function StatisticsRow3() {
  return (
    <div className="bg-[#df3a7a] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Column3 />
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+74.02px)] top-[-90.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#f2f6ff] text-[14px]">
        <p className="leading-[normal]">{`Files Returned `}</p>
      </div>
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white">500,000</p>
    </div>
  );
}

function StatisticsRow4() {
  return (
    <div className="bg-[#eca100] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Column4 />
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+73.45px)] top-[-90.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#f2f6ff] text-[14px]">
        <p className="leading-[normal]">{`Files Delayed `}</p>
      </div>
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white">500,000</p>
    </div>
  );
}

function StatisticsRow5() {
  return (
    <div className="bg-[#00a78e] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Column5 />
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+73.88px)] top-[-90.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Column">
      <div className="flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#f2f6ff] text-[14px]">
        <p className="leading-[normal]">Rate of Disposal</p>
      </div>
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white">500,000</p>
    </div>
  );
}

function StatisticsRow6() {
  return (
    <div className="bg-[#009fd2] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative w-full">
          <Column6 />
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+73.31px)] top-[-90.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full z-[2]">
      <StatisticsRow />
      <StatisticsRow1 />
      <StatisticsRow2 />
      <StatisticsRow3 />
      <StatisticsRow4 />
      <StatisticsRow5 />
      <StatisticsRow6 />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Header Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Sl No.</p>
    </div>
  );
}

function HouseName() {
  return (
    <div className="bg-[#5c6e93] content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0 w-full" data-name="HouseName">
      <HeaderContainer />
    </div>
  );
}

function HouseName1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function HouseName2() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">2</p>
    </div>
  );
}

function HouseName3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function HouseName4() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">4</p>
    </div>
  );
}

function HouseName5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">5</p>
    </div>
  );
}

function HouseName6() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">6</p>
    </div>
  );
}

function HouseName7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">7</p>
    </div>
  );
}

function HouseName8() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">8</p>
    </div>
  );
}

function HouseName9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[68px] items-center justify-center relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">9</p>
    </div>
  );
}

function Coloumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[74px] z-[5]" data-name="Coloumn">
      <HouseName />
      <HouseName1 />
      <HouseName2 />
      <HouseName3 />
      <HouseName4 />
      <HouseName5 />
      <HouseName6 />
      <HouseName7 />
      <HouseName8 />
      <HouseName9 />
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Header Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">File</p>
    </div>
  );
}

function HouseName10() {
  return (
    <div className="bg-[#5c6e93] relative shrink-0 w-full" data-name="HouseName">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative w-full">
          <HeaderContainer1 />
        </div>
      </div>
    </div>
  );
}

function HouseName11() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName12() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName13() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName14() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName15() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName16() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName17() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName18() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function HouseName19() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">IMK-6523-205</p>
        </div>
      </div>
    </div>
  );
}

function Coloumn1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative z-[4]" data-name="Coloumn">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none" />
      <HouseName10 />
      <HouseName11 />
      <HouseName12 />
      <HouseName13 />
      <HouseName14 />
      <HouseName15 />
      <HouseName16 />
      <HouseName17 />
      <HouseName18 />
      <HouseName19 />
    </div>
  );
}

function HouseName20() {
  return (
    <div className="bg-[#5c6e93] relative shrink-0 w-full" data-name="HouseName">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">File Date</p>
        </div>
      </div>
    </div>
  );
}

function HouseName21() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName22() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName23() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName24() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName25() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName26() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName27() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName28() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function HouseName29() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">10:56 AM 24/08/20224</p>
        </div>
      </div>
    </div>
  );
}

function Coloumn2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative z-[3]" data-name="Coloumn">
      <HouseName20 />
      <HouseName21 />
      <HouseName22 />
      <HouseName23 />
      <HouseName24 />
      <HouseName25 />
      <HouseName26 />
      <HouseName27 />
      <HouseName28 />
      <HouseName29 />
    </div>
  );
}

function HouseName30() {
  return (
    <div className="bg-[#5c6e93] relative shrink-0 w-full" data-name="HouseName">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Source</p>
        </div>
      </div>
    </div>
  );
}

function HouseName31() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName32() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName33() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName34() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName35() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName36() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName37() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName38() {
  return (
    <div className="bg-[#f6f9fb] h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function HouseName39() {
  return (
    <div className="bg-white h-[68px] relative shrink-0 w-full" data-name="HouseName">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">-</p>
        </div>
      </div>
    </div>
  );
}

function Coloumn3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative z-[2]" data-name="Coloumn">
      <HouseName30 />
      <HouseName31 />
      <HouseName32 />
      <HouseName33 />
      <HouseName34 />
      <HouseName35 />
      <HouseName36 />
      <HouseName37 />
      <HouseName38 />
      <HouseName39 />
    </div>
  );
}

function HouseName40() {
  return (
    <div className="bg-[#5c6e93] content-stretch flex flex-col items-center justify-center py-[8px] relative shrink-0 w-full" data-name="HouseName">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Action</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer() {
  return (
    <div className="bg-white content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group5 />
              </div>
            </div>
          </div>
        </div>
        <Frame2 />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer1() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group6 />
              </div>
            </div>
          </div>
        </div>
        <Frame3 />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer2() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group7 />
              </div>
            </div>
          </div>
        </div>
        <Frame4 />
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer3() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group8 />
              </div>
            </div>
          </div>
        </div>
        <Frame5 />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer4() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group9 />
              </div>
            </div>
          </div>
        </div>
        <Frame6 />
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer5() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group10 />
              </div>
            </div>
          </div>
        </div>
        <Frame7 />
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer6() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group11 />
              </div>
            </div>
          </div>
        </div>
        <Frame8 />
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer7() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group12 />
              </div>
            </div>
          </div>
        </div>
        <Frame9 />
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p1e050c00} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e35640} id="Path_3" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[#232f50] content-stretch flex items-start left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Edit</p>
    </div>
  );
}

function ActionContainer8() {
  return (
    <div className="bg-[#f6f9fb] content-stretch flex h-[68px] items-center justify-center relative shrink-0 w-[104px]" data-name="Action Container">
      <div aria-hidden="true" className="absolute border-[#e8eff4] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="_Button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
              <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Eye, Show, Visible">
                <Group13 />
              </div>
            </div>
          </div>
        </div>
        <Frame10 />
      </div>
    </div>
  );
}

function Coloumn4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[105px] z-[1]" data-name="Coloumn">
      <HouseName40 />
      <ActionContainer />
      <ActionContainer1 />
      <ActionContainer2 />
      <ActionContainer3 />
      <ActionContainer4 />
      <ActionContainer5 />
      <ActionContainer6 />
      <ActionContainer7 />
      <ActionContainer8 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full z-[1]" data-name="Table">
      <div className="content-stretch flex isolate items-center overflow-clip relative rounded-[inherit] w-full">
        <Coloumn />
        <Coloumn1 />
        <Coloumn2 />
        <Coloumn3 />
        <Coloumn4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function StatisticsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] isolate items-start min-h-px min-w-px relative w-full z-[1]" data-name="Statistics Container">
      <Frame13 />
      <Frame14 />
      <Frame11 />
      <Table />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white h-[841px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col isolate items-center p-[24px] relative size-full">
          <StatisticsContainer />
        </div>
      </div>
    </div>
  );
}

export default function TotalFiles() {
  return (
    <div className="bg-[#f2f6ff] content-stretch flex flex-col gap-[2px] items-center overflow-clip relative rounded-[8px] size-full" data-name="Total Files">
      <Header />
      <Content />
    </div>
  );
}