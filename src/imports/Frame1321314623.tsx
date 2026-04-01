import svgPaths from "./svg-weh9cerdpm";
import imgGovernmentOfKeralaLogo from "../assets/828f18076f30eadbc8ffd05a9253419bb04f21ef.png";
import imgLsgdLogo2 from "../assets/7c183a0a0c9ac3c4483c0f6d150efedb7cac5cb1.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Text">
      <p className="font-sans font-normal leading-[16px] relative shrink-0 text-[#5c6e93] text-[12px]">Government of Kerala</p>
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px]">Local Self Government Department</p>
    </div>
  );
}

function LogoText() {
  return (
    <div className="content-stretch flex gap-[24px] h-[53px] items-center relative shrink-0 w-[611.253px]" data-name="Logo+text">
      <div className="h-[36.871px] relative shrink-0 w-[84.634px]" data-name="Logo">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.6339 36.871">
          <g id="Logo">
            <path clipRule="evenodd" d={svgPaths.p13e027c0} fill="#09327B" fillRule="evenodd" />
            <path d={svgPaths.pafeb100} fill="#E83A7A" />
            <path d={svgPaths.p137eb400} fill="#E83A7A" />
            <path d={svgPaths.p23ef9ec0} fill="var(--fill-0, #00B2EB)" />
          </g>
        </svg>
      </div>
      <div className="flex h-[44px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[44px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                <line id="Line 90" stroke="var(--stroke-0, #D6E1F3)" x2="44" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[34.973px] relative shrink-0 w-[54.557px]" data-name="Government_of_Kerala_Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGovernmentOfKeralaLogo} />
      </div>
      <div className="h-[31.475px] relative shrink-0 w-[53.159px]" data-name="lsgd-logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.91%] left-0 max-w-none top-[-0.17%] w-full" src={imgLsgdLogo2} />
        </div>
      </div>
      <Text />
    </div>
  );
}

function Malayalam() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Malayalam">
      <p className="font-sans font-medium leading-[1.5] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">മലയാളം</p>
      <div className="flex h-[4px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[8px] relative w-[4px]" data-name="Path">
            <div className="absolute inset-[-10%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6 9.6">
                <path d="M0.8 8.8L4.8 4.8L0.8 0.8" id="Path" stroke="var(--stroke-0, #09327B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[36px] items-center justify-end relative shrink-0" data-name="Links">
      <Malayalam />
      <p className="font-sans font-semibold leading-[1.5] relative shrink-0 text-[#09327b] text-[14px] whitespace-nowrap">About K-smart</p>
    </div>
  );
}

function Register() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[8px] relative rounded-[55px] shrink-0 w-[120px]" data-name="Register">
      <div aria-hidden="true" className="absolute border border-[#e83a7a] border-solid inset-0 pointer-events-none rounded-[55px]" />
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#e83a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Register</p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="bg-[#e83a7a] content-stretch flex items-center justify-center px-[32px] py-[8px] relative rounded-[55px] shrink-0 w-[120px]" data-name="Login">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Login</p>
      </div>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Btns">
      <Register />
      <Login />
    </div>
  );
}

function LinksBtns() {
  return (
    <div className="content-stretch flex gap-[47px] items-center relative shrink-0" data-name="links + btns">
      <Links />
      <Btns />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px overflow-clip relative">
      <LogoText />
      <LinksBtns />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[80px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 sticky top-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[7px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[-537.99px] top-[-2880px]">
      <div className="absolute flex items-center justify-center left-[-537.99px] size-[2804px] top-[-2880px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="bg-white opacity-2 size-[1982.728px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-537.99px] size-[2804px] top-[-2750px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="bg-white opacity-2 size-[1982.728px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-537.99px] size-[2804px] top-[-2620px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="bg-white opacity-2 size-[1982.728px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-537.99px] size-[2804px] top-[-2490px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="bg-white opacity-2 size-[1982.728px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-537.99px] size-[2804px] top-[-2360px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="bg-white opacity-2 size-[1982.728px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-537.99px] size-[2804px] top-[-2230px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="bg-white opacity-2 size-[1982.728px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-537.99px] size-[2804px] top-[-2100px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-45 -scale-y-100 flex-none">
          <div className="bg-white opacity-2 size-[1982.728px]" />
        </div>
      </div>
    </div>
  );
}

function VariantBackground() {
  return (
    <div className="bg-gradient-to-b from-[#09327b] from-[72.839%] h-[281px] mb-[-214px] overflow-clip relative shadow-[-5px_0px_33.3px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#285cbb] to-[281.69%] w-full" data-name="Variant Background">
      <Group9 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="backdrop-blur-[8.35px] bg-[rgba(255,255,255,0.17)] content-stretch flex gap-[4px] items-center px-[8px] py-[6px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <g id="Group_2">
              <path d="M3.33333 8H12.6667" id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M6.66667 4.66667L3.33333 8" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M6.66667 11.3333L3.33333 8" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <g id="Path_4" />
          </g>
        </svg>
      </div>
      <p className="font-sans font-semibold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">Back</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
      <Frame122 />
      <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[32px] text-white whitespace-nowrap">KSMART Dashboard</p>
      <p className="font-sans font-medium leading-[normal] opacity-70 relative shrink-0 text-[16px] text-white whitespace-nowrap">All the info you need about KSMART Services is right at your fingertips!</p>
    </div>
  );
}

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

function Frame23() {
  return (
    <div className="backdrop-blur-[22.05px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_9.8px_0px_rgba(0,0,0,0.04)]" />
      <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Download, Save, Upload">
        <Group />
      </div>
      <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Export</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame117 />
      <Frame23 />
    </div>
  );
}

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

function InputContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Input Container">
      <p className="font-sans font-medium leading-[24px] relative shrink-0 text-[#232f50] text-[16px] whitespace-nowrap">Upto today</p>
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

function LabelContainer1() {
  return (
    <div className="absolute bg-white content-stretch flex font-sans font-normal gap-[4px] h-[19px] items-start leading-[normal] left-[18px] px-[5px] text-[#153171] text-[14px] top-[-9px] whitespace-nowrap" data-name="Label Container">
      <p className="relative shrink-0">{`Time Period `}</p>
      <p className="relative shrink-0">*</p>
    </div>
  );
}

function HouseName1() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[5px] items-start justify-center left-0 px-[18px] py-[16px] right-0 rounded-[8px] top-1/2" data-name="HouseName">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <InputContainer1 />
      <LabelContainer1 />
    </div>
  );
}

function Subtext1() {
  return <div className="absolute content-stretch flex inset-[87.84%_0_0_63.92%] items-start px-[4px]" data-name="Subtext" />;
}

function InputContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Input Container">
      <p className="font-sans font-medium leading-[24px] relative shrink-0 text-[#232f50] text-[16px] whitespace-nowrap">Building Permissions</p>
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

function LabelContainer2() {
  return (
    <div className="absolute bg-white content-stretch flex font-sans font-normal gap-[4px] h-[19px] items-start leading-[normal] left-[18px] px-[5px] text-[#153171] text-[14px] top-[-9px] whitespace-nowrap" data-name="Label Container">
      <p className="relative shrink-0">Module</p>
      <p className="relative shrink-0">*</p>
    </div>
  );
}

function HouseName2() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[5px] items-start justify-center left-0 px-[18px] py-[16px] right-0 rounded-[8px] top-1/2" data-name="HouseName">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <InputContainer2 />
      <LabelContainer2 />
    </div>
  );
}

function Subtext2() {
  return <div className="absolute content-stretch flex inset-[87.84%_0_0_63.92%] items-start px-[4px]" data-name="Subtext" />;
}

function InputContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Input Container">
      <p className="font-sans font-normal leading-[normal] opacity-30 relative shrink-0 text-[#3c4449] text-[16px] whitespace-nowrap">Select</p>
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

function LabelContainer3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[19px] items-start left-[18px] px-[5px] text-[#153171] text-[14px] top-[-9px] whitespace-nowrap" data-name="Label Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0">Sub-Module</p>
      <p className="font-sans font-normal leading-[normal] relative shrink-0">*</p>
    </div>
  );
}

function HouseName3() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[5px] items-start justify-center left-0 px-[18px] py-[16px] right-0 rounded-[8px] top-1/2" data-name="HouseName">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <InputContainer3 />
      <LabelContainer3 />
    </div>
  );
}

function Subtext3() {
  return <div className="absolute content-stretch flex inset-[87.84%_0_0_63.92%] items-start px-[4px]" data-name="Subtext" />;
}

function InputContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Input Container">
      <p className="font-sans font-normal leading-[normal] opacity-30 relative shrink-0 text-[#3c4449] text-[16px] whitespace-nowrap">Select</p>
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

function LabelContainer4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[19px] items-start left-[18px] px-[5px] text-[#153171] text-[14px] top-[-9px] whitespace-nowrap" data-name="Label Container">
      <p className="font-sans font-medium leading-[20px] relative shrink-0">Service</p>
      <p className="font-sans font-normal leading-[normal] relative shrink-0">*</p>
    </div>
  );
}

function HouseName4() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col gap-[5px] items-start justify-center left-0 px-[18px] py-[16px] right-0 rounded-[8px] top-1/2" data-name="HouseName">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <InputContainer4 />
      <LabelContainer4 />
    </div>
  );
}

function Subtext4() {
  return <div className="absolute content-stretch flex inset-[87.84%_0_0_63.92%] items-start px-[4px]" data-name="Subtext" />;
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-end min-h-px min-w-px relative">
      <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Input Text">
        <HouseName />
        <Subtext />
      </div>
      <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Input Text">
        <HouseName1 />
        <Subtext1 />
      </div>
      <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Input Text">
        <HouseName2 />
        <Subtext2 />
      </div>
      <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Input Text">
        <HouseName3 />
        <Subtext3 />
      </div>
      <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Input Text">
        <HouseName4 />
        <Subtext4 />
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full z-[4]" data-name="Filter">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0">
      <p className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-[transparent] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(137.587deg, rgb(0, 178, 235) 90.168%, rgb(0, 51, 144) 89.561%)" }}>
        Upto Today
      </p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-[#f39c13] content-stretch flex items-end justify-end px-[12px] py-[8px] relative rounded-[8px] shrink-0">
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white whitespace-nowrap">Building Permissions</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <Frame121 />
      <Frame120 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="bg-clip-text font-sans font-bold leading-[normal] relative shrink-0 text-[24px] text-[transparent] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(134.486deg, rgb(0, 178, 235) 90.168%, rgb(0, 51, 144) 89.561%)" }}>
        Kerala
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame127 />
      <Frame119 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative w-full">
          <Frame125 />
        </div>
      </div>
    </div>
  );
}

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
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[16px] whitespace-nowrap">
            <p className="leading-[22px]">File Status</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group1() {
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
            <Group1 />
          </div>
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[16px] whitespace-nowrap">
            <p className="leading-[22px]">Finance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
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
            <Group2 />
          </div>
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[16px] whitespace-nowrap">
            <p className="leading-[22px]">Digital Health</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#e8eff4] content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-clip relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-[519px]">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[rgba(255,255,255,0.32)] content-stretch flex items-center p-[8px] relative rounded-[62px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Folders/folder-blank">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p1db35b00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2f36e380} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p3ba35d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame61 />
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22px]">{`Total Received `}</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[4px] relative shrink-0">
      <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] text-white whitespace-nowrap">
        <p className="leading-[38px]">51,251</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Citizen Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">25,251</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Other Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">26,000</p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-[#1ebe72] h-[173px] relative shrink-0 w-full" data-name="Column">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+68.31px)] top-[-18.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
          <Frame65 />
          <Frame73 />
          <Frame74 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center py-[8px] relative size-full">
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">View More Details</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Group">
                <path d={svgPaths.pc6c9d80} id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[310px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Column3 />
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[rgba(255,255,255,0.32)] content-stretch flex items-center p-[8px] relative rounded-[62px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Folders/folder-blank">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p1db35b00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2f36e380} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p3ba35d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame62 />
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22px]">Disposed</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame68 />
    </div>
  );
}

function InterfaceEssentialInfoInfornation() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Interface, Essential/Info, Infornation">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Interface, Essential/Info, Infornation">
          <path clipRule="evenodd" d={svgPaths.p27a5ba00} fill="var(--fill-0, #00B2EB)" fillRule="evenodd" id="Path" />
          <path d="M7.71429 10.6068V7.0354H7" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p25fa9180} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#40c5f0] content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] text-white whitespace-nowrap">
        <p className="leading-[20px]">41.5%</p>
      </div>
      <InterfaceEssentialInfoInfornation />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[4px] relative shrink-0">
      <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] text-white whitespace-nowrap">
        <p className="leading-[38px]">21,251</p>
      </div>
      <Frame55 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Citizen Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">13,657</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Other Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">7,594</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Column4() {
  return (
    <div className="bg-[#009fd2] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Column">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+68.31px)] top-[-18.34px] w-[554.721px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
            </div>
          </div>
          <Frame66 />
          <Frame75 />
          <Frame76 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center py-[8px] relative shrink-0 w-full">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">View More Details</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.pc6c9d80} id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[310px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Column4 />
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[rgba(255,255,255,0.32)] content-stretch flex items-center p-[8px] relative rounded-[62px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Folders/folder-blank">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p1db35b00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2f36e380} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p3ba35d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame63 />
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22px]">Under Process</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame70 />
    </div>
  );
}

function InterfaceEssentialInfoInfornation1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Interface, Essential/Info, Infornation">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Interface, Essential/Info, Infornation">
          <path clipRule="evenodd" d={svgPaths.p27a5ba00} fill="var(--fill-0, #7B61FF)" fillRule="evenodd" id="Path" />
          <path d="M7.71429 10.6068V7.0354H7" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p25fa9180} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[rgba(255,255,255,0.32)] content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] text-white whitespace-nowrap">
        <p className="leading-[20px]">25%</p>
      </div>
      <InterfaceEssentialInfoInfornation1 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[4px] relative shrink-0">
      <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] text-white whitespace-nowrap">
        <p className="leading-[38px]">15,000</p>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Citizen Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">10,000</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Other Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">5,000</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Column5() {
  return (
    <div className="bg-[#7b61ff] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Column">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <Frame69 />
          <Frame78 />
          <Frame79 />
          <div className="absolute flex h-[476.999px] items-center justify-center left-0 top-0 w-[431.45px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-39.66deg] scale-y-97 skew-x-[-13.02deg]">
              <div className="bg-white h-[228.507px] opacity-5 w-[427.364px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center py-[8px] relative shrink-0 w-full">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">View More Details</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.pc6c9d80} id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white relative rounded-[12px] self-stretch shrink-0 w-[310px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <Column5 />
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[rgba(255,255,255,0.32)] content-stretch flex items-center p-[8px] relative rounded-[62px] shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Folders/folder-blank">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p1db35b00} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p2f36e380} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path clipRule="evenodd" d={svgPaths.p3ba35d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame64 />
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[22px]">Delayed</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame80 />
    </div>
  );
}

function InterfaceEssentialInfoInfornation2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Interface, Essential/Info, Infornation">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Interface, Essential/Info, Infornation">
          <path clipRule="evenodd" d={svgPaths.p27a5ba00} fill="var(--fill-0, #7B61FF)" fillRule="evenodd" id="Path" />
          <path d="M7.71429 10.6068V7.0354H7" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p25fa9180} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[rgba(255,255,255,0.32)] content-stretch flex gap-[10px] items-center justify-center pl-[8px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] text-white whitespace-nowrap">
        <p className="leading-[20px]">25%</p>
      </div>
      <InterfaceEssentialInfoInfornation2 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[4px] relative shrink-0">
      <div className="flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] text-white whitespace-nowrap">
        <p className="leading-[38px]">15,000</p>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Citizen Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">10,000</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
      <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[14px] text-[rgba(255,255,255,0.78)]">
        <p className="leading-[20px]">Other Files</p>
      </div>
      <div className="flex flex-col font-sans font-semibold justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">5,000</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 w-full whitespace-nowrap">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <Frame72 />
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Column6() {
  return (
    <div className="bg-[#df3a7a] h-[176px] relative shrink-0 w-full" data-name="Column">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative size-full">
          <Frame71 />
          <div className="-translate-y-1/2 absolute flex h-[439.308px] items-center justify-center right-[-104.26px] top-[calc(50%+119.61px)] w-[496.261px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[-32.81deg]">
              <div className="bg-white h-[243.037px] opacity-5 w-[433.769px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center py-[8px] relative shrink-0 w-full">
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[16px] whitespace-nowrap">
        <p className="leading-[22px]">View More Details</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.pc6c9d80} id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[326px]">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Column6 />
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame58 />
      <Frame59 />
      <Frame60 />
      <Frame134 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative w-full">
          <Frame85 />
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#e8eff4] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-full z-[3]">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function InterfaceEssentialChartSquare() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Interface, Essential/Chart, Square">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Interface, Essential/Chart, Square">
          <path d={svgPaths.p3ac02ae0} fill="var(--fill-0, #83DAF6)" id="Rectangle 5730" />
          <path d={svgPaths.p257c2b80} fill="var(--fill-0, #00B2EB)" id="Rectangle 5729" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <InterfaceEssentialChartSquare />
      <div className="capitalize flex flex-col font-sans font-bold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Graphs</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-[8px] relative w-full">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] opacity-70 relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Select Graph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">No. of files that exceed SLI Period</p>
    </div>
  );
}

function Service() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Service">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <Frame />
      </div>
    </div>
  );
}

function Service1() {
  return (
    <div className="h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Service">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[8px] relative size-full">
          <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">File split up based on service</p>
          <div className="relative shrink-0 size-[24px]" data-name="Arrows, Diagrams/Arrow">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Group">
                <path d="M8 10L12 14L16 10" id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Path_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full">
      <Service1 />
    </div>
  );
}

function Services() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Services">
      <Service />
      <Frame133 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full">
      <Frame21 />
      <Services />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[270px]">
      <Frame84 />
      <Frame136 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 flex flex-col font-sans font-bold justify-center ml-0 mt-0 relative row-1 text-[#232f50] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">No. of files that exceed SLI Period</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex h-[28px] items-center relative shrink-0">
      <Group8 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Frame22 />
      <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Graphical representation of the least performing districts and local bodies</p>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Column">
      <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Sort By:</p>
        </div>
        <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Decending</p>
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="Arrows, Diagrams/Arrow">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Group">
              <path d="M8 10L12 14L16 10" id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Path_2" />
            </g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Column8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Column">
      <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Show:</p>
        </div>
        <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Top 20</p>
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="Arrows, Diagrams/Arrow">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Group">
              <path d="M8 10L12 14L16 10" id="Path" stroke="var(--stroke-0, #5C6E93)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Path_2" />
            </g>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Column7 />
      <Column8 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame53 />
      <Frame113 />
    </div>
  );
}

function Column9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] opacity-70 relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Districts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column10() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="Column">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Local Bodies</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#e8eff4] content-stretch flex gap-[4px] h-[36px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[519px]">
      <Column9 />
      <Column10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-sans font-medium h-[338px] items-end justify-between leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] w-[43px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">30,000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">25,000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">20,000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">15,000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">10,000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">5,000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 936 12">
        <g id="Frame 1000002834">
          <path d="M0.5 5.99997L935.5 6.00005" id="Line 47" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="12 12" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 936 12">
        <g id="Frame 1000002834">
          <path d="M0.5 5.99997L935.5 6.00005" id="Line 47" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="12 12" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 936 12">
        <g id="Frame 1000002834">
          <path d="M0.5 5.99997L935.5 6.00005" id="Line 47" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="12 12" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 936 12">
        <g id="Frame 1000002834">
          <path d="M0.5 5.99997L935.5 6.00005" id="Line 47" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="12 12" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 936 12">
        <g id="Frame 1000002834">
          <path d="M0.5 5.99997L935.5 6.00005" id="Line 47" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="12 12" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 936 12">
        <g id="Frame 1000002834">
          <path d="M0.5 5.99997L935.5 6.00005" id="Line 47" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="12 12" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 936 12">
        <g id="Frame 1000002840">
          <path d="M0.5 5.99997L935.5 6.00005" id="Line 43" stroke="var(--stroke-0, #EBEBEB)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[338px] items-start justify-between min-h-px min-w-px relative">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[20]">
      <div className="bg-[#00b2eb] h-[203px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5c6e93] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Ezhamkulam</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[19]">
      <div className="bg-[#00b2eb] h-[203px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Adoor</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[18]">
      <div className="bg-[#00b2eb] h-[193px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thiruv..</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[17]">
      <div className="bg-[#00b2eb] h-[193px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Kollam</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[16]">
      <div className="bg-[#00b2eb] h-[190px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Panoor</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[15]">
      <div className="bg-[#00b2eb] h-[168px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5c6e93] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Vadakara</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[14]">
      <div className="bg-[#00b2eb] h-[153px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#5c6e93] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">{`Thalassery `}</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[13]">
      <div className="bg-[#00b2eb] h-[140px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Wayanad</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[12]">
      <div className="bg-[#00b2eb] h-[115px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Kannur</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[11]">
      <div className="bg-[#00b2eb] h-[97px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Kasargod</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[10]">
      <div className="bg-[#00b2eb] h-[75px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Pathanm.</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[9]">
      <div className="bg-[#00b2eb] h-[75px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Alappuz..</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[8]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Ernakulam</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[7]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thrissur</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[6]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thrissur</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[5]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thrissur</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[4]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thrissur</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[3]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thrissur</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[2]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thrissur</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-end min-h-px min-w-px relative z-[1]">
      <div className="bg-[#00b2eb] h-[81px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" />
      <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5c6e93] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Thrissur</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] h-[362px] isolate items-end left-[calc(50%+33px)] px-[12px] top-[3px] w-[942px]">
      <Frame33 />
      <Frame41 />
      <Frame38 />
      <Frame39 />
      <Frame34 />
      <Frame43 />
      <Frame35 />
      <Frame44 />
      <Frame36 />
      <Frame45 />
      <Frame37 />
      <Frame40 />
      <Frame42 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[16px] h-[393px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame24 />
      <Frame32 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full">
      <Frame114 />
      <Frame54 />
      <Frame115 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[32px] relative size-full">
          <Frame86 />
        </div>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-[#f6f9fb] h-[606px] relative rounded-[16px] shrink-0 w-full z-[1]">
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Frame137 />
        <Frame83 />
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] isolate items-start relative shrink-0 w-full">
      <Filter />
      <Frame97 />
      <Frame135 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="mb-[-214px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[32px] relative w-full">
        <Frame118 />
        <Frame124 />
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[214px] relative shrink-0 w-full">
      <VariantBackground />
      <Frame123 />
    </div>
  );
}

function TradeLicense() {
  return (
    <div className="absolute bg-[#e8eff4] content-stretch flex flex-col h-[1024px] items-start left-0 opacity-50 overflow-clip shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Trade License-1">
      <Header />
      <Frame126 />
    </div>
  );
}

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

function Group4() {
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

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
      <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Full Screen</p>
    </div>
  );
}

function Group5() {
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

function Frame2() {
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
                <Group3 />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
        <Frame1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Close Button">
        <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
          <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/Delete, Disabled">
                  <Group5 />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Header1() {
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

function Frame130() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0">
      <p className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-[transparent] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(137.587deg, rgb(0, 178, 235) 90.168%, rgb(0, 51, 144) 89.561%)" }}>
        Upto Today
      </p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[#f39c13] content-stretch flex items-end justify-end px-[12px] py-[8px] relative rounded-[8px] shrink-0">
      <p className="font-sans font-bold leading-[32px] relative shrink-0 text-[24px] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] text-white whitespace-nowrap">Building Permissions</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="bg-clip-text font-sans font-bold leading-[normal] relative shrink-0 text-[24px] text-[transparent] text-shadow-[-5px_0px_33.3px_rgba(0,0,0,0.1)] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(134.486deg, rgb(0, 178, 235) 90.168%, rgb(0, 51, 144) 89.561%)" }}>
        Kerala
      </p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[2]">
      <Frame129 />
      <Frame132 />
    </div>
  );
}

function Column11() {
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
          <Column11 />
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

function Column12() {
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
          <Column12 />
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

function Column13() {
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
          <Column13 />
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

function Column14() {
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
          <Column14 />
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

function Column15() {
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
          <Column15 />
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

function Column16() {
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
          <Column16 />
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

function Column17() {
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
          <Column17 />
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

function Frame89() {
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

function Column18() {
  return (
    <div className="bg-[#e7eff6] content-stretch flex h-[32px] items-center overflow-clip relative rounded-[4px] shrink-0 w-[600px]" data-name="Column">
      <TableHeaderColumn />
      <TableHeaderColumn1 />
    </div>
  );
}

function Group6() {
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
          <Group6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group7() {
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
          <Group7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame116() {
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
      <Column18 />
      <Frame116 />
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

function Frame87() {
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

function Frame88() {
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
          <Frame87 />
          <Frame88 />
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

function Frame90() {
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

function Frame91() {
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
          <Frame90 />
          <Frame91 />
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

function Frame92() {
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

function Frame93() {
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
          <Frame92 />
          <Frame93 />
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

function Frame94() {
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

function Frame95() {
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
          <Frame94 />
          <Frame95 />
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

function Frame96() {
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

function Frame98() {
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
          <Frame96 />
          <Frame98 />
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

function Frame99() {
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

function Frame100() {
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
          <Frame99 />
          <Frame100 />
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

function Frame101() {
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

function Frame102() {
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
          <Frame101 />
          <Frame102 />
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

function Frame103() {
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

function Frame104() {
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
          <Frame103 />
          <Frame104 />
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

function Frame105() {
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

function Frame106() {
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
          <Frame105 />
          <Frame106 />
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

function Frame107() {
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

function Frame108() {
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
          <Frame107 />
          <Frame108 />
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

function Frame109() {
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

function Frame110() {
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
          <Frame109 />
          <Frame110 />
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

function Frame111() {
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

function Frame112() {
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
          <Frame111 />
          <Frame112 />
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

function Column19() {
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
      <Column19 />
    </div>
  );
}

function StatisticsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] isolate items-center min-h-px min-w-px relative w-full z-[1]" data-name="Statistics Container">
      <Frame89 />
      <TableContainer />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white h-[841px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[32px] isolate items-center p-[24px] relative size-full">
          <Frame128 />
          <StatisticsContainer />
        </div>
      </div>
    </div>
  );
}

function TotalFiles() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f2f6ff] content-stretch flex flex-col gap-[2px] items-center left-1/2 overflow-clip rounded-[8px] top-[calc(50%+0.5px)] w-[1280px]" data-name="Total Files">
      <Header1 />
      <Content />
    </div>
  );
}

export default function Frame138() {
  return (
    <div className="relative size-full">
      <TradeLicense />
      <TotalFiles />
    </div>
  );
}