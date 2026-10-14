import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, Download, Loader2 } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { FilterDropdown } from "./components/FilterDropdown";
import { GrievanceTable } from "./components/reports/GrievanceTable";
import {
  GrievanceAttributes,
  DEFAULT_GRIEVANCE_ATTRIBUTES,
  type GrievanceAttributeState,
} from "./components/reports/GrievanceAttributes";
import { CUSTOM_RANGE, GRIEVANCE_ROWS, type GrievanceRow } from "./data/grievanceReportData";

const DISTRICT_OPTIONS = [
  "Kerala", "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
  "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad",
  "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod",
];
const LOCAL_BODY_TYPE_OPTIONS = ["All", "Corporation", "Municipality", "Grama Panchayat"];
const ZONAL_OFFICE_OPTIONS = ["Select", "Zone 1", "Zone 2", "Zone 3", "Zone 4"];
const WARD_OPTIONS = ["Select", "Ezhamkulam", "Pandalam", "Kadampanad", "Kodumon", "Pallickal"];

/** All periods compare on the row's ISO date, so presets and the custom range
 *  behave the same way rather than only the custom one filtering. */
function matchesPeriod(iso: string, period: string, from: string, to: string): boolean {
  if (period === "All") return true;

  if (period === CUSTOM_RANGE) {
    if (from && iso < from) return false;
    if (to && iso > to) return false;
    return true;
  }

  const now = new Date();
  const year = now.getFullYear();
  const rowYear = Number(iso.slice(0, 4));
  const rowMonth = Number(iso.slice(5, 7));

  switch (period) {
    case "This month":
      return rowYear === year && rowMonth === now.getMonth() + 1;
    case "This quarter":
      return rowYear === year && Math.ceil(rowMonth / 3) === Math.floor(now.getMonth() / 3) + 1;
    case "This year":
      return rowYear === year;
    case "Last year":
      return rowYear === year - 1;
    default:
      return true;
  }
}

function toCsv(rows: GrievanceRow[]): string {
  const head = ["Date", "Year", "District", "Local Body", "Local Body Type", "Ward", "Zone", "Category", "Type", "Status"];
  const esc = (v: string) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [r.day, r.year, r.district, r.localBody, r.localBodyType, r.ward, r.zone, r.category, r.type, r.status]
      .map(esc)
      .join(","),
  );
  return [head.map(esc).join(","), ...lines].join("\n");
}

export default function GrievanceReportsPage() {
  const navigate = useNavigate();

  const [district, setDistrict] = useState("Kerala");
  const [localBodyType, setLocalBodyType] = useState("All");
  const [zonalOffice, setZonalOffice] = useState("Select");
  const [ward, setWard] = useState("Select");
  const [attributes, setAttributes] = useState<GrievanceAttributeState>(DEFAULT_GRIEVANCE_ATTRIBUTES);

  const targetRows = useMemo(
    () =>
      GRIEVANCE_ROWS.filter(
        (r) =>
          (district === "Kerala" || r.district === district) &&
          (localBodyType === "All" || r.localBodyType === localBodyType) &&
          (ward === "Select" || r.ward === ward) &&
          matchesPeriod(r.iso, attributes.timePeriod, attributes.from, attributes.to) &&
          (attributes.category === "All" || r.category === attributes.category) &&
          (attributes.types.length === 0 || attributes.types.includes(r.type)) &&
          (attributes.status === "All" || r.status === attributes.status),
      ),
    [district, localBodyType, ward, attributes],
  );

  // Same simulated fetch as the Building Permission report, so both surfaces behave alike.
  const [rows, setRows] = useState(targetRows);
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      setRows(targetRows);
      setIsLoading(false);
    }, 550);
    return () => clearTimeout(timer);
  }, [targetRows]);

  const handleExport = () => {
    const blob = new Blob([toCsv(rows)], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "public-grievance-report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f8]">
      <SiteHeader />

      <nav
        aria-label="Breadcrumb"
        className="bg-white h-[48px] flex items-center px-4 md:px-[32px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
      >
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go back to dashboard"
          className="size-[36px] shrink-0 flex items-center justify-center rounded-[8px] hover:bg-[#f6f9fb] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
        >
          <ArrowLeft className="w-4 h-4 text-[#232f50]" aria-hidden="true" />
        </button>
        <ol className="flex items-center min-w-0 overflow-x-auto">
          <li className="flex items-center h-[36px] px-[8px] shrink-0">
            <Link
              to="/"
              className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] hover:text-[#09327b] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center gap-[8px] h-[36px] pr-[8px] shrink-0">
            <ChevronRight className="w-4 h-4 text-[#9AA6AD]" aria-hidden="true" />
            <Link
              to="/"
              className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] hover:text-[#09327b] transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
            >
              Public Grievance
            </Link>
          </li>
          <li className="flex items-center gap-[8px] h-[36px] pr-[8px] shrink-0">
            <ChevronRight className="w-4 h-4 text-[#9AA6AD]" aria-hidden="true" />
            <span
              aria-current="page"
              className="font-sans font-semibold text-[14px] text-[#0c3080] leading-[20px] whitespace-nowrap"
            >
              Generate Report
            </span>
          </li>
        </ol>
      </nav>

      <main className="p-4 md:p-[24px] flex flex-col lg:flex-row gap-[16px] items-start">
        <GrievanceAttributes value={attributes} onChange={setAttributes} />

        <div className="flex-1 min-w-0 w-full flex flex-col gap-[16px]">
          <section
            aria-label="Report scope"
            className="bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] px-4 md:px-[20px] py-[20px] md:py-[16px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-[20px] md:gap-[24px] items-end">
              <FilterDropdown label="District" value={district} options={DISTRICT_OPTIONS} onSelect={setDistrict} />
              <FilterDropdown
                label="Local Body Type"
                value={localBodyType}
                options={LOCAL_BODY_TYPE_OPTIONS}
                onSelect={setLocalBodyType}
              />
              <FilterDropdown label="Local body Name" value="Public Grievance" options={[]} onSelect={() => {}} disabled />
              <FilterDropdown
                label="Zonal Office"
                value={zonalOffice}
                options={ZONAL_OFFICE_OPTIONS}
                onSelect={setZonalOffice}
                muted={zonalOffice === "Select"}
              />
              <FilterDropdown
                label="Ward"
                value={ward}
                options={WARD_OPTIONS}
                onSelect={setWard}
                muted={ward === "Select"}
              />
            </div>
          </section>

          <section
            aria-labelledby="pgr-results-title"
            className="border border-[#e8eff4] rounded-[8px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(10,13,18,0.1),0px_2px_2px_0px_rgba(10,13,18,0.06)]"
          >
            <div className="bg-white flex items-center justify-between gap-3 pl-[16px] pr-[12px] py-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
              <div className="flex items-center gap-[8px] min-w-0">
                <h1
                  id="pgr-results-title"
                  className="font-sans font-semibold text-[14px] text-[#232f50] leading-[20px]"
                >
                  Results
                </h1>
                <span aria-hidden="true" className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">-</span>
                <span
                  aria-live="polite"
                  className="flex items-center gap-[6px] font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-[14px] h-[14px] text-[#09327b] animate-spin" aria-hidden="true" />
                      Loading results…
                    </>
                  ) : (
                    `${rows.length.toLocaleString("en-IN")} to Show`
                  )}
                </span>
              </div>
              <button
                type="button"
                onClick={handleExport}
                disabled={isLoading}
                className="flex items-center gap-[8px] shrink-0 bg-white border border-[#e8eff4] rounded-[8px] px-[14px] py-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-semibold text-[14px] text-[#232f50] leading-[20px] hover:bg-[#f6f9fb] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4 text-[#232f50]" aria-hidden="true" />
                Export
              </button>
            </div>

            <GrievanceTable rows={rows} loading={isLoading} />
          </section>
        </div>
      </main>
    </div>
  );
}
