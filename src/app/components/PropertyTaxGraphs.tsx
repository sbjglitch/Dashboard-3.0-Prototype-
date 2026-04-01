import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DCB_DATA = {
  arrear:  { demand: 17500, collection: 10200, balance: 13500 },
  current: { demand: 17500, collection: 10200, balance: 13200 },
  total:   { demand: 22800, collection: 13000, balance: 17200 },
};
const DCB_MAX = 30000;

const SUCCESS_FAILURE_DATA = [
  { label: "Success Count", pct: 68, color: "#00c49f" },
  { label: "Failure Count", pct: 32, color: "#e83a7a" },
];

const DONUT_SEGMENTS = [
  { pct: 22, color: "#00c49f" },
  { pct: 18, color: "#e83a7a" },
  { pct: 15, color: "#00b2eb" },
  { pct: 12, color: "#f5a623" },
  { pct: 10, color: "#7b61ff" },
  { pct: 23, color: "#56ba85" },
];

function DCBBarGroup({
  label,
  demand,
  collection,
  balance,
}: {
  label: string;
  demand: number;
  collection: number;
  balance: number;
}) {
  const barH = (v: number) => `${(v / DCB_MAX) * 100}%`;
  return (
    <div className="flex flex-col gap-[16px] items-center flex-1 min-w-0 justify-end">
      <div className="flex gap-[8px] md:gap-[16px] items-end w-full h-[280px] md:h-[320px]">
        <div className="flex-1 flex flex-col items-center justify-end h-full">
          <div
            className="w-full bg-[#56ba85] rounded-t-[4px] transition-all"
            style={{ height: barH(demand) }}
          />
          <span className="text-[11px] md:text-[12px] text-[#5c6e93] font-sans font-medium mt-[8px] text-center">
            Demand
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-end h-full">
          <div
            className="w-full bg-[#00b2eb] rounded-t-[4px] transition-all"
            style={{ height: barH(collection) }}
          />
          <span className="text-[11px] md:text-[12px] text-[#5c6e93] font-sans font-medium mt-[8px] text-center">
            Collection
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-end h-full">
          <div
            className="w-full bg-[#7b61ff] rounded-t-[4px] transition-all"
            style={{ height: barH(balance) }}
          />
          <span className="text-[11px] md:text-[12px] text-[#5c6e93] font-sans font-medium mt-[8px] text-center">
            Balance
          </span>
        </div>
      </div>
      <div className="bg-[#f2f6ff] rounded-[4px] py-[4px] w-full text-center">
        <span className="font-sans font-bold text-[12px] text-[#5c6e93]">{label}</span>
      </div>
    </div>
  );
}

function DCBGraph() {
  const [sortBy, setSortBy] = useState("Ascending");

  const yLabels = [30000, 25000, 20000, 15000, 10000, 5000, 0];

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[24px]">
        <div className="flex flex-col gap-[16px]">
          <h3 className="font-sans font-semibold text-[20px] text-[#232f50] leading-[normal] capitalize">
            Demand, Collection &amp; Balance Graph
          </h3>
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[normal] capitalize">
            Occupancy wise split up of application under general + self certified
          </p>
        </div>
        <div
          className="flex items-center gap-[16px] bg-[#f2f6ff] rounded-[12px] px-[16px] py-[8px] cursor-pointer hover:bg-[#e8eff4] transition-colors shrink-0"
          onClick={() => setSortBy(sortBy === "Ascending" ? "Descending" : "Ascending")}
        >
          <span className="font-sans font-semibold text-[14px] text-[#232f50]">Sort By:</span>
          <span className="font-sans font-semibold text-[14px] text-[#232f50] opacity-70">{sortBy}</span>
          <ChevronDown className="w-[24px] h-[24px] text-[#232f50] opacity-70" />
        </div>
      </div>

      <div className="flex-1 flex gap-[16px] min-h-0">
        <div className="flex flex-col justify-between items-end text-[12px] text-[#5c6e93] font-sans font-medium w-[43px] shrink-0 h-[280px] md:h-[320px]">
          {yLabels.map((v) => (
            <span key={v}>{v.toLocaleString()}</span>
          ))}
        </div>

        <div className="flex-1 relative min-w-0">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 h-[280px] md:h-[320px]">
            {yLabels.map((v) => (
              <div key={v} className="w-full h-px border-b border-dashed border-[#e8eff4]" />
            ))}
          </div>

          <div className="relative z-10 flex gap-[40px] md:gap-[80px] lg:gap-[120px] items-end justify-center px-[12px] w-full">
            <DCBBarGroup label="Arrear" {...DCB_DATA.arrear} />
            <DCBBarGroup label="Current" {...DCB_DATA.current} />
            <DCBBarGroup label="Total" {...DCB_DATA.total} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[24px] mt-[24px]">
        <div className="flex items-center gap-[8px]">
          <div className="w-[12px] h-[12px] rounded-[2px] bg-[#56ba85]" />
          <span className="font-sans font-medium text-[13px] text-[#5c6e93]">Demand</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="w-[12px] h-[12px] rounded-[2px] bg-[#00b2eb]" />
          <span className="font-sans font-medium text-[13px] text-[#5c6e93]">Collection</span>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="w-[12px] h-[12px] rounded-[2px] bg-[#7b61ff]" />
          <span className="font-sans font-medium text-[13px] text-[#5c6e93]">Balance</span>
        </div>
      </div>
    </div>
  );
}

function BuildingStatisticsGraph({ selectedLocalBody }: { selectedLocalBody: string }) {
  let cumulativePct = 0;
  const conicStops = DONUT_SEGMENTS.map((seg) => {
    const start = cumulativePct;
    cumulativePct += seg.pct;
    return `${seg.color} ${start}% ${cumulativePct}%`;
  }).join(", ");

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

      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[64px]">
        <div
          className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[361px] lg:h-[361px] rounded-full relative shrink-0"
          style={{ background: `conic-gradient(${conicStops})` }}
        >
          <div className="absolute inset-0 m-auto w-[40px] h-[40px] bg-white rounded-full" />
        </div>

        <div className="flex flex-col gap-[8px]">
          {SUCCESS_FAILURE_DATA.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-[8px] px-[16px] py-[8px]"
            >
              <div
                className="w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <div
                  className="w-[10px] h-[10px] rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#383c51] whitespace-nowrap">
                {item.label} {item.pct}%
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
    <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[12px] md:rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:h-[606px] w-full shrink-0 p-0">
      <div className="w-full lg:w-[270px] shrink-0 flex flex-col gap-[16px] p-4 lg:p-[16px]">
        <div className="flex gap-[16px] items-center">
          <div className="w-[32px] h-[32px] relative shrink-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d="M28 16.8678C28 19.9915 24.5796 21.9098 21.9142 20.2809L21.1235 19.7977C19.8234 19.0032 18.1848 19.0163 16.8975 19.8316L10.1402 24.1112C7.47694 25.7979 4 23.8844 4 20.7319V19.5V8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8L28 16.8678Z" fill="#83DAF6" />
              <path d="M4 19.5L10.5382 15.1412C12.001 14.166 13.9292 14.2603 15.2899 15.3736L16.358 16.2475C17.6468 17.3019 19.454 17.4477 20.8951 16.6134L28 12.5V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24L4 19.5Z" fill="#00B2EB" />
            </svg>
          </div>
          <span className="font-sans font-bold text-[16px] text-[#232f50]">Graphs</span>
        </div>

        <div className="flex flex-col gap-[8px] w-full mt-[8px]">
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] opacity-70 px-[12px] mb-[4px]">
            Select Graph
          </p>
          {TABS.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full text-left px-[12px] py-[16px] rounded-[4px] font-sans font-medium text-[14px] transition-colors leading-[20px] ${
                activeTab === idx
                  ? "bg-[#e5f7fd] border border-[#ccf0fa] text-[#09327b] font-semibold"
                  : "text-[#232f50] opacity-70 hover:bg-[#e8eff4]/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white flex-[1_0_0] min-h-[400px] lg:h-full relative rounded-[12px] md:rounded-r-[16px] border-l border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px]">
        {activeTab === 0 && <DCBGraph />}
        {activeTab === 1 && <BuildingStatisticsGraph selectedLocalBody={selectedLocalBody} />}
      </div>
    </div>
  );
}
