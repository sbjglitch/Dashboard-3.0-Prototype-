import React, { useMemo, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  CHART_PALETTE,
  barChartBaseProps,
  pieChartBaseProps,
  pieSeriesGeometry,
  xAxisBand,
  yAxisLinear,
} from "../constants/chartStyles";

// ─── SLI Bar chart datasets (mirrors Building Permission module) ──────────────

const BAR_DATA_DISTRICT = [
  { label: "State avg", value: 14200, isAvg: true },
  { label: "Thiruv..", value: 21800 },
  { label: "Ernakulam", value: 20600 },
  { label: "Kozhikode", value: 19400 },
  { label: "Thrissur", value: 18200 },
  { label: "Kollam", value: 17000 },
  { label: "Malappur", value: 15900 },
  { label: "Kannur", value: 14700 },
  { label: "Palakkad", value: 13800 },
  { label: "Kottayam", value: 12600 },
  { label: "Alappuzha", value: 11500 },
  { label: "Idukki", value: 9800 },
  { label: "Pathanam.", value: 8600 },
  { label: "Wayanad", value: 7600 },
  { label: "Kasargod", value: 7100 },
];

const LOCAL_BODIES_TOP_20 = [
  { label: "Thiruvananthapuram Corp", value: 9100 },
  { label: "Kochi Corp", value: 8650 },
  { label: "Kozhikode Corp", value: 8120 },
  { label: "Thrissur Corp", value: 7790 },
  { label: "Kollam Corp", value: 7350 },
  { label: "Alappuzha Muni", value: 7020 },
  { label: "Kottayam Muni", value: 6740 },
  { label: "Palakkad Muni", value: 6380 },
  { label: "Kannur Muni", value: 6090 },
  { label: "Malappuram Muni", value: 5810 },
  { label: "Varkala Muni", value: 5520 },
  { label: "Kanhangad Muni", value: 5260 },
  { label: "Chalakudy Muni", value: 5040 },
  { label: "Nedumangad Muni", value: 4810 },
  { label: "Ponnani Muni", value: 4570 },
  { label: "Kalamassery Muni", value: 4350 },
  { label: "Ottapalam Muni", value: 4140 },
  { label: "Perinthalmanna Muni", value: 3920 },
  { label: "Vadakara Muni", value: 3720 },
  { label: "Mattannur Muni", value: 3520 },
];

const LOCAL_BODIES_BOTTOM_20 = [
  { label: "Puzhakkal Grama Panch.", value: 320 },
  { label: "Perumanna Grama Panch.", value: 305 },
  { label: "Mokeri Grama Panch.", value: 288 },
  { label: "Kadukutty Grama Panch.", value: 270 },
  { label: "Edathua Grama Panch.", value: 256 },
  { label: "Meenadam Grama Panch.", value: 244 },
  { label: "Kodanchery Grama Panch.", value: 230 },
  { label: "Kuruva Grama Panch.", value: 218 },
  { label: "Elankunnapuzha Grama", value: 204 },
  { label: "Koppam Grama Panch.", value: 192 },
  { label: "Alagappanagar Grama", value: 181 },
  { label: "Aymanam Grama Panch.", value: 170 },
  { label: "Thenkara Grama Panch.", value: 160 },
  { label: "Mankada Grama Panch.", value: 148 },
  { label: "Edavaka Grama Panch.", value: 137 },
  { label: "Oachira Grama Panch.", value: 124 },
  { label: "Bharananganam Grama", value: 112 },
  { label: "Marady Grama Panch.", value: 100 },
  { label: "Arookutty Grama Panch.", value: 88 },
  { label: "Kanimangalam Grama", value: 76 },
];

// ─── Pie data for File split by service ───────────────────────────────────────

type PieDatum = { label: string; value: number; color: string };

const ENTERPRISE_OVERALL: PieDatum[] = [
  { label: "New License", value: 40, color: CHART_PALETTE[2] },
  { label: "License Renewed", value: 25, color: CHART_PALETTE[1] },
  { label: "Returned to Citizen", value: 20, color: CHART_PALETTE[4] },
  { label: "License Cancelled", value: 15, color: CHART_PALETTE[5] },
];

const ENTERPRISE_CAPITAL_INVESTMENT: PieDatum[] = [
  { label: "Less than ₹10L", value: 35, color: CHART_PALETTE[2] },
  { label: "₹10L – ₹50L", value: 28, color: CHART_PALETTE[1] },
  { label: "₹50L – ₹1Cr", value: 18, color: CHART_PALETTE[3] },
  { label: "₹1Cr – ₹5Cr", value: 12, color: CHART_PALETTE[4] },
  { label: "Above ₹5Cr", value: 7, color: CHART_PALETTE[5] },
];

const ENTERPRISE_SECTOR_WISE: PieDatum[] = [
  { label: "Manufacturing", value: 30, color: CHART_PALETTE[2] },
  { label: "Services", value: 25, color: CHART_PALETTE[1] },
  { label: "Trade & Retail", value: 20, color: CHART_PALETTE[3] },
  { label: "Agriculture / Allied", value: 15, color: CHART_PALETTE[4] },
  { label: "Other", value: 10, color: CHART_PALETTE[6] },
];

const REG_PARAMEDICAL: PieDatum[] = [
  { label: "New Registration", value: 38, color: CHART_PALETTE[2] },
  { label: "Renewal", value: 26, color: CHART_PALETTE[1] },
  { label: "Registrations not renewed", value: 18, color: CHART_PALETTE[4] },
  { label: "Suspended Registrations", value: 10, color: CHART_PALETTE[3] },
  { label: "Cancelled", value: 8, color: CHART_PALETTE[5] },
];

const REG_TUTORIAL: PieDatum[] = [
  { label: "New Registration", value: 45, color: CHART_PALETTE[2] },
  { label: "Renewal", value: 22, color: CHART_PALETTE[1] },
  { label: "Registrations not renewed", value: 15, color: CHART_PALETTE[4] },
  { label: "Suspended Registrations", value: 11, color: CHART_PALETTE[3] },
  { label: "Cancelled", value: 7, color: CHART_PALETTE[5] },
];

const REG_DOG_LICENSE: PieDatum[] = [
  { label: "New Issued", value: 78, color: CHART_PALETTE[2] },
  { label: "Renewal", value: 22, color: CHART_PALETTE[1] },
];

// ─── Tree view configuration ──────────────────────────────────────────────────

type GraphId =
  | "sli"
  | "ent.all"
  | "ent.capital"
  | "ent.sector"
  | "reg.paramedical"
  | "reg.tutorial"
  | "reg.dog";

type TreeNode =
  | {
      id: GraphId;
      label: string;
      kind: "leaf";
    }
  | {
      id: string;
      label: string;
      kind: "group";
      children: TreeNode[];
    };

const TREE: TreeNode[] = [
  { id: "sli", label: "Files exceeding SLI Period", kind: "leaf" },
  {
    id: "split",
    label: "File split by service",
    kind: "group",
    children: [
      {
        id: "enterprise",
        label: "Enterprise License",
        kind: "group",
        children: [
          { id: "ent.all", label: "All", kind: "leaf" },
          { id: "ent.capital", label: "Capital investment wise", kind: "leaf" },
          { id: "ent.sector", label: "Sector wise split up", kind: "leaf" },
        ],
      },
      {
        id: "registrations",
        label: "Registrations",
        kind: "group",
        children: [
          { id: "reg.paramedical", label: "Paramedical", kind: "leaf" },
          { id: "reg.tutorial", label: "Tutorial", kind: "leaf" },
          { id: "reg.dog", label: "Dog License", kind: "leaf" },
        ],
      },
    ],
  },
];

const GRAPH_BREADCRUMB: Record<GraphId, string[]> = {
  sli: ["Files exceeding SLI Period"],
  "ent.all": ["File split by service", "Enterprise License", "All"],
  "ent.capital": ["File split by service", "Enterprise License", "Capital investment wise"],
  "ent.sector": ["File split by service", "Enterprise License", "Sector wise split up"],
  "reg.paramedical": ["File split by service", "Registrations", "Paramedical"],
  "reg.tutorial": ["File split by service", "Registrations", "Tutorial"],
  "reg.dog": ["File split by service", "Registrations", "Dog License"],
};

// ─── Tree view sub-components ─────────────────────────────────────────────────

function TreeRow({
  level,
  isActive,
  isGroup,
  isOpen,
  label,
  onClick,
}: {
  level: number;
  isActive: boolean;
  isGroup: boolean;
  isOpen?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ paddingLeft: 12 + level * 16 }}
      className={`group relative flex w-full items-center gap-[8px] rounded-[8px] py-[10px] pr-[10px] text-left transition-colors ${
        isActive
          ? "bg-[#cbf0fb]/60 border border-[#9bdff5]"
          : "border border-transparent hover:bg-[#e8eff4]/60"
      }`}
    >
      {isGroup ? (
        <span
          className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center text-[#5c6e93] transition-transform ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        >
          <ChevronDown className="h-[16px] w-[16px]" />
        </span>
      ) : (
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          <span
            className={`h-[6px] w-[6px] rounded-full ${
              isActive ? "bg-[#00b2eb]" : "bg-[#c0c7cd] group-hover:bg-[#5c6e93]"
            }`}
          />
        </span>
      )}
      <span
        className={`flex-1 truncate font-sans text-[14px] leading-[20px] ${
          isActive
            ? "font-semibold text-[#0c3080]"
            : isGroup
              ? "font-semibold text-[#232f50]"
              : "font-medium text-[#232f50]"
        }`}
        title={label}
      >
        {label}
      </span>
    </button>
  );
}

function TreeView({
  active,
  onSelect,
}: {
  active: GraphId;
  onSelect: (id: GraphId) => void;
}) {
  // Default open paths so the active leaf is always visible.
  const defaultOpen: Record<string, boolean> = useMemo(() => {
    const open: Record<string, boolean> = { split: true };
    if (active.startsWith("ent.")) open.enterprise = true;
    if (active.startsWith("reg.")) open.registrations = true;
    return open;
  }, [active]);

  const [openMap, setOpenMap] = useState<Record<string, boolean>>(defaultOpen);

  const toggle = (id: string) =>
    setOpenMap((prev) => ({ ...prev, [id]: !(prev[id] ?? defaultOpen[id]) }));

  const renderNode = (node: TreeNode, level: number): React.ReactNode => {
    if (node.kind === "leaf") {
      return (
        <TreeRow
          key={node.id}
          level={level}
          isActive={active === node.id}
          isGroup={false}
          label={node.label}
          onClick={() => onSelect(node.id as GraphId)}
        />
      );
    }
    const isOpen = openMap[node.id] ?? defaultOpen[node.id] ?? false;
    return (
      <div key={node.id} className="flex flex-col">
        <TreeRow
          level={level}
          isActive={false}
          isGroup
          isOpen={isOpen}
          label={node.label}
          onClick={() => toggle(node.id)}
        />
        {isOpen && (
          <div
            className="relative ml-[20px] border-l border-[#e2eaf3] pl-[2px] mt-[2px]"
            style={{ marginLeft: 12 + level * 16 + 4 }}
          >
            <div className="flex flex-col gap-[2px] pl-[6px]">
              {node.children.map((child) => renderNode(child, level + 1))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return <div className="flex flex-col gap-[2px]">{TREE.map((n) => renderNode(n, 0))}</div>;
}

// ─── Sub-renderers ────────────────────────────────────────────────────────────

function PieBlock({
  data,
  size = 280,
}: {
  data: PieDatum[];
  size?: number;
}) {
  return (
    <div className="flex flex-col items-center gap-[12px] sm:flex-row sm:items-center sm:gap-[24px]">
      <PieChart
        {...pieChartBaseProps}
        width={size}
        height={size}
        series={[
          {
            ...pieSeriesGeometry,
            innerRadius: Math.round(size / 6.5),
            outerRadius: Math.round(size / 2.2),
            data: data.map((item, i) => ({
              id: i,
              value: item.value,
              label: item.label,
              color: item.color,
            })),
          },
        ]}
      />
      <div className="flex flex-col gap-[10px]">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-[10px] rounded-[6px] px-[6px] py-[4px]"
          >
            <span
              className="h-[14px] w-[14px] shrink-0 rounded-[4px]"
              style={{ backgroundColor: item.color }}
            />
            <span className="font-sans text-[14px] font-semibold text-[#232f50]">
              {item.label}
            </span>
            <span className="font-sans text-[14px] font-bold text-[#0c3080]">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CombinedEnterprisePie() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="rounded-[12px] border border-[#e8eff4] bg-[#f6f9fb]/60 p-[16px]">
        <h4 className="mb-[12px] font-sans text-[14px] font-bold uppercase tracking-wide text-[#5c6e93]">
          Capital investment wise
        </h4>
        <PieBlock data={ENTERPRISE_CAPITAL_INVESTMENT} size={240} />
      </div>
      <div className="rounded-[12px] border border-[#e8eff4] bg-[#f6f9fb]/60 p-[16px]">
        <h4 className="mb-[12px] font-sans text-[14px] font-bold uppercase tracking-wide text-[#5c6e93]">
          Sector wise split up
        </h4>
        <PieBlock data={ENTERPRISE_SECTOR_WISE} size={240} />
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function BusinessFacilitationGraphs({
  selectedLocalBody,
}: {
  selectedLocalBody: string;
}) {
  const [active, setActive] = useState<GraphId>("sli");

  // SLI controls (mirrors Building Permission module)
  const [activeSubTab, setActiveSubTab] = useState<"District" | "Local Bodies">("District");
  const [sortBy, setSortBy] = useState<"Descending" | "Ascending">("Descending");
  const [showTop, setShowTop] = useState<"Top 20" | "Bottom 20">("Top 20");
  const [isShowMenuOpen, setIsShowMenuOpen] = useState(false);

  const sliData = useMemo(() => {
    const raw =
      activeSubTab === "District"
        ? BAR_DATA_DISTRICT
        : showTop === "Top 20"
          ? LOCAL_BODIES_TOP_20
          : LOCAL_BODIES_BOTTOM_20;

    const sorted = [...raw].sort((a, b) =>
      sortBy === "Ascending" ? a.value - b.value : b.value - a.value,
    );

    if (activeSubTab === "District") {
      const stateAvg = sorted.find((item) => "isAvg" in item && item.isAvg);
      const others = sorted.filter((item) => !("isAvg" in item && item.isAvg));
      return stateAvg ? [stateAvg, ...others] : others;
    }
    return sorted;
  }, [activeSubTab, showTop, sortBy]);

  const renderHeader = (title: string, desc: string) => (
    <div className="mb-[16px] flex flex-col gap-[6px]">
      <div className="flex flex-wrap items-center gap-[8px] text-[16px] font-bold leading-[24px] text-[#232f50]">
        {GRAPH_BREADCRUMB[active].map((part, idx, arr) => (
          <React.Fragment key={`${part}-${idx}`}>
            <span
              className={
                idx === arr.length - 1
                  ? "text-[#0c3080]"
                  : "font-semibold text-[#5c6e93]"
              }
            >
              {part}
            </span>
            {idx < arr.length - 1 && (
              <span className="font-semibold text-[#c0c7cd]">/</span>
            )}
          </React.Fragment>
        ))}
        <div className="ml-[4px] rounded-[4px] border border-[#c0c7cd] bg-[#f2f6ff] px-[10px] py-[3px] text-[13px] font-semibold text-[#323232]">
          {selectedLocalBody}
        </div>
      </div>
      <p className="font-sans text-[14px] font-semibold leading-[20px] text-[#5c6e93]">
        {title} — {desc}
      </p>
    </div>
  );

  const renderSli = () => (
    <div className="flex h-full w-full flex-col">
      {renderHeader(
        "Files exceeding SLI Period",
        "Comparison of districts/local bodies with the highest number of files crossing SLI timelines.",
      )}

      <div className="mb-[16px] flex flex-wrap items-center justify-between gap-[12px]">
        <div className="inline-flex gap-[4px] rounded-[8px] border border-[#e8eff4] bg-white p-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          {(["District", "Local Bodies"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveSubTab(tab)}
              className={`rounded-[6px] px-[20px] py-[6px] text-[14px] font-sans transition-colors ${
                activeSubTab === tab
                  ? "bg-[#f6f9fb] font-semibold text-[#232f50]"
                  : "font-medium text-[#5c6e93] hover:bg-[#f6f9fb]/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-[12px]">
          {activeSubTab === "District" && (
            <button
              type="button"
              onClick={() =>
                setSortBy((prev) => (prev === "Descending" ? "Ascending" : "Descending"))
              }
              className="flex items-center gap-[12px] rounded-[8px] border border-[#e8eff4] bg-white px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-colors hover:bg-gray-50"
            >
              <span className="font-sans text-[14px] font-medium text-[#5c6e93]">Sort By:</span>
              <span className="font-sans text-[14px] font-semibold text-[#232f50]">{sortBy}</span>
              <ChevronDown className="h-4 w-4 text-[#5c6e93]" />
            </button>
          )}
          {activeSubTab === "Local Bodies" && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsShowMenuOpen((v) => !v)}
                className="flex items-center gap-[12px] rounded-[8px] border border-[#e8eff4] bg-white px-[16px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-colors hover:bg-gray-50"
              >
                <span className="font-sans text-[14px] font-medium text-[#5c6e93]">Show:</span>
                <span className="font-sans text-[14px] font-semibold text-[#232f50]">{showTop}</span>
                <ChevronDown className="h-4 w-4 text-[#5c6e93]" />
              </button>
              {isShowMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+6px)] z-20 min-w-[140px] rounded-[8px] border border-[#e8eff4] bg-white py-1 shadow-[0px_4px_12px_0px_rgba(10,13,18,0.08)]">
                  {(["Top 20", "Bottom 20"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setShowTop(item);
                        setIsShowMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-[14px] transition-colors ${
                        showTop === item
                          ? "bg-[#f6f9fb] font-semibold text-[#232f50]"
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

      <div className="min-h-0 w-full flex-1">
        <BarChart
          {...barChartBaseProps}
          dataset={sliData.map((d) => ({ label: d.label, value: d.value }))}
          xAxis={[xAxisBand("label")]}
          yAxis={[yAxisLinear()]}
          series={[{ dataKey: "value", label: "Files", color: CHART_PALETTE[1] }]}
        />
      </div>
    </div>
  );

  const renderPieView = (title: string, desc: string, data: PieDatum[]) => (
    <div className="flex h-full w-full flex-col">
      {renderHeader(title, desc)}
      <div className="flex flex-1 items-center justify-center">
        <PieBlock data={data} size={300} />
      </div>
    </div>
  );

  const renderContent = () => {
    switch (active) {
      case "sli":
        return renderSli();
      case "ent.all":
        return (
          <div className="flex h-full w-full flex-col">
            {renderHeader(
              "Enterprise License — Combined view",
              "Capital investment and sector-wise split of enterprise license applications.",
            )}
            <div className="flex flex-1 items-start">
              <div className="w-full">
                <CombinedEnterprisePie />
                <div className="mt-[24px] rounded-[12px] border border-[#e8eff4] bg-[#f6f9fb]/60 p-[16px]">
                  <h4 className="mb-[12px] font-sans text-[14px] font-bold uppercase tracking-wide text-[#5c6e93]">
                    Overall license status
                  </h4>
                  <PieBlock data={ENTERPRISE_OVERALL} size={240} />
                </div>
              </div>
            </div>
          </div>
        );
      case "ent.capital":
        return renderPieView(
          "Capital investment-wise split",
          "Distribution of enterprise license applications by capital investment band.",
          ENTERPRISE_CAPITAL_INVESTMENT,
        );
      case "ent.sector":
        return renderPieView(
          "Sector-wise split",
          "Distribution of enterprise license applications by industry sector.",
          ENTERPRISE_SECTOR_WISE,
        );
      case "reg.paramedical":
        return renderPieView(
          "Paramedical registrations",
          "Status split of paramedical institution registration applications.",
          REG_PARAMEDICAL,
        );
      case "reg.tutorial":
        return renderPieView(
          "Tutorial institution registrations",
          "Status split of tutorial institution registration applications.",
          REG_TUTORIAL,
        );
      case "reg.dog":
        return renderPieView(
          "Dog license issuance",
          "Status split of dog license applications under Pet Animals services.",
          REG_DOG_LICENSE,
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full shrink-0 flex-col gap-[16px] rounded-[16px] border border-[#e8eff4] bg-[#f6f9fb] p-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:h-[606px] lg:flex-row">
      {/* Tree view sidebar */}
      <div className="flex w-full shrink-0 flex-col gap-[16px] lg:w-[280px]">
        <div className="flex items-center gap-[12px]">
          <div className="size-[32px] shrink-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path
                d="M28 16.8678C28 19.9915 24.5796 21.9098 21.9142 20.2809L21.1235 19.7977C19.8234 19.0032 18.1848 19.0163 16.8975 19.8316L10.1402 24.1112C7.47694 25.7979 4 23.8844 4 20.7319V19.5V8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8L28 16.8678Z"
                fill="#83DAF6"
              />
              <path
                d="M4 19.5L10.5382 15.1412C12.001 14.166 13.9292 14.2603 15.2899 15.3736L16.358 16.2475C17.6468 17.3019 19.454 17.4477 20.8951 16.6134L28 12.5V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24L4 19.5Z"
                fill="#00B2EB"
              />
            </svg>
          </div>
          <span className="font-sans text-[16px] font-bold text-[#232f50]">Graphs</span>
        </div>

        <div className="flex flex-col gap-[6px] overflow-y-auto pr-[2px]">
          <div className="px-[4px] py-[6px] font-sans text-[12px] font-medium uppercase tracking-wide text-[#5c6e93] opacity-70">
            Select Graph
          </div>
          <TreeView active={active} onSelect={setActive} />
        </div>

        <div className="mt-auto rounded-[10px] border border-dashed border-[#c8d8e8] bg-white/60 p-[12px]">
          <p className="font-sans text-[12px] font-semibold text-[#5c6e93]">
            <ChevronRight className="mr-1 inline h-3 w-3 -translate-y-px text-[#5c6e93]" />
            Tip: click a category to expand its sub-graphs.
          </p>
        </div>
      </div>

      {/* Content panel */}
      <div className="relative flex flex-1 flex-col overflow-auto rounded-[16px] border border-[#e8eff4] bg-white p-4 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] md:p-[32px]">
        {renderContent()}
      </div>
    </div>
  );
}
