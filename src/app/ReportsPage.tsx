import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, Download, Loader2 } from "lucide-react";
import { SiteHeader } from "./components/SiteHeader";
import { FilterDropdown } from "./components/FilterDropdown";
import { ReportsTable } from "./components/reports/ReportsTable";
import {
  ReportFilters,
  DEFAULT_REPORT_FILTERS,
  type ReportFilterState,
  type TriState,
} from "./components/reports/ReportFilters";
import { ActiveFilterChips, buildChips } from "./components/reports/ActiveFilterChips";
import { BUILDING_PERMIT_ROWS, type BuildingPermitRow } from "./data/reportData";

const LOCAL_BODY_OPTIONS = [
  "Kerala", "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
  "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad",
];
const TIME_PERIOD_OPTIONS = ["Upto today", "This month", "This quarter", "This year", "Last year"];
const SUB_MODULE_OPTIONS = ["Select", "New Permit", "Occupancy Certificate", "Renewal", "Regularisation"];
const SERVICE_OPTIONS = ["Select", "Building Permit", "Occupancy Certificate", "Demolition Permit"];

const inRange = (v: number, [min, max]: [number, number]) => v >= min && v <= max;
const matchesTri = (flag: boolean, state: TriState) =>
  state === "any" || (state === "yes" ? flag : !flag);

function toCsv(rows: BuildingPermitRow[]): string {
  const head = [
    "Local Body", "Local Body Type", "File No.", "Application No.", "Applicant", "Address",
    "Survey No.", "Village", "Ward", "Occupancy", "No. of Floors", "Built-up Area",
    "Floor Area", "FSI", "Permit No.", "Permit Date",
  ];
  const esc = (v: string | number) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = rows.map((r) =>
    [
      r.localBody, r.localBodyType, r.fileNo, r.applicationNo, r.applicantName, r.applicantAddress,
      r.surveyNo, r.village, r.ward, r.occupancy, r.noOfFloors, r.builtUpArea,
      r.floorArea, r.fsi, r.permitNo, r.permitDate,
    ].map(esc).join(","),
  );
  return [head.map(esc).join(","), ...lines].join("\n");
}

export default function ReportsPage() {
  const navigate = useNavigate();

  const [localBody, setLocalBody] = useState("Kerala");
  const [timePeriod, setTimePeriod] = useState("Upto today");
  const [subModule, setSubModule] = useState("Select");
  const [service, setService] = useState("Select");

  // Draft is what the sidebar edits; applied is what the table reflects.
  const [draftFilters, setDraftFilters] = useState<ReportFilterState>(DEFAULT_REPORT_FILTERS);
  const [filters, setFilters] = useState<ReportFilterState>(DEFAULT_REPORT_FILTERS);
  const [filtersOpen, setFiltersOpen] = useState(true);

  const isDirty = JSON.stringify(draftFilters) !== JSON.stringify(filters);

  // Chips describe applied state, so removing one commits immediately and
  // rewinds the draft too, keeping the sidebar in sync.
  const commitFilters = (next: ReportFilterState) => {
    setDraftFilters(next);
    setFilters(next);
  };

  const resetAll = () => {
    commitFilters(DEFAULT_REPORT_FILTERS);
    setLocalBody("Kerala");
  };

  const chips = buildChips(filters, localBody, commitFilters, setLocalBody);

  const targetRows = useMemo(
    () =>
      BUILDING_PERMIT_ROWS.filter(
        (r) =>
          inRange(r.builtUpArea, filters.builtUpArea) &&
          inRange(r.floorArea, filters.floorArea) &&
          inRange(r.plotArea, filters.plotArea) &&
          inRange(r.fsi, filters.fsi) &&
          inRange(r.heightOfBuilding, filters.heightOfBuilding) &&
          filters.noOfFloors.includes(r.noOfFloors) &&
          filters.noOfBlocks.includes(r.noOfBlocks) &&
          (filters.occupancy === "All" || r.occupancy === filters.occupancy) &&
          matchesTri(r.hasParkingPlot, filters.parkingPlot) &&
          matchesTri(r.hasNOCs, filters.nocs) &&
          (localBody === "Kerala" || r.localBody === localBody),
      ),
    [filters, localBody],
  );

  // Simulated fetch: hold the previous results until the "request" settles, so
  // the count and table change together instead of updating mid-drag.
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
    a.download = "building-permission-report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f8]">
      <SiteHeader />

      {/* Breadcrumb */}
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
              Building Permission
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

      <main className="p-4 md:p-[32px] flex flex-col gap-[24px]">
        {/* Context filters */}
        <section
          aria-label="Report context"
          className="bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] px-4 md:px-[20px] py-[20px] md:py-[16px]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-[20px] md:gap-[24px] items-end">
            <FilterDropdown
              label="Local Body/state"
              value={localBody}
              options={LOCAL_BODY_OPTIONS}
              onSelect={setLocalBody}
            />
            <FilterDropdown
              label="Time Period"
              value={timePeriod}
              options={TIME_PERIOD_OPTIONS}
              onSelect={setTimePeriod}
            />
            <FilterDropdown label="Module" value="Building Permission" options={[]} onSelect={() => {}} disabled />
            <FilterDropdown
              label="Sub-Module"
              value={subModule}
              options={SUB_MODULE_OPTIONS}
              onSelect={setSubModule}
              muted={subModule === "Select"}
            />
            <FilterDropdown
              label="Service"
              value={service}
              options={SERVICE_OPTIONS}
              onSelect={setService}
              muted={service === "Select"}
            />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-[24px] items-start">
          <ReportFilters
            value={draftFilters}
            onChange={setDraftFilters}
            onApply={() => setFilters(draftFilters)}
            onReset={() => commitFilters(DEFAULT_REPORT_FILTERS)}
            dirty={isDirty}
            hasActiveFilters={chips.length > 0}
            open={filtersOpen}
            onToggle={() => setFiltersOpen((o) => !o)}
          />

          {/* Results */}
          <section
            aria-labelledby="results-title"
            className="flex-1 min-w-0 w-full border border-[#e8eff4] rounded-[8px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(10,13,18,0.1),0px_2px_2px_0px_rgba(10,13,18,0.06)]"
          >
          <div className="bg-white flex items-center justify-between gap-3 pl-[16px] pr-[12px] py-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
            <div className="flex items-center gap-[8px] min-w-0">
              <h2 id="results-title" className="font-sans font-bold text-[16px] text-[#232f50] leading-[24px]">
                Results
              </h2>
              <span aria-hidden="true" className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px]">—</span>
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

            <ActiveFilterChips chips={chips} onClearAll={resetAll} />

            <ReportsTable rows={rows} loading={isLoading} />
          </section>
        </div>
      </main>
    </div>
  );
}
