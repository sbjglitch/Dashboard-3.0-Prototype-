import { useState, useMemo } from "react";
import { ChevronRight, X, ArrowLeft } from "lucide-react";
import { ExportButton } from "./ExportButton";
import { TableRow, getAncestors, generateFiles } from "../data/tableData";

interface SeatDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSeat: TableRow | null;
  moduleName: string;
  kpiLabel?: string;
}

export function SeatDetailModal({
  isOpen,
  onClose,
  selectedSeat,
  moduleName,
  kpiLabel = "Total Files"
}: SeatDetailModalProps) {
  const [filePage, setFilePage] = useState(1);
  const FILES_PER_PAGE = 10;

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

  if (!isOpen || !selectedSeat) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)] w-full max-w-[1100px] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 shadow-sm transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                {moduleName} {kpiLabel}
              </h2>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 mt-1 flex-wrap">
                {seatAncestors.map((ancestor, idx) => {
                  const isLast = idx === seatAncestors.length - 1;
                  return (
                    <span key={ancestor.id} className="flex items-center gap-1.5">
                      <span
                        className={
                          isLast
                            ? "text-xs font-bold text-[#232f50] bg-[#e8eff4] px-2 py-0.5 rounded-md"
                            : "text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                        }
                      >
                        {ancestor.name}
                      </span>
                      {!isLast && (
                        <ChevronRight size={12} className="text-gray-300" strokeWidth={3} />
                      )}
                    </span>
                  );
                })}
              </nav>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 text-gray-500 transition-all hover:rotate-90"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-5 gap-4 px-8 py-6 border-b border-gray-50 shrink-0 bg-white">
          {[
            { label: "Total Files", value: selectedSeat.totalFiles.toLocaleString(), color: "text-[#232f50]", bgColor: "bg-gray-50/50" },
            { label: "Disposed", value: selectedSeat.disposed.toLocaleString(), color: "text-[#00a63e]", bgColor: "bg-green-50/30" },
            { label: "In Process", value: selectedSeat.inProcess.toLocaleString(), color: "text-[#d08700]", bgColor: "bg-amber-50/30" },
            { label: "Rejected", value: selectedSeat.rejected.toLocaleString(), color: "text-[#e7000b]", bgColor: "bg-red-50/30" },
            { label: "Returned", value: selectedSeat.returned.toLocaleString(), color: "text-[#f54900]", bgColor: "bg-orange-50/30" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`flex-1 border border-gray-100 rounded-2xl p-4 flex flex-col gap-1.5 ${stat.bgColor} transition-all hover:shadow-sm`}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
              <p className={`text-2xl font-black leading-tight ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Sub-header */}
        <div className="flex items-center justify-between px-8 py-4 shrink-0 bg-[#fefefe] border-b border-gray-50">
          <div className="flex items-center gap-3">
            {selectedSeat.designation && (
              <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-[#232f50] text-white shadow-sm">
                {selectedSeat.designation}
              </span>
            )}
            <span className="text-sm font-semibold text-gray-400">
              Showing <span className="text-gray-700">{pagedFiles.length}</span> of <span className="text-gray-700">{allFiles.length}</span> files
            </span>
          </div>
          <ExportButton variant="dark" onClick={() => console.log("Exporting...")} className="!h-10 shadow-sm" />
        </div>

        {/* File Table */}
        <div className="overflow-auto flex-1 custom-scrollbar">
          <table className="w-full text-sm border-separate border-spacing-0">
            <thead className="bg-gray-50/80 backdrop-blur-md sticky top-0 z-10">
              <tr>
                <th className="text-left pl-8 pr-4 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Sl No.</th>
                <th className="text-left px-4 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">File No.</th>
                <th className="text-left px-4 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">File Date</th>
                <th className="text-left pl-4 pr-8 py-4 text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">Inward No.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {pagedFiles.map((file, index) => (
                <tr
                  key={file.slNo}
                  className="group hover:bg-gray-50/50 transition-colors h-14"
                >
                  <td className="pl-8 pr-4 py-3 text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">
                    {file.slNo + (filePage - 1) * FILES_PER_PAGE}
                  </td>
                  <td className="px-4 py-3 text-sm font-bold text-[#232f50] font-mono tracking-tight">
                    {file.fileNo}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-600">
                    {file.fileDate}
                  </td>
                  <td className="pl-4 pr-8 py-3 text-sm font-medium text-gray-500 font-mono">
                    {file.inwardNo}
                  </td>
                </tr>
              ))}
              {pagedFiles.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-20 text-gray-400 font-semibold italic">
                    No files found for this seat.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* File Pagination */}
        {totalFilePages > 1 && (
          <div className="flex items-center justify-between px-8 py-4 border-t border-gray-50 shrink-0 bg-white">
            <span className="text-sm font-bold text-gray-400">
              Page <span className="text-gray-700">{filePage}</span> of <span className="text-gray-700">{totalFilePages}</span>
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilePage((p) => Math.max(1, p - 1))}
                disabled={filePage === 1}
                className="px-4 py-2 text-xs rounded-xl border border-gray-200 bg-white disabled:opacity-30 hover:bg-gray-50 font-bold text-gray-700 transition-all shadow-sm active:scale-95"
              >
                Previous
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: Math.min(totalFilePages, 5) }, (_, i) => {
                  const page = i + 1; // Simplified for brevity in prototype
                  return (
                    <button
                      key={page}
                      onClick={() => setFilePage(page)}
                      className={`w-9 h-9 rounded-xl text-xs font-black transition-all ${
                        filePage === page
                          ? "bg-[#232f50] text-white shadow-md shadow-[#232f50]/20"
                          : "border border-gray-100 bg-white text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setFilePage((p) => Math.min(totalFilePages, p + 1))}
                disabled={filePage === totalFilePages}
                className="px-4 py-2 text-xs rounded-xl border border-gray-200 bg-white disabled:opacity-30 hover:bg-gray-50 font-bold text-gray-700 transition-all shadow-sm active:scale-95"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
