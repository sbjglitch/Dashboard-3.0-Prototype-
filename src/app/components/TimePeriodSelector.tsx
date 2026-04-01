import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronDown, ArrowLeft } from 'lucide-react';
import svgPaths from "../../imports/svg-1zwg9703mz";

const OPTIONS = [
  "Upto today",
  "Past 1 Month",
  "Past 1 Year",
  "This year",
  "Previous Year",
  "Custom Range"
];

export function TimePeriodSelector({ onClose, onSelect }: { onClose: () => void, onSelect: (value: string) => void }) {
  const [view, setView] = useState<'list' | 'custom'>('list');
  const [activeInput, setActiveInput] = useState<'from' | 'to' | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0, 1)); // January 2026
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleOptionClick = (option: string) => {
    if (option === "Custom Range") {
      setView('custom');
    } else {
      onSelect(option);
      onClose();
    }
  };

  const handleApplyCustom = () => {
    if (fromDate && toDate) {
      const format = (d: Date) => d.toLocaleDateString('en-GB');
      onSelect(`${format(fromDate)} - ${format(toDate)}`);
      onClose();
    }
  };

  const formatDateString = (d: Date | null) => {
    if (!d) return "";
    return d.toLocaleDateString('en-GB'); // DD/MM/YYYY
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (activeInput === 'from') {
      setFromDate(selected);
      setActiveInput('to');
    } else {
      setToDate(selected);
      setActiveInput(null);
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className="bg-white rounded-[8px] w-[calc(100vw-2rem)] sm:w-[320px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] border border-[#e8e8e8] overflow-hidden"
    >
      {view === 'list' ? (
        <div className="flex flex-col py-2">
          {OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className="px-4 py-3 text-left hover:bg-[#f6f9fb] text-[14px] text-[#232f50] font-sans transition-colors flex items-center justify-between group"
            >
              <span>{opt}</span>
              {opt === "Custom Range" && <ChevronDown size={16} className="text-[#8d8d8d] group-hover:text-[#232f50]" />}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Custom Range Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#f1f5f9]">
            <button onClick={() => { setView('list'); setActiveInput(null); }} className="p-1 hover:bg-gray-100 rounded">
              <ArrowLeft size={16} className="text-[#232f50]" />
            </button>
            <span className="font-sans font-semibold text-[14px] text-[#232f50]">Custom Range</span>
          </div>

          {/* Date Inputs */}
          <div className="p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div 
                className={`relative h-[48px] group cursor-pointer ${activeInput === 'from' ? 'z-20' : ''}`}
                onClick={() => setActiveInput('from')}
              >
                <div className={`absolute inset-0 border rounded-[8px] bg-white transition-colors ${activeInput === 'from' ? 'border-[#09327b]' : 'border-[#e8eff4] group-hover:border-[#09327b]'}`} />
                <div className="relative flex items-center h-full px-3">
                  <p className={`text-sm ${fromDate ? 'text-[#232f50]' : 'text-[#a2a7b4]'}`}>
                    {fromDate ? formatDateString(fromDate) : "DD/MM/YYYY"}
                  </p>
                  <CalendarIcon size={16} className="ml-auto text-[#8d8d8d]" />
                </div>
                <div className="absolute top-0 left-3 -translate-y-1/2 bg-white px-1 text-[11px] text-[#153171] font-medium">From Date</div>
              </div>

              <div 
                className={`relative h-[48px] group cursor-pointer ${activeInput === 'to' ? 'z-20' : ''}`}
                onClick={() => setActiveInput('to')}
              >
                <div className={`absolute inset-0 border rounded-[8px] bg-white transition-colors ${activeInput === 'to' ? 'border-[#09327b]' : 'border-[#e8eff4] group-hover:border-[#09327b]'}`} />
                <div className="relative flex items-center h-full px-3">
                  <p className={`text-sm ${toDate ? 'text-[#232f50]' : 'text-[#a2a7b4]'}`}>
                    {toDate ? formatDateString(toDate) : "DD/MM/YYYY"}
                  </p>
                  <CalendarIcon size={16} className="ml-auto text-[#8d8d8d]" />
                </div>
                <div className="absolute top-0 left-3 -translate-y-1/2 bg-white px-1 text-[11px] text-[#153171] font-medium">To Date</div>
              </div>
            </div>

            {/* Functional Calendar */}
            {activeInput && (
              <div className="border border-[#e8eff4] rounded-lg p-3 bg-white shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
                <CalendarFunctional 
                  currentMonth={currentMonth} 
                  setCurrentMonth={setCurrentMonth}
                  selectedDate={activeInput === 'from' ? fromDate : toDate}
                  onDateSelect={handleDateSelect}
                  activeInput={activeInput}
                  otherDate={activeInput === 'from' ? toDate : fromDate}
                />
              </div>
            )}

            <button 
              disabled={!fromDate || !toDate}
              onClick={handleApplyCustom}
              className={`w-full py-2.5 rounded-full font-semibold text-sm transition-colors mt-2 ${
                fromDate && toDate 
                  ? "bg-[#e83a7a] text-white hover:bg-[#d62d69]" 
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              Apply Range
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CalendarFunctional({ 
  currentMonth, 
  setCurrentMonth, 
  selectedDate, 
  onDateSelect,
  activeInput,
  otherDate
}: { 
  currentMonth: Date, 
  setCurrentMonth: (d: Date) => void,
  selectedDate: Date | null,
  onDateSelect: (d: number) => void,
  activeInput: 'from' | 'to',
  otherDate: Date | null
}) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  
  const prevMonthDays = Array.from({ length: firstDayOfMonth }, (_, i) => daysInPrevMonth - firstDayOfMonth + i + 1);
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const nextMonthDays = Array.from({ length: 42 - (prevMonthDays.length + currentMonthDays.length) }, (_, i) => i + 1);

  const isSelected = (day: number) => {
    return selectedDate?.getDate() === day && 
           selectedDate?.getMonth() === month && 
           selectedDate?.getFullYear() === year;
  };

  const handlePrevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <button onClick={handlePrevMonth} className="p-1 border border-[#e8eff4] rounded shadow-sm hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p21920d80} stroke="#232F50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </button>
        <div className="flex items-center gap-1 font-sans font-semibold text-[13px] text-[#232f50]">
          <span>{monthNames[month]} {year}</span>
          <ChevronDown size={14} />
        </div>
        <button onClick={handleNextMonth} className="p-1 border border-[#e8eff4] rounded shadow-sm hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.pc6c9d80} stroke="#232F50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 text-center">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span key={`day-header-${i}`} className="text-[11px] font-bold text-[#232f50] py-1">{d}</span>
        ))}
        {prevMonthDays.map((d, i) => (
          <span key={`prev-${i}`} className="text-[11px] text-[#a2a7b4] py-1.5">{d}</span>
        ))}
        {currentMonthDays.map(d => {
          const selected = isSelected(d);
          return (
            <div key={`curr-${d}`} className="relative py-0.5">
              <button 
                onClick={() => onDateSelect(d)}
                className={`text-[11px] h-6 w-6 flex items-center justify-center mx-auto rounded transition-colors ${
                  selected 
                    ? "bg-[#00b2eb] text-white font-semibold" 
                    : "text-[#232f50] hover:bg-gray-50"
                }`}
              >
                {d}
              </button>
            </div>
          );
        })}
        {nextMonthDays.map((d, i) => (
          <span key={`next-${i}`} className="text-[11px] text-[#a2a7b4] py-1.5">{d}</span>
        ))}
      </div>
    </div>
  );
}
