import React, { useState, useEffect } from 'react';
import { PageView, JobVacancy } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VacancyModal, CandidateRegisterModal, JobDetailModal } from './components/Modals';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CandidatesPage } from './pages/CandidatesPage';
import { JobsPage } from './pages/JobsPage';
import { EmployersPage } from './pages/EmployersPage';
import { ContactPage } from './pages/ContactPage';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [hiringModalOpen, setHiringModalOpen] = useState(false);
  const [jobSeekerModalOpen, setJobSeekerModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash with currentView
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageView;
      const validViews: PageView[] = ['home', 'about', 'services', 'candidates', 'jobs', 'employers', 'contact'];
      if (validViews.includes(hash)) {
        setCurrentView(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: PageView) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#070F1D] text-slate-100 flex flex-col font-sans selection:bg-[#00A3E0] selection:text-white">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 max-w-md bg-[#091629] border-2 border-[#00A3E0] p-4 text-xs font-mono shadow-[0_0_30px_rgba(0,163,224,0.4)] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
              <div className="text-slate-200 leading-relaxed font-sans text-xs">
                {toastMessage}
              </div>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-slate-400 hover:text-white p-0.5 shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenHiringModal={() => setHiringModalOpen(true)}
        onOpenJobSeekerModal={() => setJobSeekerModalOpen(true)}
      />

      {/* Active Page View Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenHiringModal={() => setHiringModalOpen(true)}
            onOpenJobSeekerModal={() => setJobSeekerModalOpen(true)}
            onSelectJob={(job) => setSelectedJob(job)}
          />
        )}
        {currentView === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenHiringModal={() => setHiringModalOpen(true)}
            onOpenJobSeekerModal={() => setJobSeekerModalOpen(true)}
          />
        )}
        {currentView === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenHiringModal={() => setHiringModalOpen(true)}
          />
        )}
        {currentView === 'candidates' && (
          <CandidatesPage
            onNavigate={navigateTo}
            onOpenJobSeekerModal={() => setJobSeekerModalOpen(true)}
          />
        )}
        {currentView === 'jobs' && (
          <JobsPage
            onSelectJob={(job) => setSelectedJob(job)}
            onOpenJobSeekerModal={() => setJobSeekerModalOpen(true)}
            onNavigate={navigateTo}
          />
        )}
        {currentView === 'employers' && (
          <EmployersPage
            onNavigate={navigateTo}
            onSuccessToast={showToast}
          />
        )}
        {currentView === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenHiringModal={() => setHiringModalOpen(true)}
            onOpenJobSeekerModal={() => setJobSeekerModalOpen(true)}
            onSuccessToast={showToast}
          />
        )}
      </main>

      {/* Dark Precision Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenHiringModal={() => setHiringModalOpen(true)}
        onOpenJobSeekerModal={() => setJobSeekerModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VacancyModal
        isOpen={hiringModalOpen}
        onClose={() => setHiringModalOpen(false)}
        onSuccess={showToast}
      />

      <CandidateRegisterModal
        isOpen={jobSeekerModalOpen}
        onClose={() => setJobSeekerModalOpen(false)}
        onSuccess={showToast}
      />

      <JobDetailModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={(job) => {
          showToast(`Application successfully registered for ${job.title} (REF: ${job.id.toUpperCase()}). Our specialist consultant will contact you.`);
          setSelectedJob(null);
        }}
      />
    </div>
  );
}
