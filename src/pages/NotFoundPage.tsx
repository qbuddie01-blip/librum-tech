import React from 'react';
import type { PageRoute } from '../types';
import { AlertTriangle, Home } from 'lucide-react';

interface NotFoundPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onRouteChange }) => {
  return (
    <div className="pt-32 pb-24 min-h-[75vh] flex items-center justify-center relative overflow-hidden bg-tech-mesh text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-mono text-amber-400 mb-6">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>404 // ROUTE DISCONNECTED</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-white tracking-tight">
          SYSTEM ROUTE <span className="gold-gradient-text">NOT FOUND</span>
        </h1>

        <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          The operational pipeline or endpoint you are attempting to access does not exist on the Librum Technologies network.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onRouteChange('home')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>RETURN TO LIBRUM</span>
          </button>

          <button
            onClick={() => onRouteChange('ai-automation')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>EXPLORE AI AUTOMATION</span>
          </button>
        </div>
      </div>
    </div>
  );
};
