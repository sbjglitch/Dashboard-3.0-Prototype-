import React, { useState } from "react";
import svgPaths from "../../imports/svg-4i5smnjigf";

interface FinanceCardProps {
  label: string;
  value: string;
  rate?: string;
  rateLabel?: string;
  color: string;
  icon: React.ReactNode;
  diagonalTranslate?: string;
}

function FinanceCard({ label, value, rate, rateLabel, color, icon, diagonalTranslate = "left-[calc(50%+68.64px)] top-[-18.34px]" }: FinanceCardProps) {
  return (
    <div className={`flex-[1_0_0] min-h-[160px] min-w-0 sm:min-w-[300px] relative rounded-[12px] overflow-hidden ${color} shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]`}>
      <div className="-translate-x-1/2 absolute flex h-[476.999px] items-center justify-center left-[calc(50%+68.64px)] top-[-18.34px] w-[554.721px] pointer-events-none">
        <div className="flex-none rotate-[-32.81deg]">
          <div className="bg-white h-[243.037px] opacity-5 w-[503.326px]" />
        </div>
      </div>
      
      <div className="relative flex flex-col h-full p-[24px] justify-between z-10">
        <div className="flex items-center gap-[8px]">
          <div className="bg-[rgba(255,255,255,0.32)] p-[8px] rounded-full flex items-center justify-center">
            {icon}
          </div>
          <span className="font-sans font-bold text-[16px] text-white leading-tight">{label}</span>
        </div>
        
        <div className="flex items-end justify-between mt-[16px]">
          <span className="font-sans font-bold text-[32px] text-white tracking-[1.28px] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.08)] leading-tight">
            {value}
          </span>
          
          {rate && (
            <div className="bg-white flex gap-[8px] items-center p-[8px] rounded-[8px] shadow-[0px_4px_6px_rgba(0,0,0,0.08)]">
              <span className="font-sans text-[12px] text-[#5c6e93] leading-none">{rateLabel}</span>
              <span className={`font-sans font-extrabold text-[16px] leading-none ${color.replace('bg-', 'text-')}`}>
                {rate}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FinanceModule({ onViewMore, hideTabs }: { onViewMore: () => void; hideTabs?: boolean }) {
  const [activeSubTab, setActiveSubTab] = useState<"ePayment" | "ePos">("ePayment");

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Sub Tab Header */}
      <div className="flex items-center justify-between w-full">
        {!hideTabs && (
          <div className="bg-[#f2f6ff] flex gap-[4px] p-[4px] rounded-[8px] w-fit">
            <button
              onClick={() => setActiveSubTab("ePayment")}
              className={`flex items-center gap-[12px] px-[24px] py-[8px] rounded-[8px] transition-all ${
                activeSubTab === "ePayment"
                  ? "bg-white shadow-[0px_4.883px_42px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
                  : "text-[#232f50] opacity-50"
              }`}
            >
              <div className="relative size-[20px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.p181de000} fillRule="evenodd" stroke={activeSubTab === "ePayment" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M15.8399 14.1726V10.0042" stroke={activeSubTab === "ePayment" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.pe79fe00} stroke={activeSubTab === "ePayment" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path clipRule="evenodd" d={svgPaths.pa3e1680} fillRule="evenodd" stroke={activeSubTab === "ePayment" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M17.5073 4.1684H10.0042" stroke={activeSubTab === "ePayment" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-sans font-semibold text-[14px]">E-Payment</span>
            </button>
            
            <button
              onClick={() => setActiveSubTab("ePos")}
              className={`flex items-center gap-[12px] px-[24px] py-[8px] rounded-[8px] transition-all ${
                activeSubTab === "ePos"
                  ? "bg-white shadow-[0px_4.883px_42px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
                  : "text-[#232f50] opacity-50"
              }`}
            >
              <div className="relative size-[20px]">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p8703000} stroke={activeSubTab === "ePos" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M5.25 15.4167H8.91667" stroke={activeSubTab === "ePos" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path clipRule="evenodd" d={svgPaths.p16eab600} fillRule="evenodd" stroke={activeSubTab === "ePos" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M7.5 8.33333H17.5" stroke={activeSubTab === "ePos" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-sans font-semibold text-[14px]">E-POS</span>
            </button>
          </div>
        )}
        {hideTabs && <div />}

        <button 
          onClick={onViewMore}
          className="bg-white border border-[#dedede] flex items-center gap-[10px] pl-[16px] pr-[8px] py-[10px] rounded-[8px] shadow-[0px_1px_0px_0px_#dedede,0px_4px_3.8px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors"
        >
          <span className="font-sans font-semibold text-[14px] text-[#323232]">View More Details</span>
          <div className="size-[16px]">
            <svg fill="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p1f857780} fillRule="evenodd" stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M10 6L6 10" stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M7 6H10V9" stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="flex flex-col lg:flex-row gap-[24px]">
        <FinanceCard
          label="Total Amount"
          value={activeSubTab === "ePayment" ? "51,251" : "32,840"}
          color="bg-[#009fd2]"
          icon={
            <div className="size-[16px]">
              <svg fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p24203be0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M9.33333 3.33333V8.50667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p2e352180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p313cbb80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p28323680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p1eade080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
        />
        
        <FinanceCard
          label="Success Count"
          value={activeSubTab === "ePayment" ? "21,251" : "18,420"}
          rate={activeSubTab === "ePayment" ? "54%" : "56%"}
          rateLabel="Success Rate"
          color="bg-[#00a78e]"
          icon={
            <div className="size-[16px]">
              <svg fill="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p31259600} fill="white" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p1018c900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p25493340} stroke="#00A78E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
        />
        
        <FinanceCard
          label="Failure Count"
          value={activeSubTab === "ePayment" ? "15,000" : "8,200"}
          rate={activeSubTab === "ePayment" ? "54%" : "25%"}
          rateLabel="Failure Rate"
          color="bg-[#df3a7a]"
          icon={
            <div className="size-[16px]">
              <svg fill="none" viewBox="0 0 16 16">
                <rect fill="white" height="9.33722" rx="3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="9.33722" x="4.66832" y="4.66863" />
                <path d={svgPaths.pafc5700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.pff27900} stroke="#DF3A7A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p29a63700} stroke="#DF3A7A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
        />
      </div>
    </div>
  );
}
