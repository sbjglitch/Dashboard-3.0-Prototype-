export const OCCUPANCY_TYPES = [
  "Residential",
  "Commercial",
  "Educational",
  "Industrial",
  "Assembly",
  "Institutional",
  "Mercantile",
  "Storage",
] as const;

export type OccupancyType = (typeof OCCUPANCY_TYPES)[number];

export interface BuildingPermitRow {
  id: string;
  localBody: string;
  localBodyType: string;
  fileNo: string;
  applicationNo: string;
  applicantName: string;
  applicantAddress: string;
  surveyNo: string;
  village: string;
  ward: string;
  occupancy: OccupancyType;
  noOfFloors: number;
  builtUpArea: number;
  floorArea: number;
  fsi: number;
  permitNo: string;
  permitDate: string;
  plotArea: number;
  heightOfBuilding: number;
  noOfBlocks: number;
  hasParkingPlot: boolean;
  hasNOCs: boolean;
}

const LOCAL_BODIES: [string, string][] = [
  ["Thiruvananthapuram", "Corporation"],
  ["Kollam", "Corporation"],
  ["Kochi", "Corporation"],
  ["Thrissur", "Corporation"],
  ["Kozhikode", "Corporation"],
  ["Alappuzha", "Municipality"],
  ["Kottayam", "Municipality"],
  ["Palakkad", "Municipality"],
  ["Kannur", "Municipality"],
  ["Adoor", "Municipality"],
  ["Chengannur", "Municipality"],
  ["Ezhamkulam", "Grama Panchayat"],
  ["Kadampanad", "Grama Panchayat"],
  ["Mallappally", "Grama Panchayat"],
];

const VILLAGES = [
  "Ezhamkulam", "Pandalam", "Kadampanad", "Enadimangalam",
  "Kodumon", "Pallickal", "Thuvayoor", "Kalanjoor",
];

const APPLICANTS: [string, string][] = [
  ["Sarath Babu John", "Puliannal House, Puthumala P.O"],
  ["Anjali Menon", "Thekkethil House, Adoor P.O"],
  ["Rajesh Kumar", "Vadakkeveedu, Kodumon P.O"],
  ["Fathima Beevi", "Noorjahan Manzil, Pandalam P.O"],
  ["Thomas Mathew", "Kalapurackal House, Kottayam P.O"],
  ["Priya Nair", "Sreenilayam, Pallickal P.O"],
  ["Abdul Rahman", "Hidayath Villa, Kalanjoor P.O"],
  ["Lakshmi Devi", "Lakshmi Bhavan, Thuvayoor P.O"],
  ["Vishnu Prasad", "Vishnu Nivas, Enadimangalam P.O"],
  ["Meera Krishnan", "Krishna Kripa, Kadampanad P.O"],
  ["Joseph Jacob", "Puthenpurackal, Chengannur P.O"],
  ["Sreelatha Pillai", "Sree Bhavan, Adoor P.O"],
  ["Mohammed Ashraf", "Ashraf Manzil, Kollam P.O"],
  ["Deepa Suresh", "Deepa Nivas, Thrissur P.O"],
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

/**
 * Track bounds for the range sliders — the min/max defined by the spec.
 * Record values are generated within these, so every row stays reachable and
 * the full-span default selection shows the complete set.
 */
export const FILTER_BOUNDS: Record<string, { min: number; max: number; step: number }> = {
  builtUpArea: { min: 300, max: 500, step: 5 },
  floorArea: { min: 140, max: 300, step: 5 },
  noOfFloors: { min: 2, max: 5, step: 1 },
  plotArea: { min: 1000, max: 2000, step: 25 },
  fsi: { min: 2, max: 3, step: 0.1 },
  heightOfBuilding: { min: 3, max: 10, step: 0.5 },
  noOfBlocks: { min: 2, max: 4, step: 1 },
};

function buildRows(count: number): BuildingPermitRow[] {
  const rand = mulberry32(20260407);
  const pick = <T,>(arr: readonly T[]): T => arr[Math.floor(rand() * arr.length)];
  const between = (min: number, max: number) => min + rand() * (max - min);

  const draw = (key: keyof typeof FILTER_BOUNDS, decimals = 0) => {
    const { min, max } = FILTER_BOUNDS[key];
    const f = 10 ** decimals;
    return Math.round(between(min, max) * f) / f;
  };

  return Array.from({ length: count }, (_, i) => {
    const [localBody, localBodyType] = pick(LOCAL_BODIES);
    const [applicantName, applicantAddress] = pick(APPLICANTS);

    return {
      id: `row-${i + 1}`,
      localBody,
      localBodyType,
      fileNo: `${Math.round(between(1000, 9999)).toLocaleString("en-IN")}`,
      applicationNo: `${Math.round(between(10000, 99999)).toLocaleString("en-IN")}`,
      applicantName,
      applicantAddress,
      surveyNo: `${Math.round(between(1, 420))}`,
      village: pick(VILLAGES),
      ward: String(Math.round(between(1, 24))).padStart(2, "0"),
      occupancy: pick(OCCUPANCY_TYPES),
      noOfFloors: draw("noOfFloors"),
      builtUpArea: draw("builtUpArea"),
      floorArea: draw("floorArea"),
      fsi: draw("fsi", 1),
      permitNo: `BP-${Math.round(between(100, 999))}-${Math.round(between(100, 999))}`,
      permitDate: `${Math.round(between(1, 28))} ${pick(MONTHS)} ${Math.round(between(2018, 2026))}`,
      plotArea: draw("plotArea"),
      heightOfBuilding: draw("heightOfBuilding", 1),
      noOfBlocks: draw("noOfBlocks"),
      hasParkingPlot: rand() > 0.42,
      hasNOCs: rand() > 0.5,
    };
  });
}

export const BUILDING_PERMIT_ROWS: BuildingPermitRow[] = buildRows(56);
