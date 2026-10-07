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


