import React from 'react';
import librumLogoImg from '../assets/librum-logo.png';

interface LogoProps {
  variant?: 'full' | 'mark' | 'compact' | 'footer';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', onClick }) => {
  return (
    <div 
      className={`inline-flex items-center select-none cursor-pointer transition-all duration-200 hover:opacity-90 active:scale-95 ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label="Librum Technologies Limited"
    >
      {variant === 'footer' ? (
        <div className="flex flex-col items-start gap-2">
          <div className="h-10 sm:h-12 w-auto flex items-center bg-slate-900/60 p-2 rounded-xl border border-slate-800">
            <img 
              src={librumLogoImg} 
              alt="Librum Technologies Limited" 
              className="h-full w-auto max-w-[220px] sm:max-w-[280px] object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-[10px] sm:text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase mt-1">
            AUTOMATE • TRANSFORM • SCALE
          </p>
        </div>
      ) : variant === 'mark' ? (
        <div className="relative h-8 sm:h-9 w-auto flex items-center p-1 rounded-lg bg-slate-950">
          <img 
            src={librumLogoImg} 
            alt="Librum Technologies" 
            className="h-full w-auto object-contain"
            loading="eager"
          />
        </div>
      ) : (
        /* Default Header / Navbar Logo */
        <div className="flex items-center bg-slate-950 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors shrink-0">
          <img 
            src={librumLogoImg} 
            alt="Librum Technologies Limited" 
            className="h-6 sm:h-8 w-auto max-w-[140px] sm:max-w-[210px] md:max-w-[250px] object-contain"
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};
