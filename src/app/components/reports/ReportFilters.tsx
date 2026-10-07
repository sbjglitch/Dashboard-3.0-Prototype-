import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, ListFilter, X } from "lucide-react";
import { OCCUPANCY_TYPES, FILTER_BOUNDS } from "../../data/reportData";

export type TriState = "any" | "yes" | "no";
export type NumericRange = [number, number];

export interface ReportFilterState {
  builtUpArea: NumericRange;
  floorArea: NumericRange;
  plotArea: NumericRange;
  fsi: NumericRange;
  heightOfBuilding: NumericRange;
  noOfFloors: number[];
  noOfBlocks: number[];
  occupancy: string;
  parkingPlot: TriState;
  nocs: TriState;
}

const fullSpan = (key: string): NumericRange => [FILTER_BOUNDS[key].min, FILTER_BOUNDS[key].max];

/** Every discrete value on a small integer range, e.g. floors 2–5 → [2,3,4,5]. */
export const intOptions = (key: string): number[] => {
  const { min, max, step } = FILTER_BOUNDS[key];
  return Array.from({ length: Math.round((max - min) / step) + 1 }, (_, i) => min + i * step);
};

export const DEFAULT_REPORT_FILTERS: ReportFilterState = {
  builtUpArea: fullSpan("builtUpArea"),
  floorArea: fullSpan("floorArea"),
  plotArea: fullSpan("plotArea"),
  fsi: fullSpan("fsi"),
  heightOfBuilding: fullSpan("heightOfBuilding"),
  noOfFloors: intOptions("noOfFloors"),
  noOfBlocks: intOptions("noOfBlocks"),
  occupancy: "All",
  parkingPlot: "any",
  nocs: "any",
};

const MINMAX_FIELDS: { key: keyof ReportFilterState; label: string; unit?: string }[] = [
  { key: "builtUpArea", label: "Built-up Area", unit: "sq.m" },
  { key: "floorArea", label: "Floor Area", unit: "sq.m" },
  { key: "plotArea", label: "Plot Area", unit: "sq.m" },
  { key: "fsi", label: "FSI" },
  { key: "heightOfBuilding", label: "Height of Building", unit: "m" },
];

const inputClass =
  "w-full min-w-0 h-[44px] bg-white border border-[#e8eff4] rounded-[8px] px-[12px] font-sans font-medium text-[14px] text-[#232f50] " +
  "shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none transition-colors " +
  "hover:border-[#09327b] focus-visible:border-[#09327b] focus-visible:ring-2 focus-visible:ring-[#09327b]/25";

const fieldLabel = "font-sans font-medium text-[13px] text-[#5c6e93] leading-[18px] mb-[6px]";

function MinMaxField({
  label,
  unit,
  boundsKey,
  value,
  onChange,
}: {
  label: string;
  unit?: string;
  boundsKey: string;
  value: NumericRange;
  onChange: (next: NumericRange) => void;
}) {
  const id = useId();
  const { min, max, step } = FILTER_BOUNDS[boundsKey];
  const decimals = step < 1 ? 1 : 0;
  const clamp = (n: number) =>
    Number(Math.min(max, Math.max(min, Number.isFinite(n) ? n : min)).toFixed(decimals));

  // Correct on blur rather than per-keystroke, so typing "1" of "150" isn't clamped away.
  const normalise = () =>
    onChange([clamp(Math.min(value[0], value[1])), clamp(Math.max(value[0], value[1]))]);

  return (
    <fieldset className="min-w-0">
      <legend className={fieldLabel}>
        {label}
        {unit && <span className="text-[#9AA6AD]"> ({unit})</span>}
      </legend>
      <div className="flex items-center gap-[8px] min-w-0">
        <input
          id={`${id}-min`}
          type="number"
          min={min}
          max={max}
          step={step}
          aria-label={`${label} minimum`}
          className={inputClass}
          value={value[0]}
          onChange={(e) => onChange([Number(e.target.value), value[1]])}
          onBlur={normalise}
        />
        <span aria-hidden="true" className="text-[#9AA6AD] shrink-0">–</span>
        <input
          id={`${id}-max`}
          type="number"
          min={min}
          max={max}
          step={step}
          aria-label={`${label} maximum`}
          className={inputClass}
          value={value[1]}
          onChange={(e) => onChange([value[0], Number(e.target.value)])}
          onBlur={normalise}
        />
      </div>
    </fieldset>
  );
}

function IntegerChoiceField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: number[];
  value: number[];
  onChange: (next: number[]) => void;
}) {
  const toggle = (n: number) =>
    onChange(value.includes(n) ? value.filter((v) => v !== n) : [...value, n].sort((a, b) => a - b));

  return (
    <fieldset className="min-w-0">
      <legend className={fieldLabel}>{label}</legend>
      <div className="flex items-center gap-[4px] bg-[#e8eff4] rounded-[8px] p-[2px] h-[44px]">
        {options.map((n) => {
          const active = value.includes(n);
          return (
            <button
              key={n}
              type="button"
              aria-pressed={active}
              onClick={() => toggle(n)}
              className={`flex-1 h-full flex items-center justify-center gap-[3px] rounded-[6px] transition-all font-sans font-semibold text-[14px] focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#09327b] ${
                active
                  ? "bg-white border border-[#09327b]/30 shadow-sm text-[#09327b]"
                  : "border border-transparent text-[#5c6e93] hover:bg-white/50"
              }`}
            >
              {active && (
                <Check className="w-[12px] h-[12px] shrink-0" strokeWidth={3} aria-hidden="true" />
              )}
              {n}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function TriStateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: TriState;
  onChange: (next: TriState) => void;
}) {
  const name = useId();
  const options: { v: TriState; l: string }[] = [
    { v: "any", l: "Any" },
    { v: "yes", l: "Yes" },
    { v: "no", l: "No" },
  ];
  return (
    <fieldset className="min-w-0">
      <legend className={fieldLabel}>{label}</legend>
      <div className="flex items-center gap-[4px] bg-[#e8eff4] rounded-[8px] p-[2px] h-[44px]">
        {options.map((o) => {
          const active = value === o.v;
          return (
            <label
              key={o.v}
              className={`flex-1 h-full flex items-center justify-center rounded-[6px] cursor-pointer transition-all font-sans font-semibold text-[14px] ${
                active
                  ? "bg-white border border-[#e8eff4] shadow-sm text-[#232f50]"
                  : "border border-transparent text-[#5c6e93] hover:bg-white/50"
              } focus-within:ring-2 focus-within:ring-[#09327b]/40`}
            >
              <input
                type="radio"
                name={name}
                value={o.v}
                aria-label={`${label}: ${o.l}`}
                className="sr-only"
                checked={active}
                onChange={() => onChange(o.v)}
              />
              {o.l}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function ReportFilters({
  value,
  onChange,
  onApply,
  onReset,
  dirty,
  hasActiveFilters,
  open,
  onToggle,
}: {
  value: ReportFilterState;
  onChange: (next: ReportFilterState) => void;
  onApply: () => void;
  onReset: () => void;
  dirty: boolean;
  hasActiveFilters?: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const asideRef = useRef<HTMLElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>();

  // The sidebar sits well below the fold on load, so a fixed max-height overflows
  // the screen. Measure its real offset instead and shrink to whatever is left.
  useEffect(() => {
    const el = asideRef.current;
    if (!el) return;

    const update = () => {
      if (window.innerWidth < 1024) {
        setMaxHeight(undefined);
        return;
      }
      const top = el.getBoundingClientRect().top;
      setMaxHeight(Math.max(320, window.innerHeight - top - 24));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  const set = <K extends keyof ReportFilterState>(key: K, v: ReportFilterState[K]) =>
    onChange({ ...value, [key]: v });

  // One persistent element across both states — swapping two <aside>s would
  // remount the node and the width transition could never run.
  return (
    <aside
      ref={asideRef}
      id={panelId}
      aria-labelledby={open ? `${panelId}-title` : undefined}
      style={{ maxHeight: open ? maxHeight : undefined }}
      className={`t-resize w-full lg:shrink-0 lg:sticky lg:top-[96px] bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col overflow-hidden ${
        open ? "lg:w-[300px]" : "lg:w-[56px]"
      }`}
    >
      {!open && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={false}
          aria-controls={panelId}
          className="relative w-full lg:size-[56px] shrink-0 flex items-center justify-center gap-[8px] px-[16px] py-[12px] lg:p-0 hover:bg-[#f6f9fb] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
        >
          <span className="relative flex shrink-0">
            <ListFilter className="w-[18px] h-[18px] text-[#09327b]" aria-hidden="true" />
            {hasActiveFilters && (
              <span className="absolute -top-[3px] -right-[4px] size-[8px] rounded-full bg-[#e83a7a] ring-2 ring-white" />
            )}
          </span>
          <span className="font-sans font-semibold text-[14px] text-[#232f50] lg:sr-only">Show filters</span>
          {hasActiveFilters && <span className="sr-only">(filters applied)</span>}
        </button>
      )}

      {open && (
      // Fixed inner width so the panel is laid out at full size and simply
      // clipped while the container grows, instead of reflowing mid-animation.
      <div className="flex flex-col min-h-0 flex-1 w-full lg:w-[300px]">
      <div className="flex items-center justify-between gap-[8px] px-[16px] py-[12px] border-b border-[#e8eff4] shrink-0">
        <h2 id={`${panelId}-title`} className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
          Filters
        </h2>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded
          aria-label="Hide filters"
          className="size-[28px] shrink-0 flex items-center justify-center rounded-[6px] hover:bg-[#f6f9fb] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
        >
          <X className="w-4 h-4 text-[#5c6e93]" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-col gap-[20px] p-[16px] overflow-y-auto flex-1 min-h-0">
        <div className="min-w-0">
          <label htmlFor={`${panelId}-occupancy`} className={`block ${fieldLabel}`}>
            Type of Occupancy
          </label>
          <div className="relative">
            <select
              id={`${panelId}-occupancy`}
              className={`${inputClass} appearance-none pr-[36px] cursor-pointer`}
              value={value.occupancy}
              onChange={(e) => set("occupancy", e.target.value)}
            >
              <option value="All">All occupancies</option>
              {OCCUPANCY_TYPES.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <ChevronDown
              className="w-4 h-4 text-[#5c6e93] absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        {MINMAX_FIELDS.map((f) => (
          <MinMaxField
            key={f.key}
            label={f.label}
            unit={f.unit}
            boundsKey={f.key}
            value={value[f.key] as NumericRange}
            onChange={(next) => set(f.key, next as ReportFilterState[typeof f.key])}
          />
        ))}

        <IntegerChoiceField
          label="No. of Floors"
          options={intOptions("noOfFloors")}
          value={value.noOfFloors}
          onChange={(v) => set("noOfFloors", v)}
        />
        <IntegerChoiceField
          label="No. of Blocks"
          options={intOptions("noOfBlocks")}
          value={value.noOfBlocks}
          onChange={(v) => set("noOfBlocks", v)}
        />

        <TriStateField
          label="Contains Parking Plot"
          value={value.parkingPlot}
          onChange={(v) => set("parkingPlot", v)}
        />
        <TriStateField
          label="Any NOCs Attached"
          value={value.nocs}
          onChange={(v) => set("nocs", v)}
        />
      </div>

      <div className="border-t border-[#e8eff4] bg-[#f6f9fb] p-[12px] shrink-0 flex items-center gap-[8px]">
        <button
          type="button"
          onClick={onApply}
          disabled={!dirty}
          className="flex-1 h-[40px] rounded-[8px] bg-[#09327b] font-sans font-semibold text-[14px] text-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#0c3080] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#09327b]"
        >
          Apply Filters
        </button>
        <button
          type="button"
          onClick={onReset}
          className="h-[40px] px-[12px] rounded-[8px] font-sans font-semibold text-[14px] text-[#5c6e93] hover:bg-white hover:text-[#232f50] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
        >
          Reset
        </button>
      </div>
      </div>
      )}
    </aside>
  );
}
