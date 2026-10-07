import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../ui/chart";
import { CHART_PALETTE } from "../../constants/chartStyles";

export interface SeriesConfig {
  dataKey: string;
  name?: string;
  color?: string;
  stackId?: string;
}

export interface DashboardBarChartProps {
  data: any[];
  series: SeriesConfig[];
  xAxisKey?: string;
  height?: number;
  layout?: "horizontal" | "vertical";
  stacked?: boolean;
}



export function DashboardBarChart({
  data,
  series,
  xAxisKey = "label",
  height = 350,
  layout = "horizontal",
  stacked = false
}: DashboardBarChartProps) {
  const chartConfig = series.reduce((acc, s, index) => {
    acc[s.dataKey] = {
      label: s.name || s.dataKey,
      color: s.color || CHART_PALETTE[index % CHART_PALETTE.length],
    };
    return acc;
  }, {} as Record<string, any>);

  return (
    <div style={{ height, width: "100%" }}>
      <ChartContainer config={chartConfig} className="w-full h-full aspect-auto">
        <BarChart accessibilityLayer data={data} layout={layout} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid vertical={layout === "vertical"} horizontal={layout === "horizontal"} strokeDasharray="3 3" />
          {layout === "horizontal" ? (
            <>
              <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
            </>
          ) : (
            <>
              <XAxis type="number" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis dataKey={xAxisKey} type="category" tickLine={false} axisLine={false} tickMargin={10} width={100} />
            </>
          )}
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
          <ChartLegend content={<ChartLegendContent />} />
          {series.map((s, index) => (
            <Bar
              key={s.dataKey}
              dataKey={s.dataKey}
              fill={`var(--color-${s.dataKey})`}
              radius={stacked ? 0 : layout === "horizontal" ? [4, 4, 0, 0] : [0, 4, 4, 0]}
              stackId={stacked ? "a" : s.stackId}
            />
          ))}
        </BarChart>
      </ChartContainer>
    </div>
  );
}
