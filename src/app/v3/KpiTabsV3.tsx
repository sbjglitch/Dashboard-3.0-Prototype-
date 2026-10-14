import React from "react";
import type { LucideIcon } from "lucide-react";

export interface KpiTabItem<T extends string | number = string> {
  id: T;
  label: React.ReactNode;
  Icon?: LucideIcon;
  icon?: React.ReactNode | ((active: boolean) => React.ReactNode);
  badge?: string | number;
  disabled?: boolean;
}

export interface KpiTabsV3Props<T extends string | number = string> {
  tabs: KpiTabItem<T>[];
  activeTabId: T;
  onChange: (id: T) => void;
  size?: "md" | "sm";
  ariaLabel?: string;
  className?: string;
  tabClassName?: string;
}

export function KpiTabsV3<T extends string | number = string>({
  tabs,
  activeTabId,
  onChange,
  size = "md",
  ariaLabel = "Dashboard view",
  className = "",
  tabClassName = "",
}: KpiTabsV3Props<T>) {
  const isSm = size === "sm";

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`self-start flex flex-wrap items-center gap-[4px] p-[4px] bg-[#f1f5f8] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ${className}`}
    >
      {tabs.map((tab) => {
        const active = activeTabId === tab.id;

        const renderIcon = () => {
          if (tab.Icon) {
            const IconComp = tab.Icon;
            return (
              <IconComp
                className={`${isSm ? "size-[14px]" : "size-[16px]"} shrink-0 transition-colors ${
                  active ? "text-[#00b2eb]" : "text-[#8292b0]"
                }`}
                aria-hidden="true"
              />
            );
          }

          if (typeof tab.icon === "function") {
            return (
              <div
                className={`${isSm ? "size-[14px]" : "size-[16px]"} relative shrink-0 flex items-center justify-center`}
              >
                {tab.icon(active)}
              </div>
            );
          }

          if (tab.icon) {
            return (
              <div
                className={`${isSm ? "size-[14px]" : "size-[16px]"} relative shrink-0 flex items-center justify-center`}
              >
                {tab.icon}
              </div>
            );
          }

          return null;
        };

        return (
          <button
            key={String(tab.id)}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={tab.disabled}
            onClick={() => onChange(tab.id)}
            className={`press flex items-center rounded-[6px] font-sans transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#09327b] cursor-pointer ${
              isSm
                ? "gap-[6px] px-[12px] py-[4px] text-[12px] md:text-[13px] leading-[18px]"
                : "gap-[8px] px-[16px] py-[8px] text-[14px] leading-[20px]"
            } ${
              active
                ? "bg-white border-[0.5px] border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-semibold text-[#232f50]"
                : "border-[0.5px] border-transparent font-medium text-[#5c6e93] [@media(hover:hover)]:hover:text-[#232f50] hover:bg-white/40"
            } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""} ${tabClassName}`}
          >
            {renderIcon()}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={`ml-1 px-[6px] py-[1px] rounded-full text-[11px] font-semibold ${
                  active ? "bg-[#00b2eb]/15 text-[#009fd2]" : "bg-[#e8eff4] text-[#5c6e93]"
                }`}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// Convenient alias
export { KpiTabsV3 as TabsV3 };
