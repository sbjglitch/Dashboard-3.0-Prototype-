import React from "react";

interface KPICardProps {
  label: string;
  value: string;
}

function KPICard({ label, value }: KPICardProps) {
  return (
    <div className="bg-white rounded-[8px] border border-[#E5E7EB] p-[16px] flex flex-col gap-1 shadow-sm">
      <span className="text-sm text-[#6B7280] font-sans font-medium">{label}</span>
      <span className="text-2xl font-bold text-[#111827] font-sans">{value}</span>
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

      {/* KPI Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        {kpis.map((kpi, index) => (
          <KPICard key={index} label={kpi.label} value={kpi.value} />
        ))}
      </div>
    </div>
  );
}
