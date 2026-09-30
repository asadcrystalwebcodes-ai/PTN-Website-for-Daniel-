import React, { useState, useMemo } from 'react';
import { SAMPLE_JOBS } from '../data/jobs';
import { IMAGES } from '../assets/images';
import { JobVacancy, PageView } from '../types';
import { 
  Search, 
  MapPin, 
  PoundSterling, 
  Clock, 
  ArrowRight, 
  X,
  Briefcase,
  ShieldCheck
} from 'lucide-react';

interface JobsPageProps {
  onSelectJob: (job: JobVacancy) => void;
  onOpenJobSeekerModal: () => void;
  onNavigate: (view: PageView) => void;
}

export const JobsPage: React.FC<JobsPageProps> = ({
  onSelectJob,
  onOpenJobSeekerModal,
  onNavigate,
}) => {
  const [keyword, setKeyword] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const sectors = ['All', 'Aerospace', 'Automotive', 'Medical', 'Defence', 'Motorsport', 'Toolmaking', 'Subcontract', 'General Precision'];
  const locations = ['All', 'West Midlands', 'East Midlands', 'Yorkshire', 'South West'];
  const categories = ['All', 'CNC & Machining', 'Quality', 'Engineering', 'Management'];

  const filteredJobs = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      const matchKeyword =
        keyword === '' ||
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(keyword.toLowerCase()) ||
        job.machineryControls.some((c) => c.toLowerCase().includes(keyword.toLowerCase())) ||
        job.location.toLowerCase().includes(keyword.toLowerCase());

      const matchSector = selectedSector === 'All' || job.sector === selectedSector;
      const matchLocation = selectedLocation === 'All' || job.region === selectedLocation;
      const matchCategory = selectedCategory === 'All' || job.category === selectedCategory;

      return matchKeyword && matchSector && matchLocation && matchCategory;
    });
  }, [keyword, selectedSector, selectedLocation, selectedCategory]);

  const resetFilters = () => {
    setKeyword('');
    setSelectedSector('All');
    setSelectedLocation('All');
    setSelectedCategory('All');
  };

  return (
    <div className="w-full bg-[#070F1D] text-slate-100 font-sans">
      {/* HEADER & SEARCH INTERFACE */}
      <section className="relative py-14 lg:py-20 bg-[#050C16] border-b border-slate-800 overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden lg:block">
          <img
            src={IMAGES.machinedFlange}
            alt="Precision Machined Parts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050C16] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A3E0]">
                LIVE VACANCIES
              </span>
              <span className="w-8 h-[1px] bg-[#00A3E0]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Latest Engineering Jobs
            </h1>
            <p className="text-sm text-slate-300">
              Verified precision engineering and manufacturing roles across the UK with real salary rates and explicit machine tool specifications.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-4 sm:p-6 bg-[#091526] border border-slate-800 space-y-4 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Keyword Search */}
              <div className="md:col-span-5 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Keyword: e.g. Heidenhain, 5-Axis, CMM, Sliding Head, Fanuc..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00A3E0]"
                />
              </div>

              {/* Location Select */}
              <div className="md:col-span-3">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00A3E0]"
                >
                  <option value="All">All UK Regions</option>
                  {locations.filter(l => l !== 'All').map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Sector Select */}
              <div className="md:col-span-2">
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#050C16] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#00A3E0]"
                >
                  <option value="All">All Sectors</option>
                  {sectors.filter(s => s !== 'All').map(sec => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              <div className="md:col-span-2 flex items-center">
                <button
                  onClick={resetFilters}
                  className="w-full py-2.5 px-3 text-xs font-mono uppercase tracking-wider text-slate-300 border border-slate-700 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Discipline Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
              <span className="font-mono text-slate-400 uppercase tracking-wider pr-1">
                Discipline:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#00A3E0] text-white font-bold'
                      : 'bg-[#050C16] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOBS LISTING SECTION */}
      <section className="py-16 bg-[#050C16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
            <div>
              SHOWING <strong className="text-white">{filteredJobs.length}</strong> ACTIVE POSITIONS
            </div>
            <div>
              ALL VACANCIES 100% PERMANENT &amp; VERIFIED
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center bg-[#091526] border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white uppercase">
                No matching vacancies found for your criteria
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                We frequently manage confidential unadvertised roles. Register your CV with PTN to be notified immediately.
              </p>
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0]"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-6 bg-[#081220] border border-slate-800 hover:border-[#00A3E0] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 group rounded-sm"
                >
                  {/* Left Column: Job Info */}
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="text-[#00A3E0] font-semibold">{job.sector.toUpperCase()}</span>
                      <span>·</span>
                      <span className="text-slate-300">{job.category}</span>
                      <span>·</span>
                      <span>REF: {job.id.toUpperCase()}</span>
                      <span>·</span>
                      <span className="text-slate-500">{job.postedDate}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#00A3E0] transition-colors font-sans">
                      {job.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-5 text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold">
                        <PoundSterling className="w-3.5 h-3.5" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {job.shift}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Machine Controls Specs */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[11px] font-mono text-slate-400">CONTROLS:</span>
                      {job.machineryControls.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 text-[11px] font-mono bg-[#050C16] border border-slate-700/80 text-slate-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 justify-center">
                    <button
                      onClick={() => onSelectJob(job)}
                      className="px-6 py-3 text-xs font-bold tracking-wider uppercase text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,163,224,0.3)]"
                    >
                      <span>View Vacancy</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onSelectJob(job)}
                      className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase text-slate-300 border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 transition-colors flex items-center justify-center"
                    >
                      Quick Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FALLBACK CTA */}
          <div className="mt-14 p-8 bg-[#091526] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold uppercase text-white">
                Don&apos;t see the right job? Register your CV.
              </h3>
              <p className="text-xs text-slate-300">
                Over 60% of our precision engineering placements occur before a vacancy is ever advertised online.
              </p>
            </div>
            <button
              onClick={onOpenJobSeekerModal}
              className="px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#0087BA] transition-colors shrink-0 flex items-center gap-2 shadow-[0_0_20px_rgba(0,163,224,0.3)]"
            >
              <span>Register Your CV</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
