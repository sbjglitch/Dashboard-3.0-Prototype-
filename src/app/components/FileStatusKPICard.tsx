import React from "react";
import { Check, CircleAlert, FileDown, Hourglass } from "lucide-react";
import { KpiCardV3 } from "../v3/KpiCardV3";

export interface FileStatusKPICardProps {
  label: string;
  value: string;
  subValue?: string;
  subLabel?: string;
  otherValue?: string;
  otherLabel?: string;
  percentage?: string;
  color: string;
  hideInfoIcon?: boolean;
  onClick?: () => void;
}

const ICON_MAP: Record<string, typeof FileDown> = {
  "Total Files": FileDown,
  "Total Received": FileDown,
  "Disposed": Check,
  "Disposed Files": Check,
  "Under Process": Hourglass,
  "Delayed": CircleAlert,
};

export function FileStatusKPICard({
  label,
  value,
  subValue,
  subLabel,
  otherValue,
  otherLabel,
  percentage,
  color,
  onClick,
}: FileStatusKPICardProps) {
  const Icon = ICON_MAP[label] || FileDown;
  const metrics = [];
  if (subLabel && subValue) {
    metrics.push({ label: subLabel, value: subValue, dot: "#45c486" });
  }
  if (otherLabel && otherValue) {
    metrics.push({ label: otherLabel, value: otherValue, dot: "#e8b84a" });
  }

  return (
    <KpiCardV3
      label={label}
      value={value}
      Icon={Icon}
      color={color}
      badge={percentage}
      metrics={metrics.length > 0 ? metrics : undefined}
      onDetail={onClick}
      actionLabel="See in Detail"
    />
  );
}
