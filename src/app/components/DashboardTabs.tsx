import React from "react";

export interface TabItem<T extends string | number> {
  id: T;
  label: React.ReactNode;
  icon?: (active: boolean) => React.ReactNode;
}

export interface DashboardTabsProps<T extends string | number> {
  tabs: TabItem<T>[];
  activeTabId: T;
  onChange: (id: T) => void;
  className?: string;
  tabClassName?: string;
  size?: "md" | "sm";
}

export function DashboardTabs<T extends string | number>({
  tabs,
  activeTabId,
  onChange,
  className = "",
  tabClassName = "",
  size = "md"
}: DashboardTabsProps<T>) {
  const containerHeight = size === "sm" ? "h-9" : "h-[40px] md:h-[44px]";
  const paddingX = size === "sm" ? "px-[16px]" : "px-3 md:px-[24px]";
  const gap = size === "sm" ? "gap-2" : "gap-2 md:gap-[16px]";
  const textSize = size === "sm" ? "text-[12px] md:text-[14px]" : "text-[14px]";

  return (
    <div
      className={`bg-[#e8eff4] flex items-center gap-[4px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] p-[2px] w-full sm:w-fit ${containerHeight} ${className}`}
      role="tablist"
    >
      {tabs.map((tab) => {
        const active = activeTabId === tab.id;
        return (
          <button
            key={String(tab.id)}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.id)}
            className={`h-full flex-1 sm:flex-none ${paddingX} rounded-[6px] flex items-center justify-center ${gap} cursor-pointer transition-all ${
              active
                ? "bg-white border border-[#e8eff4] shadow-sm relative z-10"
                : "hover:bg-white/50 border border-transparent"
            } ${tabClassName}`}
          >
            {tab.icon && (
              <div className="w-[16px] h-[16px] relative shrink-0">
                {tab.icon(active)}
              </div>
            )}
            <span
              className={`font-sans font-semibold leading-[20px] whitespace-nowrap ${textSize} ${
                active ? "text-[#232f50]" : "text-[#5c6e93]"
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
