import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  CHART_PALETTE,
  Legend,
  TEXT_MUTED,
  barChartBaseProps,
  pieChartBaseProps,
  pieSeriesGeometry,
  xAxisBand,
  yAxisLinear,
} from "../constants/chartStyles";

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

      <div className="flex-1 min-h-0">
        <BarChart
          {...barChartBaseProps}
          dataset={DCB_CHART_DATA}
          xAxis={[xAxisBand("category")]}
          yAxis={[yAxisLinear(DCB_MAX)]}
          series={DCB_SERIES}
        />
      </div>

      <div className="mt-[8px]">
        <Legend items={DCB_SERIES.map((s) => ({ label: s.label, color: s.color }))} />
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
        <PieChart
          {...pieChartBaseProps}
          width={320}
          height={300}
          series={[{
            ...pieSeriesGeometry,
            outerRadius: 140,
            paddingAngle: 3,
            data: SUCCESS_FAILURE_DATA.map((item, i) => ({
              id: i,
              value: item.pct,
              label: item.label,
              color: item.color,
            })),
          }]}
        />

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
    <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:h-[606px] w-full shrink-0 p-[16px]">
      <div className="w-full lg:w-[270px] shrink-0 flex flex-col gap-[16px]">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[32px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d="M28 16.8678C28 19.9915 24.5796 21.9098 21.9142 20.2809L21.1235 19.7977C19.8234 19.0032 18.1848 19.0163 16.8975 19.8316L10.1402 24.1112C7.47694 25.7979 4 23.8844 4 20.7319V19.5V8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8L28 16.8678Z" fill="#83DAF6" />
              <path d="M4 19.5L10.5382 15.1412C12.001 14.166 13.9292 14.2603 15.2899 15.3736L16.358 16.2475C17.6468 17.3019 19.454 17.4477 20.8951 16.6134L28 12.5V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24L4 19.5Z" fill="#00B2EB" />
            </svg>
          </div>
          <span className="font-sans font-bold text-[16px] text-[#232f50]">Graphs</span>
        </div>

        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] opacity-70 relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap px-[4px] py-[8px]">
            <p className="leading-[20px]">Select Graph</p>
          </div>
          {TABS.map((tab, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`content-stretch flex items-start p-[16px] relative w-full text-left rounded-[8px] transition-colors cursor-pointer ${
                activeTab === idx
                  ? "bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4]"
                  : "hover:bg-[#e8eff4]/50 border border-transparent"
              }`}
            >
              <span
                className={`flex-[1_0_0] font-sans leading-[20px] min-h-px min-w-px relative text-[14px] ${
                  activeTab === idx ? "font-semibold text-[#232f50]" : "font-medium text-[#232f50]"
                }`}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white flex-[1_0_0] h-full relative rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px] min-h-[400px]">
        {activeTab === 0 && <DCBGraph />}
        {activeTab === 1 && <BuildingStatisticsGraph selectedLocalBody={selectedLocalBody} />}
      </div>
    </div>
  );
}
