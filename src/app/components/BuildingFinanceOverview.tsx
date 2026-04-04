import React from "react";

interface KPICardProps {
  label: string;
  value: string;
}

function KPICard({ label, value }: KPICardProps) {
  return (
    <div className="flex min-w-[152px] flex-1 basis-0 flex-col gap-1 overflow-hidden rounded-xl border border-[#e8eff4] bg-white p-3 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] sm:p-4">
      <span className="break-words font-sans text-[10px] font-semibold uppercase leading-snug tracking-wide text-[#6a7282] sm:text-xs">
        {label}
      </span>
      <span className="mt-auto font-sans text-lg font-semibold tabular-nums leading-tight tracking-tight text-[#232f50] sm:text-[22px]">
        {value}
      </span>
    </div>
  );
}

export function BuildingFinanceOverview({ onViewMore }: { onViewMore: () => void }) {
  const kpis = [
    { label: "Application fees", value: "₹ 1,25,000" },
    { label: "Permit Fees", value: "₹ 8,40,000" },
    { label: "Regularisation Fees", value: "₹ 2,15,000" },
    { label: "Additional FSI", value: "₹ 4,50,000" },
    { label: "Renewal Fees", value: "₹ 95,000" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-[16px]">
        <h3 className="text-base font-bold text-[#111827] font-sans">Financial Overview</h3>
        <button 
          onClick={onViewMore}
          className="text-sm text-[#2563EB] font-medium hover:underline bg-transparent px-2 py-1 rounded transition-all"
        >
          View More Details
        </button>
      </div>

      {/* KPIs — single horizontal row, equal-width cards, same height; scroll on narrow viewports */}
      <div className="flex flex-nowrap items-stretch gap-3 md:gap-4 overflow-x-auto pb-1">
        {kpis.map((kpi) => (
          <KPICard key={kpi.label} label={kpi.label} value={kpi.value} />
        ))}
      </div>
    </div>
  );
}
