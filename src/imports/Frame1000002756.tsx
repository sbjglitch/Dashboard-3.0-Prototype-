import svgPaths from "./svg-8cf2mpyz55";

function Column() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Content, Edit/folder-document-text">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <g id="Rectangle" />
                <path d={svgPaths.p3018c5c0} id="Path" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p8233340} id="Path_2" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path clipRule="evenodd" d={svgPaths.p730eff2} fill="var(--fill-0, #00B2EB)" fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, #00B2EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M4.66667 11.3333H6" id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">File Status</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p24775f00} fill="var(--fill-0, #A2BFD8)" fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #A2BFD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.p2a526700} fill="var(--fill-0, #A2BFD8)" fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, #A2BFD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.p3ec1e780} fill="var(--fill-0, #A2BFD8)" fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, #A2BFD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Column1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Business, Products/Business, Chart">
            <Group />
          </div>
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Finance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path clipRule="evenodd" d={svgPaths.p221b7240} fill="var(--fill-0, #A2BFD8)" fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, #A2BFD8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.p38d89f00} fill="var(--fill-0, #E7EFF6)" fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, #E7EFF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Column2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[24px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Health, Medicine/Shield, Heart">
            <Group1 />
          </div>
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Digital Health</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#e8eff4] content-stretch flex gap-[4px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] size-full">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}