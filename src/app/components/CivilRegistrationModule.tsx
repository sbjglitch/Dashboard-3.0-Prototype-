import React, { useState } from "react";
import { FileStatusKPICard } from "./FileStatusKPICard";
import { KpiTabsV3 } from "../v3/KpiTabsV3";
import { DetailsModal } from "./DetailsModal";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabId = "fileStatus" | "moduleDetails" | "digitalHealth";

// ─── Tooltip ─────────────────────────────────────────────────────────────────

function InfoTooltip({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="w-[16px] h-[16px] rounded-full bg-[#e8eff4] flex items-center justify-center cursor-default shrink-0">
        <span className="font-sans font-semibold text-[9px] text-[#5c6e93] leading-none select-none">i</span>
      </div>
      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none min-w-max">
          <div className="bg-[#232f50] text-white text-[12px] font-sans font-medium rounded-[8px] px-[10px] py-[8px] shadow-lg max-w-[220px] text-center leading-[18px]">
            {text}
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#232f50] mx-auto" />
        </div>
      )}
    </div>
  );
}

import { KpiCardV3 } from "../v3/KpiCardV3";

interface ModuleKpiCardProps {
  label: string;
  value: string;
  approvedValue: string;
  pendingValue: string;
  rate: string;
  bgClass: string;
  dotColor?: string;
  icon: React.ReactNode;
}

function ModuleKpiCard({
  label,
  value,
  approvedValue,
  pendingValue,
  rate,
  bgClass,
  icon,
}: ModuleKpiCardProps) {
  return (
    <KpiCardV3
      label={label}
      value={value}
      icon={icon}
      color={bgClass}
      badge={`Rate: ${rate}`}
      metrics={[
        { label: "Approved", value: approvedValue },
        { label: "Pending", value: pendingValue },
      ]}
    />
  );
}

// ─── Digital Health Card ──────────────────────────────────────────────────────

interface DigitalHealthKpi {
  label: string;
  value: number;
  color: string;
  tooltip?: string;
}

const DIGITAL_HEALTH_KPIS: DigitalHealthKpi[] = [
  {
    label: "Total Application",
    value: 51251,
    color: "bg-[#1ebe72]",
  },
  {
    label: "Citizen Login",
    value: 18420,
    color: "bg-[#009fd2]",
    tooltip: "How many applied through their own login",
  },
  {
    label: "Hospital Login",
    value: 9800,
    color: "bg-[#7b61ff]",
    tooltip: "How many applications went through the hospital login",
  },
  {
    label: "Akshaya Login",
    value: 7340,
    color: "bg-[#df3a7a]",
    tooltip: "How many applied through Akshaya",
  },
  {
    label: "Facilitation Centre Login",
    value: 6200,
    color: "bg-[#f59e0b]",
    tooltip: "How many applied through facilitation centre",
  },
  {
    label: "Institution Login",
    value: 5100,
    color: "bg-[#00a78e]",
  },
  {
    label: "Other Login",
    value: 4391,
    color: "bg-[#5c6e93]",
  },
];

function DigitalHealthCard({
  label,
  value,
  color,
  total,
}: DigitalHealthKpi & { total: number }) {
  const pct = ((value / total) * 100).toFixed(1) + "%";
  return (
    <KpiCardV3
      label={label}
      value={value}
      color={color}
      badge={pct}
    />
  );
}

// ─── Tab button icons ─────────────────────────────────────────────────────────

function FileStatusIcon({ active }: { active: boolean }) {
  const c = active ? "#00B2EB" : "#A2BFD8";
  const fill = active ? "#00B2EB" : "none";
  return (
    <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
      <path d="M2.66667 7.51245V5.33333C2.66667 4.96514 2.96514 4.66667 3.33333 4.66667H12.6667C13.0349 4.66667 13.3333 4.96514 13.3333 5.33333V8.84562" stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M3.33333 4.66667V2.66667C3.33333 2.29848 3.63181 2 4 2H12C12.3682 2 12.6667 2.29848 12.6667 2.66667V4.66667" stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path clipRule="evenodd" d="M2 12.6667V8.66667C2 7.93029 2.59695 7.33333 3.33333 7.33333H7.44771C7.80134 7.33333 8.14048 7.47381 8.39053 7.72386L8.94281 8.27614C9.19286 8.52619 9.532 8.66667 9.88562 8.66667H12.6667C13.403 8.66667 14 10V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667Z" fill={fill} fillRule="evenodd" stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M4.66667 11.3333H6" stroke={active ? "white" : "transparent"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function ModuleDetailsIcon({ active }: { active: boolean }) {
  const c = active ? "#00B2EB" : "#A2BFD8";
  return (
    <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke={c} strokeWidth="1.5" fill={active ? "#00B2EB" : "none"} strokeLinejoin="round" />
      <rect x="9" y="2" width="5" height="5" rx="1" stroke={c} strokeWidth="1.5" fill={active ? "#00B2EB" : "none"} strokeLinejoin="round" />
      <rect x="2" y="9" width="5" height="5" rx="1" stroke={c} strokeWidth="1.5" fill={active ? "#00B2EB" : "none"} strokeLinejoin="round" />
      <rect x="9" y="9" width="5" height="5" rx="1" stroke={c} strokeWidth="1.5" fill={active ? "#00B2EB" : "none"} strokeLinejoin="round" />
    </svg>
  );
}

function DigitalHealthIcon({ active }: { active: boolean }) {
  const c = active ? "#00B2EB" : "#A2BFD8";
  return (
    <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
      <path d="M8 14S2.5 10 2.5 5.5C2.5 3.5 4 2.5 5.5 2.5C6.5 2.5 7.5 3 8 4C8.5 3 9.5 2.5 10.5 2.5C12 2.5 13.5 3.5 13.5 5.5C13.5 10 8 14 8 14Z" stroke={c} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

// ─── Birth / Death / Marriage icons ──────────────────────────────────────────

const BirthIcon = () => (
  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
    <circle cx="8" cy="5" r="3" stroke="white" strokeWidth="1.5" />
    <path d="M2 13.5C2 11.5670 4.68629 10 8 10C11.3137 10 14 11.5670 14 13.5" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
    <path d="M8 12V15M6.5 13.5H9.5" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
  </svg>
);

const DeathIcon = () => (
  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
    <path d="M8 2C5.79086 2 4 3.79086 4 6C4 7.65685 4.96716 9.08626 6.38087 9.76393L6 14H10L9.61913 9.76393C11.0328 9.08626 12 7.65685 12 6C12 3.79086 10.2091 2 8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const MarriageIcon = () => (
  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
    <circle cx="5" cy="5" r="2.5" stroke="white" strokeWidth="1.5" />
    <circle cx="11" cy="5" r="2.5" stroke="white" strokeWidth="1.5" />
    <path d="M1 13C1 11.3431 2.79086 10 5 10" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
    <path d="M15 13C15 11.3431 13.2091 10 11 10" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
    <path d="M8 10V13M6.5 11.5H9.5" stroke="white" strokeLinecap="round" strokeWidth="1.5" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export function CivilRegistrationModule({
  selectedSubModule,
  onViewMore,
}: {
  selectedSubModule: string;
  onViewMore: (type?: "total" | "disposed" | "inProcess" | "delayed" | "all") => void;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("fileStatus");

  const dhTotal = DIGITAL_HEALTH_KPIS.reduce((sum, k) => sum + k.value, 0);
  const isBirthRegistration = selectedSubModule.toLowerCase().includes("birth");

  const tabs: { id: TabId; label: string; icon: (active: boolean) => React.ReactNode }[] = [
    { id: "fileStatus", label: "File Status", icon: (a) => <FileStatusIcon active={a} /> },
    { id: "moduleDetails", label: "Module Details", icon: (a) => <ModuleDetailsIcon active={a} /> },
    { id: "digitalHealth", label: "Digital Health", icon: (a) => <DigitalHealthIcon active={a} /> },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-[24px]">
      {/* Tab bar */}
      <KpiTabsV3
        tabs={tabs}
        activeTabId={activeTab}
        onChange={(id) => setActiveTab(id as TabId)}
      />

      {/* ── File Status ── */}
      {activeTab === "fileStatus" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-[24px] w-full">
          <FileStatusKPICard
            label="Total Received"
            value="51,251"
            subValue="25,251"
            subLabel="Citizen Files"
            otherValue="26,000"
            otherLabel="Other Files"
            color="bg-[#1ebe72]"
            onClick={() => onViewMore("total")}
          />
          <FileStatusKPICard
            label="Disposed"
            value="21,251"
            subValue="13,657"
            subLabel="Citizen Files"
            otherValue="7,594"
            otherLabel="Other Files"
            percentage="41.5%"
            color="bg-[#009fd2]"
            onClick={() => onViewMore("disposed")}
          />
          <FileStatusKPICard
            label="Under Process"
            value="15,000"
            subValue="10,000"
            subLabel="Citizen Files"
            otherValue="5,000"
            otherLabel="Other Files"
            percentage="25%"
            color="bg-[#7b61ff]"
            onClick={() => onViewMore("inProcess")}
          />
          <FileStatusKPICard
            label="Delayed"
            value="15,000"
            subValue="10,000"
            subLabel="Citizen Files"
            otherValue="5,000"
            otherLabel="Other Files"
            percentage="25%"
            color="bg-[#df3a7a]"
            onClick={() => onViewMore("delayed")}
          />
        </div>
      )}

      {/* ── Module Details ── */}
      {activeTab === "moduleDetails" && (
        <>
          {isBirthRegistration ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3 md:gap-[16px] w-full">
              {[
                { label: "Total Birth", value: 18420, color: "bg-[#1ebe72]" },
                { label: "Male Birth", value: 9620, color: "bg-[#009fd2]" },
                { label: "Female Birth", value: 8620, color: "bg-[#7b61ff]" },
                { label: "Transgender Birth", value: 120, color: "bg-[#df3a7a]" },
                { label: "Unidentified Births", value: 60, color: "bg-[#f59e0b]" },
              ].map((kpi) => (
                <KpiCardV3
                  key={kpi.label}
                  label={kpi.label}
                  value={kpi.value}
                  color={kpi.color}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-3 md:gap-[24px] w-full">
              <ModuleKpiCard
                label="Birth Count"
                value="18,420"
                approvedValue="15,200"
                pendingValue="3,220"
                rate="82.5%"
                bgClass="bg-[#1ebe72]"
                dotColor="text-[#1ebe72]"
                icon={<BirthIcon />}
              />
              <ModuleKpiCard
                label="Death Count"
                value="9,800"
                approvedValue="8,100"
                pendingValue="1,700"
                rate="82.7%"
                bgClass="bg-[#5c6e93]"
                dotColor="text-[#5c6e93]"
                icon={<DeathIcon />}
              />
              <ModuleKpiCard
                label="Marriage Count"
                value="7,340"
                approvedValue="5,900"
                pendingValue="1,440"
                rate="80.4%"
                bgClass="bg-[#df3a7a]"
                dotColor="text-[#df3a7a]"
                icon={<MarriageIcon />}
              />
            </div>
          )}
        </>
      )}

      {/* ── Digital Health ── */}
      {activeTab === "digitalHealth" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-[16px] w-full">
          {DIGITAL_HEALTH_KPIS.map((kpi) => (
            <DigitalHealthCard key={kpi.label} {...kpi} total={dhTotal} />
          ))}
        </div>
      )}
    </div>
  );
}
