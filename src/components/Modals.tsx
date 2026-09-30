import React, { useState } from 'react';
import { JobVacancy, VacancySubmission, CandidateRegistration } from '../types';
import { X, CheckCircle, Upload, ArrowRight, Shield, Cpu, MapPin, PoundSterling, Clock, FileText } from 'lucide-react';

interface VacancyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const VacancyModal: React.FC<VacancyModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`Vacancy submission received for "${formData.vacancyTitle}". Reference: PTN-VAC-${Math.floor(1000 + Math.random() * 9000)}. Daniel Waite or our technical recruitment team will contact you within 4 hours.`);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#091424] border border-slate-700/80 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00A3E0] uppercase tracking-wider mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
              CLIENT INSTRUCTION // SPECIALIST HIRING
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-sans">
              Tell Us About Your Vacancy
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Direct consultation with recruitment specialists who understand precision engineering roles.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Contact Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. John Mitchell"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Company Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Aerotech Machining Ltd"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Work Email *
              </label>
              <input
                required
                type="email"
                placeholder="j.mitchell@aerotech.co.uk"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
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
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Vacancy / Role Title *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. 5-Axis CNC Milling Programmer"
                value={formData.vacancyTitle}
                onChange={(e) => setFormData({ ...formData, vacancyTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Facility Location *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Birmingham / Coventry / Derby"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Target Machinery / Controls / CAD-CAM (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Heidenhain TNC 640, Fanuc 31i, HyperMill, Mazak Integrex, Mitutoyo CMM"
              value={formData.technicalSpecs}
              onChange={(e) => setFormData({ ...formData, technicalSpecs: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Role Requirements &amp; Scope
            </label>
            <textarea
              rows={3}
              placeholder="Provide key details regarding shift patterns, tolerances, materials (e.g. Inconel, Titanium), or urgency..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <Shield className="w-3.5 h-3.5 text-[#00A3E0]" />
              <span>STRICT CLIENT CONFIDENTIALITY GUARANTEED</span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Transmitting...' : 'Submit Vacancy'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface CandidateRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const CandidateRegisterModal: React.FC<CandidateRegisterModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<CandidateRegistration>({
    name: '',
    email: '',
    phone: '',
    primaryDiscipline: 'CNC & Machining',
    preferredLocation: '',
    expectedSalary: '',
    noticePeriod: '1 Month',
    message: '',
    cvFileName: '',
  });
  const [fileAttached, setFileAttached] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleFakeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileAttached(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`Thank you ${formData.name}. Your details and CV have been securely registered with PTN (REF: CAND-${Math.floor(1000 + Math.random() * 9000)}). Our technical consultants will review your background confidentially.`);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#091424] border border-slate-700/80 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00A3E0] uppercase tracking-wider mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
              CANDIDATE REGISTRATION // CONFIDENTIAL
            </div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-sans">
              Register With PTN
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Access unadvertised UK precision engineering vacancies with total discretion.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. David Clarke"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address *
              </label>
              <input
                required
                type="email"
                placeholder="david.clarke@engineer.co.uk"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Mobile Number *
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
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Primary Engineering Discipline *
              </label>
              <select
                value={formData.primaryDiscipline}
                onChange={(e) => setFormData({ ...formData, primaryDiscipline: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00A3E0]"
              >
                <option value="CNC & Machining">CNC &amp; Machining (Milling / Turning / Sliding Head)</option>
                <option value="Quality & Metrology">Quality &amp; Metrology (CMM / Inspection / FAIRs)</option>
                <option value="Engineering & CAD/CAM">Engineering &amp; CAD/CAM (Production / Manufacturing / Design)</option>
                <option value="Toolmaking">Toolmaking &amp; Press Tools / Moulds</option>
                <option value="Management">Management (Works / Operations / Production / Quality Manager)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Preferred UK Location / Radius
              </label>
              <input
                type="text"
                placeholder="e.g. West Midlands / Redditch / Commutable 25 miles"
                value={formData.preferredLocation}
                onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Target Salary / Rate
              </label>
              <input
                type="text"
                placeholder="e.g. £45,000 p.a. or £22/hr"
                value={formData.expectedSalary}
                onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
              />
            </div>
          </div>

          {/* CV Attachment Box */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Upload CV (PDF, DOCX)
            </label>
            <div className="border border-dashed border-slate-700 p-4 text-center bg-[#050C16] hover:border-[#00A3E0] transition-colors relative cursor-pointer">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFakeFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="flex flex-col items-center justify-center gap-1.5">
                <Upload className="w-5 h-5 text-[#00A3E0]" />
                <span className="text-xs text-slate-300 font-medium">
                  {fileAttached ? (
                    <span className="text-[#00A3E0] font-mono">Attached: {fileAttached}</span>
                  ) : (
                    'Click or drag CV file here (Max 10MB)'
                  )}
                </span>
                <span className="text-[10px] text-slate-500">
                  Strictly confidential. Never sent without your express prior consent.
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Current Machinery, Controls, or Career Goals (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. 8 years Heidenhain 5-axis experience, HyperMill CAM, seeking day shift role with overtime potential..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <div className="text-[11px] font-mono text-slate-400">
              NO CANDIDATE FEES · 100% CONFIDENTIAL
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Registering...' : 'Register Your CV'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface JobDetailModalProps {
  job: JobVacancy | null;
  onClose: () => void;
  onApply: (job: JobVacancy) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
  onApply,
}) => {
  const [applied, setApplied] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');

  if (!job) return null;

  const handleQuickApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      onApply(job);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#081220] border border-slate-700 p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
              <span className="text-[#00A3E0] font-semibold">{job.sector.toUpperCase()}</span>
              <span>·</span>
              <span>{job.category}</span>
              <span>·</span>
              <span>REF: {job.id.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-sans">
              {job.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#00A3E0]" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold font-mono">
                <PoundSterling className="w-3.5 h-3.5" />
                {job.salary}
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {job.shift}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          {/* Controls / Machining Spec */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Machinery &amp; Technical Systems
            </h4>
            <div className="flex flex-wrap gap-2">
              {job.machineryControls.map((ctrl) => (
                <span
                  key={ctrl}
                  className="px-2.5 py-1 text-xs font-mono bg-[#0B1F44]/50 border border-[#00A3E0]/40 text-[#00A3E0]"
                >
                  {ctrl}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Position Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Responsibilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {job.keyResponsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#00A3E0] font-mono text-xs mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Required Skills &amp; Qualifications
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {job.requirements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 text-xs mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Package &amp; Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {job.benefits.map((benefit, idx) => (
                <div key={idx} className="p-2.5 bg-[#050C16] border border-slate-800">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Apply Form Section */}
          <div className="p-5 bg-[#050C16] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Direct Application for this Vacancy
              </h4>
              <span className="text-[11px] font-mono text-slate-400">
                PTN DIRECT SUBMISSION
              </span>
            </div>

            {applied ? (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs">
                  Application registered for {job.title}. Our specialist recruiter will contact you shortly to review your technical match.
                </span>
              </div>
            ) : (
              <form onSubmit={handleQuickApply} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    className="px-3 py-2 bg-[#091424] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    className="px-3 py-2 bg-[#091424] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Contact Number"
                    value={candidatePhone}
                    onChange={(e) => setCandidatePhone(e.target.value)}
                    className="px-3 py-2 bg-[#091424] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500">
                    CV attachment optional at initial conversation stage.
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center gap-1.5"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
