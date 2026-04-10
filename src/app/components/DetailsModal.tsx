import { useState, useMemo, useEffect, Fragment } from "react";
import { ChevronRight, ChevronDown, X, Search } from "lucide-react";
import { ExportButton } from "./ExportButton";
import { SeatDetailModal } from "./SeatDetailModal";
import { TableRow, TableItem, DISTRICTS, mockData, mockNum } from "../data/tableData";

// ── Component ─────────────��───────────────────────────────────────────────────

export type KpiType = "total" | "disposed" | "inProcess" | "delayed" | "all";

type FileStatusColumn = {
  key: keyof TableRow;
  label: string;
  headerClass: string;
};

const FILE_STATUS_TABLE_COLUMNS: Record<
  Exclude<KpiType, "all">,
  FileStatusColumn[]
> = {
  total: [
    { key: "totalFiles", label: "Total Files", headerClass: "bg-[#f1f5f9]" },
    { key: "disposed", label: "Disposed", headerClass: "bg-[#f0fdf4]" },
    { key: "inProcess", label: "In Process", headerClass: "bg-[#fffbeb]" },
    { key: "rejected", label: "Rejected", headerClass: "bg-[#fef2f2]" },
    { key: "returned", label: "Returned", headerClass: "bg-[#f5f3ff]" },
    { key: "delayed", label: "Delayed", headerClass: "bg-[#ecfeff]" },
  ],
  disposed: [
    { key: "disposed", label: "Total disposed", headerClass: "bg-[#f1f5f9]" },
    { key: "parkedFiles", label: "parked files", headerClass: "bg-[#f0fdf4]" },
    { key: "permanentDisposed", label: "permanent disposed", headerClass: "bg-[#fffbeb]" },
    { key: "disposedWithinSLI", label: "disposed within SLI", headerClass: "bg-[#fef2f2]" },
    { key: "disposed1to30", label: "Disposed 1-30 days", headerClass: "bg-[#f5f3ff]" },
    { key: "disposed30to100", label: "Disposed 30-100 days", headerClass: "bg-[#ecfeff]" },
    { key: "disposedAfter100", label: "Disposed after 100 days of SLI", headerClass: "bg-[#f8fafc]" },
  ],
  inProcess: [
    { key: "inProcess", label: "Total files in process", headerClass: "bg-[#f1f5f9]" },
    { key: "withinSLI", label: "Within SLI", headerClass: "bg-[#f0fdf4]" },
    { key: "delayedInProcess", label: "Delayed", headerClass: "bg-[#fffbeb]" },
  ],
  delayed: [
    { key: "delayed", label: "Total delayed", headerClass: "bg-[#f1f5f9]" },
    { key: "delayedBy10", label: "delayed by 10 days", headerClass: "bg-[#f0fdf4]" },
    { key: "delayedBy11to30", label: "delayed by 11-30 days", headerClass: "bg-[#fffbeb]" },
    { key: "delayedBy31to100", label: "delayed by 31-100 days", headerClass: "bg-[#fef2f2]" },
    { key: "delayedBy101to365", label: "delayed by 101-365 days", headerClass: "bg-[#f5f3ff]" },
    { key: "delayedAfter365", label: "delayed by >365 days", headerClass: "bg-[#ecfeff]" },
  ],
};

function getRowMetric(row: TableRow, key: keyof TableRow): number {
  const v = row[key];
  return typeof v === "number" ? v : 0;
}

function formatFileCount(n: number) {
  return n.toLocaleString();
}

function formatINR(n: number) {
  return n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
}

export type DetailsModalContentMode = "fileKpi" | "propertyTaxFinance" | "buildingFinance";

/** State-level targets (₹) — aligned with BuildingFinanceOverview KPI strip */
const BUILDING_FINANCE_TARGETS = [125_000, 840_000, 215_000, 450_000, 95_000] as const;

const BUILDING_FINANCE_COLS = [
  { id: "applicationFees", label: "Application Fees", headerClass: "bg-[#f1f5f9]" },
  { id: "permitFees", label: "Permit Fees", headerClass: "bg-[#f0fdf4]" },
  { id: "regularisationFees", label: "Regularisation Fees", headerClass: "bg-[#fffbeb]" },
  { id: "additionalFsi", label: "Additional FSI", headerClass: "bg-[#fef2f2]" },
  { id: "renewalFees", label: "Renewal Fees", headerClass: "bg-[#f5f3ff]" },
] as const;

function hashSeed(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function buildingFinanceFactor(rowId: string, colIdx: number): number {
  return 0.5 + ((hashSeed(`${rowId}:${colIdx}`) % 1000) / 1000);
}

type PtFinanceSlice = "total" | "disposed" | "inProcess";

/** Maps to DCB cards: total → Demand, disposed → Collection, inProcess → Balance */
const PT_DCB_MODAL_META: Record<
  PtFinanceSlice,
  {
    headline: string;
    kpiLabels: [string, string, string];
    tableDataLabels: [string, string, string];
  }
> = {
  total: {
    headline: "Demand",
    kpiLabels: ["Demand Total", "Arrear Demand", "Current Demand"],
    tableDataLabels: ["Demand Total", "Arrear Demand", "Current Demand"],
  },
  disposed: {
    headline: "Collection",
    kpiLabels: ["Collection Total", "Arrear Demand", "Current Demand"],
    tableDataLabels: ["Collection Total", "Arrear Demand", "Current Demand"],
  },
  inProcess: {
    headline: "Balance",
    kpiLabels: ["Balance Total", "Arrear Demand", "Current Demand"],
    tableDataLabels: ["Balance Total", "Arrear Demand", "Current Demand"],
  },
};

function getPtDcbDistrictRow(row: TableRow) {
  const base = row.totalFiles * 920 + row.disposed * 180 + (row.delayed || 0) * 40;
  const demandTotal = Math.round(base);
  const arrearShare = 0.38 + (hashSeed(row.id) % 19) / 100;
  const arrearDemand = Math.round(demandTotal * arrearShare);
  const currentDemand = demandTotal - arrearDemand;

  const rate = 0.58 + (row.name.length % 7) * 0.03;
  const collectionTotal = Math.min(demandTotal, Math.round(demandTotal * rate));
  const arrearCollection =
    demandTotal > 0
      ? Math.min(arrearDemand, Math.round((collectionTotal * arrearDemand) / demandTotal))
      : 0;
  const currentCollection = collectionTotal - arrearCollection;

  const balanceTotal = demandTotal - collectionTotal;
  const arrearBalance = Math.max(0, arrearDemand - arrearCollection);
  const currentBalance = balanceTotal - arrearBalance;

  return {
    demandTotal,
    arrearDemand,
    currentDemand,
    collectionTotal,
    arrearCollection,
    currentCollection,
    balanceTotal,
    arrearBalance,
    currentBalance,
  };
}

function getPtDcbTriple(
  metrics: ReturnType<typeof getPtDcbDistrictRow>,
  slice: PtFinanceSlice
): [number, number, number] {
  switch (slice) {
    case "total":
      return [metrics.demandTotal, metrics.arrearDemand, metrics.currentDemand];
    case "disposed":
      return [metrics.collectionTotal, metrics.arrearCollection, metrics.currentCollection];
    case "inProcess":
      return [metrics.balanceTotal, metrics.arrearBalance, metrics.currentBalance];
  }
}

export function DetailsModal({ 
  isOpen, 
  onClose, 
  kpiType = "all",
  moduleName = "Building Permissions",
  subModuleName = "Select",
  serviceName = "Select",
  isFinanceModule = false,
  contentMode = "fileKpi",
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  kpiType?: KpiType;
  moduleName?: string;
  subModuleName?: string;
  serviceName?: string;
  isFinanceModule?: boolean;
  contentMode?: DetailsModalContentMode;
}) {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set([
    "thiruvananthapuram",
    "thiruvananthapuram-corp",
    "thiruvananthapuram-mun",
    "thiruvananthapuram-gp"
  ]));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeat, setSelectedSeat] = useState<TableRow | null>(null);
  const [seatFileModalOpen, setSeatFileModalOpen] = useState(false);

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

  const isBuildingFinanceModal = contentMode === "buildingFinance";

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

  const allVisibleRows = getVisibleRows();
  const visibleRows = isBuildingFinanceModal
    ? allVisibleRows.filter((row) => "isPagination" in row || !row.isSeat)
    : allVisibleRows;
  const indentPx = (level: number) => (level - 1) * 24;
  const hasChildren = (id: string) => {
    const sourceData = viewMode === "district" ? mockData : officeTypeRows;
    const children = sourceData.filter((r) => r.parentId === id);
    if (children.length === 0) return false;
    if (isBuildingFinanceModal && children.every((r) => r.isSeat)) return false;
    return true;
  };

  const expandedDistricts = Array.from(expandedRows).filter((id) =>
    DISTRICTS.some((d) => d.toLowerCase() === id)
  );
  const isAnyDistrictExpanded = viewMode === "district" && expandedDistricts.length > 0;

  const level1 = mockData.filter((d) => d.level === 1);

  function getBuildingFinanceFee(row: TableRow, colIdx: number): number {
    const target = BUILDING_FINANCE_TARGETS[colIdx];
    if (target === undefined) return 0;
    const norm =
      level1.reduce((s, r) => s + r.totalFiles * buildingFinanceFactor(r.id, colIdx), 0) || 1;
    return Math.round(
      (target * row.totalFiles * buildingFinanceFactor(row.id, colIdx)) / norm
    );
  }

  useEffect(() => {
    if (!isOpen) {
      setSelectedSeat(null);
      setSeatFileModalOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isBuildingFinanceModal) {
      setSelectedSeat(null);
      setSeatFileModalOpen(false);
    }
  }, [isBuildingFinanceModal]);

  const fileStatusModalTitle =
    kpiType === "all"
      ? "All Metrics"
      : kpiType === "total"
        ? "Total Files"
        : kpiType === "disposed"
          ? "Disposed Files"
          : kpiType === "inProcess"
            ? "Under Process"
            : "Delayed";

  const resolvedFileStatusKey: Exclude<KpiType, "all"> =
    kpiType === "all" ? "total" : kpiType;
  const fileStatusColumns = FILE_STATUS_TABLE_COLUMNS[resolvedFileStatusKey];

  const fileModalStripKpis = fileStatusColumns.map((col) => ({
    columnKey: String(col.key),
    label: col.label,
    headerClass: col.headerClass,
    value: formatFileCount(
      level1.reduce((sum, row) => sum + getRowMetric(row, col.key), 0)
    ),
  }));

  const buildingFinanceStripKpis = BUILDING_FINANCE_COLS.map((col, idx) => ({
    columnKey: col.id,
    label: col.label,
    headerClass: col.headerClass,
    value: formatINR(level1.reduce((sum, row) => sum + getBuildingFinanceFee(row, idx), 0)),
  }));

  const modalStripKpis = isBuildingFinanceModal ? buildingFinanceStripKpis : fileModalStripKpis;
  const tableMetricColumnCount = isBuildingFinanceModal
    ? BUILDING_FINANCE_COLS.length
    : fileStatusColumns.length;
  const modalDetailTitle = isBuildingFinanceModal ? "Financial overview" : fileStatusModalTitle;

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
            <>
              <div className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-white px-4 py-3 md:px-8">
                <p className="text-sm font-medium text-[#5c6e93]">
                  {financeTab === "ePayment"
                    ? "E-Payment — bank-wise transactions"
                    : "E-POS — bank-wise transactions"}
                </p>
                <ExportButton variant="dark" onClick={() => console.log("Exporting...")} className="!h-10 !py-0" />
              </div>
              <div className="min-h-0 flex-1 overflow-auto bg-white px-4 py-6 md:px-8 md:py-8">
                <div className="overflow-hidden rounded-lg border border-[#E8EFF4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                  <table className="w-full border-collapse text-sm">
                    <thead className="sticky top-0 z-10 border-y border-gray-200">
                      <tr className="border-b border-gray-200">
                        <th className="sticky left-0 z-20 min-w-[200px] border-r border-gray-200 bg-[#f9fafb] py-3 pl-8 pr-4 text-left text-xs font-bold text-[#6a7282f7]">
                          Bank name
                        </th>
                        <th className="min-w-[120px] border-l border-gray-200 bg-[#f1f5f9] px-4 py-2 text-right text-[11px] font-bold text-[#6a7282] whitespace-nowrap">
                          Total amount
                        </th>
                        <th className="min-w-[110px] border-l border-gray-200 bg-[#f0fdf4] px-4 py-2 text-right text-[11px] font-bold text-[#6a7282] whitespace-nowrap">
                          Success count
                        </th>
                        <th className="min-w-[110px] border-l border-gray-200 bg-[#fff1f2] px-4 py-2 text-right text-[11px] font-bold text-[#6a7282] whitespace-nowrap">
                          Failure count
                        </th>
                        <th className="min-w-[100px] border-l border-gray-200 bg-[#fffbeb] px-4 py-2 text-right text-[11px] font-bold text-[#6a7282] whitespace-nowrap">
                          Success rate
                        </th>
                        <th className="min-w-[100px] border-l border-gray-200 bg-[#f5f3ff] py-2 pl-4 pr-8 text-right text-[11px] font-bold text-[#6a7282] whitespace-nowrap">
                          Failure rate
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {banks.map((bank, index) => {
                        const stripe = index % 2 === 0 ? "bg-white" : "bg-[#F6F9FB]";
                        return (
                          <tr
                            key={bank.id}
                            className={`border-b border-gray-100 ${stripe} hover:bg-gray-50/80`}
                          >
                            <td
                              className={`sticky left-0 z-10 border-r border-gray-100 py-3 pl-8 pr-4 text-sm font-semibold text-[#101828] ${stripe}`}
                            >
                              {bank.name}
                            </td>
                            <td className="border-l border-gray-100 px-4 py-2 text-right text-sm font-semibold tabular-nums text-[#009fd2]">
                              ₹{bank.totalAmount}
                            </td>
                            <td className="border-l border-gray-100 px-4 py-2 text-right text-sm font-normal tabular-nums text-[#00a78e]">
                              {bank.successCount}
                            </td>
                            <td className="border-l border-gray-100 px-4 py-2 text-right text-sm font-normal tabular-nums text-[#df3a7a]">
                              {bank.failureCount}
                            </td>
                            <td className="border-l border-gray-100 px-4 py-2 text-right text-sm font-medium text-[#d08700]">
                              {bank.successRate}
                            </td>
                            <td className="border-l border-gray-100 py-2 pl-4 pr-8 text-right text-sm font-medium text-[#6a7282]">
                              {bank.failureRate}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
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

  // ── Property Tax · DCB (demand / collection / balance by district) ───────────
  if (contentMode === "propertyTaxFinance") {
    const ptSlice: PtFinanceSlice =
      kpiType === "disposed" ? "disposed" : kpiType === "inProcess" ? "inProcess" : "total";
    const ptMeta = PT_DCB_MODAL_META[ptSlice];
    const fullPtRows = level1.map((row) => {
      const m = getPtDcbDistrictRow(row);
      const [c0, c1, c2] = getPtDcbTriple(m, ptSlice);
      return { id: row.id, name: row.name, c0, c1, c2 };
    });
    const sums = fullPtRows.reduce(
      (acc, r) => ({
        c0: acc.c0 + r.c0,
        c1: acc.c1 + r.c1,
        c2: acc.c2 + r.c2,
      }),
      { c0: 0, c1: 0, c2: 0 }
    );
    const ptTopKpis = [
      { label: ptMeta.kpiLabels[0], value: formatINR(sums.c0) },
      { label: ptMeta.kpiLabels[1], value: formatINR(sums.c1) },
      { label: ptMeta.kpiLabels[2], value: formatINR(sums.c2) },
    ];
    const q = searchQuery.trim().toLowerCase();
    const filteredPtRows = q
      ? fullPtRows.filter((r) => r.name.toLowerCase().includes(q))
      : fullPtRows;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 md:p-4">
        <div className="bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[1440px] flex flex-col max-h-[100vh] md:max-h-[95vh] overflow-hidden">
          <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 shrink-0">
            <div className="flex flex-col gap-0.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-[#009fd2]">
                Property tax · DCB
              </p>
              <h2 className="text-base font-semibold text-gray-900 leading-6">
                {moduleName} — {ptMeta.headline}
              </h2>
              <p className="text-sm font-medium text-gray-500 leading-5">
                {moduleName}{" "}
                {subModuleName !== "Select" ? `/ ${subModuleName}` : ""}{" "}
                {serviceName !== "Select" ? `/ ` : ""}
                {serviceName !== "Select" ? <span className="font-bold">{serviceName}</span> : null}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center justify-center shadow-sm"
            >
              <X size={16} className="text-gray-700" />
            </button>
          </div>

          <div className="flex flex-nowrap items-stretch gap-3 md:gap-4 px-4 md:px-8 py-6 border-b border-gray-100 shrink-0 bg-white overflow-x-auto">
            {ptTopKpis.map((kpi) => (
              <div
                key={kpi.label}
                className="flex min-w-[160px] flex-1 basis-0 flex-col gap-2 rounded-lg border border-[#e8eff4] bg-white p-4 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
              >
                <p className="text-sm font-medium text-[#5c6e93] leading-tight">{kpi.label}</p>
                <p className="mt-auto text-[18px] font-semibold text-[#232f50] leading-tight tabular-nums md:text-[20px]">
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between shrink-0 bg-white px-[24px] py-[8px] border-b border-gray-100">
            <div className="relative h-10 w-full sm:w-[400px] border border-[#e7e7e7] rounded-lg flex items-center px-4 bg-white">
              <input
                type="text"
                placeholder="Search district"
                className="w-full text-sm text-[#222533] placeholder-[#222533] placeholder-opacity-50 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={20} className="text-[#323232] shrink-0" />
            </div>
            <ExportButton variant="dark" onClick={() => console.log("Exporting...")} className="!h-10 !py-0 hidden sm:flex" />
          </div>

          <div className="overflow-auto flex-1 bg-white p-[24px]">
            <div className="rounded-lg border border-[#E8EFF4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden">
              <table className="w-full text-sm border-collapse">
                <thead className="border-y border-gray-200 sticky top-0 z-10">
                  <tr className="border-b border-gray-200">
                    <th className="text-left pl-8 pr-4 py-3 text-xs bg-[#f9fafb] text-[#6a7282f7] font-bold">
                      District
                    </th>
                    <th className="text-right px-4 py-2 text-[11px] font-bold text-[#6a7282] border-l border-gray-200 bg-[#f1f5f9] whitespace-nowrap">
                      {ptMeta.tableDataLabels[0]} (₹)
                    </th>
                    <th className="text-right px-4 py-2 text-[11px] font-bold text-[#6a7282] border-l border-gray-200 bg-[#f0fdf4] whitespace-nowrap">
                      {ptMeta.tableDataLabels[1]} (₹)
                    </th>
                    <th className="text-right px-4 py-2 text-[11px] font-bold text-[#6a7282] border-l border-gray-200 bg-[#fffbeb] whitespace-nowrap">
                      {ptMeta.tableDataLabels[2]} (₹)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPtRows.map((row, index) => {
                    const isEven = index % 2 === 0;
                    const rowBg = isEven ? "bg-white" : "bg-[#F6F9FB]";
                    return (
                      <tr key={row.id} className={`border-b border-gray-100 h-12 ${rowBg} hover:bg-gray-50/80`}>
                        <td className="pl-8 pr-4 py-2 text-sm font-normal text-[#101828]">{row.name}</td>
                        <td className="text-right px-4 py-2 text-sm font-normal text-[#364153] border-l border-gray-100 tabular-nums">
                          {formatINR(row.c0)}
                        </td>
                        <td className="text-right px-4 py-2 text-sm font-normal text-[#00a78e] border-l border-gray-100 tabular-nums">
                          {formatINR(row.c1)}
                        </td>
                        <td className="text-right px-4 py-2 text-sm font-normal text-[#df3a7a] border-l border-gray-100 tabular-nums">
                          {formatINR(row.c2)}
                        </td>
                      </tr>
                    );
                  })}
                  {filteredPtRows.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-10 text-gray-400 text-sm">
                        No districts match your search.
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

  // ── Main hierarchy table view ─────────────────────────────────────────────
  return (
    <Fragment>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 md:p-4">
      <div className="bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[1440px] flex flex-col max-h-[100vh] md:max-h-[95vh] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-200 shrink-0">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-base font-semibold text-gray-900 leading-6">{moduleName} — {modalDetailTitle}</h2>
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

        {/* KPIs — single horizontal row, equal-width cards, same height; scroll on narrow viewports */}
        <div className="flex flex-nowrap items-stretch gap-3 md:gap-4 px-4 md:px-8 py-6 border-b border-gray-100 shrink-0 bg-[#fafbfc] overflow-x-auto">
          {modalStripKpis.map((kpi) => (
            <div
              key={String(kpi.columnKey)}
              className="flex min-w-[152px] flex-1 basis-0 flex-col rounded-xl border border-[#e8eff4] overflow-hidden shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white"
            >
              <div className={`h-1.5 w-full shrink-0 ${kpi.headerClass}`} aria-hidden />
              <div className="p-3 sm:p-4 flex min-h-0 flex-1 flex-col gap-1 bg-white">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#6a7282] leading-snug break-words">
                  {kpi.label}
                </p>
                <p className="text-lg sm:text-[22px] font-semibold text-[#232f50] leading-tight tabular-nums tracking-tight">
                  {kpi.value}
                </p>
                <p className="text-[10px] sm:text-[11px] font-medium text-[#8896a8] leading-snug pt-1 border-t border-[#e8eff4] mt-auto">
                  {isBuildingFinanceModal
                    ? "State total · fee category"
                    : "State total · matches table column"}
                </p>
              </div>
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

        {/* Hierarchy table */}
        <div className="overflow-auto flex-1 bg-white p-[24px]">
          <div className="rounded-lg border border-[#E8EFF4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden">
            <table className="w-full text-sm border-collapse">
              <thead className="border-y border-gray-200 sticky top-0 z-10">
                <tr className="border-b border-gray-200">
                  <th className="text-left pl-8 pr-4 py-3 text-xs bg-[#f9fafb] sticky left-0 z-20 border-r border-gray-200 min-w-[200px] align-middle text-[#6a7282f7]">
                    Name
                  </th>
                  {isBuildingFinanceModal
                    ? BUILDING_FINANCE_COLS.map((col) => (
                        <th
                          key={col.id}
                          className={`text-right px-4 py-2 text-[11px] font-bold text-[#6a7282] border-l border-gray-200 min-w-[120px] whitespace-nowrap ${col.headerClass}`}
                        >
                          {col.label}
                        </th>
                      ))
                    : fileStatusColumns.map((col) => (
                        <th
                          key={col.key}
                          className={`text-right px-4 py-2 text-[11px] font-bold text-[#6a7282] border-l border-gray-200 min-w-[120px] whitespace-nowrap ${col.headerClass}`}
                        >
                          {col.label}
                        </th>
                      ))}
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
                      <td colSpan={1 + tableMetricColumnCount} className="pl-8 pr-4 py-1">
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

                const isSeatRow = !("isPagination" in row) && Boolean(row.isSeat);
                const seatSelected =
                  isSeatRow && seatFileModalOpen && selectedSeat?.id === row.id;

                return (
                  <tr
                    key={row.id}
                    role={isSeatRow && !isBuildingFinanceModal ? "button" : undefined}
                    tabIndex={isSeatRow && !isBuildingFinanceModal ? 0 : undefined}
                    onClick={
                      isSeatRow && !isBuildingFinanceModal
                        ? () => {
                            setSelectedSeat(row);
                            setSeatFileModalOpen(true);
                          }
                        : undefined
                    }
                    onKeyDown={
                      isSeatRow && !isBuildingFinanceModal
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setSelectedSeat(row);
                              setSeatFileModalOpen(true);
                            }
                          }
                        : undefined
                    }
                    className={`border-b border-gray-100 h-12 ${rowBg} ${dimmedClass} ${
                      isSeatRow && !isBuildingFinanceModal
                        ? "cursor-pointer hover:bg-[#eef6ff]/90"
                        : "hover:bg-gray-50/80"
                    } ${seatSelected ? "bg-[#e8f4fc]/80 ring-1 ring-inset ring-[#009fd2]/40" : ""}`}
                  >
                    {/* Name — sticky left column */}
                    <td className={`pl-8 pr-4 py-2 sticky left-0 z-10 ${rowBg} border-r border-gray-100`}>
                      <div
                        className="flex items-center gap-2"
                        style={{ paddingLeft: `${indentPx(row.level)}px` }}
                      >
                        {hasChildren(row.id) ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleRow(row.id);
                            }}
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

                    {isBuildingFinanceModal
                      ? BUILDING_FINANCE_COLS.map((col, idx) => (
                          <td
                            key={col.id}
                            className="border-l border-gray-100 px-4 py-2 text-right text-sm font-normal tabular-nums text-[#364153]"
                          >
                            {formatINR(getBuildingFinanceFee(row, idx))}
                          </td>
                        ))
                      : fileStatusColumns.map((col) => (
                          <td
                            key={col.key}
                            className="text-right px-4 py-2 text-sm font-normal text-[#364153] border-l border-gray-100"
                          >
                            {formatFileCount(getRowMetric(row, col.key))}
                          </td>
                        ))}
                  </tr>
                );
              })}
              {visibleRows.length === 0 && (
                <tr>
                  <td colSpan={1 + tableMetricColumnCount} className="text-center py-10 text-gray-400 text-sm">
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

    <SeatDetailModal
      isOpen={seatFileModalOpen && Boolean(selectedSeat)}
      onClose={() => {
        setSeatFileModalOpen(false);
        setSelectedSeat(null);
      }}
      selectedSeat={selectedSeat}
      moduleName={moduleName}
      kpiLabel="— File details"
    />
    </Fragment>
  );
}