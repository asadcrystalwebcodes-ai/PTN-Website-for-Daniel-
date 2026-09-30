import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { PageView, VacancySubmission } from '../types';
import { 
  ArrowRight, 
  Database, 
  BookOpenCheck, 
  Target, 
  UserCheck, 
  CheckCircle, 
  ShieldCheck 
} from 'lucide-react';

interface EmployersPageProps {
  onNavigate: (view: PageView) => void;
  onSuccessToast: (msg: string) => void;
}

export const EmployersPage: React.FC<EmployersPageProps> = ({
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState<VacancySubmission>({
    name: '',
    company: '',
    email: '',
    phone: '',
    vacancyTitle: '',
    location: '',
    salaryRange: '',
    technicalSpecs: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onSuccessToast(`Vacancy submitted for "${formData.vacancyTitle}". Reference: PTN-VAC-${Math.floor(1000 + Math.random() * 9000)}. Our team will be in touch shortly.`);
    }, 600);
  };

  const featureCards = [
    {
      title: 'Specialist Database',
      desc: 'Exclusive access to vetted candidates across the UK precision engineering market.',
      icon: Database,
    },
    {
      title: 'Market Knowledge',
      desc: 'Understanding of engineering roles, controller capabilities, and salary rates.',
      icon: BookOpenCheck,
    },
    {
      title: 'Targeted Search',
      desc: 'We actively identify and discreetly approach passive talent directly.',
      icon: Target,
    },
    {
      title: 'Personal Service',
      desc: 'One dedicated senior point of contact throughout the entire process.',
      icon: UserCheck,
    },
  ];

  return (
    <div className="w-full bg-[#070F1D] text-slate-100 font-sans">
      {/* HERO SECTION */}
      <section className="py-16 sm:py-20 bg-[#050C16] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  FOR EMPLOYERS
                </span>
                <span className="w-8 h-[1px] bg-[#00A3E0]" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Need skilled engineering talent?
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Finding the right people in <strong className="text-white">Precision Engineering</strong> isn&apos;t simply about advertising a vacancy. That&apos;s where PTN comes in.
              </p>

              <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
                <div>· SHORTLISTS WITHIN 48 HOURS</div>
                <div>· 98% 12-MONTH PLACEMENT RETENTION</div>
              </div>
            </div>

            <div className="lg:col-span-5 relative border border-slate-800 overflow-hidden shadow-2xl">
              <img
                src={IMAGES.facilityFloor}
                alt="UK Precision CNC Manufacturing Floor"
                className="w-full h-[320px] object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300">
                UK ADVANCED MANUFACTURING FACILITY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 FEATURE CARDS (CLEAN WHITE SECTION) */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-6 bg-slate-50 border border-slate-200 space-y-3 hover:border-[#00A3E0] transition-colors"
                >
                  <IconComp className="w-6 h-6 text-[#00A3E0]" />
                  <h3 className="text-base font-bold uppercase text-[#070F1D]">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VACANCY SUBMISSION FORM */}
      <section className="py-16 sm:py-20 bg-[#070F1D] border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
              DIRECT INSTRUCTION
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Tell us about your vacancy
            </h2>
            <p className="text-xs text-slate-400">
              Complete the details below and Daniel Waite or our technical practice team will contact you.
            </p>
          </div>

          <div className="p-8 sm:p-10 bg-[#091526] border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-950/20 border border-emerald-500/40">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold uppercase text-white">
                  Vacancy Successfully Received
                </h3>
                <p className="text-xs text-slate-300">
                  Thank you, {formData.name}. Our technical consultant will review &ldquo;{formData.vacancyTitle}&rdquo; and contact you today.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 border border-slate-700 hover:bg-slate-800"
                >
                  Submit Another Role
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Richard Evans"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Company Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Precision Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="r.evans@apexprecision.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Telephone *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+44 7XXX XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Role / Vacancy *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. CNC Milling Programmer"
                      value={formData.vacancyTitle}
                      onChange={(e) => setFormData({ ...formData, vacancyTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                      Location *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Birmingham / Coventry"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1">
                    Machinery, Controls or Key Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. 5-Axis Heidenhain TNC 640, Fanuc 31i, day shift..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>CONFIDENTIAL CLIENT SERVICE</span>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center gap-2"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Submit Vacancy'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
