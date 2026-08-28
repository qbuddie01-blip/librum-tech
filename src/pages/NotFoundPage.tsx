import React from 'react';
import type { PageRoute } from '../types';
import { AlertTriangle, Home } from 'lucide-react';

interface NotFoundPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onRouteChange }) => {
  return (
    <div className="pt-32 pb-24 min-h-[75vh] flex items-center justify-center bg-white text-center">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-heading font-semibold text-rose-700 mb-6">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>404 // PAGE NOT FOUND</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-950 tracking-tight">
          Page not <span className="text-blue-600">found</span>
        </h1>

        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          The page or operational resource you are looking for has been moved, renamed, or does not exist.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onRouteChange('home')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>RETURN TO HOMEPAGE</span>
          </button>

          <button
            onClick={() => onRouteChange('ai-automation')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-heading font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:bg-slate-50"
          >
            <span>EXPLORE AI AUTOMATION</span>
          </button>
        </div>
      </div>
    </div>
  );
};
