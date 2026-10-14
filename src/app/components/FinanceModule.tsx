import React, { useMemo, useState } from "react";
import { DashboardPieChart } from "./charts/DashboardPieChart";
import { KpiTabsV3 } from "../v3/KpiTabsV3";
import svgPaths from "../../imports/svg-4i5smnjigf";
import {
  CHART_PALETTE,
  TEXT_MUTED,
} from "../constants/chartStyles";

const SUCCESS_COLOR = CHART_PALETTE[1]; // accent sky
const FAILURE_COLOR = CHART_PALETTE[5]; // pink/danger

const FINANCE_METRICS = {
  ePayment: { totalAmount: "51,251", success: 21251, failure: 15000 },
  ePos: { totalAmount: "32,840", success: 18420, failure: 8200 },
} as const;

function formatCount(n: number) {
  return n.toLocaleString("en-IN");
}

import { KpiCardV3 } from "../v3/KpiCardV3";

interface FinanceCardProps {
  label: string;
  value: string;
  rate?: string;
  rateLabel?: string;
  color: string;
  icon: React.ReactNode;
}

function FinanceCard({ label, value, rate, rateLabel, color, icon }: FinanceCardProps) {
  return (
    <KpiCardV3
      label={label}
      value={value}
      prefix={label === "Total Amount" ? "₹" : undefined}
      badge={rate ? `${rateLabel ? `${rateLabel}: ` : ""}${rate}` : undefined}
      color={color}
      icon={icon}
      className="flex-1 min-w-0 sm:min-w-[260px]"
    />
  );
}

export function FinanceModule({
  onViewMore,
  hideTabs,
  selectedLocalBody,
}: {
  onViewMore: () => void;
  hideTabs?: boolean;
  selectedLocalBody?: string;
}) {
  const [activeSubTab, setActiveSubTab] = useState<"ePayment" | "ePos">("ePayment");
  const { totalAmount, success, failure } = FINANCE_METRICS[activeSubTab];
  const total = success + failure;

  const pieData = useMemo(
    () => [
      { name: "Success", value: success, fill: SUCCESS_COLOR },
      { name: "Failure", value: failure, fill: FAILURE_COLOR },
    ],
    [success, failure]
  );

  const successPct = total > 0 ? Math.round((success / total) * 100) : 0;
  const failurePct = total > 0 ? Math.round((failure / total) * 100) : 0;

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center justify-between w-full">
        {!hideTabs && (
          <KpiTabsV3
            tabs={[
              {
                id: "ePayment",
                label: "E-Payment",
                icon: (active) => (
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.p181de000} fillRule="evenodd" stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M15.8399 14.1726V10.0042" stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.pe79fe00} stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path clipRule="evenodd" d={svgPaths.pa3e1680} fillRule="evenodd" stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M17.5073 4.1684H10.0042" stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                )
              },
              {
                id: "ePos",
                label: "E-POS",
                icon: (active) => (
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p8703000} stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M5.25 15.4167H8.91667" stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path clipRule="evenodd" d={svgPaths.p16eab600} fillRule="evenodd" stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M7.5 8.33333H17.5" stroke={active ? "#00B2EB" : "#A2BFD8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                )
              }
            ]}
            activeTabId={activeSubTab}
            onChange={(id) => setActiveSubTab(id as "ePayment" | "ePos")}
          />
        )}
        {hideTabs && <div />}

        <button
          type="button"
          onClick={onViewMore}
          className="bg-white border border-[#e8eff4] flex items-center gap-[10px] pl-[16px] pr-[8px] py-[10px] rounded-[8px] shadow-[0px_1px_0px_0px_#e8eff4,0px_4px_3.8px_0px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors"
        >
          <span className="font-sans font-semibold text-[14px] text-[#323232]">View More Details</span>
          <div className="size-[16px]">
            <svg fill="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p1f857780} fillRule="evenodd" stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M10 6L6 10" stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M7 6H10V9" stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-[24px]">
        <FinanceCard
          label="Total Amount"
          value={totalAmount}
          color="bg-[#009fd2]"
          icon={
            <div className="size-[16px]">
              <svg fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p24203be0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M9.33333 3.33333V8.50667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p2e352180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p313cbb80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p28323680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p1eade080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
        />

        <FinanceCard
          label="Success Count"
          value={formatCount(success)}
          rate={`${successPct}%`}
          rateLabel="Success Rate"
          color="bg-[#00a78e]"
          icon={
            <div className="size-[16px]">
              <svg fill="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p31259600} fill="white" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p1018c900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p25493340} stroke="#00A78E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
        />

        <FinanceCard
          label="Failure Count"
          value={formatCount(failure)}
          rate={`${failurePct}%`}
          rateLabel="Failure Rate"
          color="bg-[#df3a7a]"
          icon={
            <div className="size-[16px]">
              <svg fill="none" viewBox="0 0 16 16">
                <rect fill="white" height="9.33722" rx="3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="9.33722" x="4.66832" y="4.66863" />
                <path d={svgPaths.pafc5700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.pff27900} stroke="#DF3A7A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p29a63700} stroke="#DF3A7A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          }
        />
      </div>

      <div className="bg-white rounded-[12px] border border-[#e8eff4] p-6 md:p-8 w-full">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <h2 className="font-sans font-semibold text-[18px] md:text-[20px] text-[#232f50] capitalize">Success vs failure</h2>
            {selectedLocalBody ? (
              <div className="bg-[#f2f6ff] border border-[#c0c7cd] px-3 py-2 rounded-[4px]">
                <span className="font-sans font-semibold text-[14px] md:text-[16px] text-[#323232]">{selectedLocalBody}</span>
              </div>
            ) : null}
          </div>
          <p className="font-sans font-semibold text-[14px] text-[#5c6e93] capitalize">
            Graphical representation of the service wise percentage.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 w-full min-h-[280px] md:min-h-[320px]">
          <div className="shrink-0 flex items-center justify-center">
            <DashboardPieChart
              data={pieData.map((d) => ({ label: d.name, value: d.value, color: d.fill }))}
              height={280}
              innerRadius={72}
              showLegend={false}
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="w-[14px] h-[14px] rounded-[4px] shrink-0" style={{ backgroundColor: SUCCESS_COLOR }} />
              <p className="font-sans font-medium text-[14px] text-[#232f50]">
                Success count {formatCount(success)}
                <span style={{ color: TEXT_MUTED }}> ({successPct}%)</span>
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="w-[14px] h-[14px] rounded-[4px] shrink-0" style={{ backgroundColor: FAILURE_COLOR }} />
              <p className="font-sans font-medium text-[14px] text-[#232f50]">
                Failure count {formatCount(failure)}
                <span style={{ color: TEXT_MUTED }}> ({failurePct}%)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
