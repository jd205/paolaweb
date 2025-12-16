import { useState, useRef } from 'react';

const serviceOptions = [
  'Envíos Nacionales',
  'Fulfillment',
  'Envíos internacionales'
];

const merchandiseOptions = [
  'Ropa y accesorios',
  'Electrónicos',
  'Cosméticos y cuidado personal',
  'Suplementos o productos de salud',
  'Hogar y decoración',
  'Alimentos y bebidas',
  'Juguetes o artículos infantiles',
  'Papelería o material de oficina',
  'Refacciones o autopartes',
  'Dispositivos médicos o farmacéuticos',
  'Herramientas o ferretería',
  'Productos para mascotas',
  'Artículos deportivos',
  'Joyas o bisutería',
  'Otros'
];

interface ServicesFormProps {
  onContinue?: () => void;
}

export function ServicesForm({ onContinue }: ServicesFormProps = {}) {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedMerchandise, setSelectedMerchandise] = useState<string>('');
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMerchandiseDropdownOpen, setIsMerchandiseDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const merchandiseDropdownRef = useRef<HTMLDivElement>(null);

  const isFormValid = selectedService !== '' && selectedMerchandise !== '';

  const handleContinue = () => {
    if (isFormValid && onContinue) {
      onContinue();
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative w-full">
      {/* Progress indicator */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      </div>

      {/* Header */}
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
          <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-slate-800 whitespace-pre font-medium">Nuestros servicios</p>
        </div>
      </div>

      {/* Dropdowns */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {/* Service Type Label */}
        <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-[#1E293B] w-full">¿Qué tipo de servicio necesitas?</p>

        {/* Service Dropdown */}
        <div className="content-stretch flex flex-col gap-[16px] h-[48px] items-start relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0 w-full" ref={serviceDropdownRef}>
            <div aria-hidden="true" className="absolute border-[0.7px] border-[#94A3B8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[0px] py-0 relative size-full pt-[0px] pb-[0px] m-[0px]">
                <p className={`basis-0 font-['Poppins'] grow h-[14px] leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] ${selectedService ? 'text-slate-800' : 'text-[#94A3B8]'}`}>
                  {selectedService || 'Selecciona tipo de envío'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0 h-[48px] w-[48px] hover:bg-[#7a3ac9] transition-colors cursor-pointer"
                >
                  <div className="relative shrink-0 size-[14px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d="M2 4.5L7 9.5L12 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Service Dropdown Menu */}
            {isServiceDropdownOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {serviceOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSelectedService(option);
                      setIsServiceDropdownOpen(false);
                    }}
                    className="w-full flex items-center px-[12px] py-[12px] hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left border-b border-slate-200 last:border-b-0"
                  >
                    <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-[#1E293B]">{option}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Merchandise Type Label */}
        <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-[#1E293B] w-full">¿Qué tipo de mercancía envías o vendes?</p>

        {/* Merchandise Dropdown */}
        <div className="content-stretch flex flex-col gap-[16px] h-[48px] items-start relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0 w-full" ref={merchandiseDropdownRef}>
            <div aria-hidden="true" className="absolute border-[0.7px] border-[#94A3B8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-0 py-0 relative size-full">
                <p className={`basis-0 font-['Poppins'] grow h-[14px] leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] ${selectedMerchandise ? 'text-slate-800' : 'text-[#94A3B8]'}`}>
                  {selectedMerchandise || 'Selecciona tipo de mercancía'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsMerchandiseDropdownOpen(!isMerchandiseDropdownOpen)}
                  className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0 h-[48px] w-[48px] hover:bg-[#7a3ac9] transition-colors cursor-pointer"
                >
                  <div className="relative shrink-0 size-[14px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d="M2 4.5L7 9.5L12 4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Merchandise Dropdown Menu */}
            {isMerchandiseDropdownOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {merchandiseOptions.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setSelectedMerchandise(option);
                      setIsMerchandiseDropdownOpen(false);
                    }}
                    className="w-full flex items-center px-[12px] py-[12px] hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left border-b border-slate-200 last:border-b-0"
                  >
                    <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-[#1E293B]">{option}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <button 
          type="button"
          className={`w-full px-4 py-3 rounded-[5px] transition-opacity duration-300 flex items-center justify-center ${isFormValid ? 'bg-[#4C1D95] text-white hover:opacity-90' : 'bg-[#F5F3FF] text-[#9699A0] cursor-not-allowed'}`}
          onClick={handleContinue}
          disabled={!isFormValid}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}