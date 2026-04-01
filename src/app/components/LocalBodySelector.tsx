import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import svgPaths from "../../imports/svg-mfg8ahemog";

const KERALA_DISTRICTS = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha",
  "Kottayam", "Idukki", "Ernakulam", "Thrissur", "Palakkad",
  "Malappuram", "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
];

const LSG_TYPES = ['Corporations', 'Municipalities', 'Gramapanchayaths'];

const MOCK_LSG_DATA = [
  { name: "Thiruvananthapuram", type: "Corporations", district: "Thiruvananthapuram" },
  { name: "Neyyattinkara", type: "Municipalities", district: "Thiruvananthapuram" },
  { name: "Nedumangad", type: "Municipalities", district: "Thiruvananthapuram" },
  { name: "Attingal", type: "Municipalities", district: "Thiruvananthapuram" },
  { name: "Varkala", type: "Municipalities", district: "Thiruvananthapuram" },
  { name: "Karakulam", type: "Gramapanchayaths", district: "Thiruvananthapuram" },
  { name: "Vilappil", type: "Gramapanchayaths", district: "Thiruvananthapuram" },
  { name: "Adoor", type: "Municipalities", district: "Pathanamthitta" },
  { name: "Thiruvalla", type: "Municipalities", district: "Pathanamthitta" },
  { name: "Pathanamthitta", type: "Municipalities", district: "Pathanamthitta" },
  { name: "Pandalam", type: "Municipalities", district: "Pathanamthitta" },
  { name: "Aranmula", type: "Gramapanchayaths", district: "Pathanamthitta" },
  { name: "Ayiroor", type: "Gramapanchayaths", district: "Pathanamthitta" },
  { name: "Kochi", type: "Corporations", district: "Ernakulam" },
  { name: "Aluva", type: "Municipalities", district: "Ernakulam" },
  { name: "Muvattupuzha", type: "Municipalities", district: "Ernakulam" },
  { name: "Vadavucode", type: "Gramapanchayaths", district: "Ernakulam" },
  { name: "Kozhikode", type: "Corporations", district: "Kozhikode" },
  { name: "Vadakara", type: "Municipalities", district: "Kozhikode" },
  { name: "Koyilandy", type: "Municipalities", district: "Kozhikode" },
  { name: "Ollur", type: "Gramapanchayaths", district: "Kozhikode" },
];

export function LocalBodySelector({ onClose, onApply }: { onClose?: () => void, onApply?: (value: string) => void }) {
  const [districtOpen, setDistrictOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [lsgOpen, setLsgOpen] = useState(false);

  const [selectedDistrict, setSelectedDistrict] = useState<string>("Kerala");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLsg, setSelectedLsg] = useState<string>("");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if ((event.target as Element).closest('#local-body-toggle')) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose?.();
        setDistrictOpen(false);
        setTypeOpen(false);
        setLsgOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => {
      if (prev.includes(type)) return prev.filter(t => t !== type);
      return [...prev, type];
    });
    setSelectedLsg(""); 
  };

  const filteredLSGs = useMemo(() => {
    return MOCK_LSG_DATA.filter(lsg => {
      const matchDistrict = selectedDistrict === "Kerala" || lsg.district === selectedDistrict;
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(lsg.type);
      return matchDistrict && matchType;
    });
  }, [selectedDistrict, selectedTypes]);

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return MOCK_LSG_DATA.filter(lsg => lsg.name.toLowerCase().includes(query));
  }, [searchQuery]);

  const handleApply = () => {
    let result = selectedDistrict;
    if (selectedLsg) {
      result = `${selectedLsg}, ${selectedDistrict}`;
    } else if (selectedTypes.length > 0) {
      result = `${selectedDistrict} (${selectedTypes.join(", ")})`;
    }
    onApply?.(result);
    onClose?.();
  };

  const handleClear = () => {
    setSelectedDistrict("Kerala");
    setSelectedTypes([]);
    setSelectedLsg("");
    setSearchQuery("");
    setIsSearching(false);
  };

  return (
    <div className="bg-white relative rounded-[12px] w-[calc(100vw-2rem)] sm:w-[448px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8eff4]" ref={dropdownRef}>
      <div className="flex flex-col gap-[16px] p-[16px]">
        {/* Header */}
        <div className="flex items-center justify-between w-full h-[32px]">
          {isSearching ? (
             <input 
               type="text" 
               autoFocus
               placeholder="Search Local Body..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="font-sans font-semibold text-[14px] text-[#232f50] w-full outline-none"
             />
          ) : (
            <p className="font-sans font-semibold text-[#232f50] text-[14px]">
              Select Local Body
            </p>
          )}
          
          <button 
            onClick={() => setIsSearching(!isSearching)}
            className="flex items-center justify-center size-[32px] rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
              <g opacity="0.5">
                <path d={svgPaths.p19568f00} stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M21 21L16.7 16.7" stroke="#323232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </button>
        </div>

        {/* Global Search Results Dropdown */}
        {isSearching && searchQuery && (
           <div className="absolute top-[56px] left-4 right-4 bg-white border border-[#e7eff5] rounded-[8px] shadow-lg max-h-[200px] overflow-y-auto z-50">
              {searchResults.length > 0 ? searchResults.map((lsg, idx) => (
                 <div 
                   key={idx} 
                   className="px-4 py-3 hover:bg-[#f6f9fb] cursor-pointer text-[14px] text-[#232f50] font-sans"
                   onClick={() => {
                     setSelectedDistrict(lsg.district);
                     setSelectedTypes([lsg.type]);
                     setSelectedLsg(lsg.name);
                     setIsSearching(false);
                     setSearchQuery("");
                   }}
                 >
                   {lsg.name} {lsg.type.slice(0, -1)}, {lsg.district}
                 </div>
              )) : (
                 <div className="px-4 py-3 text-[14px] text-[#5c6e93]">No results found</div>
              )}
           </div>
        )}

        {/* Dropdowns Container */}
        <div className="flex flex-col gap-[24px] w-full py-[8px] relative">
          
          {/* State/District Dropdown */}
          <div className="relative h-[56px] group">
            <div 
              className="absolute inset-0 border border-[#e8eff4] rounded-[8px] bg-white group-hover:border-[#09327b] cursor-pointer transition-colors shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
              onClick={() => { setDistrictOpen(!districtOpen); setTypeOpen(false); setLsgOpen(false); }}
            />
            <div className="relative flex items-center justify-between h-full px-[18px] pointer-events-none">
              <p className="font-sans font-medium text-[#232f50] text-[16px]">
                {selectedDistrict}
              </p>
              <div className="h-[6px] w-[12px] flex items-center justify-center">
                <svg className="block w-[12px] h-[6px]" fill="none" viewBox="0 0 12 6">
                  <path d={svgPaths.p2b080f00} stroke="#D5D7DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
            {/* Label */}
            <div className="absolute top-0 left-[18px] -translate-y-1/2 bg-white px-[5px] flex items-center gap-[4px] z-10 pointer-events-none h-[24px]">
              <span className="text-[14px] text-[#153171] font-sans">State/District</span>
              <span className="text-[#e83a7a] font-medium font-['Inter',sans-serif] text-[16px]">*</span>
            </div>
            
            {districtOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border border-[#e7eff5] rounded-[8px] shadow-lg max-h-[200px] overflow-y-auto z-40">
                <div 
                  className="px-[16px] py-[10px] hover:bg-[#f6f9fb] cursor-pointer text-[#232f50] font-sans text-[14px]"
                  onClick={() => { setSelectedDistrict("Kerala"); setSelectedLsg(""); setDistrictOpen(false); }}
                >
                  Kerala
                </div>
                {KERALA_DISTRICTS.map(dist => (
                  <div 
                    key={dist} 
                    className="px-[16px] py-[10px] hover:bg-[#f6f9fb] cursor-pointer text-[#232f50] font-sans text-[14px]"
                    onClick={() => { setSelectedDistrict(dist); setSelectedLsg(""); setDistrictOpen(false); }}
                  >
                    {dist}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LSG Type Dropdown */}
          <div className="relative h-[56px] group">
            <div 
              className="absolute inset-0 border border-[#e8eff4] rounded-[8px] bg-white group-hover:border-[#09327b] cursor-pointer transition-colors shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
              onClick={() => { setTypeOpen(!typeOpen); setDistrictOpen(false); setLsgOpen(false); }}
            />
            <div className="relative flex items-center justify-between h-full px-[18px] pointer-events-none">
              <p className="font-sans font-medium text-[#232f50] text-[16px]">
                {selectedTypes.length === 0 ? "All" : selectedTypes.join(", ")}
              </p>
              <div className="h-[6px] w-[12px] flex items-center justify-center">
                <svg className="block w-[12px] h-[6px]" fill="none" viewBox="0 0 12 6">
                  <path d={svgPaths.p2b080f00} stroke="#D5D7DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
            {/* Label */}
            <div className="absolute top-0 left-[18px] -translate-y-1/2 bg-white px-[5px] flex items-center gap-[4px] z-10 pointer-events-none h-[24px]">
              <span className="text-[14px] text-[#153171] font-sans">LSG Type</span>
              <span className="text-[#e83a7a] font-medium font-['Inter',sans-serif] text-[16px]">*</span>
            </div>

            {typeOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border border-[#e7eff5] rounded-[8px] shadow-lg max-h-[300px] z-50 flex flex-col overflow-hidden">
                <div className="overflow-y-auto py-2">
                  {LSG_TYPES.map(type => (
                    <label key={type} className="flex items-center gap-[16px] px-[16px] py-[8px] hover:bg-[#f6f9fb] cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="w-4 h-4 rounded border-gray-300 text-[#00b2eb] focus:ring-[#00b2eb]"
                      />
                      <span className="text-[#232f50] font-sans text-[14px]">{type}</span>
                    </label>
                  ))}
                </div>
                <div className="p-[12px] border-t border-[#e7eff5] flex justify-end bg-gray-50 rounded-b-[8px]">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setTypeOpen(false); }}
                    className="px-[20px] py-[8px] bg-[#e83a7a] rounded-full font-sans font-semibold text-[13px] text-white hover:bg-[#d62d69] transition-colors shadow-sm"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* LSG Name Dropdown */}
          <div className={`relative h-[56px] group ${filteredLSGs.length === 0 ? 'opacity-50' : ''}`}>
            <div 
              className={`absolute inset-0 border border-[#e8eff4] rounded-[8px] bg-white group-hover:border-[#09327b] transition-colors shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ${filteredLSGs.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={() => { if (filteredLSGs.length > 0) { setLsgOpen(!lsgOpen); setDistrictOpen(false); setTypeOpen(false); } }}
            />
            <div className="relative flex items-center justify-between h-full px-[18px] pointer-events-none">
              <p className={`font-sans font-medium text-[16px] ${selectedLsg ? 'text-[#232f50]' : 'text-[#232f50] opacity-50'}`}>
                {selectedLsg || "Select"}
              </p>
              <div className="h-[6px] w-[12px] flex items-center justify-center">
                <svg className="block w-[12px] h-[6px]" fill="none" viewBox="0 0 12 6">
                  <path d={svgPaths.p2b080f00} stroke="#D5D7DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
            {/* Label */}
            <div className="absolute top-0 left-[18px] -translate-y-1/2 bg-white px-[5px] flex items-center gap-[4px] z-10 pointer-events-none h-[24px]">
              <span className="text-[14px] text-[#153171] font-sans">LSG Name</span>
              <span className="text-[#e83a7a] font-medium font-['Inter',sans-serif] text-[16px]">*</span>
            </div>
            
            {lsgOpen && filteredLSGs.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white border border-[#e7eff5] rounded-[8px] shadow-lg max-h-[200px] overflow-y-auto z-20">
                {filteredLSGs.map(lsg => (
                  <div 
                    key={lsg.name} 
                    className="px-[16px] py-[10px] hover:bg-[#f6f9fb] cursor-pointer text-[#232f50] font-sans text-[14px]"
                    onClick={() => { setSelectedLsg(lsg.name); setLsgOpen(false); }}
                  >
                    {lsg.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e7eff5]" />

        {/* Action Buttons */}
        <div className="flex items-center justify-between w-full">
          <button 
            onClick={handleClear}
            className="w-[104px] h-[36px] bg-white border border-[#e8eff4] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-semibold text-[14px] text-[#232f50] hover:bg-gray-50 transition-colors"
          >
            Clear
          </button>
          <button 
            onClick={handleApply}
            className="w-[104px] h-[36px] bg-[#e83a7a] border border-[#e83a7a] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] font-sans font-semibold text-[14px] text-white hover:bg-[#d62d69] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
