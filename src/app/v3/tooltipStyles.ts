/**
 * Shared theming for the shadcn Tooltip across V3.
 * shadcn's default content is `bg-primary` (#030213), which is an off-brand
 * near-black — these override the content and its arrow to brand ink so the
 * two always match.
 */
export const TOOLTIP_CONTENT =
  "bg-[#232f50] text-white font-sans text-[12px] leading-[16px] rounded-[8px] px-[10px] py-[8px] " +
  "shadow-[0px_4px_12px_rgba(10,13,18,0.18)] [&_svg]:bg-[#232f50] [&_svg]:fill-[#232f50]";

export const TOOLTIP_DATA_CONTENT = `${TOOLTIP_CONTENT} p-[10px]`;
