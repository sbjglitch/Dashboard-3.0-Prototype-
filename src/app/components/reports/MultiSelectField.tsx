import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";

export function MultiSelectField({
  label,
  options,
  value,
  onChange,
  placeholder = "All",
  searchPlaceholder = "Search",
}: {
  label: string;
  options: readonly string[];
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();

    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const filtered = useMemo(
    () => options.filter((o) => o.toLowerCase().includes(query.trim().toLowerCase())),
    [options, query],
  );

  const toggle = (option: string) =>
    onChange(
      value.includes(option) ? value.filter((v) => v !== option) : [...value, option],
    );

  const summary = value.length === 0 ? placeholder : `${value.length} selected`;

  return (
    <div className="w-full min-w-0" ref={rootRef}>
      <span id={`${id}-label`} className="block font-sans font-medium text-[14px] text-[#232f50] leading-[20px] mb-[8px]">
        {label}
      </span>

      <div className="relative">
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}-summary`}
          onClick={() => setOpen((o) => !o)}
          className="w-full h-[44px] flex items-center justify-between gap-[8px] bg-white border border-[#e8eff4] rounded-[8px] pl-[18px] pr-[16px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-colors hover:border-[#09327b] focus-visible:border-[#09327b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
        >
          <span
            id={`${id}-summary`}
            className={`font-sans font-medium text-[14px] leading-[20px] truncate ${
              value.length === 0 ? "text-[#5c6e93]" : "text-[#232f50]"
            }`}
          >
            {summary}
          </span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 text-[#5c6e93] transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {open && (
          <div
            role="dialog"
            aria-label={label}
            className="absolute z-50 top-full left-0 right-0 mt-[6px] bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(10,13,18,0.12)] overflow-hidden flex flex-col max-h-[320px]"
          >
            <div className="p-[8px] shrink-0">
              <div className="flex items-center gap-[8px] bg-white border border-[#e8eff4] rounded-[8px] px-[8px] py-[8px] focus-within:border-[#09327b]">
                <Search className="w-4 h-4 shrink-0 text-[#5c6e93]" aria-hidden="true" />
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  aria-label={`Search ${label}`}
                  className="flex-1 min-w-0 bg-transparent outline-none font-sans font-medium text-[14px] text-[#232f50] leading-[21px] placeholder:text-[#5c6e93]"
                />
              </div>
            </div>

            <div className="h-px bg-[#e8eff4] shrink-0" />

            <div className="overflow-y-auto py-[4px]">
              {filtered.length === 0 ? (
                <p className="px-[16px] py-[16px] font-sans font-medium text-[12px] text-[#5c6e93] leading-[16px]">
                  No matches
                </p>
              ) : (
                filtered.map((option) => {
                  const checked = value.includes(option);
                  return (
                    <label
                      key={option}
                      className="flex items-center gap-[8px] px-[16px] py-[12px] cursor-pointer hover:bg-[#f6f9fb] transition-colors focus-within:bg-[#f6f9fb]"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(option)}
                        className="sr-only peer"
                      />
                      <span
                        aria-hidden="true"
                        className={`size-[16px] shrink-0 rounded-[4px] border-[1.5px] flex items-center justify-center transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#09327b]/40 ${
                          checked ? "bg-[#09327b] border-[#09327b]" : "bg-white border-[#8292b0]"
                        }`}
                      >
                        {checked && <Check className="w-[11px] h-[11px] text-white" strokeWidth={3} />}
                      </span>
                      <span className="font-sans font-medium text-[12px] text-[#232f50] leading-[16px]">
                        {option}
                      </span>
                    </label>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {value.length > 0 && (
        <ul aria-label={`Selected ${label}`} className="flex flex-wrap gap-[8px] mt-[10px]">
          {value.map((v) => (
            <li key={v}>
              <span className="inline-flex items-center gap-[2px] h-[32px] pl-[10px] pr-[4px] bg-[#e5f7fd] border border-[#b2e8f9] rounded-[8px]">
                <span className="font-sans font-medium text-[12px] text-[#232f50] leading-[16px]">{v}</span>
                <button
                  type="button"
                  onClick={() => onChange(value.filter((x) => x !== v))}
                  aria-label={`Remove ${v}`}
                  className="size-[24px] shrink-0 flex items-center justify-center rounded-[6px] text-[#07607e] hover:bg-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#09327b]"
                >
                  <X className="w-[13px] h-[13px]" strokeWidth={2.5} aria-hidden="true" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
