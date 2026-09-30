export type PageView = 'home' | 'about' | 'services' | 'candidates' | 'jobs' | 'employers' | 'contact';

export interface JobVacancy {
  id: string;
  title: string;
  location: string;
  region: string;
  salary: string;
  salaryNumMin: number;
  type: 'Permanent' | 'Contract';
  shift: string;
  sector: 'Aerospace' | 'Defence' | 'Automotive' | 'Motorsport' | 'Medical' | 'Subcontract' | 'Toolmaking' | 'General Precision';
  category: 'CNC & Machining' | 'Quality' | 'Engineering' | 'Management';
  machineryControls: string[];
  description: string;
  keyResponsibilities: string[];
  requirements: string[];
  benefits: string[];
  featured?: boolean;
  postedDate: string;
}

export interface VacancySubmission {
  name: string;
  company: string;
  email: string;
  phone: string;
  vacancyTitle: string;
  location: string;
  salaryRange?: string;
  technicalSpecs?: string;
  message: string;
}

export interface CandidateRegistration {
  name: string;
  email: string;
  phone: string;
  primaryDiscipline: string;
  preferredLocation: string;
  currentSalary?: string;
  expectedSalary?: string;
  noticePeriod?: string;
  controlsExperience?: string[];
  message?: string;
  cvFileName?: string;
}
