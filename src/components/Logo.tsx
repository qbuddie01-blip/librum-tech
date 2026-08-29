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
      className={`inline-flex items-center select-none cursor-pointer transition-all duration-200 hover:opacity-95 active:scale-98 ${className}`}
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
        <div className="flex flex-col items-start gap-2.5">
          <div className="h-12 sm:h-14 md:h-16 w-auto flex items-center">
            <img 
              src={librumLogoImg} 
              alt="Librum Technologies Limited" 
              className="h-full w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-[11px] sm:text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
            AUTOMATE • TRANSFORM • SCALE
          </p>
        </div>
      ) : variant === 'mark' ? (
        <div className="relative h-9 sm:h-11 w-auto flex items-center">
          <img 
            src={librumLogoImg} 
            alt="Librum Technologies" 
            className="h-full w-auto object-contain"
            loading="eager"
          />
        </div>
      ) : (
        /* Default Header / Navbar Logo (Enlarged, Border-free, Seamless) */
        <div className="flex items-center shrink-0">
          <img 
            src={librumLogoImg} 
            alt="Librum Technologies Limited" 
            className="h-8 sm:h-9 md:h-10.5 w-auto max-w-[180px] sm:max-w-[240px] md:max-w-[280px] object-contain"
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};

export default Logo;
