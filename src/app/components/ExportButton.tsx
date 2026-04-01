import svgPaths from "../../imports/svg-444afp662x";

interface ExportButtonProps {
  className?: string;
  variant?: "light" | "dark";
  onClick?: () => void;
}

export function ExportButton({ className = "", variant = "light", onClick }: ExportButtonProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-[#232f50]";
  const strokeColor = isLight ? "white" : "#232f50";
  const bgColor = isLight ? "bg-[rgba(255,255,255,0.1)]" : "bg-[rgba(35,47,80,0.05)]";
  const borderColor = isLight ? "border-[rgba(255,255,255,0.07)]" : "border-[rgba(35,47,80,0.1)]";

  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-[22.05px] ${bgColor} content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative rounded-[8px] border ${borderColor} shadow-[0px_4px_9.8px_0px_rgba(0,0,0,0.04)] hover:opacity-90 transition-all ${className}`}
    >
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path
              d="M8 11.3333V2"
              id="Path_2"
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M13.3333 14H2.66667"
              id="Path_3"
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p21bd21d0}
              id="Path_4"
              stroke={strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
      <p className={`font-sans font-bold leading-[normal] relative shrink-0 text-[16px] ${textColor} whitespace-nowrap`}>
        Export
      </p>
    </button>
  );
}
