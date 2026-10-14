import React, { useState } from "react";
import { GraphPanelV3 } from "../v3/GraphPanelV3";
import { ChevronDown } from "lucide-react";
import { DashboardBarChart } from "./charts/DashboardBarChart";
import { FileStatusKPICard } from "./FileStatusKPICard";
import { KpiTabsV3 } from "../v3/KpiTabsV3";
import { FilterDropdown } from "./FilterDropdown";
import { FinanceModule } from "./FinanceModule";
import { CHART_PALETTE } from "../constants/chartStyles";

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

import { KpiCardV3 } from "../v3/KpiCardV3";

function DigitalHealthCard({ label, value, color }: { label: string; value: number; color: string }) {
  const total = DIGITAL_HEALTH_KPIS[0].value;
  const pct = label === "Total" ? null : ((value / total) * 100).toFixed(1) + "%";
  return (
    <KpiCardV3
      label={label}
      value={value}
      color={color}
      badge={pct || undefined}
    />
  );
}

// ─── MUI X Bar Chart wrapper ─────────────────────────────────────────────────
function CustomChart({ data }: { data: { name: string; total: number; disposed: number }[] }) {
  return (
    <div className="flex-[1_0_0] w-full h-[250px] sm:h-[320px] pt-4">
      <DashboardBarChart
        data={data}
        xAxisKey="name"
        height={320}
        series={[
          { dataKey: "total", name: "Total Files", color: CHART_PALETTE[2] },
          { dataKey: "disposed", name: "Disposed Files", color: CHART_PALETTE[1] },
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
        <KpiTabsV3
          tabs={tabs.map(t => ({ ...t, icon: tabIcons[t.id] }))}
          activeTabId={activeTab}
          onChange={(id) => setActiveTab(id as TabId)}
          className="mb-[24px]"
        />

        {/* File Status Tab */}
        {activeTab === "fileStatus" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[8px] w-full">
              {(Object.entries(FILE_STATUS_KPIS) as [string, typeof FILE_STATUS_KPIS.totalFiles][]).map(([key, kpi]) => (
                <FileStatusKPICard
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
      <GraphPanelV3
        tabs={[
          { id: "disposal", label: "Performance on disposal" },
          { id: "modeOfSubmission", label: "Mode of Submission" },
        ]}
        activeTab={activeGraph}
        onTabChange={(id) => setActiveGraph(id as GraphId)}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-sans font-semibold text-[16px] text-[#232f50] leading-[24px]">
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
      </GraphPanelV3>
    </div>
  );
}
