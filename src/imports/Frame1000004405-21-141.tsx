import svgPaths from "./svg-kt2cqh4lck";

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-slate-800 whitespace-pre">Verificación de tu identidad</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow h-[34px] min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[34px] items-start p-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-400 whitespace-pre">Nombre completo</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[3px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Frame4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[18px] grow h-[34px] items-start min-h-px min-w-px relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 grow h-[34px] min-h-px min-w-px relative shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[34px] items-start p-[8px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-400 whitespace-pre">Fecha de nacimiento</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[3px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Frame5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[18px] grow h-[34px] items-start min-h-px min-w-px relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="download">
          <mask height="18" id="mask0_21_145" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_21_145)">
            <path d={svgPaths.p27439380} fill="var(--fill-0, white)" id="download_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButtonXlarge() {
  return (
    <div className="bg-violet-700 box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[5px] shrink-0" data-name="Secondary button Xlarge">
      <Download />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Subir</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-slate-900 w-full">
        <p className="leading-[1.4]">verificacion-perfil.jpg</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <SecondaryButtonXlarge />
      <Frame />
    </div>
  );
}

function Upload() {
  return (
    <div className="aspect-[681/48] relative rounded-[6px] shrink-0 w-full" data-name="upload">
      <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="aspect-[681/48] box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Download1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="download">
          <mask height="18" id="mask0_21_145" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_21_145)">
            <path d={svgPaths.p27439380} fill="var(--fill-0, white)" id="download_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButtonXlarge1() {
  return (
    <div className="bg-violet-700 box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[5px] shrink-0" data-name="Secondary button Xlarge">
      <Download1 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Subir</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-slate-900 w-full">
        <p className="leading-[1.4]">verificacion-perfil.jpg</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <SecondaryButtonXlarge1 />
      <Frame2 />
    </div>
  );
}

function Upload1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="upload">
      <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Regular',sans-serif] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[244px]">Información del representate</p>
      <Frame16 />
      <p className="font-['Poppins:Regular',sans-serif] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[244px]">Identificación oficial</p>
      <Upload />
      <p className="font-['Poppins:Regular',sans-serif] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[244px]">Comprobante de domicilio</p>
      <Upload1 />
      <div className="bg-violet-50 h-[32px] relative rounded-[5px] shrink-0 w-full" data-name="Primary button Xlarge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[18px] py-[7px] relative w-full">
            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9699a0] text-[14px] text-nowrap whitespace-pre">Continuar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative size-full">
      <Frame13 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}