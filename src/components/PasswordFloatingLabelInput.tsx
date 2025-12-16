import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordFloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  hasError?: boolean;
}

export function PasswordFloatingLabelInput({ 
  label, 
  value, 
  onChange, 
  required = false,
  hasError = false
}: PasswordFloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const hasValue = value.trim() !== '';
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative w-full h-[48px]">
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        placeholder=""
        className={`w-full h-[48px] px-[12px] pr-12 bg-white rounded-[5px] transition-all duration-200 focus:outline-none font-['Poppins'] text-[14px] text-slate-800 ${
          isFloating ? 'pt-[20px] pb-[8px]' : 'pt-0 pb-0'
        } ${
          hasError
            ? 'border-[0.7px] border-red-500'
            : isFocused
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
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#1E293B] transition-colors"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
