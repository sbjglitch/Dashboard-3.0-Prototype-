import { AlertTriangle, ChevronDown } from "lucide-react";
import {
  BREACH_THRESHOLD,
  formatCount,
  formatPercent,
  type ModuleHealth,
} from "./moduleHealth";

function Trend({ values, breaching }: { values: number[]; breaching: boolean }) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-[3px] h-[28px]" aria-hidden="true">
      {values.map((v, i) => (
        <div
          key={i}
          className={`flex-1 min-w-[2px] rounded-t-[2px] ${
            breaching ? "bg-[#e8a9c3]" : "bg-[#cfe0f0]"
          } ${i === values.length - 1 ? (breaching ? "!bg-[#c02863]" : "!bg-[#09327b]") : ""}`}
          style={{ height: `${Math.max(8, (v / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export function ModuleTile({
  module: m,
  expanded,
  onToggle,
  panelId,
}: {
  module: ModuleHealth;
  expanded: boolean;
  onToggle: () => void;
  panelId: string;
}) {
  const breaching = m.breachRate > BREACH_THRESHOLD;
  const disposalRate = m.disposed / m.total;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={panelId}
      className={`group text-left w-full h-full flex flex-col gap-[14px] p-[18px] rounded-[12px] bg-white border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] ${
        expanded
          ? "border-[#09327b] ring-2 ring-[#09327b]/20"
          : breaching
            ? "border-[#f0c9d8] hover:border-[#c02863]"
            : "border-[#d7e2f2] hover:border-[#09327b]"
      }`}
    >
      <span className="flex items-start justify-between gap-[8px]">
        <span className="font-sans font-semibold text-[15px] text-[#232f50] leading-[20px]">
          {m.name}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 mt-[2px] text-[#5c6e93] transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </span>

      <span className="flex items-end justify-between gap-[12px]">
        <span className="flex flex-col gap-[2px]">
          <span className="font-sans font-semibold text-[30px] text-[#232f50] leading-[1] tabular-nums">
            {formatCount(m.delayed)}
          </span>
          <span className="font-sans font-medium text-[13px] text-[#475069] leading-[18px]">
            delayed files
          </span>
        </span>
        <Trend values={m.trend} breaching={breaching} />
      </span>

      <span className="flex items-center justify-between gap-[8px] pt-[12px] border-t border-[#e8eff4]">
        <span className="font-sans font-medium text-[13px] text-[#475069] leading-[18px] tabular-nums">
          {formatPercent(disposalRate)} disposed
        </span>
        {breaching ? (
          <span className="flex items-center gap-[4px] font-sans font-semibold text-[13px] text-[#9a2150] leading-[18px]">
            <AlertTriangle className="w-[14px] h-[14px] text-[#c02863]" aria-hidden="true" />
            Breaching SLI
          </span>
        ) : (
          <span className="font-sans font-medium text-[13px] text-[#475069] leading-[18px] tabular-nums">
            {formatCount(m.total)} files
          </span>
        )}
      </span>
    </button>
  );
}
