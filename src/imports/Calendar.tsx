import svgPaths from "./svg-1zwg9703mz";

export default function Calendar() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Calendar">
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
            <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/md">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d={svgPaths.p21920d80} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Path_2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
            <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
              <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Feature name</p>
            </div>
          </div>
          <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0" data-name="Month Year">
            <div className="flex flex-col font-sans font-semibold justify-center leading-[0] relative shrink-0 text-[#232f50] text-[14px] text-left whitespace-nowrap">
              <p className="leading-[20px]">January</p>
            </div>
            <div className="flex flex-col font-sans font-semibold justify-end leading-[0] relative shrink-0 text-[#232f50] text-[14px] text-left whitespace-nowrap">
              <p className="leading-[20px]">2026</p>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Dropdown Arrow">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Group">
                  <path d="M8 10L12 14L16 10" id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <g id="Path_2" />
                </g>
              </svg>
            </div>
          </button>
          <div className="content-stretch flex flex-col gap-[8px] items-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
            <div className="aspect-[32/32] bg-white relative rounded-[8px] shrink-0 w-full" data-name="_Button base">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                  <div className="relative shrink-0 size-[16px]" data-name="Arrows, Diagrams/Arrow">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Group">
                        <path d={svgPaths.pc6c9d80} id="Path" stroke="var(--stroke-0, #232F50)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Path_2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
            <div className="-translate-x-1/2 absolute backdrop-blur-[51.55px] bg-[rgba(35,47,80,0.8)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] opacity-0 px-[8px] py-[4px] rounded-[4px] top-[40px]">
              <p className="font-sans font-normal leading-[normal] relative shrink-0 text-[12.706px] text-center text-white whitespace-nowrap">Feature name</p>
            </div>
          </div>
        </div>
        <div className="grid-cols-[repeat(7,fit-content(100%))] grid-rows-[repeat(7,fit-content(100%))] inline-grid overflow-clip relative shrink-0" data-name="calendar">
          <div className="col-1 content-stretch flex flex-col items-center justify-center p-[8px] relative row-1 shrink-0 size-[40px]" data-name="Day Label">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">S</p>
          </div>
          <div className="col-2 content-stretch flex flex-col items-center justify-center p-[8px] relative row-1 shrink-0 size-[40px]" data-name="Day Label">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">M</p>
          </div>
          <div className="col-3 content-stretch flex flex-col items-center justify-center p-[8px] relative row-1 shrink-0 size-[40px]" data-name="Day Label">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">T</p>
          </div>
          <div className="col-4 content-stretch flex flex-col items-center justify-center p-[8px] relative row-1 shrink-0 size-[40px]" data-name="Day Label">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">W</p>
          </div>
          <div className="col-5 content-stretch flex flex-col items-center justify-center p-[8px] relative row-1 shrink-0 size-[40px]" data-name="Day Label">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">T</p>
          </div>
          <div className="col-6 content-stretch flex flex-col items-center justify-center p-[8px] relative row-1 shrink-0 size-[40px]" data-name="Day Label">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">F</p>
          </div>
          <div className="col-7 content-stretch flex flex-col items-center justify-center p-[8px] relative row-1 shrink-0 size-[40px]" data-name="Day Label">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">S</p>
          </div>
          <div className="col-1 content-stretch flex flex-col items-center justify-center p-[8px] relative row-2 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">27</p>
          </div>
          <div className="col-2 content-stretch flex flex-col items-center justify-center p-[8px] relative row-2 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">28</p>
          </div>
          <div className="col-3 content-stretch flex items-center justify-center p-[8px] relative row-2 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center whitespace-nowrap">29</p>
          </div>
          <div className="col-4 content-stretch flex flex-col items-center justify-center p-[8px] relative row-2 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">30</p>
          </div>
          <div className="col-5 content-stretch flex flex-col items-center justify-center p-[8px] relative row-2 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">1</p>
          </div>
          <div className="col-6 content-stretch flex flex-col items-center justify-center p-[8px] relative row-2 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">2</p>
          </div>
          <div className="col-7 content-stretch flex flex-col items-center justify-center p-[8px] relative row-2 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">3</p>
          </div>
          <div className="col-1 content-stretch flex flex-col items-center justify-center p-[8px] relative row-3 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">4</p>
          </div>
          <div className="col-2 content-stretch flex flex-col items-center justify-center p-[8px] relative row-3 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">5</p>
          </div>
          <div className="col-3 content-stretch flex flex-col items-center justify-center p-[8px] relative row-3 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">6</p>
          </div>
          <div className="col-4 content-stretch flex flex-col items-center justify-center p-[8px] relative row-3 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">7</p>
          </div>
          <div className="col-5 content-stretch flex flex-col items-center justify-center p-[8px] relative row-3 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">8</p>
          </div>
          <div className="col-6 content-stretch flex flex-col items-center justify-center p-[8px] relative row-3 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">9</p>
          </div>
          <div className="col-7 content-stretch flex flex-col items-center justify-center p-[8px] relative row-3 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">10</p>
          </div>
          <div className="col-1 content-stretch flex flex-col items-center justify-center p-[8px] relative row-4 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">11</p>
          </div>
          <div className="col-2 content-stretch flex flex-col items-center justify-center p-[8px] relative row-4 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">12</p>
          </div>
          <div className="col-3 content-stretch flex flex-col items-center justify-center p-[8px] relative row-4 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">13</p>
          </div>
          <div className="bg-[#00b2eb] col-4 content-stretch flex flex-col items-center justify-center px-[7px] py-[10px] relative rounded-[8px] row-4 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-semibold leading-[20px] relative shrink-0 text-[14px] text-center text-white w-full">14</p>
          </div>
          <div className="col-5 content-stretch flex flex-col items-center justify-center p-[8px] relative row-4 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">15</p>
          </div>
          <div className="col-6 content-stretch flex flex-col items-center justify-center p-[8px] relative row-4 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">16</p>
          </div>
          <div className="col-7 content-stretch flex flex-col items-center justify-center p-[8px] relative row-4 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">17</p>
          </div>
          <div className="col-1 content-stretch flex flex-col items-center justify-center p-[8px] relative row-5 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">18</p>
          </div>
          <div className="col-2 content-stretch flex flex-col items-center justify-center p-[8px] relative row-5 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">19</p>
          </div>
          <div className="col-3 content-stretch flex flex-col items-center justify-center p-[8px] relative row-5 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">20</p>
          </div>
          <div className="col-4 content-stretch flex flex-col items-center justify-center p-[8px] relative row-5 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">21</p>
          </div>
          <div className="col-5 content-stretch flex flex-col items-center justify-center p-[8px] relative row-5 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">22</p>
          </div>
          <div className="col-6 content-stretch flex flex-col items-center justify-center p-[8px] relative row-5 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">23</p>
          </div>
          <div className="col-7 content-stretch flex flex-col items-center justify-center p-[8px] relative row-5 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">24</p>
          </div>
          <div className="col-1 content-stretch flex flex-col items-center justify-center p-[8px] relative row-6 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">25</p>
          </div>
          <div className="col-2 content-stretch flex flex-col items-center justify-center p-[8px] relative row-6 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">26</p>
          </div>
          <div className="col-3 content-stretch flex flex-col items-center justify-center p-[8px] relative row-6 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">27</p>
          </div>
          <div className="col-4 content-stretch flex flex-col items-center justify-center p-[8px] relative row-6 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">28</p>
          </div>
          <div className="col-5 content-stretch flex flex-col items-center justify-center p-[8px] relative row-6 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">29</p>
          </div>
          <div className="col-6 content-stretch flex flex-col items-center justify-center p-[8px] relative row-6 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">30</p>
          </div>
          <div className="col-7 content-stretch flex flex-col items-center justify-center p-[8px] relative row-6 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#232f50] text-[14px] text-center w-full">31</p>
          </div>
          <div className="col-1 content-stretch flex flex-col items-center justify-center p-[8px] relative row-7 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">1</p>
          </div>
          <div className="col-2 content-stretch flex flex-col items-center justify-center p-[8px] relative row-7 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">2</p>
          </div>
          <div className="col-3 content-stretch flex flex-col items-center justify-center p-[8px] relative row-7 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">3</p>
          </div>
          <div className="col-4 content-stretch flex flex-col items-center justify-center p-[8px] relative row-7 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">4</p>
          </div>
          <div className="col-5 content-stretch flex flex-col items-center justify-center p-[8px] relative row-7 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">5</p>
          </div>
          <div className="col-6 content-stretch flex flex-col items-center justify-center p-[8px] relative row-7 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">6</p>
          </div>
          <div className="col-7 content-stretch flex flex-col items-center justify-center p-[8px] relative row-7 shrink-0 size-[40px]" data-name="Date">
            <p className="font-sans font-medium leading-[20px] relative shrink-0 text-[#a2a7b4] text-[14px] text-center w-full">7</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8eff4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
    </div>
  );
}