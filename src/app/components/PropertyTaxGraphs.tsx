import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Shared floating tooltip ──────────────────────────────────────────────────
interface TipState { label: string; rows: { color: string; name: string; value: string }[] }

function GraphTooltip({ tip, mouse }: { tip: TipState; mouse: { x: number; y: number } }) {
  return (
    <div className="fixed z-50 pointer-events-none" style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%, -100%) translateY(-12px)" }}>
      <div className="relative">
        <div className="bg-white border border-[#e8eff4] rounded-[8px] p-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] whitespace-nowrap flex flex-col gap-[6px] min-w-[130px] relative z-10">
          <span className="font-sans font-semibold text-[13px] text-[#232f50] border-b border-[#e8eff4] pb-[8px]">{tip.label}</span>
          <div className="flex flex-col gap-[4px]">
            {tip.rows.map((r) => (
              <div key={r.name} className="flex items-center justify-between gap-[16px]">
                <span className="font-sans text-[12px] text-[#5c6e93] flex items-center gap-[6px]">
                  <div className="w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                  {r.name}
                </span>
                <span className="font-sans font-semibold text-[12px] text-[#232f50]">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white border-b border-r border-[#e8eff4] rotate-45 z-0" />
      </div>
    </div>
  );
}

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
  onBarEnter,
  onBarLeave,
}: {
  label: string;
  demand: number;
  collection: number;
  balance: number;
  onBarEnter: (bar: { label: string; name: string; color: string; value: number }) => void;
  onBarLeave: () => void;
}) {
  const barH = (v: number) => `${(v / DCB_MAX) * 100}%`;
  return (
    <div className="flex flex-col gap-[16px] items-center flex-1 min-w-0 justify-end">
      <div className="flex gap-[8px] md:gap-[16px] items-end w-full h-[280px] md:h-[320px]">
        {[
          { key: "demand", val: demand, color: "#56ba85", name: "Demand" },
          { key: "collection", val: collection, color: "#00b2eb", name: "Collection" },
          { key: "balance", val: balance, color: "#7b61ff", name: "Balance" },
        ].map((bar) => (
          <div key={bar.key} className="flex-1 flex flex-col items-center justify-end h-full">
            <div
              className="w-full rounded-t-[4px] transition-all hover:opacity-80 cursor-default"
              style={{ height: barH(bar.val), backgroundColor: bar.color }}
              onMouseEnter={() => onBarEnter({ label, name: bar.name, color: bar.color, value: bar.val })}
              onMouseLeave={onBarLeave}
            />
            <span className="text-[11px] md:text-[12px] text-[#5c6e93] font-sans font-medium mt-[8px] text-center">
              {bar.name}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-[#f2f6ff] rounded-[4px] py-[4px] w-full text-center">
        <span className="font-sans font-bold text-[12px] text-[#5c6e93]">{label}</span>
      </div>
    </div>
  );
}

function DCBGraph() {
  const [sortBy, setSortBy] = useState("Ascending");
  const [tooltip, setTooltip] = useState<TipState | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
  const handleBarEnter = (bar: { label: string; name: string; color: string; value: number }) => {
    setTooltip({ label: `${bar.label} — ${bar.name}`, rows: [{ color: bar.color, name: bar.name, value: bar.value.toLocaleString() }] });
  };

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
        <button
          type="button"
          className="flex items-center gap-[16px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
          onClick={() => setSortBy(sortBy === "Ascending" ? "Descending" : "Ascending")}
        >
          <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Sort By:</span>
          <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{sortBy}</span>
          <ChevronDown className="w-4 h-4 text-[#5c6e93]" />
        </button>
      </div>

      <div className="flex-1 flex gap-[16px] min-h-0">
        <div className="flex flex-col justify-between items-end text-[12px] text-[#5c6e93] font-sans font-medium w-[43px] shrink-0 h-[280px] md:h-[320px]">
          {yLabels.map((v) => (
            <span key={v}>{v.toLocaleString()}</span>
          ))}
        </div>

        <div className="flex-1 relative min-w-0" onMouseMove={handleMouseMove}>
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0 h-[280px] md:h-[320px]">
            {yLabels.map((v) => (
              <div key={v} className="w-full h-px border-b border-dashed border-[#e8eff4]" />
            ))}
          </div>

          <div className="relative z-10 flex gap-[40px] md:gap-[80px] lg:gap-[120px] items-end justify-center px-[12px] w-full">
            <DCBBarGroup label="Arrear" {...DCB_DATA.arrear} onBarEnter={handleBarEnter} onBarLeave={() => setTooltip(null)} />
            <DCBBarGroup label="Current" {...DCB_DATA.current} onBarEnter={handleBarEnter} onBarLeave={() => setTooltip(null)} />
            <DCBBarGroup label="Total" {...DCB_DATA.total} onBarEnter={handleBarEnter} onBarLeave={() => setTooltip(null)} />
          </div>
          {tooltip && <GraphTooltip tip={tooltip} mouse={mouse} />}
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
  const [tooltip, setTooltip] = useState<TipState | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });

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

        <div className="flex flex-col gap-[8px]" onMouseMove={handleMouseMove}>
          {SUCCESS_FAILURE_DATA.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-[8px] px-[16px] py-[8px] rounded-[6px] hover:bg-[#f6f9fb] transition-colors cursor-default"
              onMouseEnter={() => setTooltip({ label: item.label, rows: [{ color: item.color, name: "Share", value: `${item.pct}%` }] })}
              onMouseLeave={() => setTooltip(null)}
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
          {tooltip && <GraphTooltip tip={tooltip} mouse={mouse} />}
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
