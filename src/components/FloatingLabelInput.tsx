import { useState } from 'react';

interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholderFormat?: string;
}

export function FloatingLabelInput({ 
  label, 
  value, 
  onChange, 
  type = 'text',
  required = false,
  placeholderFormat
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.trim() !== '';
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative w-full h-[48px]">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        placeholder={isFocused && placeholderFormat ? placeholderFormat.replace(/\//g, ' / ') : ""}
        className={`w-full h-[48px] px-[12px] bg-white rounded-[5px] transition-all duration-200 focus:outline-none font-['Poppins'] text-[14px] text-slate-800 ${
          isFloating ? 'pt-[20px] pb-[8px]' : 'pt-0 pb-0'
        } ${
          isFocused
            ? 'border-[0.7px] border-[#5B21B6] shadow-[1px_1px_3px_0px_rgba(62,28,112,1)]'
            : 'border-[0.7px] border-[#94A3B8]'
        }`}
      />
      <label
        className={`absolute left-[12px] font-['Poppins'] transition-all duration-200 pointer-events-none ${
          isFloating
            ? 'top-[6px] text-[10px] text-[#94A3B8]'
            : 'top-1/2 -translate-y-1/2 text-[14px] text-[#94A3B8]'
        }`}
      >
        {label}
      </label>
    </div>
  );
}