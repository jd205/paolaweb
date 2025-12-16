import { useState } from 'react';
import { SuccessModal } from './SuccessModal';
import { FloatingLabelInput } from './FloatingLabelInput';

type InvoiceOption = 'no_requiere' | 'requiero_facturacion';
type TipoPersona = 'fisica' | 'moral';

const cfdiOptions = [
  'G01 - Adquisición de mercancías',
  'G02 - Devoluciones, descuentos o bonificaciones',
  'G03 - Gastos en general',
  'I01 - Construcciones',
  'I02 - Mobiliario y equipo de oficina',
  'I03 - Equipo de transporte',
  'I04 - Equipo de cómputo',
  'D01 - Honorarios médicos',
  'D10 - Pagos por servicios educativos',
  'P01 - Por definir',
];

const coloniaOptions = [
  'San Jeronimo',
  'Centro',
  'Del Valle',
  'Roma Norte',
  'Condesa',
];

const ciudadOptions = [
  'Monterrey',
  'Ciudad de México',
  'Guadalajara',
  'Puebla',
  'Querétaro',
];

const estadoOptions = [
  'Nuevo León',
  'Ciudad de México',
  'Jalisco',
  'Puebla',
  'Querétaro',
];

interface BillingFormProps {
  onContinue?: () => void;
}

export function BillingForm({ onContinue }: BillingFormProps = {}) {
  const [invoiceOption, setInvoiceOption] = useState<InvoiceOption>('no_requiere');
  const [isInvoiceDropdownOpen, setIsInvoiceDropdownOpen] = useState(false);
  const [tipoPersona, setTipoPersona] = useState<TipoPersona>('fisica');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Fiscal data fields
  const [razonSocial, setRazonSocial] = useState('');
  const [rfc, setRfc] = useState('');
  const [selectedCfdi, setSelectedCfdi] = useState('');
  const [isCfdiDropdownOpen, setIsCfdiDropdownOpen] = useState(false);
  
  // Address fields
  const [calle, setCalle] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [numeroInterior, setNumeroInterior] = useState('');
  const [selectedColonia, setSelectedColonia] = useState('');
  const [isColoniaDropdownOpen, setIsColoniaDropdownOpen] = useState(false);
  const [selectedCiudad, setSelectedCiudad] = useState('');
  const [isCiudadDropdownOpen, setIsCiudadDropdownOpen] = useState(false);
  const [selectedEstado, setSelectedEstado] = useState('');
  const [isEstadoDropdownOpen, setIsEstadoDropdownOpen] = useState(false);
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const isFormValid = invoiceOption === 'no_requiere' || (
    razonSocial.trim() !== '' &&
    rfc.trim() !== '' &&
    selectedCfdi !== '' &&
    calle.trim() !== '' &&
    codigoPostal.trim() !== '' &&
    numeroInterior.trim() !== '' &&
    selectedColonia !== '' &&
    selectedCiudad !== '' &&
    selectedEstado !== '' &&
    correo.trim() !== '' &&
    telefono.trim() !== ''
  );

  const handleContinue = () => {
    if (isFormValid) {
      setShowSuccessModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    if (onContinue) {
      onContinue();
    }
  };

  const DropdownIcon = () => (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame 8873">
          <path d="M2 4.5L7 9.5L12 4.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative w-full">
      {/* Progress indicator - 4/4 filled */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-violet-700 h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      </div>

      {/* Header */}
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
          <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-slate-800 whitespace-pre font-medium">Datos de facturación</p>
        </div>
      </div>

      {/* Form */}
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        {/* ¿Requieres factura? */}
        <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-full">¿Requieres factura?</p>
        
        <div className="content-stretch flex flex-col gap-[16px] h-[48px] items-start relative shrink-0 w-full">
          <div className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[0.7px] border-[#94A3B8] border-solid inset-0 pointer-events-none rounded-[5px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[0px] py-0 relative size-full pt-[0px] pb-[0px] m-[0px]">
                <p className={`basis-0 font-['Poppins'] grow h-[14px] leading-[14px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] ${invoiceOption ? 'text-slate-800' : 'text-[#94A3B8]'}`}>
                  {invoiceOption === 'requiero_facturacion' ? 'Requiero facturación' : invoiceOption === 'no_requiere' ? 'No requiere factura' : 'Seleccionar'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsInvoiceDropdownOpen(!isInvoiceDropdownOpen)}
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
            
            {/* Dropdown options */}
            {isInvoiceDropdownOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <button
                  type="button"
                  onClick={() => {
                    setInvoiceOption('no_requiere');
                    setIsInvoiceDropdownOpen(false);
                  }}
                  className="w-full flex items-center px-[12px] py-[12px] hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left border-b border-slate-200"
                >
                  <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-[#1E293B]">No requiere</p>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInvoiceOption('requiero_facturacion');
                    setIsInvoiceDropdownOpen(false);
                  }}
                  className="w-full flex items-center px-[12px] py-[12px] hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left"
                >
                  <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-[#1E293B]">Requiero facturación</p>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Conditional content based on selection */}
        {invoiceOption === 'no_requiere' ? (
          <>
            <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[12px] text-slate-800 w-full">
              Si no solicitas factura, tus operaciones se facturarán al público en general.
              <br />
              Podrás agregar tus datos fiscales más adelante desde el menú "Movimientos", en la sección "Datos fiscales".
            </p>
          </>
        ) : (
          <>
            {/* Tipo de persona */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-full">Tipo de persona</p>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                {/* Física */}
                <div className="basis-0 bg-violet-50 content-stretch flex gap-[18px] grow h-[48px] items-center justify-center min-h-px min-w-px relative shrink-0">
                  <button
                    type="button"
                    onClick={() => setTipoPersona('fisica')}
                    className={`basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative rounded-[5px] shrink-0 ${tipoPersona === 'fisica' ? 'border-[0.7px] border-solid border-violet-800' : 'bg-slate-50 border-[0.7px] border-[#94A3B8] border-solid'}`}
                  >
                    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center p-[8px] relative w-full">
                          <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${tipoPersona === 'fisica' ? 'font-medium text-violet-900' : 'text-violet-900'}`}>Fisica</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Moral */}
                <button
                  type="button"
                  onClick={() => setTipoPersona('moral')}
                  className={`basis-0 bg-slate-50 content-stretch flex grow items-center min-h-px min-w-px relative rounded-[5px] shrink-0 border-[0.7px] border-[#94A3B8] border-solid ${tipoPersona === 'moral' ? 'border-[0.7px] border-solid border-violet-800 bg-violet-50' : ''}`}
                >
                  <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center p-[8px] relative w-full">
                        <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${tipoPersona === 'moral' ? 'font-medium text-violet-900' : 'text-violet-900'}`}>Moral</p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Ingresa tus datos fiscales */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-full">Ingresa tus datos fiscales</p>
              
              {/* Razón social and RFC */}
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                <FloatingLabelInput
                  label="Razón social"
                  value={razonSocial}
                  onChange={(value) => setRazonSocial(value)}
                  required
                />

                <FloatingLabelInput
                  label="RFC"
                  value={rfc}
                  onChange={(value) => setRfc(value)}
                  required
                />
              </div>

              {/* Uso de CFDI dropdown */}
              <div className="content-stretch flex flex-col gap-[16px] h-[48px] items-start relative shrink-0 w-full">
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[0.7px] border-[#94A3B8] border-solid inset-0 pointer-events-none rounded-[5px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <button
                      type="button"
                      onClick={() => setIsCfdiDropdownOpen(!isCfdiDropdownOpen)}
                      className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-0 py-0 relative size-full cursor-pointer"
                    >
                      <p className={`basis-0 font-['Poppins'] grow h-[14px] leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left ${selectedCfdi ? 'text-slate-800' : 'text-slate-400'}`}>
                        {selectedCfdi || 'Uso de CFDI'}
                      </p>
                      <div className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0 size-[48px] hover:bg-[#7a3ac9] transition-colors">
                        <DropdownIcon />
                      </div>
                    </button>
                  </div>
                  
                  {isCfdiDropdownOpen && (
                    <div className="absolute mt-1 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {cfdiOptions.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedCfdi(option);
                            setIsCfdiDropdownOpen(false);
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
            </div>

            {/* Dirección fiscal */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Poppins'] h-[15px] leading-[12px] not-italic relative shrink-0 text-[14px] text-slate-800 w-full">Dirección fiscal:</p>
              
              {/* Calle y número, Código postal */}
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                <FloatingLabelInput
                  label="Calle y número"
                  value={calle}
                  onChange={(value) => setCalle(value)}
                  required
                />

                <FloatingLabelInput
                  label="Código postal"
                  value={codigoPostal}
                  onChange={(value) => setCodigoPostal(value)}
                  required
                />
              </div>

              {/* Número interior/exterior, Colonia */}
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                {/* Número interior/exterior */}
                <div className="basis-0 grow shrink-0">
                  <FloatingLabelInput
                    label="Número interior/exterior"
                    value={numeroInterior}
                    onChange={(value) => setNumeroInterior(value)}
                    required
                  />
                </div>

                {/* Colonia dropdown */}
                <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative rounded-[5px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[0.7px] border-[#94A3B8] border-solid inset-0 pointer-events-none rounded-[5px]" />
                  <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                        {selectedColonia ? (
                          <div className="basis-0 box-border content-stretch flex flex-col font-['Poppins'] grow h-full items-start justify-between min-h-px min-w-px not-italic px-0 py-[6px] relative shrink-0 text-nowrap whitespace-pre">
                            <p className="leading-[normal] relative shrink-0 text-[10px] text-slate-400">Colonia</p>
                            <p className="leading-[normal] relative shrink-0 text-[14px] text-slate-800">{selectedColonia}</p>
                          </div>
                        ) : (
                          <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-slate-400">Colonia</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsColoniaDropdownOpen(!isColoniaDropdownOpen)}
                    className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0 size-[48px] hover:bg-[#7a3ac9] transition-colors cursor-pointer"
                  >
                    <DropdownIcon />
                  </button>
                  
                  {isColoniaDropdownOpen && (
                    <div className="absolute top-[calc(100%+4px)] left-0 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {coloniaOptions.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedColonia(option);
                            setIsColoniaDropdownOpen(false);
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

              {/* Ciudad, Estado */}
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                {/* Ciudad dropdown */}
                <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative rounded-[5px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[0.7px] border-[#94A3B8] border-solid inset-0 pointer-events-none rounded-[5px]" />
                  <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                        {selectedCiudad ? (
                          <div className="basis-0 box-border content-stretch flex flex-col font-['Poppins'] grow h-full items-start justify-between min-h-px min-w-px not-italic px-0 py-[6px] relative shrink-0 text-nowrap whitespace-pre">
                            <p className="leading-[normal] relative shrink-0 text-[10px] text-slate-400">Ciudad</p>
                            <p className="leading-[normal] relative shrink-0 text-[14px] text-slate-800">{selectedCiudad}</p>
                          </div>
                        ) : (
                          <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-slate-400">Ciudad</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCiudadDropdownOpen(!isCiudadDropdownOpen)}
                    className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0 size-[48px] hover:bg-[#7a3ac9] transition-colors cursor-pointer"
                  >
                    <DropdownIcon />
                  </button>
                  
                  {isCiudadDropdownOpen && (
                    <div className="absolute top-[calc(100%+4px)] left-0 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {ciudadOptions.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedCiudad(option);
                            setIsCiudadDropdownOpen(false);
                          }}
                          className="w-full flex items-center px-[12px] py-[12px] hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left border-b border-slate-200 last:border-b-0"
                        >
                          <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-[#1E293B]">{option}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Estado dropdown */}
                <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative rounded-[5px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[0.7px] border-[#94A3B8] border-solid inset-0 pointer-events-none rounded-[5px]" />
                  <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-row items-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                        {selectedEstado ? (
                          <div className="basis-0 box-border content-stretch flex flex-col font-['Poppins'] grow h-full items-start justify-between min-h-px min-w-px not-italic px-0 py-[6px] relative shrink-0 text-nowrap whitespace-pre">
                            <p className="leading-[normal] relative shrink-0 text-[10px] text-slate-400">Estado</p>
                            <p className="leading-[normal] relative shrink-0 text-[14px] text-slate-800">{selectedEstado}</p>
                          </div>
                        ) : (
                          <p className="font-['Poppins'] leading-[normal] not-italic text-[14px] text-slate-400">Estado</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEstadoDropdownOpen(!isEstadoDropdownOpen)}
                    className="bg-[#612dae] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-br-[5px] rounded-tr-[5px] shrink-0 size-[48px] hover:bg-[#7a3ac9] transition-colors cursor-pointer"
                  >
                    <DropdownIcon />
                  </button>
                  
                  {isEstadoDropdownOpen && (
                    <div className="absolute top-[calc(100%+4px)] left-0 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {estadoOptions.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedEstado(option);
                            setIsEstadoDropdownOpen(false);
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

              {/* Correo, Teléfono */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                  <FloatingLabelInput
                    label="Correo"
                    value={correo}
                    onChange={(value) => setCorreo(value)}
                    type="email"
                    required
                  />

                  <FloatingLabelInput
                    label="Teléfono"
                    value={telefono}
                    onChange={(value) => setTelefono(value)}
                    type="tel"
                    required
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Solicitar activación button */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`w-full px-4 py-3 rounded-[5px] transition-opacity duration-300 flex items-center justify-center ${isFormValid ? 'bg-[#4C1D95] text-white hover:opacity-90' : 'bg-[#F5F3FF] text-[#9699A0] cursor-not-allowed'}`}
        >
          Solicitar activación
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}