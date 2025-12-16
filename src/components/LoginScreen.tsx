import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { EmissaryLogo } from './EmissaryLogo';
import { GoogleButton } from './GoogleButton';
import { HeroImage } from './HeroImage';
import Check from '../imports/Check';
import { FloatingLabelInput } from './FloatingLabelInput';
import { PasswordFloatingLabelInput } from './PasswordFloatingLabelInput';

interface LoginScreenProps {
  onNavigateToRegister: () => void;
}

export function LoginScreen({ onNavigateToRegister }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSession, setKeepSession] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', { email, password, keepSession });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-[438px]">
          <div className="mb-12 flex justify-center items-center">
            <EmissaryLogo />
          </div>

          <h1 className="mb-8 text-[#1E293B] text-[28px] leading-[24px] text-center font-bold">Inicia sesión</h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <GoogleButton onClick={() => console.log('Google login')}>
              Continuar con Google
            </GoogleButton>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-[#94A3B8]">o</span>
              </div>
            </div>

            <FloatingLabelInput
              label="Email"
              value={email}
              onChange={setEmail}
              type="email"
              required
            />

            <PasswordFloatingLabelInput
              label="Contraseña"
              value={password}
              onChange={setPassword}
              required
            />

            <div className="flex items-center bg-[rgba(100,116,139,0)]">
              <div
                onClick={() => setKeepSession(!keepSession)}
                className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-all ${
                  keepSession 
                    ? 'bg-[#0EF3A0] border-[#0EF3A0]' 
                    : 'bg-white border-[#64748B]'
                }`}
              >
                {keepSession && (
                  <div className="w-full h-full flex items-center justify-center">
                    <Check />
                  </div>
                )}
              </div>
              <input
                type="checkbox"
                id="keepSession"
                checked={keepSession}
                onChange={(e) => setKeepSession(e.target.checked)}
                className="sr-only"
              />
              <label htmlFor="keepSession" className="ml-2 text-[#1E293B] cursor-pointer">
                Mantener mi sesión iniciada
              </label>
            </div>

            <button
              type="submit"
              disabled={!email || !password}
              className={`w-full px-4 py-3 rounded-[5px] transition-opacity duration-300 flex items-center justify-center ${
                email && password
                  ? 'bg-[#4C1D95] text-white hover:opacity-90'
                  : 'bg-[#F5F3FF] text-[#9699A0] cursor-not-allowed'
              }`}
            >
              Iniciar sesión
            </button>

            <div className="text-center text-[#1E293B]">
              Al continuar, acepta los <span className="underline cursor-pointer">Términos de servicio</span> y la{' '}
              <span className="underline cursor-pointer">Política de privacidad</span> de Emissary.
            </div>

            <div className="text-center text-[#1E293B]">
              ¿Todavía no tienes una cuenta?{' '}
              <button
                type="button"
                onClick={onNavigateToRegister}
                className="text-[#4C1D95] hover:underline"
              >
                Regístrate
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