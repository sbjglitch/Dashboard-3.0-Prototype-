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


export function BuildingPermissionGraphs() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubTab, setActiveSubTab] = useState<"District" | "Local Bodies">("District");
  const [sortBy, setSortBy] = useState("Descending");
  const [showTop, setShowTop] = useState("Top 20");
  
  const tabs = [
    "No. of files that exceed SLI Period",
    "File split up based on service",
    "Avg. time to Dispose",
    "Avg. time to Grant Permit",
    "Occupancy-wise split up"
  ];

  const renderBarChart = (title: string, desc: string, yAxisMax: number = 30000, yAxisName: string = "Files", yAxisIncrement: number = 5000, hasShowFilter: boolean = false) => {
    // Generate Y Axis segments
    const ySegments = [];
    for (let i = yAxisMax; i >= 0; i -= yAxisIncrement) ySegments.push(i);

    return (
      <div className="flex flex-col h-full w-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-sans font-bold text-[16px] text-[#232f50] uppercase leading-[24px]">
              {title}
            </h3>
            <div className="flex items-center gap-4">
              <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[20px]">
                {desc}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-[16px]">
             {/* Sub Tabs */}
             <div className="bg-[#f2f6ff] rounded-[8px] flex items-center p-[4px]">
               <button 
                 onClick={() => setActiveSubTab("District")}
                 className={`px-[24px] py-[4px] rounded-[6px] text-[14px] font-sans font-semibold transition-colors ${activeSubTab === "District" ? "bg-white shadow border border-gray-100 text-[#232f50]" : "text-[#5c6e93]"}`}
               >
                 District
               </button>
               <button 
                 onClick={() => setActiveSubTab("Local Bodies")}
                 className={`px-[24px] py-[4px] rounded-[6px] text-[14px] font-sans font-semibold transition-colors ${activeSubTab === "Local Bodies" ? "bg-white shadow border border-gray-100 text-[#232f50]" : "text-[#5c6e93]"}`}
               >
                 Local Bodies
               </button>
             </div>
             {/* Filters */}
             <div className="flex gap-[12px] bg-[#f2f6ff] rounded-[8px] px-[16px] py-[6px]">
               <span className="font-semibold text-[14px] text-[#232f50]">Sort By:</span>
               <span className="font-semibold text-[14px] opacity-70 text-[#232f50]">{sortBy}</span>
               <ChevronDown className="w-4 h-4 text-[#232f50] opacity-70" />
             </div>
             {hasShowFilter && activeSubTab === "Local Bodies" && (
                <div className="flex gap-[12px] bg-[#f2f6ff] rounded-[8px] px-[16px] py-[6px]">
                 <span className="font-semibold text-[14px] text-[#232f50]">Show:</span>
                 <span className="font-semibold text-[14px] opacity-70 text-[#232f50]">{showTop}</span>
                 <ChevronDown className="w-4 h-4 text-[#232f50] opacity-70" />
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
            <div className="absolute inset-0 flex items-end justify-between px-[16px] z-10 bottom-[1px]">
               {BAR_DATA_DISTRICT_ExceedSLI.map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center justify-end h-full group" style={{ width: `${100/BAR_DATA_DISTRICT_ExceedSLI.length}%`, maxWidth: '40px' }}>
                    <div className={`w-full ${item.isAvg ? 'bg-[#5cd7ff]' : 'bg-[#00b2eb]'} rounded-t-[4px] hover:opacity-80 transition-opacity relative`} style={{ height: `${(item.value / yAxisMax) * 100}%` }}>
                    </div>
                    <span className="absolute -bottom-[24px] text-[12px] text-[#5c6e93] font-sans font-medium truncate w-[50px] text-center">
                      {item.label}
                    </span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPieChart = (title: string, desc: string, data: typeof PIE_DATA_SERVICE_SPLIT) => {
    return (
      <div className="flex flex-col h-full w-full">
         {/* Header */}
         <div className="flex items-start justify-between mb-[32px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[16px]">
              <h3 className="font-sans font-bold text-[16px] text-[#232f50] uppercase leading-[24px]">
                {title}
              </h3>
              <div className="border border-[#c0c7cd] bg-[#f2f6ff] text-[#323232] font-semibold text-[14px] px-[12px] py-[4px] rounded-[4px]">
                Adoor, Pathanamthitta
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
             {data.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[12px]">
                  <div className={`w-[20px] h-[20px] rounded-full ${item.color}`}></div>
                  <span className="font-sans font-semibold text-[16px] text-[#232f50] w-[200px] truncate">{item.label}</span>
                  <span className="font-sans font-bold text-[16px] font-bold text-[#232f50]">{item.value}%</span>
                </div>
             ))}
           </div>
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
    <div className="flex gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-[606px] w-[100%] shrink-0 p-[0px] mt-[16px]">
      {/* Left Sidebar */}
      <div className="w-[270px] shrink-0 flex flex-col gap-[16px] p-[16px]">
        <div className="flex gap-[16px] items-center">
          <div className="w-[32px] h-[32px] relative">
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
          {tabs.map((tab, idx) => (
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

      {/* Right Content */}
      <div className="bg-white flex-[1_0_0] h-full relative rounded-r-[16px] border-l border-[#e8eff4] flex flex-col p-[32px]">
         {renderContent()}
      </div>
    </div>
  );
}
