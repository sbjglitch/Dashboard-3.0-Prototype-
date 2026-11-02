import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import {
  Calendar, CalendarX, ChartColumn, Check, CircleAlert, CircleCheck, Database,
  FileCheck, FileDown, FileText, FileX, Folder, Hourglass, MapPin, ShieldPlus, Users,
} from "lucide-react";
import { DetailsModal, type DetailsModalContentMode } from "./components/DetailsModal";
import { GrievanceModule } from "./components/GrievanceModule";
import { FinanceModule } from "./components/FinanceModule";
import { CivilRegistrationModule } from "./components/CivilRegistrationModule";
import { CivilRegistrationGraphs } from "./components/CivilRegistrationGraphs";
import { BuildingFinanceOverview } from "./components/BuildingFinanceOverview";
import { BuildingPermissionGraphs } from "./components/BuildingPermissionGraphs";
import { MeetingManagementGraphs } from "./components/MeetingManagementGraphs";
import { BusinessFacilitationGraphs } from "./components/BusinessFacilitationGraphs";
import { PropertyTaxGraphs } from "./components/PropertyTaxGraphs";
import { MODULE_DATA } from "./data/serviceData";
import { HeaderV3 } from "./v3/HeaderV3";
import { FilterRailV3, RAIL_MODULES, CUSTOM_PERIOD, type RailScope } from "./v3/FilterRailV3";
import { KpiCardV3 } from "./v3/KpiCardV3";
import { KpiTabsV3 } from "./v3/KpiTabsV3";
import { SliBarChart } from "./v3/SliBarChart";
import { DashboardSkeletonV3 } from "./v3/DashboardSkeletonV3";
import { CommandPaletteV3, CommandPaletteTrigger, useCommandPalette } from "./v3/CommandPaletteV3";

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




type MainTab = "fileStatus" | "finance" | "digitalHealth";
type KpiType = "total" | "disposed" | "inProcess" | "delayed" | "all";

const PERIOD_PILL: Record<string, string> = {
  "All Time (Up to Today)": "Upto Today",
  "Last 30 Days": "Last 30 Days",
  "Last 12 Months": "Last 12 Months",
  "Current Financial Year": "Current FY",
  "Previous Financial Year": "Previous FY",
};

const REPORT_ROUTES: Record<string, string> = {
  "Building Permissions": "/reports/building-permission",
  "Public Grievance and complaints": "/reports/grievance",
};

const MEETING_SUBMODULES = ["Council Meetings", "Panchayat Meetings", "Committee Meetings"];

function ContextPill({ Icon, children }: { Icon: typeof Calendar; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-[8px] h-[38px] px-[12px] bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-semibold text-[14px] text-[#232f50] leading-[20px] whitespace-nowrap max-w-[300px]">
      <Icon className="size-[16px] shrink-0 text-[#5c6e93]" aria-hidden="true" />
      <span className="truncate">{children}</span>
    </span>
  );
}

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-white border border-[#e8eff4] rounded-[12px] p-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ${className}`}>
      {children}
    </section>
  );
}

export default function AppV3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKpiType, setModalKpiType] = useState<KpiType>("all");
  const [detailsModalContentMode, setDetailsModalContentMode] = useState<DetailsModalContentMode>("fileKpi");

  // Opens on the state the Figma comp shows.
  const [selectedModule, setSelectedModule] = useState("Building Permissions");
  const [selectedSubModule, setSelectedSubModule] = useState("Permit & Approval");
  const [selectedService, setSelectedService] = useState("General Permit");
  const [activeMainTab, setActiveMainTab] = useState<MainTab>("fileStatus");
  const [scope, setScope] = useState<RailScope>({
    district: "All",
    bodyType: "All",
    localBody: "All",
    period: "All Time (Up to Today)",
    from: "",
    to: "",
  });

  const { open: paletteOpen, setOpen: setPaletteOpen } = useCommandPalette();
  const [filtersOpen, setFiltersOpen] = useState(true);

  // Simulated fetch on any scope change. The timer is cleared on each change, so
  // stepping through several filters fires one load at the end rather than one each.
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 550);
    return () => clearTimeout(timer);
  }, [selectedModule, selectedSubModule, selectedService, scope]);

  const isPropertyTaxModule = selectedModule === "Property Tax";
  const isMeeting = selectedModule === "Meeting Management";
  const isAllModule = selectedModule === "All Module";
  const showDigitalHealthTab = isPropertyTaxModule && PT_DIGITAL_HEALTH_SUBMODULES.includes(selectedSubModule);
  const digitalHealthKpis = PT_DIGITAL_HEALTH_KPI_MAP[selectedSubModule] ?? [];
  const digitalHealthTotal = digitalHealthKpis.reduce((a, b) => a + b.value, 0);

  const subModuleOptions = useMemo(() => {
    if (isAllModule) return ["Overview"];
    if (isMeeting) return ["All", ...MEETING_SUBMODULES];
    return ["All", ...Object.keys(MODULE_DATA[selectedModule] || {})];
  }, [selectedModule, isAllModule, isMeeting]);

  const serviceOptions = useMemo(() => {
    if (isAllModule) return ["Summary Dashboard"];
    if (selectedSubModule === "All") return ["All"];
    return ["All", ...(MODULE_DATA[selectedModule]?.[selectedSubModule] || [])];
  }, [selectedModule, selectedSubModule, isAllModule]);

  const handleModuleChange = (module: string) => {
    setSelectedModule(module);
    if (module === "All Module") {
      setSelectedSubModule("Overview");
      setSelectedService("Summary Dashboard");
    } else {
      setSelectedSubModule("All");
      setSelectedService("All");
    }
    setActiveMainTab("fileStatus");
  };

  const handleSubModuleChange = (sub: string) => {
    setSelectedSubModule(sub);
    setSelectedService("All");
    if (!PT_DIGITAL_HEALTH_SUBMODULES.includes(sub)) {
      setActiveMainTab((prev) => (prev === "digitalHealth" ? "fileStatus" : prev));
    }
  };

  const openDetail = (mode: DetailsModalContentMode, type: KpiType) => {
    setDetailsModalContentMode(mode);
    setModalKpiType(type);
    setIsModalOpen(true);
  };

  const periodPill =
    scope.period === CUSTOM_PERIOD
      ? scope.from || scope.to
        ? `${scope.from || "…"} – ${scope.to || "…"}`
        : "Custom range"
      : PERIOD_PILL[scope.period] ?? scope.period;
  const placePill =
    scope.localBody !== "All" ? scope.localBody : scope.district !== "All" ? scope.district : "Kerala";
  const moduleLabel = RAIL_MODULES.find((m) => m.key === selectedModule)?.label ?? selectedModule;
  const modulePill =
    isAllModule
      ? "All modules"
      : selectedService !== "All"
        ? `${moduleLabel}-${selectedService}`
        : selectedSubModule !== "All"
          ? `${moduleLabel}-${selectedSubModule}`
          : moduleLabel;
  const reportRoute = REPORT_ROUTES[selectedModule];

  const tabs: { id: MainTab; label: string; Icon: typeof Folder }[] = [
    { id: "fileStatus", label: "File Status", Icon: Folder },
    { id: "finance", label: isPropertyTaxModule ? "DCB" : "Finance", Icon: Database },
    ...(showDigitalHealthTab ? [{ id: "digitalHealth" as const, label: "Digital Health", Icon: ShieldPlus }] : []),
  ];

  const fileKpis = [
    { type: "total" as const, label: "Total Received", value: 51251, Icon: FileDown, tone: "#0ea5e0",
      split: { primaryLabel: "Citizen File", primary: 25251, secondaryLabel: "Internal File", secondary: 26000 } },
    { type: "disposed" as const, label: "Disposed", value: 21251, Icon: Check, tone: "#1ebe72",
      split: { primaryLabel: "Citizen File", primary: 13657, secondaryLabel: "Internal File", secondary: 7594 } },
    { type: "inProcess" as const, label: "Under Process", value: 15000, Icon: Hourglass, tone: "#f5841f",
      split: { primaryLabel: "Citizen File", primary: 10000, secondaryLabel: "Internal File", secondary: 5000 } },
    { type: "delayed" as const, label: "Delayed", value: 15000, Icon: CircleAlert, tone: "#ef4a5a",
      split: { primaryLabel: "Citizen File", primary: 10000, secondaryLabel: "Internal File", secondary: 5000 } },
  ];

  const meetingKpis = [
    { label: "All meetings", value: 51251, Icon: Users, tone: "#1ebe72", caption: "Across all local bodies" },
    { label: "Meetings held", value: 21251, Icon: CircleCheck, tone: "#0ea5e0", caption: "41.5% of all meetings" },
    { label: "Meetings cancelled", value: 15000, Icon: CalendarX, tone: "#7b61ff", caption: "25% of all meetings" },
    { label: "Minutes approved", value: 15000, Icon: FileCheck, tone: "#df3a7a", caption: "25% of all meetings" },
    { label: "Minutes not approved", value: 10000, Icon: FileX, tone: "#f5841f", caption: "18% of all meetings" },
  ];

  const ownsContent =
    selectedModule === "Finance Management" ||
    selectedModule === "Civil Registration" ||
    selectedModule === "Public Grievance and complaints";

  return (
    <div className="min-h-screen bg-[#f1f5f8]">
      <a
        href="#v3-main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-[12px] focus:px-[14px] focus:py-[10px] focus:rounded-[8px] focus:bg-[#09327b] focus:text-white focus:font-sans focus:font-semibold focus:text-[14px]"
      >
        Skip to dashboard
      </a>
      <HeaderV3 />

      <div className="flex flex-col lg:flex-row items-start gap-[16px] p-[12px]">
        <FilterRailV3
          module={selectedModule}
          onModuleChange={handleModuleChange}
          subModule={selectedSubModule}
          subModuleOptions={subModuleOptions}
          onSubModuleChange={handleSubModuleChange}
          service={selectedService}
          serviceOptions={serviceOptions}
          onServiceChange={setSelectedService}
          scope={scope}
          onScopeChange={setScope}
          panelOpen={filtersOpen}
          onPanelOpenChange={setFiltersOpen}
        />

        <main id="v3-main" aria-busy={isLoading} className="flex-1 min-w-0 w-full flex flex-col gap-[16px]">
          <p role="status" aria-live="polite" className="sr-only">
            {isLoading ? "Loading dashboard" : `${moduleLabel} dashboard updated`}
          </p>
          {isLoading ? <DashboardSkeletonV3 /> : <>
          <CardShell className="flex flex-wrap items-center justify-between gap-[12px]">
            <h1 className="font-sans font-semibold text-[24px] text-[#232f50] leading-[28px]">{moduleLabel}</h1>
            <div className="flex flex-wrap items-center gap-[16px]">
              <CommandPaletteTrigger onClick={() => setPaletteOpen(true)} />
              <div className="flex flex-wrap items-center gap-[8px]" aria-label="Current scope">
                <ContextPill Icon={Calendar}>{periodPill}</ContextPill>
                <ContextPill Icon={MapPin}>{placePill}</ContextPill>
                <ContextPill Icon={ChartColumn}>{modulePill}</ContextPill>
              </div>
              {reportRoute && (
                <Link
                  to={reportRoute}
                  className="press inline-flex items-center justify-center gap-[8px] w-[128px] h-[36px] bg-[#e83a7a] border border-[#e83a7a] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-semibold text-[14px] text-white leading-[20px] [@media(hover:hover)]:hover:bg-[#d62d69] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
                >
                  <FileText className="size-[16px]" aria-hidden="true" />
                  Report
                </Link>
              )}
            </div>
          </CardShell>

          {ownsContent ? (
            <CardShell className="flex flex-col gap-[16px]">
              {selectedModule === "Finance Management" && (
                <FinanceModule selectedLocalBody={placePill} onViewMore={() => openDetail("fileKpi", "all")} />
              )}
              {selectedModule === "Civil Registration" && (
                <>
                  <CivilRegistrationModule
                    selectedSubModule={selectedSubModule}
                    onViewMore={(type) => openDetail("fileKpi", (type as KpiType) || "all")}
                  />
                  <CivilRegistrationGraphs selectedSubModule={selectedSubModule} />
                </>
              )}
              {selectedModule === "Public Grievance and complaints" && (
                <GrievanceModule
                  selectedLocalBody={placePill}
                  onViewMore={(type) => openDetail("fileKpi", (type as KpiType) || "all")}
                />
              )}
            </CardShell>
          ) : (
            <>
              <CardShell className="flex flex-col gap-[16px]">
                {isAllModule || isMeeting ? (
                  <div className="flex flex-wrap items-center justify-between gap-[12px]">
                    <h2 className="font-sans font-semibold text-[16px] text-[#232f50] leading-[24px]">
                      {isMeeting ? "Meeting Status" : "File Status"}
                    </h2>
                    {isMeeting && (
                      <button
                        type="button"
                        onClick={() => openDetail("meetingManagement", "all")}
                        className="press h-[36px] px-[14px] bg-white border border-[#e8eff4] rounded-[8px] font-sans font-semibold text-[14px] text-[#232f50] [@media(hover:hover)]:hover:border-[#09327b] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
                      >
                        View More Details
                      </button>
                    )}
                  </div>
                ) : (
                  <KpiTabsV3
                    tabs={tabs}
                    activeTabId={activeMainTab}
                    onChange={setActiveMainTab}
                  />
                )}

                {activeMainTab === "fileStatus" &&
                  (isMeeting ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-[16px]">
                      {meetingKpis.map((k) => (
                        <KpiCardV3 key={k.label} {...k} onDetail={() => openDetail("meetingManagement", "all")} />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
                      {fileKpis.map((k) => (
                        <KpiCardV3
                          key={k.type}
                          label={k.label}
                          value={k.value}
                          Icon={k.Icon}
                          tone={k.tone}
                          split={k.split}
                          onDetail={() => openDetail("fileKpi", k.type)}
                        />
                      ))}
                    </div>
                  ))}

                {activeMainTab === "finance" &&
                  (isPropertyTaxModule ? (
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-[16px]">
                      <KpiCardV3
                        label="Demand"
                        value="51,251"
                        prefix="₹"
                        tone="#00a78e"
                        Icon={Landmark}
                        metrics={[
                          { label: "Arrear Demand", value: "₹ 25,251" },
                          { label: "Current Demand", value: "₹ 25,251" },
                        ]}
                        actionLabel="View More Details"
                        onDetail={() => openDetail("propertyTaxFinance", "total")}
                      />
                      <KpiCardV3
                        label="Collection"
                        value="25,251"
                        prefix="₹"
                        tone="#00b2eb"
                        Icon={Check}
                        metrics={[
                          { label: "Arrear Demand", value: "₹ 15,251" },
                          { label: "Current Demand", value: "₹ 10,000" },
                        ]}
                        actionLabel="View More Details"
                        onDetail={() => openDetail("propertyTaxFinance", "disposed")}
                      />
                      <KpiCardV3
                        label="Balance"
                        value="26,000"
                        prefix="₹"
                        tone="#7b61ff"
                        Icon={Hourglass}
                        metrics={[
                          { label: "Arrear Demand", value: "₹ 12,000" },
                          { label: "Current Demand", value: "₹ 14,000" },
                        ]}
                        actionLabel="View More Details"
                        onDetail={() => openDetail("propertyTaxFinance", "inProcess")}
                      />
                    </div>
                  ) : selectedModule === "Building Permissions" ? (
                    <BuildingFinanceOverview onViewMore={() => openDetail("buildingFinance", "all")} />
                  ) : (
                    <FinanceModule selectedLocalBody={placePill} onViewMore={() => openDetail("fileKpi", "all")} />
                  ))}

                {activeMainTab === "digitalHealth" && showDigitalHealthTab && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[16px]">
                    {digitalHealthKpis.map((kpi) => (
                      <KpiCardV3
                        key={kpi.label}
                        label={kpi.label}
                        value={kpi.value}
                        color={kpi.color}
                        badge={((kpi.value / digitalHealthTotal) * 100).toFixed(1) + "%"}
                      />
                    ))}
                  </div>
                )}
              </CardShell>

              {!isMeeting && <SliBarChart />}

              {selectedModule === "Building Permissions" && (
                <CardShell><BuildingPermissionGraphs selectedLocalBody={placePill} /></CardShell>
              )}
              {isMeeting && <CardShell><MeetingManagementGraphs selectedLocalBody={placePill} /></CardShell>}
              {selectedModule === "Business Facilitation" && (
                <CardShell><BusinessFacilitationGraphs selectedLocalBody={placePill} /></CardShell>
              )}
              {isPropertyTaxModule && <CardShell><PropertyTaxGraphs selectedLocalBody={placePill} /></CardShell>}
            </>
          )}
          </>}
        </main>
      </div>

      <CommandPaletteV3
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        actions={{
          onModule: handleModuleChange,
          onSubModule: (m, sub) => {
            if (m !== selectedModule) handleModuleChange(m);
            handleSubModuleChange(sub);
          },
          onService: (m, sub, svc) => {
            setSelectedModule(m);
            setSelectedSubModule(sub);
            setSelectedService(svc);
            setActiveMainTab("fileStatus");
          },
          onScope: (patch) => setScope((prev) => ({ ...prev, ...patch })),
          onTab: setActiveMainTab,
          onToggleFilters: setFiltersOpen,
          filtersOpen,
          availableTabs: tabs.map((t) => ({ id: t.id, label: t.label })),
        }}
      />

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
