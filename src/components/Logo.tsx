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
      className={`inline-flex items-center select-none cursor-pointer transition-all duration-300 hover:opacity-90 active:scale-95 ${className}`}
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
          <div className="h-10 sm:h-12 w-auto flex items-center">
            <img 
              src={librumLogoImg} 
              alt="Librum Technologies Limited" 
              className="h-full w-auto max-w-[240px] sm:max-w-[280px] object-contain filter brightness-100 contrast-105"
              loading="lazy"
            />
          </div>
          <p className="text-[10px] sm:text-xs font-mono text-amber-400/90 tracking-widest uppercase mt-1">
            AUTOMATE • TRANSFORM • GROW
          </p>
        </div>
      ) : variant === 'mark' ? (
        <div className="relative h-8 sm:h-9 w-auto flex items-center">
          <img 
            src={librumLogoImg} 
            alt="Librum Technologies" 
            className="h-full w-auto object-contain filter brightness-100 contrast-105"
            loading="eager"
          />
        </div>
      ) : (
        /* Default Header / Navbar Logo */
        <div className="flex items-center">
          <img 
            src={librumLogoImg} 
            alt="Librum Technologies Limited" 
            className="h-8 sm:h-9 md:h-10 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[290px] object-contain filter brightness-100 contrast-105"
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};
