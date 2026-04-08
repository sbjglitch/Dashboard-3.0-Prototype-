import React, { useEffect, useMemo, useRef, useState } from "react";
import { DetailsModal, type DetailsModalContentMode } from "./components/DetailsModal";
import { LocalBodySelector } from "./components/LocalBodySelector";
import { TimePeriodSelector } from "./components/TimePeriodSelector";
import { FilterDropdown } from "./components/FilterDropdown";
import { GrievanceModule } from "./components/GrievanceModule";
import { FinanceModule } from "./components/FinanceModule";
import { CivilRegistrationModule } from "./components/CivilRegistrationModule";
import { CivilRegistrationGraphs } from "./components/CivilRegistrationGraphs";
import { BuildingFinanceOverview } from "./components/BuildingFinanceOverview";
import { BuildingPermissionGraphs } from "./components/BuildingPermissionGraphs";
import { PropertyTaxGraphs } from "./components/PropertyTaxGraphs";
import { StatCard } from "./components/StatCard";
import { MODULE_DATA } from "./data/serviceData";
import imgGovernmentOfKeralaLogo from "../assets/828f18076f30eadbc8ffd05a9253419bb04f21ef.png";
import imgLsgdLogo2 from "../assets/7c183a0a0c9ac3c4483c0f6d150efedb7cac5cb1.png";
import imgHeroBannerBg from "../assets/b280c70468785c684b20318aa461dbb8807cc51f.png";
import svgPaths from "../imports/svg-hkl0il95bp";
import { ArrowLeft, Download, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ExportButton } from "./components/ExportButton";

function FilterSelect({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative w-full min-w-0 h-[56px] group cursor-pointer">
      <div className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white group-hover:border-[#09327b] transition-colors" />
      <div className="flex min-w-0 items-center justify-between relative w-full h-full px-[18px]">
        <p className="font-sans font-medium leading-[24px] relative text-[#232f50] text-[16px] whitespace-nowrap overflow-hidden text-ellipsis mr-2">
          {value}
        </p>
        <div className="shrink-0">
          <ChevronDown className="w-4 h-4 text-[#D5D7DA]" />
        </div>
      </div>
      <div className="absolute bg-white flex font-sans font-normal gap-[4px] h-[19px] items-center leading-[normal] left-[18px] px-[5px] text-[#153171] text-[14px] top-0 -translate-y-1/2 whitespace-nowrap z-10">
        <p className="relative shrink-0">{label}</p>
      </div>
    </div>
  );
}

const PT_DIGITAL_HEALTH_KPI_MAP: Record<string, { label: string; value: number; color: string }[]> = {
  "Tax Payments": [
    { label: "Own Profile",    value: 18450, color: "bg-[#1ebe72]" },
    { label: "Quick Pay",      value: 14200, color: "bg-[#009fd2]" },
    { label: "Others Profile", value: 8750,  color: "bg-[#7b61ff]" },
    { label: "Front Office",   value: 11300, color: "bg-[#df3a7a]" },
    { label: "E-POS Machine",  value: 6200,  color: "bg-[#f59e0b]" },
  ],
  "Services": [
    { label: "Citizen Profile", value: 32400, color: "bg-[#1ebe72]" },
    { label: "Office Counter",  value: 18900, color: "bg-[#009fd2]" },
  ],
  "Link Building": [
    { label: "Buildings Linked",   value: 42600, color: "bg-[#1ebe72]" },
    { label: "Buildings Unlinked", value: 18700, color: "bg-[#df3a7a]" },
  ],
  "Building Certificate Download": [
    { label: "Citizen Profile", value: 21300, color: "bg-[#1ebe72]" },
    { label: "Others Profile",  value: 9800,  color: "bg-[#7b61ff]" },
    { label: "Office Counter",  value: 14500, color: "bg-[#009fd2]" },
  ],
};

const PT_DIGITAL_HEALTH_SUBMODULES = Object.keys(PT_DIGITAL_HEALTH_KPI_MAP);

function PtDigitalHealthCard({ label, value, color, total }: { label: string; value: number; color: string; total: number }) {
  const pct = ((value / total) * 100).toFixed(1) + "%";
  return (
    <div className="bg-white border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] rounded-[12px] flex flex-col p-[20px] justify-between min-h-[100px] sm:h-[130px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className={`${color} w-[10px] h-[10px] rounded-sm shrink-0`} />
          <span className="font-sans font-semibold text-[14px] text-[#5c6e93]">{label}</span>
        </div>
        <span className="bg-[#f0f4fb] text-[#09327b] text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0">{pct}</span>
      </div>
      <span className="font-sans font-bold text-[28px] text-[#232f50]">{value.toLocaleString()}</span>
    </div>
  );
}

interface PropertyTaxKpiCardProps {
  title: string;
  value: string;
  arrearDemand: string;
  currentDemand: string;
  bgClass: string;
  onClick?: () => void;
}

function PropertyTaxKpiCard({
  title,
  value,
  arrearDemand,
  currentDemand,
  bgClass,
  onClick,
}: PropertyTaxKpiCardProps) {
  return (
    <div
      className="bg-white border border-[#e1e1e1] rounded-[12px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] min-h-[180px] sm:min-h-[207px] flex flex-col cursor-pointer"
      onClick={() => onClick?.()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={`${bgClass} px-[16px] py-[14px] relative flex-1 min-h-0`}>
        <div className="pointer-events-none absolute top-[-20px] left-[54%] w-[505px] h-[243px] rotate-[-32.81deg] bg-white opacity-5" />
        <div className="relative z-10 flex flex-col gap-[14px]">
          <div className="flex items-center gap-[8px]">
            <div className="w-[32px] h-[32px] rounded-[62px] bg-[rgba(255,255,255,0.32)] flex items-center justify-center">
              <div className="w-[8px] h-[8px] bg-white rounded-full" />
            </div>
            <span className="font-sans font-bold text-[16px] text-white">{title}</span>
          </div>
          <div className="flex items-center gap-[8px] text-white py-[2px]">
            <span className="font-sans font-bold text-[20px] sm:text-[24px] leading-[normal]">₹</span>
            <span className="font-sans font-bold text-[26px] sm:text-[34px] leading-[normal] tracking-[1.2px]">{value}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-[8px]">
            <div className="bg-[rgba(255,255,255,0.36)] rounded-[8px] px-[8px] py-[5px] flex-1 flex items-center justify-between gap-2">
              <span className="font-sans text-[11px] sm:text-[12px] text-white/90">Arrear Demand</span>
              <span className="font-sans font-bold text-[13px] sm:text-[14px] text-white">₹ {arrearDemand}</span>
            </div>
            <div className="bg-[rgba(255,255,255,0.36)] rounded-[8px] px-[8px] py-[5px] flex-1 flex items-center justify-between gap-2">
              <span className="font-sans text-[11px] sm:text-[12px] text-white/90">Current Demand</span>
              <span className="font-sans font-bold text-[13px] sm:text-[14px] text-white">₹ {currentDemand}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[31px] shrink-0 text-[14px] font-sans font-semibold text-[#5c6e93] hover:bg-[#f6f9fb] transition-colors border-t border-[#e8eff4] flex items-center justify-center gap-[8px]">
        View More Details
        <span className="text-[14px] leading-none">›</span>
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKpiType, setModalKpiType] = useState<"total" | "disposed" | "inProcess" | "delayed" | "all">("all");
  const [detailsModalContentMode, setDetailsModalContentMode] =
    useState<DetailsModalContentMode>("fileKpi");
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [isTimePeriodOpen, setIsTimePeriodOpen] = useState(false);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Upto today");
  const [selectedLocalBody, setSelectedLocalBody] = useState("Kerala");
  
  const [selectedModule, setSelectedModule] = useState<string>("All Module");
  const [selectedSubModule, setSelectedSubModule] = useState<string>("Overview");
  const [selectedService, setSelectedService] = useState<string>("Summary Dashboard");
  const [selectedBuildingType, setSelectedBuildingType] = useState<string>("Select");
  const [activeMainTab, setActiveMainTab] = useState<"fileStatus" | "finance" | "digitalHealth">("fileStatus");
  const [hoveredChartItem, setHoveredChartItem] = useState<any>(null);
  const [chartMousePos, setChartMousePos] = useState({ x: 0, y: 0 });
  const [filtersStuck, setFiltersStuck] = useState(false);
  const filterStickySentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sentinelEl = filterStickySentinelRef.current;
    if (!sentinelEl) return;

    const computeStickyTopPx = () => (window.innerWidth >= 768 ? 80 : 56);

    let observer: IntersectionObserver | null = null;
    const attachObserver = () => {
      observer?.disconnect();
      const stickyTopPx = computeStickyTopPx();
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setFiltersStuck(!entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
          rootMargin: `-${stickyTopPx}px 0px 0px 0px`,
        },
      );
      observer.observe(sentinelEl);
    };

    attachObserver();
    window.addEventListener("resize", attachObserver);
    return () => {
      window.removeEventListener("resize", attachObserver);
      observer?.disconnect();
    };
  }, []);

  const moduleOptions = Object.keys(MODULE_DATA);
  const buildingTypeOptions = ["All", "Residential", "Commercial"];
  const normalizedSelectedModule = selectedModule.toLowerCase().replace(/[^a-z]/g, "");
  const normalizedSelectedSubModule = selectedSubModule.toLowerCase().replace(/[^a-z]/g, "");
  const normalizedSelectedService = selectedService.toLowerCase().replace(/[^a-z]/g, "");
  const isPropertyTaxModule =
    normalizedSelectedModule.includes("propertytax") ||
    normalizedSelectedModule.includes("property") ||
    normalizedSelectedSubModule.includes("tax") ||
    normalizedSelectedService.includes("propertytax");

  const showDigitalHealthTab =
    isPropertyTaxModule && PT_DIGITAL_HEALTH_SUBMODULES.includes(selectedSubModule);

  const digitalHealthKpis = PT_DIGITAL_HEALTH_KPI_MAP[selectedSubModule] ?? [];
  const digitalHealthTotal = digitalHealthKpis.reduce((a, b) => a + b.value, 0);
  
  const subModuleOptions = useMemo(() => {
    if (selectedModule === "Select") return [];
    return Object.keys(MODULE_DATA[selectedModule] || {});
  }, [selectedModule]);

  const serviceOptions = useMemo(() => {
    if (selectedModule === "Select" || selectedSubModule === "Select") return [];
    return MODULE_DATA[selectedModule]?.[selectedSubModule] || [];
  }, [selectedModule, selectedSubModule]);

  const handleModuleChange = (module: string) => {
    setSelectedModule(module);
    setSelectedBuildingType("Select");
    if (module === "All Module") {
      setSelectedSubModule("Overview");
      setSelectedService("Summary Dashboard");
      setActiveMainTab("fileStatus");
    } else if (module === "Finance Management") {
      setSelectedSubModule("Select");
      setSelectedService("Select");
      setActiveMainTab("finance");
    } else {
      setSelectedSubModule("Select");
      setSelectedService("Select");
      setActiveMainTab("fileStatus");
    }
  };

  const handleSubModuleChange = (subModule: string) => {
    setSelectedSubModule(subModule);
    setSelectedService("Select");
    if (!PT_DIGITAL_HEALTH_SUBMODULES.includes(subModule)) {
      setActiveMainTab((prev) => (prev === "digitalHealth" ? "fileStatus" : prev));
    }
  };

  const displayModule = useMemo(() => {
    let result = selectedModule;
    if (selectedService !== "Select") {
      result = `${selectedService}, ${selectedModule}`;
    } else if (selectedSubModule !== "Select") {
      result = `${selectedSubModule}, ${selectedModule}`;
    }
    return result;
  }, [selectedModule, selectedSubModule, selectedService]);

  return (
    <div className="min-h-screen bg-[#f2f6ff]">
      {/* Header */}
      <header className="bg-white h-auto md:h-[80px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] sticky top-0 z-40">
        <div className="flex flex-wrap items-center justify-between px-4 md:px-[32px] py-3 md:py-0 h-full gap-3 md:gap-0">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="h-[28px] w-[64px] md:h-[36.871px] md:w-[84.634px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.6339 36.871">
                <g id="Logo">
                  <path clipRule="evenodd" d={svgPaths.p13e027c0} fill="#09327B" fillRule="evenodd" />
                  <path d={svgPaths.pafeb100} fill="#E83A7A" />
                  <path d={svgPaths.p137eb400} fill="#E83A7A" />
                  <path d={svgPaths.p23ef9ec0} fill="#00B2EB" />
                </g>
              </svg>
            </div>
            <div className="h-[44px] w-px bg-[#D6E1F3] hidden md:block" />
            <img alt="" className="h-[28px] w-[44px] md:h-[34.973px] md:w-[54.557px] object-cover hidden sm:block" src={imgGovernmentOfKeralaLogo} />
            <img alt="" className="h-[26px] w-[44px] md:h-[31.475px] md:w-[53.159px] object-cover hidden sm:block" src={imgLsgdLogo2} />
            <div className="flex flex-col gap-0.5 md:gap-2 hidden lg:flex">
              <p className="font-sans text-[12px] text-[#5c6e93]">Government of Kerala</p>
              <p className="font-sans font-semibold text-[14px] text-[#232f50]">
                Local Self Government Department
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-12">
            <div className="flex items-center gap-2 cursor-pointer hidden md:flex">
              <p className="font-sans font-medium text-[14px] text-[#09327b]">
                മലയാളം
              </p>
              <ChevronDown className="w-4 h-4 text-[#09327b]" />
            </div>
            <p className="font-sans font-semibold text-[14px] text-[#09327b] cursor-pointer hidden lg:block">
              About K-smart
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 md:px-8 py-1.5 md:py-2 border border-[#e83a7a] rounded-full font-sans font-semibold text-[12px] md:text-[14px] text-[#e83a7a] hover:bg-[#e83a7a] hover:text-white transition-colors">
                Register
              </button>
              <button className="px-4 md:px-8 py-1.5 md:py-2 bg-[#e83a7a] rounded-full font-sans font-semibold text-[12px] md:text-[14px] text-white hover:bg-[#d62d69] transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-[#09327b] px-4 md:px-[32px] pt-8 md:pt-[56px] pb-[80px] md:pb-[100px] relative overflow-hidden min-h-[200px] md:h-[280px]">
        <ImageWithFallback src="https://images.unsplash.com/photo-1704365159668-d6567db52f33?auto=format&fit=crop&q=80&w=1920" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-[0.4]" />
        <div className="relative flex flex-col sm:flex-row items-start justify-between w-full max-w-[1568px] mx-auto gap-4">
          <div className="flex flex-col gap-4 md:gap-[24px]">
            <button className="flex items-center gap-[4px] w-fit hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4 text-white" />
              <span className="font-sans font-semibold text-[14px] text-white">Back</span>
            </button>
            <div className="flex flex-col gap-1 md:gap-2">
              <h1 className="font-sans font-bold text-[24px] md:text-[32px] text-white leading-[normal]">
                KSMART Dashboard
              </h1>
              <p className="font-sans font-medium text-[14px] md:text-[16px] text-white opacity-70 leading-[normal]">
                All the info you need about KSMART Services is right at your fingertips!
              </p>
            </div>
          </div>
          <ExportButton onClick={() => console.log("Exporting...")} />
        </div>
      </div>

      {/* Filters — sticky below header */}
      <div ref={filterStickySentinelRef} className="h-px w-full" aria-hidden />
      <div
        className={`sticky top-[56px] md:top-[80px] z-30 -mt-[48px] md:-mt-[56px] mb-[24px] md:mb-[32px] ${
          filtersStuck
            ? "bg-white border-b border-[#e8e8e8] shadow-[0px_4px_12px_0px_rgba(10,13,18,0.08)] py-1 md:py-2"
            : ""
        }`}
      >
        <div className="max-w-[1718px] mx-auto px-4 md:px-[32px]">
          <div
            className={`w-full p-3 md:p-[24px] ${
              filtersStuck
                ? "bg-transparent border-0 shadow-none rounded-none"
                : "bg-white rounded-[12px] md:rounded-[16px] shadow-[0px_4px_12px_0px_rgba(10,13,18,0.08)] border border-[#e8e8e8]"
            }`}
          >
              <div
                className={`grid w-full grid-cols-1 sm:grid-cols-[repeat(2,minmax(0,1fr))] gap-3 md:gap-[16px] xl:gap-[24px] ${
                  isPropertyTaxModule
                    ? "xl:grid-cols-[repeat(6,minmax(0,1fr))]"
                    : "xl:grid-cols-[repeat(5,minmax(0,1fr))]"
                }`}
              >
                <div className="relative w-full min-w-0">
                  <div id="local-body-toggle" className="w-full min-w-0" onClick={() => setIsSelectorOpen(!isSelectorOpen)}>
                    <FilterSelect label="Local Body/state" value={selectedLocalBody} />
                  </div>
                  {isSelectorOpen && (
                    <div className="absolute top-full left-0 right-0 sm:right-auto mt-2 transition-all z-50">
                       <LocalBodySelector onClose={() => setIsSelectorOpen(false)} onApply={setSelectedLocalBody} />
                    </div>
                  )}
                </div>
                <div className="relative w-full min-w-0">
                  <div className="w-full min-w-0" onClick={() => setIsTimePeriodOpen(!isTimePeriodOpen)}>
                    <FilterSelect label="Time Period " value={selectedTimePeriod} />
                  </div>
                  {isTimePeriodOpen && (
                    <div className="absolute top-full left-0 right-0 sm:right-auto mt-2 z-50">
                      <TimePeriodSelector 
                        onClose={() => setIsTimePeriodOpen(false)} 
                        onSelect={setSelectedTimePeriod}
                      />
                    </div>
                  )}
                </div>
                <div className="w-full min-w-0">
                  <FilterDropdown 
                    label="Module" 
                    value={selectedModule} 
                    options={moduleOptions} 
                    onSelect={handleModuleChange}
                  />
                </div>
                <div className="w-full min-w-0">
                  <FilterDropdown 
                    label="Sub-Module" 
                    value={selectedSubModule} 
                    options={subModuleOptions} 
                    onSelect={handleSubModuleChange}
                    disabled={selectedModule === "Select"}
                    muted={selectedSubModule === "Select"}
                  />
                </div>
                <div
                  className={
                    isPropertyTaxModule
                      ? "w-full min-w-0"
                      : "w-full min-w-0 sm:col-span-2 xl:col-span-1"
                  }
                >
                  <FilterDropdown 
                    label="Service" 
                    value={selectedService} 
                    options={serviceOptions} 
                    onSelect={setSelectedService}
                    disabled={selectedSubModule === "Select"}
                    muted={selectedService === "Select"}
                  />
                </div>
                {isPropertyTaxModule && (
                  <div className="w-full min-w-0">
                    <FilterDropdown
                      label="Building Type"
                      value={selectedBuildingType}
                      options={buildingTypeOptions}
                      onSelect={setSelectedBuildingType}
                      muted={selectedBuildingType === "Select"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-[1718px] mx-auto px-4 md:px-[32px] pb-[24px] md:pb-[32px]">
        <div className="bg-white rounded-[12px] md:rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4] overflow-hidden">
          {/* Heading strip — always visible */}
          <div className="p-4 md:p-[24px]">
            <div className="flex flex-wrap gap-4 md:gap-[32px] items-center w-full">
              <div className="flex flex-col gap-[2px] items-start justify-center">
                <p className="font-sans font-medium leading-[20px] text-[#5c6e93] text-[12px] md:text-[14px]">Time Period</p>
                <p className="font-sans font-bold leading-[24px] md:leading-[28px] text-[#0c3080] text-[16px] md:text-[20px]">{selectedTimePeriod}</p>
              </div>
              <div className="flex flex-col gap-[2px] items-start justify-center min-w-0 flex-1">
                <p className="font-sans font-medium leading-[20px] text-[#5c6e93] text-[12px] md:text-[14px]">Module</p>
                <p className="font-sans font-bold leading-[24px] md:leading-[28px] text-[#0c3080] text-[16px] md:text-[20px] max-w-full truncate" title={displayModule}>{displayModule}</p>
              </div>
              <div className="flex flex-col gap-[2px] items-start justify-center">
                <p className="font-sans font-medium leading-[20px] text-[#5c6e93] text-[12px] md:text-[14px]">Local body/state</p>
                <p className="font-sans font-bold leading-[24px] md:leading-[28px] text-[#0c3080] text-[16px] md:text-[20px]">{selectedLocalBody}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#e8eff4] w-full" />

          {/* Content Area */}
          <div className="flex flex-col gap-4 md:gap-[24px] p-3 md:p-[16px]">
            {/* Finance Management: Show E-Payment/E-POS tabs directly */}
            {selectedModule === "Finance Management" && (
              <FinanceModule
                selectedLocalBody={selectedLocalBody}
                onViewMore={() => {
                  setDetailsModalContentMode("fileKpi");
                  setModalKpiType("all");
                  setIsModalOpen(true);
                }}
              />
            )}

            {/* Civil Registration module — own tabs + graphs */}
            {selectedModule === "Civil Registration" && (
              <>
                <CivilRegistrationModule
                  selectedSubModule={selectedSubModule}
                  onViewMore={(type) => {
                    setDetailsModalContentMode("fileKpi");
                    setModalKpiType(type || "all");
                    setIsModalOpen(true);
                  }}
                />
                <CivilRegistrationGraphs selectedSubModule={selectedSubModule} />
              </>
            )}

            {/* Dashboard Content Area: Tabs + Cards (shown for All Module and other non-grievance/non-finance/non-civil-reg modules) */}
            {selectedModule !== "Public Grievance and complaints" && selectedModule !== "Finance Management" && selectedModule !== "Civil Registration" && (
              <div className="w-full">
                {/* Tabs */}
                <div className="bg-[#e8eff4] flex items-center gap-[4px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full sm:w-fit mb-4 md:mb-[24px] h-[40px] md:h-[44px]">
                  {/* File Status */}
                  <div 
                    onClick={() => setActiveMainTab("fileStatus")}
                    className={`h-full flex-1 sm:flex-none px-3 md:px-[24px] rounded-[8px] flex items-center justify-center gap-2 md:gap-[16px] cursor-pointer transition-all relative z-10 ${
                      activeMainTab === "fileStatus" ? "bg-white border-2 border-[#e8eff4] shadow-sm" : "hover:bg-white/50"
                    }`}
                  >
                    <div className="w-[16px] h-[16px] relative">
                      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
                        <path d="M2.66667 7.51245V5.33333C2.66667 4.96514 2.96514 4.66667 3.33333 4.66667H12.6667C13.0349 4.66667 13.3333 4.96514 13.3333 5.33333V8.84562" stroke={activeMainTab === "fileStatus" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M3.33333 4.66667V2.66667C3.33333 2.29848 3.63181 2 4 2H12C12.3682 2 12.6667 2.29848 12.6667 2.66667V4.66667" stroke={activeMainTab === "fileStatus" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path clipRule="evenodd" d="M2 12.6667V8.66667C2 7.93029 2.59695 7.33333 3.33333 7.33333H7.44771C7.80134 7.33333 8.14048 7.47381 8.39053 7.72386L8.94281 8.27614C9.19286 8.52619 9.532 8.66667 9.88562 8.66667H12.6667C13.403 8.66667 14 10V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667Z" fill={activeMainTab === "fileStatus" ? "#00B2EB" : "none"} fillRule="evenodd" stroke={activeMainTab === "fileStatus" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.66667 11.3333H6" stroke={activeMainTab === "fileStatus" ? "white" : "transparent"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <span className={`font-sans font-semibold text-[14px] leading-[20px] ${activeMainTab === "fileStatus" ? "text-[#232f50]" : "text-[#5c6e93]"}`}>File Status</span>
                  </div>

                  {/* Finance */}
                  <div 
                    onClick={() => setActiveMainTab("finance")}
                    className={`h-full flex-1 sm:flex-none px-3 md:px-[24px] rounded-[8px] flex items-center justify-center gap-2 md:gap-[16px] cursor-pointer transition-all ${
                      activeMainTab === "finance" ? "bg-white border-2 border-[#e8eff4] shadow-sm" : "hover:bg-white/50"
                    }`}
                  >
                    <div className="w-[16px] h-[16px] relative">
                      <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d="M13.3333 14V14C14.07 14 14.6667 13.4033 14.6667 12.6667V3.33333C14.6667 2.59667 14.07 2 13.3333 2V2C12.5967 2 12 2.59667 12 3.33333V12.6667C12 13.4033 12.5967 14 13.3333 14Z" fill={activeMainTab === "finance" ? "#00B2EB" : "#A2BFD8"} fillRule="evenodd" stroke={activeMainTab === "finance" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path clipRule="evenodd" d="M8 14V14C8.73667 14 9.33333 13.4033 9.33333 12.6667V7.12267C9.33333 6.386 8.73667 5.78933 8 5.78933V5.78933C7.26333 5.78933 6.66667 6.386 6.66667 7.12267V12.6667C6.66667 13.4033 7.26333 14 8 14Z" fill={activeMainTab === "finance" ? "#00B2EB" : "#A2BFD8"} fillRule="evenodd" stroke={activeMainTab === "finance" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path clipRule="evenodd" d="M2.66667 14V14C3.40333 14 4 13.4033 4 12.6667V10.912C4 10.1753 3.40333 9.57867 2.66667 9.57867V9.57867C1.93 9.57867 1.33333 10.1753 1.33333 10.912V12.6667C1.33333 13.4033 1.93 14 2.66667 14Z" fill={activeMainTab === "finance" ? "#00B2EB" : "#A2BFD8"} fillRule="evenodd" stroke={activeMainTab === "finance" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <span className={`font-sans font-semibold text-[14px] leading-[20px] ${activeMainTab === "finance" ? "text-[#232f50]" : "text-[#5c6e93]"}`}>Finance</span>
                  </div>

                  {/* Digital Health — only for qualifying Property Tax sub-modules */}
                  {showDigitalHealthTab && (
                    <div
                      onClick={() => setActiveMainTab("digitalHealth")}
                      className={`h-full flex-1 sm:flex-none px-3 md:px-[24px] rounded-[8px] flex items-center justify-center gap-2 md:gap-[16px] cursor-pointer transition-all ${
                        activeMainTab === "digitalHealth" ? "bg-white border-2 border-[#e8eff4] shadow-sm" : "hover:bg-white/50"
                      }`}
                    >
                      <div className="w-[16px] h-[16px] relative">
                        <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
                          <path d="M8 14S2.5 10 2.5 5.5C2.5 3.5 4 2.5 5.5 2.5C6.5 2.5 7.5 3 8 4C8.5 3 9.5 2.5 10.5 2.5C12 2.5 13.5 3.5 13.5 5.5C13.5 10 8 14 8 14Z" stroke={activeMainTab === "digitalHealth" ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <span className={`font-sans font-semibold text-[14px] leading-[20px] ${activeMainTab === "digitalHealth" ? "text-[#232f50]" : "text-[#5c6e93]"}`}>Digital Health</span>
                    </div>
                  )}

                </div>

                {/* Main Tab Content */}
                {activeMainTab === "fileStatus" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-[24px] w-full">
                    <StatCard
                      label="Total Received"
                      value="51,251"
                      subValue="25,251"
                      subLabel="Citizen Files"
                      otherValue="26,000"
                      otherLabel="Other Files"
                      color="bg-[#1ebe72]"
                      onClick={() => {
                        setDetailsModalContentMode("fileKpi");
                        setModalKpiType("total");
                        setIsModalOpen(true);
                      }}
                    />
                    <StatCard
                      label="Disposed"
                      value="21,251"
                      subValue="13,657"
                      subLabel="Citizen Files"
                      otherValue="7,594"
                      otherLabel="Other Files"
                      percentage="41.5%"
                      color="bg-[#009fd2]"
                      onClick={() => {
                        setDetailsModalContentMode("fileKpi");
                        setModalKpiType("disposed");
                        setIsModalOpen(true);
                      }}
                    />
                    <StatCard
                      label="Under Process"
                      value="15,000"
                      subValue="10,000"
                      subLabel="Citizen Files"
                      otherValue="5,000"
                      otherLabel="Other Files"
                      percentage="25%"
                      color="bg-[#7b61ff]"
                      onClick={() => {
                        setDetailsModalContentMode("fileKpi");
                        setModalKpiType("inProcess");
                        setIsModalOpen(true);
                      }}
                    />
                    <StatCard
                      label="Delayed"
                      value="15,000"
                      subValue="10,000"
                      subLabel="Citizen Files"
                      otherValue="5,000"
                      otherLabel="Other Files"
                      percentage="25%"
                      color="bg-[#df3a7a]"
                      onClick={() => {
                        setDetailsModalContentMode("fileKpi");
                        setModalKpiType("delayed");
                        setIsModalOpen(true);
                      }}
                    />
                  </div>
                )}

                {activeMainTab === "digitalHealth" && showDigitalHealthTab && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[16px] w-full">
                    {digitalHealthKpis.map((kpi) => (
                      <PtDigitalHealthCard key={kpi.label} {...kpi} total={digitalHealthTotal} />
                    ))}
                  </div>
                )}

                {activeMainTab === "finance" && (
                  isPropertyTaxModule ? (
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-[16px] w-full">
                      <PropertyTaxKpiCard
                        title="Collection Total"
                        value="51,251"
                        arrearDemand="25,251"
                        currentDemand="25,251"
                        bgClass="bg-[#00a78e]"
                        onClick={() => {
                          setDetailsModalContentMode("propertyTaxFinance");
                          setModalKpiType("total");
                          setIsModalOpen(true);
                        }}
                      />
                      <PropertyTaxKpiCard
                        title="Arrear Demand"
                        value="25,251"
                        arrearDemand="15,251"
                        currentDemand="10,000"
                        bgClass="bg-[#00b2eb]"
                        onClick={() => {
                          setDetailsModalContentMode("propertyTaxFinance");
                          setModalKpiType("disposed");
                          setIsModalOpen(true);
                        }}
                      />
                      <PropertyTaxKpiCard
                        title="Current Demand"
                        value="26,000"
                        arrearDemand="12,000"
                        currentDemand="14,000"
                        bgClass="bg-[#7b61ff]"
                        onClick={() => {
                          setDetailsModalContentMode("propertyTaxFinance");
                          setModalKpiType("inProcess");
                          setIsModalOpen(true);
                        }}
                      />
                    </div>
                  ) : selectedModule === "Building Permissions" ? (
                    <BuildingFinanceOverview onViewMore={() => {
                      setDetailsModalContentMode("buildingFinance");
                      setModalKpiType("all");
                      setIsModalOpen(true);
                    }} />
                  ) : (
                    <FinanceModule
                      selectedLocalBody={selectedLocalBody}
                      onViewMore={() => {
                        setDetailsModalContentMode("fileKpi");
                        setModalKpiType("all");
                        setIsModalOpen(true);
                      }}
                    />
                  )
                )}

              </div>
            )}

            {/* Public Grievance & Redressal module content */}
            {selectedModule === "Public Grievance and complaints" && (
              <GrievanceModule
                selectedLocalBody={selectedLocalBody}
                onViewMore={(type) => {
                  setDetailsModalContentMode("fileKpi");
                  setModalKpiType(type || "all");
                  setIsModalOpen(true);
                }}
              />
            )}

            {/* Building permission charts: dedicated module + All Module overview (otherwise this file never mounts on the default screen) */}
            {(selectedModule === "Building Permissions" || selectedModule === "All Module") && (
              <BuildingPermissionGraphs selectedLocalBody={selectedLocalBody} />
            )}

            {isPropertyTaxModule && (
              <PropertyTaxGraphs selectedLocalBody={selectedLocalBody} />
            )}

            {!isPropertyTaxModule && selectedModule !== "Building Permissions" && selectedModule !== "Public Grievance and complaints" && selectedModule !== "All Module" && selectedModule !== "Finance Management" && selectedModule !== "Civil Registration" && (
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-[16px] bg-[#f6f9fb] rounded-[12px] md:rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:h-[606px] w-full shrink-0 p-0">
                {/* Left Sidebar */}
                <div className="w-full lg:w-[270px] shrink-0 flex flex-col gap-[16px] p-4 lg:p-[16px]">
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
                    
                    <div className="bg-white relative rounded-[8px] shrink-0 w-full shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4] cursor-pointer">
                      <div className="content-stretch flex items-start p-[16px] relative w-full">
                        <p className="flex-[1_0_0] font-sans font-semibold leading-[20px] min-h-px min-w-px relative text-[#232f50] text-[14px]">Disposal Percentage</p>
                      </div>
                    </div>
                    
                    <div className="relative rounded-[8px] shrink-0 w-full hover:bg-[#e8eff4]/50 transition-colors cursor-pointer">
                      <div className="content-stretch flex items-start p-[16px] relative w-full">
                        <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Mode of Submission</p>
                      </div>
                    </div>

                    <div className="relative rounded-[8px] shrink-0 w-full hover:bg-[#e8eff4]/50 transition-colors cursor-pointer">
                      <div className="content-stretch flex items-start p-[16px] relative w-full">
                        <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] whitespace-nowrap">Type of Complaint</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Graph Content Area */}
                <div className="bg-white flex-[1_0_0] min-h-[400px] lg:h-full relative rounded-[12px] md:rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px]">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 md:mb-[32px] gap-3">
                    <div className="flex flex-col gap-[8px]">
                      <h3 className="font-sans font-bold text-[14px] md:text-[16px] text-[#232f50] leading-[24px]">
                        No. of files that exceed SLI Period
                      </h3>
                      <p className="font-sans font-semibold text-[12px] md:text-[14px] text-[#5c6e93] leading-[20px]">
                        Graphical representation of the least performing districts and local bodies
                      </p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-[16px] flex-wrap">
                      <div className="flex items-center gap-2 md:gap-[16px] border border-[#e8eff4] rounded-[8px] px-3 md:px-[16px] py-[6px] md:py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-sans font-medium text-[12px] md:text-[14px] text-[#5c6e93] leading-[20px]">Sort By:</span>
                        <span className="font-sans font-semibold text-[12px] md:text-[14px] text-[#232f50] leading-[20px]">Decending</span>
                        <ChevronDown className="w-[16px] h-[16px] text-[#5c6e93]" />
                      </div>
                      <div className="flex items-center gap-2 md:gap-[16px] border border-[#e8eff4] rounded-[8px] px-3 md:px-[16px] py-[6px] md:py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-sans font-medium text-[12px] md:text-[14px] text-[#5c6e93] leading-[20px]">Show:</span>
                        <span className="font-sans font-semibold text-[12px] md:text-[14px] text-[#232f50] leading-[20px]">Top 20</span>
                        <ChevronDown className="w-[16px] h-[16px] text-[#5c6e93]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[24px] mb-[24px]">
                    <div className="flex items-center gap-[8px] justify-center px-[16px] py-[8px]">
                      <div className="w-[24px] h-[24px] bg-[#f8f8f8] rounded-[4px] flex items-center justify-center shrink-0">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#56ba85]" />
                      </div>
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#383c51] whitespace-nowrap">Total Files</span>
                    </div>
                    <div className="flex items-center gap-[8px] justify-center px-[16px] py-[8px]">
                      <div className="w-[24px] h-[24px] bg-[#f8f8f8] rounded-[4px] flex items-center justify-center shrink-0">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#00b2eb]" />
                      </div>
                      <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#383c51] whitespace-nowrap">Disposed Files</span>
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="flex-[1_0_0] w-full relative pl-[45px] pb-[30px]">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-[30px] flex flex-col justify-between text-right text-[12px] font-sans text-[#8d8d8d] py-0 z-10 w-[35px]">
                      <span>30,000</span>
                      <span>25,000</span>
                      <span>20,000</span>
                      <span>15,000</span>
                      <span>10,000</span>
                      <span>5,000</span>
                      <span>0</span>
                    </div>
                    
                    {/* Chart Area */}
                    <div 
                      className="w-full h-full relative"
                      onMouseMove={(e) => setChartMousePos({ x: e.clientX, y: e.clientY })}
                    >
                      {/* Tooltip */}
                      {hoveredChartItem && (
                        <div 
                          className="fixed z-50 pointer-events-none"
                          style={{ 
                            left: chartMousePos.x, 
                            top: chartMousePos.y,
                            transform: 'translate(-50%, -100%) translateY(-12px)'
                          }}
                        >
                          <div className="relative">
                            <div className="bg-white border border-[#e8eff4] rounded-[8px] p-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] whitespace-nowrap flex flex-col gap-[8px] min-w-[140px] relative z-10">
                              <span className="font-sans font-bold text-[14px] text-[#232f50] border-b border-[#e8eff4] pb-[8px]">{hoveredChartItem.fullLabel}</span>
                              <div className="flex flex-col gap-[4px]">
                                <div className="flex justify-between items-center gap-[16px]">
                                  <span className="font-sans text-[12px] text-[#5c6e93] flex items-center gap-[6px]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#56ba85]" /> Total Files
                                  </span>
                                  <span className="font-sans text-[12px] text-[#232f50]">{hoveredChartItem.total.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center gap-[16px]">
                                  <span className="font-sans text-[12px] text-[#5c6e93] flex items-center gap-[6px]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#00b2eb]" /> Disposed Files
                                  </span>
                                  <span className="font-sans text-[12px] text-[#232f50]">{hoveredChartItem.disposed.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                            <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-white border-b border-r border-[#e8eff4] rotate-45 z-0"></div>
                          </div>
                        </div>
                      )}

                      {/* Horizontal Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between z-0 pointer-events-none">
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="w-full h-px bg-transparent border-b border-dashed border-[#e8eff4]" />
                        ))}
                      </div>

                      {/* Bars Container */}
                      <div className="absolute inset-0 z-10 flex items-end gap-2 sm:gap-[16px] md:gap-[32px] px-[6px] md:px-[12px]">
                        {[
                          { label: "TVM", fullLabel: "Thiruvananthapuram", total: 28000, disposed: 18000 },
                          { label: "KLM", fullLabel: "Kollam", total: 22000, disposed: 14000 },
                          { label: "PTA", fullLabel: "Pathanamthitta", total: 18000, disposed: 11000 },
                          { label: "ALP", fullLabel: "Alappuzha", total: 21000, disposed: 13000 },
                          { label: "KTM", fullLabel: "Kottayam", total: 19000, disposed: 12000 },
                          { label: "IDK", fullLabel: "Idukki", total: 15000, disposed: 9000 },
                          { label: "EKM", fullLabel: "Ernakulam", total: 29000, disposed: 20000 },
                        ].map((d, idx) => (
                          <div 
                            key={idx} 
                            className="flex flex-[1_0_0] flex-col items-center h-full justify-end relative group min-w-px"
                            onMouseEnter={() => setHoveredChartItem(d)}
                            onMouseLeave={() => setHoveredChartItem(null)}
                          >
                            <div className="content-stretch flex items-end gap-[8px] h-full justify-center relative shrink-0 w-full">
                              <div
                                className="bg-[#56ba85] flex-[1_0_0] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px] group-hover:opacity-80 transition-opacity cursor-pointer"
                                style={{ height: `${(d.total / 30000) * 100}%` }}
                              />
                              <div
                                className="bg-[#00b2eb] flex-[1_0_0] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px] group-hover:opacity-80 transition-opacity cursor-pointer"
                                style={{ height: `${(d.disposed / 30000) * 100}%` }}
                              />
                            </div>
                            <span className="font-sans text-[12px] text-[#5c6e93] text-center absolute -bottom-[24px] whitespace-nowrap">
                              {d.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <DetailsModal
        key={`${detailsModalContentMode}-${modalKpiType}`}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setDetailsModalContentMode("fileKpi");
        }}
        kpiType={modalKpiType}
        isFinanceModule={selectedModule === "Finance Management"}
        contentMode={detailsModalContentMode}
        moduleName={selectedModule}
        subModuleName={selectedSubModule}
        serviceName={selectedService}
      />
    </div>
  );
}