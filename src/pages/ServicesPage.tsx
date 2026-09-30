import React from 'react';
import { IMAGES } from '../assets/images';
import { PageView } from '../types';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (view: PageView) => void;
  onOpenHiringModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenHiringModal,
}) => {
  const permanentRoles = [
    { title: 'CNC Programmers', spec: 'Online & offline CAM (HyperMill, Mastercam)' },
    { title: 'CNC Setters & Operators', spec: 'Multi-axis milling & turning proving-out' },
    { title: 'Sliding Head Machinists', spec: 'Citizen Cincom, Star, Tornos micro-machining' },
    { title: 'Quality Engineers & Inspectors', spec: 'CMM inspection, APQP, PPAP, AS9100' },
    { title: 'Toolmakers & Grinders', spec: 'Progression press tools, moulds, wire EDM' },
    { title: 'Manufacturing Engineers', spec: 'NPI, tooling strategies, cycle-time reduction' },
  ];

  const executiveRoles = [
    'Operations & Works Managers',
    'Machine Shop Supervisors',
    'Technical & Engineering Managers',
    'Head of Quality & Compliance',
  ];

  const workflowSteps = [
    { num: '01', title: 'UNDERSTAND', text: 'We review your machines, tolerances, controllers, and culture.' },
    { num: '02', title: 'SEARCH', text: 'Targeted headhunting across our proprietary UK precision database.' },
    { num: '03', title: 'QUALIFY', text: 'Technical competence and shift requirements verified before submission.' },
    { num: '04', title: 'INTRODUCE', text: 'Concise candidate profiles with verified machine tool expertise.' },
    { num: '05', title: 'SUPPORT', text: 'Hands-on management through interviews, offers, and start dates.' },
  ];

  return (
    <div className="w-full bg-[#070F1D] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 bg-[#050C16] border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  RECRUITMENT SOLUTIONS
                </span>
                <span className="w-8 h-[1px] bg-[#00A3E0]" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Recruitment solutions built around your business.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                From shop floor machining specialists to senior manufacturing leaders, PTN delivers targeted, vetted recruitment services tailored to the exact demands of precision engineering.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenHiringModal}
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(0,163,224,0.3)]"
                >
                  <span>Instruct PTN On A Vacancy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Hero Image */}
            <div className="lg:col-span-5 relative border border-slate-800 overflow-hidden shadow-2xl">
              <img
                src={IMAGES.aerospaceTitanium}
                alt="5-Axis Aerospace Titanium Machining"
                className="w-full h-[320px] object-cover filter contrast-110"
              />
              <div className="absolute bottom-3 left-3 bg-[#050C16]/90 border border-slate-800 px-3 py-1.5 text-[11px] font-mono text-[#00A3E0]">
                5-AXIS TITANIUM MACHINING CAPABILITY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERMANENT RECRUITMENT */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-4 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                CORE PRACTICE
              </span>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[#070F1D]">
                Permanent Recruitment
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Skilled machinists, quality metrologists, and manufacturing engineers for permanent UK facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {permanentRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 bg-slate-50 border border-slate-200 hover:border-[#00A3E0] transition-colors space-y-1.5 group"
              >
                <h3 className="text-base font-bold uppercase text-[#070F1D] group-hover:text-[#00A3E0] transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {role.spec}
                </p>
              </div>
            ))}
          </div>

          {/* Executive & Technical Strip with CMM Visual */}
          <div className="mt-14 p-8 bg-[#091526] text-white border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                EXECUTIVE &amp; TECHNICAL SEARCH
              </span>
              <h3 className="text-2xl font-bold uppercase">Harder-To-Fill Leadership Appointments</h3>
              <p className="text-xs text-slate-300 max-w-lg">
                Discreet retained search for senior engineering leadership, works management, and quality directors holding critical AS9100 / IATF certifications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {executiveRoles.map((role) => (
                  <div key={role} className="p-3 bg-[#050C16] border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 relative border border-slate-700 overflow-hidden shadow-xl">
              <img
                src={IMAGES.cmmProbe}
                alt="Precision CMM Metrology Probe"
                className="w-full h-48 object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-300">
                METROLOGY &amp; EXECUTIVE SEARCH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STEP PROCESS */}
      <section className="py-16 sm:py-20 bg-[#070F1D] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
              PRECISION WORKFLOW
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Recruitment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 bg-[#091526] border border-slate-800 space-y-3 hover:border-[#00A3E0] transition-colors"
              >
                <div className="text-2xl font-mono font-bold text-[#00A3E0]">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold uppercase text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
