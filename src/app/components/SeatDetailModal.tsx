import { useState, useMemo, useEffect } from "react";
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

  useEffect(() => {
    setFilePage(1);
  }, [selectedSeat?.id, isOpen]);

  if (!isOpen || !selectedSeat) return null;

  const isMeetingManagement = moduleName === "Meeting Management";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)] w-full max-w-[1200px] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 py-5 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-500 shadow-sm transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
            <div>
              <h2 className="font-sans text-[14px] font-bold text-gray-900 leading-tight">
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
                            ? "font-sans text-[14px] font-semibold text-[#232f50] bg-[#e8eff4] px-2 py-0.5 rounded-md"
                            : "font-sans text-[14px] font-medium text-gray-400 hover:text-gray-600 transition-colors"
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
        {!isMeetingManagement && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 md:px-8 py-6 border-b border-gray-50 shrink-0 bg-white">
            {[
              { label: "Total Files", value: selectedSeat.totalFiles.toLocaleString(), color: "text-[#232f50]", bgColor: "bg-gray-50/50" },
              { label: "Disposed",    value: selectedSeat.disposed.toLocaleString(),   color: "text-[#00a63e]", bgColor: "bg-green-50/30" },
              { label: "In Process",  value: selectedSeat.inProcess.toLocaleString(),  color: "text-[#d08700]", bgColor: "bg-amber-50/30" },
              { label: "Rejected",    value: selectedSeat.rejected.toLocaleString(),   color: "text-[#e7000b]", bgColor: "bg-red-50/30" },
              { label: "Returned",    value: selectedSeat.returned.toLocaleString(),   color: "text-[#f54900]", bgColor: "bg-orange-50/30" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`flex-1 border border-gray-100 rounded-2xl p-4 flex flex-col gap-1.5 ${stat.bgColor} transition-all hover:shadow-sm`}
              >
                <p className="font-sans text-[14px] font-medium text-gray-500">{stat.label}</p>
                <p className={`font-sans text-[14px] font-bold leading-tight ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Sub-header */}
        {!isMeetingManagement && (
          <div className="flex items-center justify-between px-4 md:px-8 py-4 shrink-0 bg-[#fefefe] border-b border-gray-50">
            <div className="flex items-center gap-3">
              {selectedSeat.designation && (
                <span className="inline-flex items-center px-3 py-1 rounded-lg font-sans text-[14px] font-semibold bg-[#232f50] text-white shadow-sm">
                  {selectedSeat.designation}
                </span>
              )}
              <span className="font-sans text-[14px] font-medium text-gray-400">
                Showing <span className="text-gray-700">{pagedFiles.length}</span> of <span className="text-gray-700">{allFiles.length}</span> files
              </span>
            </div>
            <ExportButton variant="dark" onClick={() => console.log("Exporting...")} className="!h-10 shadow-sm" />
          </div>
        )}

        {/* File table */}
        <div className="custom-scrollbar flex-1 overflow-auto px-4 pb-2 md:px-8">
          <div className="overflow-hidden rounded-lg border border-[#E8EFF4] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 z-10 border-y border-gray-200">
                {isMeetingManagement && (
                  <>
                    <tr className="border-b border-gray-200">
                      <th colSpan={7} className="py-1 px-4 text-center font-sans text-[14px] text-gray-800 font-medium">
                        Period from 01/01/2026 to 31/12/2026
                      </th>
                    </tr>
                  </>
                )}
                <tr className="border-b border-gray-200">
                  <th className={`min-w-[64px] border-r border-gray-200 bg-[#f9fafb] py-3 font-sans text-[14px] font-semibold text-[#5c6e93] ${isMeetingManagement ? "px-4 text-center" : "pl-8 pr-4 text-left"}`}>
                    Sl.No.
                  </th>
                  {isMeetingManagement ? (
                    <>
                      <th className="min-w-[180px] border-l border-gray-200 bg-[#f1f5f9] px-4 py-3 text-center font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Meeting Notice No. and Date.
                      </th>
                      <th className="min-w-[140px] border-l border-gray-200 bg-[#f0fdf4] px-4 py-3 text-center font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Meeting Date and Time
                      </th>
                      <th className="min-w-[140px] border-l border-gray-200 bg-[#fffbeb] px-4 py-3 text-center font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Meeting type<br />(Ordinary/Special/Urgent)
                      </th>
                      <th className="min-w-[180px] border-l border-gray-200 bg-[#fef2f2] px-4 py-3 text-center font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Presidency with designation
                      </th>
                      <th className="min-w-[120px] border-l border-gray-200 bg-[#f5f3ff] px-4 py-3 text-center font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Status
                      </th>
                      <th className="min-w-[140px] border-l border-gray-200 bg-[#ecfeff] px-4 py-3 text-center font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Remarks
                      </th>
                    </>
                  ) : (
                    <>
                      <th className="min-w-[160px] border-l border-gray-200 bg-[#f1f5f9] px-4 py-3 text-left font-sans text-[14px] font-semibold text-[#5c6e93]">
                        File number
                      </th>
                      <th className="min-w-[120px] border-l border-gray-200 bg-[#f0fdf4] px-4 py-3 text-left font-sans text-[14px] font-semibold text-[#5c6e93] whitespace-nowrap">
                        File date
                      </th>
                      <th className="min-w-[180px] border-l border-gray-200 bg-[#fffbeb] px-4 py-3 text-left font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Applicant
                      </th>
                      <th className="min-w-[140px] border-l border-gray-200 bg-[#fef2f2] py-3 pl-4 pr-8 text-left font-sans text-[14px] font-semibold text-[#5c6e93]">
                        Inward No.
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {pagedFiles.map((file, index) => {
                  const stripe = index % 2 === 0 ? "bg-white" : "bg-[#F6F9FB]";
                  
                  // Mock generation for Meeting Management
                  const hash = (file.slNo * 12345) % 100;
                  const types = ["Ordinary", "Special", "Urgent"];
                  const type = types[hash % 3];
                  const statuses = ["Minutes Approved", "Cancelled", "Minutes Not Approved"];
                  const status = statuses[hash % 3];
                  const presidencies = ["K. Janardanan, Chairperson", "NA", "K. Haseena, Vice Chairperson"];
                  const presidency = presidencies[hash % 3];
                  const remarks = status === "Cancelled" ? "Holiday declared" : "....";
                  const noticeNo = `${file.slNo + 24}/2026/`;
                  const noticeDate = `${file.fileDate}`;
                  const meetingDateTime = `${file.fileDate}`;

                  return (
                    <tr
                      key={file.slNo}
                      className={`h-12 border-b border-gray-100 ${stripe} hover:bg-gray-50/80`}
                    >
                      <td className={`border-r border-gray-100 py-2 font-sans text-[14px] font-medium text-[#5c6e93] ${isMeetingManagement ? "px-4 text-center" : "pl-8 pr-4"}`}>
                        {file.slNo + (filePage - 1) * FILES_PER_PAGE}
                      </td>
                      {isMeetingManagement ? (
                        <>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-center">
                            <span className="text-[#00b2eb] hover:underline cursor-pointer">{noticeNo}</span>
                            <br />
                            <span className="text-[#232f50]">{noticeDate}</span>
                          </td>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-[#232f50] text-center">
                            {meetingDateTime}
                          </td>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-center">
                            <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                              type === 'Ordinary' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                              type === 'Special' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                              'bg-orange-50 text-orange-700 border border-orange-200'
                            }`}>
                              {type}
                            </span>
                          </td>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-[#232f50] text-center">
                            {presidency}
                          </td>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-[#232f50] text-center">
                            {status === "Minutes Approved" ? (
                              <span className="text-[#00b2eb] hover:underline cursor-pointer">{status}</span>
                            ) : (
                              <span>{status}</span>
                            )}
                          </td>
                          <td className="border-l border-gray-100 py-2 px-4 font-sans text-[14px] font-medium text-[#232f50] text-center">
                            {remarks}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-[#232f50]">
                            {file.fileNo}
                          </td>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-[#232f50]">
                            {file.fileDate}
                          </td>
                          <td className="border-l border-gray-100 px-4 py-2 font-sans text-[14px] font-medium text-[#232f50]">
                            {file.applicant}
                          </td>
                          <td className="border-l border-gray-100 py-2 pl-4 pr-8 font-sans text-[14px] font-medium text-[#232f50]">
                            {file.inwardNo}
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
                {pagedFiles.length === 0 && (
                  <tr>
                    <td colSpan={isMeetingManagement ? 7 : 5} className="py-10 text-center font-sans text-[14px] font-medium text-gray-400">
                      {isMeetingManagement ? "No meetings found for this local body." : "No files found for this seat."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* File Pagination */}
        {totalFilePages > 1 && (
          <div className="flex items-center justify-between px-4 md:px-8 py-4 border-t border-gray-50 shrink-0 bg-white">
            <span className="font-sans text-[14px] font-medium text-gray-400">
              Page <span className="text-gray-700 font-semibold">{filePage}</span> of <span className="text-gray-700 font-semibold">{totalFilePages}</span>
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilePage((p) => Math.max(1, p - 1))}
                disabled={filePage === 1}
                className="px-4 py-2 font-sans text-[14px] font-medium rounded-xl border border-gray-200 bg-white disabled:opacity-30 hover:bg-gray-50 text-gray-700 transition-all shadow-sm active:scale-95"
              >
                Previous
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: Math.min(totalFilePages, 5) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setFilePage(page)}
                      className={`w-9 h-9 rounded-xl font-sans text-[14px] font-semibold transition-all ${
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
                className="px-4 py-2 font-sans text-[14px] font-medium rounded-xl border border-gray-200 bg-white disabled:opacity-30 hover:bg-gray-50 text-gray-700 transition-all shadow-sm active:scale-95"
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
