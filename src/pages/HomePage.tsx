import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { SAMPLE_JOBS } from '../data/jobs';
import { JobVacancy, PageView } from '../types';
import { 
  ArrowRight, 
  Settings, 
  Target, 
  Wrench, 
  Users, 
  Cpu, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: PageView) => void;
  onOpenHiringModal: () => void;
  onOpenJobSeekerModal: () => void;
  onSelectJob: (job: JobVacancy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenHiringModal,
  onOpenJobSeekerModal,
  onSelectJob,
}) => {
  // Testimonials slider state
  const testimonials = [
    {
      quote:
        'PTN took the time to understand our specific requirements and delivered outstanding candidates. Their industry knowledge and professionalism make them a valuable recruitment partner.',
      author: 'Operations Director | Precision Manufacturing',
      company: 'Tier-1 Subcontract Machine Shop',
      location: 'Birmingham',
    },
    {
      quote:
        'Finding skilled 5-axis programmers in our region was nearly impossible until we engaged PTN. They presented three qualified candidates within 48 hours and we hired two.',
      author: 'Managing Director | Aerospace Components Ltd',
      company: 'AS9100 Certified Manufacturer',
      location: 'Derby',
    },
    {
      quote:
        'As an engineer, PTN treated me with technical respect. They understood my CAD/CAM background and placed me in a role that doubled my career trajectory.',
      author: 'Senior Quality Metrologist | Medical Precision Group',
      company: 'Medical Device Manufacturing',
      location: 'Coventry',
    },
  ];

  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // 4 Featured opportunities matching the design
  const featuredList = [
    {
      id: 'ptn-job-101',
      title: 'CNC Programmer',
      location: 'Coventry',
      type: 'Permanent',
      salary: '£42,000 – £48,000',
      controls: 'HyperMill · Heidenhain 5-Axis',
    },
    {
      id: 'ptn-job-104',
      title: 'Maintenance Engineer',
      location: 'Birmingham',
      type: 'Permanent',
      salary: '£40,000 – £46,000',
      controls: 'Multi-Skilled · CNC Breakdown',
    },
    {
      id: 'ptn-job-102',
      title: 'Quality Engineer',
      location: 'Nottingham',
      type: 'Contract',
      salary: '£35 – £42 / hr',
      controls: 'CMM · PC-DMIS · APQP',
    },
    {
      id: 'ptn-job-107',
      title: 'Production Manager',
      location: 'Leeds',
      type: 'Permanent',
      salary: '£55,000 – £62,000',
      controls: 'Machine Shop P&L · 24 CNC Cells',
    },
  ];

  const specialisms = [
    {
      code: '01',
      icon: Settings,
      title: 'CNC MACHINING & MANUFACTURING',
      desc: 'Operators, programmers, setters and technicians.',
      image: IMAGES.aerospaceTitanium,
      roles: '5-Axis Milling · Turning · Sliding Head',
    },
    {
      code: '02',
      icon: Target,
      title: 'ENGINEERING & PRODUCTION',
      desc: 'Mechanical, electrical, process and production engineers.',
      image: IMAGES.cncOperator,
      roles: 'Manufacturing · CAD/CAM · Tooling',
    },
    {
      code: '03',
      icon: Wrench,
      title: 'MAINTENANCE & OPERATIONS',
      desc: 'Multi-skilled, maintenance, facilities and site support.',
      image: IMAGES.facilityFloor,
      roles: 'Mechanical · Electrical · Machine Tools',
    },
    {
      code: '04',
      icon: Users,
      title: 'LEADERSHIP & MANAGEMENT',
      desc: 'Supervisors, managers and senior appointments.',
      image: IMAGES.qualityInspection,
      roles: 'Works Managers · Operations · Directors',
    },
    {
      code: '05',
      icon: Cpu,
      title: 'TECHNICAL & SPECIALIST ROLES',
      desc: 'Design, quality, metrology, R&D and more.',
      image: IMAGES.cmmProbe,
      roles: 'CMM Inspection · Metrology · FAIRs',
    },
  ];

  const handleJobClick = (jobItem: typeof featuredList[0]) => {
    const fullJob = SAMPLE_JOBS.find((j) => j.id === jobItem.id) || SAMPLE_JOBS[0];
    onSelectJob(fullJob);
  };

  return (
    <div className="w-full bg-[#070F1D] text-slate-100 overflow-hidden font-sans">
      {/* 1. HERO SECTION (DARK CINEMATIC WITH CNC BACKGROUND + CENTER RETICLE) */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center bg-[#050C16] overflow-hidden">
        {/* Full-bleed background layer: CNC machining & operator visual */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.cncOperator}
            alt="Precision CNC Engineering Background"
            className="w-full h-full object-cover object-right lg:object-center filter contrast-115 brightness-75 scale-105"
          />
          {/* Deep dark gradient overlay for crystal-clear readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-[#050B14]/85 to-[#050B14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-90" />
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl">
              {/* Kicker */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00A3E0]">
                  SPECIALIST RECRUITMENT
                </span>
                <span className="w-12 h-[1px] bg-[#00A3E0]" />
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
                PRECISION IN PEOPLE.
                <br />
                <span className="text-[#00A3E0]">TALENT IN THE RIGHT PLACE.</span>
              </h1>

              {/* Minimal 2-line Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-lg">
                Specialist recruitment for Precision Engineering
                <br />
                &amp; Manufacturing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenHiringModal}
                  className="px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(0,163,224,0.4)] active:scale-95"
                >
                  <span>I&apos;m Hiring</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenJobSeekerModal}
                  className="px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-white border border-[#00A3E0]/70 hover:border-[#00A3E0] bg-[#070F1D]/80 hover:bg-slate-900 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>I&apos;m Looking for a Job</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </button>
              </div>

              {/* Coordinates & Status Telemetry */}
              <div className="pt-8 flex items-center gap-6 text-[11px] font-mono text-slate-400 select-none">
                <div>
                  <div className="text-slate-300 font-bold">52.4862° N</div>
                  <div>1.8904° W</div>
                </div>
                <div className="h-6 w-[1px] bg-slate-800" />
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="tracking-wider">UK PRECISION NETWORK ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Circular Precision Reticle Graphic - Towards Center of Hero */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="relative w-56 h-56 rounded-full border border-[#00A3E0]/70 flex items-center justify-center shadow-[0_0_40px_rgba(0,163,224,0.25)]">
                {/* Crosshairs extending through the circle */}
                <div className="absolute top-0 bottom-0 w-[1.5px] bg-[#00A3E0]/60" />
                <div className="absolute left-0 right-0 h-[1.5px] bg-[#00A3E0]/60" />

                {/* Subtle outer tick marks */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#00A3E0]/30 animate-[spin_60s_linear_infinite]" />

                {/* Center Badge */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-[#050C16]/95 border border-[#00A3E0]/60 flex flex-col items-center justify-center text-center font-mono leading-tight shadow-2xl backdrop-blur-sm">
                  <span className="text-white font-extrabold text-xs tracking-wider">
                    PRECISION
                  </span>
                  <span className="text-[#00A3E0] font-bold text-xs tracking-wider my-0.5">
                    BUILDS
                  </span>
                  <span className="text-white font-extrabold text-xs tracking-wider">
                    PROGRESS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SPECIALISMS SECTION (CRISP WHITE WITH HIGH-END CARDS & IMAGE PREVIEWS) */}
      <section className="bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Top Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-12 border-b border-slate-100">
            {/* Left Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  OUR SPECIALISMS
                </span>
                <span className="w-8 h-[1px] bg-[#00A3E0]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#070F1D] leading-tight">
                Specialist recruitment.
                <br />
                <span className="text-[#00A3E0]">Precisely focused.</span>
              </h2>
            </div>

            {/* Right Minimal Paragraph & Link */}
            <div className="max-w-xl space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                We specialise in connecting exceptional talent with leading businesses in Precision Engineering and Manufacturing. We understand the technical skills, the industry demands and the people behind the progress.
              </p>
              <div>
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00A3E0] hover:text-[#0087BA] transition-colors group"
                >
                  <span>OUR SERVICES</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* 5 Clean Columns with Subtle Imagery & Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pt-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {specialisms.map((spec) => {
              const IconComp = spec.icon;
              return (
                <div
                  key={spec.title}
                  onClick={() => onNavigate('services')}
                  className="py-6 md:py-0 md:px-5 first:pl-0 last:pr-0 space-y-4 group cursor-pointer"
                >
                  {/* Subtle Image Thumbnail Card */}
                  <div className="relative h-28 w-full overflow-hidden border border-slate-200 bg-slate-100 group-hover:border-[#00A3E0] transition-colors">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-2 right-2 text-[10px] font-mono font-bold text-white bg-black/60 px-1.5 py-0.5 border border-white/20">
                      {spec.code}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#00A3E0]">
                    <IconComp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-500 group-hover:text-[#00A3E0]">
                      {spec.roles}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xs font-extrabold uppercase tracking-wide text-[#070F1D] group-hover:text-[#00A3E0] transition-colors leading-snug">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PTN SECTION (DARK BACKGROUND WITH DUAL ENGINEERING IMAGES & STATS) */}
      <section className="bg-[#070F1D] py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo with subtle blue corner mark */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-slate-800 overflow-hidden shadow-2xl group">
                {/* Blue corner bracket */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00A3E0] z-10" />
                <img
                  src={IMAGES.qualityInspection}
                  alt="Precision Engineer Inspecting Machined Component"
                  className="w-full h-[380px] object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#050C16]/90 border border-slate-800 p-2.5 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>AS9100 / ISO 9001 VERIFICATION</span>
                  </span>
                  <span className="text-[#00A3E0]">100% AUDITED</span>
                </div>
              </div>
            </div>

            {/* Center Editorial Copy */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  ABOUT PTN
                </span>
                <span className="w-8 h-[1px] bg-[#00A3E0]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                More than recruitment.
                <br />
                <span className="text-[#00A3E0]">We know engineering.</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                PTN is a specialist recruitment partner for Precision Engineering &amp; Manufacturing. Our deep industry knowledge, technical understanding and established network mean we connect the right people with the right opportunities — faster.
              </p>

              <div>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A3E0] hover:text-white transition-colors group"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-3 space-y-8 pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0">
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                  10+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  YEARS OF INDUSTRY FOCUS
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#00A3E0] font-mono">
                  500+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  TALENT PLACEMENTS EACH YEAR
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#00A3E0] font-mono">
                  100%
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  UK FOCUSED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED JOBS / LATEST OPPORTUNITIES (CLEAN WHITE / OFF-WHITE BACKGROUND) */}
      <section className="bg-[#F8FAFC] text-slate-900 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Column 1 (Left): Header & Link */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                  FEATURED JOBS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#070F1D]">
                  Latest opportunities
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                  Access exclusive roles in Precision Engineering &amp; Manufacturing, from permanent to contract.
                </p>
              </div>

              <div>
                <button
                  onClick={() => onNavigate('jobs')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A3E0] hover:text-[#0087BA] transition-colors group"
                >
                  <span>VIEW ALL JOBS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Column 2 (Center): Clean Job List with Divider Lines */}
            <div className="lg:col-span-4 flex flex-col justify-center divide-y divide-slate-200 border-y lg:border-y-0 lg:border-l lg:border-r border-slate-200 lg:px-6">
              {featuredList.map((job) => (
                <div
                  key={job.title}
                  onClick={() => handleJobClick(job)}
                  className="py-4.5 flex items-center justify-between cursor-pointer group hover:bg-slate-100/80 px-3 transition-colors rounded-sm"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#070F1D] group-hover:text-[#00A3E0] transition-colors">
                      {job.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {job.location} | {job.type} · <span className="font-mono text-slate-600 font-semibold">{job.salary}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A3E0] group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>

            {/* Column 3 (Right): Precision Flange Photographic Card */}
            <div className="lg:col-span-4 relative overflow-hidden group shadow-lg min-h-[280px] border border-slate-200">
              <img
                src={IMAGES.machinedFlange}
                alt="Precision Machined Component Flange"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 font-mono text-white leading-tight">
                <div className="text-xs text-[#00A3E0] tracking-widest uppercase mb-1">
                  VERIFIED VACANCIES
                </div>
                <div className="text-base font-bold tracking-wider">REAL ROLES.</div>
                <div className="text-base font-bold tracking-wider text-[#00A3E0]">REAL OPPORTUNITIES.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (DARK BACKGROUND WITH CLIENT BADGES) */}
      <section className="bg-[#050C16] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                TESTIMONIALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Trusted by industry.
                <br />
                Chosen by talent.
              </h2>
            </div>

            {/* Right: Quote, Author & Pagination Controls */}
            <div className="lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-6 pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0">
              <div className="space-y-3 max-w-xl">
                <span className="text-4xl text-[#00A3E0] font-serif leading-none block">“</span>
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  {testimonials[currentTestimonialIdx].quote}
                </p>
                <div className="pt-1">
                  <div className="text-xs text-white font-bold font-sans">
                    {testimonials[currentTestimonialIdx].author}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {testimonials[currentTestimonialIdx].company} · {testimonials[currentTestimonialIdx].location}
                  </div>
                </div>
              </div>

              {/* Slider Pagination Controls: < o ● > */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={prevTestimonial}
                  className="p-2 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonialIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        currentTestimonialIdx === i ? 'bg-[#00A3E0]' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
