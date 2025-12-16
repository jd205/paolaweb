import { useState, useRef } from 'react';
import { ServicesForm } from './ServicesForm';
import { VerificationForm } from './VerificationForm';
import { FloatingLabelInput } from './FloatingLabelInput';
import { FloatingLabelPhoneInput } from './FloatingLabelPhoneInput';

type UserType = 'fisica' | 'empresa' | 'marca';

interface Country {
  name: string;
  code: string;
  flag: JSX.Element;
}

const countries: Country[] = [
  {
    name: 'Colombia',
    code: '+57',
    flag: (
      <svg className="block size-full" viewBox="0 0 18 11" fill="none">
        <rect width="18" height="5.5" fill="#FCD116"/>
        <rect y="5.5" width="18" height="2.75" fill="#003893"/>
        <rect y="8.25" width="18" height="2.75" fill="#CE1126"/>
      </svg>
    )
  },
  {
    name: 'México',
    code: '+52',
    flag: (
      <svg className="block size-full" viewBox="0 0 18 11" fill="none">
        <rect width="18" height="11" fill="white"/>
        <rect width="6" height="11" fill="#006847"/>
        <rect x="12" width="6" height="11" fill="#CE1126"/>
      </svg>
    )
  },
  {
    name: 'Estados Unidos',
    code: '+1',
    flag: (
      <svg className="block size-full" viewBox="0 0 18 11" fill="none">
        <rect width="18" height="11" fill="#B22234"/>
        <rect y="0.85" width="18" height="0.85" fill="white"/>
        <rect y="2.54" width="18" height="0.85" fill="white"/>
        <rect y="4.23" width="18" height="0.85" fill="white"/>
        <rect y="5.92" width="18" height="0.85" fill="white"/>
        <rect y="7.61" width="18" height="0.85" fill="white"/>
        <rect y="9.31" width="18" height="0.85" fill="white"/>
        <rect width="7.2" height="5.92" fill="#3C3B6E"/>
      </svg>
    )
  },
  {
    name: 'España',
    code: '+34',
    flag: (
      <svg className="block size-full" viewBox="0 0 18 11" fill="none">
        <rect width="18" height="11" fill="#F1BF00"/>
        <rect y="0" width="18" height="2.75" fill="#AA151B"/>
        <rect y="8.25" width="18" height="2.75" fill="#AA151B"/>
      </svg>
    )
  },
  {
    name: 'Argentina',
    code: '+54',
    flag: (
      <svg className="block size-full" viewBox="0 0 18 11" fill="none">
        <rect width="18" height="11" fill="white"/>
        <rect y="0" width="18" height="3.67" fill="#74ACDF"/>
        <rect y="7.33" width="18" height="3.67" fill="#74ACDF"/>
      </svg>
    )
  }
];

interface ActivationFormProps {
  onContinue?: () => void;
}

export function ActivationForm({ onContinue }: ActivationFormProps = {}) {
  const [userType, setUserType] = useState<UserType>('fisica');
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facebook: '',
    instagram: '',
    website: ''
  });

  const getNamePlaceholder = () => {
    switch (userType) {
      case 'fisica':
        return 'Nombre completo';
      case 'empresa':
        return 'Nombre de la empresa';
      case 'marca':
        return 'Nombre de la marca';
      default:
        return 'Nombre completo';
    }
  };
  
  // Check if all required fields are filled
  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.phone.trim() !== '' &&
                      formData.facebook.trim() !== '' &&
                      formData.instagram.trim() !== '' &&
                      formData.website.trim() !== '';
  
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
        <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
        <div className="bg-[#d9d9d9] h-[4px] rounded-[3px] shrink-0 w-[24px]" />
      </div>

      {/* Header */}
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
          <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-slate-800 whitespace-pre font-medium">Háblanos sobre ti</p>
        </div>
      </div>

      {/* Form */}
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
        {/* User Type Tabs */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => setUserType('fisica')}
            className={`basis-0 grow h-[34px] min-h-px min-w-px relative shrink-0 rounded-[3px] transition-colors ${
              userType === 'fisica'
                ? 'bg-violet-50 border border-violet-800'
                : 'bg-slate-50 border border-slate-500'
            }`}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[34px] items-center justify-center p-[8px] relative w-full">
                <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre ${
                  userType === 'fisica' ? 'text-violet-900 font-medium' : 'text-violet-900'
                }`}>Persona física</p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setUserType('empresa')}
            className={`basis-0 grow h-[34px] min-h-px min-w-px relative shrink-0 rounded-[3px] transition-colors ${
              userType === 'empresa'
                ? 'bg-violet-50 border border-violet-800'
                : 'bg-slate-50 border border-slate-500'
            }`}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[34px] items-center justify-center p-[8px] relative w-full">
                <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre ${
                  userType === 'empresa' ? 'text-violet-900 font-medium' : 'text-violet-900'
                }`}>Empresa</p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setUserType('marca')}
            className={`basis-0 grow h-[34px] min-h-px min-w-px relative shrink-0 rounded-[3px] transition-colors ${
              userType === 'marca'
                ? 'bg-violet-50 border border-violet-800'
                : 'bg-slate-50 border border-slate-500'
            }`}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[34px] items-center justify-center p-[8px] relative w-full">
                <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre ${
                  userType === 'marca' ? 'text-violet-900 font-medium' : 'text-violet-900'
                }`}>Marca</p>
              </div>
            </div>
          </button>
        </div>

        {/* Name Input */}
        <FloatingLabelInput
          label={getNamePlaceholder()}
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          required
        />

        {/* Email and Phone Row */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          {/* Email Input */}
          <FloatingLabelInput
            label="Correo electrónico"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            type="email"
            required
          />

          {/* Phone Input with Flag */}
          <FloatingLabelPhoneInput
            label="Teléfono"
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value })}
            selectedCountry={selectedCountry}
            countries={countries}
            onCountryChange={setSelectedCountry}
            required
          />
        </div>

        {/* Facebook and Instagram Row */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <FloatingLabelInput
            label="Facebook"
            value={formData.facebook}
            onChange={(value) => setFormData({ ...formData, facebook: value })}
            required
          />

          <FloatingLabelInput
            label="Instagram"
            value={formData.instagram}
            onChange={(value) => setFormData({ ...formData, instagram: value })}
            required
          />
        </div>

        {/* Website Input */}
        <FloatingLabelInput
          label="Página web"
          value={formData.website}
          onChange={(value) => setFormData({ ...formData, website: value })}
          type="url"
          required
        />

        {/* Continue Button */}
        <button 
          type="button"
          onClick={handleContinue}
          disabled={!isFormValid}
          className={`w-full px-4 py-3 rounded-[5px] transition-opacity duration-300 flex items-center justify-center ${isFormValid ? 'bg-[#4C1D95] text-white hover:opacity-90' : 'bg-[#F5F3FF] text-[#9699A0] cursor-not-allowed'}`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}