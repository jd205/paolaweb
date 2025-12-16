import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { CreateAccountScreen } from './components/CreateAccountScreen';
import { EmailVerificationScreen } from './components/EmailVerificationScreen';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'verify' | 'dashboard'>('login');
  const [userEmail, setUserEmail] = useState('');

  return (
    <div className="min-h-screen">
      {currentScreen === 'login' && (
        <LoginScreen onNavigateToRegister={() => setCurrentScreen('register')} />
      )}
      {currentScreen === 'register' && (
        <CreateAccountScreen 
          onNavigateToLogin={() => setCurrentScreen('login')}
          onAccountCreated={(email: string) => {
            setUserEmail(email);
            setCurrentScreen('verify');
          }}
        />
      )}
      {currentScreen === 'verify' && (
        <EmailVerificationScreen 
          email={userEmail}
          onVerified={() => setCurrentScreen('dashboard')}
        />
      )}
      {currentScreen === 'dashboard' && (
        <Dashboard />
      )}
    </div>
  );
}