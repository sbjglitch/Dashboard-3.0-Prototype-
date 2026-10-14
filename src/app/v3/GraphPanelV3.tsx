import React from "react";

export interface GraphPanelTab {
  id: string | number;
  label: string;
}

export interface GraphPanelTabSection {
  title?: string;
  tabs: (string | GraphPanelTab)[];
}

export interface GraphPanelV3Props {
  title?: string;
  icon?: React.ReactNode;
  selectLabel?: string;
  tabs?: (string | GraphPanelTab)[];
  sections?: GraphPanelTabSection[];
  activeTab?: string | number;
  onTabChange?: (tab: any) => void;
  sidebarWidth?: string;
  compactTabs?: boolean;
  sidebarExtra?: React.ReactNode;
  customSidebar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function GraphPanelWaveIcon() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path
          d="M28 16.8678C28 19.9915 24.5796 21.9098 21.9142 20.2809L21.1235 19.7977C19.8234 19.0032 18.1848 19.0163 16.8975 19.8316L10.1402 24.1112C7.47694 25.7979 4 23.8844 4 20.7319V19.5V8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8L28 16.8678Z"
          fill="#83DAF6"
        />
        <path
          d="M4 19.5L10.5382 15.1412C12.001 14.166 13.9292 14.2603 15.2899 15.3736L16.358 16.2475C17.6468 17.3019 19.454 17.4477 20.8951 16.6134L28 12.5V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24L4 19.5Z"
          fill="#00B2EB"
        />
      </svg>
    </div>
  );
}

export function GraphPanelV3({
  title = "Graphs",
  icon,
  selectLabel = "Select Graph",
  tabs,
  sections,
  activeTab,
  onTabChange,
  sidebarWidth = "lg:w-[270px]",
  compactTabs = false,
  sidebarExtra,
  customSidebar,
  children,
  className = "",
  contentClassName = "",
}: GraphPanelV3Props) {
  // Normalize sections
  const resolvedSections: GraphPanelTabSection[] = React.useMemo(() => {
    if (sections && sections.length > 0) return sections;
    if (tabs && tabs.length > 0) {
      return [{ title: selectLabel, tabs }];
    }
    return [];
  }, [sections, tabs, selectLabel]);

  const renderTabItem = (item: string | GraphPanelTab, index: number) => {
    const isObject = typeof item === "object" && item !== null;
    const id = isObject ? item.id : item;
    const label = isObject ? item.label : item;
    const isActive =
      activeTab !== undefined &&
      (activeTab === id || (!isObject && typeof activeTab === "number" && activeTab === index));

    const handleClick = () => {
      if (!onTabChange) return;
      if (isObject) {
        onTabChange(item.id);
      } else if (typeof activeTab === "number") {
        onTabChange(index);
      } else {
        onTabChange(item);
      }
    };

    return (
      <button
        type="button"
        key={String(id)}
        onClick={handleClick}
        className={`content-stretch flex items-start ${
          compactTabs ? "p-[12px]" : "p-[16px]"
        } relative w-full text-left rounded-[8px] transition-colors cursor-pointer ${
          isActive
            ? "bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4]"
            : "hover:bg-[#e8eff4]/50 border border-transparent"
        }`}
      >
        <span
          className={`flex-[1_0_0] font-sans leading-[20px] min-h-px min-w-px relative ${
            compactTabs ? "text-[13px]" : "text-[14px]"
          } ${isActive ? "font-semibold text-[#232f50]" : "font-medium text-[#232f50]"}`}
        >
          {label}
        </span>
      </button>
    );
  };

  return (
    <div
      className={`flex flex-col lg:flex-row gap-[16px] bg-[#f6f9fb] rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:min-h-[606px] w-full shrink-0 p-[16px] ${className}`}
    >
      {/* Left sidebar */}
      <div className={`w-full ${sidebarWidth} shrink-0 flex flex-col gap-[16px]`}>
        {/* Header */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          {icon ?? <GraphPanelWaveIcon />}
          <span className="font-sans font-semibold text-[16px] text-[#232f50]">{title}</span>
        </div>

        {customSidebar ? (
          customSidebar
        ) : (
          <div className="flex flex-col gap-[8px] w-full overflow-y-auto">
            {resolvedSections.map((section, sIdx) => (
              <React.Fragment key={section.title || sIdx}>
                {section.title && (
                  <div
                    className={`flex flex-col font-sans font-medium justify-center leading-[0] opacity-70 relative shrink-0 text-[#5c6e93] text-[14px] whitespace-nowrap px-[4px] py-[8px] ${
                      sIdx > 0 ? "mt-[8px]" : ""
                    }`}
                  >
                    <p className="leading-[20px]">{section.title}</p>
                  </div>
                )}
                {section.tabs.map((tabItem, idx) => renderTabItem(tabItem, idx))}
              </React.Fragment>
            ))}
          </div>
        )}

        {sidebarExtra}
      </div>

      {/* Right content panel */}
      <div
        className={`bg-white flex-[1_0_0] relative rounded-[16px] border border-[#e8eff4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col p-4 md:p-[32px] min-h-[400px] overflow-auto ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
