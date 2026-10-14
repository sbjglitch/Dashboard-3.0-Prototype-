import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import { TOOLTIP_CONTENT } from "./tooltipStyles";

export interface KpiSplit {
  primaryLabel: string;
  primary: number;
  secondaryLabel: string;
  secondary: number;
}

const fmt = (n: number) => n.toLocaleString("en-IN");

export function KpiCardV3({
  label,
  value,
  Icon,
  tone,
  split,
  caption,
  onDetail,
}: {
  label: string;
  value: number;
  Icon: LucideIcon;
  /** Solid tile colour behind the icon. */
  tone: string;
  split?: KpiSplit;
  /** Shown in place of the split bar when a metric has no citizen/internal breakdown. */
  caption?: string;
  onDetail?: () => void;
}) {
  const share = split ? split.primary / Math.max(1, split.primary + split.secondary) : 0;

  return (
    <article className="flex flex-col bg-[#fafcfe] border border-[#e8eff4] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden min-w-0">
      <div className="bg-white border-b border-[#e8eff4] rounded-[12px] p-[16px] flex flex-col">
        <div className="flex items-center gap-[8px]">
          <span className="size-[32px] shrink-0 rounded-[6px] flex items-center justify-center" style={{ backgroundColor: tone }} aria-hidden="true">
            <Icon className="size-[18px] text-white" strokeWidth={2.25} />
          </span>
          <h3 className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] truncate">{label}</h3>
        </div>

        <p className="p-[8px] font-sans font-semibold text-[32px] text-[#232f50] leading-[42px] tabular-nums">{fmt(value)}</p>

        {split ? (
          <div className="px-[4px] flex flex-col gap-[4px]">
            <div className="flex gap-[2px] h-[4px] my-[4px]" role="img" aria-label={`${split.primaryLabel} ${fmt(split.primary)}, ${split.secondaryLabel} ${fmt(split.secondary)}`}>
              <span className="h-full rounded-[1px] bg-[#78d8aa]" style={{ width: `${share * 100}%` }} />
              <span className="h-full rounded-[1px] bg-[#f9e3b3] flex-1" />
            </div>
            <dl className="flex items-start justify-between gap-[8px]">
              {[
                { l: split.primaryLabel, v: split.primary, dot: "#45c486" },
                { l: split.secondaryLabel, v: split.secondary, dot: "#e8b84a" },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-[4px] min-w-0 max-w-[140px] flex-1">
                  <span className="size-[6px] rounded-full shrink-0" style={{ backgroundColor: s.dot }} aria-hidden="true" />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <dt className="font-sans font-medium text-[12px] text-[#5c6e93] leading-[16px] truncate cursor-default" tabIndex={0}>
                        {s.l}
                      </dt>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={6} className={TOOLTIP_CONTENT}>{s.l}</TooltipContent>
                  </Tooltip>
                  <dd className="font-sans font-semibold text-[12px] text-[#232f50] leading-[16px] tabular-nums shrink-0">{fmt(s.v)}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : (
          caption && <p className="px-[8px] font-sans font-medium text-[12px] text-[#5c6e93] leading-[16px]">{caption}</p>
        )}
      </div>

      <button
        type="button"
        onClick={onDetail}
        className="flex items-center justify-between px-[12px] py-[8px] font-sans font-semibold text-[12px] text-[#5c6e93] leading-[16px] hover:bg-white hover:text-[#232f50] transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#09327b]"
      >
        See in Detail
        <span className="sr-only">: {label}</span>
        <ArrowRight className="size-[20px]" aria-hidden="true" />
      </button>
    </article>
  );
}
