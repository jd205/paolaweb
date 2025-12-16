import svgPaths from "./svg-hcwbtuu4if";

function Layer() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.13%] top-0" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="Layer 1">
          <path d={svgPaths.p2abd6f80} fill="var(--fill-0, #2DB674)" id="Vector" />
          <path d={svgPaths.p23da3d00} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.13%] top-0" data-name="Layer 2">
      <Layer />
    </div>
  );
}

function Check() {
  return (
    <div className="overflow-clip relative shrink-0 size-[54px]" data-name="check_15526397 1">
      <Layer1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Medium',sans-serif] h-[35px] leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-slate-800 w-full">¡Todo listo!</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-slate-800 w-full">Hemos recibido tus datos correctamente. Tu cuenta será activada muy pronto para que puedas comenzar a disfrutar del servicio.</p>
      <div className="bg-violet-700 h-[32px] relative rounded-[5px] shrink-0 w-full" data-name="Primary button Xlarge">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[18px] py-[7px] relative w-full">
            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Ir a la plataforma</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Check />
      <Frame1 />
    </div>
  );
}

export default function Destinatario() {
  return (
    <div className="bg-slate-50 relative rounded-[5px] size-full" data-name="destinatario">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-violet-200 inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[14px] items-center justify-center p-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}