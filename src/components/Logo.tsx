import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'compact' | 'footer';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', onClick }) => {
  return (
    <div 
      className={`inline-flex items-center gap-3 select-none cursor-pointer transition-transform duration-200 hover:opacity-95 ${className}`}
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
      {variant === 'mark' ? (
        <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-950 p-1 border border-amber-500/40 shadow-md">
          <img 
            src="/librum-logo.png" 
            alt="Librum Technologies Mark" 
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>
      ) : variant === 'compact' ? (
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-slate-950 p-0.5 border border-amber-500/30 shrink-0">
            <img 
              src="/librum-logo.png" 
              alt="Librum Technologies" 
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5 leading-tight">
              LIBRUM <span className="text-amber-400 text-[10px] font-mono font-semibold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">AI</span>
            </span>
            <span className="text-[9px] tracking-[0.2em] text-slate-400 font-mono uppercase">Technologies</span>
          </div>
        </div>
      ) : variant === 'footer' ? (
        <div className="flex flex-col items-start gap-2">
          <div className="h-14 max-w-[260px]">
            <img 
              src="/librum-logo.png" 
              alt="Librum Technologies Limited" 
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-xs font-mono text-amber-400/90 tracking-widest uppercase mt-0.5">
            AUTOMATE • TRANSFORM • GROW
          </p>
        </div>
      ) : (
        /* Full default logo */
        <div className="flex items-center gap-3">
          <div className="h-11 sm:h-12">
            <img 
              src="/librum-logo.png" 
              alt="Librum Technologies Limited" 
              className="h-full w-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      )}
    </div>
  );
};
