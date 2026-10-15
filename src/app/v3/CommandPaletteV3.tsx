import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  Building2, CalendarRange, ChartColumn, FileText, Layers,
  MapPin, PanelLeftClose, PanelLeftOpen, Search,
} from "lucide-react";
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from "../components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { RAIL_MODULES, type RailScope } from "./FilterRailV3";
import {
  CMD_BODY_TYPES, CMD_DISTRICTS, CMD_LOCAL_BODIES, CMD_PERIODS, CMD_ROUTES,
  SERVICE_ENTRIES, SUB_MODULE_ENTRIES,
} from "./commandData";

/** Services only appear once the query narrows them — 256 items is a wall, not a list. */
const SERVICE_QUERY_MIN = 2;
const MAX_SERVICE_RESULTS = 40;

export interface CommandPaletteActions {
  onModule: (module: string) => void;
  onSubModule: (module: string, subModule: string) => void;
  onService: (module: string, subModule: string, service: string) => void;
  onScope: (patch: Partial<RailScope>) => void;
  onTab: (tab: "fileStatus" | "finance" | "digitalHealth") => void;
  onToggleFilters: (open: boolean) => void;
  filtersOpen: boolean;
  availableTabs: { id: "fileStatus" | "finance" | "digitalHealth"; label: string }[];
}

export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return { open, setOpen };
}

export function CommandPaletteTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="press inline-flex items-center gap-[8px] h-[38px] pl-[12px] pr-[8px] bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-medium text-[14px] text-[#5c6e93] leading-[20px] [@media(hover:hover)]:hover:border-[#09327b] [@media(hover:hover)]:hover:text-[#232f50] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09327b]"
    >
      <Search className="size-[16px] shrink-0" aria-hidden="true" />
      Search
      <kbd className="ml-[4px] px-[6px] py-[2px] rounded-[4px] bg-[#f1f5f8] border border-[#e8eff4] font-sans font-semibold text-[11px] leading-[16px] text-[#5c6e93]">
        ⌘K
      </kbd>
    </button>
  );
}

export function CommandPaletteV3({
  open,
  onOpenChange,
  actions,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  actions: CommandPaletteActions;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const run = (fn: () => void) => {
    fn();
    onOpenChange(false);
  };

  const showServices = query.trim().length >= SERVICE_QUERY_MIN;

  // cmdk filters what's rendered; capping keeps the DOM small on broad queries.
  const services = useMemo(() => {
    if (!showServices) return [];
    const q = query.trim().toLowerCase();
    return SERVICE_ENTRIES.filter(
      (s) => s.service.toLowerCase().includes(q) || s.context.toLowerCase().includes(q),
    ).slice(0, MAX_SERVICE_RESULTS);
  }, [query, showServices]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogHeader className="sr-only">
        <DialogTitle>Search the dashboard</DialogTitle>
        <DialogDescription>
          Jump to a service, module, scope or page.
        </DialogDescription>
      </DialogHeader>
      {/*
        Animations stripped deliberately. A palette opened by a keyboard shortcut is
        used dozens of times a day; motion there reads as lag. Raycast ships none.
      */}
      <DialogContent
        className="overflow-hidden p-0 sm:max-w-[640px] gap-0 border-[#e8eff4] !duration-0 !animate-none data-[state=open]:!animate-none data-[state=closed]:!animate-none [&>button]:hidden"
      >
        <Command
          shouldFilter={false}
          className="[&_[cmdk-group-heading]]:px-[12px] [&_[cmdk-group-heading]]:py-[6px] [&_[cmdk-group-heading]]:text-[12px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-[#5c6e93] [&_[cmdk-group]]:px-[8px] [&_[data-slot=command-input-wrapper]]:h-[60px] [&_[data-slot=command-input-wrapper]]:px-[16px] [&_[data-slot=command-input-wrapper]]:border-[#e8eff4]"
        >
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder="Search services, modules, districts, pages…"
            className="h-[60px] font-sans text-[14px] !outline-none focus-visible:!outline-none"
          />
          <CommandList className="max-h-[420px]">
            <CommandEmpty className="py-[32px] text-center font-sans text-[14px] text-[#5c6e93]">
              Nothing matches “{query}”.
            </CommandEmpty>

            {showServices && services.length > 0 && (
              <>
                <CommandGroup heading={`Services (${services.length}${services.length === MAX_SERVICE_RESULTS ? "+" : ""})`}>
                  {services.map((s) => (
                    <CommandItem
                      key={`${s.module}|${s.subModule}|${s.service}`}
                      value={`svc:${s.module}:${s.subModule}:${s.service}`}
                      onSelect={() => run(() => actions.onService(s.module, s.subModule, s.service))}
                      className="gap-[10px]"
                    >
                      <FileText className="size-[16px] shrink-0 text-[#5c6e93]" aria-hidden="true" />
                      <span className="flex flex-col min-w-0">
                        <span className="truncate font-sans text-[14px] text-[#232f50]">{s.service}</span>
                        <span className="truncate font-sans text-[12px] text-[#5c6e93]">{s.context}</span>
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            )}

            <CommandGroup heading="Modules">
              {RAIL_MODULES.filter((m) => match(m.label, query)).map((m) => (
                <CommandItem key={m.key} value={`mod:${m.key}`} onSelect={() => run(() => actions.onModule(m.key))} className="gap-[10px]">
                  <m.Icon className="size-[16px] shrink-0 text-[#5c6e93]" aria-hidden="true" />
                  <span className="font-sans text-[14px] text-[#232f50]">{m.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>

            {query.trim().length >= SERVICE_QUERY_MIN && (
              <CommandGroup heading="Sub-modules">
                {SUB_MODULE_ENTRIES.filter((s) => match(`${s.subModule} ${s.context}`, query))
                  .slice(0, 12)
                  .map((s) => (
                    <CommandItem
                      key={`${s.module}|${s.subModule}`}
                      value={`sub:${s.module}:${s.subModule}`}
                      onSelect={() => run(() => actions.onSubModule(s.module, s.subModule))}
                      className="gap-[10px]"
                    >
                      <Layers className="size-[16px] shrink-0 text-[#5c6e93]" aria-hidden="true" />
                      <span className="flex flex-col min-w-0">
                        <span className="truncate font-sans text-[14px] text-[#232f50]">{s.subModule}</span>
                        <span className="truncate font-sans text-[12px] text-[#5c6e93]">
                          {s.context} · {s.serviceCount} service{s.serviceCount === 1 ? "" : "s"}
                        </span>
                      </span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            )}

            <CommandGroup heading="Scope">
              {CMD_DISTRICTS.filter((d) => d !== "All" && match(d, query)).slice(0, 6).map((d) => (
                <ScopeItem key={`d-${d}`} id={`district:${d}`} Icon={MapPin} label={d} hint="District"
                  onSelect={() => run(() => actions.onScope({ district: d }))} />
              ))}
              {CMD_BODY_TYPES.filter((b) => b !== "All" && match(b, query)).map((b) => (
                <ScopeItem key={`b-${b}`} id={`bodytype:${b}`} Icon={Building2} label={b} hint="Local body type"
                  onSelect={() => run(() => actions.onScope({ bodyType: b }))} />
              ))}
              {CMD_LOCAL_BODIES.filter((l) => l !== "All" && match(l, query)).slice(0, 5).map((l) => (
                <ScopeItem key={`l-${l}`} id={`body:${l}`} Icon={Building2} label={l} hint="Local body"
                  onSelect={() => run(() => actions.onScope({ localBody: l }))} />
              ))}
              {CMD_PERIODS.filter((p) => match(p, query)).map((p) => (
                <ScopeItem key={`p-${p}`} id={`period:${p}`} Icon={CalendarRange} label={p} hint="Time period"
                  onSelect={() => run(() => actions.onScope({ period: p }))} />
              ))}
            </CommandGroup>

            <CommandGroup heading="Actions">
              {actions.availableTabs.filter((t) => match(`${t.label} tab`, query)).map((t) => (
                <ScopeItem key={t.id} id={`tab:${t.id}`} Icon={ChartColumn} label={`View ${t.label}`} hint="Tab"
                  onSelect={() => run(() => actions.onTab(t.id))} />
              ))}
              {match(actions.filtersOpen ? "collapse filters" : "expand filters", query) && (
                <ScopeItem
                  id="toggle-filters"
                  Icon={actions.filtersOpen ? PanelLeftClose : PanelLeftOpen}
                  label={actions.filtersOpen ? "Collapse filters" : "Expand filters"}
                  hint="Filter panel"
                  onSelect={() => run(() => actions.onToggleFilters(!actions.filtersOpen))}
                />
              )}
            </CommandGroup>

            <CommandGroup heading="Go to">
              {CMD_ROUTES.filter((r) => match(r.label, query)).map((r) => (
                <ScopeItem key={r.to} id={`route:${r.to}`} Icon={ChartColumn} label={r.label} hint="Page"
                  onSelect={() => run(() => navigate(r.to))} />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function match(text: string, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return text.toLowerCase().includes(q);
}

function ScopeItem({
  id, Icon, label, hint, onSelect,
}: {
  id: string;
  Icon: typeof MapPin;
  label: string;
  hint: string;
  onSelect: () => void;
}) {
  return (
    <CommandItem value={id} onSelect={onSelect} className="gap-[10px]">
      <Icon className="size-[16px] shrink-0 text-[#5c6e93]" aria-hidden="true" />
      <span className="flex-1 min-w-0 truncate font-sans text-[14px] text-[#232f50]">{label}</span>
      <span className="shrink-0 font-sans text-[12px] text-[#5c6e93]">{hint}</span>
    </CommandItem>
  );
}
