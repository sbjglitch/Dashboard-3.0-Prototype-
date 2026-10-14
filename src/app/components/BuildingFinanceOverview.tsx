import React from "react";
import { Coins, FileCheck, Layers, RefreshCw, Scale } from "lucide-react";
import { KpiCardV3 } from "../v3/KpiCardV3";

export function BuildingFinanceOverview({ onViewMore }: { onViewMore: () => void }) {
  const kpis = [
    { label: "Application fees", value: "1,25,000", Icon: FileCheck, tone: "#00a78e" },
    { label: "Permit Fees", value: "8,40,000", Icon: Coins, tone: "#00b2eb" },
    { label: "Regularisation Fees", value: "2,15,000", Icon: Scale, tone: "#7b61ff" },
    { label: "Additional FSI", value: "4,50,000", Icon: Layers, tone: "#f5841f" },
    { label: "Renewal Fees", value: "95,000", Icon: RefreshCw, tone: "#df3a7a" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Area */}
      <div className="flex justify-between items-center mb-[16px]">
        <h3 className="text-base font-semibold text-[#111827] font-sans">Financial Overview</h3>
        <button 
          onClick={onViewMore}
          className="text-sm text-[#2563EB] font-medium hover:underline bg-transparent px-2 py-1 rounded transition-all"
        >
          View More Details
        </button>
      </div>

      {/* KPIs — single horizontal row, equal-width cards, same height; scroll on narrow viewports */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
        {kpis.map((kpi) => (
          <KpiCardV3
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            prefix="₹"
            Icon={kpi.Icon}
            tone={kpi.tone}
          />
        ))}
      </div>
    </div>
  );
}
