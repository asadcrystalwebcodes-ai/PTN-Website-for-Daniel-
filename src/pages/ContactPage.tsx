import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Building2, 
  Users, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (view: PageView) => void;
  onOpenHiringModal: () => void;
  onOpenJobSeekerModal: () => void;
  onSuccessToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenHiringModal,
  onOpenJobSeekerModal,
  onSuccessToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<'Hiring talent' | 'Finding a job' | 'General enquiry'>('Hiring talent');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onSuccessToast(`Enquiry sent successfully. Reference: PTN-MSG-${Math.floor(1000 + Math.random() * 9000)}. We will respond within 4 business hours.`);
    }, 600);
  };

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="bg-[#070F1D] py-16 lg:py-24 border-b border-slate-800/90 engineering-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#091629] border border-slate-700/80 text-xs font-mono text-[#00A3E0] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0]" />
              <span>COMMUNICATION // DIRECT CONTACT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white font-sans leading-[1.05]">
              Let&apos;s talk.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Whether you&apos;re hiring, looking for your next opportunity or simply want some advice about the engineering recruitment market, we&apos;d be happy to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* TWO LARGE CONVERSION PANELS (EMPLOYERS / CANDIDATES) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-slate-800">
        {/* Employers Panel */}
        <div
          onClick={onOpenHiringModal}
          className="p-8 sm:p-12 bg-[#091526] hover:bg-[#0c1c33] transition-colors border-b lg:border-b-0 lg:border-r border-slate-800 cursor-pointer group flex flex-col justify-between space-y-6"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#00A3E0]">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                EMPLOYERS
              </span>
              <span>DIRECT INSTRUCTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-sans group-hover:text-[#00A3E0] transition-colors">
              Need to recruit?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Speak directly with our senior engineering recruitment director regarding your technical specifications, timescales, and candidate availability.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#00A3E0] group-hover:translate-x-1 transition-transform">
            <span>Talk to PTN</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Candidates Panel */}
        <div
          onClick={onOpenJobSeekerModal}
          className="p-8 sm:p-12 bg-[#050C16] hover:bg-[#071324] transition-colors cursor-pointer group flex flex-col justify-between space-y-6 engineering-grid"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                CANDIDATES
              </span>
              <span>STRICTLY CONFIDENTIAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-sans group-hover:text-[#00A3E0] transition-colors">
              Looking for your next opportunity?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Submit your CV for confidential career benchmarking and representation across premier UK engineering facilities.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-400 group-hover:translate-x-1 transition-transform">
            <span>Register your CV</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS & ENQUIRY FORM */}
      <section className="bg-[#050C16] py-20 border-b border-slate-800/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-xs font-mono text-[#00A3E0] uppercase tracking-wider mb-2">
                  OFFICIAL DETAILS
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white font-sans">
                  Precision Talent Network Ltd
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Specialist Recruitment for Precision Engineering &amp; Manufacturing.
                </p>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">UK Engineering Corridor Headquarters</strong>
                    <span className="text-xs text-slate-400">
                      Midlands Regional Hub · Birmingham · Redditch · Coventry · Sheffield
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <div>
                    <strong className="block text-white">Direct Line</strong>
                    <a href="tel:+441217900820" className="hover:text-[#00A3E0] transition-colors text-xs font-mono">
                      +44 (0) 121 790 0820
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <div>
                    <strong className="block text-white">Direct Email</strong>
                    <a href="mailto:daniel@precisiontalentnetwork.co.uk" className="hover:text-[#00A3E0] transition-colors text-xs font-mono">
                      daniel@precisiontalentnetwork.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Globe className="w-5 h-5 text-[#00A3E0] shrink-0" />
                  <div>
                    <strong className="block text-white">Web Portal</strong>
                    <span className="text-xs font-mono text-slate-400">
                      www.precisiontalentnetwork.co.uk
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#091526] border border-slate-800 text-xs font-mono text-slate-400 space-y-1.5">
                <div className="text-white font-bold">OPERATING HOURS:</div>
                <div>Monday – Thursday: 07:30 – 18:00 GMT</div>
                <div>Friday: 07:30 – 16:30 GMT</div>
                <div className="text-[#00A3E0] pt-1">Weekend out-of-hours candidate lines available by appointment.</div>
              </div>
            </div>

            {/* Right: Clean Enquiry Form */}
            <div className="lg:col-span-7 p-8 bg-[#091424] border border-slate-800">
              <div className="mb-6">
                <div className="text-xs font-mono text-[#00A3E0] uppercase tracking-wider mb-1">
                  DIRECT ENQUIRY TRANSMISSION
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white font-sans">
                  Send A Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-950/20 border border-emerald-500/40">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white uppercase">Enquiry Dispatched</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {name}. A member of our team will contact you shortly regarding &ldquo;{interest}&rdquo;.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-bold uppercase text-slate-300 border border-slate-700 hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="s.jenkins@domain.co.uk"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Telephone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+44 7XXX XXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      I&apos;m interested in: *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {(['Hiring talent', 'Finding a job', 'General enquiry'] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setInterest(opt)}
                          className={`py-2 px-3 text-xs font-mono uppercase tracking-wider text-center border transition-colors ${
                            interest === opt
                              ? 'bg-[#00A3E0] text-white border-[#00A3E0] font-bold'
                              : 'bg-[#050C16] text-slate-300 border-slate-700 hover:border-slate-500'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can Precision Talent Network assist your engineering goals?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-500">
                      SECURE 256-BIT ENCRYPTION
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                      <span>{submitting ? 'Sending...' : 'SEND ENQUIRY'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
