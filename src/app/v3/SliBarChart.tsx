import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import { TOOLTIP_DATA_CONTENT } from "./tooltipStyles";

export interface DistrictBar {
  name: string;
  short: string;
  total: number;
  disposed: number;
}

export const SLI_DISTRICTS: DistrictBar[] = [
  { name: "Thiruvananthapuram", short: "Thiruv..", total: 19000, disposed: 10200 },
  { name: "Kollam", short: "Kollam", total: 14800, disposed: 10200 },
  { name: "Pathanamthitta", short: "Pathanam.", total: 6100, disposed: 4200 },
  { name: "Alappuzha", short: "Alappuz..", total: 10000, disposed: 8100 },
  { name: "Kottayam", short: "Kottaym", total: 13700, disposed: 9400 },
  { name: "Idukki", short: "Idukki", total: 5300, disposed: 4500 },
  { name: "Ernakulam", short: "Ernakulam", total: 22000, disposed: 15000 },
  { name: "Thrissur", short: "Thrissur", total: 13500, disposed: 12600 },
  { name: "Palakkad", short: "Palakkad", total: 23000, disposed: 7800 },
  { name: "Malappuram", short: "Malappur.", total: 17200, disposed: 16000 },
  { name: "Kozhikode", short: "Kozhikode", total: 15800, disposed: 14700 },
  { name: "Wayanad", short: "Wayanad", total: 6800, disposed: 4600 },
  { name: "Kannur", short: "Kannur", total: 18600, disposed: 12900 },
  { name: "Kasaragod", short: "Kasargod", total: 11200, disposed: 9500 },
];

const TICKS = [25000, 20000, 15000, 10000, 5000, 0];
const MAX = 25000;
const TOTAL_COLOR = "#56ba85";
const DISPOSED_COLOR = "#00b2eb";
const fmt = (n: number) => n.toLocaleString("en-IN");

export function SliBarChart({
  title = "No. of files that exceed SLI Period",
  subtitle = "Graphical representation of the least performing districts and local bodies",
  data = SLI_DISTRICTS,
}: {
  title?: string;
  subtitle?: string;
  data?: DistrictBar[];
}) {
  return (
    <section className="bg-white border border-[#e8eff4] rounded-[12px] p-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
      <h3 className="font-sans font-semibold text-[16px] text-[#232f50] leading-[24px]">{title}</h3>
      <p className="font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] mt-[4px]">{subtitle}</p>

      <div className="flex items-center gap-[32px] mt-[24px]" aria-hidden="true">
        {[
          { l: "Total Files", c: TOTAL_COLOR },
          { l: "Disposed Files", c: DISPOSED_COLOR },
        ].map((k) => (
          <span key={k.l} className="flex items-center gap-[8px] font-sans font-medium text-[14px] text-[#232f50] leading-[20px]">
            <span className="size-[14px] rounded-[3px]" style={{ backgroundColor: k.c }} />
            {k.l}
          </span>
        ))}
      </div>

      <div className="mt-[20px] overflow-x-auto">
        <div className="relative min-w-[760px] pl-[52px] pb-[34px]">
          <div className="relative h-[210px]">
            {TICKS.map((t) => (
              <div key={t} className="absolute left-0 right-0 flex items-center" style={{ top: `${(1 - t / MAX) * 100}%` }} aria-hidden="true">
                <span className="absolute -left-[52px] w-[44px] text-right -translate-y-1/2 font-sans font-medium text-[12px] text-[#5c6e93] tabular-nums">
                  {fmt(t)}
                </span>
                <span className="w-full border-t border-dashed border-[#e8eff4]" />
              </div>
            ))}

            {/* Dimming is CSS-only: the group dims every column, the hovered one opts back in. */}
            <div className="group absolute inset-0 flex items-end justify-between px-[8px]">
              {data.map((d) => (
                <div key={d.name} className="relative flex-1 h-full">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        aria-label={d.name}
                        className="absolute inset-0 flex items-end justify-center gap-[6px] rounded-[2px] opacity-100 transition-opacity group-hover:opacity-45 hover:!opacity-100 focus-visible:!opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
                      >
                        <span className="w-[16px] rounded-t-[2px]" style={{ height: `${(d.total / MAX) * 100}%`, backgroundColor: TOTAL_COLOR }} />
                        <span className="w-[16px] rounded-t-[2px]" style={{ height: `${(d.disposed / MAX) * 100}%`, backgroundColor: DISPOSED_COLOR }} />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} className={TOOLTIP_DATA_CONTENT}>
                      <p className="font-semibold text-[13px] leading-[18px] pb-[6px] mb-[6px] border-b border-white/20 whitespace-nowrap">{d.name}</p>
                      {[
                        { l: "Total files", v: d.total, c: TOTAL_COLOR },
                        { l: "Disposed files", v: d.disposed, c: DISPOSED_COLOR },
                      ].map((row) => (
                        <p key={row.l} className="flex items-center justify-between gap-[16px] whitespace-nowrap">
                          <span className="flex items-center gap-[6px] text-white/75">
                            <span className="size-[6px] rounded-full" style={{ backgroundColor: row.c }} />
                            {row.l}
                          </span>
                          <span className="font-semibold tabular-nums">{fmt(row.v)}</span>
                        </p>
                      ))}
                    </TooltipContent>
                  </Tooltip>

                  <span className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 font-sans font-medium text-[12px] text-[#5c6e93] whitespace-nowrap" aria-hidden="true">
                    {d.short}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <table className="sr-only">
        <caption>{title}</caption>
        <thead><tr><th scope="col">District</th><th scope="col">Total files</th><th scope="col">Disposed files</th></tr></thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.name}><th scope="row">{d.name}</th><td>{fmt(d.total)}</td><td>{fmt(d.disposed)}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
