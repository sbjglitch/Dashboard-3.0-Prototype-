import React, { useState } from "react";
import { GraphPanelV3 } from "../v3/GraphPanelV3";
import { DashboardBarChart } from "./charts/DashboardBarChart";
import { DashboardPieChart } from "./charts/DashboardPieChart";
import { CHART_PALETTE, TEXT_MUTED } from "../constants/chartStyles";

const DCB_DATA = {
  arrear:  { demand: 17500, collection: 10200, balance: 13500 },
  current: { demand: 17500, collection: 10200, balance: 13200 },
  total:   { demand: 22800, collection: 13000, balance: 17200 },
};
const DCB_MAX = 30000;

const DCB_SERIES = [
  { dataKey: "demand", label: "Demand", color: CHART_PALETTE[2] },
  { dataKey: "collection", label: "Collection", color: CHART_PALETTE[1] },
  { dataKey: "balance", label: "Balance", color: CHART_PALETTE[3] },
];

const SUCCESS_FAILURE_DATA = [
  { label: "Success Count", pct: 68, color: CHART_PALETTE[2] },
  { label: "Failure Count", pct: 32, color: CHART_PALETTE[5] },
];

const DCB_CHART_DATA = [
  { category: "Arrear", ...DCB_DATA.arrear },
  { category: "Current", ...DCB_DATA.current },
  { category: "Total", ...DCB_DATA.total },
];

function DCBGraph() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col gap-[16px] mb-[16px]">
        <h3 className="font-sans font-semibold text-[20px] text-[#232f50] leading-[normal] capitalize">
          Demand, Collection &amp; Balance Graph
        </h3>
        <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[normal] capitalize">
          District-wise comparison of demand raised, amount collected, and outstanding balance.
        </p>
      </div>

      <div className="flex-1 min-h-0 pt-4">
        <DashboardBarChart
          data={DCB_CHART_DATA}
          series={DCB_SERIES.map(s => ({ dataKey: s.dataKey, name: s.label, color: s.color }))}
          xAxisKey="category"
          height={400}
        />
      </div>
    </div>
  );
}

function BuildingStatisticsGraph({ selectedLocalBody }: { selectedLocalBody: string }) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <div className="flex flex-wrap items-center gap-[16px]">
          <h3 className="font-sans font-semibold text-[20px] text-[#232f50] leading-[normal] capitalize">
            Success vs Failure
          </h3>
          <div className="border border-[#c0c7cd] bg-[#f2f6ff] text-[#323232] font-semibold text-[14px] md:text-[16px] px-[12px] py-[8px] rounded-[4px]">
            {selectedLocalBody}
          </div>
        </div>
        <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[normal] capitalize">
          Graphical representation of the service wise percentage.
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-[24px] md:gap-[48px]">
        <div className="w-[320px]">
          <DashboardPieChart
            data={SUCCESS_FAILURE_DATA.map((item) => ({
              label: item.label,
              value: item.pct,
              color: item.color,
            }))}
            height={300}
            showLegend={false}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          {SUCCESS_FAILURE_DATA.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-[10px] px-[12px] py-[8px] rounded-[8px] hover:bg-[#f6f9fb] transition-colors cursor-default"
            >
              <span
                className="w-[14px] h-[14px] rounded-[4px] shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-sans font-medium text-[14px] text-[#232f50] whitespace-nowrap">
                {item.label} <span style={{ color: TEXT_MUTED }}>({item.pct}%)</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TABS = [
  "DCB Graph",
  "Building Statistics",
];

export function PropertyTaxGraphs({ selectedLocalBody }: { selectedLocalBody: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <GraphPanelV3
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 0 && <DCBGraph />}
      {activeTab === 1 && <BuildingStatisticsGraph selectedLocalBody={selectedLocalBody} />}
    </GraphPanelV3>
  );
}
