import React, { useState, useEffect } from 'react';
import { PTNLogo } from './PTNLogo';
import { PageView } from '../types';
import { Menu, X, Phone, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenHiringModal: () => void;
  onOpenJobSeekerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenHiringModal,
  onOpenJobSeekerModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About PTN', view: 'about' },
    { label: 'Services', view: 'services' },
    { label: 'Candidates', view: 'candidates' },
    { label: 'Jobs', view: 'jobs' },
    { label: 'Employers', view: 'employers' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Clean Navigation Bar */}
      <nav
        className={`w-full transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-[#050C16]/95 backdrop-blur-md border-slate-800/90 shadow-xl shadow-black/50'
            : 'bg-[#050C16] border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0] rounded-sm"
          >
            <PTNLogo size="md" theme="dark" />
          </button>

          {/* Center Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`relative px-3.5 py-2 text-[13px] tracking-wider uppercase transition-colors duration-150 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-300 hover:text-white font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-white" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* I'm Hiring */}
            <button
              onClick={onOpenHiringModal}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-slate-100 hover:text-white border border-[#00A3E0]/70 hover:border-[#00A3E0] bg-[#070F1D] hover:bg-slate-900 transition-all duration-150"
            >
              I&apos;m Hiring
            </button>

            {/* I'm Looking for a Job */}
            <button
              onClick={onOpenJobSeekerModal}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-all duration-150 shadow-[0_0_15px_rgba(0,163,224,0.3)]"
            >
              I&apos;m Looking for a Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800 rounded-sm focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070F1D] border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-left px-3 py-2.5 text-sm font-medium tracking-wide flex items-center justify-between border-l-2 transition-colors ${
                    isActive
                      ? 'border-[#00A3E0] text-[#00A3E0] bg-[#0B1F44]/20'
                      : 'border-transparent text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-[10px] font-mono text-[#00A3E0]">CURRENT</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHiringModal();
              }}
              className="w-full py-3 px-4 text-xs font-bold tracking-wider uppercase text-white border border-[#00A3E0]/70 bg-[#070F1D] flex items-center justify-center gap-2"
            >
              <span>I&apos;m Hiring</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJobSeekerModal();
              }}
              className="w-full py-3 px-4 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] flex items-center justify-center"
            >
              I&apos;m Looking for a Job
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
