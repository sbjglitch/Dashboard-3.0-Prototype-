import React, { useLayoutEffect, useRef, useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  CHART_CONFIG,
  CHART_PALETTE,
  Legend,
  barChartBaseProps,
  pieChartBaseProps,
  pieSeriesGeometry,
  xAxisBand,
  yAxisLinear,
} from "../constants/chartStyles";

function useContainerChartWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setWidth(Math.max(280, Math.floor(el.getBoundingClientRect().width)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return { ref, width };
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

// 1. Meeting Status Breakdown (Pie)
const MEETING_STATUS_PIE = [
  { label: "Minutes Approved", value: 42, color: "#00c49f" },
  { label: "Meetings Held", value: 28, color: "#00b2eb" },
  { label: "Meetings Cancelled", value: 15, color: "#e83a7a" },
  { label: "Minutes Not Approved", value: 10, color: "#f5a623" },
  { label: "Scheduled", value: 5, color: "#7b61ff" },
];

// 2. Meeting Type Distribution (Pie)
const MEETING_TYPE_PIE = [
  { label: "Ordinary", value: 55, color: "#3b82f6" },
  { label: "Urgent", value: 28, color: "#f97316" },
  { label: "Special", value: 17, color: "#a855f7" },
];

// 3. District-wise meetings (Bar)
const DISTRICT_MEETINGS = [
  { label: "State avg", value: 3650, isAvg: true },
  { label: "Thiruv..", value: 5240 },
  { label: "Ernakulam", value: 4980 },
  { label: "Kozhikode", value: 4520 },
  { label: "Thrissur", value: 4310 },
  { label: "Kollam", value: 3980 },
  { label: "Malappur", value: 3750 },
  { label: "Kannur", value: 3620 },
  { label: "Palakkad", value: 3480 },
  { label: "Kottayam", value: 3210 },
  { label: "Alappuzha", value: 2980 },
  { label: "Idukki", value: 2650 },
  { label: "Pathanam.", value: 2420 },
  { label: "Wayanad", value: 2180 },
  { label: "Kasargod", value: 1950 },
];

const LB_TOP_20_MEETINGS = [
  { label: "Thiruvananthapuram Corp", value: 1940 },
  { label: "Kochi Corp", value: 1830 },
  { label: "Kozhikode Corp", value: 1720 },
  { label: "Thrissur Corp", value: 1640 },
  { label: "Kollam Corp", value: 1560 },
  { label: "Alappuzha Muni", value: 1490 },
  { label: "Kottayam Muni", value: 1420 },
  { label: "Palakkad Muni", value: 1370 },
  { label: "Kannur Muni", value: 1310 },
  { label: "Malappuram Muni", value: 1240 },
  { label: "Varkala Muni", value: 1190 },
  { label: "Kanhangad Muni", value: 1150 },
  { label: "Chalakudy Muni", value: 1100 },
  { label: "Nedumangad Muni", value: 1060 },
  { label: "Ponnani Muni", value: 1020 },
  { label: "Kalamassery Muni", value: 970 },
  { label: "Ottapalam Muni", value: 930 },
  { label: "Perinthalmanna Muni", value: 890 },
  { label: "Vadakara Muni", value: 840 },
  { label: "Mattannur Muni", value: 800 },
];

const LB_BOTTOM_20_MEETINGS = [
  { label: "Puzhakkal Grama Panch.", value: 68 },
  { label: "Perumanna Grama Panch.", value: 64 },
  { label: "Mokeri Grama Panch.", value: 61 },
  { label: "Kadukutty Grama Panch.", value: 58 },
  { label: "Edathua Grama Panch.", value: 54 },
  { label: "Meenadam Grama Panch.", value: 52 },
  { label: "Kodanchery Grama Panch.", value: 48 },
  { label: "Kuruva Grama Panch.", value: 45 },
  { label: "Elankunnapuzha Grama", value: 43 },
  { label: "Koppam Grama Panch.", value: 41 },
  { label: "Alagappanagar Grama", value: 38 },
  { label: "Aymanam Grama Panch.", value: 36 },
  { label: "Thenkara Grama Panch.", value: 34 },
  { label: "Mankada Grama Panch.", value: 32 },
  { label: "Edavaka Grama Panch.", value: 29 },
  { label: "Oachira Grama Panch.", value: 26 },
  { label: "Bharananganam Grama", value: 24 },
  { label: "Marady Grama Panch.", value: 22 },
  { label: "Arookutty Grama Panch.", value: 19 },
  { label: "Kanimangalam Grama", value: 16 },
];

// 4. Monthly trend (stacked bar)
const MONTHLY_TREND = [
  { month: "Jan", held: 4200, cancelled: 1250, scheduled: 680 },
  { month: "Feb", held: 3900, cancelled: 1100, scheduled: 720 },
  { month: "Mar", held: 4500, cancelled: 1400, scheduled: 600 },
  { month: "Apr", held: 4100, cancelled: 980, scheduled: 810 },
  { month: "May", held: 4600, cancelled: 1300, scheduled: 550 },
  { month: "Jun", held: 4300, cancelled: 1150, scheduled: 740 },
  { month: "Jul", held: 4800, cancelled: 1050, scheduled: 490 },
  { month: "Aug", held: 4400, cancelled: 1200, scheduled: 620 },
  { month: "Sep", held: 4700, cancelled: 900, scheduled: 530 },
  { month: "Oct", held: 4900, cancelled: 1100, scheduled: 470 },
  { month: "Nov", held: 4350, cancelled: 950, scheduled: 580 },
  { month: "Dec", held: 4550, cancelled: 1080, scheduled: 510 },
];

const MONTHLY_TREND_LEGEND = [
  { key: "held", label: "Meetings Held", color: "#00c49f" },
  { key: "cancelled", label: "Meetings Cancelled", color: "#e83a7a" },
  { key: "scheduled", label: "Scheduled", color: "#7b61ff" },
] as const;

// 5. Minutes Approval Rate by District (Grouped bar)
const MINUTES_APPROVAL_DISTRICT = [
  { label: "Thiruv..", approved: 82, notApproved: 18 },
  { label: "Ernakulam", approved: 78, notApproved: 22 },
  { label: "Kozhikode", approved: 85, notApproved: 15 },
  { label: "Thrissur", approved: 74, notApproved: 26 },
  { label: "Kollam", approved: 80, notApproved: 20 },
  { label: "Malappur", approved: 72, notApproved: 28 },
  { label: "Kannur", approved: 88, notApproved: 12 },
  { label: "Palakkad", approved: 76, notApproved: 24 },
  { label: "Kottayam", approved: 83, notApproved: 17 },
  { label: "Alappuzha", approved: 79, notApproved: 21 },
  { label: "Idukki", approved: 71, notApproved: 29 },
  { label: "Pathanam.", approved: 77, notApproved: 23 },
  { label: "Wayanad", approved: 69, notApproved: 31 },
  { label: "Kasargod", approved: 73, notApproved: 27 },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function MeetingManagementGraphs({ selectedLocalBody }: { selectedLocalBody: string }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubTab, setActiveSubTab] = useState<"District" | "Local Bodies">("District");
  const [sortBy, setSortBy] = useState("Descending");
  const [showTop, setShowTop] = useState<"Top 20" | "Bottom 20">("Top 20");
  const [isShowMenuOpen, setIsShowMenuOpen] = useState(false);

  const tabs = [
    "Meeting status breakdown",
    "Meeting type distribution",
    "District / LB wise meetings",
    "Monthly meeting trend",
    "Minutes approval rate",
  ];

  const { ref: barChartContainerRef, width: barChartWidth } = useContainerChartWidth();

  // ─── Bar data for tab 2 (District / LB wise meetings) ──────────────
  const activeBarData = useMemo(() => {
    let data = activeSubTab === "District"
      ? DISTRICT_MEETINGS
      : showTop === "Top 20"
        ? LB_TOP_20_MEETINGS
        : LB_BOTTOM_20_MEETINGS;

    const sorted = [...data].sort((a, b) =>
      sortBy === "Ascending" ? a.value - b.value : b.value - a.value
    );

    if (activeSubTab === "District") {
      const stateAvg = sorted.find((item) => (item as any).isAvg);
      const others = sorted.filter((item) => !(item as any).isAvg);
      return stateAvg ? [stateAvg, ...others] : others;
    }

    return sorted;
  }, [activeSubTab, showTop, sortBy]);

  // ─── Renderers ──────────────────────────────────────────────────────

  const renderPieChart = (title: string, desc: string, data: { label: string; value: number; color: string }[]) => (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[32px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[16px]">
            <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
              {title}
            </h3>
            <div className="border border-[#c0c7cd] bg-[#f2f6ff] text-[#323232] font-semibold text-[14px] px-[12px] py-[4px] rounded-[4px]">
              {selectedLocalBody}
            </div>
          </div>
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex-[1_0_0] flex flex-col lg:flex-row items-center justify-center gap-[24px]">
        <PieChart
          {...pieChartBaseProps}
          width={300}
          height={300}
          series={[{
            ...pieSeriesGeometry,
            innerRadius: 50,
            data: data.map((item, i) => ({
              id: i,
              value: item.value,
              label: item.label,
              color: item.color,
            })),
          }]}
        />
        <div className="flex flex-col gap-[12px]">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-[12px] rounded-[6px] px-[8px] py-[4px] cursor-default transition-colors hover:bg-[#f6f9fb]"
            >
              <span
                className="w-[14px] h-[14px] rounded-[4px] shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-sans font-semibold text-[14px] text-[#232f50] w-[200px] truncate">{item.label}</span>
              <span className="font-sans font-bold text-[14px] text-[#0c3080]">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDistrictBar = () => (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[32px]">
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
            District / local body wise total meetings
          </h3>
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
            Comparison of total meetings conducted across districts and local bodies.
          </p>
          <div className="inline-flex rounded-[8px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] p-[4px] gap-[4px] mt-1">
            <button
              type="button"
              onClick={() => setActiveSubTab("District")}
              className={`px-[24px] py-[4px] rounded-[6px] text-[14px] font-sans transition-colors ${activeSubTab === "District" ? "bg-[#f6f9fb] font-semibold text-[#232f50]" : "font-medium text-[#5c6e93] hover:bg-[#f6f9fb]/80"}`}
            >
              District
            </button>
            <button
              type="button"
              onClick={() => setActiveSubTab("Local Bodies")}
              className={`px-[24px] py-[4px] rounded-[6px] text-[14px] font-sans transition-colors ${activeSubTab === "Local Bodies" ? "bg-[#f6f9fb] font-semibold text-[#232f50]" : "font-medium text-[#5c6e93] hover:bg-[#f6f9fb]/80"}`}
            >
              Local Bodies
            </button>
          </div>
        </div>
        <div className="flex flex-wrap flex-col sm:flex-row items-center gap-[16px]">
          {activeSubTab === "District" && (
            <button
              type="button"
              onClick={() => setSortBy((prev) => (prev === "Descending" ? "Ascending" : "Descending"))}
              className="flex items-center gap-[16px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Sort By:</span>
              <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{sortBy}</span>
              <ChevronDown className="w-4 h-4 text-[#5c6e93]" />
            </button>
          )}
          {activeSubTab === "Local Bodies" && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsShowMenuOpen((prev) => !prev)}
                className="flex items-center gap-[16px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Show:</span>
                <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{showTop}</span>
                <ChevronDown className="w-4 h-4 text-[#5c6e93]" />
              </button>
              {isShowMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+6px)] z-20 bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(10,13,18,0.08)] py-1 min-w-[140px]">
                  {(["Top 20", "Bottom 20"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setShowTop(item);
                        setIsShowMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-[14px] transition-colors ${
                        showTop === item
                          ? "bg-[#f6f9fb] text-[#232f50] font-semibold"
                          : "text-[#5c6e93] hover:bg-[#f6f9fb]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div ref={barChartContainerRef} className="w-full min-w-0">
        <BarChart
          {...barChartBaseProps}
          width={barChartWidth}
          height={400}
          margin={{ ...barChartBaseProps.margin, bottom: 88 }}
          dataset={activeBarData.map((d) => ({ label: d.label, value: d.value }))}
          xAxis={[xAxisBand("label", { angle: -35, textAnchor: "end" })]}
          yAxis={[yAxisLinear(6000)]}
          series={[{
            dataKey: "value",
            label: "Meetings",
            color: CHART_PALETTE[1],
          }]}
        />
      </div>
      <div className="mt-[8px]">
        <Legend items={[{ label: "Meetings", color: CHART_PALETTE[1] }]} />
      </div>
    </div>
  );

  const renderMonthlyTrend = () => (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[24px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-wrap items-center gap-[12px]">
            <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
              Monthly meeting trend
            </h3>
            <div className="border border-[#c0c7cd] bg-[#f2f6ff] text-[#323232] font-semibold text-[14px] px-[12px] py-[4px] rounded-[4px]">
              {selectedLocalBody}
            </div>
          </div>
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
            Month-wise breakdown of meetings held, cancelled, and scheduled across all local bodies.
          </p>
        </div>
      </div>
      <div ref={barChartContainerRef} className="flex-1 w-full min-h-0">
        <BarChart
          {...barChartBaseProps}
          width={barChartWidth}
          height={400}
          dataset={MONTHLY_TREND}
          xAxis={[xAxisBand("month")]}
          yAxis={[yAxisLinear(7000)]}
          series={MONTHLY_TREND_LEGEND.map((item) => ({
            dataKey: item.key,
            label: item.label,
            stack: "total",
            color: item.color,
          }))}
        />
      </div>
      <div className="mt-[12px]">
        <Legend items={MONTHLY_TREND_LEGEND.map((item) => ({ label: item.label, color: item.color }))} />
      </div>
    </div>
  );

  const renderMinutesApproval = () => (
    <div className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[32px]">
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
            Minutes approval rate by district
          </h3>
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
            Percentage of meetings with approved vs. not-approved minutes across districts.
          </p>
        </div>
      </div>
      <div ref={barChartContainerRef} className="w-full min-w-0">
        <BarChart
          {...barChartBaseProps}
          width={barChartWidth}
          height={400}
          margin={{ ...barChartBaseProps.margin, bottom: 88 }}
          dataset={MINUTES_APPROVAL_DISTRICT}
          xAxis={[xAxisBand("label", { angle: -35, textAnchor: "end" })]}
          yAxis={[yAxisLinear(100)]}
          series={[
            { dataKey: "approved", label: "Minutes Approved", color: "#00c49f" },
            { dataKey: "notApproved", label: "Minutes Not Approved", color: "#f5a623" },
          ]}
        />
      </div>
      <div className="mt-[8px]">
        <Legend items={[
          { label: "Minutes Approved", color: "#00c49f" },
          { label: "Minutes Not Approved", color: "#f5a623" },
        ]} />
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return renderPieChart(
          "Meeting status breakdown",
          "Overall distribution of meeting statuses — approved, held, cancelled, and pending.",
          MEETING_STATUS_PIE
        );
      case 1:
        return renderPieChart(
          "Meeting type distribution",
          "Split of meetings by type — ordinary, urgent, and special across all local bodies.",
          MEETING_TYPE_PIE
        );
      case 2:
        return renderDistrictBar();
      case 3:
        return renderMonthlyTrend();
      case 4:
        return renderMinutesApproval();
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:min-h-[606px] w-full shrink-0 p-[16px]">
      {/* Left sidebar */}
      <div className="w-full lg:w-[270px] shrink-0 flex flex-col gap-[16px]">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[32px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d="M28 16.8678C28 19.9915 24.5796 21.9098 21.9142 20.2809L21.1235 19.7977C19.8234 19.0032 18.1848 19.0163 16.8975 19.8316L10.1402 24.1112C7.47694 25.7979 4 23.8844 4 20.7319V19.5V8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8L28 16.8678Z" fill="#83DAF6" />
              <path d="M4 19.5L10.5382 15.1412C12.001 14.166 13.9292 14.2603 15.2899 15.3736L16.358 16.2475C17.6468 17.3019 19.454 17.4477 20.8951 16.6134L28 12.5V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24L4 19.5Z" fill="#00B2EB" />
            </svg>
          </div>
          <span className="font-sans font-bold text-[16px] text-[#232f50]">Meeting Statistics</span>
        </div>

        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] opacity-70 relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap px-[4px] py-[8px]">
            <p className="leading-[20px]">Select Graph</p>
          </div>
          {tabs.map((tab, idx) => (
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

      {/* Graph content */}
      <div className="bg-white flex-[1_0_0] relative rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px] min-h-[400px] overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}
