import svgPaths from "./svg-444afp662x";

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Path" />
          <path d="M8 11.3333V2" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M13.3333 14H2.66667" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p21bd21d0} id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="backdrop-blur-[22.05px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_9.8px_0px_rgba(0,0,0,0.04)]" />
      <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Download, Save, Upload">
        <Group />
      </div>
      <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Export</p>
    </div>
  );
}