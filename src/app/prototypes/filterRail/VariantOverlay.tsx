import { useEffect, useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import {
  BODY_TYPES, DEFAULT_SCOPE, DISTRICTS, Field, LOCAL_BODIES, PERIODS,
  SERVICES, SUB_MODULES, ChipGroup, ModuleRail, SectionLabel, StageContent, type Scope,
} from "./shared";

/**
 * Axis: zero resting footprint. Nothing vertical is reserved; the panel is a
 * dismissible sheet over the content, so the table is full width at rest.
 */
export function VariantOverlay() {
  const [scope, setScope] = useState<Scope>(DEFAULT_SCOPE);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const set = <K extends keyof Scope>(k: K, v: Scope[K]) => setScope((s) => ({ ...s, [k]: v }));

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative min-h-full p-[24px] overflow-hidden">
      <div className="flex items-center gap-[12px] mb-[16px]">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          className="inline-flex items-center gap-[8px] h-[40px] px-[14px] bg-white border border-[#d7e2f2] rounded-[8px] font-sans font-semibold text-[14px] text-[#232f50] leading-[20px] hover:border-[#09327b] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
        >
          <SlidersHorizontal className="size-[18px] text-[#09327b]" aria-hidden="true" />
          Filters
        </button>
        <div className="bg-white border border-[#d7e2f2] rounded-[8px] overflow-hidden">
          <ModuleRail value={scope.module} onChange={(v) => set("module", v)} orientation="horizontal" />
        </div>
      </div>

      <StageContent scope={scope} />

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[#0a0d12]/35 z-10 motion-safe:animate-[fadeIn_180ms_ease-out]"
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Filters"
            tabIndex={-1}
            className="absolute top-0 right-0 bottom-0 w-[340px] max-w-full bg-white z-20 shadow-[-8px_0_24px_rgba(10,13,18,0.14)] overflow-y-auto outline-none motion-safe:animate-[slideIn_240ms_cubic-bezier(0.22,1,0.36,1)]"
          >
            <div className="p-[16px] flex flex-col gap-[32px]">
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-semibold text-[16px] text-[#232f50] leading-[24px]">Filter</h3>
                <button
                  type="button"
                  onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
                  aria-label="Close filters"
                  className="size-[32px] flex items-center justify-center rounded-[6px] text-[#5c6e93] hover:bg-[#f6f9fb] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
                >
                  <X className="size-[18px]" aria-hidden="true" />
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
        </>
      )}
    </div>
  );
}
