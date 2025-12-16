import { useState } from "react";
import { ActivationForm } from "./ActivationForm";
import { ServicesForm } from "./ServicesForm";
import { VerificationForm } from "./VerificationForm";
import { BillingForm } from "./BillingForm";
import { VerificationStatusScreen } from "./VerificationStatusScreen";

export function VerificationFormWrapper() {
  const [currentStep, setCurrentStep] = useState<'activation' | 'services' | 'verification' | 'billing' | 'status'>('activation');
  
  const handleActivationContinue = () => {
    setCurrentStep('services');
  };
  
  const handleServicesContinue = () => {
    setCurrentStep('verification');
  };
  
  const handleVerificationContinue = () => {
    setCurrentStep('billing');
  };
  
  const handleBillingContinue = () => {
    // Navigate to status screen
    setCurrentStep('status');
  };
  
  if (currentStep === 'status') {
    return <VerificationStatusScreen />;
  }
  
  if (currentStep === 'billing') {
    return <BillingForm onContinue={handleBillingContinue} />;
  }
  
  if (currentStep === 'verification') {
    return <VerificationForm onContinue={handleVerificationContinue} />;
  }
  
  if (currentStep === 'services') {
    return <ServicesForm onContinue={handleServicesContinue} />;
  }
  
  return <ActivationForm onContinue={handleActivationContinue} />;
}