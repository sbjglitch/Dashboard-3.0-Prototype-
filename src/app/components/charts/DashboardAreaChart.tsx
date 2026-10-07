import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "../ui/chart";
import { CHART_PALETTE } from "../../constants/chartStyles";

export interface SeriesConfig {
  dataKey: string;
  name?: string;
  color?: string;
  stackId?: string;
}

export interface DashboardAreaChartProps {
  data: any[];
  series: SeriesConfig[];
  xAxisKey?: string;
  height?: number;
  stacked?: boolean;
}


export function DashboardAreaChart({
  data,
  series,
  xAxisKey = "label",
  height = 350,
  stacked = false
}: DashboardAreaChartProps) {
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
        <AreaChart accessibilityLayer data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey={xAxisKey} tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            {series.map((s) => (
              <linearGradient key={`fill-${s.dataKey}`} id={`fill-${s.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`var(--color-${s.dataKey})`} stopOpacity={0.8} />
                <stop offset="95%" stopColor={`var(--color-${s.dataKey})`} stopOpacity={0.1} />
              </linearGradient>
            ))}
          </defs>
          {series.map((s, index) => (
            <Area
              key={s.dataKey}
              dataKey={s.dataKey}
              type="monotone"
              fill={`url(#fill-${s.dataKey})`}
              stroke={`var(--color-${s.dataKey})`}
              stackId={stacked ? "a" : s.stackId}
            />
          ))}
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
