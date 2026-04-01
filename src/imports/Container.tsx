import svgPaths from "./svg-4flc1xrcb9";

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-sans font-semibold leading-[24px] left-0 text-[#101828] text-[16px] top-[-0.5px] whitespace-nowrap">Building Permission Files</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-sans font-medium leading-[0] left-0 text-[#5c6e93] text-[0px] top-px whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">{`Building Permissions / Building Permissions / `}</span>
        <span className="font-sans font-bold leading-[20px] text-[14px]">General Permit</span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[42px] relative shrink-0 w-[235.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Group() {
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

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Close</p>
    </div>
  );
}

function FullScreenButton() {
  return (
    <div className="relative shrink-0" data-name="Full Screen Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Close Button">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
            <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Delete, Disabled">
                    <Group />
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
            <Frame />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[75px] relative shrink-0 w-[1280px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
        <Container2 />
        <FullScreenButton />
      </div>
    </div>
  );
}

function StatisticsRow() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[8px] relative w-full whitespace-nowrap">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px]">
            <p className="leading-[20px]">Total Files</p>
          </div>
          <p className="font-sans font-semibold leading-[28px] relative shrink-0 text-[#232f50] text-[20px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">500,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function StatisticsRow1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[8px] relative w-full whitespace-nowrap">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px]">
            <p className="leading-[20px]">{`Files Disposed `}</p>
          </div>
          <p className="font-sans font-semibold leading-[28px] relative shrink-0 text-[#232f50] text-[20px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">500,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function StatisticsRow2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[8px] relative w-full whitespace-nowrap">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px]">
            <p className="leading-[20px]">{`Files In Process `}</p>
          </div>
          <p className="font-sans font-semibold leading-[28px] relative shrink-0 text-[#232f50] text-[20px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">500,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function StatisticsRow3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[8px] relative w-full whitespace-nowrap">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px]">
            <p className="leading-[20px]">{`Files Parked `}</p>
          </div>
          <p className="font-sans font-semibold leading-[28px] relative shrink-0 text-[#232f50] text-[20px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">500,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function StatisticsRow4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[8px] relative w-full whitespace-nowrap">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px]">
            <p className="leading-[20px]">{`Files Returned `}</p>
          </div>
          <p className="font-sans font-semibold leading-[28px] relative shrink-0 text-[#232f50] text-[20px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">500,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function StatisticsRow5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[8px] relative w-full whitespace-nowrap">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px]">
            <p className="leading-[20px]">{`Files Delayed `}</p>
          </div>
          <p className="font-sans font-semibold leading-[28px] relative shrink-0 text-[#232f50] text-[20px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">500,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function StatisticsRow6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Statistics Row">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[16px] py-[8px] relative w-full whitespace-nowrap">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px]">
            <p className="leading-[20px]">Rate of Disposal</p>
          </div>
          <p className="font-sans font-semibold leading-[28px] relative shrink-0 text-[#232f50] text-[20px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">500,000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
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

function Container3() {
  return (
    <div className="relative shrink-0 w-[1280px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">District</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Column1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] opacity-70 relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Office Type</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#e8eff4] content-stretch flex gap-[4px] h-[36px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[519px]">
      <Column />
      <Column1 />
    </div>
  );
}

function Group1() {
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
          <Group1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group2() {
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
          <Group2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame3() {
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
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative w-full">
        <TableHeader />
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[486.398px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-[13px] whitespace-nowrap">Name</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[40.5px] left-[486.4px] top-0 w-[153.383px]" data-name="Header Cell">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[138.3px] not-italic text-[#6a7282] text-[12px] text-right top-[13px] whitespace-nowrap">Total Files</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[40.5px] left-[639.78px] top-0 w-[145.414px]" data-name="Header Cell">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[130.17px] not-italic text-[#6a7282] text-[12px] text-right top-[13px] whitespace-nowrap">Disposed</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[40.5px] left-[785.2px] top-0 w-[156.188px]" data-name="Header Cell">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[140.41px] not-italic text-[#6a7282] text-[12px] text-right top-[13px] whitespace-nowrap">In Process</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[40.5px] left-[941.38px] top-0 w-[140.148px]" data-name="Header Cell">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[125.1px] not-italic text-[#6a7282] text-[12px] text-right top-[13px] whitespace-nowrap">Rejected</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[40.5px] left-[1081.53px] top-0 w-[144.469px]" data-name="Header Cell">
      <p className="-translate-x-full absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[128.8px] not-italic text-[#6a7282] text-[12px] text-right top-[13px] whitespace-nowrap">Returned</p>
    </div>
  );
}

function HeaderCell6() {
  return <div className="absolute h-[40.5px] left-[1226px] top-0 w-[54px]" data-name="Header Cell" />;
}

function TableRow() {
  return (
    <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b border-solid h-[40.5px] left-0 top-0 w-[1280px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[1280px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[133.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Thiruvananthapuram</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button />
      <Text />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container5 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.98px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">6,105</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.73px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,221</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.6px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,121</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.56px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,121</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[128.88px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,121</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button1 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Kollam</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button2 />
      <Text1 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container6 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.95px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">5,500</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[130.13px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,100</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.72px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.68px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,000</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button3 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.117px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Alappuzha</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button4 />
      <Text2 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.7px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">5,800</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[130.04px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,160</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.79px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,065</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.75px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,065</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.07px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,065</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.57px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Ernakulam</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button6 />
      <Text3 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.66px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">8,500</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.93px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,700</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[141.05px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,562</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[125.02px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,562</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.34px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,562</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon7 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Kozhikode</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button8 />
      <Text4 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.44px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">6,800</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.76px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,360</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.98px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,250</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.94px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,250</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.26px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,250</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button9 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Thrissur</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button10 />
      <Text5 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.7px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">7,200</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.43px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,440</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[141.03px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,323</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.99px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,323</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.31px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,323</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button11 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.227px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Malappuram</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button12 />
      <Text6 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.41px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">7,800</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.91px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,560</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.24px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,434</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.2px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,434</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[128.52px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,434</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button13 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Palakkad</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button14 />
      <Text7 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.7px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">6,500</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.85px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,300</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.98px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,195</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.94px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,195</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.26px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,195</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button15 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Kannur</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button16 />
      <Text8 />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.73px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">6,200</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[130.05px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,240</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.72px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,140</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.68px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,140</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,140</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button17 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 8.16667">
            <path d={svgPaths.p3a6cd80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[18px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Kottayam</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center left-[24px] top-[14px] w-[438.398px]" data-name="Container">
      <Button18 />
      <Text9 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[486.398px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[48px] left-[486.4px] top-0 w-[153.383px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[137.98px] not-italic text-[#364153] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">5,200</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[48px] left-[639.78px] top-0 w-[145.414px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[129.76px] not-italic text-[#00a63e] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">1,040</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[48px] left-[785.2px] top-0 w-[156.188px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140.41px] not-italic text-[#d08700] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">955</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[48px] left-[941.38px] top-0 w-[140.148px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[124.38px] not-italic text-[#e7000b] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">955</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[48px] left-[1081.53px] top-0 w-[144.469px]" data-name="Table Cell">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[128.7px] not-italic text-[#f54900] text-[14px] text-right top-[14.5px] tracking-[-0.1504px] whitespace-nowrap">955</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[4px] size-[14px] top-[4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p18df500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p4c1f200} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute left-[16px] rounded-[4px] size-[22px] top-[12.5px]" data-name="Button">
      <Icon19 />
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[48px] left-[1226px] top-0 w-[54px]" data-name="Table Cell">
      <Button19 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[40.5px] w-[1280px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
    </div>
  );
}

function Table() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1280px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <TableHeader1 />
        <TableBody />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[14px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container4 />
      <Table />
    </div>
  );
}