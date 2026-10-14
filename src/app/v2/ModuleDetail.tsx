import { Link } from "react-router";
import { AlertTriangle, CircleCheck, FileText, Files, Loader } from "lucide-react";
import {
  LOCAL_BODY_BREACH,
  formatCount,
  formatPercent,
  type ModuleHealth,
} from "./moduleHealth";

const STATES = [
  { key: "total", label: "Total received", icon: Files, tone: "#157a4f" },
  { key: "disposed", label: "Disposed", icon: CircleCheck, tone: "#0a7ea4" },
  { key: "underProcess", label: "Under process", icon: Loader, tone: "#54429e" },
  { key: "delayed", label: "Delayed", icon: AlertTriangle, tone: "#c02863" },
] as const;

function Figure({ m, state }: { m: ModuleHealth; state: (typeof STATES)[number] }) {
  const value = m[state.key];
  const share = state.key === "total" ? null : value / m.total;
  const Icon = state.icon;
  const danger = state.key === "delayed";

  return (
    <div
      className={`flex flex-col gap-[6px] p-[16px] rounded-[10px] bg-white border ${
        danger ? "border-[#f0c9d8]" : "border-[#d7e2f2]"
      }`}
    >
      <span className="flex items-center gap-[8px]">
        <Icon className="w-[17px] h-[17px] shrink-0" style={{ color: state.tone }} aria-hidden="true" />
        <span
          className={`font-sans font-semibold text-[13px] leading-[18px] ${
            danger ? "text-[#9a2150]" : "text-[#475069]"
          }`}
        >
          {state.label}
        </span>
      </span>
      <span className="font-sans font-semibold text-[26px] text-[#232f50] leading-[1] tabular-nums">
        {formatCount(value)}
      </span>
      {share !== null && (
        <span className="font-sans font-medium text-[13px] text-[#475069] leading-[18px] tabular-nums">
          {formatPercent(share)} of total
        </span>
      )}
    </div>
  );
}

export function ModuleDetail({ module: m, panelId }: { module: ModuleHealth; panelId: string }) {
  const rows = LOCAL_BODY_BREACH.default;
  const max = Math.max(...rows.map((r) => r.total));

  return (
    <section
      id={panelId}
      aria-label={`${m.name} detail`}
      className="rounded-[12px] border border-[#09327b]/25 bg-[#f6f9fc] p-[18px] flex flex-col gap-[18px]"
    >
      <div className="flex flex-wrap items-center justify-between gap-[12px]">
        <h3 className="font-sans font-semibold text-[18px] text-[#232f50] leading-[24px]">
          {m.name}
        </h3>
        {m.id === "building-permissions" && (
          <Link
            to="/reports/building-permission"
            className="inline-flex items-center gap-[8px] h-[40px] px-[16px] rounded-[8px] bg-[#09327b] font-sans font-semibold text-[14px] text-white leading-[20px] hover:bg-[#0c3080] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            Reports
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[12px]">
        {STATES.map((s) => (
          <Figure key={s.key} m={m} state={s} />
        ))}
      </div>

      <div className="rounded-[10px] bg-white border border-[#d7e2f2] p-[18px]">
        <h4 className="font-sans font-semibold text-[15px] text-[#232f50] leading-[20px]">
          Files exceeding the SLI period
        </h4>
        <p className="font-sans font-medium text-[13px] text-[#475069] leading-[18px] mt-[4px]">
          Lowest-performing local bodies, ranked by overdue files
        </p>

        <div className="flex items-center gap-[18px] mt-[14px] font-sans text-[13px] text-[#475069]">
          <span className="flex items-center gap-[6px]">
            <span className="w-[12px] h-[12px] rounded-[3px] bg-[#1a8f5a]" aria-hidden="true" />
            Total files
          </span>
          <span className="flex items-center gap-[6px]">
            <span className="w-[12px] h-[12px] rounded-[3px] bg-[#0a7ea4]" aria-hidden="true" />
            Disposed files
          </span>
        </div>

        <ul className="flex flex-col gap-[14px] mt-[16px]">
          {rows.map((r) => (
            <li key={r.name}>
              <div className="flex items-baseline justify-between gap-[8px]">
                <span className="font-sans font-semibold text-[13px] text-[#232f50] leading-[18px]">
                  {r.name}
                </span>
                <span className="font-sans font-medium text-[12px] text-[#475069] leading-[16px]">
                  {r.type}
                </span>
              </div>
              <div className="flex items-center gap-[8px] mt-[5px]">
                <div
                  className="h-[14px] rounded-r-[4px] bg-[#1a8f5a] min-w-[2px]"
                  style={{ width: `${(r.total / max) * 100}%` }}
                />
                <span className="font-sans font-medium text-[13px] text-[#475069] tabular-nums">
                  {formatCount(r.total)}
                </span>
              </div>
              <div className="flex items-center gap-[8px] mt-[4px]">
                <div
                  className="h-[14px] rounded-r-[4px] bg-[#0a7ea4] min-w-[2px]"
                  style={{ width: `${(r.disposed / max) * 100}%` }}
                />
                <span className="font-sans font-medium text-[13px] text-[#475069] tabular-nums">
                  {formatCount(r.disposed)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
