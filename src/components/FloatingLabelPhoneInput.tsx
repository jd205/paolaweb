import { useState } from 'react';

interface Country {
  name: string;
  code: string;
  flag: JSX.Element;
}

interface FloatingLabelPhoneInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  selectedCountry: Country;
  countries: Country[];
  onCountryChange: (country: Country) => void;
  required?: boolean;
}

export function FloatingLabelPhoneInput({ 
  label, 
  value, 
  onChange,
  selectedCountry,
  countries,
  onCountryChange,
  required = false 
}: FloatingLabelPhoneInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasValue = value.trim() !== '';
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative w-full h-[48px]">
      <div className={`flex h-[48px] border-[0.7px] rounded-[5px] transition-all duration-200 bg-white items-center ${
        isFocused || hasValue
          ? 'border-[#5B21B6] shadow-[1px_1px_3px_0px_rgba(62,28,112,1)]'
          : 'border-[#94A3B8]'
      }`}>
        {/* Country Dropdown */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="h-full flex items-center gap-[4px] px-[8px] border-r border-[#94A3B8] shrink-0 hover:bg-slate-50 transition-colors rounded-l-[5px]"
        >
          <div className="overflow-clip relative shrink-0 size-[18px]">
            {selectedCountry.flag}
          </div>
          <p className="font-['Poppins'] leading-[14px] not-italic text-[12px] text-nowrap text-slate-900 whitespace-pre">{selectedCountry.code}</p>
          <div className="relative shrink-0 size-[14px]">
            <svg className="block size-full" fill="none" viewBox="0 0 14 14">
              <path d="M2 4.5L7 9.5L12 4.5" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>

        {/* Phone Input */}
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          placeholder={isFloating ? '' : label}
          className="flex-1 h-full px-[12px] py-0 bg-transparent border-none focus:outline-none font-['Poppins'] text-[14px] text-slate-800 placeholder:text-[#94A3B8] rounded-r-[5px] flex items-center"
        />
      </div>

      {/* Floating Label */}
      <label
        className={`absolute left-[88px] font-['Poppins'] text-[#94A3B8] transition-all duration-200 pointer-events-none ${
          isFloating
            ? 'top-[6px] text-[10px] opacity-100'
            : 'top-[16px] text-[14px] opacity-0'
        }`}
      >
        {label}
      </label>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-[52px] left-0 bg-white border border-[#94A3B8] rounded-[5px] shadow-lg z-50 w-[200px] max-h-[240px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {countries.map((country, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onCountryChange(country);
                setIsDropdownOpen(false);
              }}
              className="w-full flex items-center gap-[8px] px-[12px] py-[10px] hover:bg-slate-50 transition-colors cursor-pointer text-left border-b border-slate-200 last:border-b-0"
            >
              <div className="overflow-clip relative shrink-0 size-[18px]">
                {country.flag}
              </div>
              <div className="flex flex-col">
                <p className="font-['Poppins'] leading-[14px] not-italic text-[12px] text-slate-900">{country.name}</p>
                <p className="font-['Poppins'] leading-[14px] not-italic text-[12px] text-slate-900">{country.code}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}