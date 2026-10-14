import { useState } from "react";
import { ChevronDown, RotateCcw } from "lucide-react";
import {
  BODY_TYPES, DEFAULT_SCOPE, DISTRICTS, Field, LOCAL_BODIES, MODULES, PERIODS,
  SERVICES, SUB_MODULES, ChipGroup, ModuleRail, SectionLabel, StageContent, type Scope,
} from "./shared";

/**
 * Axis: horizontal. No vertical chrome at all — the scope reads as a sentence
 * across the top and expands downward into the field grid.
 */
export function VariantSummaryBar() {
  const [scope, setScope] = useState<Scope>(DEFAULT_SCOPE);
  const [open, setOpen] = useState(false);
  const set = <K extends keyof Scope>(k: K, v: Scope[K]) => setScope((s) => ({ ...s, [k]: v }));

  const moduleName = MODULES.find((m) => m.id === scope.module)?.name ?? "All Modules";
  const sentence = [moduleName, scope.district, scope.bodyType, scope.period]
    .filter((p) => p && p !== "All")
    .join(" · ") || "All modules, everywhere, all time";

  return (
    <div className="min-h-full p-[24px] flex flex-col gap-[16px]">
      <div className="bg-white border border-[#d7e2f2] rounded-[12px] overflow-hidden">
        <div className="flex items-center justify-between gap-[12px] px-[16px] py-[12px]">
          <p className="font-sans text-[14px] text-[#475069] leading-[20px] min-w-0 truncate">
            Showing <span className="font-semibold text-[#232f50]">{sentence}</span>
          </p>
          <div className="flex items-center gap-[8px] shrink-0">
            <button
              type="button"
              onClick={() => setScope(DEFAULT_SCOPE)}
              className="inline-flex items-center gap-[6px] h-[36px] px-[12px] rounded-[8px] font-sans font-semibold text-[13px] text-[#5c6e93] hover:bg-[#f6f9fb] hover:text-[#232f50] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
            >
              <RotateCcw className="size-[15px]" aria-hidden="true" />
              Reset
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="inline-flex items-center gap-[6px] h-[36px] px-[12px] bg-white border border-[#d7e2f2] rounded-[8px] font-sans font-semibold text-[13px] text-[#232f50] hover:border-[#09327b] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
            >
              {open ? "Hide filters" : "Change filters"}
              <ChevronDown className={`size-[15px] text-[#5c6e93] transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-[#e8eff4] motion-safe:animate-[expandDown_220ms_cubic-bezier(0.22,1,0.36,1)] origin-top">
            <div className="px-[16px] pt-[12px]">
              <SectionLabel>MODULE</SectionLabel>
            </div>
            <ModuleRail value={scope.module} onChange={(v) => set("module", v)} orientation="horizontal" />
            <div className="p-[16px] pt-[8px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-[16px]">
              <Field label="Sub-Module" value={scope.subModule} options={SUB_MODULES} onChange={(v) => set("subModule", v)} />
              <Field label="Service" value={scope.service} options={SERVICES} onChange={(v) => set("service", v)} />
              <Field label="District" value={scope.district} options={DISTRICTS} onChange={(v) => set("district", v)} />
              <Field label="Local Body Type" value={scope.bodyType} options={BODY_TYPES} onChange={(v) => set("bodyType", v)} />
              <Field label="Local Body" value={scope.localBody} options={LOCAL_BODIES} onChange={(v) => set("localBody", v)} />
            </div>
            <div className="px-[16px] pb-[16px]">
              <ChipGroup label="TIME PERIOD" options={PERIODS} value={scope.period} onChange={(v) => set("period", v)} />
            </div>
          </div>
        )}
      </div>

      <StageContent scope={scope} />
    </div>
  );
}
