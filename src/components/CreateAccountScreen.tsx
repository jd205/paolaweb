import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { EmissaryLogo } from './EmissaryLogo';
import { GoogleButton } from './GoogleButton';
import { HeroImage } from './HeroImage';
import { PhoneInput } from './PhoneInput';
import { FloatingLabelInput } from './FloatingLabelInput';
import { PasswordFloatingLabelInput } from './PasswordFloatingLabelInput';

interface CreateAccountScreenProps {
  onNavigateToLogin: () => void;
  onAccountCreated: (email: string) => void;
}

type UserType = 'fisica' | 'empresa' | 'marca';

export function CreateAccountScreen({ onNavigateToLogin, onAccountCreated }: CreateAccountScreenProps) {
  const [userType, setUserType] = useState<UserType>('fisica');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+57');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [focusedField, setFocusedField] = useState('');

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

  const validatePasswords = () => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordError('La confirmación de la contraseña no coincide.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePasswords()) {
      onAccountCreated(email);
    }
  };

  const isFormValid = name && phone && email && password && confirmPassword && !passwordError;

  const getInputClassName = (fieldName: string, hasError?: boolean) => {
    const isFocused = focusedField === fieldName;
    return `w-full h-[48px] px-[12px] border-[0.7px] rounded-[5px] transition-all duration-300 placeholder:text-[#94A3B8] text-[14px] font-['Poppins'] text-slate-800 focus:outline-none ${
      hasError
        ? 'border-red-500'
        : isFocused 
          ? 'border-[#5B21B6] shadow-[1px_1px_3px_0px_rgba(62,28,112,1)]' 
          : 'border-[#94A3B8]'
    }`;
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-[438px]">
          <div className="mb-12">
            <EmissaryLogo />
          </div>

          <h1 className="mb-8 text-[#1E293B] text-[24px] text-center font-bold">Crea tu cuenta</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <GoogleButton onClick={() => console.log('Google sign up')}>
              Crear cuenta con Google
            </GoogleButton>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-[#94A3B8]">o</span>
              </div>
            </div>

            {/* User Type Tabs */}
            <div className="flex w-full gap-4">
              <button
                type="button"
                onClick={() => setUserType('fisica')}
                className={`flex-1 px-2 py-2 rounded-[5px] border transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                  userType === 'fisica'
                    ? 'bg-[#F5F3FF] text-[#4C1D95] border-[#4C1D95]'
                    : 'bg-[#F8FAFC] text-[#1E293B] border-[#64748B] hover:opacity-90'
                }`}
              >
                Persona física
              </button>
              <button
                type="button"
                onClick={() => setUserType('empresa')}
                className={`flex-1 px-2 py-2 rounded-[5px] border transition-all duration-300 flex items-center justify-center ${
                  userType === 'empresa'
                    ? 'bg-[#F5F3FF] text-[#4C1D95] border-[#4C1D95]'
                    : 'bg-[#F8FAFC] text-[#1E293B] border-[#64748B] hover:opacity-90'
                }`}
              >
                Empresa
              </button>
              <button
                type="button"
                onClick={() => setUserType('marca')}
                className={`flex-1 px-2 py-2 rounded-[5px] border transition-all duration-300 flex items-center justify-center ${
                  userType === 'marca'
                    ? 'bg-[#F5F3FF] text-[#4C1D95] border-[#4C1D95]'
                    : 'bg-[#F8FAFC] text-[#1E293B] border-[#64748B] hover:opacity-90'
                }`}
              >
                Marca
              </button>
            </div>

            <div>
              <FloatingLabelInput
                label={getNamePlaceholder()}
                value={name}
                onChange={setName}
                type="text"
                required
              />
            </div>

            <PhoneInput
              countryCode={countryCode}
              phone={phone}
              onCountryCodeChange={setCountryCode}
              onPhoneChange={setPhone}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField('')}
              isFocused={focusedField === 'phone'}
            />

            <FloatingLabelInput
              label="Correo electrónico"
              value={email}
              onChange={setEmail}
              type="email"
              required
            />

            <PasswordFloatingLabelInput
              label="Contraseña"
              value={password}
              onChange={(value) => {
                setPassword(value);
                if (confirmPassword) validatePasswords();
              }}
              required
            />

            <PasswordFloatingLabelInput
              label="Confirmar contraseña"
              value={confirmPassword}
              onChange={(value) => {
                setConfirmPassword(value);
                if (password) {
                  setTimeout(() => {
                    if (password !== value && value) {
                      setPasswordError('La confirmación de la contraseña no coincide.');
                    } else {
                      setPasswordError('');
                    }
                  }, 500);
                }
              }}
              hasError={!!passwordError}
              required
            />

            {passwordError && (
              <div className="text-red-500 text-sm -mt-2">
                {passwordError}
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full px-4 py-3 rounded-[5px] transition-opacity duration-300 flex items-center justify-center ${
                isFormValid
                  ? 'bg-[#4C1D95] text-white hover:opacity-90'
                  : 'bg-[#F5F3FF] text-[#9699A0] cursor-not-allowed'
              }`}
            >
              Crear cuenta
            </button>

            <div className="text-center text-[#1E293B]">
              Al continuar, acepta los <span className="underline cursor-pointer">Términos de servicio</span> y la{' '}
              <span className="underline cursor-pointer">Política de privacidad</span> de Emissary.
            </div>

            <div className="text-center text-[#1E293B]">
              ¿Ya tienes cuenta?{' '}
              <button
                type="button"
                onClick={onNavigateToLogin}
                className="text-[#4C1D95] hover:underline"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <HeroImage />
    </div>
  );
}