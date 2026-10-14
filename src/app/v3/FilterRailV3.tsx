import { useId, useState } from "react";
import {
  Baby, Building2, ChevronDown, ChevronsLeft, ChevronsRight, Coins,
  Handshake, Landmark, MessageSquareWarning, PanelsTopLeft, Users,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import { TOOLTIP_CONTENT } from "./tooltipStyles";

export const RAIL_MODULES = [
  { key: "All Module", label: "All modules", Icon: PanelsTopLeft },
  { key: "Meeting Management", label: "Meeting Management", Icon: Users },
  { key: "Finance Management", label: "Finance Management", Icon: Coins },
  { key: "Building Permissions", label: "Building Permissions", Icon: Building2 },
  { key: "Civil Registration", label: "Civil Registration", Icon: Baby },
  { key: "Property Tax", label: "Property Tax", Icon: Landmark },
  { key: "Business Facilitation", label: "Business Facilitation", Icon: Handshake },
  { key: "Public Grievance and complaints", label: "Public Grievance", Icon: MessageSquareWarning },
];

export const PERIOD_CHIPS = [
  "All Time (Up to Today)",
  "Last 30 Days",
  "Last 12 Months",
  "Current Financial Year",
  "Previous Financial Year",
  "Custom Date Range",
] as const;

export const CUSTOM_PERIOD = "Custom Date Range";

const DISTRICTS = [
  "All", "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki",
  "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod",
];
const BODY_TYPES = ["All", "Corporation", "Municipality", "Grama Panchayat"];
const LOCAL_BODIES = ["All", "Thiruvananthapuram", "Kochi", "Kollam", "Adoor", "Chengannur", "Ezhamkulam"];

const sectionLabel = "font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]";

function SelectField({
  label,
  value,
  options,
  onChange,
  disabled,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  disabled?: boolean;
}) {
  const id = useId();
  return (
    <div className="w-full min-w-0">
      <label htmlFor={id} className="block font-sans font-medium text-[14px] text-[#232f50] leading-[20px] mb-[8px] px-[5px]">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[44px] appearance-none bg-white border border-[#e8eff4] rounded-[8px] pl-[16px] pr-[40px] font-sans font-medium text-[14px] text-[#232f50] leading-[20px] cursor-pointer shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none transition-colors hover:border-[#09327b] focus-visible:border-[#09327b] focus-visible:ring-2 focus-visible:ring-[#09327b]/25 disabled:cursor-not-allowed disabled:text-[#8292b0] disabled:hover:border-[#e8eff4]"
        >
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="size-[16px] text-[#5c6e93] absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      </div>
    </div>
  );
}

function DateField({ label, value, min, max, onChange }: {
  label: string; value: string; min?: string; max?: string; onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className="w-full min-w-0">
      <label htmlFor={id} className="block font-sans font-medium text-[13px] text-[#5c6e93] leading-[18px] mb-[6px]">{label}</label>
      <input
        id={id}
        type="date"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[44px] bg-white border border-[#e8eff4] rounded-[8px] px-[14px] font-sans font-medium text-[14px] text-[#232f50] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none transition-colors hover:border-[#09327b] focus-visible:border-[#09327b] focus-visible:ring-2 focus-visible:ring-[#09327b]/25"
      />
    </div>
  );
}

export interface RailScope {
  district: string;
  bodyType: string;
  localBody: string;
  period: string;
  from: string;
  to: string;
}

export function FilterRailV3({
  module,
  onModuleChange,
  subModule,
  subModuleOptions,
  onSubModuleChange,
  service,
  serviceOptions,
  onServiceChange,
  scope,
  onScopeChange,
}: {
  module: string;
  onModuleChange: (m: string) => void;
  subModule: string;
  subModuleOptions: string[];
  onSubModuleChange: (v: string) => void;
  service: string;
  serviceOptions: string[];
  onServiceChange: (v: string) => void;
  scope: RailScope;
  onScopeChange: (next: RailScope) => void;
}) {
  const [panelOpen, setPanelOpen] = useState(true);
  const [moduleOpen, setModuleOpen] = useState(true);
  const moduleSectionId = useId();
  const set = <K extends keyof RailScope>(k: K, v: RailScope[K]) => onScopeChange({ ...scope, [k]: v });

  return (
    <aside
      aria-label="Filters"
      className="relative lg:sticky lg:top-[92px] shrink-0 flex items-stretch gap-[8px] p-[8px] bg-[#fafcfe] border border-[#e8eff4] rounded-[12px] shadow-[0px_4px_8px_-2px_rgba(10,13,18,0.1),0px_2px_4px_-2px_rgba(10,13,18,0.06)] self-start h-[calc(100vh-104px)] lg:h-[calc(100dvh-104px)] max-h-[calc(100dvh-104px)]"
    >
      <div role="tablist" aria-label="Module" aria-orientation="vertical" className="flex flex-col w-[76px] shrink-0 gap-[4px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {RAIL_MODULES.map((m) => {
          const active = module === m.key;
          return (
            <Tooltip key={m.key}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onModuleChange(m.key)}
                  className={`press w-full min-h-[72px] py-[8px] px-[4px] flex flex-col items-center justify-center gap-[4px] rounded-[12px] border transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#09327b] ${
                    active
                      ? "bg-white border-[#e8eff4] text-[#e83a7a] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
                      : "border-transparent text-[#5c6e93] [@media(hover:hover)]:hover:bg-white/70 [@media(hover:hover)]:hover:text-[#232f50]"
                  }`}
                >
                  <m.Icon className="size-[22px] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span className={`font-sans text-[10px] leading-[12px] text-center tracking-tight ${active ? "font-semibold" : "font-medium"}`}>
                    {m.label}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={8} className={TOOLTIP_CONTENT}>
                {m.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      {/* Animated filter panel wrapper */}
      <div
        className="shrink-0 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col h-full"
        style={{
          width: panelOpen ? 244 : 0,
          marginLeft: panelOpen ? 0 : -8,
          opacity: panelOpen ? 1 : 0,
        }}
        aria-hidden={!panelOpen}
      >
        <div className="w-[244px] h-full flex flex-col shrink-0 bg-white border border-[#e8eff4] rounded-[12px] min-h-0 overflow-hidden">
          <div className="flex items-center justify-between h-[56px] shrink-0 pl-[16px] pr-[8px] border-b border-[#e8eff4]">
            <h2 className="font-sans font-semibold text-[16px] text-[#232f50] leading-[24px]">Filter</h2>
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              aria-label="Collapse filters"
              aria-expanded={true}
              tabIndex={panelOpen ? 0 : -1}
              className="press size-[40px] flex items-center justify-center rounded-[8px] text-[#5c6e93] [@media(hover:hover)]:hover:bg-[#f6f9fb] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
            >
              <ChevronsLeft className="size-[20px]" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto">

          <div className="p-[16px] flex flex-col gap-[16px] border-b border-[#e8eff4]">
            <button
              type="button"
              onClick={() => setModuleOpen((o) => !o)}
              aria-expanded={moduleOpen}
              aria-controls={moduleSectionId}
              tabIndex={panelOpen ? 0 : -1}
              className={`flex items-center justify-between w-full ${sectionLabel} hover:text-[#232f50] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]`}
            >
              MODULE
              <ChevronDown className={`size-[16px] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${moduleOpen ? "" : "-rotate-90"}`} aria-hidden="true" />
            </button>
            {moduleOpen && (
              <div id={moduleSectionId} className="flex flex-col gap-[16px]">
                <SelectField
                  label="Sub-Module"
                  value={subModule}
                  options={subModuleOptions}
                  onChange={onSubModuleChange}
                  disabled={subModuleOptions.length <= 1}
                />
                <SelectField
                  label="Service"
                  value={service}
                  options={serviceOptions}
                  onChange={onServiceChange}
                  disabled={serviceOptions.length <= 1}
                />
              </div>
            )}
          </div>

          <div className="p-[16px] flex flex-col gap-[16px] border-b border-[#e8eff4]">
            <p className={sectionLabel}>LOCAL BODY / STATE</p>
            <SelectField label="District" value={scope.district} options={DISTRICTS} onChange={(v) => set("district", v)} />
            <SelectField label="Local Body Type" value={scope.bodyType} options={BODY_TYPES} onChange={(v) => set("bodyType", v)} />
            <SelectField label="Local Body" value={scope.localBody} options={LOCAL_BODIES} onChange={(v) => set("localBody", v)} />
          </div>

          <fieldset className="p-[16px] flex flex-col gap-[16px] min-w-0">
            <legend className="sr-only">Time Period</legend>
            <p className={sectionLabel} aria-hidden="true">Time Period</p>
            <div className="flex flex-wrap gap-[8px]">
              {PERIOD_CHIPS.map((p) => {
                const active = scope.period === p;
                return (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={active}
                    onClick={() => set("period", p)}
                    tabIndex={panelOpen ? 0 : -1}
                    className={`press px-[16px] py-[10px] rounded-[12px] border font-sans font-semibold text-[14px] text-[#232f50] leading-[20px] whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] ${
                      active ? "bg-[#e5f7fd] border-[#b2e8f9]" : "bg-white border-[#e8eff4] [@media(hover:hover)]:hover:border-[#09327b]"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
            {scope.period === CUSTOM_PERIOD && (
              <div className="flex flex-col gap-[12px]">
                <DateField label="From" value={scope.from} max={scope.to || undefined} onChange={(v) => set("from", v)} />
                <DateField label="To" value={scope.to} min={scope.from || undefined} onChange={(v) => set("to", v)} />
              </div>
            )}
          </fieldset>
          </div>
        </div>
      </div>

      {/* Expand button — always rendered, fades in/out opposite to panel */}
      <button
        type="button"
        onClick={() => setPanelOpen(true)}
        aria-label="Expand filters"
        aria-expanded={false}
        tabIndex={panelOpen ? -1 : 0}
        className={`press absolute top-[12px] -right-[14px] z-10 size-[28px] flex items-center justify-center bg-white border border-[#e8eff4] rounded-[8px] text-[#232f50] shadow-[0px_2px_4px_-1px_rgba(10,13,18,0.12),0px_1px_2px_0px_rgba(10,13,18,0.06)] hover:border-[#09327b] hover:text-[#09327b] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] ${
          panelOpen ? "opacity-0 pointer-events-none scale-75" : "opacity-100 pointer-events-auto scale-100"
        }`}
      >
        <ChevronsRight className="size-[16px]" aria-hidden="true" />
      </button>
    </aside>
  );
}
