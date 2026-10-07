import { X } from "lucide-react";
import { FILTER_BOUNDS } from "../../data/reportData";
import { intOptions, type NumericRange, type ReportFilterState, type TriState } from "./ReportFilters";

interface Chip {
  id: string;
  label: string;
  onRemove: () => void;
}

const RANGE_LABELS: { key: keyof ReportFilterState; label: string; unit?: string }[] = [
  { key: "builtUpArea", label: "Built-up Area", unit: "sq.m" },
  { key: "floorArea", label: "Floor Area", unit: "sq.m" },
  { key: "plotArea", label: "Plot Area", unit: "sq.m" },
  { key: "fsi", label: "FSI" },
  { key: "heightOfBuilding", label: "Height", unit: "m" },
];

const fmt = (n: number, step: number) =>
  step < 1 ? n.toFixed(1) : Math.round(n).toLocaleString("en-IN");

const triLabel = (v: TriState) => (v === "yes" ? "Yes" : "No");

export function buildChips(
  filters: ReportFilterState,
  localBody: string,
  onFiltersChange: (next: ReportFilterState) => void,
  onLocalBodyChange: (next: string) => void,
): Chip[] {
  const chips: Chip[] = [];
  const patch = (p: Partial<ReportFilterState>) => onFiltersChange({ ...filters, ...p });

  if (localBody !== "Kerala") {
    chips.push({
      id: "localBody",
      label: `Local Body: ${localBody}`,
      onRemove: () => onLocalBodyChange("Kerala"),
    });
  }

  if (filters.occupancy !== "All") {
    chips.push({
      id: "occupancy",
      label: `Occupancy: ${filters.occupancy}`,
      onRemove: () => patch({ occupancy: "All" }),
    });
  }

  for (const { key, label, unit } of RANGE_LABELS) {
    const { min, max, step } = FILTER_BOUNDS[key];
    const [lo, hi] = filters[key] as NumericRange;
    if (lo === min && hi === max) continue;
    chips.push({
      id: key,
      label: `${label}: ${fmt(lo, step)} – ${fmt(hi, step)}${unit ? ` ${unit}` : ""}`,
      onRemove: () => patch({ [key]: [min, max] } as Partial<ReportFilterState>),
    });
  }

  for (const [key, label] of [
    ["noOfFloors", "Floors"],
    ["noOfBlocks", "Blocks"],
  ] as const) {
    const all = intOptions(key);
    const selected = filters[key];
    if (selected.length === all.length) continue;
    chips.push({
      id: key,
      label: `${label}: ${selected.length ? selected.join(", ") : "none"}`,
      onRemove: () => patch({ [key]: all } as Partial<ReportFilterState>),
    });
  }

  if (filters.parkingPlot !== "any") {
    chips.push({
      id: "parkingPlot",
      label: `Parking Plot: ${triLabel(filters.parkingPlot)}`,
      onRemove: () => patch({ parkingPlot: "any" }),
    });
  }

  if (filters.nocs !== "any") {
    chips.push({
      id: "nocs",
      label: `NOCs Attached: ${triLabel(filters.nocs)}`,
      onRemove: () => patch({ nocs: "any" }),
    });
  }

  return chips;
}

export function ActiveFilterChips({ chips, onClearAll }: { chips: Chip[]; onClearAll: () => void }) {
  if (chips.length === 0) return null;

  return (
    <div className="bg-[#f6f9fb] border-b border-[#e8eff4] px-[16px] py-[10px] flex items-center gap-[8px] flex-wrap">
      <span className="font-sans font-medium text-[13px] text-[#5c6e93] leading-[18px] shrink-0">
        Active filters
      </span>
      <ul className="flex items-center gap-[8px] flex-wrap min-w-0">
        {chips.map((c) => (
          <li key={c.id}>
            <span className="h-[32px] pl-[12px] pr-[4px] flex items-center gap-[2px] bg-white border border-[#d7e2f2] rounded-full shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
              <span className="font-sans font-semibold text-[13px] text-[#232f50] leading-[18px] whitespace-nowrap">
                {c.label}
              </span>
              <button
                type="button"
                onClick={c.onRemove}
                aria-label={`Remove filter ${c.label}`}
                className="size-[24px] shrink-0 flex items-center justify-center rounded-full text-[#5c6e93] hover:bg-[#e8eff4] hover:text-[#09327b] transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#09327b]"
              >
                <X className="w-[13px] h-[13px]" strokeWidth={2.5} aria-hidden="true" />
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onClearAll}
        className="h-[32px] px-[10px] shrink-0 rounded-[8px] font-sans font-semibold text-[13px] text-[#09327b] hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#09327b]"
      >
        Clear all
      </button>
    </div>
  );
}
