import React from "react";

export interface StatCardProps {
  label: string;
  value: string;
  subValue: string;
  subLabel: string;
  otherValue: string;
  otherLabel: string;
  percentage?: string;
  color: string;
  onClick?: () => void;
}

export function StatCard({
  label,
  value,
  subValue,
  subLabel,
  otherValue,
  otherLabel,
  percentage,
  color,
  onClick,
}: StatCardProps) {
  return (
    <div 
      className="bg-white border border-[#e8eff4] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:shadow-md transition-shadow min-h-[140px] sm:h-[156px] flex flex-col p-[16px] justify-between" 
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <div className={`${color} w-[12px] h-[12px] rounded-sm`} />
          <span className="font-sans font-semibold text-[16px] text-[#232f50] leading-[22px]">{label}</span>
        </div>
        <div className="p-[4px]">
          <svg className="w-[16px] h-[16px] text-[#8d8d8d]" fill="none" viewBox="0 0 16 16" stroke="currentColor">
            <path d="M6 12L10 8L6 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      
      <div className="flex items-center gap-[16px] py-[4px]">
        <span className="font-sans font-bold text-[30px] text-[#232f50] leading-[38px]">{value}</span>
        {percentage && (
          <div className="bg-[#f0f4fb] flex items-center gap-[6px] px-[8px] py-[4px] rounded-[16px]">
            <span className="font-sans font-semibold text-[14px] text-[#09327b] leading-[20px]">{percentage}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between w-full pt-[8px] border-t border-[#e8eff4]">
        <div className="flex flex-col gap-[2px] items-start">
          <span className="font-sans font-medium text-[12px] text-[#5c6e93] leading-[16px]">{subLabel}</span>
          <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{subValue}</span>
        </div>
        <div className="flex flex-col gap-[2px] items-end">
          <span className="font-sans font-medium text-[12px] text-[#5c6e93] leading-[16px]">{otherLabel}</span>
          <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{otherValue}</span>
        </div>
      </div>
    </div>
  );
}
