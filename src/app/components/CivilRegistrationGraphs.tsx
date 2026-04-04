import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Colour tokens (from Figma) ───────────────────────────────────────────────
const C_APPLICATION = "#0cbea4";
const C_APPROVED    = "#33c1ef";
const C_REJECTED    = "#e8719f";
const C_IN_PROGRESS = "#bda6ff";
const C_DELAYED     = "#f5b95b";
const C_BIRTH       = "#0cbea4";
const C_DEATH       = "#33c1ef";
const C_MARRIAGE    = "#bda6ff";

// ─── Static data ─────────────────────────────────────────────────────────────

const Y_MAX = 30000;
const Y_STEPS = [30000, 25000, 20000, 15000, 10000, 5000, 0];

// Five-bar state totals (used by Disposal Rate, New Registrations, Corrections)
const STATE_TOTALS = [
  { label: "Total Application", value: 22500, color: C_APPLICATION },
  { label: "Total Approved",    value: 11800, color: C_APPROVED    },
  { label: "Total Rejected",    value: 17600, color: C_REJECTED    },
  { label: "Total In Progress", value: 14200, color: C_IN_PROGRESS },
  { label: "Total Delayed",     value:  7200, color: C_DELAYED     },
];

// Per-district single-bar data
const DISTRICTS = [
  { label: "TVM",     value: 18500 },
  { label: "Kollam",  value: 17500 },
  { label: "Pathanm", value:  7000 },
  { label: "Alappuz", value:  7000 },
  { label: "Kottaym", value: 18500 },
  { label: "Idukki",  value: 18500 },
  { label: "Ernklm",  value:  7500 },
  { label: "Thrissur",value:  7500 },
  { label: "Palakkd", value: 17000 },
  { label: "Malappr", value: 15000 },
  { label: "Kozhikd", value: 14000 },
  { label: "Wayanad", value: 12500 },
  { label: "Kannur",  value: 10500 },
  { label: "Kasargd", value:  9000 },
];

// Grouped data for "Application Count"
const APP_COUNT_GROUPS = [
  { label: "Birth Registration",   values: [22500, 11800, 17600, 14200, 7200] },
  { label: "Death Registration",   values: [21000, 11200, 16800, 13500, 6900] },
  { label: "Marriage Registration",values: [12400,  6800,  9200,  7900, 4100] },
];

// Birth-specific data
const CRUDE_BIRTH_RATE = [
  { label: "TVM",     value: 18.2 },
  { label: "Kollam",  value: 16.8 },
  { label: "Pathanm", value: 14.2 },
  { label: "Alappuz", value: 13.9 },
  { label: "Kottaym", value: 17.1 },
  { label: "Idukki",  value: 15.3 },
  { label: "Ernklm",  value: 16.0 },
  { label: "Thrissur",value: 15.7 },
  { label: "Palakkd", value: 18.9 },
  { label: "Malappr", value: 19.4 },
  { label: "Kozhikd", value: 18.1 },
  { label: "Wayanad", value: 14.8 },
  { label: "Kannur",  value: 15.6 },
  { label: "Kasargd", value: 14.1 },
];
const CBR_MAX = 25;

const BIRTH_SEX_RATIO = DISTRICTS.map((d, i) => ({
  label: d.label,
  value: 930 + ((i * 17) % 80),
}));
const SEX_RATIO_MAX = 1100;

const STILL_BIRTH_RATE = DISTRICTS.map((d, i) => ({
  label: d.label,
  value: parseFloat((3 + ((i * 1.3) % 12)).toFixed(1)),
}));
const STILL_MAX = 20;

// Year-wise comparison (Births)
const YEAR_WISE_BIRTHS = [
  { label: "2019", birth: 18000, stillBirth: 1200 },
  { label: "2020", birth: 17200, stillBirth: 1150 },
  { label: "2021", birth: 19400, stillBirth: 1300 },
  { label: "2022", birth: 20100, stillBirth: 1280 },
  { label: "2023", birth: 21500, stillBirth: 1350 },
];
const YEAR_MAX = 25000;

// Birth year-wise analysis (age group of mothers)
const BIRTH_AGE_ANALYSIS = [
  { label: "<18",   value: 3200  },
  { label: "18-25", value: 18400 },
  { label: "25-30", value: 22500 },
  { label: "30-35", value: 15200 },
  { label: "35-40", value:  7800 },
  { label: ">40",   value:  2100 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function barH(value: number, max: number) {
  return `${Math.min((value / max) * 100, 100)}%`;
}

// ─── Floating tooltip ─────────────────────────────────────────────────────────
interface TipRow { color: string; name: string; value: string }
interface TipState { label: string; rows: TipRow[] }

function GraphTooltip({ tip, mouse }: { tip: TipState; mouse: { x: number; y: number } }) {
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

// ─── Shared sub-components ────────────────────────────────────────────────────

function YAxis({ steps }: { steps: (number | string)[] }) {
  return (
    <div className="flex flex-col justify-between items-end pr-[12px] w-[52px] shrink-0 text-[12px] text-[#5c6e93] font-sans font-medium">
      {steps.map((v) => (
        <span key={v}>{typeof v === "number" ? v.toLocaleString() : v}</span>
      ))}
    </div>
  );
}

function GridLines({ count }: { count: number }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-full h-px border-b border-dashed border-[#e8eff4]" />
      ))}
    </div>
  );
}

function FilterChip({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="flex items-center gap-[12px] border border-[#e8eff4] rounded-[8px] px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">{label}</span>
      <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{value}</span>
      <ChevronDown className="w-4 h-4 text-[#5c6e93]" />
    </div>
  );
}

function StatDistrictToggle({
  value,
  onChange,
}: {
  value: "state" | "district";
  onChange: (v: "state" | "district") => void;
}) {
  return (
    <div className="bg-[#f2f6ff] flex gap-[4px] p-[4px] rounded-[8px] w-fit">
      {(["state", "district"] as const).map((v) => (
        <button
          type="button"
          key={v}
          onClick={() => onChange(v)}
          className={`px-[20px] py-[4px] rounded-[6px] text-[14px] font-sans font-semibold transition-colors ${
            value === v
              ? "bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
              : "text-[#232f50] opacity-60"
          }`}
        >
          {v === "state" ? "State Statistics" : "District Statistics"}
        </button>
      ))}
    </div>
  );
}

function DistrictLocalToggle({
  value,
  onChange,
}: {
  value: "district" | "local";
  onChange: (v: "district" | "local") => void;
}) {
  return (
    <div className="bg-[#f2f6ff] flex gap-[4px] p-[4px] rounded-[8px] w-fit">
      {(["district", "local"] as const).map((v) => (
        <button
          type="button"
          key={v}
          onClick={() => onChange(v)}
          className={`px-[20px] py-[4px] rounded-[6px] text-[14px] font-sans font-semibold transition-colors ${
            value === v
              ? "bg-white shadow-[0px_0px_4px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
              : "text-[#232f50] opacity-60"
          }`}
        >
          {v === "district" ? "District" : "Local Bodies"}
        </button>
      ))}
    </div>
  );
}

const STATUS_LEGEND = [
  { label: "Total Application", color: C_APPLICATION },
  { label: "Total Approved",    color: C_APPROVED    },
  { label: "Total Rejected",    color: C_REJECTED    },
  { label: "Total In Progress", color: C_IN_PROGRESS },
  { label: "Total Delayed",     color: C_DELAYED     },
];

function StatusLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[8px]">
      {STATUS_LEGEND.map((l) => (
        <div key={l.label} className="flex items-center gap-[8px] px-[8px] py-[4px]">
          <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: l.color }} />
          <span className="font-sans font-medium text-[13px] text-[#383c51] whitespace-nowrap">{l.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Individual graph renderers ───────────────────────────────────────────────

/** State totals: one bar per status category */
function FiveBarStateChart({ data }: { data: typeof STATE_TOTALS }) {
  const [tip, setTip] = useState<TipState | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <div className="flex gap-[12px] w-full items-end h-full" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
      <YAxis steps={Y_STEPS} />
      <div className="flex-1 relative min-h-0 h-full">
        <GridLines count={Y_STEPS.length} />
        <div className="absolute inset-0 flex items-end justify-center gap-[24px] px-[16px] pb-[28px] z-10">
          {data.map((bar) => (
            <div
              key={bar.label}
              className="flex flex-col items-center justify-end flex-1 h-full gap-[8px]"
              onMouseEnter={() => setTip({ label: bar.label, rows: [{ color: bar.color, name: "Count", value: bar.value.toLocaleString() }] })}
              onMouseLeave={() => setTip(null)}
            >
              <div
                className="w-full rounded-t-[8px] transition-all hover:opacity-80 cursor-default"
                style={{ height: barH(bar.value, Y_MAX), backgroundColor: bar.color }}
              />
              <span className="absolute -bottom-0 text-[11px] text-[#5c6e93] font-sans font-medium text-center whitespace-nowrap" style={{ transform: "translateY(100%)" }}>
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {tip && <GraphTooltip tip={tip} mouse={mouse} />}
    </div>
  );
}

/** District bars: one bar per district, single color */
function DistrictBarChart({
  data,
  max,
  color,
  valueLabel = "Count",
}: {
  data: { label: string; value: number }[];
  max: number;
  color: string;
  valueLabel?: string;
}) {
  const [tip, setTip] = useState<TipState | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <div className="flex gap-[12px] w-full items-end h-full" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
      <YAxis steps={[max, max * 0.833, max * 0.667, max * 0.5, max * 0.333, max * 0.167, 0].map((v) => Math.round(v))} />
      <div className="flex-1 relative min-h-0 h-full">
        <GridLines count={7} />
        <div className="absolute inset-0 flex items-end justify-between pb-[28px] px-[8px] z-10">
          {data.map((bar) => (
            <div
              key={bar.label}
              className="flex flex-col items-center justify-end flex-1 h-full"
              style={{ maxWidth: 36 }}
              onMouseEnter={() => setTip({ label: bar.label, rows: [{ color, name: valueLabel, value: bar.value.toLocaleString() }] })}
              onMouseLeave={() => setTip(null)}
            >
              <div
                className="w-full rounded-t-[4px] transition-all hover:opacity-80 cursor-default"
                style={{ height: barH(bar.value, max), backgroundColor: color }}
              />
              <span className="text-[10px] text-[#5c6e93] font-sans font-medium text-center mt-[4px] absolute -bottom-0" style={{ transform: "translateY(100%)" }}>
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {tip && <GraphTooltip tip={tip} mouse={mouse} />}
    </div>
  );
}

/** Grouped bar chart: Birth / Death / Marriage each with 5 sub-bars */
function GroupedBarChart() {
  const [tip, setTip] = useState<TipState | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <div className="flex gap-[12px] w-full items-end h-full" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
      <YAxis steps={Y_STEPS} />
      <div className="flex-1 relative min-h-0 h-full">
        <GridLines count={Y_STEPS.length} />
        <div className="absolute inset-0 flex items-end justify-center gap-[40px] md:gap-[80px] pb-[28px] px-[8px] z-10">
          {APP_COUNT_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col items-center justify-end gap-[12px] flex-1 h-full">
              <div className="flex items-end justify-center gap-[4px] w-full h-full">
                {STATUS_LEGEND.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex-1 rounded-t-[6px] transition-all hover:opacity-80 cursor-default"
                    style={{ height: barH(group.values[i], Y_MAX), backgroundColor: s.color }}
                    onMouseEnter={() => setTip({
                      label: group.label,
                      rows: [{ color: s.color, name: s.label, value: group.values[i].toLocaleString() }],
                    })}
                    onMouseLeave={() => setTip(null)}
                  />
                ))}
              </div>
              <span className="absolute -bottom-0 font-sans font-bold text-[12px] text-[#5c6e93] text-center whitespace-nowrap" style={{ transform: "translateY(100%)" }}>
                {group.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {tip && <GraphTooltip tip={tip} mouse={mouse} />}
    </div>
  );
}

/** Year-wise comparison: grouped pairs of Births + Still Births */
function YearWiseChart({ metric }: { metric: "births" | "stillbirths" }) {
  const [tip, setTip] = useState<TipState | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <div className="flex gap-[12px] w-full items-end h-full" onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}>
      <YAxis steps={[25000, 20000, 15000, 10000, 5000, 0]} />
      <div className="flex-1 relative min-h-0 h-full">
        <GridLines count={6} />
        <div className="absolute inset-0 flex items-end justify-center gap-[20px] md:gap-[40px] pb-[28px] px-[8px] z-10">
          {YEAR_WISE_BIRTHS.map((y) => {
            const val = metric === "births" ? y.birth : y.stillBirth;
            const color = metric === "births" ? C_BIRTH : C_REJECTED;
            const rowName = metric === "births" ? "Birth Count" : "Still Birth Count";
            return (
              <div
                key={y.label}
                className="flex flex-col items-center justify-end gap-[8px] flex-1 h-full"
                onMouseEnter={() => setTip({ label: y.label, rows: [{ color, name: rowName, value: val.toLocaleString() }] })}
                onMouseLeave={() => setTip(null)}
              >
                <div
                  className="w-full rounded-t-[6px] hover:opacity-80 transition-all cursor-default"
                  style={{ height: barH(val, YEAR_MAX), backgroundColor: color }}
                />
                <span className="absolute -bottom-0 font-sans font-semibold text-[11px] text-[#5c6e93] text-center" style={{ transform: "translateY(100%)" }}>
                  {y.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {tip && <GraphTooltip tip={tip} mouse={mouse} />}
    </div>
  );
}

// ─── Graph panel content per tab ──────────────────────────────────────────────

type GraphId =
  | "disposal"
  | "newReg"
  | "correction"
  | "appCount"
  | "crudeBirth"
  | "sexRatio"
  | "stillBirth"
  | "yearBirth"
  | "yearStillBirth"
  | "birthAnalysis";

const GRAPH_META: Record<GraphId, { title: string; desc: string }> = {
  disposal:       { title: "Performance based on the disposal of file",     desc: "District-wise civil registration file disposal performance" },
  newReg:         { title: "Application for new registrations",             desc: "New registration applications across registration types" },
  correction:     { title: "Application for correction",                    desc: "Correction applications across registration types" },
  appCount:       { title: "Application count – birth, death and marriage", desc: "Application breakdown across registration categories" },
  crudeBirth:     { title: "Crude birth rate",                              desc: "Birth rate per 1,000 population by district / local body" },
  sexRatio:       { title: "Birth sex ratio",                               desc: "Number of females per 1,000 males at birth" },
  stillBirth:     { title: "Still birth rate",                              desc: "Still births per 1,000 total births by district / local body" },
  yearBirth:      { title: "Year-wise comparison – births",                 desc: "Annual birth registration count comparison" },
  yearStillBirth: { title: "Year-wise comparison – still births",           desc: "Annual still birth registration count comparison" },
  birthAnalysis:  { title: "Birth year-wise analysis",                      desc: "Age-group distribution of mothers at time of birth" },
};

function GraphContent({ id }: { id: GraphId }) {
  const [view, setView]   = useState<"state" | "district">("state");
  const [scope, setScope] = useState<"district" | "local">("district");
  const [sort, setSort]   = useState("Descending");

  const meta = GRAPH_META[id];

  const hasScopeTabs  = ["crudeBirth", "sexRatio", "stillBirth"].includes(id);
  const hasStateTabs  = ["disposal", "newReg", "correction"].includes(id);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-sans font-semibold text-[16px] md:text-[20px] text-[#232f50] leading-[normal] capitalize">
            {meta.title}
          </h3>
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] leading-[normal]">
            {meta.desc}
          </p>
        </div>
        <div className="flex flex-wrap gap-[12px] items-center">
          <FilterChip
            label="Sort By:"
            value={sort}
            onClick={() => setSort((s) => (s === "Descending" ? "Ascending" : "Descending"))}
          />
        </div>
      </div>

      {/* Toggles */}
      {hasStateTabs && (
        <div className="mb-[20px]">
          <StatDistrictToggle value={view} onChange={setView} />
        </div>
      )}
      {hasScopeTabs && (
        <div className="mb-[20px]">
          <DistrictLocalToggle value={scope} onChange={setScope} />
        </div>
      )}

      {/* Legend */}
      {["disposal", "newReg", "correction", "appCount"].includes(id) && (
        <div className="mb-[20px]">
          <StatusLegend />
        </div>
      )}
      {id === "yearBirth" && (
        <div className="flex items-center gap-[8px] mb-[20px] px-[8px]">
          <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: C_BIRTH }} />
          <span className="font-sans font-medium text-[13px] text-[#383c51]">Birth Count</span>
        </div>
      )}
      {id === "yearStillBirth" && (
        <div className="flex items-center gap-[8px] mb-[20px] px-[8px]">
          <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: C_REJECTED }} />
          <span className="font-sans font-medium text-[13px] text-[#383c51]">Still Birth Count</span>
        </div>
      )}
      {id === "crudeBirth" && (
        <div className="flex items-center gap-[8px] mb-[20px] px-[8px]">
          <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: C_BIRTH }} />
          <span className="font-sans font-medium text-[13px] text-[#383c51]">Crude Birth Rate (per 1,000)</span>
        </div>
      )}
      {id === "sexRatio" && (
        <div className="flex items-center gap-[8px] mb-[20px] px-[8px]">
          <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: C_IN_PROGRESS }} />
          <span className="font-sans font-medium text-[13px] text-[#383c51]">Females per 1,000 males</span>
        </div>
      )}
      {id === "stillBirth" && (
        <div className="flex items-center gap-[8px] mb-[20px] px-[8px]">
          <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: C_REJECTED }} />
          <span className="font-sans font-medium text-[13px] text-[#383c51]">Still Birth Rate (per 1,000 births)</span>
        </div>
      )}
      {id === "birthAnalysis" && (
        <div className="flex items-center gap-[8px] mb-[20px] px-[8px]">
          <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: C_BIRTH }} />
          <span className="font-sans font-medium text-[13px] text-[#383c51]">Age group of mothers</span>
        </div>
      )}

      {/* Chart area */}
      <div className="flex-1 relative min-h-[220px]">
        {id === "appCount" && <GroupedBarChart />}

        {["disposal", "newReg", "correction"].includes(id) && view === "state" && (
          <FiveBarStateChart data={STATE_TOTALS} />
        )}
        {["disposal", "newReg", "correction"].includes(id) && view === "district" && (
          <DistrictBarChart data={DISTRICTS} max={Y_MAX} color={C_APPLICATION} />
        )}

        {id === "crudeBirth" && (
          <DistrictBarChart
            data={CRUDE_BIRTH_RATE.map((d) => ({ label: d.label, value: Math.round(d.value * 1000) }))}
            max={CBR_MAX * 1000}
            color={C_BIRTH}
          />
        )}
        {id === "sexRatio" && (
          <DistrictBarChart
            data={BIRTH_SEX_RATIO}
            max={SEX_RATIO_MAX}
            color={C_IN_PROGRESS}
          />
        )}
        {id === "stillBirth" && (
          <DistrictBarChart
            data={STILL_BIRTH_RATE.map((d) => ({ label: d.label, value: Math.round(d.value * 100) }))}
            max={STILL_MAX * 100}
            color={C_REJECTED}
          />
        )}
        {id === "yearBirth"      && <YearWiseChart metric="births" />}
        {id === "yearStillBirth" && <YearWiseChart metric="stillbirths" />}
        {id === "birthAnalysis"  && (
          <DistrictBarChart data={BIRTH_AGE_ANALYSIS} max={Y_MAX} color={C_BIRTH} />
        )}
      </div>
    </div>
  );
}

// ─── Sidebar config ───────────────────────────────────────────────────────────

const COMMON_TABS: { id: GraphId; label: string }[] = [
  { id: "disposal",  label: "Disposal Rate" },
  { id: "newReg",    label: "Application for New Registrations" },
  { id: "correction",label: "Application for Correction" },
  { id: "appCount",  label: "Application Count" },
];

const BIRTH_TABS: { id: GraphId; label: string }[] = [
  { id: "crudeBirth",     label: "Crude Birth Rate" },
  { id: "sexRatio",       label: "Birth Sex Ratio" },
  { id: "stillBirth",     label: "Still Birth Rates" },
  { id: "yearBirth",      label: "Year-wise Comparison (Births)" },
  { id: "yearStillBirth", label: "Year-wise Comparison (Still Births)" },
  { id: "birthAnalysis",  label: "Birth Year-wise Analysis" },
];

// ─── Main component ───────────────────────────────────────────────────────────

export function CivilRegistrationGraphs({
  selectedSubModule,
}: {
  selectedSubModule: string;
}) {
  const isBirth = selectedSubModule === "Birth Registration";

  const allTabs = isBirth ? [...COMMON_TABS, ...BIRTH_TABS] : COMMON_TABS;

  const [activeGraph, setActiveGraph] = useState<GraphId>("disposal");

  // If selected sub-module changes and active graph is no longer available, reset
  const availableIds = allTabs.map((t) => t.id);
  const safeActive = availableIds.includes(activeGraph) ? activeGraph : "disposal";

  return (
    <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:h-[606px] w-full shrink-0 p-[16px]">
      {/* Sidebar */}
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

        <div className="flex flex-col gap-[4px] w-full overflow-y-auto">
          <div className="flex flex-col font-sans font-medium justify-center leading-[0] opacity-70 relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap px-[4px] py-[8px]">
            <p className="leading-[20px]">Select Graph</p>
          </div>

          {/* Common graphs */}
          {COMMON_TABS.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveGraph(tab.id)}
              className={`content-stretch flex items-start p-[12px] relative w-full text-left rounded-[8px] transition-colors cursor-pointer ${
                safeActive === tab.id
                  ? "bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4]"
                  : "hover:bg-[#e8eff4]/50 border border-transparent"
              }`}
            >
              <span className={`font-sans leading-[20px] text-[13px] ${safeActive === tab.id ? "font-semibold text-[#232f50]" : "font-medium text-[#232f50]"}`}>
                {tab.label}
              </span>
            </button>
          ))}

          {/* Birth-only graphs */}
          {isBirth && (
            <>
              <div className="flex flex-col font-sans font-medium justify-center leading-[0] opacity-70 relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap px-[4px] py-[8px] mt-[8px]">
                <p className="leading-[20px]">Birth Statistics</p>
              </div>
              {BIRTH_TABS.map((tab) => (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveGraph(tab.id)}
                  className={`content-stretch flex items-start p-[12px] relative w-full text-left rounded-[8px] transition-colors cursor-pointer ${
                    safeActive === tab.id
                      ? "bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4]"
                      : "hover:bg-[#e8eff4]/50 border border-transparent"
                  }`}
                >
                  <span className={`font-sans leading-[20px] text-[13px] ${safeActive === tab.id ? "font-semibold text-[#232f50]" : "font-medium text-[#232f50]"}`}>
                    {tab.label}
                  </span>
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Graph content */}
      <div className="bg-white flex-[1_0_0] h-full relative rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px] min-h-[400px] overflow-hidden">
        <GraphContent key={safeActive} id={safeActive} />
      </div>
    </div>
  );
}
