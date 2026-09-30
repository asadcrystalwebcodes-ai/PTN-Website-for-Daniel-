import React from 'react';
import { IMAGES } from '../assets/images';
import { PageView } from '../types';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CandidatesPageProps {
  onNavigate: (view: PageView) => void;
  onOpenJobSeekerModal: () => void;
}

export const CandidatesPage: React.FC<CandidatesPageProps> = ({
  onNavigate,
  onOpenJobSeekerModal,
}) => {
  const recruitTiles = [
    {
      title: 'CNC & MACHINING',
      roles: 'CNC Turner 2–7 axis, CNC Miller 3, 4 & 5 axis, CAD/CAM Programmers',
      image: IMAGES.aerospaceTitanium,
      tag: 'CNC FOCUS',
    },
    {
      title: 'ENGINEERING & PRODUCTION',
      roles: 'Manufacturing, Production, Mechanical, Design & Project Engineers',
      image: IMAGES.cncOperator,
      tag: 'PROCESS FOCUS',
    },
    {
      title: 'QUALITY & METROLOGY',
      roles: 'Quality Inspector, Quality Engineer, CMM & Metrology Technicians',
      image: IMAGES.cmmProbe,
      tag: 'STANDARDS FOCUS',
    },
    {
      title: 'OPERATIONS MANAGEMENT',
      roles: 'Production, Engineering, Operations & Quality Leadership',
      image: IMAGES.facilityFloor,
      tag: 'LEADERSHIP FOCUS',
    },
  ];

  const whyRegister = [
    'Access to opportunities not always publicly advertised',
    'Confidential career conversations and market rate benchmarking',
    'Interview preparation and direct feedback',
    'No candidate fees — 100% free representation',
  ];

  return (
    <div className="w-full bg-[#070F1D] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section className="py-16 sm:py-20 bg-[#050C16] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  FOR CANDIDATES
                </span>
                <span className="w-8 h-[1px] bg-[#00A3E0]" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Your next opportunity starts here.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Whether you&apos;re an experienced CNC programmer, quality professional, engineer or manufacturing leader, PTN connects specialist talent with businesses that value their skills.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenJobSeekerModal}
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(0,163,224,0.3)]"
                >
                  <span>Submit Your CV</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  Browse Vacancies
                </button>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>STRICTLY CONFIDENTIAL · NEVER SHARED WITHOUT PERMISSION</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative border border-slate-800 overflow-hidden shadow-2xl">
              <img
                src={IMAGES.qualityInspection}
                alt="Precision Metrology Professional"
                className="w-full h-[340px] object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300">
                UK PRECISION TALENT REPRESENTATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS WE RECRUIT WITH VISUAL DISCIPLINE CARDS */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
              DISCIPLINES
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#070F1D]">
              Areas We Recruit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recruitTiles.map((tile) => (
              <div
                key={tile.title}
                className="bg-slate-50 border border-slate-200 overflow-hidden group hover:border-[#00A3E0] transition-colors"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00A3E0] font-bold bg-black/70 px-2 py-0.5 border border-[#00A3E0]/30">
                      {tile.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-base font-bold uppercase text-[#070F1D] group-hover:text-[#00A3E0] transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tile.roles}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WHY REGISTER CHECKLIST */}
          <div className="mt-12 p-8 bg-slate-100 border border-slate-300/80 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#070F1D]">
              Why register with PTN?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {whyRegister.map((pt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOT READY TO MOVE STRIP */}
      <section className="py-14 bg-[#050C16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold uppercase text-white">
              Not ready to move right now? That&apos;s OK.
            </h3>
            <p className="text-xs text-slate-400">
              We can keep your details confidential and contact you only when the right opportunity comes along.
            </p>
          </div>
          <button
            onClick={onOpenJobSeekerModal}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#0087BA] shrink-0"
          >
            Register Confidentially
          </button>
        </div>
      </section>
    </div>
  );
};
