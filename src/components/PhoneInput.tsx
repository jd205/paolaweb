import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ColombiaFlag } from './flags/ColombiaFlag';
import { USAFlag } from './flags/USAFlag';
import { MexicoFlag } from './flags/MexicoFlag';
import { SpainFlag } from './flags/SpainFlag';
import { ArgentinaFlag } from './flags/ArgentinaFlag';

interface PhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
}

const countryFlags: Record<string, JSX.Element> = {
  '+57': <ColombiaFlag />,
  '+1': <USAFlag />,
  '+52': <MexicoFlag />,
  '+34': <SpainFlag />,
  '+54': <ArgentinaFlag />,
};

const countryOptions = [
  { code: '+57', name: 'Colombia', flag: <ColombiaFlag /> },
  { code: '+1', name: 'USA', flag: <USAFlag /> },
  { code: '+52', name: 'Mexico', flag: <MexicoFlag /> },
  { code: '+34', name: 'Spain', flag: <SpainFlag /> },
  { code: '+54', name: 'Argentina', flag: <ArgentinaFlag /> },
];

export function PhoneInput({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  onFocus,
  onBlur,
  isFocused
}: PhoneInputProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const hasValue = phone.trim() !== '';
  const isFloating = isFocused || isPhoneFocused || hasValue;

  const handleCountrySelect = (code: string) => {
    onCountryCodeChange(code);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full h-[48px]">
      <div className={`flex h-[48px] border-[0.7px] rounded-[5px] transition-all duration-200 bg-white items-center ${
        isFocused || isPhoneFocused
          ? 'border-[#5B21B6] shadow-[1px_1px_3px_0px_rgba(62,28,112,1)]' 
          : 'border-[#94A3B8]'
      }`}>
        <div className="relative flex items-center pl-4 pr-4 border-r border-[#94A3B8]">
          <div className="mr-2">
            {countryFlags[countryCode]}
          </div>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onFocus={() => {
              onFocus();
              setIsPhoneFocused(true);
            }}
            onBlur={(e) => {
              // Delay blur to allow click on dropdown item
              setTimeout(() => {
                setIsDropdownOpen(false);
                onBlur();
                setIsPhoneFocused(false);
              }, 200);
            }}
            tabIndex={0}
            className="appearance-none bg-transparent pr-6 text-[#1E293B] text-[14px] font-['Poppins'] focus:outline-none cursor-pointer"
          >
            {countryCode}
          </div>
          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
          {isDropdownOpen && (
            <div className="absolute top-[calc(100%+4px)] left-0 bg-white border-[0.7px] border-[#94A3B8] rounded-[5px] shadow-lg z-10 w-full max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {countryOptions.map(option => (
                <div
                  key={option.code}
                  className="flex items-center gap-2 px-[12px] py-[12px] cursor-pointer hover:bg-[#F8FAFC] transition-colors border-b border-slate-200 last:border-b-0"
                  onClick={() => handleCountrySelect(option.code)}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {option.flag}
                  </div>
                  <span className="text-[#1E293B] text-[14px] font-['Poppins']">{option.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <input
          type="tel"
          placeholder=""
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value.replace(/\D/g, ''))}
          onFocus={() => {
            onFocus();
            setIsPhoneFocused(true);
          }}
          onBlur={() => {
            onBlur();
            setIsPhoneFocused(false);
          }}
          className="flex-1 px-4 h-full border-none focus:outline-none text-[14px] font-['Poppins'] text-slate-800"
          required
        />
      </div>
      
      <label
        className={`absolute left-[12px] font-['Poppins'] transition-all duration-200 pointer-events-none ${
          isFloating
            ? 'top-[6px] text-[10px] text-[#94A3B8]'
            : 'top-1/2 -translate-y-1/2 text-[14px] text-[#94A3B8]'
        }`}
      >
        Teléfono
      </label>
    </div>
  );
}