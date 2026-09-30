import { JobVacancy } from '../types';

export const SAMPLE_JOBS: JobVacancy[] = [
  {
    id: 'ptn-job-101',
    title: 'CNC Milling Programmer / Setter',
    location: 'Redditch, Worcestershire',
    region: 'West Midlands',
    salary: '£42,000 – £48,000 per annum',
    salaryNumMin: 42000,
    type: 'Permanent',
    shift: 'Days (Mon–Thu 07:30–16:30, Fri 07:30–12:30)',
    sector: 'Aerospace',
    category: 'CNC & Machining',
    machineryControls: ['Heidenhain TNC 640', '5-Axis DMG MORI', 'HyperMill CAD/CAM'],
    description: 'We are seeking an experienced 5-Axis CNC Milling Programmer / Setter for an AS9100-accredited aerospace precision machine shop. You will program offline and online for complex, tight-tolerance nickel alloy and titanium components.',
    keyResponsibilities: [
      'Offline CAM programming using HyperMill and direct online edits at machine controls',
      'Full setup and proving out of new aerospace batch runs on 5-axis DMG MORI machining centers',
      'Maintaining geometric tolerances within ±0.005mm and surface finishes to aerospace standards',
      'First-off inspection using manual measuring instruments before submitting to metrology'
    ],
    requirements: [
      'Proven background programming and setting 3, 4, and 5-axis CNC milling machines',
      'Proficiency with Heidenhain controls (TNC 530/640) or Siemens 840D',
      'Solid experience working with exotic alloys (Inconel, Titanium, Stainless 316)',
      'Time-served engineering apprenticeship or relevant NVQ/City & Guilds Level 3 qualification'
    ],
    benefits: [
      'Early Friday finish (12:30pm)',
      'Overtime paid at 1.5x during week and 2.0x on Sundays',
      'Generous company pension scheme (6% matched)',
      'Private healthcare cash plan and life assurance'
    ],
    featured: true,
    postedDate: '2 days ago'
  },
  {
    id: 'ptn-job-102',
    title: 'Quality Engineer',
    location: 'Birmingham, West Midlands',
    region: 'West Midlands',
    salary: '£38,000 – £45,000 per annum',
    salaryNumMin: 38000,
    type: 'Permanent',
    shift: 'Days (08:00–16:30 Monday to Friday)',
    sector: 'Automotive',
    category: 'Quality',
    machineryControls: ['Mitutoyo CMM', 'PC-DMIS', 'FARO Arm'],
    description: 'Specialist tier-1 precision automotive supplier looking for a dedicated Quality Engineer to lead APQP, PPAP, 8D problem solving, and internal precision auditing.',
    keyResponsibilities: [
      'Lead 8D investigations and root-cause corrective actions for customer and internal non-conformances',
      'Manage PPAP submissions, control plans, PFMEAs, and dimensional verification reports',
      'Support CMM inspection programming using PC-DMIS software for complex machined castings',
      'Maintain ISO 9001 and IATF 16949 quality system compliance across the machining floor'
    ],
    requirements: [
      'Demonstrated experience in precision automotive or engineering quality engineering',
      'Strong grasp of core quality tools (PPAP, APQP, FMEA, SPC, MSA)',
      'Working knowledge of CMM inspection and geometric dimensioning & tolerancing (GD&T)',
      'HNC/Degree in Mechanical Engineering or Quality Management discipline'
    ],
    benefits: [
      '26 days annual leave + bank holidays',
      'Subsidised EV car scheme and cycle to work scheme',
      'Annual performance-related bonus (up to 8%)',
      'Full employer funding for CQI / Six Sigma certifications'
    ],
    featured: true,
    postedDate: 'Just now'
  },
  {
    id: 'ptn-job-103',
    title: 'CNC Turner – Sliding Head (Citizen / Star)',
    location: 'Coventry, West Midlands',
    region: 'West Midlands',
    salary: '£19.50 – £23.50 per hour (£40,500 – £48,800)',
    salaryNumMin: 40500,
    type: 'Permanent',
    shift: 'Double Days rotating (06:00–14:00 / 14:00–22:00)',
    sector: 'Medical',
    category: 'CNC & Machining',
    machineryControls: ['Citizen Cincom', 'Star Micronics', 'Fanuc 31i-B'],
    description: 'High-precision subcontract medical device manufacturer requires a skilled Sliding Head Turner to set and operate multi-axis Citizen and Star machines producing orthopaedic and surgical pins.',
    keyResponsibilities: [
      'Setting, operating, and fine-tuning multi-axis sliding head lathes with sub-spindles and driven tooling',
      'Editing Fanuc programs at machine interface to optimize cycle times and tool longevity',
      'Frequent tool changes, collet changes, bar-feeder setups, and tip indexing',
      'Tight tolerance self-inspection using shadowgraphs, micrometers, and surface profilometers'
    ],
    requirements: [
      'Recognised background setting and operating sliding head lathes (Citizen, Star, or Tornos)',
      'Ability to interpret complex technical drawings with high tolerance specifications (sub-micron / ±3µm)',
      'Familiarity with medical grade stainless steels, titanium (Grade 5), and implantable plastics'
    ],
    benefits: [
      'Shift allowance included in headline rate (+18%)',
      'Air-conditioned cleanroom manufacturing environment',
      'Overtime availability throughout the month',
      'Training towards full programming if currently setter/operator'
    ],
    featured: true,
    postedDate: '3 days ago'
  },
  {
    id: 'ptn-job-104',
    title: 'Manufacturing / Production Engineer',
    location: 'Sheffield, South Yorkshire',
    region: 'Yorkshire',
    salary: '£42,000 – £49,000 per annum',
    salaryNumMin: 42000,
    type: 'Permanent',
    shift: 'Days (08:00–17:00 Monday to Thursday, 13:00 Friday)',
    sector: 'General Precision',
    category: 'Engineering',
    machineryControls: ['SolidWorks', 'Mastercam', 'Edgecam'],
    description: 'Key engineering role within an established precision heavy-duty machining facility. Focus on developing CNC machining methods, tooling selection, cycle time reduction, and shop floor fixturing.',
    keyResponsibilities: [
      'Design modular jigs, fixtures, and workholding systems using SolidWorks',
      'Determine cutting strategies, tooling selection (Sandvik/Iscar), and feeds/speeds for tough alloys',
      'Produce comprehensive manufacturing routings, setup sheets, and standard operating procedures (SOPs)',
      'Identify and implement cycle time reduction and scrap reduction projects'
    ],
    requirements: [
      'Hands-on machining background prior to stepping into production engineering',
      'Proficiency in SolidWorks CAD and CAM programming platforms',
      'Thorough knowledge of cutting geometry, metallurgy, and modern tooling systems'
    ],
    benefits: [
      'Flexible start/finish times',
      'Profit share bonus scheme',
      'Company sick pay scheme after probationary period',
      'Life assurance at 4x salary'
    ],
    featured: false,
    postedDate: '4 days ago'
  },
  {
    id: 'ptn-job-105',
    title: 'CMM Inspector / Metrology Technician',
    location: 'Bristol, South West',
    region: 'South West',
    salary: '£36,000 – £42,000 per annum',
    salaryNumMin: 36000,
    type: 'Permanent',
    shift: 'Permanent Late Shift or Continental (premium allowance)',
    sector: 'Defence',
    category: 'Quality',
    machineryControls: ['Zeiss Calypso', 'DEA CMM', 'Optical Comparator'],
    description: 'Established defence sector machining partner is looking for an experienced CMM Metrology Inspector to inspect high integrity machined components using Zeiss CMMs with Calypso software.',
    keyResponsibilities: [
      'Programming and operating CNC Coordinate Measuring Machines (Zeiss / Calypso)',
      'Completing First Article Inspection Reports (FAIRs) in line with AS9102 standards',
      'Calibrating precision gauging equipment and maintaining calibration records',
      'Liaising directly with CNC machinists to feedback dimensional deviations immediately'
    ],
    requirements: [
      'Proven experience operating and programming CMMs using Zeiss Calypso or PC-DMIS',
      'Full fluency in AS9102 First Article Inspection Reports',
      'Exceptional understanding of geometric dimensioning and tolerancing (GD&T)'
    ],
    benefits: [
      '15% late shift allowance on top of base salary',
      '33 days holiday inclusive of statutory days',
      'Subsidised on-site canteen and wellness program',
      'Modern temperature-controlled standards laboratory'
    ],
    featured: true,
    postedDate: '5 days ago'
  },
  {
    id: 'ptn-job-106',
    title: 'Toolmaker / Precision Grinder',
    location: 'Telford, Shropshire',
    region: 'West Midlands',
    salary: '£37,000 – £43,000 per annum',
    salaryNumMin: 37000,
    type: 'Permanent',
    shift: 'Days (08:00–16:30 Mon–Thu, 08:00–13:30 Fri)',
    sector: 'Toolmaking',
    category: 'CNC & Machining',
    machineryControls: ['Jones & Shipman Surface Grinder', 'Wire EDM', 'Spark EDM'],
    description: 'Precision press tooling and injection moulding specialist seeks a time-served Toolmaker. Involves manufacture, assembly, try-out, maintenance, and modification of multi-stage progression press tools.',
    keyResponsibilities: [
      'Manufacture and assemble progression press tools, punches, dies, and mould inserts',
      'High-precision surface grinding, cylindrical grinding, and manual milling to split-tenth tolerances',
      'Setting and operating Wire EDM and Spark Erosion machinery for detailed form tool cavities',
      'Diagnosing tooling faults during press shop try-outs and conducting swift tool repairs'
    ],
    requirements: [
      'Time-served apprenticeship in Toolmaking, Tool & Die, or Precision Mechanical Engineering',
      'Hands-on expertise with surface grinding, manual machining, and precision assembly',
      'Experience with press tools (multi-stage progression) or plastic injection moulds'
    ],
    benefits: [
      'Clean modern toolroom facility with state-of-the-art grinding equipment',
      'Tool allowance scheme',
      'Company healthcare plan',
      'Contributory pension scheme'
    ],
    featured: false,
    postedDate: '1 week ago'
  },
  {
    id: 'ptn-job-107',
    title: 'Operations Manager – Precision Machine Shop',
    location: 'Wolverhampton, West Midlands',
    region: 'West Midlands',
    salary: '£58,000 – £68,000 + Executive Package',
    salaryNumMin: 58000,
    type: 'Permanent',
    shift: 'Days / Executive',
    sector: 'Subcontract',
    category: 'Management',
    machineryControls: ['ERP/MRP Systems', 'Lean 5S', 'OEE Tracking'],
    description: 'Rare opportunity for a proven engineering leader to head up manufacturing operations for an established subcontract machine shop comprising 24 multi-axis CNC machines and 45 machinists.',
    keyResponsibilities: [
      'Full operational leadership of CNC milling, turning, sliding head, and quality metrology departments',
      'Drive OEE, on-time in-full (OTIF) delivery metrics, and machine utilization through Lean principles',
      'Develop workforce skills matrix, apprentice development plans, and recruitment strategy alongside PTN',
      'P&L responsibility for machine shop capital expenditures, tooling budgets, and machine investments'
    ],
    requirements: [
      'Proven track record as Operations Manager, Works Manager, or Production Manager in precision machining',
      'Strong technical grounding in CNC subcontract machining (milling/turning)',
      'Outstanding people management and cultural transformation capabilities'
    ],
    benefits: [
      'Company car allowance (£6,000 p.a.)',
      'Discretionary annual profit-based bonus (up to 15%)',
      'Executive private medical insurance (BUPA) including family',
      '8% employer pension contribution'
    ],
    featured: true,
    postedDate: '1 week ago'
  },
  {
    id: 'ptn-job-108',
    title: 'CNC Turner – Programmer / Setter (Mazak)',
    location: 'Derby, Derbyshire',
    region: 'East Midlands',
    salary: '£40,000 – £46,000 per annum',
    salaryNumMin: 40000,
    type: 'Permanent',
    shift: 'Days / Alternating early-late available',
    sector: 'Motorsport',
    category: 'CNC & Machining',
    machineryControls: ['Mazak SmoothG / Matrix', 'Mazatrol', 'Driven Tooling'],
    description: 'Join a high-tempo precision motorsport and hypercar component manufacturer. You will program and set 2-to-4 axis Mazak turning centers with live tooling for quick-turnaround lightweight assemblies.',
    keyResponsibilities: [
      'Online programming using Mazatrol controls for high-mix low-volume motorsport components',
      'Setting driven tooling, collets, chuck jaws, and steady rests for slender shafts',
      'Working with titanium, aluminium 7075, and EN24T pre-hardened steels',
      'Continuous inspection of finished parts using precision bore gauges and micrometers'
    ],
    requirements: [
      'Extensive Mazatrol conversational programming experience on Mazak QuickTurn / Integrex',
      'Background in motorsport, aerospace, or high-specification subcontract machining',
      'High attention to detail and capability to work to rapid race-weekend deadlines'
    ],
    benefits: [
      'Free VIP tickets to selected UK motorsport events',
      'Paid overtime at premium rates throughout the race season',
      'Clean room-grade workshop with latest Mazak machinery',
      'Pension and life insurance'
    ],
    featured: false,
    postedDate: '1 week ago'
  }
];

export const SPECIALIST_SECTORS = [
  {
    id: 'aerospace',
    name: 'Aerospace',
    description: 'AS9100 certified components, airframe structural parts, aero-engine turbine blades, and titanium fasteners.',
    roles: ['5-Axis Programmers', 'Quality Inspectors', 'FAIR / AS9102 Specialists']
  },
  {
    id: 'defence',
    name: 'Defence',
    description: 'High-security marine, land, and aerospace defence manufacturing with strict material traceability.',
    roles: ['SC Cleared Machinists', 'CMM Metrologists', 'Production Managers']
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Powertrain components, high-volume automated CNC cells, EV battery enclosures, and transmission shafts.',
    roles: ['CNC Setters / Operators', 'IATF Quality Engineers', 'Maintenance Technicians']
  },
  {
    id: 'motorsport',
    name: 'Motorsport & F1',
    description: 'Rapid-prototype chassis components, suspension geometry, gearbox casings in exotic alloys.',
    roles: ['HyperMill / Mastercam Programmers', 'Integrex Machinists', 'Rapid Turnaround Turners']
  },
  {
    id: 'medical',
    name: 'Medical Devices',
    description: 'Surgical instruments, bone screws, orthopaedic implants manufactured to ISO 13485 standards.',
    roles: ['Sliding Head Turners', 'Cleanroom Inspectors', 'Micro-machining Specialists']
  },
  {
    id: 'subcontract',
    name: 'Subcontract Machining',
    description: 'High-mix low-volume precision machine shops catering to diverse industrial clients.',
    roles: ['Skilled Millers & Turners', 'Estimators', 'Works / Operations Managers']
  },
  {
    id: 'toolmaking',
    name: 'Toolmaking & Moulding',
    description: 'Progression press tools, plastic injection moulds, precision dies, and bespoke jigs & fixtures.',
    roles: ['Time-served Toolmakers', 'Precision Grinders', 'EDM Wire / Spark Machinists']
  },
  {
    id: 'fabrication',
    name: 'Fabrication & Advanced Manufacturing',
    description: 'Precision sheet metal, laser cutting, 5-axis waterjet, coded welding, and mechanical assembly.',
    roles: ['Bystronic / Trumpf Laser Programmers', 'Press Brake Setters', 'Fabrication Supervisors']
  }
];
