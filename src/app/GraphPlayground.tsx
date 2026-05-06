import React, { useMemo, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Link } from "react-router";
import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  CHART_CONFIG,
  CHART_PALETTE,
  FONT_SIZE,
  GlobalChartStyles,
  Legend,
  TEXT_MUTED,
  barChartBaseProps,
  pieChartBaseProps,
  pieSeriesGeometry,
  xAxisBand,
  yAxisLinear,
} from "./constants/chartStyles";

/* ============================================================================
 * Graph Playground
 * Every unique chart variant from the dashboard, rendered against the shared
 * design system in src/app/constants/chartStyles.tsx. Mock data lives here so
 * components stay completely isolated from production state.
 * ============================================================================
 */

// ─── Layout primitives ────────────────────────────────────────────────────────

function Section({
  id,
  title,
  module,
  description,
  children,
}: {
  id: string;
  title: string;
  module: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-[20px] border border-[#e8eff4] bg-white p-6 shadow-[0px_2px_8px_0px_rgba(10,13,18,0.05)]"
    >
      <header className="mb-6 flex flex-col gap-2 border-b border-[#f0f3f8] pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#cbf0fb] bg-[#f0fbff] px-3 py-1 font-sans text-[12px] font-semibold uppercase tracking-wide text-[#0c3080]">
            ### {module}
          </span>
          <span className="font-sans text-[12px] font-medium text-[#5c6e93]">/playground</span>
        </div>
        <h2 className="font-sans text-[22px] font-bold leading-[28px] text-[#0c3080] md:text-[24px]">
          {title}
        </h2>
        <p className="font-sans" style={{ fontSize: FONT_SIZE + 2, color: TEXT_MUTED }}>
          {description}
        </p>
      </header>

      {/* Uniform inset surface — 24px padding, fixed min-height for alignment */}
      <div
        className="flex w-full flex-col items-stretch justify-center rounded-[16px] border border-[#e8eff4] bg-white"
        style={{
          padding: CHART_CONFIG.layout.cardPadding,
          minHeight: CHART_CONFIG.layout.chartSurfaceMinHeight,
        }}
      >
        {children}
      </div>
    </section>
  );
}

// ─── 1. Building Permissions — SLI Files Exceeding ────────────────────────────

const BP_SLI_DISTRICTS = [
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

function BuildingSliBarChart() {
  const [sortBy, setSortBy] = useState<"Descending" | "Ascending">("Descending");
  const data = useMemo(() => {
    const sorted = [...BP_SLI_DISTRICTS].sort((a, b) =>
      sortBy === "Ascending" ? a.value - b.value : b.value - a.value,
    );
    const stateAvg = sorted.find((d) => d.isAvg);
    const others = sorted.filter((d) => !d.isAvg);
    return stateAvg ? [stateAvg, ...others] : others;
  }, [sortBy]);

  return (
    <div className="flex flex-col gap-1">
      <div className="mb-2 flex items-center justify-end">
        <button
          type="button"
          onClick={() =>
            setSortBy((p) => (p === "Descending" ? "Ascending" : "Descending"))
          }
          className="flex items-center gap-3 rounded-[8px] border border-[#e8eff4] bg-white px-4 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-gray-50"
          style={{ fontSize: FONT_SIZE, color: TEXT_MUTED }}
        >
          <span className="font-medium">Sort By:</span>
          <span className="font-semibold text-[#232f50]">{sortBy}</span>
          <ChevronDown className="h-4 w-4" style={{ color: TEXT_MUTED }} />
        </button>
      </div>
      <BarChart
        {...barChartBaseProps}
        dataset={data}
        xAxis={[xAxisBand("label")]}
        yAxis={[yAxisLinear(30000)]}
        series={[{ dataKey: "value", label: "Files", color: CHART_PALETTE[1] }]}
      />
      <Legend items={[{ label: "Files exceeding SLI", color: CHART_PALETTE[1] }]} />
    </div>
  );
}

// ─── 2. Building Permissions — Service Split (donut pie) ──────────────────────

const BP_SERVICE_PIE = [
  { label: "General Permit", value: 32 },
  { label: "Self Certified", value: 22 },
  { label: "Regularization+ Permit", value: 18 },
  { label: "Regularization+ Comm.", value: 12 },
  { label: "Regularization+ Part.", value: 10 },
  { label: "Others", value: 6 },
].map((d, i) => ({ ...d, color: CHART_PALETTE[i % CHART_PALETTE.length] }));

function ServiceSplitPie() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
      <PieChart
        {...pieChartBaseProps}
        series={[
          {
            ...pieSeriesGeometry,
            data: BP_SERVICE_PIE.map((d, i) => ({
              id: i,
              value: d.value,
              label: d.label,
              color: d.color,
            })),
          },
        ]}
      />
      <div className="flex flex-col gap-2">
        {BP_SERVICE_PIE.map((d) => (
          <div key={d.label} className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-[4px]" style={{ backgroundColor: d.color }} />
            <span
              className="w-[200px] truncate font-sans font-semibold"
              style={{ fontSize: FONT_SIZE, color: "#232f50" }}
            >
              {d.label}
            </span>
            <span
              className="font-sans font-bold"
              style={{ fontSize: FONT_SIZE, color: "#0c3080" }}
            >
              {d.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 3. Building Permissions — Occupancy × Built-up Area (stacked bar) ────────

const OCCUPANCY_AREA_DATA = [
  { label: "Single Family Res.", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Commercial", lt80: 7400, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Residence-Apt", lt80: 4000, m80to150: 10800, m150to300: 1700, m300to500: 1200, gt500: 700 },
  { label: "Special Residence", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Small Scale Ind.", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
  { label: "Others", lt80: 4000, m80to150: 7000, m150to300: 3800, m300to500: 4400, gt500: 3600 },
];

const OCCUPANCY_AREA_LEGEND = [
  { key: "lt80", label: "Less than 80 m²" },
  { key: "m80to150", label: "80-150 m²" },
  { key: "m150to300", label: "150-300 m²" },
  { key: "m300to500", label: "300-500 m²" },
  { key: "gt500", label: "Above 500 m²" },
].map((item, i) => ({ ...item, color: CHART_PALETTE[i % CHART_PALETTE.length] }));

function OccupancyAreaStackedChart() {
  return (
    <div className="flex flex-col gap-1">
      <BarChart
        {...barChartBaseProps}
        dataset={OCCUPANCY_AREA_DATA}
        xAxis={[xAxisBand("label")]}
        yAxis={[yAxisLinear(30000)]}
        series={OCCUPANCY_AREA_LEGEND.map((item) => ({
          dataKey: item.key,
          label: item.label,
          stack: "total",
          color: item.color,
        }))}
      />
      <Legend items={OCCUPANCY_AREA_LEGEND.map((d) => ({ label: d.label, color: d.color }))} />
    </div>
  );
}

// ─── 4. Civil Registration — State Totals (single-bar-per-segment) ────────────

const CR_STATE_TOTALS = [
  { label: "Total Application", value: 22500 },
  { label: "Total Approved", value: 11800 },
  { label: "Total Rejected", value: 17600 },
  { label: "Total In Progress", value: 14200 },
  { label: "Total Delayed", value: 7200 },
].map((d, i) => ({ ...d, color: CHART_PALETTE[i % CHART_PALETTE.length] }));

function CivilStateBarChart() {
  const n = CR_STATE_TOTALS.length;
  const dataset = CR_STATE_TOTALS.map((d, i) => {
    const row: Record<string, string | number> = { category: d.label };
    for (let j = 0; j < n; j++) row[`slot${j}`] = j === i ? d.value : 0;
    return row;
  });
  return (
    <div className="flex flex-col gap-1">
      <BarChart
        {...barChartBaseProps}
        dataset={dataset}
        xAxis={[xAxisBand("category")]}
        yAxis={[yAxisLinear(30000)]}
        series={CR_STATE_TOTALS.map((d, i) => ({
          dataKey: `slot${i}`,
          label: d.label,
          color: d.color,
          stack: "stateTotals",
        }))}
      />
      <Legend items={CR_STATE_TOTALS.map((d) => ({ label: d.label, color: d.color }))} />
    </div>
  );
}

// ─── 5. Civil Registration — District Performance ─────────────────────────────

const CR_DISTRICTS = [
  { district: "Thiruvananthapuram", totalFiles: 18500, disposedFiles: 12300, pendingFiles: 6200 },
  { district: "Kollam", totalFiles: 17500, disposedFiles: 11800, pendingFiles: 5700 },
  { district: "Pathanamthitta", totalFiles: 7000, disposedFiles: 4900, pendingFiles: 2100 },
  { district: "Alappuzha", totalFiles: 7000, disposedFiles: 5200, pendingFiles: 1800 },
  { district: "Kottayam", totalFiles: 18500, disposedFiles: 13100, pendingFiles: 5400 },
  { district: "Idukki", totalFiles: 18500, disposedFiles: 14200, pendingFiles: 4300 },
  { district: "Ernakulam", totalFiles: 7500, disposedFiles: 5600, pendingFiles: 1900 },
  { district: "Thrissur", totalFiles: 7500, disposedFiles: 5100, pendingFiles: 2400 },
  { district: "Palakkad", totalFiles: 17000, disposedFiles: 11400, pendingFiles: 5600 },
  { district: "Malappuram", totalFiles: 15000, disposedFiles: 9800, pendingFiles: 5200 },
  { district: "Kozhikode", totalFiles: 14000, disposedFiles: 10200, pendingFiles: 3800 },
  { district: "Wayanad", totalFiles: 12500, disposedFiles: 9100, pendingFiles: 3400 },
  { district: "Kannur", totalFiles: 10500, disposedFiles: 7300, pendingFiles: 3200 },
  { district: "Kasaragod", totalFiles: 9000, disposedFiles: 6400, pendingFiles: 2600 },
];

const CR_DISTRICT_SERIES = [
  { dataKey: "totalFiles", label: "Total Files", color: CHART_PALETTE[2] },
  { dataKey: "disposedFiles", label: "Disposed Files", color: CHART_PALETTE[1] },
  { dataKey: "pendingFiles", label: "Pending Files", color: CHART_PALETTE[4] },
];

function CivilDistrictGroupedBar() {
  return (
    <div className="flex flex-col gap-1">
      <BarChart
        {...barChartBaseProps}
        dataset={CR_DISTRICTS}
        xAxis={[
          {
            ...xAxisBand("district"),
            tickLabelStyle: { ...CHART_CONFIG.axisLabelStyle, angle: -35, textAnchor: "end" },
          },
        ]}
        yAxis={[yAxisLinear()]}
        series={CR_DISTRICT_SERIES}
        margin={{ ...CHART_CONFIG.layout.margin, bottom: 88 }}
      />
      <Legend items={CR_DISTRICT_SERIES.map((s) => ({ label: s.label, color: s.color! }))} />
    </div>
  );
}

// ─── 6. Civil Registration — Application Count (5-series grouped) ─────────────

const CR_APP_GROUPS = [
  { label: "Birth Registration", values: [22500, 11800, 17600, 14200, 7200] },
  { label: "Death Registration", values: [21000, 11200, 16800, 13500, 6900] },
  { label: "Marriage Registration", values: [12400, 6800, 9200, 7900, 4100] },
];

function CivilApplicationCountChart() {
  const dataset = CR_APP_GROUPS.map((g) => {
    const row: Record<string, string | number> = { category: g.label };
    CR_STATE_TOTALS.forEach((s, i) => {
      row[s.label] = g.values[i];
    });
    return row;
  });
  return (
    <div className="flex flex-col gap-1">
      <BarChart
        {...barChartBaseProps}
        dataset={dataset}
        xAxis={[xAxisBand("category")]}
        yAxis={[yAxisLinear(30000)]}
        series={CR_STATE_TOTALS.map((s) => ({
          dataKey: s.label,
          label: s.label,
          color: s.color,
        }))}
      />
      <Legend items={CR_STATE_TOTALS.map((s) => ({ label: s.label, color: s.color }))} />
    </div>
  );
}

// ─── 7. Civil Registration — Year-wise Comparison ─────────────────────────────

const YEAR_BIRTH_DATA = [
  { label: "2019", birth: 18000 },
  { label: "2020", birth: 17200 },
  { label: "2021", birth: 19400 },
  { label: "2022", birth: 20100 },
  { label: "2023", birth: 21500 },
];

function YearWiseBirthChart() {
  return (
    <div className="flex flex-col gap-1">
      <BarChart
        {...barChartBaseProps}
        dataset={YEAR_BIRTH_DATA}
        xAxis={[xAxisBand("label")]}
        yAxis={[yAxisLinear(25000)]}
        series={[{ dataKey: "birth", label: "Birth Count", color: CHART_PALETTE[2] }]}
      />
      <Legend items={[{ label: "Birth Count", color: CHART_PALETTE[2] }]} />
    </div>
  );
}

// ─── 8. Property Tax — DCB Graph ──────────────────────────────────────────────

const DCB_DATA = [
  { category: "Arrear", demand: 17500, collection: 10200, balance: 13500 },
  { category: "Current", demand: 17500, collection: 10200, balance: 13200 },
  { category: "Total", demand: 22800, collection: 13000, balance: 17200 },
];

const DCB_SERIES = [
  { dataKey: "demand", label: "Demand", color: CHART_PALETTE[2] },
  { dataKey: "collection", label: "Collection", color: CHART_PALETTE[1] },
  { dataKey: "balance", label: "Balance", color: CHART_PALETTE[3] },
];

function DcbGraph() {
  return (
    <div className="flex flex-col gap-1">
      <BarChart
        {...barChartBaseProps}
        dataset={DCB_DATA}
        xAxis={[xAxisBand("category")]}
        yAxis={[yAxisLinear(30000)]}
        series={DCB_SERIES}
      />
      <Legend items={DCB_SERIES.map((s) => ({ label: s.label, color: s.color! }))} />
    </div>
  );
}

// ─── 9. Property Tax — Success vs Failure ─────────────────────────────────────

const SUCCESS_FAILURE = [
  { label: "Success Count", pct: 68, color: CHART_PALETTE[2] },
  { label: "Failure Count", pct: 32, color: CHART_PALETTE[5] },
];

function SuccessFailurePie() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-6">
      <PieChart
        {...pieChartBaseProps}
        series={[
          {
            ...pieSeriesGeometry,
            data: SUCCESS_FAILURE.map((item, i) => ({
              id: i,
              value: item.pct,
              label: item.label,
              color: item.color,
            })),
          },
        ]}
      />
      <div className="flex flex-col gap-2">
        {SUCCESS_FAILURE.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-[8px] px-3 py-2 hover:bg-[#f6f9fb]"
          >
            <span className="h-3 w-3 rounded-[4px]" style={{ backgroundColor: item.color }} />
            <span
              className="font-sans font-medium"
              style={{ fontSize: FONT_SIZE, color: "#232f50" }}
            >
              {item.label}{" "}
              <span style={{ color: TEXT_MUTED }}>({item.pct}%)</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 10. Public Grievance — Disposal Performance ──────────────────────────────

const GRIEVANCE_DATA = [
  { name: "TVM", total: 28000, disposed: 18000 },
  { name: "KLM", total: 22000, disposed: 14000 },
  { name: "PTA", total: 18000, disposed: 11000 },
  { name: "ALP", total: 21000, disposed: 13000 },
  { name: "KTM", total: 19000, disposed: 12000 },
  { name: "IDK", total: 15000, disposed: 9000 },
  { name: "EKM", total: 29000, disposed: 20000 },
  { name: "TSR", total: 20500, disposed: 13800 },
  { name: "PKD", total: 17900, disposed: 11900 },
  { name: "MLP", total: 16400, disposed: 10300 },
];

const GRIEVANCE_SERIES = [
  { dataKey: "total", label: "Total Files", color: CHART_PALETTE[2] },
  { dataKey: "disposed", label: "Disposed Files", color: CHART_PALETTE[1] },
];

function GrievanceDisposalChart() {
  return (
    <div className="flex flex-col gap-1">
      <BarChart
        {...barChartBaseProps}
        dataset={GRIEVANCE_DATA}
        xAxis={[xAxisBand("name")]}
        yAxis={[yAxisLinear()]}
        series={GRIEVANCE_SERIES}
      />
      <Legend items={GRIEVANCE_SERIES.map((s) => ({ label: s.label, color: s.color! }))} />
    </div>
  );
}

// ─── 11. Finance Management — E-Payment Success vs Failure ────────────────────

const FIN_VALUES = { success: 21251, failure: 15000 };

function FinanceSuccessFailureChart() {
  const total = FIN_VALUES.success + FIN_VALUES.failure;
  const successPct = Math.round((FIN_VALUES.success / total) * 100);
  const failurePct = Math.round((FIN_VALUES.failure / total) * 100);

  return (
    <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-6">
      <PieChart
        {...pieChartBaseProps}
        series={[
          {
            ...pieSeriesGeometry,
            data: [
              { id: 0, value: FIN_VALUES.success, label: "Success", color: CHART_PALETTE[1] },
              { id: 1, value: FIN_VALUES.failure, label: "Failure", color: CHART_PALETTE[5] },
            ],
          },
        ]}
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="h-3 w-3 rounded-[4px]" style={{ backgroundColor: CHART_PALETTE[1] }} />
          <p className="font-sans font-medium" style={{ fontSize: FONT_SIZE, color: "#232f50" }}>
            Success {FIN_VALUES.success.toLocaleString("en-IN")}{" "}
            <span style={{ color: TEXT_MUTED }}>({successPct}%)</span>
          </p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <span className="h-3 w-3 rounded-[4px]" style={{ backgroundColor: CHART_PALETTE[5] }} />
          <p className="font-sans font-medium" style={{ fontSize: FONT_SIZE, color: "#232f50" }}>
            Failure {FIN_VALUES.failure.toLocaleString("en-IN")}{" "}
            <span style={{ color: TEXT_MUTED }}>({failurePct}%)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── 12. Business Facilitation — Enterprise All Combined ──────────────────────

const ENT_OVERALL = [
  { label: "New License", value: 40 },
  { label: "License Renewed", value: 25 },
  { label: "Returned to Citizen", value: 20 },
  { label: "License Cancelled", value: 15 },
].map((d, i) => ({ ...d, color: CHART_PALETTE[i % CHART_PALETTE.length] }));

const ENT_CAPITAL = [
  { label: "Less than ₹10L", value: 35 },
  { label: "₹10L – ₹50L", value: 28 },
  { label: "₹50L – ₹1Cr", value: 18 },
  { label: "₹1Cr – ₹5Cr", value: 12 },
  { label: "Above ₹5Cr", value: 7 },
].map((d, i) => ({ ...d, color: CHART_PALETTE[i % CHART_PALETTE.length] }));

const ENT_SECTOR = [
  { label: "Manufacturing", value: 30 },
  { label: "Services", value: 25 },
  { label: "Trade & Retail", value: 20 },
  { label: "Agriculture", value: 15 },
  { label: "Other", value: 10 },
].map((d, i) => ({ ...d, color: CHART_PALETTE[i % CHART_PALETTE.length] }));

function MiniPie({
  data,
}: {
  data: { label: string; value: number; color: string }[];
}) {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
      <PieChart
        {...pieChartBaseProps}
        series={[
          {
            ...pieSeriesGeometry,
            innerRadius: 48,
            outerRadius: 110,
            data: data.map((d, i) => ({
              id: i,
              value: d.value,
              label: d.label,
              color: d.color,
            })),
          },
        ]}
      />
      <div className="flex flex-col gap-2">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <span
              className="h-3 w-3 shrink-0 rounded-[4px]"
              style={{ backgroundColor: d.color }}
            />
            <span
              className="font-sans font-semibold"
              style={{ fontSize: FONT_SIZE, color: "#232f50" }}
            >
              {d.label}
            </span>
            <span
              className="font-sans font-bold"
              style={{ fontSize: FONT_SIZE, color: "#0c3080" }}
            >
              {d.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnterpriseAllComposite() {
  return (
    <div className="flex flex-col gap-6">
      {[
        { title: "Capital investment wise", data: ENT_CAPITAL },
        { title: "Sector wise split up", data: ENT_SECTOR },
        { title: "Overall license status", data: ENT_OVERALL },
      ].map((block) => (
        <div
          key={block.title}
          className="rounded-[12px] border border-[#e8eff4] bg-white p-6"
        >
          <h4
            className="mb-3 font-sans font-bold uppercase tracking-wide"
            style={{ fontSize: FONT_SIZE, color: TEXT_MUTED }}
          >
            {block.title}
          </h4>
          <MiniPie data={block.data} />
        </div>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "bp-sli", module: "Building Permissions", label: "SLI – Files Exceeding" },
  { id: "bp-service", module: "Building Permissions", label: "Service Split (Pie)" },
  { id: "bp-occupancy", module: "Building Permissions", label: "Occupancy × Built-up Area" },
  { id: "cr-state", module: "Civil Registration", label: "State Totals" },
  { id: "cr-district", module: "Civil Registration", label: "District Performance" },
  { id: "cr-appcount", module: "Civil Registration", label: "Application Count" },
  { id: "cr-yearwise", module: "Civil Registration", label: "Year-wise Births" },
  { id: "pt-dcb", module: "Property Tax", label: "DCB Graph" },
  { id: "pt-success", module: "Property Tax", label: "Success vs Failure" },
  { id: "pg-disposal", module: "Public Grievance", label: "Disposal Performance" },
  { id: "fm-pie", module: "Finance Management", label: "E-Payment Success vs Failure" },
  { id: "bf-enterprise", module: "Business Facilitation", label: "Enterprise All Combined" },
];

export default function GraphPlayground() {
  return (
    <div className="min-h-screen bg-[#f2f6ff]">
      <GlobalChartStyles />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-[#e8eff4] bg-white/95 backdrop-blur shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-[8px] border border-[#e8eff4] bg-white px-3 py-2 font-sans text-[13px] font-semibold text-[#0c3080] hover:bg-[#f6f9fb]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to dashboard
            </Link>
            <span className="hidden font-sans text-[20px] font-bold text-[#0c3080] sm:inline">
              Graph Playground
            </span>
          </div>
          <span className="hidden rounded-full bg-[#cbf0fb]/60 px-3 py-1 font-sans text-[12px] font-semibold text-[#0c3080] md:inline">
            {SECTIONS.length} unique graphs
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pb-6 pt-12">
        <h1 className="font-sans text-[36px] font-bold leading-[44px] text-[#0c3080] md:text-[44px] md:leading-[52px]">
          Dashboard 3.0 — Graph Playground
        </h1>
        <p
          className="mt-3 max-w-[760px] font-sans"
          style={{ fontSize: FONT_SIZE + 2, color: TEXT_MUTED }}
        >
          Every unique graph variant from the dashboard, normalized to a single design system.
          Color, axes, grid, tooltip, padding, and aspect ratio rules live in one shared{" "}
          <code className="rounded bg-[#f0f3f8] px-1 py-0.5 text-[12px]">CHART_CONFIG</code>{" "}
          object.
        </p>
      </section>

      {/* Quick nav */}
      <nav className="mx-auto max-w-[1200px] px-6 pb-10">
        <div className="flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-[#e8eff4] bg-white px-4 py-2 font-sans text-[12px] font-semibold text-[#0c3080] transition-colors hover:border-[#cbf0fb] hover:bg-[#f0fbff]"
            >
              {s.module} — {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <main className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 pb-24">
        <Section
          id="bp-sli"
          module="Building Permissions"
          title="SLI – Files Exceeding Period"
          description="Single-series bar chart with a pinned 'State avg' bar. Sort By toggle (asc/desc)."
        >
          <BuildingSliBarChart />
        </Section>

        <Section
          id="bp-service"
          module="Building Permissions"
          title="Service Split (Donut Pie)"
          description="Service-wise percentage share of total building permit applications received at LSGs."
        >
          <ServiceSplitPie />
        </Section>

        <Section
          id="bp-occupancy"
          module="Building Permissions"
          title="Occupancy × Built-up Area Split"
          description="Stacked bar chart grouping occupancy categories with 5 built-up area bands."
        >
          <OccupancyAreaStackedChart />
        </Section>

        <Section
          id="cr-state"
          module="Civil Registration"
          title="State Totals (Single-bar-per-segment)"
          description="A grouped bar trick: one bar per status, each colored from the same legend palette."
        >
          <CivilStateBarChart />
        </Section>

        <Section
          id="cr-district"
          module="Civil Registration"
          title="District Performance (3-series Grouped Bar)"
          description="Total / Disposed / Pending files per district with rotated tick labels."
        >
          <CivilDistrictGroupedBar />
        </Section>

        <Section
          id="cr-appcount"
          module="Civil Registration"
          title="Application Count (5-series Grouped Bar)"
          description="Birth / Death / Marriage applications across the 5 status legend categories."
        >
          <CivilApplicationCountChart />
        </Section>

        <Section
          id="cr-yearwise"
          module="Civil Registration"
          title="Year-wise Comparison – Births"
          description="Single-series annual bar chart for birth registration counts."
        >
          <YearWiseBirthChart />
        </Section>

        <Section
          id="pt-dcb"
          module="Property Tax"
          title="Demand, Collection & Balance"
          description="3-series grouped bar showing arrear/current/total DCB metrics."
        >
          <DcbGraph />
        </Section>

        <Section
          id="pt-success"
          module="Property Tax"
          title="Success vs Failure (Donut)"
          description="Two-segment donut with status pills."
        >
          <SuccessFailurePie />
        </Section>

        <Section
          id="pg-disposal"
          module="Public Grievance"
          title="Disposal Performance"
          description="District-level 2-series grouped bar showing total vs disposed grievances."
        >
          <GrievanceDisposalChart />
        </Section>

        <Section
          id="fm-pie"
          module="Finance Management"
          title="E-Payment Success vs Failure"
          description="Donut pie with absolute counts + % labels formatted in en-IN locale."
        >
          <FinanceSuccessFailureChart />
        </Section>

        <Section
          id="bf-enterprise"
          module="Business Facilitation"
          title="Enterprise – All Combined View"
          description="Composite pie chart group used in the 'All' view of Enterprise License."
        >
          <EnterpriseAllComposite />
        </Section>
      </main>

      <footer className="border-t border-[#e8eff4] bg-white py-6">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          <span
            className="font-sans"
            style={{ fontSize: FONT_SIZE, color: TEXT_MUTED }}
          >
            Internal preview surface · Not linked from public navigation
          </span>
          <Link
            to="/"
            className="font-sans text-[13px] font-semibold text-[#0c3080] hover:underline"
          >
            ← Back to dashboard
          </Link>
        </div>
      </footer>
    </div>
  );
}
