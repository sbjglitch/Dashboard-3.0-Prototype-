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

// Mock Data
const BAR_DATA_DISTRICT = [
  { label: "State avg", value: 15800, isAvg: true },
  { label: "Thiruv..", value: 24600 },
  { label: "Ernakulam", value: 23400 },
  { label: "Kozhikode", value: 22100 },
  { label: "Thrissur", value: 21200 },
  { label: "Kollam", value: 19800 },
  { label: "Malappur", value: 18600 },
  { label: "Kannur", value: 17400 },
  { label: "Palakkad", value: 16300 },
  { label: "Kottayam", value: 14900 },
  { label: "Alappuzha", value: 13800 },
  { label: "Idukki", value: 11200 },
  { label: "Pathanam.", value: 10100 },
  { label: "Wayanad", value: 9300 },
  { label: "Kasargod", value: 8700 },
];

const LOCAL_BODIES_TOP_20 = [
  { label: "Thiruvananthapuram Corp", value: 9700 },
  { label: "Kochi Corp", value: 9150 },
  { label: "Kozhikode Corp", value: 8610 },
  { label: "Thrissur Corp", value: 8190 },
  { label: "Kollam Corp", value: 7820 },
  { label: "Alappuzha Muni", value: 7440 },
  { label: "Kottayam Muni", value: 7130 },
  { label: "Palakkad Muni", value: 6840 },
  { label: "Kannur Muni", value: 6520 },
  { label: "Malappuram Muni", value: 6210 },
  { label: "Varkala Muni", value: 5980 },
  { label: "Kanhangad Muni", value: 5750 },
  { label: "Chalakudy Muni", value: 5530 },
  { label: "Nedumangad Muni", value: 5290 },
  { label: "Ponnani Muni", value: 5070 },
  { label: "Kalamassery Muni", value: 4860 },
  { label: "Ottapalam Muni", value: 4620 },
  { label: "Perinthalmanna Muni", value: 4410 },
  { label: "Vadakara Muni", value: 4190 },
  { label: "Mattannur Muni", value: 3980 },
];

const LOCAL_BODIES_BOTTOM_20 = [
  { label: "Puzhakkal Grama Panch.", value: 340 },
  { label: "Perumanna Grama Panch.", value: 320 },
  { label: "Mokeri Grama Panch.", value: 305 },
  { label: "Kadukutty Grama Panch.", value: 288 },
  { label: "Edathua Grama Panch.", value: 270 },
  { label: "Meenadam Grama Panch.", value: 258 },
  { label: "Kodanchery Grama Panch.", value: 241 },
  { label: "Kuruva Grama Panch.", value: 226 },
  { label: "Elankunnapuzha Grama", value: 214 },
  { label: "Koppam Grama Panch.", value: 203 },
  { label: "Alagappanagar Grama", value: 191 },
  { label: "Aymanam Grama Panch.", value: 182 },
  { label: "Thenkara Grama Panch.", value: 170 },
  { label: "Mankada Grama Panch.", value: 158 },
  { label: "Edavaka Grama Panch.", value: 146 },
  { label: "Oachira Grama Panch.", value: 132 },
  { label: "Bharananganam Grama", value: 120 },
  { label: "Marady Grama Panch.", value: 108 },
  { label: "Arookutty Grama Panch.", value: 94 },
  { label: "Kanimangalam Grama", value: 81 },
];

const DISTRICT_AVG_DISPOSE_DAYS = [
  { label: "Thiruv..", value: 96 },
  { label: "Ernakulam", value: 92 },
  { label: "Kozhikode", value: 87 },
  { label: "Thrissur", value: 84 },
  { label: "Kollam", value: 81 },
  { label: "Malappur", value: 78 },
  { label: "Kannur", value: 75 },
  { label: "Palakkad", value: 72 },
  { label: "Kottayam", value: 69 },
  { label: "Alappuzha", value: 66 },
  { label: "Idukki", value: 63 },
  { label: "Pathanam.", value: 60 },
  { label: "Wayanad", value: 56 },
  { label: "Kasargod", value: 53 },
];

const DISTRICT_AVG_GRANT_DAYS = [
  { label: "Thiruv..", value: 88 },
  { label: "Ernakulam", value: 84 },
  { label: "Kozhikode", value: 82 },
  { label: "Thrissur", value: 79 },
  { label: "Kollam", value: 75 },
  { label: "Malappur", value: 72 },
  { label: "Kannur", value: 69 },
  { label: "Palakkad", value: 67 },
  { label: "Kottayam", value: 64 },
  { label: "Alappuzha", value: 62 },
  { label: "Idukki", value: 58 },
  { label: "Pathanam.", value: 55 },
  { label: "Wayanad", value: 51 },
  { label: "Kasargod", value: 47 },
];

const LOCAL_BODIES_TOP_20_DISPOSE_DAYS = LOCAL_BODIES_TOP_20.map((item, idx) => ({
  label: item.label,
  value: 72 - (idx % 20),
}));

const LOCAL_BODIES_BOTTOM_20_DISPOSE_DAYS = LOCAL_BODIES_BOTTOM_20.map((item, idx) => ({
  label: item.label,
  value: 36 - Math.floor(idx / 2),
}));

const LOCAL_BODIES_TOP_20_GRANT_DAYS = LOCAL_BODIES_TOP_20.map((item, idx) => ({
  label: item.label,
  value: 64 - (idx % 20),
}));

const LOCAL_BODIES_BOTTOM_20_GRANT_DAYS = LOCAL_BODIES_BOTTOM_20.map((item, idx) => ({
  label: item.label,
  value: 30 - Math.floor(idx / 2),
}));

const PIE_DATA_SERVICE_SPLIT = [
  { label: "General Permit", value: 32, color: CHART_PALETTE[2] },
  { label: "Self Certified", value: 32, color: CHART_PALETTE[1] },
  { label: "Regularization+ Permit", value: 32, color: CHART_PALETTE[5] },
  { label: "Regularization+ Com...", value: 32, color: CHART_PALETTE[4] },
  { label: "Regularization+ par...", value: 32, color: CHART_PALETTE[3] },
  { label: "Others", value: 32, color: CHART_PALETTE[6] },
];

const PIE_DATA_OCCUPANCY = [
  { label: "Single Family Residential", value: 35, color: CHART_PALETTE[2] },
  { label: "Commercial", value: 25, color: CHART_PALETTE[1] },
  { label: "Residence - Apartments", value: 15, color: CHART_PALETTE[5] },
  { label: "Special Residence", value: 10, color: CHART_PALETTE[4] },
  { label: "Small Scale Industries", value: 10, color: CHART_PALETTE[3] },
  { label: "Others", value: 5, color: CHART_PALETTE[6] },
];

const OCCUPANCY_AREA_SPLIT_DATA = [
  { label: "Single Family Residential", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Commercial", lt80: 7400, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Residence-Apartments", lt80: 4000, m80to150: 10800, m150to300: 1700, m300to500: 1200, gt500: 700 },
  { label: "Special Residence", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Small scale Industries", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Others", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
];

const OCCUPANCY_AREA_LEGEND = [
  { key: "lt80", label: "Less than 80 m²", color: CHART_PALETTE[2] },
  { key: "m80to150", label: "80-150 m²", color: CHART_PALETTE[1] },
  { key: "m150to300", label: "150-300 m²", color: CHART_PALETTE[4] },
  { key: "m300to500", label: "300-500 m²", color: CHART_PALETTE[5] },
  { key: "gt500", label: "Above 500 m²", color: CHART_PALETTE[3] },
] as const;


function toSentenceCase(text: string) { 
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function BuildingPermissionGraphs({ selectedLocalBody }: { selectedLocalBody: string }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubTab, setActiveSubTab] = useState<"District" | "Local Bodies">("District");
  const [sortBy, setSortBy] = useState("Descending");
  const [showTop, setShowTop] = useState<"Top 20" | "Bottom 20">("Top 20");
  const [isShowMenuOpen, setIsShowMenuOpen] = useState(false);
  
  const tabs = [
    "No. of files that exceed SLI Period",
    "File split up based on service",
    "Avg. time to Dispose",
    "Avg. time to Grant Permit",
    "Occupancy-wise split up",
    "Occupancy-wise, built-up area-wise split up",
  ];

  const { ref: barChartContainerRef, width: barChartWidth } = useContainerChartWidth();

  const activeBarData = useMemo(() => {
    let data = BAR_DATA_DISTRICT;

    if (activeTab === 0) {
      data = activeSubTab === "District"
        ? BAR_DATA_DISTRICT
        : showTop === "Top 20"
          ? LOCAL_BODIES_TOP_20
          : LOCAL_BODIES_BOTTOM_20;
    } else if (activeTab === 2) {
      data = activeSubTab === "District"
        ? DISTRICT_AVG_DISPOSE_DAYS
        : showTop === "Top 20"
          ? LOCAL_BODIES_TOP_20_DISPOSE_DAYS
          : LOCAL_BODIES_BOTTOM_20_DISPOSE_DAYS;
    } else if (activeTab === 3) {
      data = activeSubTab === "District"
        ? DISTRICT_AVG_GRANT_DAYS
        : showTop === "Top 20"
          ? LOCAL_BODIES_TOP_20_GRANT_DAYS
          : LOCAL_BODIES_BOTTOM_20_GRANT_DAYS;
    }

    const sorted = [...data].sort((a, b) =>
      sortBy === "Ascending" ? a.value - b.value : b.value - a.value
    );

    if (activeTab === 0 && activeSubTab === "District") {
      const stateAvg = sorted.find((item) => item.isAvg);
      const others = sorted.filter((item) => !item.isAvg);
      return stateAvg ? [stateAvg, ...others] : others;
    }

    return sorted;
  }, [activeSubTab, activeTab, showTop, sortBy]);

  const renderBarChart = (title: string, desc: string, yAxisMax: number = 30000, yAxisName: string = "Files", _yAxisIncrement: number = 5000, hasShowFilter: boolean = false) => {
    return (
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
              {toSentenceCase(title)}
            </h3>
            <div className="flex items-center gap-4">
              <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
                {desc}
              </p>
            </div>
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
             {/* Filters */}
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
             {hasShowFilter && activeSubTab === "Local Bodies" && (
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

        {/* Chart */}
        <div ref={barChartContainerRef} className="w-full min-w-0">
          <BarChart
            {...barChartBaseProps}
            width={barChartWidth}
            height={400}
            margin={{ ...barChartBaseProps.margin, bottom: 88 }}
            dataset={activeBarData.map((d) => ({ label: d.label, value: d.value }))}
            xAxis={[xAxisBand("label", { angle: -35, textAnchor: "end" })]}
            yAxis={[yAxisLinear(yAxisMax)]}
            series={[{
              dataKey: "value",
              label: yAxisName,
              color: CHART_PALETTE[1],
            }]}
          />
        </div>

        {/* Series legend */}
        <div className="mt-[8px]">
          <Legend items={[{ label: yAxisName, color: CHART_PALETTE[1] }]} />
        </div>
      </div>
    );
  };

  const renderPieChart = (title: string, desc: string, data: typeof PIE_DATA_SERVICE_SPLIT) => {
    return (
      <div className="flex flex-col h-full w-full">
         {/* Header */}
         <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[32px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[16px]">
              <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
                {toSentenceCase(title)}
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

        {/* Pie Content */}
        <div className="flex-[1_0_0] flex items-center justify-center gap-[24px]">
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

           {/* Legends */}
           <div className="flex flex-col gap-[12px]">
             {data.map((item, idx) => {
               return (
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
               );
             })}
           </div>
        </div>
      </div>
    );
  };

  const renderOccupancyAreaSplitChart = () => {
    return (
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[24px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-wrap items-center gap-[12px]">
              <h3 className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
                Occupancy-wise, built-up areawise split up of application
              </h3>
              <div className="border border-[#c0c7cd] bg-[#f2f6ff] text-[#323232] font-semibold text-[14px] px-[12px] py-[4px] rounded-[4px]">
                {selectedLocalBody}
              </div>
            </div>
            <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
              Occupancy-wise, built-up areawise split up of applications under general and self-certified categories.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full min-h-0">
          <BarChart
            {...barChartBaseProps}
            dataset={OCCUPANCY_AREA_SPLIT_DATA}
            xAxis={[xAxisBand("label")]}
            yAxis={[yAxisLinear(30000)]}
            series={OCCUPANCY_AREA_LEGEND.map((item) => ({
              dataKey: item.key,
              label: item.label,
              stack: "total",
              color: item.color,
            }))}
          />
        </div>

        <div className="mt-[12px]">
          <Legend items={OCCUPANCY_AREA_LEGEND.map((item) => ({ label: item.label, color: item.color }))} />
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return renderBarChart(
          "No. of files that exceed SLI Period", 
          "Comparison of districts/local bodies with the highest number of files crossing SLI timelines.",
          30000, "Files", 5000, true
        );
      case 1:
        return renderPieChart(
          "SPLIT BASED ON THE TOTAL NUMBER OF APPLICATIONS RECEIVED AT LSG",
          "Service-wise percentage share of total building permit applications received at LSGs.",
          PIE_DATA_SERVICE_SPLIT
        );
      case 2:
        return renderBarChart(
          "Average time taken to Dispose application under general permit",
          "Average disposal time in days for general permit applications across selected regions.",
          120, "Days", 15, true
        );
      case 3:
        return renderBarChart(
          "Average time taken to Grant Permit",
          "Average permit grant time in days for general permit applications across selected regions.",
          120, "Days", 15, true
        );
      case 4:
        return renderPieChart(
          "Occupancy wise split up of application",
          "Occupancy-category distribution of applications submitted under general and self-certified permits.",
          PIE_DATA_OCCUPANCY
        );
      case 5:
        return renderOccupancyAreaSplitChart();
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:min-h-[606px] w-full shrink-0 p-[16px]">
      {/* Left sidebar — matches GrievanceModule graph panel */}
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
