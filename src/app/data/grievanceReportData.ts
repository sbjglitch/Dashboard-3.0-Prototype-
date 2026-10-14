export const GRIEVANCE_STATUSES = [
  "Approved",
  "Applied",
  "Verified",
  "Recommended",
  "Recommended for enquiry",
  "Returned",
  "Returned to citizen",
  "Rejected",
] as const;

export type GrievanceStatus = (typeof GRIEVANCE_STATUSES)[number];

export const GRIEVANCE_CATEGORIES = ["Complaint", "Grievance"] as const;
export type GrievanceCategory = (typeof GRIEVANCE_CATEGORIES)[number];

export const GRIEVANCE_TYPES = [
  "Trees on private land",
  "Waste collection",
  "Street light not working",
  "Drinking water supply",
  "Road damage",
  "Drainage blockage",
  "Stray dog menace",
  "Unauthorised construction",
  "Public sanitation",
] as const;

export const TIME_PERIODS = [
  "All",
  "This month",
  "This quarter",
  "This year",
  "Last year",
  "Custom range",
] as const;

export const CUSTOM_RANGE = "Custom range";

export interface GrievanceRow {
  id: string;
  /** ISO yyyy-mm-dd — what date filtering compares against. */
  iso: string;
  day: string;
  year: string;
  district: string;
  localBody: string;
  localBodyType: string;
  ward: string;
  zone: string;
  category: GrievanceCategory;
  type: string;
  status: GrievanceStatus;
}

const DISTRICTS = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam",
  "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram",
  "Kozhikode", "Wayanad", "Kannur", "Kasaragod",
];

const LOCAL_BODIES: [string, string][] = [
  ["Thiruvananthapuram", "Corporation"],
  ["Kollam", "Corporation"],
  ["Kochi", "Corporation"],
  ["Thrissur", "Corporation"],
  ["Kozhikode", "Corporation"],
  ["Adoor", "Municipality"],
  ["Chengannur", "Municipality"],
  ["Pandalam", "Municipality"],
  ["Ezhamkulam", "Grama Panchayat"],
  ["Kadampanad", "Grama Panchayat"],
  ["Mallappally", "Grama Panchayat"],
];

const WARDS = [
  "Ezhamkulam", "Pandalam", "Kadampanad", "Enadimangalam",
  "Kodumon", "Pallickal", "Thuvayoor", "Kalanjoor",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildRows(count: number): GrievanceRow[] {
  const rand = mulberry32(20261013);
  const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(rand() * arr.length)];
  const between = (min: number, max: number) => min + Math.floor(rand() * (max - min + 1));

  return Array.from({ length: count }, (_, i) => {
    const [localBody, localBodyType] = pick(LOCAL_BODIES);
    const monthIdx = between(0, 11);
    const dayNum = between(1, 28);
    const yearNum = between(2024, 2026);

    return {
      id: `pgr-${i + 1}`,
      iso: `${yearNum}-${String(monthIdx + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`,
      day: `${String(dayNum).padStart(2, "0")} ${MONTHS[monthIdx]}`,
      year: String(yearNum),
      district: pick(DISTRICTS),
      localBody,
      localBodyType,
      ward: pick(WARDS),
      zone: String(between(1, 24)).padStart(2, "0"),
      category: pick(GRIEVANCE_CATEGORIES),
      type: pick(GRIEVANCE_TYPES),
      status: pick(GRIEVANCE_STATUSES),
    };
  });
}

export const GRIEVANCE_ROWS: GrievanceRow[] = buildRows(56);

/**
 * Badge palette per status. Figma's own text colours sit at 2.2–3.5:1 on their
 * tints, so the hue is kept and the ink darkened to clear 4.5:1.
 */
export const STATUS_STYLES: Record<GrievanceStatus, { bg: string; border: string; text: string }> = {
  "Approved": { bg: "#e9f9f1", border: "#bcecd5", text: "#0f6b42" },
  "Applied": { bg: "#e5f7fd", border: "#b2e8f9", text: "#07607e" },
  "Verified": { bg: "#fdebf2", border: "#f6b0ca", text: "#b51e57" },
  "Recommended": { bg: "#f2e8f9", border: "#d8b9ec", text: "#6b14a3" },
  "Recommended for enquiry": { bg: "#f2e8f9", border: "#d8b9ec", text: "#6b14a3" },
  "Returned": { bg: "#fef8ec", border: "#fbeac6", text: "#7a5c1f" },
  "Returned to citizen": { bg: "#fef8ec", border: "#fbeac6", text: "#7a5c1f" },
  "Rejected": { bg: "#feedee", border: "#fccacd", text: "#b3313a" },
};
