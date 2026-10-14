import { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  BODY_TYPES, DEFAULT_SCOPE, DISTRICTS, Field, LOCAL_BODIES, PERIODS,
  SERVICES, SUB_MODULES, ChipGroup, ModuleRail, SectionLabel, StageContent, type Scope,
} from "./shared";

/**
 * Axis: persistent vertical chrome that collapses to the icon rail.
 * The rail never leaves; only the field panel's width animates away.
 */
export function VariantAnchored() {
  const [scope, setScope] = useState<Scope>(DEFAULT_SCOPE);
  const [open, setOpen] = useState(true);
  const set = <K extends keyof Scope>(k: K, v: Scope[K]) => setScope((s) => ({ ...s, [k]: v }));

  return (
    <div className="flex gap-[16px] items-start p-[24px] min-h-full">
      <div className="flex bg-[#e8eff4] gap-px rounded-[12px] overflow-hidden shadow-[0px_4px_8px_-2px_rgba(10,13,18,0.1),0px_2px_4px_-2px_rgba(10,13,18,0.06)] shrink-0">
        <div className="bg-white">
          <ModuleRail value={scope.module} onChange={(v) => set("module", v)} />
        </div>

        <div
          className="bg-white overflow-hidden motion-safe:transition-[width] motion-safe:duration-[250ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: open ? 320 : 0 }}
        >
          <div className="w-[320px] p-[16px] flex flex-col gap-[32px]">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-semibold text-[16px] text-[#232f50] leading-[24px]">Filter</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Collapse filters"
                className="size-[32px] flex items-center justify-center rounded-[6px] text-[#5c6e93] hover:bg-[#f6f9fb] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
              >
                <ChevronsLeft className="size-[20px]" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-col gap-[16px]">
              <SectionLabel>MODULE</SectionLabel>
              <Field label="Sub-Module" value={scope.subModule} options={SUB_MODULES} onChange={(v) => set("subModule", v)} />
              <Field label="Service" value={scope.service} options={SERVICES} onChange={(v) => set("service", v)} />
            </div>

            <div className="flex flex-col gap-[16px]">
              <SectionLabel>LOCAL BODY / STATE</SectionLabel>
              <Field label="District" value={scope.district} options={DISTRICTS} onChange={(v) => set("district", v)} />
              <Field label="Local Body Type" value={scope.bodyType} options={BODY_TYPES} onChange={(v) => set("bodyType", v)} />
              <Field label="Local Body" value={scope.localBody} options={LOCAL_BODIES} onChange={(v) => set("localBody", v)} />
            </div>

            <ChipGroup label="TIME PERIOD" options={PERIODS} value={scope.period} onChange={(v) => set("period", v)} />
          </div>
        </div>
      </div>

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Expand filters"
          className="shrink-0 size-[40px] flex items-center justify-center bg-white border border-[#d7e2f2] rounded-[8px] text-[#09327b] hover:border-[#09327b] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
        >
          <ChevronsRight className="size-[20px]" aria-hidden="true" />
        </button>
      )}

      <div className="flex-1 min-w-0">
        <StageContent scope={scope} />
      </div>
    </div>
  );
}
