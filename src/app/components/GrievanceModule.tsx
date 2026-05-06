import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BarChart } from "@mui/x-charts/BarChart";
import { StatCard } from "./StatCard";
import { FinanceModule } from "./FinanceModule";
import {
  CHART_PALETTE,
  barChartBaseProps,
  xAxisBand,
  yAxisLinear,
} from "../constants/chartStyles";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabId = "fileStatus" | "finance" | "digitalHealth";
type GraphId = "disposal" | "modeOfSubmission";
type SortOrder = "desc" | "asc";

// ─── Dummy Data ───────────────────────────────────────────────────────────────

const KERALA_DISTRICTS = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
  "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad",
  "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod",
];

const h = (s: string) => {
  let v = 0;
  for (let i = 0; i < s.length; i++) v = (Math.imul(31, v) + s.charCodeAt(i)) | 0;
  return Math.abs(v);
};
const rn = (seed: string, min: number, max: number) => min + (h(seed) % (max - min + 1));

const DISTRICT_SHORT: Record<string, string> = {
  Thiruvananthapuram: "TVM",
  Kollam: "KLM",
  Pathanamthitta: "PTA",
  Alappuzha: "ALP",
  Kottayam: "KTM",
  Idukki: "IDK",
  Ernakulam: "EKM",
  Thrissur: "TSR",
  Palakkad: "PKD",
  Malappuram: "MLP",
  Kozhikode: "KZD",
  Wayanad: "WND",
  Kannur: "KNR",
  Kasaragod: "KSD",
};

const disposalChartData = KERALA_DISTRICTS.map((d) => {
  const total = rn(d + "t", 5000, 28000);
  const disposed = rn(d + "dp", Math.floor(total * 0.35), Math.floor(total * 0.78));
  return { name: DISTRICT_SHORT[d] ?? d.slice(0, 3), fullName: d, total, disposed };
});

const submissionModeData = [
  { name: "Self Apply", total: 18450, disposed: 12300 },
  { name: "Third Party", total: 14200, disposed: 9800 },
  { name: "Mass/Joint", total: 8750, disposed: 5600 },
  { name: "Akshaya", total: 11300, disposed: 7900 },
  { name: "CW Centre", total: 6200, disposed: 4100 },
];

const FILE_STATUS_KPIS = {
  totalFiles: {
    label: "Total Files",
    value: 74830,
    color: "bg-[#1ebe72]",
    metrics: [
      { label: "Disposed", value: 38420 },
      { label: "In Process", value: 21560 },
      { label: "Rejected", value: 6780 },
      { label: "Returned", value: 4920 },
      { label: "Delayed", value: 3150 },
    ],
  },
  disposed: {
    label: "Disposed Files",
    value: 38420,
    percentage: "51.3%",
    color: "bg-[#009fd2]",
    metrics: [
      { label: "Total Disposed", value: 38420 },
      { label: "Parked Files", value: 4210 },
      { label: "Permanent Disposed", value: 34210 },
      { label: "Disposed within SLI", value: 22380 },
      { label: "Disposed 1–30 days", value: 8740 },
      { label: "Disposed 30–100 days", value: 5630 },
      { label: "Disposed after 100 days", value: 1460 },
    ],
  },
  underProcess: {
    label: "Under Process",
    value: 21560,
    percentage: "28.8%",
    color: "bg-[#7b61ff]",
    metrics: [
      { label: "Total In Process", value: 21560 },
      { label: "Within SLI", value: 16200 },
      { label: "Delayed", value: 5360 },
    ],
  },
  delayed: {
    label: "Delayed",
    value: 3150,
    percentage: "4.2%",
    color: "bg-[#df3a7a]",
    metrics: [
      { label: "Total Delayed", value: 3150 },
      { label: "Delayed by ≤10 days", value: 840 },
      { label: "Delayed 11–30 days", value: 960 },
      { label: "Delayed 31–100 days", value: 760 },
      { label: "Delayed 101–365 days", value: 420 },
      { label: "Delayed >365 days", value: 170 },
    ],
  },
};

const DIGITAL_HEALTH_KPIS = [
  { label: "Total",       value: 74830, color: "bg-[#232f50]" },
  { label: "Self Apply",  value: 18450, color: "bg-[#1ebe72]" },
  { label: "Third Party", value: 14200, color: "bg-[#009fd2]" },
  { label: "Mass/Joint",  value: 8750,  color: "bg-[#7b61ff]" },
  { label: "Akshaya",     value: 11300, color: "bg-[#df3a7a]" },
  { label: "CW Centre",   value: 6200,  color: "bg-[#f59e0b]" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function DigitalHealthCard({ label, value, color }: { label: string; value: number; color: string }) {
  const total = DIGITAL_HEALTH_KPIS[0].value;
  const pct = label === "Total" ? null : ((value / total) * 100).toFixed(1) + "%";
  return (
    <div className="bg-white border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] rounded-[12px] flex flex-col p-[20px] justify-between min-h-[100px] sm:h-[130px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className={`${color} w-[10px] h-[10px] rounded-sm`} />
          <span className="font-sans font-semibold text-[15px] text-[#5c6e93]">{label}</span>
        </div>
        {pct && (
          <span className="bg-[#f0f4fb] text-[#09327b] text-[11px] font-semibold px-2 py-0.5 rounded-full">{pct}</span>
        )}
      </div>
      <span className="font-sans font-bold text-[28px] text-[#232f50]">{value.toLocaleString()}</span>
    </div>
  );
}

// ─── MUI X Bar Chart wrapper ─────────────────────────────────────────────────
function CustomChart({ data }: { data: { name: string; total: number; disposed: number }[] }) {
  return (
    <div className="flex-[1_0_0] w-full h-[250px] sm:h-[320px]">
      <BarChart
        {...barChartBaseProps}
        height={320}
        dataset={data}
        xAxis={[xAxisBand("name")]}
        yAxis={[yAxisLinear()]}
        series={[
          { dataKey: "total", label: "Total Files", color: CHART_PALETTE[2] },
          { dataKey: "disposed", label: "Disposed Files", color: CHART_PALETTE[1] },
        ]}
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function GrievanceModule({
  onViewMore,
  selectedLocalBody,
}: {
  onViewMore: (type?: "total" | "disposed" | "inProcess" | "delayed" | "all") => void;
  selectedLocalBody?: string;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("fileStatus");
  const [activeGraph, setActiveGraph] = useState<GraphId>("disposal");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const sortedDisposalData = [...disposalChartData].sort((a, b) =>
    sortOrder === "desc" ? b.total - a.total : a.total - b.total
  );
  const sortedSubmissionData = [...submissionModeData].sort((a, b) =>
    sortOrder === "desc" ? b.total - a.total : a.total - b.total
  );

  const tabs: { id: TabId; label: string }[] = [
    { id: "fileStatus",    label: "File Status" },
    { id: "finance",       label: "Finance" },
    { id: "digitalHealth", label: "Digital Health" },
  ];

  const tabIcons: Record<TabId, (active: boolean) => React.ReactNode> = {
    fileStatus: (a) => (
      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
        <path d="M4 14H12C13.1046 14 14 13.1046 14 12V6.5L9.5 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14Z" stroke={a ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M14 6.5H9.5V2" stroke={a ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    finance: (a) => (
      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
        <path d="M2.5 5.5H13.5M5.5 13.5V8.5M10.5 13.5V8.5M2.5 13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V3.5C14.5 2.94772 14.0523 2.5 13.5 2.5H2.5C1.94772 2.5 1.5 2.94772 1.5 3.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5Z" stroke={a ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    digitalHealth: (a) => (
      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
        <path d="M8 14S2.5 10 2.5 5.5C2.5 3.5 4 2.5 5.5 2.5C6.5 2.5 7.5 3 8 4C8.5 3 9.5 2.5 10.5 2.5C12 2.5 13.5 3.5 13.5 5.5C13.5 10 8 14 8 14Z" stroke={a ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {/* ── KPI Panel ── */}
      <div>

        {/* Tab bar */}
        <div className="bg-[#e8eff4] flex items-center gap-[4px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-fit mb-[24px] h-[44px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); }}
                className={`h-full px-[24px] rounded-[8px] flex items-center gap-[16px] cursor-pointer transition-all relative ${
                  isActive 
                    ? "bg-white border-2 border-[#e8eff4] shadow-sm z-10" 
                    : "hover:bg-white/50"
                }`}
              >
                {tabIcons[tab.id](isActive)}
                <span className={`font-sans font-semibold text-[14px] leading-[20px] ${isActive ? "text-[#232f50]" : "text-[#5c6e93]"}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* File Status Tab */}
        {activeTab === "fileStatus" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[8px] w-full">
              {(Object.entries(FILE_STATUS_KPIS) as [string, typeof FILE_STATUS_KPIS.totalFiles][]).map(([key, kpi]) => (
                <StatCard
                  key={key}
                  label={kpi.label}
                  value={kpi.value.toLocaleString()}
                  percentage={"percentage" in kpi ? (kpi as { percentage: string }).percentage : undefined}
                  color={kpi.color}
                  subLabel={kpi.metrics[0]?.label || ""}
                  subValue={kpi.metrics[0]?.value?.toLocaleString() || ""}
                  otherLabel={kpi.metrics[1]?.label || ""}
                  otherValue={kpi.metrics[1]?.value?.toLocaleString() || ""}
                  onClick={() => {
                    const mapping: Record<string, any> = { totalFiles: "total", disposed: "disposed", underProcess: "inProcess", delayed: "delayed" };
                    onViewMore(mapping[key] || "all");
                  }}
                />
              ))}
            </div>

            
          </div>
        )}

        {/* Finance Tab */}
        {activeTab === "finance" && (
          <FinanceModule selectedLocalBody={selectedLocalBody} onViewMore={() => onViewMore("all")} hideTabs />
        )}

        {/* Digital Health Tab */}
        {activeTab === "digitalHealth" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px]">
            {DIGITAL_HEALTH_KPIS.map((d) => <DigitalHealthCard key={d.label} {...d} />)}
          </div>
        )}
      </div>

      {/* ── Graph Panel ── */}
      <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:h-[606px] w-full shrink-0 p-[16px]">

        {/* Left sidebar */}
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
            {(["disposal", "modeOfSubmission"] as GraphId[]).map((gid) => (
              <button
                key={gid}
                onClick={() => setActiveGraph(gid)}
                className={`content-stretch flex items-start p-[16px] relative w-full text-left rounded-[8px] transition-colors cursor-pointer ${
                  activeGraph === gid
                    ? "bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4]"
                    : "hover:bg-[#e8eff4]/50 border border-transparent"
                }`}
              >
                <span className={`flex-[1_0_0] font-sans font-semibold leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap ${activeGraph === gid ? "text-[#232f50]" : "text-[#232f50] font-sans font-medium"}`}>
                  {gid === "disposal" ? "Performance on disposal" : "Mode of Submission"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Graph content */}
        <div className="bg-white flex-[1_0_0] h-full relative rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px]">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[32px]">
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
                {activeGraph === "disposal"
                  ? "Performance based on the disposal of file"
                  : "Number of files based on mode of submission"}
              </h3>
              <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
                {activeGraph === "disposal"
                  ? "District-wise grievance file disposal performance"
                  : "Grievance submission channels breakdown"}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[16px]">
              <div 
                onClick={() => setSortOrder((s) => (s === "desc" ? "asc" : "desc"))}
                className="flex items-center gap-[16px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Sort By:</span>
                <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{sortOrder === "desc" ? "Descending" : "Ascending"}</span>
                <ChevronDown className="w-[16px] h-[16px] text-[#5c6e93]" />
              </div>
              <div className="flex items-center gap-[16px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Show:</span>
                <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">Top 20</span>
                <ChevronDown className="w-[16px] h-[16px] text-[#5c6e93]" />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-[24px] mb-[24px]">
            <div className="flex items-center gap-[8px] justify-center px-[12px] py-[6px]">
              <span
                className="w-[14px] h-[14px] rounded-[4px] shrink-0"
                style={{ backgroundColor: CHART_PALETTE[2] }}
              />
              <span className="font-sans font-medium text-[14px] text-[#383c51] whitespace-nowrap">Total Files</span>
            </div>
            <div className="flex items-center gap-[8px] justify-center px-[12px] py-[6px]">
              <span
                className="w-[14px] h-[14px] rounded-[4px] shrink-0"
                style={{ backgroundColor: CHART_PALETTE[1] }}
              />
              <span className="font-sans font-medium text-[14px] text-[#383c51] whitespace-nowrap">Disposed Files</span>
            </div>
          </div>

          {/* Chart */}
          {activeGraph === "disposal"
            ? <CustomChart key="disposal" data={sortedDisposalData} />
            : <CustomChart key="submission" data={sortedSubmissionData} />
          }
        </div>
      </div>
    </div>
  );
}
