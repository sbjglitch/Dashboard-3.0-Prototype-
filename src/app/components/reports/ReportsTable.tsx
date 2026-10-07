import type { BuildingPermitRow } from "../../data/reportData";

const headCell =
  "bg-[#0c3080] px-[20px] py-[16px] font-sans font-semibold text-[14px] text-white leading-[20px] whitespace-nowrap align-middle";
const bodyCell =
  "px-[20px] py-[20px] h-[92px] border-b border-[#e8eff4] align-middle bg-white";
const primary = "font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]";
const secondary = "font-sans font-semibold text-[12px] text-[#5c6e93] leading-[16px]";

function Stacked({ top, bottom, align }: { top: string; bottom: string; align: "left" | "right" }) {
  return (
    <div className={`flex flex-col gap-[5px] ${align === "right" ? "items-end" : "items-start"}`}>
      <span className={primary}>{top}</span>
      <span className={`${secondary} ${align === "right" ? "text-right" : ""}`}>{bottom}</span>
    </div>
  );
}

const COLUMNS: { label: string; width: string; align: "left" | "right"; stacked?: boolean }[] = [
  { label: "Local Body", width: "min-w-[200px]", align: "left", stacked: true },
  { label: "File No.", width: "min-w-[110px]", align: "right" },
  { label: "Application No.", width: "min-w-[140px]", align: "right" },
  { label: "Applicant and Address", width: "min-w-[230px]", align: "right", stacked: true },
  { label: "Survey No.", width: "min-w-[110px]", align: "right" },
  { label: "Village & Ward", width: "min-w-[150px]", align: "right", stacked: true },
  { label: "Occupancy", width: "min-w-[140px]", align: "right" },
  { label: "No. of Floors", width: "min-w-[120px]", align: "right" },
  { label: "Built-up Area", width: "min-w-[130px]", align: "right" },
  { label: "Floor Area", width: "min-w-[120px]", align: "right" },
  { label: "FSI", width: "min-w-[90px]", align: "right" },
  { label: "Permit No. and Date", width: "min-w-[170px]", align: "right", stacked: true },
];

const SKELETON_ROWS = 8;

function SkeletonBar({ w, align }: { w: string; align: "left" | "right" }) {
  return (
    <div
      className={`h-[10px] rounded-full bg-[#e8eff4] animate-pulse ${align === "right" ? "ml-auto" : ""}`}
      style={{ width: w }}
    />
  );
}

export function ReportsTableSkeleton() {
  return (
    <div className="w-full overflow-x-auto border border-[#e8eff4] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
      <table className="w-full border-collapse min-w-[1780px]">
        <caption className="sr-only">Loading building permission report results.</caption>
        <thead>
          <tr>
            {COLUMNS.map((c) => (
              <th
                key={c.label}
                scope="col"
                className={`${headCell} ${c.align === "left" ? "text-left" : "text-right"} ${c.width}`}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: SKELETON_ROWS }, (_, r) => (
            <tr key={r}>
              {COLUMNS.map((c) => (
                <td key={c.label} className={`${bodyCell} ${c.align === "right" ? "text-right" : ""}`}>
                  <div className={`flex flex-col gap-[8px] ${c.align === "right" ? "items-end" : "items-start"}`}>
                    <SkeletonBar w={c.stacked ? "72%" : "54%"} align={c.align} />
                    {c.stacked && <SkeletonBar w="48%" align={c.align} />}
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

export function ReportsTable({ rows, loading }: { rows: BuildingPermitRow[]; loading?: boolean }) {
  if (loading) return <ReportsTableSkeleton />;

  if (rows.length === 0) {
    return (
      <div className="bg-white border border-[#e8eff4] px-[16px] py-[48px] text-center">
        <p className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">No matching records</p>
        <p className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] mt-[4px]">
          Widen a range or reset the filters to see results.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto border border-[#e8eff4] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
      <table className="w-full border-collapse min-w-[1780px]">
        <caption className="sr-only">
          Building permission report results, {rows.length} rows, 12 columns.
        </caption>
        <thead>
          <tr>
            <th scope="col" className={`${headCell} text-left min-w-[200px]`}>Local Body</th>
            <th scope="col" className={`${headCell} text-right min-w-[110px]`}>File No.</th>
            <th scope="col" className={`${headCell} text-right min-w-[140px]`}>Application No.</th>
            <th scope="col" className={`${headCell} text-right min-w-[230px]`}>Applicant and Address</th>
            <th scope="col" className={`${headCell} text-right min-w-[110px]`}>Survey No.</th>
            <th scope="col" className={`${headCell} text-right min-w-[150px]`}>Village &amp; Ward</th>
            <th scope="col" className={`${headCell} text-right min-w-[140px]`}>Occupancy</th>
            <th scope="col" className={`${headCell} text-right min-w-[120px]`}>No. of Floors</th>
            <th scope="col" className={`${headCell} text-right min-w-[130px]`}>Built-up Area</th>
            <th scope="col" className={`${headCell} text-right min-w-[120px]`}>Floor Area</th>
            <th scope="col" className={`${headCell} text-right min-w-[90px]`}>FSI</th>
            <th scope="col" className={`${headCell} text-right min-w-[170px]`}>Permit No. and Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-[#f6f9fb] transition-colors">
              <th scope="row" className={`${bodyCell} text-left font-normal`}>
                <Stacked top={r.localBody} bottom={r.localBodyType} align="left" />
              </th>
              <td className={`${bodyCell} text-right ${primary}`}>{r.fileNo}</td>
              <td className={`${bodyCell} text-right ${primary}`}>{r.applicationNo}</td>
              <td className={`${bodyCell} text-right`}>
                <Stacked top={r.applicantName} bottom={r.applicantAddress} align="right" />
              </td>
              <td className={`${bodyCell} text-right ${primary}`}>{r.surveyNo}</td>
              <td className={`${bodyCell} text-right`}>
                <Stacked top={r.village} bottom={r.ward} align="right" />
              </td>
              <td className={`${bodyCell} text-right ${primary}`}>{r.occupancy}</td>
              <td className={`${bodyCell} text-right ${primary}`}>
                {String(r.noOfFloors).padStart(2, "0")}
              </td>
              <td className={`${bodyCell} text-right ${primary}`}>
                {r.builtUpArea.toLocaleString("en-IN")}
              </td>
              <td className={`${bodyCell} text-right ${primary}`}>
                {r.floorArea.toLocaleString("en-IN")}
              </td>
              <td className={`${bodyCell} text-right ${primary}`}>{r.fsi.toFixed(1)}</td>
              <td className={`${bodyCell} text-right`}>
                <Stacked top={r.permitNo} bottom={r.permitDate} align="right" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
