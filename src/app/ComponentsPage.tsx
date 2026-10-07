import React from "react";
import { FileStatusKPICard } from "./components/FileStatusKPICard";
import { DetailsModal } from "./components/DetailsModal";
import { SeatDetailModal } from "./components/SeatDetailModal";
import { DashboardTabs } from "./components/DashboardTabs";
import { DashboardBarChart } from "./components/charts/DashboardBarChart";
import { DashboardPieChart } from "./components/charts/DashboardPieChart";
import { DashboardLineChart } from "./components/charts/DashboardLineChart";
import { DashboardAreaChart } from "./components/charts/DashboardAreaChart";
import { mockData } from "./data/tableData";

export default function ComponentsPage() {
  const dummySeat = mockData.find(row => row.isSeat) || null;

  return (
    <div className="min-h-screen bg-[#f2f6ff] p-8">
      <div className="max-w-[1718px] mx-auto">
        <h1 className="font-sans font-bold text-[24px] text-[#232f50] mb-6">Components Library</h1>
        
        <div className="flex flex-col gap-8">
          {/* FileStatusKPICard Component Section */}
          <div className="bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4] p-8 flex flex-col gap-6">
            <div className="border-b border-[#e8eff4] pb-4">
              <h2 className="font-sans font-bold text-[20px] text-[#232f50]">FileStatusKPICard</h2>
              <p className="font-sans text-[#5c6e93] mt-2">
                A reusable card component designed to display key performance indicators (KPIs) like file counts, meeting statistics, and registration numbers. It supports primary and secondary values, percentages, and custom colors.
              </p>
              <div className="font-sans text-[#5c6e93] mt-3 flex flex-wrap gap-2 items-center">
                <span className="font-semibold text-[#232f50] text-[14px]">Used in Modules:</span>
                <span className="bg-[#f0f4fb] text-[#09327b] text-[12px] font-medium px-3 py-1 rounded-full">All Module</span>
                <span className="bg-[#f0f4fb] text-[#09327b] text-[12px] font-medium px-3 py-1 rounded-full">Meeting Management</span>
                <span className="bg-[#f0f4fb] text-[#09327b] text-[12px] font-medium px-3 py-1 rounded-full">Civil Registration</span>
                <span className="bg-[#f0f4fb] text-[#09327b] text-[12px] font-medium px-3 py-1 rounded-full">Public Grievance and complaints</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Example 1: Full layout */}
              <FileStatusKPICard
                label="Total Received"
                value="51,251"
                subValue="25,251"
                subLabel="Citizen Files"
                otherValue="26,000"
                otherLabel="Other Files"
                color="bg-[#1ebe72]"
              />
              {/* Example 2: With Percentage */}
              <FileStatusKPICard
                label="Disposed"
                value="21,251"
                subValue="13,657"
                subLabel="Citizen Files"
                otherValue="7,594"
                otherLabel="Other Files"
                percentage="41.5%"
                color="bg-[#009fd2]"
              />
              {/* Example 3: Minimal usage */}
              <FileStatusKPICard
                label="All meetings"
                value="51,251"
                color="bg-[#7b61ff]"
                hideInfoIcon={true}
              />
            </div>
          </div>

          {/* DetailsModal Component Section */}
          <div className="bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4] p-8 flex flex-col gap-6">
            <div className="border-b border-[#e8eff4] pb-4">
              <h2 className="font-sans font-bold text-[20px] text-[#232f50]">DetailsModal</h2>
              <p className="font-sans text-[#5c6e93] mt-2">
                A comprehensive modal for displaying hierarchical data (districts, local bodies, seats). Supports multiple views including file KPIs, property tax DCB, and finance management. Note: These previews are horizontally scrollable to maintain their original large layouts.
              </p>
              <div className="font-sans text-[#5c6e93] mt-3 flex flex-wrap gap-2 items-center">
                <span className="font-semibold text-[#232f50] text-[14px]">Used in Modules:</span>
                <span className="bg-[#f0f4fb] text-[#09327b] text-[12px] font-medium px-3 py-1 rounded-full">All Module</span>
                <span className="bg-[#f0f4fb] text-[#09327b] text-[12px] font-medium px-3 py-1 rounded-full">Meeting Management</span>
                <span className="bg-[#f0f4fb] text-[#09327b] text-[12px] font-medium px-3 py-1 rounded-full">Finance Management</span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">1. Hierarchy Table View (File Status)</h3>
                <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                  <div className="min-w-[1000px]">
                    <DetailsModal isOpen={true} onClose={() => {}} inlinePreview={true} />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">2. Finance Module View</h3>
                <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                  <div className="min-w-[1000px]">
                    <DetailsModal isOpen={true} onClose={() => {}} isFinanceModule={true} inlinePreview={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SeatDetailModal Component Section */}
          <div className="bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4] p-8 flex flex-col gap-6">
            <div className="border-b border-[#e8eff4] pb-4">
              <h2 className="font-sans font-bold text-[20px] text-[#232f50]">SeatDetailModal</h2>
              <p className="font-sans text-[#5c6e93] mt-2">
                A drill-down modal specifically for displaying seat-level file details with pagination and export capabilities.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                <div className="min-w-[1000px]">
                  <SeatDetailModal isOpen={true} onClose={() => {}} selectedSeat={dummySeat} moduleName="Building Permissions" inlinePreview={true} />
                </div>
              </div>
            </div>
          </div>

          {/* DashboardTabs Component Section */}
          <div className="bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4] p-8 flex flex-col gap-6">
            <div className="border-b border-[#e8eff4] pb-4">
              <h2 className="font-sans font-bold text-[20px] text-[#232f50]">DashboardTabs</h2>
              <p className="font-sans text-[#5c6e93] mt-2">
                A unified, reusable tab component used across the dashboard to standardise tab implementations. Supports horizontal and vertical orientations, as well as sizes.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">1. Horizontal (Default)</h3>
                <DashboardTabs
                  tabs={[
                    { id: "tab1", label: "General" },
                    { id: "tab2", label: "Settings" },
                    { id: "tab3", label: "Advanced" }
                  ]}
                  activeTabId="tab1"
                  onChange={() => {}}
                />
              </div>

              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">2. Small Size</h3>
                <DashboardTabs
                  size="sm"
                  tabs={[
                    { id: "daily", label: "Daily" },
                    { id: "weekly", label: "Weekly" },
                    { id: "monthly", label: "Monthly" }
                  ]}
                  activeTabId="daily"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>

          {/* Charts Library Section */}
          <div className="bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4] p-8 flex flex-col gap-6">
            <div className="border-b border-[#e8eff4] pb-4">
              <h2 className="font-sans font-bold text-[20px] text-[#232f50]">Charts Library</h2>
              <p className="font-sans text-[#5c6e93] mt-2">
                Standardized charting components built on Shadcn UI (Recharts). They share a unified design system, typography, and color palette.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Bar Chart */}
              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">Bar Chart</h3>
                <DashboardBarChart
                  data={[
                    { label: "Jan", revenue: 4000, profit: 2400 },
                    { label: "Feb", revenue: 3000, profit: 1398 },
                    { label: "Mar", revenue: 2000, profit: 9800 },
                    { label: "Apr", revenue: 2780, profit: 3908 },
                  ]}
                  series={[
                    { dataKey: "revenue", name: "Revenue", color: "#009fd2" },
                    { dataKey: "profit", name: "Profit", color: "#1ebe72" },
                  ]}
                  height={300}
                />
              </div>

              {/* Line Chart */}
              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">Line Chart</h3>
                <DashboardLineChart
                  data={[
                    { label: "Week 1", users: 400, sessions: 240 },
                    { label: "Week 2", users: 300, sessions: 139 },
                    { label: "Week 3", users: 200, sessions: 980 },
                    { label: "Week 4", users: 278, sessions: 390 },
                  ]}
                  series={[
                    { dataKey: "users", name: "Users", color: "#7b61ff" },
                    { dataKey: "sessions", name: "Sessions", color: "#ff9c00" },
                  ]}
                  height={300}
                />
              </div>

              {/* Area Chart */}
              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">Area Chart (Stacked)</h3>
                <DashboardAreaChart
                  data={[
                    { label: "Q1", organic: 4000, paid: 2400 },
                    { label: "Q2", organic: 3000, paid: 1398 },
                    { label: "Q3", organic: 2000, paid: 9800 },
                    { label: "Q4", organic: 2780, paid: 3908 },
                  ]}
                  series={[
                    { dataKey: "organic", name: "Organic Search", color: "#1ebe72" },
                    { dataKey: "paid", name: "Paid Search", color: "#ff3b3b" },
                  ]}
                  stacked={true}
                  height={300}
                />
              </div>

              {/* Pie Chart */}
              <div>
                <h3 className="font-sans font-semibold text-[#232f50] mb-3">Pie Chart</h3>
                <DashboardPieChart
                  data={[
                    { label: "Desktop", value: 400, color: "#009fd2" },
                    { label: "Mobile", value: 300, color: "#1ebe72" },
                    { label: "Tablet", value: 300, color: "#ff9c00" },
                  ]}
                  height={300}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
