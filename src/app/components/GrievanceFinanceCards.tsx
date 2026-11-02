import { Folder } from "lucide-react";

/**
 * Finance KPI cards for the Public Grievance module (Fine / Administration Fees / Others).
 *
 * Gradients keep the brand hues from the comp but start one step deeper so white
 * text holds 4.5:1 across the whole card. The inner chips use a dark tint rather
 * than a white one: a white overlay lightens the surface under white text and
 * drops it to ~2.5:1, a dark overlay raises it.
 */
const CARDS = [
  { title: "Fine", total: 51251, demand: 25251, collection: 26000, balance: 26000, from: "#007a68", to: "#00917c" },
  { title: "Administration Fees", total: 51251, demand: 25251, collection: 26000, balance: 26000, from: "#00729f", to: "#0088bd" },
  { title: "Others", total: 51251, demand: 25251, collection: 26000, balance: 26000, from: "#5a3fdc", to: "#6d51f2" },
] as const;

const inr = (n: number) => n.toLocaleString("en-IN");

export function GrievanceFinanceCards() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-[16px] w-full">
      {CARDS.map((c) => (
        <section
          key={c.title}
          aria-label={c.title}
          className="relative overflow-hidden rounded-[12px] p-[16px] flex flex-col gap-[14px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] min-w-0"
          style={{ backgroundImage: `linear-gradient(135deg, ${c.from} 0%, ${c.to} 100%)` }}
        >
          {/* Soft diagonal sheen, same device the Property Tax cards use */}
          <div aria-hidden="true" className="pointer-events-none absolute top-[-20px] left-[54%] w-[505px] h-[243px] rotate-[-32.81deg] bg-white opacity-[0.05]" />

          <div className="relative flex items-center gap-[8px]">
            <span className="size-[32px] shrink-0 rounded-full bg-white/30 flex items-center justify-center">
              <Folder className="size-[16px] text-white" fill="currentColor" aria-hidden="true" />
            </span>
            <h3 className="font-sans font-semibold text-[16px] leading-[24px] text-white truncate">{c.title}</h3>
          </div>

          <p className="relative flex items-baseline gap-[8px] text-white px-[2px]">
            <span className="font-sans font-semibold text-[22px] leading-none" aria-hidden="true">₹</span>
            <span className="font-sans font-semibold text-[34px] leading-[40px] tracking-[0.5px]">{inr(c.total)}</span>
            <span className="sr-only">rupees</span>
          </p>

          <dl className="relative grid grid-cols-3 gap-[8px] m-0">
            {([
              ["Demand", c.demand],
              ["Collection", c.collection],
              ["Balance", c.balance],
            ] as const).map(([label, value]) => (
              <div key={label} className="rounded-[8px] bg-black/[0.16] px-[10px] py-[6px] min-w-0">
                <dt className="font-sans font-medium text-[12px] leading-[16px] text-white">{label}</dt>
                <dd className="font-sans font-semibold text-[14px] leading-[20px] text-white m-0 truncate">₹ {inr(value)}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
