import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
  disabled?: boolean;
  muted?: boolean;
}

export function FilterDropdown({ label, value, options, onSelect, disabled, muted }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full min-w-0 h-[56px]" ref={dropdownRef}>
      {/* Trigger */}
      <div 
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`relative w-full h-full group cursor-pointer ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        <div 
          className={`absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-white ${!disabled && 'group-hover:border-[#09327b]'} ${isOpen ? 'border-[#09327b]' : ''} transition-colors`} 
        />
        
        <div className="flex min-w-0 items-center justify-between relative w-full h-full px-[18px]">
          <p className={`font-sans font-medium leading-[24px] relative text-[#232f50] text-[16px] whitespace-nowrap overflow-hidden text-ellipsis mr-2 ${muted ? 'opacity-50' : ''}`}>
            {value}
          </p>
          <div className="shrink-0">
            <ChevronDown className={`w-4 h-4 text-[#D5D7DA] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>

        <div className="absolute bg-white flex font-sans font-normal gap-[4px] h-[19px] items-center leading-[normal] left-[18px] px-[5px] text-[#153171] text-[14px] top-0 -translate-y-1/2 whitespace-nowrap z-10">
          <p className="relative shrink-0">{label}</p>
          {!muted && <p className="relative shrink-0 font-medium text-[#e83a7a]">*</p>}
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e8eff4] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] z-50 max-h-[400px] flex flex-col overflow-hidden">
          {options.length > 10 && (
            <div className="p-3 border-b border-[#e8eff4]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8d8d8d]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 bg-[#f8fafc] border border-[#e8eff4] rounded-md text-[14px] outline-none focus:border-[#09327b]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          )}
          <div className="overflow-y-auto flex-1 py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                    setSearchQuery("");
                  }}
                  className={`px-4 py-2.5 text-[14px] cursor-pointer transition-colors hover:bg-[#f2f6ff] hover:text-[#09327b] ${
                    value === option ? 'bg-[#f2f6ff] text-[#09327b] font-semibold' : 'text-[#232f50]'
                  }`}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-[#5c6e93] text-[14px]">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
