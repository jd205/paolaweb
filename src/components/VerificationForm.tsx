import { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { FloatingLabelInput } from './FloatingLabelInput';
import Download from '../imports/Download';

interface VerificationFormProps {
  onContinue?: () => void;
}

export function VerificationForm({ onContinue }: VerificationFormProps = {}) {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [idFile, setIdFile] = useState<File | null>(null);
  const [domicilioFile, setDomicilioFile] = useState<File | null>(null);
  
  const idFileInputRef = useRef<HTMLInputElement>(null);
  const domicilioFileInputRef = useRef<HTMLInputElement>(null);
  
  const isFormValid = nombreCompleto.trim() !== '' && 
                       fechaNacimiento.trim() !== '' && 
                       idFile !== null && 
                       domicilioFile !== null;

  const handleContinue = () => {
    if (isFormValid && onContinue) {
      onContinue();
    }
  };

  const handleIdFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdFile(e.target.files[0]);
    }
  };

  const handleDomicilioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDomicilioFile(e.target.files[0]);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative w-full">
      {/* Progress indicator */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      </div>

      {/* Header */}
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
          <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-slate-800 whitespace-pre font-medium">Verificación de tu identidad</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {/* Información del representate */}
          <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[244px]">Información del representate</p>
          
          {/* Two input fields */}
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            {/* Nombre completo */}
            <FloatingLabelInput
              label="Nombre completo"
              value={nombreCompleto}
              onChange={setNombreCompleto}
              type="text"
            />

            {/* Fecha de nacimiento */}
            <FloatingLabelInput
              label="DD/MM/AAAA"
              value={fechaNacimiento}
              onChange={setFechaNacimiento}
              type="text"
              placeholderFormat="DD/MM/AAAA"
            />
          </div>

          {/* Identificación oficial */}
          <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[244px]">Identificación oficial</p>
          
          <div className="aspect-[681/48] relative rounded-[6px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="aspect-[681/48] box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <input
                    type="file"
                    onChange={handleIdFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                    ref={idFileInputRef}
                  />
                  <button
                    type="button"
                    className="bg-violet-700 box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[5px] shrink-0 hover:bg-violet-800 transition-colors cursor-pointer"
                    onClick={() => idFileInputRef.current?.click()}
                  >
                    <Download />
                    <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Subir</p>
                  </button>
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                    <div className="flex flex-col font-['Poppins'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-slate-900 w-full">
                      <p className="leading-[1.4]">{idFile ? idFile.name : 'No se ha seleccionado ningún archivo'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comprobante de domicilio */}
          <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-[244px]">Comprobante de domicilio</p>
          
          <div className="relative rounded-[6px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0.3px] border-slate-500 border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="box-border content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <input
                    type="file"
                    onChange={handleDomicilioFileChange}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                    ref={domicilioFileInputRef}
                  />
                  <button
                    type="button"
                    className="bg-violet-700 box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[8px] relative rounded-[5px] shrink-0 hover:bg-violet-800 transition-colors cursor-pointer"
                    onClick={() => domicilioFileInputRef.current?.click()}
                  >
                    <Download />
                    <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Subir</p>
                  </button>
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
                    <div className="flex flex-col font-['Poppins'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-slate-900 w-full">
                      <p className="leading-[1.4]">{domicilioFile ? domicilioFile.name : 'No se ha seleccionado ningún archivo'}</p>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
}