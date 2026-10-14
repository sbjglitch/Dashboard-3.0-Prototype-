import { useId } from "react";
import {
  Baby, Briefcase, Building2, ChevronDown, Coins,
  LayoutGrid, Landmark, MessageSquareWarning, Users,
} from "lucide-react";

export const MODULES = [
  { id: "all", name: "All Modules", Icon: LayoutGrid },
  { id: "meetings", name: "Meeting Management", Icon: Users },
  { id: "finance", name: "Finance Management", Icon: Coins },
  { id: "building", name: "Building Permissions", Icon: Building2 },
  { id: "civil", name: "Civil Registration", Icon: Baby },
  { id: "tax", name: "Property Tax", Icon: Landmark },
  { id: "business", name: "Business Facilitation", Icon: Briefcase },
  { id: "grievance", name: "Public Grievance", Icon: MessageSquareWarning },
];

export const SUB_MODULES = ["All", "Overview", "New Permit", "Occupancy Certificate", "Renewal"];
export const SERVICES = ["All", "Summary Dashboard", "Building Permit", "Demolition Permit"];
export const DISTRICTS = ["All", "Thiruvananthapuram", "Kollam", "Ernakulam", "Thrissur", "Kozhikode"];
export const BODY_TYPES = ["All", "Corporation", "Municipality", "Grama Panchayat"];
export const LOCAL_BODIES = ["All", "Kochi", "Adoor", "Chengannur", "Ezhamkulam"];
export const PERIODS = ["All", "This month", "This year"];

export interface Scope {
  module: string;
  subModule: string;
  service: string;
  district: string;
  bodyType: string;
  localBody: string;
  period: string;
}

export const DEFAULT_SCOPE: Scope = {
  module: "all",
  subModule: "All",
  service: "All",
  district: "All",
  bodyType: "All",
  localBody: "All",
  period: "All",
};

export function Field({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className="w-full min-w-0">
      <label htmlFor={id} className="block font-sans font-medium text-[14px] text-[#232f50] leading-[20px] mb-[8px]">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[44px] appearance-none bg-white border border-[#e8eff4] rounded-[8px] pl-[18px] pr-[40px] font-sans font-medium text-[14px] text-[#232f50] leading-[20px] cursor-pointer shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none transition-colors hover:border-[#09327b] focus-visible:border-[#09327b] focus-visible:ring-2 focus-visible:ring-[#09327b]/25"
        >
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="w-4 h-4 text-[#5c6e93] absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      </div>
    </div>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] tracking-[0.04em]">
      {children}
    </p>
  );
}

export function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="w-full min-w-0">
      <legend className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] tracking-[0.04em] mb-[12px]">
        {label}
      </legend>
      <div className="flex flex-wrap gap-[8px]">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o)}
              className={`px-[16px] py-[12px] rounded-[12px] border font-sans text-[12px] leading-[16px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] ${
                active
                  ? "bg-[#e5f7fd] border-[#99e0f7] text-[#232f50] font-semibold"
                  : "bg-white border-[#e8eff4] text-[#232f50] font-medium hover:border-[#09327b]"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function ModuleRail({
  value,
  onChange,
  orientation = "vertical",
}: {
  value: string;
  onChange: (id: string) => void;
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <div
      role="tablist"
      aria-label="Module"
      aria-orientation={orientation}
      className={`flex gap-[4px] ${orientation === "vertical" ? "flex-col p-[12px]" : "flex-row p-[8px] overflow-x-auto"}`}
    >
      {MODULES.map((m) => {
        const active = value === m.id;
        return (
          <button
            key={m.id}
            role="tab"
            aria-selected={active}
            title={m.name}
            onClick={() => onChange(m.id)}
            className={`shrink-0 flex items-center justify-center size-[56px] rounded-[8px] border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] ${
              active
                ? "bg-[#e5f7fd] border-[#99e0f7] text-[#09327b]"
                : "bg-transparent border-transparent text-[#5c6e93] hover:bg-[#f6f9fb]"
            }`}
          >
            <m.Icon className="size-[24px]" aria-hidden="true" />
            <span className="sr-only">{m.name}</span>
          </button>
        );
      })}
    </div>
  );
}

/** Mock dashboard content so each variant is judged against realistic neighbours. */
export function StageContent({ scope }: { scope: Scope }) {
  const moduleName = MODULES.find((m) => m.id === scope.module)?.name ?? "All Modules";
  const kpis = [
    { label: "Total received", value: "51,251" },
    { label: "Disposed", value: "21,251" },
    { label: "Under process", value: "15,000" },
    { label: "Delayed", value: "15,000" },
  ];
  return (
    <div className="flex flex-col gap-[16px] min-w-0">
      <div className="flex flex-wrap items-baseline gap-x-[12px] gap-y-[4px]">
        <h2 className="font-sans font-semibold text-[20px] text-[#232f50] leading-[28px]">{moduleName}</h2>
        <p className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">
          {scope.district} · {scope.bodyType} · {scope.period}
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-[12px]">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white border border-[#d7e2f2] rounded-[12px] p-[16px]">
            <p className="font-sans font-medium text-[13px] text-[#475069] leading-[18px]">{k.label}</p>
            <p className="font-sans font-semibold text-[26px] text-[#232f50] leading-[1] mt-[6px] tabular-nums">{k.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-[#d7e2f2] rounded-[12px] overflow-hidden">
        <div className="bg-[#0c3080] px-[16px] py-[12px] grid grid-cols-3 gap-[12px]">
          {["Local Body", "Received", "Delayed"].map((h) => (
            <span key={h} className="font-sans font-semibold text-[13px] text-white leading-[18px]">{h}</span>
          ))}
        </div>
        {[["Thiruvananthapuram", "28,000", "10,000"], ["Ernakulam", "29,000", "9,000"], ["Kollam", "22,000", "8,000"]].map((r) => (
          <div key={r[0]} className="px-[16px] py-[14px] grid grid-cols-3 gap-[12px] border-b border-[#e8eff4] last:border-0">
            {r.map((c, i) => (
              <span key={i} className={`font-sans text-[13px] leading-[18px] tabular-nums ${i === 0 ? "font-semibold text-[#232f50]" : "font-medium text-[#475069]"}`}>{c}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
