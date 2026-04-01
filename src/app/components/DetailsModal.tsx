import { useState, useMemo } from "react";
import { ChevronRight, ChevronDown, X, Download, Search, Eye, ArrowLeft } from "lucide-react";
import { ExportButton } from "./ExportButton";
import { SeatDetailModal } from "./SeatDetailModal";
import { 
  TableRow, 
  TableItem, 
  FileRecord, 
  DISTRICTS, 
  mockData, 
  getAncestors, 
  generateFiles,
  mockNum
} from "../data/tableData";

// ── Component ─────────────��───────────────────────────────────────────────────

export type KpiType = "total" | "disposed" | "inProcess" | "delayed" | "all";

export function DetailsModal({ 
  isOpen, 
  onClose, 
  kpiType = "all",
  moduleName = "Building Permissions",
  subModuleName = "Select",
  serviceName = "Select",
  isFinanceModule = false
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  kpiType?: KpiType;
  moduleName?: string;
  subModuleName?: string;
  serviceName?: string;
  isFinanceModule?: boolean;
}) {
  const normalizedModuleName = moduleName.toLowerCase().replace(/[^a-z]/g, "");
  const isPropertyTaxModule =
    normalizedModuleName.includes("propertytax") || normalizedModuleName.includes("property");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set([
    "thiruvananthapuram",
    "thiruvananthapuram-corp",
    "thiruvananthapuram-mun",
    "thiruvananthapuram-gp"
  ]));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeat, setSelectedSeat] = useState<TableRow | null>(null);
  const [filePage, setFilePage] = useState(1);
  const FILES_PER_PAGE = 10;

  // Per-parentId pagination state
  const [pageState, setPageState] = useState<Record<string, number>>({});

  const [viewMode, setViewMode] = useState<"district" | "officeType">("district");
  
  // Finance module state
  const [financeTab, setFinanceTab] = useState<"ePayment" | "ePos" | "district" | "officeType">("ePayment");

  // Summarize office type data for categories
  const officeTypeRows = useMemo(() => {
    const corps = mockData.filter(r => r.id.endsWith("-corp"));
    const muns = mockData.filter(r => r.parentId?.endsWith("-mun"));
    const gps = mockData.filter(r => r.parentId?.endsWith("-gp"));

    const sum = (rows: TableRow[]) => rows.reduce((acc, r) => ({
      totalFiles: acc.totalFiles + r.totalFiles,
      disposed: acc.disposed + r.disposed,
      inProcess: acc.inProcess + r.inProcess,
      rejected: acc.rejected + r.rejected,
      returned: acc.returned + r.returned,
      delayed: acc.delayed! + (r.delayed || 0),
      parkedFiles: acc.parkedFiles! + (r.parkedFiles || 0),
      permanentDisposed: acc.permanentDisposed! + (r.permanentDisposed || 0),
      disposedWithinSLI: acc.disposedWithinSLI! + (r.disposedWithinSLI || 0),
      disposed1to30: acc.disposed1to30! + (r.disposed1to30 || 0),
      disposed30to100: acc.disposed30to100! + (r.disposed30to100 || 0),
      disposedAfter100: acc.disposedAfter100! + (r.disposedAfter100 || 0),
      withinSLI: acc.withinSLI! + (r.withinSLI || 0),
      delayedInProcess: acc.delayedInProcess! + (r.delayedInProcess || 0),
      delayedBy10: acc.delayedBy10! + (r.delayedBy10 || 0),
      delayedBy11to30: acc.delayedBy11to30! + (r.delayedBy11to30 || 0),
      delayedBy31to100: acc.delayedBy31to100! + (r.delayedBy31to100 || 0),
      delayedBy101to365: acc.delayedBy101to365! + (r.delayedBy101to365 || 0),
      delayedAfter365: acc.delayedAfter365! + (r.delayedAfter365 || 0),
    }), {
      totalFiles: 0, disposed: 0, inProcess: 0, rejected: 0, returned: 0,
      delayed: 0, parkedFiles: 0, permanentDisposed: 0, disposedWithinSLI: 0,
      disposed1to30: 0, disposed30to100: 0, disposedAfter100: 0,
      withinSLI: 0, delayedInProcess: 0, delayedBy10: 0, delayedBy11to30: 0,
      delayedBy31to100: 0, delayedBy101to365: 0, delayedAfter365: 0
    });

    const categories = [
      { id: "cat-corporations", name: "Corporations", level: 1, ...sum(corps) },
      { id: "cat-municipalities", name: "Municipalities", level: 1, ...sum(muns) },
      { id: "cat-gps", name: "Grama Panchayaths", level: 1, ...sum(gps) }
    ] as TableRow[];

    const catCorps = corps.map(r => ({ ...r, parentId: "cat-corporations", level: 2 }));
    const catMuns = muns.map(r => ({ ...r, parentId: "cat-municipalities", level: 2 }));
    const catGps = gps.map(r => ({ ...r, parentId: "cat-gps", level: 2 }));

    // Find children of these (seats)
    const allCatBodies = [...catCorps, ...catMuns, ...catGps];
    const seats = mockData.filter(r => allCatBodies.some(b => b.id === r.parentId)).map(r => ({ ...r, level: 3 }));

    return [...categories, ...allCatBodies, ...seats];
  }, []);

  const toggleRow = (rowId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(rowId)) {
      newExpanded.delete(rowId);
      const collapseChildren = (parentId: string) => {
        const sourceData = viewMode === "district" ? mockData : officeTypeRows;
        sourceData
          .filter((row) => row.parentId === parentId)
          .forEach((child) => {
            newExpanded.delete(child.id);
            collapseChildren(child.id);
          });
      };
      collapseChildren(rowId);
    } else {
      newExpanded.add(rowId);
    }
    setExpandedRows(newExpanded);
  };

  const getVisibleRows = () => {
    const sourceData = viewMode === "district" ? mockData : officeTypeRows;
    
    if (searchQuery) {
      return sourceData.filter(row =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const visible: TableItem[] = [];

    const addVisibleChildren = (parentId: string | undefined) => {
      const children = sourceData.filter((row) => row.parentId === parentId);
      const isPaginatedLevel =
        children.length > 0 && (children[0].level === 3 || children[0].level === 4 || (viewMode === "officeType" && children[0].level === 2));
      const shouldPaginate = isPaginatedLevel && children.length > 10; // Increased threshold for office type view
      const page = pageState[parentId ?? ""] || 1;

      const pageSize = viewMode === "officeType" && parentId?.startsWith("cat-") ? 20 : 6;
      const displayChildren = shouldPaginate
        ? children.slice((page - 1) * pageSize, page * pageSize)
        : children;

      displayChildren.forEach((row) => {
        visible.push(row);
        if (expandedRows.has(row.id)) {
          addVisibleChildren(row.id);
        }
      });

      if (shouldPaginate) {
        visible.push({
          isPagination: true,
          id: `pagination-${parentId}`,
          parentId: parentId!,
          level: children[0].level,
          currentPage: page,
          totalPages: Math.ceil(children.length / pageSize),
        });
      }
    };

    addVisibleChildren(undefined);
    return visible;
  };

  const visibleRows = getVisibleRows().filter(row => {
    if ("isPagination" in row) return true;
    return !row.isSeat;
  });
  const indentPx = (level: number) => (level - 1) * 24;
  const hasChildren = (id: string) => {
    const sourceData = viewMode === "district" ? mockData : officeTypeRows;
    const children = sourceData.filter((r) => r.parentId === id);
    if (children.every(r => r.isSeat)) return false;
    return children.length > 0;
  };

  const expandedDistricts = Array.from(expandedRows).filter((id) =>
    DISTRICTS.some((d) => d.toLowerCase() === id)
  );
  const isAnyDistrictExpanded = viewMode === "district" && expandedDistricts.length > 0;

  const level1 = mockData.filter((d) => d.level === 1);
  const totalFiles = level1.reduce((a, c) => a + c.totalFiles, 0);
  const disposed = level1.reduce((a, c) => a + c.disposed, 0);
  const inProcess = level1.reduce((a, c) => a + c.inProcess, 0);
  const returned = level1.reduce((a, c) => a + c.returned, 0);
  const formatRupee = (value: number) => `₹ ${value.toLocaleString()}`;

  // Seat detail data
  const seatAncestors = useMemo(
    () => (selectedSeat ? getAncestors(selectedSeat.id) : []),
    [selectedSeat]
  );

  const allFiles = useMemo(
    () => (selectedSeat ? generateFiles(selectedSeat.id, selectedSeat.totalFiles, moduleName) : []),
    [selectedSeat, moduleName]
  );
  const totalFilePages = Math.ceil(allFiles.length / FILES_PER_PAGE);
  const pagedFiles = allFiles.slice((filePage - 1) * FILES_PER_PAGE, filePage * FILES_PER_PAGE);

  const kpiLabel =
    kpiType === "disposed"
      ? "Arrear Demand"
      : kpiType === "inProcess"
        ? "Current Demand"
        : kpiType === "all"
          ? "All Metrics"
          : "Collection Total";

  if (!isOpen) return null;


  // ── Finance Module View ─────────────────────────────────────────────────────
  if (isFinanceModule) {
    const banks = [
      { 
        id: "sbi", 
        name: "State Bank of India",
        totalAmount: financeTab === "ePayment" ? "15,280" : "9,450",
        successCount: financeTab === "ePayment" ? "6,250" : "4,120",
        failureCount: financeTab === "ePayment" ? "4,030" : "2,330",
        successRate: financeTab === "ePayment" ? "56%" : "64%",
        failureRate: financeTab === "ePayment" ? "44%" : "36%"
      },
      { 
        id: "ubi", 
        name: "Union Bank of India",
        totalAmount: financeTab === "ePayment" ? "12,840" : "8,200",
        successCount: financeTab === "ePayment" ? "5,120" : "3,840",
        failureCount: financeTab === "ePayment" ? "3,720" : "1,860",
        successRate: financeTab === "ePayment" ? "52%" : "58%",
        failureRate: financeTab === "ePayment" ? "48%" : "42%"
      },
      { 
        id: "federal", 
        name: "Federal Bank",
        totalAmount: financeTab === "ePayment" ? "11,650" : "7,890",
        successCount: financeTab === "ePayment" ? "4,880" : "3,450",
        failureCount: financeTab === "ePayment" ? "3,770" : "2,440",
        successRate: financeTab === "ePayment" ? "50%" : "52%",
        failureRate: financeTab === "ePayment" ? "50%" : "48%"
      },
      { 
        id: "sib", 
        name: "South Indian Bank",
        totalAmount: financeTab === "ePayment" ? "11,481" : "7,300",
        successCount: financeTab === "ePayment" ? "5,001" : "3,010",
        failureCount: financeTab === "ePayment" ? "3,480" : "1,570",
        successRate: financeTab === "ePayment" ? "54%" : "60%",
        failureRate: financeTab === "ePayment" ? "46%" : "40%"
      }
    ];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 md:p-4">
        <div className="bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[1440px] flex flex-col max-h-[100vh] md:max-h-[95vh] overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 shrink-0">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-base font-semibold text-gray-900 leading-6">Finance Management Details</h2>
              <p className="text-sm font-medium text-gray-500 leading-5">Bank-wise transaction details</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center shadow-sm"
            >
              <X size={16} className="text-gray-700" />
            </button>
          </div>

          {/* Tabs - All 4 in one row */}
          <div className="px-4 md:px-8 py-4 border-b border-gray-100 shrink-0 bg-white">
            <div className="bg-[#f2f6ff] flex gap-[4px] p-[4px] rounded-[8px] w-fit">
              <button
                onClick={() => setFinanceTab("ePayment")}
                className={`flex items-center gap-[12px] px-[24px] py-[8px] rounded-[8px] transition-all ${
                  financeTab === "ePayment"
                    ? "bg-white shadow-[0px_4.883px_42px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
                    : "text-[#232f50] opacity-50"
                }`}
              >
                <span className="font-sans font-semibold text-[14px]">E-Payment</span>
              </button>
              
              <button
                onClick={() => setFinanceTab("ePos")}
                className={`flex items-center gap-[12px] px-[24px] py-[8px] rounded-[8px] transition-all ${
                  financeTab === "ePos"
                    ? "bg-white shadow-[0px_4.883px_42px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
                    : "text-[#232f50] opacity-50"
                }`}
              >
                <span className="font-sans font-semibold text-[14px]">E-POS</span>
              </button>

              <button
                onClick={() => setFinanceTab("district")}
                className={`flex items-center gap-[12px] px-[24px] py-[8px] rounded-[8px] transition-all ${
                  financeTab === "district"
                    ? "bg-white shadow-[0px_4.883px_42px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
                    : "text-[#232f50] opacity-50"
                }`}
              >
                <span className="font-sans font-semibold text-[14px]">District</span>
              </button>

              <button
                onClick={() => setFinanceTab("officeType")}
                className={`flex items-center gap-[12px] px-[24px] py-[8px] rounded-[8px] transition-all ${
                  financeTab === "officeType"
                    ? "bg-white shadow-[0px_4.883px_42px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.1)] text-[#232f50]"
                    : "text-[#232f50] opacity-50"
                }`}
              >
                <span className="font-sans font-semibold text-[14px]">Office Type</span>
              </button>
            </div>
          </div>

          {/* Content based on selected tab */}
          {(financeTab === "ePayment" || financeTab === "ePos") ? (
            // Bank Cards View
            <div className="flex-1 overflow-auto p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {banks.map((bank) => (
                  <div
                    key={bank.id}
                    className="bg-white border border-[#e8eff4] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-sans font-bold text-[18px] text-[#232f50] leading-tight">
                      {bank.name}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="font-sans font-medium text-[12px] text-[#5c6e93] leading-tight">
                          Total Amount
                        </span>
                        <span className="font-sans font-bold text-[24px] text-[#009fd2] leading-tight">
                          {bank.totalAmount}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <span className="font-sans font-medium text-[12px] text-[#5c6e93] leading-tight">
                          Success Count
                        </span>
                        <span className="font-sans font-bold text-[24px] text-[#00a78e] leading-tight">
                          {bank.successCount}
                        </span>
                        <div className="bg-[#00a78e] bg-opacity-10 px-2 py-1 rounded-[6px] w-fit">
                          <span className="font-sans font-semibold text-[12px] text-[#00a78e]">
                            {bank.successRate}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <span className="font-sans font-medium text-[12px] text-[#5c6e93] leading-tight">
                          Failure Count
                        </span>
                        <span className="font-sans font-bold text-[24px] text-[#df3a7a] leading-tight">
                          {bank.failureCount}
                        </span>
                        <div className="bg-[#df3a7a] bg-opacity-10 px-2 py-1 rounded-[6px] w-fit">
                          <span className="font-sans font-semibold text-[12px] text-[#df3a7a]">
                            {bank.failureRate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // District/Office Type Table View
            <>
              {/* Filter Bar */}
              <div className="flex items-center justify-between px-4 md:px-8 py-4 shrink-0 bg-white border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      className="pl-4 pr-10 py-2 rounded-lg border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#232f50]/20 w-full sm:w-[320px] h-10 shadow-sm"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search size={20} className="text-[#323232] shrink-0 absolute right-3" />
                  </div>
                  <ExportButton variant="dark" onClick={() => console.log("Exporting...")} className="!h-10 !py-0" />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-auto flex-1 bg-white px-4 md:px-8 py-8">
                <div className="rounded-lg border border-[#E8EFF4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden">
                  <table className="w-full text-sm border-collapse">
                    <thead className="border-y border-gray-200 sticky top-0 z-10">
                      <tr className="border-b border-gray-200">
                        <th className="text-left pl-8 pr-4 py-3 text-xs font-bold text-[#6a7282] bg-[#f9fafb] sticky left-0 z-20 border-r border-gray-200 min-w-[200px] align-middle">
                          Name
                        </th>
                        <th className="text-right px-6 py-2 text-[11px] font-bold text-[#6a7282] bg-[#f0fdf4] border-l border-gray-200 min-w-[120px] whitespace-nowrap">Success Count</th>
                        <th className="text-right px-6 py-2 text-[11px] font-bold text-[#6a7282] bg-[#fff1f2] border-l border-gray-200 min-w-[120px] whitespace-nowrap">Failure Count</th>
                        <th className="text-right px-6 py-2 text-[11px] font-bold text-[#6a7282] bg-[#fffbeb] border-l border-gray-200 min-w-[120px] whitespace-nowrap">Success Rate</th>
                      <th className="text-right px-6 py-2 text-[11px] font-bold text-[#6a7282] bg-[#f1f5f9] border-l border-gray-200 min-w-[120px] whitespace-nowrap">Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRows.map((row, index) => {
                      const isEven = index % 2 === 0;
                      const rowBg = isEven ? "bg-white" : "bg-[#F6F9FB]";

                      const rootId = ("isPagination" in row ? row.parentId : row.id).split("-")[0];
                      const isDimmed = isAnyDistrictExpanded && !expandedDistricts.includes(rootId);
                      const dimmedClass = isDimmed
                        ? "opacity-35 grayscale-[0.2] blur-[0.2px] hover:opacity-100 transition-all duration-300"
                        : "transition-all duration-300";

                      if ("isPagination" in row) {
                        return (
                          <tr key={row.id} className={`${rowBg} ${dimmedClass} border-b border-gray-100 h-10`}>
                            <td colSpan={5} className="pl-8 pr-4 py-1">
                              <div
                                className="flex items-center gap-3"
                                style={{ paddingLeft: `${indentPx(row.level) + 26}px` }}
                              >
                                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                                  Page {row.currentPage} of {row.totalPages}
                                </span>
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() =>
                                      setPageState((p) => ({ ...p, [row.parentId]: row.currentPage - 1 }))
                                    }
                                    disabled={row.currentPage === 1}
                                    className="px-2 py-0.5 text-xs rounded border border-gray-200 bg-white disabled:opacity-50 hover:bg-gray-50 font-medium text-gray-700 transition-colors shadow-sm"
                                  >
                                    Prev
                                  </button>
                                  <button
                                    onClick={() =>
                                      setPageState((p) => ({ ...p, [row.parentId]: row.currentPage + 1 }))
                                    }
                                    disabled={row.currentPage === row.totalPages}
                                    className="px-2 py-0.5 text-xs rounded border border-gray-200 bg-white disabled:opacity-50 hover:bg-gray-50 font-medium text-gray-700 transition-colors shadow-sm"
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      }

                      const indent = indentPx(row.level);
                      const isExpandable = hasChildren(row.id);

                      // Generate finance data based on row
                      const successCount = mockNum(row.id + "success", 100, 500);
                      const failureCount = mockNum(row.id + "failure", 50, 200);
                      const totalTransactions = successCount + failureCount;
                      const successRate = totalTransactions > 0 
                        ? ((successCount / totalTransactions) * 100).toFixed(1) + "%" 
                        : "0%";
                      const totalAmount = mockNum(row.id + "amount", 5000, 25000).toLocaleString();

                      return (
                        <tr
                          key={row.id}
                          className={`${rowBg} ${dimmedClass} border-b border-gray-100 hover:bg-gray-50/50`}
                        >
                          {/* Name Column */}
                          <td className="pl-8 pr-4 py-2.5 sticky left-0 z-10 bg-inherit border-r border-gray-200">
                            <div className="flex items-center gap-2" style={{ paddingLeft: `${indent}px` }}>
                              {isExpandable ? (
                                <button
                                  onClick={() => toggleRow(row.id)}
                                  className="p-0.5 hover:bg-gray-200/70 rounded shrink-0 w-5 h-5 flex items-center justify-center"
                                >
                                  {expandedRows.has(row.id) ? (
                                    <ChevronDown size={16} className="text-[#232f50]" />
                                  ) : (
                                    <ChevronRight size={16} className="text-[#232f50]" />
                                  )}
                                </button>
                              ) : (
                                <span className="w-5 shrink-0" />
                              )}
                              <span className={`text-xs ${row.isSeat ? "font-medium text-[#232f50]" : "font-semibold text-[#232f50]"}`}>
                                {row.name}
                              </span>
                            </div>
                          </td>
                          
                          {/* Success Count */}
                          <td className="text-right px-6 py-2.5 text-xs font-semibold text-[#00a78e]">
                            {successCount.toLocaleString()}
                          </td>
                          
                          {/* Failure Count */}
                          <td className="text-right px-6 py-2.5 text-xs font-semibold text-[#df3a7a]">
                            {failureCount.toLocaleString()}
                          </td>
                          
                          {/* Success Rate */}
                          <td className="text-right px-6 py-2.5 text-xs font-semibold text-[#d08700]">
                            {successRate}
                          </td>
                          
                          {/* Total Amount */}
                          <td className="text-right px-6 py-2.5 text-xs font-semibold text-[#009fd2]">
                            ₹{totalAmount}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Main hierarchy table view ─────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 md:p-4">
      <div className="bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[1440px] flex flex-col max-h-[100vh] md:max-h-[95vh] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 shrink-0">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-base font-semibold text-gray-900 leading-6">{moduleName} {kpiLabel}</h2>
            <p className="text-sm font-medium text-gray-500 leading-5">
              {moduleName} {subModuleName !== "Select" ? `/ ${subModuleName}` : ""} {serviceName !== "Select" ? `/ ` : ""}
              {serviceName !== "Select" ? <span className="font-bold">{serviceName}</span> : null}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center shadow-sm"
          >
            <X size={16} className="text-gray-700" />
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 py-6 border-b border-gray-100 shrink-0 bg-white">
          {[
            { label: "Collection Total", value: formatRupee(totalFiles) },
            { label: "Arrear Demand", value: formatRupee(disposed) },
            { label: "Current Demand", value: formatRupee(inProcess) },
          ].map((kpi, idx) => (
            <div
              key={idx}
              className="min-w-0 border border-[#e8eff4] rounded-lg p-4 flex flex-col gap-2 bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
            >
              <p className="text-sm font-medium text-[#5c6e93] leading-tight">{kpi.label}</p>
              <p className="text-[20px] font-semibold text-[#232f50] leading-tight">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between shrink-0 bg-white px-[24px] py-[8px]">
          <div className="flex items-center gap-1 bg-[#e8eff4] rounded-lg h-9 w-full sm:w-[300px] p-[1px]">
            <button 
              onClick={() => setViewMode("district")}
              className={`flex-1 h-full rounded flex items-center justify-center text-sm font-semibold transition-all ${viewMode === "district" ? "bg-white text-[#232f50] shadow-sm border border-[#e8eff4]" : "text-[#232f50] opacity-70 hover:opacity-100"}`}
            >
              District
            </button>
            <button 
              onClick={() => {
                setViewMode("officeType");
                setExpandedRows(new Set(["cat-corporations", "cat-municipalities", "cat-gps"]));
              }}
              className={`flex-1 h-full rounded flex items-center justify-center text-sm font-semibold transition-all ${viewMode === "officeType" ? "bg-white text-[#232f50] shadow-sm border border-[#e8eff4]" : "text-[#232f50] opacity-70 hover:opacity-100"}`}
            >
              Office Type
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative h-10 w-full sm:w-[400px] border border-[#e7e7e7] rounded-lg flex items-center px-4 bg-white">
              <input
                type="text"
                placeholder="Search"
                className="w-full text-sm text-[#222533] placeholder-[#222533] placeholder-opacity-50 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={20} className="text-[#323232] shrink-0" />
            </div>
            <ExportButton variant="dark" onClick={() => console.log("Exporting...")} className="!h-10 !py-0" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto flex-1 bg-white p-[24px]">
          <div className="rounded-lg border border-[#E8EFF4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden">
            <table className="w-full text-sm border-collapse">
              <thead className="border-y border-gray-200 sticky top-0 z-10">
                {/* ── Sub-column header row ── */}
                <tr className="border-b border-gray-200">
                  <th className="text-left pl-8 pr-4 py-3 text-xs bg-[#f9fafb] sticky left-0 z-20 border-r border-gray-200 min-w-[200px] align-middle text-[#6a7282f7]">
                    Name
                  </th>
                <th className="text-right px-6 py-2 text-[11px] font-bold text-[#6a7282] bg-[#f1f5f9] border-l border-gray-200 min-w-[140px] whitespace-nowrap">Collection Total</th>
                <th className="text-right px-6 py-2 text-[11px] font-bold text-[#6a7282] bg-[#f0fdf4] border-l border-gray-200 min-w-[140px] whitespace-nowrap">Arrear Demand</th>
                <th className="text-right px-6 py-2 text-[11px] font-bold text-[#6a7282] bg-[#fffbeb] border-l border-gray-200 min-w-[140px] whitespace-nowrap">Current Demand</th>
                
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row, index) => {
                const isEven = index % 2 === 0;
                const rowBg = isEven ? "bg-white" : "bg-[#F6F9FB]";

                const rootId = ("isPagination" in row ? row.parentId : row.id).split("-")[0];
                const isDimmed = isAnyDistrictExpanded && !expandedDistricts.includes(rootId);
                const dimmedClass = isDimmed
                  ? "opacity-35 grayscale-[0.2] blur-[0.2px] hover:opacity-100 transition-all duration-300"
                  : "transition-all duration-300";

                if ("isPagination" in row) {
                  return (
                    <tr key={row.id} className={`${rowBg} ${dimmedClass} border-b border-gray-100 h-10`}>
                      <td colSpan={100} className="pl-8 pr-4 py-1">
                        <div
                          className="flex items-center gap-3"
                          style={{ paddingLeft: `${indentPx(row.level) + 26}px` }}
                        >
                          <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                            Page {row.currentPage} of {row.totalPages}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() =>
                                setPageState((p) => ({ ...p, [row.parentId]: row.currentPage - 1 }))
                              }
                              disabled={row.currentPage === 1}
                              className="px-2 py-0.5 text-xs rounded border border-gray-200 bg-white disabled:opacity-50 hover:bg-gray-50 font-medium text-gray-700 transition-colors shadow-sm"
                            >
                              Prev
                            </button>
                            <button
                              onClick={() =>
                                setPageState((p) => ({ ...p, [row.parentId]: row.currentPage + 1 }))
                              }
                              disabled={row.currentPage === row.totalPages}
                              className="px-2 py-0.5 text-xs rounded border border-gray-200 bg-white disabled:opacity-50 hover:bg-gray-50 font-medium text-gray-700 transition-colors shadow-sm"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr
                    key={row.id}
                    className={`border-b border-gray-100 h-12 ${rowBg} ${dimmedClass} hover:bg-gray-50/80`}
                  >
                    {/* Name — sticky left column */}
                    <td className={`pl-8 pr-4 py-2 sticky left-0 z-10 ${rowBg} border-r border-gray-100`}>
                      <div
                        className="flex items-center gap-2"
                        style={{ paddingLeft: `${indentPx(row.level)}px` }}
                      >
                        {hasChildren(row.id) ? (
                          <button
                            onClick={() => toggleRow(row.id)}
                            className="p-0.5 rounded text-[#99a1af] hover:text-gray-700 shrink-0 border border-transparent"
                          >
                            {expandedRows.has(row.id) ? (
                              <ChevronDown size={14} strokeWidth={2.5} />
                            ) : (
                              <ChevronRight size={14} strokeWidth={2.5} />
                            )}
                          </button>
                        ) : (
                          <span className="w-[18px] shrink-0" />
                        )}
                        <span className="text-sm font-normal text-[#101828] truncate tracking-[-0.15px]">
                          {row.name}
                        </span>
                        {row.designation && (
                          <span className="ml-2 text-xs text-gray-400 truncate hidden sm:inline">
                            {row.designation}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Collection Total */}
                    <td className="text-right px-6 py-2 text-sm font-normal text-[#364153] border-l border-gray-100">{formatRupee(row.totalFiles)}</td>
                    {/* Arrear Demand */}
                    <td className="text-right px-6 py-2 text-sm font-normal text-[#00a63e] border-l border-gray-100">{formatRupee(row.disposed)}</td>
                    {/* Current Demand */}
                    <td className="text-right px-6 py-2 text-sm font-normal text-[#d08700] border-l border-gray-100">{formatRupee(row.inProcess)}</td>
                    
                  </tr>
                );
              })}
              {visibleRows.length === 0 && (
                <tr>
                  <td colSpan={100} className="text-center py-10 text-gray-400 text-sm">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}