import { MODULE_DATA } from "../data/serviceData";
import { PERIOD_CHIPS, RAIL_MODULES } from "./FilterRailV3";

export interface ServiceEntry {
  module: string;
  subModule: string;
  service: string;
  /** Module label + sub-module, so searching "building fitness" still matches. */
  context: string;
}

export interface SubModuleEntry {
  module: string;
  subModule: string;
  context: string;
  serviceCount: number;
}

const label = (moduleKey: string) =>
  RAIL_MODULES.find((m) => m.key === moduleKey)?.label ?? moduleKey;

function build() {
  const services: ServiceEntry[] = [];
  const subModules: SubModuleEntry[] = [];

  for (const [module, subs] of Object.entries(MODULE_DATA)) {
    for (const [subModule, list] of Object.entries(subs)) {
      subModules.push({ module, subModule, context: label(module), serviceCount: list.length });
      for (const service of list) {
        services.push({ module, subModule, service, context: `${label(module)} · ${subModule}` });
      }
    }
  }

  return { services, subModules };
}

const built = build();

export const SERVICE_ENTRIES = built.services;
export const SUB_MODULE_ENTRIES = built.subModules;

export const CMD_DISTRICTS = [
  "All", "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam", "Idukki",
  "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod",
];
export const CMD_BODY_TYPES = ["All", "Corporation", "Municipality", "Grama Panchayat"];
export const CMD_LOCAL_BODIES = ["All", "Thiruvananthapuram", "Kochi", "Kollam", "Adoor", "Chengannur", "Ezhamkulam"];
export const CMD_PERIODS = [...PERIOD_CHIPS];

export const CMD_ROUTES = [
  { label: "Dashboard V1", to: "/" },
  { label: "Dashboard V2", to: "/v2" },
  { label: "Dashboard V3", to: "/v3" },
  { label: "Building Permission report", to: "/reports/building-permission" },
  { label: "Public Grievance report", to: "/reports/grievance" },
  { label: "Components", to: "/components" },
];
