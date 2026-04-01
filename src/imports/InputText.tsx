function InputContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Input Container">
      <p className="font-sans font-medium leading-[24px] relative shrink-0 text-[#232f50] text-[16px] whitespace-nowrap">Kerala</p>
      <div className="h-[6px] relative shrink-0 w-[12px]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M1 1L7 7L13 1" id="Vector" stroke="var(--stroke-0, #D5D7DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="absolute bg-white content-stretch flex font-sans font-normal gap-[4px] h-[19px] items-start leading-[normal] left-[18px] px-[5px] text-[#153171] text-[14px] top-[-9px] whitespace-nowrap" data-name="Label Container">
      <p className="relative shrink-0">Local Body/state</p>
      <p className="relative shrink-0">*</p>
    </div>
  );
}

function HouseName() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[5px] items-start justify-center left-0 px-[18px] py-[16px] right-0 rounded-[8px] top-1/2" data-name="HouseName">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <InputContainer />
      <LabelContainer />
    </div>
  );
}

function Subtext() {
  return <div className="absolute content-stretch flex inset-[87.84%_0_0_63.92%] items-start px-[4px]" data-name="Subtext" />;
}

export default function InputText() {
  return (
    <div className="relative size-full" data-name="Input Text">
      <HouseName />
      <Subtext />
    </div>
  );
}