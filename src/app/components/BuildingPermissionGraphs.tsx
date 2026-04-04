import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Mock Data
const BAR_DATA_DISTRICT_ExceedSLI = [
  { label: "State avg", value: 14000, isAvg: true },
  { label: "Kottaym", value: 18500 },
  { label: "Idukki", value: 18500 },
  { label: "Thiruv..", value: 17500 },
  { label: "Kollam", value: 17500 },
  { label: "Palakkad", value: 17000 },
  { label: "Malappur", value: 15000 },
  { label: "Kozhikode", value: 14000 },
  { label: "Wayanad", value: 12500 },
  { label: "Kannur", value: 10500 },
  { label: "Kasargod", value: 9000 },
  { label: "Pathanm.", value: 7000 },
  { label: "Alappuz..", value: 7000 },
  { label: "Ernakulam", value: 7500 },
  { label: "Thrissur", value: 7500 },
];

const PIE_DATA_SERVICE_SPLIT = [
  { label: "General Permit", value: 32, color: "bg-[#00c49f]" },
  { label: "Self Certified", value: 32, color: "bg-[#00b2eb]" },
  { label: "Regularization+ Permit", value: 32, color: "bg-[#e83a7a]" },
  { label: "Regularization+ Com...", value: 32, color: "bg-[#f5a623]" },
  { label: "Regularization+ par...", value: 32, color: "bg-[#7b61ff]" },
  { label: "Others", value: 32, color: "bg-[#a4c400]" },
];

const PIE_DATA_OCCUPANCY = [
  { label: "Single Family Residential", value: 35, color: "bg-[#00c49f]" },
  { label: "Commercial", value: 25, color: "bg-[#00b2eb]" },
  { label: "Residence - Apartments", value: 15, color: "bg-[#e83a7a]" },
  { label: "Special Residence", value: 10, color: "bg-[#f5a623]" },
  { label: "Small Scale Industries", value: 10, color: "bg-[#7b61ff]" },
  { label: "Others", value: 5, color: "bg-[#a4c400]" },
];


function toSentenceCase(text: string) { 
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// ─── Shared tooltip ──────────────────────────────────────────────────────────

interface TooltipState {
  label: string;
  rows: { color: string; name: string; value: string }[];
}

function GraphTooltip({
  tip,
  mouse,
}: {
  tip: TooltipState;
  mouse: { x: number; y: number };
}) {
  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%, -100%) translateY(-12px)" }}
    >
      <div className="relative">
        <div className="bg-white border border-[#e8eff4] rounded-[8px] p-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] whitespace-nowrap flex flex-col gap-[6px] min-w-[130px] relative z-10">
          <span className="font-sans font-semibold text-[13px] text-[#232f50] border-b border-[#e8eff4] pb-[8px]">
            {tip.label}
          </span>
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

export function BuildingPermissionGraphs({ selectedLocalBody }: { selectedLocalBody: string }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubTab, setActiveSubTab] = useState<"District" | "Local Bodies">("District");
  const [sortBy, setSortBy] = useState("Descending");
  const [showTop, setShowTop] = useState("Top 20");
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
  
  const tabs = [
    "No. of files that exceed SLI Period",
    "File split up based on service",
    "Avg. time to Dispose",
    "Avg. time to Grant Permit",
    "Occupancy-wise split up"
  ];

  const renderBarChart = (title: string, desc: string, yAxisMax: number = 30000, yAxisName: string = "Files", yAxisIncrement: number = 5000, hasShowFilter: boolean = false) => {
    // Generate Y Axis segments
    const ySegments: number[] = [];
    for (let i = yAxisMax; i >= 0; i -= yAxisIncrement) ySegments.push(i);

    return (
      <div className="flex flex-col h-full w-full">
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
          </div>
          <div className="flex flex-wrap flex-col sm:flex-row items-center gap-[16px]">
             {/* Sub Tabs */}
             <div className="inline-flex rounded-[8px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] p-[4px] gap-[4px]">
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
             {/* Filters */}
             <div className="flex items-center gap-[16px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors">
               <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Sort By:</span>
               <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{sortBy}</span>
               <ChevronDown className="w-4 h-4 text-[#5c6e93]" />
             </div>
             {hasShowFilter && activeSubTab === "Local Bodies" && (
                <div className="flex items-center gap-[16px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors">
                 <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">Show:</span>
                 <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{showTop}</span>
                 <ChevronDown className="w-4 h-4 text-[#5c6e93]" />
               </div>
             )}
          </div>
        </div>

        {/* Chart Area */}
        <div className="flex-[1_0_0] relative w-full flex mt-[24px]">
          {/* Y Axis Labels */}
          <div className="flex flex-col justify-between items-end pr-[16px] w-[60px] text-[12px] text-[#5c6e93] font-sans font-medium relative z-10">
            {ySegments.map(val => (
              <span key={val}>{val.toLocaleString()}</span>
            ))}
          </div>

          <div className="flex-[1_0_0] relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
               {ySegments.map(val => (
                 <div key={val} className="w-full h-px border-b border-dashed border-[#e8eff4]" />
               ))}
            </div>

            {/* Bars */}
            <div className="absolute inset-0 flex items-end justify-between px-[16px] z-10 bottom-[1px]" onMouseMove={handleMouseMove}>
               {BAR_DATA_DISTRICT_ExceedSLI.map((item, idx) => (
                 <div
                   key={idx}
                   className="flex flex-col items-center justify-end h-full group"
                   style={{ width: `${100/BAR_DATA_DISTRICT_ExceedSLI.length}%`, maxWidth: '40px' }}
                   onMouseEnter={() => setTooltip({ label: item.label, rows: [{ color: item.isAvg ? '#5cd7ff' : '#00b2eb', name: item.isAvg ? 'State Avg' : 'Files', value: item.value.toLocaleString() }] })}
                   onMouseLeave={() => setTooltip(null)}
                 >
                    <div className={`w-full ${item.isAvg ? 'bg-[#5cd7ff]' : 'bg-[#00b2eb]'} rounded-t-[4px] hover:opacity-80 transition-opacity relative`} style={{ height: `${(item.value / yAxisMax) * 100}%` }} />
                    <span className="absolute -bottom-[24px] text-[12px] text-[#5c6e93] font-sans font-medium truncate w-[50px] text-center">
                      {item.label}
                    </span>
                 </div>
               ))}
            </div>
            {tooltip && <GraphTooltip tip={tooltip} mouse={mouse} />}
          </div>
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
        <div className="flex-[1_0_0] flex items-center justify-center gap-[80px]">
           {/* Fake Pie Chart Circle via CSS Conic Gradient for demo */}
           <div className="w-[300px] h-[300px] rounded-full relative shadow-sm" style={{
              background: `conic-gradient(
                #00c49f 0% 16.6%,
                #00b2eb 16.6% 33.2%,
                #e83a7a 33.2% 49.8%,
                #f5a623 49.8% 66.4%,
                #7b61ff 66.4% 83%,
                #a4c400 83% 100%
              )`
           }}>
             <div className="absolute inset-0 m-auto w-[40px] h-[40px] bg-white rounded-full"></div>
           </div>

           {/* Legends */}
           <div className="flex flex-col gap-[16px]">
             {data.map((item, idx) => {
               const hex = item.color.replace("bg-[", "").replace("]", "");
               return (
                 <div
                   key={idx}
                   className="flex items-center gap-[12px] rounded-[6px] px-[8px] py-[4px] cursor-default transition-colors hover:bg-[#f6f9fb]"
                   onMouseEnter={() => setTooltip({ label: item.label, rows: [{ color: hex, name: item.label, value: `${item.value}%` }] })}
                   onMouseLeave={() => setTooltip(null)}
                   onMouseMove={handleMouseMove}
                 >
                   <div className={`w-[20px] h-[20px] rounded-full shrink-0 ${item.color}`} />
                   <span className="font-sans font-semibold text-[16px] text-[#232f50] w-[200px] truncate">{item.label}</span>
                   <span className="font-sans font-bold text-[16px] text-[#232f50]">{item.value}%</span>
                 </div>
               );
             })}
           </div>
           {tooltip && <GraphTooltip tip={tooltip} mouse={mouse} />}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return renderBarChart(
          "No. of files that exceed SLI Period", 
          "Graphical representation of the least performing districts and local bodies",
          30000, "Files", 5000, true
        );
      case 1:
        return renderPieChart(
          "SPLIT BASED ON THE TOTAL NUMBER OF APPLICATIONS RECEIVED AT LSG",
          "Graphical representation of the service wise percentage.",
          PIE_DATA_SERVICE_SPLIT
        );
      case 2:
        return renderBarChart(
          "Average time taken to Dispose application under general permit",
          "Average Time Taken to grant general permit",
          120, "Days", 15, true
        );
      case 3:
        return renderBarChart(
          "Average time taken to Grant Permit",
          "Average Time Taken to grant general permit",
          120, "Days", 15, true
        );
      case 4:
        return renderPieChart(
          "Occupancy wise split up of application",
          "Occupancy wise split up of application under general + self certified",
          PIE_DATA_OCCUPANCY
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:h-[606px] w-full shrink-0 p-[16px]">
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
      <div className="bg-white flex-[1_0_0] h-full relative rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px] min-h-[350px]">
         {renderContent()}
      </div>
    </div>
  );
}
