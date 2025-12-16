import svgPaths from '../imports/svg-hcwbtuu4if';
import { createPortal } from 'react-dom';

interface SuccessModalProps {
  onClose: () => void;
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
      style={{
        backgroundColor: 'rgba(109, 105, 118, 0.2)',
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes checkDraw {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      
      <div className="bg-slate-50 relative rounded-[5px] w-full max-w-[400px] animate-[fadeIn_0.3s_ease-out_0.1s_both]">
        <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-violet-200 inset-0 pointer-events-none rounded-[5px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[14px] items-center justify-center p-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
              {/* Check Icon with Animation */}
              <div className="overflow-clip relative shrink-0 size-[54px] animate-[scaleIn_0.6s_ease-out_0.2s_both]">
                <div className="absolute bottom-0 left-0 right-[0.13%] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
                    <g id="Layer 1">
                      <path d={svgPaths.p2abd6f80} fill="#2DB674" id="Vector" />
                      <path 
                        d={svgPaths.p23da3d00} 
                        fill="white" 
                        id="Vector_2"
                        style={{
                          animation: 'checkDraw 0.5s ease-out 0.5s both',
                          strokeDasharray: '100',
                          strokeDashoffset: '100',
                        }}
                      />
                      <g id="Vector_3"></g>
                    </g>
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['Poppins'] h-[35px] leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-slate-800 w-full font-medium">¡Todo listo!</p>
                <p className="font-['Poppins'] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-slate-800 w-full">
                  Hemos recibido tus datos correctamente. Tu cuenta será activada muy pronto para que puedas comenzar a disfrutar del servicio.
                </p>
                
                {/* Button */}
                <div className="bg-violet-700 h-[32px] relative rounded-[5px] shrink-0 w-full hover:bg-violet-800 transition-colors">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex flex-row items-center justify-center size-full cursor-pointer"
                  >
                    <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[18px] py-[7px] relative w-full">
                      <p className="font-['Poppins'] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre font-medium">Ir a la plataforma</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}