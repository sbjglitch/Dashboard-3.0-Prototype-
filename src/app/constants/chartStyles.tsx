import React from "react";

/* ============================================================================
 * Shared Chart Styles
 * Single source of truth for the dashboard's chart design system.
 * Imported by every module's graph components AND by GraphPlayground.tsx.
 * ============================================================================
 */

// ─── Design tokens ────────────────────────────────────────────────────────────

export const TEXT_MUTED = "#6b7a99";
export const TEXT_STRONG = "#232f50";
export const TEXT_PRIMARY = "#0c3080";
export const SURFACE_BORDER = "#e8eff4";
export const GRID_STROKE = "#dbe3ee";
export const FONT_SIZE = 12;
export const FONT_FAMILY = "Manrope, system-ui, sans-serif";

// Single sequential color scale used by every chart in the dashboard.
export const CHART_PALETTE = [
  "#0c3080", // 0 — primary deep blue
  "#00b2eb", // 1 — accent sky
  "#00c49f", // 2 — teal/success
  "#7b61ff", // 3 — purple
  "#f5a623", // 4 — amber
  "#e83a7a", // 5 — pink/danger
  "#5c6e93", // 6 — muted slate
] as const;

// Semantic aliases used by series mappings. Mapped onto CHART_PALETTE so a single
// palette change cascades across every chart in the dashboard.
export const SERIES_COLORS = {
  primary: CHART_PALETTE[0],
  sky: CHART_PALETTE[1],
  success: CHART_PALETTE[2],
  purple: CHART_PALETTE[3],
  amber: CHART_PALETTE[4],
  danger: CHART_PALETTE[5],
  muted: CHART_PALETTE[6],
} as const;

// Shared chart configuration — every BarChart/PieChart spreads this.
export const CHART_CONFIG = {
  font: {
    size: FONT_SIZE,
    family: FONT_FAMILY,
    color: TEXT_MUTED,
  },
  layout: {
    cardPadding: 24,
    barChartHeight: 360,
    pieChartSize: 280,
    chartSurfaceMinHeight: 460,
    margin: { top: 24, right: 24, bottom: 36, left: 64 },
  },
  series: {
    lineStrokeWidth: 2,
    areaFillOpacity: 0.18,
  },
  axisLabelStyle: {
    fontSize: FONT_SIZE,
    fill: TEXT_MUTED,
    fontFamily: FONT_FAMILY,
  },
  // sx applied to every chart for consistent grid + tick + legend styling.
  chartSx: {
    "& .MuiChartsGrid-line": {
      stroke: GRID_STROKE,
      strokeWidth: 1,
      strokeDasharray: "4 4",
      opacity: 0.7,
    },
    "& .MuiChartsAxis-tickLabel": {
      fontSize: `${FONT_SIZE}px !important`,
      fill: `${TEXT_MUTED} !important`,
      fontFamily: `${FONT_FAMILY} !important`,
    },
    "& .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
      stroke: GRID_STROKE,
    },
    "& .MuiChartsLegend-label": {
      fontSize: `${FONT_SIZE}px !important`,
      fill: `${TEXT_MUTED} !important`,
    },
  },
} as const;

// ─── Axis presets ─────────────────────────────────────────────────────────────

export const xAxisBand = (
  dataKey: string,
  overrides?: Record<string, unknown>,
) => ({
  scaleType: "band" as const,
  dataKey,
  tickLabelStyle: CHART_CONFIG.axisLabelStyle,
  ...overrides,
});

export const yAxisLinear = (max?: number, overrides?: Record<string, unknown>) => ({
  ...(max != null ? { max } : {}),
  tickLabelStyle: CHART_CONFIG.axisLabelStyle,
  ...overrides,
});

// ─── Base props every chart spreads ───────────────────────────────────────────

export const barChartBaseProps = {
  height: CHART_CONFIG.layout.barChartHeight,
  margin: CHART_CONFIG.layout.margin,
  borderRadius: 4,
  grid: { horizontal: true, vertical: false },
  slots: { legend: () => null },
  sx: CHART_CONFIG.chartSx,
} as const;

export const pieChartBaseProps = {
  width: CHART_CONFIG.layout.pieChartSize,
  height: CHART_CONFIG.layout.pieChartSize,
  slots: { legend: () => null },
  sx: CHART_CONFIG.chartSx,
} as const;

// Default donut series geometry — reused across the dashboard.
export const pieSeriesGeometry = {
  innerRadius: 60,
  outerRadius: 130,
  paddingAngle: 2,
  cornerRadius: 4,
  highlightScope: { fade: "global" as const, highlight: "item" as const },
} as const;

// ─── Global tooltip styling ───────────────────────────────────────────────────
// Tooltips portal outside the chart container, so we standardize them with a
// global stylesheet instead of per-chart sx. Mount this once at the App root.

export function GlobalChartStyles() {
  return (
    <style>{`
      .MuiChartsTooltip-paper,
      .MuiChartsTooltip-root .MuiPaper-root {
        border-radius: 8px !important;
        backdrop-filter: blur(8px);
        background: rgba(255, 255, 255, 0.92) !important;
        box-shadow: 0 8px 24px rgba(10, 13, 18, 0.12) !important;
        border: 1px solid ${SURFACE_BORDER} !important;
        font-family: ${FONT_FAMILY} !important;
        font-size: ${FONT_SIZE}px !important;
      }
      .MuiChartsTooltip-table,
      .MuiChartsTooltip-table * {
        font-size: ${FONT_SIZE}px !important;
        color: ${TEXT_STRONG} !important;
        font-family: ${FONT_FAMILY} !important;
      }
      .MuiChartsTooltip-cell {
        padding: 4px 8px !important;
      }
      .MuiChartsTooltip-mark {
        border-radius: 4px !important;
      }
    `}</style>
  );
}

// ─── Shared legend chip ───────────────────────────────────────────────────────

export type LegendItem = { label: string; color: string };

export function Legend({ items }: { items: LegendItem[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-[4px]"
            style={{ backgroundColor: item.color }}
          />
          <span
            className="font-sans"
            style={{ fontSize: FONT_SIZE, color: TEXT_MUTED }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
