import { useId } from "react";
import { ChevronDown } from "lucide-react";
import { MultiSelectField } from "./MultiSelectField";
import {
  CUSTOM_RANGE,
  GRIEVANCE_STATUSES,
  GRIEVANCE_TYPES,
  TIME_PERIODS,
} from "../../data/grievanceReportData";

export interface GrievanceAttributeState {
  timePeriod: string;
  /** ISO yyyy-mm-dd, only meaningful while timePeriod is the custom range. */
  from: string;
  to: string;
  category: "All" | "Complaint" | "Grievance";
  /** Multi-select; an empty list means no type restriction. */
  types: string[];
  status: string;
}

export const DEFAULT_GRIEVANCE_ATTRIBUTES: GrievanceAttributeState = {
  timePeriod: "All",
  from: "",
  to: "",
  category: "All",
  types: [],
  status: "All",
};

const CATEGORY_CHIPS: GrievanceAttributeState["category"][] = ["All", "Complaint", "Grievance"];

const fieldLabel =
  "block font-sans font-medium text-[14px] text-[#232f50] leading-[20px] mb-[8px]";

const selectClass =
  "w-full h-[44px] appearance-none bg-white border border-[#e8eff4] rounded-[8px] pl-[18px] pr-[40px] " +
  "font-sans font-medium text-[14px] text-[#232f50] leading-[20px] cursor-pointer " +
  "shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none transition-colors " +
  "hover:border-[#09327b] focus-visible:border-[#09327b] focus-visible:ring-2 focus-visible:ring-[#09327b]/25";

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className="w-full min-w-0">
      <label htmlFor={id} className={fieldLabel}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className={selectClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          className="w-4 h-4 text-[#5c6e93] absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function DateField({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: string;
  min?: string;
  max?: string;
  onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className="w-full min-w-0">
      <label
        htmlFor={id}
        className="block font-sans font-medium text-[13px] text-[#5c6e93] leading-[18px] mb-[6px]"
      >
        {label}
      </label>
      <input
        id={id}
        type="date"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[44px] bg-white border border-[#e8eff4] rounded-[8px] px-[14px] font-sans font-medium text-[14px] text-[#232f50] leading-[20px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] outline-none transition-colors hover:border-[#09327b] focus-visible:border-[#09327b] focus-visible:ring-2 focus-visible:ring-[#09327b]/25"
      />
    </div>
  );
}

export function GrievanceAttributes({
  value,
  onChange,
}: {
  value: GrievanceAttributeState;
  onChange: (next: GrievanceAttributeState) => void;
}) {
  const set = <K extends keyof GrievanceAttributeState>(
    key: K,
    v: GrievanceAttributeState[K],
  ) => onChange({ ...value, [key]: v });

  return (
    <aside
      aria-label="Report attributes"
      className="w-full lg:w-[288px] lg:shrink-0 bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_4px_8px_-2px_rgba(10,13,18,0.1),0px_2px_4px_-2px_rgba(10,13,18,0.06)] p-[16px] flex flex-col gap-[24px]"
    >
      <h2 className="font-sans font-semibold text-[14px] text-[#475069] leading-[20px] tracking-[0.04em]">
        REPORT ATTRIBUTES
      </h2>

      <div className="w-full min-w-0">
        <SelectField
          label="Time Period"
          value={value.timePeriod}
          options={TIME_PERIODS}
          onChange={(v) => set("timePeriod", v)}
        />

        {value.timePeriod === CUSTOM_RANGE && (
          <div className="mt-[12px] flex flex-col gap-[12px]">
            <DateField
              label="From"
              value={value.from}
              max={value.to || undefined}
              onChange={(v) => set("from", v)}
            />
            <DateField
              label="To"
              value={value.to}
              min={value.from || undefined}
              onChange={(v) => set("to", v)}
            />
          </div>
        )}
      </div>

      <fieldset className="w-full min-w-0">
        <legend className={fieldLabel}>Category</legend>
        <div className="flex flex-wrap gap-[8px]">
          {CATEGORY_CHIPS.map((c) => {
            const active = value.category === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => set("category", c)}
                className={`px-[16px] py-[12px] rounded-[12px] border font-sans text-[12px] leading-[16px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] ${
                  active
                    ? "bg-[#e5f7fd] border-[#b2e8f9] text-[#232f50] font-semibold"
                    : "bg-white border-[#e8eff4] text-[#232f50] font-medium hover:border-[#09327b]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </fieldset>

      <MultiSelectField
        label="Complaints/Grievance type"
        options={GRIEVANCE_TYPES}
        value={value.types}
        onChange={(v) => set("types", v)}
      />

      <SelectField
        label="Status"
        value={value.status}
        options={["All", ...GRIEVANCE_STATUSES]}
        onChange={(v) => set("status", v)}
      />
    </aside>
  );
}
