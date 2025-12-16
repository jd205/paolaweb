function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-slate-800 whitespace-pre">Nuestros servicios</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame 8873">
          <path d="M2 4.5L7 9.5L12 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[3px] rounded-tr-[3px] shrink-0 size-[34px]">
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[3px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="basis-0 font-['Poppins:Regular',sans-serif] grow h-[14px] leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-400">Selecciona tipo de envío</p>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[34px] items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame 8873">
          <path d="M2 4.5L7 9.5L12 4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[3px] rounded-tr-[3px] shrink-0 size-[34px]">
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[3px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="basis-0 font-['Poppins:Regular',sans-serif] grow h-[14px] leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-slate-400">Selecciona tipo de mercancía</p>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[34px] items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Regular',sans-serif] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[244px]">¿Qué tipo de servicio necesitas?</p>
      <Frame9 />
      <p className="font-['Poppins:Regular',sans-serif] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[335px]">¿Qué tipo de mercancía envías o vendes?</p>
      <Frame8 />
      <div className="bg-violet-700 h-[32px] relative rounded-[5px] shrink-0 w-full" data-name="Primary button Xlarge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[18px] py-[7px] relative w-full">
            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Continuar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="dropdown">
      <Frame7 />
    </div>
  );
}

export default function Servicios() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative size-full" data-name="servicios">
      <Frame10 />
      <Frame4 />
      <Dropdown />
    </div>
  );
}