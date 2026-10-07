import React from "react";
import { Pie, PieChart, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../ui/chart";
import { CHART_PALETTE } from "../../constants/chartStyles";

export interface PieDataConfig {
  label: string;
  value: number;
  color?: string;
}

export interface DashboardPieChartProps {
  data: PieDataConfig[];
  height?: number;
  innerRadius?: number | string;
  outerRadius?: number | string;
  showLegend?: boolean;
}



export function DashboardPieChart({
  data,
  height = 300,
  innerRadius = 0,
  outerRadius = "80%",
  showLegend = true
}: DashboardPieChartProps) {
  const chartConfig = data.reduce((acc, d, index) => {
    // Generate a unique safe key for config map
    const key = d.label.toLowerCase().replace(/[^a-z0-9]/g, "_") || `item_${index}`;
    acc[key] = {
      label: d.label,
      color: d.color || CHART_PALETTE[index % CHART_PALETTE.length],
    };
    return acc;
  }, {} as Record<string, any>);

  const chartData = data.map((d, index) => {
    const key = d.label.toLowerCase().replace(/[^a-z0-9]/g, "_") || `item_${index}`;
    return {
      ...d,
      fill: `var(--color-${key})`
    };
  });

  return (
    <div style={{ height, width: "100%" }}>
      <ChartContainer config={chartConfig} className="w-full h-full aspect-auto mx-auto pb-0">
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="label"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            strokeWidth={2}
          />
          {showLegend && <ChartLegend content={<ChartLegendContent />} className="-translate-y-2 flex-wrap gap-2" />}
        </PieChart>
      </ChartContainer>
    </div>
  );
}
