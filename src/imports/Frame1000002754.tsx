function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#5c6e93] text-[14px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">Time Period</p>
      <p className="font-sans font-bold leading-[28px] relative shrink-0 text-[#0c3080] text-[20px] text-shadow-[0px_1px_2px_rgba(10,13,18,0.05)]">Upto Today</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#5c6e93] text-[14px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">Module</p>
      <p className="font-sans font-bold leading-[28px] relative shrink-0 text-[#0c3080] text-[20px] text-shadow-[0px_1px_2px_rgba(10,13,18,0.05)]">General Pemrit, Building Permissions</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#5c6e93] text-[14px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)]">State</p>
      <p className="font-sans font-bold leading-[28px] relative shrink-0 text-[#0c3080] text-[20px] text-shadow-[0px_1px_2px_rgba(10,13,18,0.05)]">Kerala</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full whitespace-nowrap">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center p-[24px] relative size-full">
      <Frame1 />
    </div>
  );
}