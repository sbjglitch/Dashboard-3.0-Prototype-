import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router";
import App from "./app/App.tsx";
import AppV2 from "./app/AppV2.tsx";
import AppV3 from "./app/AppV3.tsx";
import GraphPlayground from "./app/GraphPlayground.tsx";
import ComponentsPage from "./app/ComponentsPage.tsx";
import ReportsPage from "./app/ReportsPage.tsx";
import GrievanceReportsPage from "./app/GrievanceReportsPage.tsx";
import "./styles/index.css";

const VERSIONS = [
  { label: "V1", to: "/" },
  { label: "V2", to: "/v2" },
  { label: "V3", to: "/v3" },
];

function VersionToggle() {
  const { pathname } = useLocation();
  const activeTo = VERSIONS.find((v) => v.to !== "/" && v.to === pathname)?.to ?? "/";

  return (
    <div
      role="group"
      aria-label="Dashboard version"
      className="flex items-center gap-[2px] bg-white/10 border border-white/10 rounded-full p-[2px]"
    >
      {VERSIONS.map((v) => {
        const active = v.to === activeTo;
        return (
          <Link
            key={v.to}
            to={v.to}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-0.5 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white ${
              active ? "bg-white text-[#153171]" : "text-white/70 hover:text-white"
            }`}
          >
            {v.label}
          </Link>
        );
      })}
    </div>
  );
}

function PrototypeHeader() {
  return (
    <div className="bg-[#153171] text-white px-4 py-1.5 flex items-center justify-between font-sans z-50 relative">
      <div className="font-semibold text-white/80 tracking-wider uppercase text-[11px]">Prototype Controls</div>
      <div className="flex items-center gap-3 text-[13px]">
        <VersionToggle />
        <span className="text-white/30">|</span>
        <Link to="/components" className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/10 transition-colors shadow-sm">
          Components
        </Link>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PrototypeHeader />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/v2" element={<AppV2 />} />
      <Route path="/v3" element={<AppV3 />} />
      <Route path="/playground" element={<GraphPlayground />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/reports/building-permission" element={<ReportsPage />} />
      <Route path="/reports/grievance" element={<GrievanceReportsPage />} />
    </Routes>
  </BrowserRouter>,
);
