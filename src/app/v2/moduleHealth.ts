export interface ModuleHealth {
  id: string;
  name: string;
  /** Short form for narrow tiles. */
  shortName: string;
  total: number;
  disposed: number;
  underProcess: number;
  delayed: number;
  /** Share of files breaching the service-level period, 0–1. */
  breachRate: number;
  /** Twelve-week delayed-file trend, oldest first. Real values, not decoration. */
  trend: number[];
}

export interface LocalBodyBreach {
  name: string;
  type: string;
  total: number;
  disposed: number;
  delayed: number;
}

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MODULE_SEEDS: [string, string, string, number, number][] = [
  // id, name, shortName, total, delayedShare
  ["civil-registration", "Civil Registration", "Civil Reg.", 184200, 0.09],
  ["building-permissions", "Building Permissions", "Building Perm.", 51251, 0.29],
  ["property-tax", "Property Tax", "Property Tax", 142800, 0.12],
  ["finance", "Finance Management", "Finance", 76400, 0.07],
  ["meetings", "Meeting Management", "Meetings", 51251, 0.18],
  ["grievance", "Public Grievance", "Grievance", 38900, 0.34],
  ["business-facilitation", "Business Facilitation", "Business Fac.", 44600, 0.15],
];

function buildModules(): ModuleHealth[] {
  const rand = mulberry32(20261012);

  return MODULE_SEEDS.map(([id, name, shortName, total, delayedShare]) => {
    const delayed = Math.round(total * delayedShare);
    const disposed = Math.round(total * (0.52 + rand() * 0.18));
    const underProcess = total - disposed - delayed;

    // Trend walks around the current delayed count rather than drifting off it,
    // so the last point always agrees with the headline figure.
    const trend = Array.from({ length: 12 }, (_, i) => {
      const drift = (rand() - 0.45) * 0.22;
      const ramp = 1 - (11 - i) * 0.012;
      return Math.max(0, Math.round(delayed * ramp * (1 + drift)));
    });
    trend[trend.length - 1] = delayed;

    return {
      id,
      name,
      shortName,
      total,
      disposed,
      underProcess: Math.max(0, underProcess),
      delayed,
      breachRate: delayedShare,
      trend,
    };
  });
}

export const MODULES: ModuleHealth[] = buildModules();

/** A module is called out when more than a fifth of its files breach the SLI period. */
export const BREACH_THRESHOLD = 0.2;

export const KERALA_TOTALS = MODULES.reduce(
  (acc, m) => ({
    total: acc.total + m.total,
    disposed: acc.disposed + m.disposed,
    underProcess: acc.underProcess + m.underProcess,
    delayed: acc.delayed + m.delayed,
  }),
  { total: 0, disposed: 0, underProcess: 0, delayed: 0 },
);

export const LOCAL_BODY_BREACH: Record<string, LocalBodyBreach[]> = {
  default: [
    { name: "Ernakulam", type: "Corporation", total: 29000, delayed: 9000, disposed: 20000 },
    { name: "Thiruvananthapuram", type: "Corporation", total: 28000, delayed: 10000, disposed: 18000 },
    { name: "Kollam", type: "Corporation", total: 22000, delayed: 8000, disposed: 14000 },
    { name: "Alappuzha", type: "Municipality", total: 21000, delayed: 8000, disposed: 13000 },
    { name: "Kottayam", type: "Municipality", total: 19000, delayed: 7000, disposed: 12000 },
    { name: "Idukki", type: "Municipality", total: 15000, delayed: 6000, disposed: 9000 },
  ],
};

export const formatCount = (n: number) => n.toLocaleString("en-IN");
export const formatPercent = (n: number) => `${(n * 100).toFixed(1)}%`;
