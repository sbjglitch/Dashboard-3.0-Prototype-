import { STATUS_STYLES, type GrievanceRow, type GrievanceStatus } from "../../data/grievanceReportData";

const headCell =
  "bg-[#0c3080] px-[16px] py-[16px] font-sans font-semibold text-[14px] text-white leading-[20px] whitespace-nowrap align-middle";
const bodyCell = "px-[16px] py-[16px] h-[80px] border-b border-[#e8eff4] align-middle bg-white";
const primary = "font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]";
const secondary = "font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]";

const COLUMNS: { label: string; width: string; align: "left" | "right"; stacked?: boolean }[] = [
  { label: "Date", width: "min-w-[110px]", align: "left", stacked: true },
  { label: "District", width: "min-w-[190px]", align: "left" },
  { label: "Local Body", width: "min-w-[190px]", align: "right", stacked: true },
  { label: "Ward & Zone", width: "min-w-[150px]", align: "right", stacked: true },
  { label: "Category", width: "min-w-[130px]", align: "right" },
  { label: "Type", width: "min-w-[190px]", align: "right" },
  { label: "Status", width: "min-w-[215px]", align: "right" },
];

export function StatusBadge({ status }: { status: GrievanceStatus }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center px-[8px] py-[6px] rounded-[8px] border font-sans font-semibold text-[14px] leading-[20px] whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
      style={{ backgroundColor: s.bg, borderColor: s.border, color: s.text }}
    >
      {status}
    </span>
  );
}

function Stacked({ top, bottom, align }: { top: string; bottom: string; align: "left" | "right" }) {
  return (
    <div className={`flex flex-col gap-[5px] ${align === "right" ? "items-end" : "items-start"}`}>
      <span className={primary}>{top}</span>
      <span className={secondary}>{bottom}</span>
    </div>
  );
}

export function GrievanceTableSkeleton() {
  return (
    <div className="w-full overflow-x-auto border border-[#e8eff4] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
      <table className="w-full border-collapse min-w-[1180px]">
        <caption className="sr-only">Loading grievance report results.</caption>
        <thead>
          <tr>
            {COLUMNS.map((c) => (
              <th key={c.label} scope="col" className={`${headCell} ${c.align === "left" ? "text-left" : "text-right"} ${c.width}`}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }, (_, r) => (
            <tr key={r}>
              {COLUMNS.map((c) => (
                <td key={c.label} className={`${bodyCell} ${c.align === "right" ? "text-right" : ""}`}>
                  <div className={`flex flex-col gap-[8px] ${c.align === "right" ? "items-end" : "items-start"}`}>
                    <div className="h-[10px] rounded-full bg-[#e8eff4] animate-pulse" style={{ width: c.stacked ? "72%" : "58%" }} />
                    {c.stacked && <div className="h-[10px] rounded-full bg-[#e8eff4] animate-pulse" style={{ width: "44%" }} />}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function GrievanceTable({ rows, loading }: { rows: GrievanceRow[]; loading?: boolean }) {
  if (loading) return <GrievanceTableSkeleton />;

  if (rows.length === 0) {
    return (
      <div className="bg-white border border-[#e8eff4] px-[16px] py-[48px] text-center">
        <p className="font-sans font-semibold text-[16px] text-[#232f50] leading-[24px]">No matching records</p>
        <p className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] mt-[4px]">
          Change a report attribute or reset the filters to see results.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto border border-[#e8eff4] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
      <table className="w-full border-collapse min-w-[1180px]">
        <caption className="sr-only">
          Grievance report results, {rows.length} rows, 7 columns.
        </caption>
        <thead>
          <tr>
            {COLUMNS.map((c) => (
              <th key={c.label} scope="col" className={`${headCell} ${c.align === "left" ? "text-left" : "text-right"} ${c.width}`}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-[#f6f9fb] transition-colors">
              <th scope="row" className={`${bodyCell} text-left font-normal`}>
                <Stacked top={r.day} bottom={r.year} align="left" />
              </th>
              <td className={`${bodyCell} text-left ${primary}`}>{r.district}</td>
              <td className={`${bodyCell} text-right`}>
                <Stacked top={r.localBody} bottom={r.localBodyType} align="right" />
              </td>
              <td className={`${bodyCell} text-right`}>
                <Stacked top={r.ward} bottom={r.zone} align="right" />
              </td>
              <td className={`${bodyCell} text-right ${primary}`}>{r.category}</td>
              <td className={`${bodyCell} text-right ${primary}`}>{r.type}</td>
              <td className={`${bodyCell} text-right`}>
                <StatusBadge status={r.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
