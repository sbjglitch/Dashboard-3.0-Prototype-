import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BarChart } from "@mui/x-charts/BarChart";

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

const STATE_TOTALS = [
  { label: "Total Application", value: 22500, color: C_APPLICATION },
  { label: "Total Approved",    value: 11800, color: C_APPROVED    },
  { label: "Total Rejected",    value: 17600, color: C_REJECTED    },
  { label: "Total In Progress", value: 14200, color: C_IN_PROGRESS },
  { label: "Total Delayed",     value:  7200, color: C_DELAYED     },
];

const DISTRICTS = [
  { district: "Thiruvananthapuram", totalFiles: 18500, disposedFiles: 12300, pendingFiles: 6200 },
  { district: "Kollam",            totalFiles: 17500, disposedFiles: 11800, pendingFiles: 5700 },
  { district: "Pathanamthitta",    totalFiles:  7000, disposedFiles:  4900, pendingFiles: 2100 },
  { district: "Alappuzha",         totalFiles:  7000, disposedFiles:  5200, pendingFiles: 1800 },
  { district: "Kottayam",          totalFiles: 18500, disposedFiles: 13100, pendingFiles: 5400 },
  { district: "Idukki",            totalFiles: 18500, disposedFiles: 14200, pendingFiles: 4300 },
  { district: "Ernakulam",         totalFiles:  7500, disposedFiles:  5600, pendingFiles: 1900 },
  { district: "Thrissur",          totalFiles:  7500, disposedFiles:  5100, pendingFiles: 2400 },
  { district: "Palakkad",          totalFiles: 17000, disposedFiles: 11400, pendingFiles: 5600 },
  { district: "Malappuram",        totalFiles: 15000, disposedFiles:  9800, pendingFiles: 5200 },
  { district: "Kozhikode",         totalFiles: 14000, disposedFiles: 10200, pendingFiles: 3800 },
  { district: "Wayanad",           totalFiles: 12500, disposedFiles:  9100, pendingFiles: 3400 },
  { district: "Kannur",            totalFiles: 10500, disposedFiles:  7300, pendingFiles: 3200 },
  { district: "Kasaragod",         totalFiles:  9000, disposedFiles:  6400, pendingFiles: 2600 },
];

const APP_COUNT_GROUPS = [
  { label: "Birth Registration",   values: [22500, 11800, 17600, 14200, 7200] },
  { label: "Death Registration",   values: [21000, 11200, 16800, 13500, 6900] },
  { label: "Marriage Registration",values: [12400,  6800,  9200,  7900, 4100] },
];

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
  label: d.district,
  value: 930 + ((i * 17) % 80),
}));
const SEX_RATIO_MAX = 1100;

const STILL_BIRTH_RATE = DISTRICTS.map((d, i) => ({
  label: d.district,
  value: parseFloat((3 + ((i * 1.3) % 12)).toFixed(1)),
}));
const STILL_MAX = 20;

// Local body mock datasets (Birth Registration)
const LOCAL_BODIES_TOP_20 = [
  "Thiruvananthapuram Corp",
  "Kochi Corp",
  "Kozhikode Corp",
  "Thrissur Corp",
  "Kollam Corp",
  "Alappuzha Muni",
  "Kottayam Muni",
  "Palakkad Muni",
  "Kannur Muni",
  "Malappuram Muni",
  "Varkala Muni",
  "Kanhangad Muni",
  "Chalakudy Muni",
  "Nedumangad Muni",
  "Ponnani Muni",
  "Kalamassery Muni",
  "Ottapalam Muni",
  "Perinthalmanna Muni",
  "Vadakara Muni",
  "Mattannur Muni",
];

const LOCAL_BODIES_BOTTOM_20 = [
  "Puzhakkal Grama Panch.",
  "Perumanna Grama Panch.",
  "Mokeri Grama Panch.",
  "Kadukutty Grama Panch.",
  "Edathua Grama Panch.",
  "Meenadam Grama Panch.",
  "Kodanchery Grama Panch.",
  "Kuruva Grama Panch.",
  "Elankunnapuzha Grama",
  "Koppam Grama Panch.",
  "Alagappanagar Grama",
  "Aymanam Grama Panch.",
  "Thenkara Grama Panch.",
  "Mankada Grama Panch.",
  "Edavaka Grama Panch.",
  "Oachira Grama Panch.",
  "Bharananganam Grama",
  "Marady Grama Panch.",
  "Arookutty Grama Panch.",
  "Kanimangalam Grama",
];

const LOCAL_BODY_CRUDE_BIRTH_TOP = LOCAL_BODIES_TOP_20.map((label, i) => ({
  label,
  value: parseFloat((19.5 - (i % 7) * 0.6).toFixed(1)),
}));
const LOCAL_BODY_CRUDE_BIRTH_BOTTOM = LOCAL_BODIES_BOTTOM_20.map((label, i) => ({
  label,
  value: parseFloat((11.2 - (i % 8) * 0.5).toFixed(1)),
}));

const LOCAL_BODY_SEX_RATIO_TOP = LOCAL_BODIES_TOP_20.map((label, i) => ({
  label,
  value: 980 - (i % 10) * 6,
}));
const LOCAL_BODY_SEX_RATIO_BOTTOM = LOCAL_BODIES_BOTTOM_20.map((label, i) => ({
  label,
  value: 900 - (i % 10) * 7,
}));

const LOCAL_BODY_STILL_BIRTH_TOP = LOCAL_BODIES_TOP_20.map((label, i) => ({
  label,
  value: parseFloat((7.8 - (i % 8) * 0.35).toFixed(1)),
}));
const LOCAL_BODY_STILL_BIRTH_BOTTOM = LOCAL_BODIES_BOTTOM_20.map((label, i) => ({
  label,
  value: parseFloat((3.4 - (i % 8) * 0.25).toFixed(1)),
}));

const YEAR_WISE_BIRTHS = [
  { label: "2019", birth: 18000, stillBirth: 1200 },
  { label: "2020", birth: 17200, stillBirth: 1150 },
  { label: "2021", birth: 19400, stillBirth: 1300 },
  { label: "2022", birth: 20100, stillBirth: 1280 },
  { label: "2023", birth: 21500, stillBirth: 1350 },
];
const YEAR_MAX = 25000;

const BIRTH_AGE_ANALYSIS = [
  { label: "<18",   value: 3200  },
  { label: "18-25", value: 18400 },
  { label: "25-30", value: 22500 },
  { label: "30-35", value: 15200 },
  { label: "35-40", value:  7800 },
  { label: ">40",   value:  2100 },
];

// ─── Shared sub-components ────────────────────────────────────────────────────

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

const valueFormatter = (value: number | null) =>
  value != null ? value.toLocaleString() : "";

// ─── Individual graph renderers ───────────────────────────────────────────────

function DistrictDatasetChart({ data }: { data: typeof DISTRICTS }) {
  return (
    <div className="w-full flex flex-col items-center justify-end h-full">
      <BarChart
        dataset={data}
        xAxis={[{
          scaleType: "band",
          dataKey: "district",
          tickLabelStyle: { fontSize: 10, fill: "#5c6e93", angle: -35, textAnchor: "end" },
        }]}
        yAxis={[{ tickLabelStyle: { fontSize: 11, fill: "#5c6e93" } }]}
        series={[
          { dataKey: "totalFiles", label: "Total Files", valueFormatter, color: "#0cbea4" },
          { dataKey: "disposedFiles", label: "Disposed Files", valueFormatter, color: "#33c1ef" },
          { dataKey: "pendingFiles", label: "Pending Files", valueFormatter, color: "#f5b95b" },
        ]}
        borderRadius={4}
        grid={{ horizontal: true }}
        height={400}
        margin={{ bottom: 80, top: 10 }}
        slots={{ legend: () => null }}
      />
    </div>
  );
}

function FiveBarStateChart({ data }: { data: typeof STATE_TOTALS }) {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: data.map((d) => d.label), tickLabelStyle: { fontSize: 10, fill: "#5c6e93" } }]}
      yAxis={[{ max: Y_MAX, tickLabelStyle: { fontSize: 11, fill: "#5c6e93" } }]}
      series={[{ data: data.map((d) => d.value), label: "Count", color: "#0cbea4" }]}
      colors={data.map((d) => d.color)}
      borderRadius={6}
      slots={{ legend: () => null }}
      height={340}
    />
  );
}

function DistrictBarChart({ data, max, color, valueLabel = "Count" }: { data: { label: string; value: number }[]; max: number; color: string; valueLabel?: string }) {
  return (
    <BarChart
      dataset={data}
      xAxis={[{ scaleType: "band", dataKey: "label", tickLabelStyle: { fontSize: 10, fill: "#5c6e93" } }]}
      yAxis={[{ max, tickLabelStyle: { fontSize: 11, fill: "#5c6e93" } }]}
      series={[{ dataKey: "value", label: valueLabel, color }]}
      borderRadius={4}
      slots={{ legend: () => null }}
      height={340}
    />
  );
}

function GroupedBarChart() {
  const dataset = APP_COUNT_GROUPS.map((g) => {
    const row: Record<string, string | number> = { category: g.label };
    STATUS_LEGEND.forEach((s, i) => { row[s.label] = g.values[i]; });
    return row;
  });
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "category", tickLabelStyle: { fontSize: 11, fill: "#5c6e93", fontWeight: 600 } }]}
      yAxis={[{ max: Y_MAX, tickLabelStyle: { fontSize: 11, fill: "#5c6e93" } }]}
      series={STATUS_LEGEND.map((s) => ({ dataKey: s.label, label: s.label, color: s.color }))}
      borderRadius={4}
      slots={{ legend: () => null }}
      height={340}
    />
  );
}

function YearWiseChart({ metric }: { metric: "births" | "stillbirths" }) {
  const dataKey = metric === "births" ? "birth" : "stillBirth";
  const color = metric === "births" ? C_BIRTH : C_REJECTED;
  const seriesLabel = metric === "births" ? "Birth Count" : "Still Birth Count";
  return (
    <BarChart
      dataset={YEAR_WISE_BIRTHS}
      xAxis={[{ scaleType: "band", dataKey: "label", tickLabelStyle: { fontSize: 12, fill: "#5c6e93", fontWeight: 600 } }]}
      yAxis={[{ max: YEAR_MAX, tickLabelStyle: { fontSize: 11, fill: "#5c6e93" } }]}
      series={[{ dataKey, label: seriesLabel, color }]}
      borderRadius={4}
      slots={{ legend: () => null }}
      height={340}
    />
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
  const [show, setShow] = useState<"Top 20" | "Bottom 20">("Top 20");
  const [isShowMenuOpen, setIsShowMenuOpen] = useState(false);

  const meta = GRAPH_META[id];

  const hasScopeTabs  = ["crudeBirth", "sexRatio", "stillBirth"].includes(id);
  const hasStateTabs  = ["disposal", "newReg", "correction"].includes(id);
  const hasShowMenu = hasScopeTabs && scope === "local";

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
          {hasShowMenu && (
            <div className="relative">
              <FilterChip
                label="Show:"
                value={show}
                onClick={() => setIsShowMenuOpen((v) => !v)}
              />
              {isShowMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+6px)] z-20 bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(10,13,18,0.08)] py-1 min-w-[140px]">
                  {(["Top 20", "Bottom 20"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setShow(item);
                        setIsShowMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-[14px] transition-colors ${
                        show === item
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
      {["disposal", "newReg", "correction"].includes(id) && view === "district" && (
        <div className="mb-[20px]">
          <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[8px]">
            {[
              { label: "Total Files", color: C_APPLICATION },
              { label: "Disposed Files", color: C_APPROVED },
              { label: "Pending Files", color: C_DELAYED },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-[8px] px-[8px] py-[4px]">
                <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ backgroundColor: l.color }} />
                <span className="font-sans font-medium text-[13px] text-[#383c51] whitespace-nowrap">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {(["disposal", "newReg", "correction"].includes(id) && view === "state") || id === "appCount" ? (
        <div className="mb-[20px]">
          <StatusLegend />
        </div>
      ) : null}
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
          <DistrictDatasetChart data={DISTRICTS} />
        )}

        {id === "crudeBirth" && (
          <DistrictBarChart
            data={
              (scope === "district"
                ? CRUDE_BIRTH_RATE
                : show === "Top 20"
                  ? LOCAL_BODY_CRUDE_BIRTH_TOP
                  : LOCAL_BODY_CRUDE_BIRTH_BOTTOM
              ).map((d) => ({ label: d.label, value: Math.round(d.value * 1000) }))
            }
            max={CBR_MAX * 1000}
            color={C_BIRTH}
            valueLabel="Rate"
          />
        )}
        {id === "sexRatio" && (
          <DistrictBarChart
            data={
              scope === "district"
                ? BIRTH_SEX_RATIO
                : show === "Top 20"
                  ? LOCAL_BODY_SEX_RATIO_TOP
                  : LOCAL_BODY_SEX_RATIO_BOTTOM
            }
            max={SEX_RATIO_MAX}
            color={C_IN_PROGRESS}
            valueLabel="Ratio"
          />
        )}
        {id === "stillBirth" && (
          <DistrictBarChart
            data={
              (scope === "district"
                ? STILL_BIRTH_RATE
                : show === "Top 20"
                  ? LOCAL_BODY_STILL_BIRTH_TOP
                  : LOCAL_BODY_STILL_BIRTH_BOTTOM
              ).map((d) => ({ label: d.label, value: Math.round(d.value * 100) }))
            }
            max={STILL_MAX * 100}
            color={C_REJECTED}
            valueLabel="Rate"
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

  const availableIds = allTabs.map((t) => t.id);
  const safeActive = availableIds.includes(activeGraph) ? activeGraph : "disposal";

  return (
    <div className="flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:min-h-[606px] w-full shrink-0 p-[16px]">
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
      <div className="bg-white flex-[1_0_0] relative rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px] min-h-[400px] overflow-auto">
        <GraphContent key={safeActive} id={safeActive} />
      </div>
    </div>
  );
}
