import React from "react";
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

export interface KpiMetricItem {
  label: string;
  value: string | number;
  color?: string;
  dot?: string;
}

export interface KpiCardV3Props {
  label: string;
  value: number | string;
  prefix?: string;
  suffix?: string;

  /** Lucide icon component or icon component */
  Icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  /** Custom icon node */
  icon?: React.ReactNode;

  /** Solid tile colour behind the icon (hex or CSS color) */
  tone?: string;
  /** Tailwind bg class (e.g. "bg-[#1ebe72]") or color string */
  color?: string;

  /** Optional badge in the top right (e.g. percentage "31.3%") */
  badge?: string | React.ReactNode;

  /** Progress split bar (Citizen vs Internal breakdown) */
  split?: KpiSplit;

  /** Sub-metrics (e.g. Arrear Demand / Current Demand, or Citizen / Other breakdown) */
  metrics?: KpiMetricItem[];

  /** Shown in place of the split bar when a metric has no citizen/internal breakdown */
  caption?: string;

  /** Custom children for module-specific extra content */
  children?: React.ReactNode;

  /** Action footer callback (shows bottom button if provided) */
  onDetail?: () => void;
  /** Click handler for card or action */
  onClick?: () => void;
  /** Label for footer action button (defaults to "See in Detail") */
  actionLabel?: string;
  /** Optional custom class name */
  className?: string;
}

const fmt = (n: number | string) => (typeof n === "number" ? n.toLocaleString("en-IN") : n);

export function KpiCardV3({
  label,
  value,
  prefix,
  suffix,
  Icon,
  icon,
  tone,
  color,
  badge,
  split,
  metrics,
  caption,
  children,
  onDetail,
  onClick,
  actionLabel = "See in Detail",
  className = "",
}: KpiCardV3Props) {
  const share = split ? split.primary / Math.max(1, split.primary + split.secondary) : 0;
  const isBgClass = color && color.startsWith("bg-");
  const resolvedBgColor = tone || (!isBgClass ? color : undefined) || "#0ea5e0";
  const handleAction = onDetail || onClick;
  const showFooter = Boolean(handleAction);

  return (
    <article
      className={`flex flex-col bg-[#fafcfe] border border-[#e8eff4] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden min-w-0 transition-shadow duration-150 ${
        onClick && !onDetail ? "cursor-pointer hover:shadow-md" : ""
      } ${className}`}
      onClick={!onDetail && onClick ? onClick : undefined}
      role={!onDetail && onClick ? "button" : undefined}
      tabIndex={!onDetail && onClick ? 0 : undefined}
      onKeyDown={
        !onDetail && onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className="bg-white border-b border-[#e8eff4] rounded-[12px] p-[16px] flex flex-col flex-1">
        {/* Header: Icon, Label, Badge */}
        <div className="flex items-center justify-between gap-[8px]">
          <div className="flex items-center gap-[8px] min-w-0">
            {Icon ? (
              <span
                className={`size-[32px] shrink-0 rounded-[6px] flex items-center justify-center ${isBgClass ? color : ""}`}
                style={!isBgClass ? { backgroundColor: resolvedBgColor } : undefined}
                aria-hidden="true"
              >
                <Icon className="size-[18px] text-white" strokeWidth={2.25} />
              </span>
            ) : icon ? (
              <span
                className={`size-[32px] shrink-0 rounded-[6px] flex items-center justify-center ${isBgClass ? color : ""}`}
                style={!isBgClass ? { backgroundColor: resolvedBgColor } : undefined}
                aria-hidden="true"
              >
                {icon}
              </span>
            ) : (tone || color) ? (
              <span
                className={`size-[10px] shrink-0 rounded-sm ${isBgClass ? color : ""}`}
                style={!isBgClass ? { backgroundColor: resolvedBgColor } : undefined}
                aria-hidden="true"
              />
            ) : null}
            <h3 className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] truncate">{label}</h3>
          </div>

          {badge && (
            typeof badge === "string" ? (
              <span className="bg-[#f0f4fb] text-[#09327b] text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0">
                {badge}
              </span>
            ) : (
              badge
            )
          )}
        </div>

        {/* Main Value */}
        <div className="p-[8px] flex items-baseline gap-[4px]">
          {prefix && (
            <span className="font-sans font-semibold text-[22px] text-[#232f50] leading-none">{prefix}</span>
          )}
          <p className="font-sans font-semibold text-[30px] sm:text-[32px] text-[#232f50] leading-[40px] tracking-tight tabular-nums truncate">
            {fmt(value)}
          </p>
          {suffix && (
            <span className="font-sans font-medium text-[14px] text-[#5c6e93] leading-none ml-[2px]">{suffix}</span>
          )}
        </div>

        {/* Breakdown: Split Bar */}
        {split && (
          <div className="px-[4px] flex flex-col gap-[4px] mt-auto">
            <div
              className="flex gap-[2px] h-[4px] my-[4px]"
              role="img"
              aria-label={`${split.primaryLabel} ${fmt(split.primary)}, ${split.secondaryLabel} ${fmt(split.secondary)}`}
            >
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
        )}

        {/* Breakdown: Key-Value Metrics List */}
        {metrics && metrics.length > 0 && (
          <div className="px-[4px] pt-[8px] mt-auto border-t border-[#e8eff4] flex items-center justify-between gap-[8px]">
            {metrics.map((m, idx) => (
              <div
                key={m.label}
                className={`flex flex-col min-w-0 ${idx === metrics.length - 1 && metrics.length > 1 ? "items-end text-right" : "items-start text-left"}`}
              >
                <div className="flex items-center gap-[4px] max-w-full">
                  {m.dot && (
                    <span className="size-[6px] rounded-full shrink-0" style={{ backgroundColor: m.dot }} aria-hidden="true" />
                  )}
                  <span className="font-sans font-medium text-[11px] sm:text-[12px] text-[#5c6e93] leading-[16px] truncate">
                    {m.label}
                  </span>
                </div>
                <span className="font-sans font-semibold text-[12px] sm:text-[13px] text-[#232f50] leading-[18px] tabular-nums">
                  {fmt(m.value)}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Caption */}
        {!split && !metrics && caption && (
          <p className="px-[8px] font-sans font-medium text-[12px] text-[#5c6e93] leading-[16px] mt-auto">{caption}</p>
        )}

        {/* Extra children */}
        {children && <div className="mt-auto pt-[4px]">{children}</div>}
      </div>

      {/* Footer Action Button */}
      {showFooter && (
        <button
          type="button"
          onClick={handleAction}
          className="press-subtle group flex items-center justify-between px-[12px] py-[8px] font-sans font-semibold text-[12px] text-[#5c6e93] leading-[16px] [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:text-[#232f50] transition-colors duration-150 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#09327b]"
        >
          {actionLabel}
          <span className="sr-only">: {label}</span>
          <ArrowRight className="size-[20px] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:group-hover:translate-x-[2px]" aria-hidden="true" />
        </button>
      )}
    </article>
  );
}
