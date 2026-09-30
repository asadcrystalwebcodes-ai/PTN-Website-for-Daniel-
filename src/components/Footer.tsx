import React from 'react';
import { PTNLogo } from './PTNLogo';
import { PageView } from '../types';
import { Linkedin, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenHiringModal: () => void;
  onOpenJobSeekerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
}) => {
  const handleNav = (view: PageView) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030812] text-slate-400 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          {/* Left: PTN Logo & Copyright */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none"
            >
              <PTNLogo size="md" theme="dark" />
            </button>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Precision Talent Network. All rights reserved.
            </p>
          </div>

          {/* Center: Statement, Clean Navigation & Socials */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <p className="text-xs text-slate-400">
              Specialist recruitment for Precision Engineering &amp; Manufacturing
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-medium text-slate-300">
              <button
                onClick={() => handleNav('home')}
                className="hover:text-[#00A3E0] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className="hover:text-[#00A3E0] transition-colors"
              >
                About PTN
              </button>
              <button
                onClick={() => handleNav('services')}
                className="hover:text-[#00A3E0] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNav('candidates')}
                className="hover:text-[#00A3E0] transition-colors"
              >
                Candidates
              </button>
              <button
                onClick={() => handleNav('jobs')}
                className="hover:text-[#00A3E0] transition-colors"
              >
                Jobs
              </button>
              <button
                onClick={() => handleNav('employers')}
                className="hover:text-[#00A3E0] transition-colors"
              >
                Employers
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-1 text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00A3E0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00A3E0] transition-colors text-xs font-mono font-bold"
                aria-label="X / Twitter"
              >
                𝕏
              </a>
              <a
                href="https://precisiontalentnetwork.co.uk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00A3E0] transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Slogan with precision reticle graphic line */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end gap-3 text-right">
            <div className="relative h-12 w-[1px] bg-slate-700 hidden sm:block">
              <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full border border-[#00A3E0] bg-[#030812]" />
            </div>
            <div className="text-[11px] font-mono tracking-wider uppercase text-slate-400 leading-snug">
              <div className="text-white font-bold">PRECISION IN PEOPLE.</div>
              <div className="text-[#00A3E0]">TALENT IN THE RIGHT PLACE.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
