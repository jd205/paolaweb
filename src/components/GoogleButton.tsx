import { ReactNode } from 'react';

interface GoogleButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export function GoogleButton({ onClick, children }: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full px-4 py-3 border border-gray-300 rounded-[5px] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors duration-300"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.8055 10.2292C19.8055 9.55127 19.7493 8.86987 19.6299 8.20166H10.2002V12.0492H15.6014C15.3773 13.2913 14.6571 14.3898 13.6025 15.0879V17.5866H16.8259C18.7171 15.8449 19.8055 13.2728 19.8055 10.2292Z"
          fill="#4285F4"
        />
        <path
          d="M10.2002 20.0006C12.9517 20.0006 15.2726 19.1151 16.8296 17.5865L13.6062 15.0879C12.7077 15.6979 11.5491 16.0433 10.2039 16.0433C7.5457 16.0433 5.29034 14.2828 4.50213 11.917H1.17773V14.4927C2.76965 17.6602 6.31168 20.0006 10.2002 20.0006Z"
          fill="#34A853"
        />
        <path
          d="M4.49842 11.917C4.07461 10.6749 4.07461 9.32936 4.49842 8.08729V5.51172H1.17776C-0.225981 8.29508 -0.225981 11.7091 1.17776 14.4925L4.49842 11.917Z"
          fill="#FBBC04"
        />
        <path
          d="M10.2002 3.95805C11.6225 3.93602 13.0037 4.47213 14.0367 5.45361L16.8933 2.60254C15.185 0.990488 12.9333 0.0957031 10.2002 0.121094C6.31168 0.121094 2.76965 2.46146 1.17773 5.6317L4.49839 8.20727C5.28285 5.83828 7.54195 3.95805 10.2002 3.95805Z"
          fill="#EA4335"
        />
      </svg>
      <span className="text-[#1E293B]">{children}</span>
    </button>
  );
}
