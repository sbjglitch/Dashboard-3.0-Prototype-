import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { VariantAnchored } from "./filterRail/VariantAnchored";
import { VariantOverlay } from "./filterRail/VariantOverlay";
import { VariantSummaryBar } from "./filterRail/VariantSummaryBar";

const VARIANTS = [
  { name: "Anchored", render: () => <VariantAnchored /> },
  { name: "Overlay", render: () => <VariantOverlay /> },
  { name: "Summary bar", render: () => <VariantSummaryBar /> },
];

const PICKER_CSS = `
.proto-picker {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2147483647;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  background: rgba(10, 10, 10, 0.82);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 8px 24px rgba(0, 0, 0, 0.24),
    0 2px 6px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  -webkit-user-select: none;
}

.proto-picker-highlight {
  position: absolute;
  top: 4px;
  left: 0;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  will-change: transform;
}

.proto-picker[data-ready] .proto-picker-highlight {
  transition:
    transform 250ms cubic-bezier(0.23, 1, 0.32, 1),
    width 250ms cubic-bezier(0.23, 1, 0.32, 1);
}

@media (prefers-reduced-motion: reduce) {
  .proto-picker[data-ready] .proto-picker-highlight { transition: none; }
}

.proto-picker-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font: inherit;
  cursor: pointer;
  transition: color 150ms ease-out;
}

.proto-picker-item:hover { color: rgba(255, 255, 255, 0.85); }
.proto-picker-item:active { transform: scale(0.97); }

.proto-picker-item:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.4);
  outline-offset: 2px;
}

.proto-picker-item[data-active] { color: #fff; }

.proto-picker-divider {
  width: 1px;
  height: 16px;
  margin: 0 4px;
  background: rgba(255, 255, 255, 0.12);
}

.proto-picker-replay {
  padding: 0 10px;
  font-size: 14px;
}

.proto-picker[data-position="top"] {
  bottom: auto;
  top: 24px;
}

@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes slideIn { from { transform: translateX(16px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
@keyframes expandDown { from { transform: scaleY(0.97); opacity: 0 } to { transform: scaleY(1); opacity: 1 } }
`;

export default function FilterRailPrototype() {
  const [current, setCurrent] = useState(() => {
    const v = parseInt(new URLSearchParams(location.search).get("v") ?? "", 10);
    return v >= 1 && v <= VARIANTS.length ? v - 1 : 0;
  });
  const [mountKey, setMountKey] = useState(0);
  const [ready, setReady] = useState(false);

  const pickerRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [highlight, setHighlight] = useState({ width: 0, x: 0 });

  const measure = useCallback(() => {
    const el = itemRefs.current[current];
    if (el) setHighlight({ width: el.offsetWidth, x: el.offsetLeft });
  }, [current]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Enable the slide only after first paint, so load doesn't animate.
  useEffect(() => {
    const r1 = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    return () => cancelAnimationFrame(r1);
  }, []);

  const select = useCallback((i: number) => {
    if (i < 0 || i >= VARIANTS.length) return;
    setCurrent(i);
    setMountKey((k) => k + 1);
    const url = new URL(location.href);
    url.searchParams.set("v", String(i + 1));
    history.replaceState(null, "", url);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= VARIANTS.length) select(num - 1);
      else if (e.key === "ArrowRight") select((current + 1) % VARIANTS.length);
      else if (e.key === "ArrowLeft") select((current - 1 + VARIANTS.length) % VARIANTS.length);
      else if (e.key === "r" || e.key === "R") setMountKey((k) => k + 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [current, select]);

  return (
    <div className="min-h-screen bg-[#f2f6ff]">
      <style>{PICKER_CSS}</style>

      <div key={mountKey}>{VARIANTS[current].render()}</div>

      <nav className="proto-picker" aria-label="Prototype variants" ref={pickerRef} {...(ready ? { "data-ready": "" } : {})}>
        <span
          className="proto-picker-highlight"
          aria-hidden="true"
          style={{ width: highlight.width, transform: `translateX(${highlight.x}px)` }}
        />
        {VARIANTS.map((v, i) => (
          <button
            key={v.name}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="proto-picker-item"
            onClick={() => select(i)}
            {...(i === current ? { "data-active": "", "aria-current": "true" as const } : {})}
          >
            {v.name}
          </button>
        ))}
        <span className="proto-picker-divider" aria-hidden="true" />
        <button
          className="proto-picker-item proto-picker-replay"
          aria-label="Replay animation (R)"
          onClick={() => setMountKey((k) => k + 1)}
        >
          ↻
        </button>
      </nav>
    </div>
  );
}
