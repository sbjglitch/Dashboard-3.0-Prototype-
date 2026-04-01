import svgPaths from "./svg-cuphnjn5ej";

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

function Frame30() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0">
      <p className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-[transparent] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(137.587deg, rgb(0, 178, 235) 90.168%, rgb(0, 51, 144) 89.561%)" }}>
        Upto Today
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f39c13] content-stretch flex items-end justify-end px-[12px] py-[8px] relative rounded-[8px] shrink-0">
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white whitespace-nowrap">Building Permissions</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <Frame30 />
      <Frame29 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="bg-clip-text font-sans font-bold leading-[normal] relative shrink-0 text-[24px] text-[transparent] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(134.486deg, rgb(0, 178, 235) 90.168%, rgb(0, 51, 144) 89.561%)" }}>
        Kerala
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[2]">
      <Frame32 />
      <Frame28 />
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

function Frame4() {
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

function TableHeaderColumn() {
  return (
    <div className="bg-[#00b2eb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="Table Header Column">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[4px] relative size-full">
          <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[normal]">{`District `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeaderColumn1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Table Header Column">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[4px] relative size-full">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5286a5] text-[14px] whitespace-nowrap">
            <p className="leading-[normal]">Office Type</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="bg-[#e7eff6] content-stretch flex h-[32px] items-center overflow-clip relative rounded-[4px] shrink-0 w-[600px]" data-name="Column">
      <TableHeaderColumn />
      <TableHeaderColumn1 />
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
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0" data-name="Search Container">
      <div className="content-stretch flex gap-[10px] h-full items-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Export</p>
        <div className="relative shrink-0 size-[20px]" data-name="Interface, Essential/Download, Save, Upload">
          <Group4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <SearchContainer />
      <SearchContainer1 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Table Header">
      <Column7 />
      <Frame27 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[250px]" data-name="Table Cell">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">District/Office/</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center py-px relative shrink-0 w-[100px]" data-name="Table Cell">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">Total Files</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[12px]">
            <div className="absolute bottom-1/4 left-[12.79%] right-[12.79%] top-[8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93119 8">
                <path d={svgPaths.p2dc6e280} fill="var(--fill-0, #5C6E93)" id="Polygon 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center py-px relative shrink-0 w-[100px]" data-name="Table Cell">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">Disposed</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[12px]">
            <div className="absolute bottom-1/4 left-[12.79%] right-[12.79%] top-[8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93119 8">
                <path d={svgPaths.p2dc6e280} fill="var(--fill-0, #5C6E93)" id="Polygon 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center py-px relative shrink-0 w-[100px]" data-name="Table Cell">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">In Process</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[12px]">
            <div className="absolute bottom-1/4 left-[12.79%] right-[12.79%] top-[8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93119 8">
                <path d={svgPaths.p2dc6e280} fill="var(--fill-0, #5C6E93)" id="Polygon 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[100px]" data-name="Row">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">Rejected</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[12px]">
            <div className="absolute bottom-1/4 left-[12.79%] right-[12.79%] top-[8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93119 8">
                <path d={svgPaths.p2dc6e280} fill="var(--fill-0, #5C6E93)" id="Polygon 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center py-px relative shrink-0 w-[100px]" data-name="Table Cell">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">Returned</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[12px]">
            <div className="absolute bottom-1/4 left-[12.79%] right-[12.79%] top-[8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93119 8">
                <path d={svgPaths.p2dc6e280} fill="var(--fill-0, #5C6E93)" id="Polygon 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center py-px relative shrink-0 w-[100px]" data-name="Table Cell">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">Delayed</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[12px]">
            <div className="absolute bottom-1/4 left-[12.79%] right-[12.79%] top-[8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.93119 8">
                <path d={svgPaths.p2dc6e280} fill="var(--fill-0, #5C6E93)" id="Polygon 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-[#e7eff6] shrink-0 sticky top-0 w-full z-[2]" data-name="Table Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[84px] items-center px-[16px] py-[8px] relative w-full">
          <TableCell />
          <TableCell1 />
          <TableCell2 />
          <TableCell3 />
          <div className="flex flex-row items-center self-stretch">
            <Row />
          </div>
          <TableCell4 />
          <TableCell5 />
        </div>
      </div>
    </div>
  );
}

function LocationContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Thiruvananthapuram</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer />
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">5,000</p>
    </div>
  );
}

function PercentageContainer() {
  return (
    <div className="content-stretch flex font-sans font-semibold gap-[16px] items-center justify-center leading-[20px] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#232f50]">1,000</p>
      <p className="relative shrink-0 text-[#e83a7a]">40%</p>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer />
      <PercentageContainer />
      <ValueContainer1 />
      <ValueContainer2 />
      <ValueContainer3 />
      <ValueContainer4 />
    </div>
  );
}

function Row1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row1 />
    </div>
  );
}

function LocationContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Kollam</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer1 />
    </div>
  );
}

function ValueContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">5,000</p>
    </div>
  );
}

function PercentageContainer1() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,000</p>
      <p className="relative shrink-0 text-[#e83a7a]">40%</p>
    </div>
  );
}

function ValueContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer5 />
      <PercentageContainer1 />
      <ValueContainer6 />
      <ValueContainer7 />
      <ValueContainer8 />
      <ValueContainer9 />
    </div>
  );
}

function Row2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame5 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function MainContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row2 />
    </div>
  );
}

function LocationContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Pathanamthitta</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer2 />
    </div>
  );
}

function ValueContainer10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">5,000</p>
    </div>
  );
}

function PercentageContainer2() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,000</p>
      <p className="relative shrink-0 text-[#e83a7a]">40%</p>
    </div>
  );
}

function ValueContainer11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer10 />
      <PercentageContainer2 />
      <ValueContainer11 />
      <ValueContainer12 />
      <ValueContainer13 />
      <ValueContainer14 />
    </div>
  );
}

function Row3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame7 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function MainContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row3 />
    </div>
  );
}

function LocationContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Alappuzha</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer3 />
    </div>
  );
}

function ValueContainer15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">5,000</p>
    </div>
  );
}

function PercentageContainer3() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,000</p>
      <p className="relative shrink-0 text-[#e83a7a]">40%</p>
    </div>
  );
}

function ValueContainer16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function ValueContainer19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer15 />
      <PercentageContainer3 />
      <ValueContainer16 />
      <ValueContainer17 />
      <ValueContainer18 />
      <ValueContainer19 />
    </div>
  );
}

function Row4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame9 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function MainContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row4 />
    </div>
  );
}

function LocationContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Kochi</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer4 />
    </div>
  );
}

function ValueContainer20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">7,500</p>
    </div>
  );
}

function PercentageContainer4() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,500</p>
      <p className="relative shrink-0 text-[#e83a7a]">50%</p>
    </div>
  );
}

function ValueContainer21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,200</p>
    </div>
  );
}

function ValueContainer22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,200</p>
    </div>
  );
}

function ValueContainer23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,200</p>
    </div>
  );
}

function ValueContainer24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,200</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer20 />
      <PercentageContainer4 />
      <ValueContainer21 />
      <ValueContainer22 />
      <ValueContainer23 />
      <ValueContainer24 />
    </div>
  );
}

function Row5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame11 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function MainContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row5 />
    </div>
  );
}

function LocationContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Thiruvananthapuram</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer5 />
    </div>
  );
}

function ValueContainer25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">6,000</p>
    </div>
  );
}

function PercentageContainer5() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,200</p>
      <p className="relative shrink-0 text-[#e83a7a]">45%</p>
    </div>
  );
}

function ValueContainer26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,100</p>
    </div>
  );
}

function ValueContainer27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,100</p>
    </div>
  );
}

function ValueContainer28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,100</p>
    </div>
  );
}

function ValueContainer29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,100</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer25 />
      <PercentageContainer5 />
      <ValueContainer26 />
      <ValueContainer27 />
      <ValueContainer28 />
      <ValueContainer29 />
    </div>
  );
}

function Row6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame13 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function MainContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row6 />
    </div>
  );
}

function LocationContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Kozhikode</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer6 />
    </div>
  );
}

function ValueContainer30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">8,000</p>
    </div>
  );
}

function PercentageContainer6() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,800</p>
      <p className="relative shrink-0 text-[#e83a7a]">55%</p>
    </div>
  );
}

function ValueContainer31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,300</p>
    </div>
  );
}

function ValueContainer32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,300</p>
    </div>
  );
}

function ValueContainer33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,300</p>
    </div>
  );
}

function ValueContainer34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,300</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer30 />
      <PercentageContainer6 />
      <ValueContainer31 />
      <ValueContainer32 />
      <ValueContainer33 />
      <ValueContainer34 />
    </div>
  );
}

function Row7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame15 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function MainContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row7 />
    </div>
  );
}

function LocationContainer7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Palakkad</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer7 />
    </div>
  );
}

function ValueContainer35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">4,500</p>
    </div>
  );
}

function PercentageContainer7() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">800</p>
      <p className="relative shrink-0 text-[#e83a7a]">35%</p>
    </div>
  );
}

function ValueContainer36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">900</p>
    </div>
  );
}

function ValueContainer37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">900</p>
    </div>
  );
}

function ValueContainer38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">900</p>
    </div>
  );
}

function ValueContainer39() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">900</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer35 />
      <PercentageContainer7 />
      <ValueContainer36 />
      <ValueContainer37 />
      <ValueContainer38 />
      <ValueContainer39 />
    </div>
  );
}

function Row8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame17 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function MainContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row8 />
    </div>
  );
}

function LocationContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Thrissur</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer8 />
    </div>
  );
}

function ValueContainer40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">5,800</p>
    </div>
  );
}

function PercentageContainer8() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,400</p>
      <p className="relative shrink-0 text-[#e83a7a]">48%</p>
    </div>
  );
}

function ValueContainer41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,150</p>
    </div>
  );
}

function ValueContainer42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,150</p>
    </div>
  );
}

function ValueContainer43() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,150</p>
    </div>
  );
}

function ValueContainer44() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,150</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer40 />
      <PercentageContainer8 />
      <ValueContainer41 />
      <ValueContainer42 />
      <ValueContainer43 />
      <ValueContainer44 />
    </div>
  );
}

function Row9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame19 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function MainContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row9 />
    </div>
  );
}

function LocationContainer9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Malappuram</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer9 />
    </div>
  );
}

function ValueContainer45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">5,200</p>
    </div>
  );
}

function PercentageContainer9() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">1,000</p>
      <p className="relative shrink-0 text-[#e83a7a]">42%</p>
    </div>
  );
}

function ValueContainer46() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,050</p>
    </div>
  );
}

function ValueContainer47() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,050</p>
    </div>
  );
}

function ValueContainer48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,050</p>
    </div>
  );
}

function ValueContainer49() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">1,050</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer45 />
      <PercentageContainer9 />
      <ValueContainer46 />
      <ValueContainer47 />
      <ValueContainer48 />
      <ValueContainer49 />
    </div>
  );
}

function Row10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame21 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function MainContainer9() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row10 />
    </div>
  );
}

function LocationContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Idukki</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer10 />
    </div>
  );
}

function ValueContainer50() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">3,800</p>
    </div>
  );
}

function PercentageContainer10() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">700</p>
      <p className="relative shrink-0 text-[#e83a7a]">30%</p>
    </div>
  );
}

function ValueContainer51() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">800</p>
    </div>
  );
}

function ValueContainer52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">800</p>
    </div>
  );
}

function ValueContainer53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">800</p>
    </div>
  );
}

function ValueContainer54() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">800</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer50 />
      <PercentageContainer10 />
      <ValueContainer51 />
      <ValueContainer52 />
      <ValueContainer53 />
      <ValueContainer54 />
    </div>
  );
}

function Row11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame23 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function MainContainer10() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row11 />
    </div>
  );
}

function LocationContainer11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Location Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">Wayanad</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[297px]">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="Arrow Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.p367e8cc0} id="Path" stroke="var(--stroke-0, #323232)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <LocationContainer11 />
    </div>
  );
}

function ValueContainer55() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">4,200</p>
    </div>
  );
}

function PercentageContainer11() {
  return (
    <div className="content-stretch flex font-sans font-medium gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] w-[100px] whitespace-nowrap" data-name="Percentage Container">
      <p className="relative shrink-0 text-[#4f4f4f]">900</p>
      <p className="relative shrink-0 text-[#e83a7a]">37%</p>
    </div>
  );
}

function ValueContainer56() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">850</p>
    </div>
  );
}

function ValueContainer57() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">850</p>
    </div>
  );
}

function ValueContainer58() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">850</p>
    </div>
  );
}

function ValueContainer59() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[100px]" data-name="Value Container">
      <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#4f4f4f] text-[14px] whitespace-nowrap">850</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <ValueContainer55 />
      <PercentageContainer11 />
      <ValueContainer56 />
      <ValueContainer57 />
      <ValueContainer58 />
      <ValueContainer59 />
    </div>
  );
}

function Row12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Frame25 />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function MainContainer11() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Main Container">
      <div aria-hidden="true" className="absolute border border-[#f2f6ff] border-solid inset-[-0.5px] pointer-events-none" />
      <Row12 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[1]" data-name="Table Body">
      <MainContainer />
      <MainContainer1 />
      <MainContainer2 />
      <MainContainer3 />
      <MainContainer4 />
      <MainContainer5 />
      <MainContainer6 />
      <MainContainer7 />
      <MainContainer8 />
      <MainContainer9 />
      <MainContainer10 />
      <MainContainer11 />
    </div>
  );
}

function Column8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Column">
      <div className="content-stretch flex flex-col isolate items-center overflow-x-clip overflow-y-auto relative size-full">
        <TableRow />
        <TableBody />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7eff6] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function TableContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative w-full z-[1]" data-name="Table Container">
      <TableHeader />
      <Column8 />
    </div>
  );
}

function StatisticsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] isolate items-center min-h-px min-w-px relative w-full z-[1]" data-name="Statistics Container">
      <Frame4 />
      <TableContainer />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white h-[841px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[32px] isolate items-center p-[24px] relative size-full">
          <Frame31 />
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