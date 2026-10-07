import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import App from "./app/App.tsx";
import GraphPlayground from "./app/GraphPlayground.tsx";
import ComponentsPage from "./app/ComponentsPage.tsx";
import ReportsPage from "./app/ReportsPage.tsx";
import "./styles/index.css";

function PrototypeHeader() {
  return (
    <div className="bg-[#153171] text-white px-4 py-1.5 flex items-center justify-between font-sans z-50 relative">
      <div className="font-semibold text-white/80 tracking-wider uppercase text-[11px]">Prototype Controls</div>
      <div className="flex items-center gap-3 text-[13px]">
        <Link to="/" className="text-white/80 hover:text-white transition-colors">Dashboard</Link>
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
      <Route path="/playground" element={<GraphPlayground />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/reports/building-permission" element={<ReportsPage />} />
    </Routes>
  </BrowserRouter>,
);
