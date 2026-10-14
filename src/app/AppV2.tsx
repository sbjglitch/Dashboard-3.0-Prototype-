import { useEffect, useId, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { ModuleTile } from "./v2/ModuleTile";
import { ModuleDetail } from "./v2/ModuleDetail";
import { KERALA_TOTALS, MODULES, formatCount, formatPercent } from "./v2/moduleHealth";

const TOTAL_STATES = [
  { key: "disposed", label: "Disposed" },
  { key: "underProcess", label: "Under process" },
  { key: "delayed", label: "Delayed" },
] as const;

/** Mirrors the board's Tailwind column breakpoints so the detail panel can open
 *  after the expanded tile's whole row instead of splitting it. */
function useBoardColumns() {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const queries: [number, MediaQueryList][] = [
      [4, window.matchMedia("(min-width: 1280px)")],
      [3, window.matchMedia("(min-width: 1024px)")],
      [2, window.matchMedia("(min-width: 640px)")],
    ];
    const update = () => setCols(queries.find(([, q]) => q.matches)?.[0] ?? 1);
    update();
    queries.forEach(([, q]) => q.addEventListener("change", update));
    return () => queries.forEach(([, q]) => q.removeEventListener("change", update));
  }, []);

  return cols;
}

function ScopeControl({ label, value }: { label: string; value: string }) {
  return (
    <button
      type="button"
      aria-haspopup="listbox"
      aria-expanded={false}
      className="flex items-center gap-[8px] h-[40px] px-[12px] rounded-[8px] bg-white border border-[#adbfd9] hover:border-[#09327b] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
    >
      <span className="font-sans font-medium text-[13px] text-[#475069] leading-[18px]">{label}</span>
      <span className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]">{value}</span>
      <ChevronDown className="w-4 h-4 text-[#5c6e93]" aria-hidden="true" />
    </button>
  );
}

export default function AppV2() {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const cols = useBoardColumns();
  const panelBase = useId();
  const totals = KERALA_TOTALS;

  return (
    <div className="min-h-screen bg-[#f2f6ff]">
      <a
        href="#v2-board"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-[12px] focus:px-[14px] focus:py-[10px] focus:rounded-[8px] focus:bg-[#09327b] focus:text-white focus:font-sans focus:font-semibold focus:text-[14px]"
      >
        Skip to dashboard
      </a>

      <SiteHeader />

      <main className="px-4 md:px-[32px] py-[20px] md:py-[24px] flex flex-col gap-[20px] max-w-[1718px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-[12px]">
          <h1 className="font-sans font-semibold text-[22px] md:text-[26px] text-[#232f50] leading-[1.2]">
            File status across Kerala
          </h1>
          <div className="flex flex-wrap items-center gap-[8px]">
            <ScopeControl label="Local body" value="Kerala" />
            <ScopeControl label="Period" value="Upto today" />
            <button
              type="button"
              className="flex items-center gap-[8px] h-[40px] px-[12px] rounded-[8px] bg-white border border-[#adbfd9] font-sans font-semibold text-[14px] text-[#232f50] leading-[20px] hover:border-[#09327b] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#09327b]" aria-hidden="true" />
              Filters
            </button>
          </div>
        </div>

        <section
          aria-label="Kerala totals"
          className="flex flex-wrap items-center gap-x-[28px] gap-y-[10px] rounded-[12px] bg-[#09327b] px-[18px] py-[14px]"
        >
          <p className="flex items-baseline gap-[8px]">
            <span className="font-sans font-semibold text-[22px] text-white leading-[1] tabular-nums">
              {formatCount(totals.total)}
            </span>
            <span className="font-sans font-medium text-[13px] text-[#c5d6ef] leading-[18px]">
              files received
            </span>
          </p>
          <span className="hidden sm:block w-px h-[22px] bg-white/25" aria-hidden="true" />
          {TOTAL_STATES.map((s) => (
            <p key={s.key} className="flex items-baseline gap-[6px]">
              <span className="font-sans font-semibold text-[15px] text-white leading-[20px] tabular-nums">
                {formatCount(totals[s.key])}
              </span>
              <span className="font-sans font-medium text-[13px] text-[#c5d6ef] leading-[18px]">
                {s.label} ({formatPercent(totals[s.key] / totals.total)})
              </span>
            </p>
          ))}
        </section>

        <section id="v2-board" aria-label="Modules">
          <h2 className="sr-only">Module health</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[14px]">
            {MODULES.map((m, i) => {
              const panelId = `${panelBase}-${m.id}`;
              const expanded = openModule === m.id;
              const openIndex = MODULES.findIndex((x) => x.id === openModule);
              const rowEnd =
                openIndex < 0
                  ? -1
                  : Math.min(Math.floor(openIndex / cols) * cols + cols - 1, MODULES.length - 1);
              const openModuleData = openIndex < 0 ? null : MODULES[openIndex];

              return (
                <div key={m.id} className="contents">
                  <ModuleTile
                    module={m}
                    expanded={expanded}
                    panelId={panelId}
                    onToggle={() => setOpenModule(expanded ? null : m.id)}
                  />
                  {i === rowEnd && openModuleData && (
                    <div className="col-span-full">
                      <ModuleDetail
                        module={openModuleData}
                        panelId={`${panelBase}-${openModuleData.id}`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <p className="font-sans font-medium text-[13px] text-[#475069] leading-[18px]">
          Figures shown are sample data for prototype review, not live K-SMART records.
        </p>
      </main>
    </div>
  );
}
