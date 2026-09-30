import React from 'react';
import { IMAGES } from '../assets/images';
import { SPECIALIST_SECTORS } from '../data/jobs';
import { PageView } from '../types';
import { ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: PageView) => void;
  onOpenHiringModal: () => void;
  onOpenJobSeekerModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenHiringModal,
}) => {
  const pillars = [
    {
      step: '01',
      title: 'SPECIALIST RATHER THAN GENERALIST',
      desc: 'We focus exclusively on the engineering and manufacturing market, allowing us to understand the roles, skills and challenges behind every vacancy.',
    },
    {
      step: '02',
      title: 'QUALITY OVER VOLUME',
      desc: 'We focus on relevant candidates rather than sending CVs simply to increase numbers. Every candidate represents a verified technical match.',
    },
    {
      step: '03',
      title: 'PERSONAL SERVICE',
      desc: 'Direct communication, honest advice and a recruitment process built around your requirements with senior director accountability.',
    },
  ];

  return (
    <div className="w-full bg-[#070F1D] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section className="py-16 sm:py-20 border-b border-slate-800/80 bg-[#050C16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                ABOUT PTN
              </span>
              <span className="w-8 h-[1px] bg-[#00A3E0]" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Recruitment done precisely.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Precision Talent Network is a specialist recruitment business focused on connecting exceptional engineering and manufacturing professionals with businesses across the UK. With <strong className="text-white">20+ years industry knowledge</strong>, we understand that quality is paramount.
            </p>
          </div>

          {/* Visual Photography & Stats */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 relative border border-slate-800 overflow-hidden shadow-2xl">
              <img
                src={IMAGES.facilityFloor}
                alt="Modern CNC Machining Floor"
                className="w-full h-[340px] sm:h-[400px] object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs font-mono text-slate-300">
                UK ADVANCED MANUFACTURING // WEST MIDLANDS CORRIDOR
              </div>
            </div>

            <div className="lg:col-span-4 p-8 bg-[#091526] border border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  EXPERIENCE
                </span>
                <div className="text-6xl font-extrabold text-white font-mono">
                  20+
                </div>
                <div className="text-sm font-bold text-slate-200 uppercase tracking-wide">
                  Years Industry Knowledge
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Decades of hands-on involvement with UK manufacturing clusters, precision subcontractors, and tier-1 aerospace suppliers.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <div>· AS9100 &amp; ISO 9001 NETWORK</div>
                <div>· NATIONWIDE UK PLACEMENTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES PTN DIFFERENT */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
              CORE PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#070F1D]">
              What makes PTN different?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item) => (
              <div
                key={item.step}
                className="p-8 bg-slate-50 border border-slate-200 space-y-4 hover:border-[#00A3E0] transition-colors"
              >
                <div className="text-2xl font-mono font-bold text-[#00A3E0]">
                  {item.step}
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-[#070F1D]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST SECTORS GRID */}
      <section className="py-16 sm:py-20 bg-[#070F1D] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                SECTORS
              </span>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mt-1">
                Precision Sectors
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Supporting Britain&apos;s most demanding precision engineering and manufacturing enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SPECIALIST_SECTORS.map((sec) => (
              <div
                key={sec.id}
                className="p-5 bg-[#091526] border border-slate-800 hover:border-[#00A3E0] transition-colors space-y-2"
              >
                <div className="text-[10px] font-mono text-[#00A3E0] uppercase">
                  {sec.id}
                </div>
                <h3 className="text-sm font-bold text-white uppercase">
                  {sec.name}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR CONTACT STRIP */}
      <section className="py-14 bg-[#050C16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="p-8 bg-[#081220] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-mono text-[#00A3E0] uppercase tracking-wider">
                LEADERSHIP CONTACT
              </div>
              <h3 className="text-xl font-bold uppercase text-white">
                Daniel Waite <span className="text-slate-400 text-sm font-normal">| Director</span>
              </h3>
              <p className="text-xs text-slate-400">
                Direct consultation for confidential engineering recruitment and executive search.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenHiringModal}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors"
              >
                Talk to PTN
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
