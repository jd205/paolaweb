import { useState } from 'react';
import { EmissaryLogo } from './EmissaryLogo';
import { HeroImage } from './HeroImage';
import { FloatingLabelInput } from './FloatingLabelInput';

interface EmailVerificationScreenProps {
  email: string;
  onVerified?: () => void;
}

export function EmailVerificationScreen({ email, onVerified }: EmailVerificationScreenProps) {
  const [code, setCode] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResendMessage, setShowResendMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verify code:', code);
    // Handle verification logic here
    if (onVerified) {
      onVerified();
    }
  };

  const handleResendCode = () => {
    console.log('Resend verification code');
    setShowResendMessage(true);
    // Hide message after 5 seconds
    setTimeout(() => setShowResendMessage(false), 5000);
    // Handle resend logic here
  };

  const maskedEmail = email.replace(/(.{2})(.*)(@.*)/, '$1****$3');

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-[438px]">
          <div className="mb-12">
            <EmissaryLogo />
          </div>

          <h1 className="mb-4 text-[#1E293B] text-center text-[24px] font-bold">Crea tu cuenta</h1>
          
          <p className="mb-8 text-[#1E293B]">
            Te hemos enviado un código de acceso. Por favor, revisa la bandeja de entrada en{' '}
            <span className="font-medium">{maskedEmail}</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FloatingLabelInput
              label="000000"
              value={code}
              onChange={(value) => setCode(value.replace(/\D/g, '').slice(0, 6))}
              type="text"
              required
            />

            <button
              type="submit"
              disabled={code.length !== 6}
              className={`w-full px-4 py-3 rounded-[5px] transition-opacity duration-300 flex items-center justify-center ${
                code.length === 6
                  ? 'bg-[#4C1D95] text-white hover:opacity-90'
                  : 'bg-[#F5F3FF] text-[#9699A0] cursor-not-allowed'
              }`}
            >
              Continuar
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResendCode}
                className="text-[#4C1D95] hover:underline"
              >
                Reenviar código
              </button>
              {showResendMessage && (
                <p className="mt-2 text-[#1E293B]">
                  El código ha sido reenviado. Por favor, revisa tu correo electrónico.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <HeroImage />
    </div>
  );
}