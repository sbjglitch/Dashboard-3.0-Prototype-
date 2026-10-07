import React from "react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../ui/chart";
import { CHART_PALETTE } from "../../constants/chartStyles";

export interface SeriesConfig {
  dataKey: string;
  name?: string;
  color?: string;
}

export interface DashboardLineChartProps {
  data: any[];
  series: SeriesConfig[];
  xAxisKey?: string;
  height?: number;
}


export function DashboardLineChart({
  data,
  series,
  xAxisKey = "label",
  height = 350,
}: DashboardLineChartProps) {
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
        <LineChart accessibilityLayer data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
          <ChartLegend content={<ChartLegendContent />} />
          {series.map((s, index) => (
            <Line
              key={s.dataKey}
              dataKey={s.dataKey}
              type="monotone"
              stroke={`var(--color-${s.dataKey})`}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ChartContainer>
    </div>
  );
}
