import React from "react";
import { DashboardBarChart } from "./components/charts/DashboardBarChart";
import { DashboardPieChart } from "./components/charts/DashboardPieChart";
import { DashboardLineChart } from "./components/charts/DashboardLineChart";
import { DashboardAreaChart } from "./components/charts/DashboardAreaChart";
import { CHART_PALETTE } from "./constants/chartStyles";

const SAMPLE_BAR_DATA = [
  { label: "Jan", value: 400 },
  { label: "Feb", value: 300 },
  { label: "Mar", value: 550 },
  { label: "Apr", value: 450 },
];

const SAMPLE_PIE_DATA = [
  { label: "Approved", value: 45 },
  { label: "Pending", value: 25 },
  { label: "Rejected", value: 30 },
];

const SAMPLE_LINE_DATA = [
  { label: "Week 1", value: 120 },
  { label: "Week 2", value: 250 },
  { label: "Week 3", value: 180 },
  { label: "Week 4", value: 320 },
];

const SAMPLE_AREA_DATA = [
  { label: "Q1", value: 1500 },
  { label: "Q2", value: 2300 },
  { label: "Q3", value: 1800 },
  { label: "Q4", value: 3100 },
];

export default function GraphPlayground() {
  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-12 bg-white min-h-screen">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-[#232f50]">Graph Playground</h1>
        <p className="text-[#5c6e93]">Showcase of standardized Shadcn Recharts wrappers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-[#e8eff4] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#232f50]">Dashboard Bar Chart</h2>
          <div className="h-[300px]">
            <DashboardBarChart
              data={SAMPLE_BAR_DATA}
              xAxisKey="label"
              height={300}
              series={[{ dataKey: "value", name: "Count" }]}
            />
          </div>
        </div>

        <div className="border border-[#e8eff4] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#232f50]">Dashboard Pie Chart</h2>
          <div className="h-[300px]">
            <DashboardPieChart
              data={SAMPLE_PIE_DATA}
              height={300}
            />
          </div>
        </div>

        <div className="border border-[#e8eff4] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#232f50]">Dashboard Line Chart</h2>
          <div className="h-[300px]">
            <DashboardLineChart
              data={SAMPLE_LINE_DATA}
              xAxisKey="label"
              height={300}
              series={[{ dataKey: "value", name: "Users", color: CHART_PALETTE[2] }]}
            />
          </div>
        </div>

        <div className="border border-[#e8eff4] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#232f50]">Dashboard Area Chart</h2>
          <div className="h-[300px]">
            <DashboardAreaChart
              data={SAMPLE_AREA_DATA}
              xAxisKey="label"
              height={300}
              series={[{ dataKey: "value", name: "Revenue", color: CHART_PALETTE[3] }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
