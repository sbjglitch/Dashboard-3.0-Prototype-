/**
 * Mirrors the real content's structure and box sizes so the swap back doesn't
 * shift layout. Header and filter rail are deliberately excluded — they stay
 * live so the rail you just clicked never flickers out from under you.
 */

function Bar({ w, h = 12, className = "" }: { w: string; h?: number; className?: string }) {
  return (
    <span
      className={`block rounded-[4px] bg-[#e8eff4] animate-pulse ${className}`}
      style={{ width: w, height: h }}
    />
  );
}

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-[#e8eff4] rounded-[12px] p-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ${className}`}>
      {children}
    </div>
  );
}

function KpiSkeleton() {
  return (
    <div className="flex flex-col bg-[#fafcfe] border border-[#e8eff4] rounded-[12px] overflow-hidden min-w-0">
      <div className="bg-white border-b border-[#e8eff4] rounded-[12px] p-[16px] flex flex-col">
        <div className="flex items-center gap-[8px]">
          <span className="size-[32px] shrink-0 rounded-[6px] bg-[#e8eff4] animate-pulse" />
          <Bar w="96px" h={14} />
        </div>
        <div className="p-[8px]">
          <Bar w="116px" h={32} />
        </div>
        <div className="px-[4px] flex flex-col gap-[8px]">
          <div className="flex gap-[2px] my-[4px]">
            <span className="h-[4px] rounded-[1px] bg-[#e8eff4] animate-pulse" style={{ width: "62%" }} />
            <span className="h-[4px] rounded-[1px] bg-[#eef3f7] animate-pulse flex-1" />
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <Bar w="84px" h={10} />
            <Bar w="68px" h={10} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-[12px] py-[8px]">
        <Bar w="72px" h={10} />
        <span className="size-[20px] rounded-full bg-[#e8eff4] animate-pulse" />
      </div>
    </div>
  );
}

export function DashboardSkeletonV3() {
  // Static heights, so the bars don't reshuffle on every re-render.
  const bars = [62, 44, 78, 36, 90, 54, 70, 48, 84, 40, 66, 58, 74, 50];

  return (
    <div className="flex flex-col gap-[16px]" aria-hidden="true">
      <CardShell className="flex flex-wrap items-center justify-between gap-[12px]">
        <Bar w="196px" h={28} />
        <div className="flex flex-wrap items-center gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <Bar w="118px" h={38} className="!rounded-[8px]" />
            <Bar w="96px" h={38} className="!rounded-[8px]" />
            <Bar w="212px" h={38} className="!rounded-[8px]" />
          </div>
          <Bar w="128px" h={36} className="!rounded-[8px]" />
        </div>
      </CardShell>

      <CardShell className="flex flex-col gap-[16px]">
        <div className="flex gap-[4px] p-[4px] bg-[#f1f5f8] rounded-[8px] w-fit">
          <Bar w="112px" h={36} className="!rounded-[6px]" />
          <Bar w="96px" h={36} className="!rounded-[6px]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
          {Array.from({ length: 4 }, (_, i) => <KpiSkeleton key={i} />)}
        </div>
      </CardShell>

      <CardShell>
        <Bar w="268px" h={20} />
        <div className="mt-[8px]"><Bar w="420px" h={14} /></div>
        <div className="flex items-center gap-[32px] mt-[24px]">
          <Bar w="104px" h={14} />
          <Bar w="124px" h={14} />
        </div>
        <div className="mt-[20px] pl-[52px] pb-[34px]">
          <div className="relative h-[210px] flex items-end justify-between px-[8px]">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex items-end justify-center gap-[6px]">
                <span className="w-[16px] rounded-t-[2px] bg-[#e8eff4] animate-pulse" style={{ height: `${h}%` }} />
                <span className="w-[16px] rounded-t-[2px] bg-[#eef3f7] animate-pulse" style={{ height: `${h * 0.62}%` }} />
              </div>
            ))}
          </div>
        </div>
      </CardShell>
    </div>
  );
}
