import React from 'react';
import { ExternalLink, Sparkles, Code2 } from 'lucide-react';

export const WatermarkBadge: React.FC = () => {
  return (
    <aside
      aria-label="Design Agency Credit"
      className="fixed bottom-4 left-4 z-40 select-none group"
    >
      <a
        href="https://crystalwebcodes.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        title="Designed & Developed by Crystal Web Codes"
        className="flex items-center gap-2 px-3 py-1.5 bg-[#050C16]/90 hover:bg-[#070F1D] text-slate-400 hover:text-white border border-slate-800 hover:border-[#00A3E0]/70 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 text-[11px] font-mono"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3E0] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3E0]" />
        </span>
        <span className="text-slate-400 font-medium">Built by</span>
        <span className="font-bold text-slate-200 group-hover:text-[#00A3E0] transition-colors tracking-wide">
          Crystal Web Codes
        </span>
        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#00A3E0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </aside>
  );
};
