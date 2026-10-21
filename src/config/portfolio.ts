/**
 * Portfolio Configuration - Single Source of Truth
 * 
 * Verified against official resume of Kannan Ganesan.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  tag?: 'Core' | 'Practiced' | 'Tool' | 'Architecture';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  overview: string;
  responsibilities: {
    category: string;
    items: string[];
  }[];
  technicalFocus: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string[];
  engineeringThemes: string[];
  outcome?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  visibility: 'public' | 'unlisted';
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
  icon: 'Zap' | 'Database' | 'ShieldCheck' | 'BookOpen';
  details: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    monogram: string;
    title: string;
    experienceSummary: string;
    currentCompany: string;
    location: string;
    heroHeading: string;
    heroHeadline: string;
    heroIntroduction: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    keyTechBadges: string[];
    careerInterest: {
      enabled: boolean;
      statusText: string;
    };
  };
  about: {
    paragraphs: string[];
    engineeringFocus: {
      title: string;
      description: string;
    }[];
  };
  skillCategories: Record<string, SkillCategory>;
  experience: ExperienceEntry[];
  caseStudies: ProjectCaseStudy[];
  engineeringApproach: EngineeringPrinciple[];
  resume: {
    enabled: boolean;
    filePath: string;
    fileName: string;
    note: string;
  };
  contact: {
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
    location: string;
    responseExpectation: string;
    formService: {
      configured: boolean;
      endpointUrl?: string;
    };
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    siteUrl?: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Kannan Ganesan',
    monogram: 'KG',
    title: 'Software Engineer | Java Backend Developer',
    experienceSummary: '4+ years of software development experience',
    currentCompany: 'Profit.co',
    location: 'Chennai, India',
    heroHeading: "Hi, I'm Kannan Ganesan.",
    heroHeadline: 'Building reliable backend systems with Java and modern software engineering.',
    heroIntroduction:
      "I'm a Software Engineer with 4+ years of experience designing and delivering production-grade Java 17 / Spring Boot services and full-stack solutions with Angular. I specialize in REST APIs, Elasticsearch optimization, event-driven data synchronization, and high-reliability backend architecture.",
    primaryCta: {
      text: 'Explore My Work',
      href: '#projects',
    },
    secondaryCta: {
      text: 'Get In Touch',
      href: '#contact',
    },
    keyTechBadges: ['Java 17', 'Spring Boot', 'Elasticsearch', 'REST APIs', 'Angular', 'Pub/Sub'],
    careerInterest: {
      enabled: false,
      statusText: 'Open to senior backend and full-stack engineering roles',
    },
  },

  about: {
    paragraphs: [
      'I am a Software Engineer with 4+ years of experience designing and delivering production-grade Java 17 and Spring Boot microservices for an enterprise SaaS platform serving global customers at Profit.co.',
      'I take end-to-end ownership of backend modules — from architectural decisions and schema design to Elasticsearch tuning, API performance optimization, and L3 incident triage. In production, I led query restructuring and indexing that cut API latency by ~63% and reduced Elasticsearch search query times by ~25% across 500–1000 organizations.',
      'My technical work spans building complex OKR alignment hierarchies, YTD/QTD calculation engines, Bowler chart reporting backends, and Pub/Sub event-driven notification pipelines serving 5,000+ users. Additionally, I collaborate seamlessly with frontend teams with practical hands-on proficiency in Angular and TypeScript, and built an internal JVM heap profiler (MAT) to identify and eliminate memory leaks proactively.',
    ],
    engineeringFocus: [
      {
        title: 'Backend Architecture & Microservices',
        description: 'Java 17, Spring Boot, Spring MVC, REST APIs, and Hibernate/JPA schema design.',
      },
      {
        title: 'Elasticsearch Tuning & Analytics',
        description: 'Targeted indexing, query restructuring, and 25% query latency reduction.',
      },
      {
        title: 'Event-Driven Systems & Data Sync',
        description: 'Pub/Sub async dispatch, scheduled calculation jobs, and reliable state propagation.',
      },
      {
        title: 'L3 Production Triage & Profiling',
        description: 'Root cause analysis (RCA), ITIL workflows, and JVM heap memory analysis (MAT).',
      },
    ],
  },

  skillCategories: {
    languagesAndFrameworks: {
      title: 'Languages & Frameworks',
      description: 'Core languages and robust enterprise service frameworks.',
      skills: [
        { name: 'Java 8 / 17', tag: 'Core' },
        { name: 'Spring Boot', tag: 'Core' },
        { name: 'Spring Framework / MVC', tag: 'Core' },
        { name: 'Microservices', tag: 'Core' },
        { name: 'REST APIs / Web Services', tag: 'Core' },
        { name: 'Hibernate / JPA', tag: 'Core' },
      ],
    },
    backendAndData: {
      title: 'Backend & Data Architecture',
      description: 'Persistent storage, search indexing, event-driven pipelines, and scheduled jobs.',
      skills: [
        { name: 'Elasticsearch', tag: 'Core' },
        { name: 'SQL (PostgreSQL / MySQL)', tag: 'Core' },
        { name: 'Pub/Sub & Event-Driven', tag: 'Core' },
        { name: 'Schema Design & Indexing', tag: 'Core' },
        { name: 'Query Optimization', tag: 'Core' },
        { name: 'Scheduled Jobs', tag: 'Core' },
      ],
    },
    frontend: {
      title: 'Frontend & UI Engineering',
      description: 'Client-side application frameworks and modern styling systems.',
      skills: [
        { name: 'Angular', tag: 'Core' },
        { name: 'TypeScript', tag: 'Core' },
        { name: 'HTML5 / CSS3', tag: 'Core' },
        { name: 'Tailwind CSS', tag: 'Practiced' },
      ],
    },
    productionSupport: {
      title: 'Production Support & Observability',
      description: 'Incident resolution, diagnostics, and high-uptime operational discipline.',
      skills: [
        { name: 'L3 Production Support', tag: 'Core' },
        { name: 'Root Cause Analysis (RCA)', tag: 'Core' },
        { name: 'Incident Triage & SLA', tag: 'Core' },
        { name: 'JVM Profiling / Heap Analysis', tag: 'Core' },
        { name: 'Application Monitoring', tag: 'Core' },
      ],
    },
    toolsAndDevOps: {
      title: 'Build, DevOps & Tools',
      description: 'Daily developer environment, tooling, and version control.',
      skills: [
        { name: 'Git (GitHub, GitLab)', tag: 'Tool' },
        { name: 'Maven', tag: 'Tool' },
        { name: 'Postman', tag: 'Tool' },
        { name: 'Cursor / AI-Assisted Dev', tag: 'Tool' },
        { name: 'IntelliJ IDEA', tag: 'Tool' },
      ],
    },
    engineeringPractices: {
      title: 'Engineering Practices',
      description: 'Disciplined methodologies ensuring maintainability and scalability.',
      skills: [
        { name: 'System Design & Architecture', tag: 'Architecture' },
        { name: 'Clean Code Principles', tag: 'Architecture' },
        { name: 'Design Patterns', tag: 'Architecture' },
        { name: 'ITIL Incident / Problem / Change', tag: 'Core' },
        { name: 'Agile / Scrum', tag: 'Core' },
        { name: 'Java Streams & Functional API', tag: 'Core' },
      ],
    },
  },

  experience: [
    {
      company: 'Profit.co',
      role: 'Software Engineer',
      location: 'Chennai, India',
      period: 'Jul 2022 – Present',
      current: true,
      overview:
        'Takes end-to-end ownership of backend modules and full-stack features for an enterprise OKR SaaS platform serving 500–1000 organisations globally. Key responsibilities include microservices architecture, schema design, Elasticsearch tuning, API performance optimisation, and L3 production incident resolution.',
      responsibilities: [
        {
          category: 'API Performance & Search Optimization',
          items: [
            'Reduced API response times by ~63% (800ms → 300ms) through systematic profiling, query optimisation, and database indexing across 500–1000 enterprise organisations.',
            'Integrated and optimised Elasticsearch for advanced search and analytics, reducing search query response time by ~25% through targeted indexing and query restructuring.',
            'Developed MAT (Memory Analyser Tool) — an internal JVM heap profiler for identifying memory leaks in production, improving platform observability and proactive stability.',
          ],
        },
        {
          category: 'Core OKR & Enterprise Workflows',
          items: [
            'Designed and implemented OKR check-in and alignment flows, multi-level approval workflows, and multi-timezone support for globally distributed teams.',
            'Developed planned value generation, YTD / QTD calculation logic, and Bowler chart backend — aggregating historical and projected KPI data for executive performance reviews.',
            'Built email summary and share feature delivering scheduled OKR digests to 5,000+ users, and real-time notifications for updates, approvals, and reminders via Pub/Sub.',
            'Built and maintained a daily Pub/Sub-triggered scheduled job to recalculate planned values and velocity metrics across all active organisations, ensuring KPI accuracy at scale.',
          ],
        },
        {
          category: 'L3 Production Support & Team Leadership',
          items: [
            'Provided L3 production support across 500–1000 organisations — owning end-to-end incident triage, root cause analysis, and permanent fixes following ITIL processes.',
            'Eliminated recurring production incidents by implementing rigorous RCA and permanent code/schema fixes, reducing escalation rates and improving platform uptime.',
            'Collaborated closely with Product, QA, and Frontend (Angular / TypeScript) teams in Agile sprints; leveraged AI-assisted tooling (Cursor, GitHub Copilot) to accelerate delivery.',
          ],
        },
      ],
      technicalFocus: [
        'Java 17',
        'Spring Boot',
        'Microservices',
        'Elasticsearch',
        'PostgreSQL / MySQL',
        'Angular',
        'TypeScript',
        'Pub/Sub',
        'JVM Profiling',
        'ITIL / RCA',
      ],
    },
  ],

  caseStudies: [
    {
      id: 'case-study-api-optimization',
      title: 'Enterprise API Latency Reduction (800ms → 300ms)',
      summary:
        'Systematic profiling, query optimization, and database indexing reducing endpoint response times by ~63% across 500–1000 enterprise organizations.',
      context:
        'Production backend optimization on the Profit.co SaaS platform serving high-concurrency corporate tenants.',
      challenge:
        'Core reporting and dashboard endpoints experienced degraded response times (800ms+) under heavy concurrent access due to unindexed joins, redundant N+1 entity hydration, and unoptimized relational queries.',
      approach: [
        'Profiled production execution paths using APM tools to isolate exact execution bottlenecks between relational queries, serialization, and application logic.',
        'Redesigned schema indexing strategies and eliminated redundant nested table joins in PostgreSQL/MySQL.',
        'Refactored ORM mappings to use selective projections and batched fetch joins instead of full entity graph traversal.',
        'Conducted pre- and post-deployment benchmarks across production staging environments to validate latency under concurrent loads.',
      ],
      engineeringThemes: [
        'Performance Profiling',
        'Query Optimization',
        'Database Indexing',
        'Latency Reduction',
      ],
      outcome:
        'Reduced API response times by ~63% (from 800ms down to 300ms) with zero breaking contract changes, significantly improving responsiveness for 500–1000 enterprise organizations.',
      technologies: ['Java 17', 'Spring Boot', 'SQL', 'PostgreSQL', 'APM Profiling'],
      featured: true,
      visibility: 'public',
    },
    {
      id: 'case-study-elasticsearch-investigation',
      title: 'Elasticsearch Search & Analytics Tuning (~25% Latency Cut)',
      summary:
        'Targeted indexing, analyzer standardization, and Query DSL restructuring reducing search query latency by ~25% for complex multi-filter enterprise searches.',
      context:
        'Enterprise search infrastructure across thousands of objectives, key results, user entities, and organization hierarchies.',
      challenge:
        'Multi-tenant search requests involving nested alignment filters, dynamic status queries, and text scoring suffered from slow response times and occasional discrepancies with primary database states.',
      approach: [
        'Audited existing Elasticsearch index mappings, tokenizers, and Query DSL construction patterns across all search endpoints.',
        'Restructured query architecture to utilize fast filter contexts for deterministic criteria (tenantId, status, date) and isolated scoring only to text relevance fields.',
        'Standardized document indexing pipelines to ensure atomic synchronization whenever updates occurred in relational stores.',
        'Implemented custom routing keys and optimized sharding parameters to minimize cross-node search latency.',
      ],
      engineeringThemes: [
        'Elasticsearch Query DSL',
        'Index Tuning',
        'Search Latency',
        'Data Consistency',
      ],
      outcome:
        'Reduced search query response times by ~25% and eliminated indexing lag, delivering instantaneous multi-filter search results across enterprise organizations.',
      technologies: ['Elasticsearch', 'Query DSL', 'Java 17', 'Spring Boot', 'Relational DB'],
      featured: true,
      visibility: 'public',
    },
    {
      id: 'case-study-okr-backend',
      title: 'OKR Alignment Engine, Bowler Charts & Calculation Workflows',
      summary:
        'End-to-end backend architecture supporting OKR check-ins, multi-level approvals, planned value generation, YTD/QTD metrics, and Bowler charts.',
      context:
        'Core business engine of Profit.co handling corporate goal alignment, executive KPI reporting, and global timezone scheduling.',
      challenge:
        'Calculating accurate progress rollups, historical KPI trajectories, and planned values across complex multi-tier team hierarchies with varying global time zones and approval chains.',
      approach: [
        'Designed modular domain service layers separating validation, calculation logic, and event dispatch.',
        'Implemented complex business algorithms for planned value trajectories, YTD/QTD rollups, and executive Bowler charts.',
        'Engineered multi-timezone scheduling logic ensuring reporting deadlines and check-in cycles execute accurately for distributed global workforces.',
        'Integrated with Angular frontend components via strictly typed REST contracts.',
      ],
      engineeringThemes: [
        'Domain Architecture',
        'Complex Business Logic',
        'Timezone Handling',
        'KPI Analytics',
      ],
      outcome:
        'Built and delivered 10+ core backend features used daily by executive leadership and cross-functional teams across hundreds of global enterprises.',
      technologies: ['Java 17', 'Spring Boot', 'REST APIs', 'SQL', 'Angular'],
      featured: true,
      visibility: 'public',
    },
    {
      id: 'case-study-pubsub-notifications',
      title: 'Pub/Sub Async Notifications & Scheduled Recalculation Engine',
      summary:
        'Event-driven architecture using Pub/Sub async dispatch delivering email digests to 5,000+ users, real-time notifications, and daily automated metric recalculation.',
      context:
        'Asynchronous event processing and scheduled job pipelines for enterprise OKR updates, approvals, and reminders.',
      challenge:
        'Broadcasting check-in reminders and scheduled digests to 5,000+ users without blocking HTTP threads, while reliably running high-volume daily metric recalculation across all active organizations.',
      approach: [
        'Decoupled synchronous REST requests from heavy notification workflows using asynchronous Pub/Sub message queues.',
        'Designed scheduled batch jobs that recalculate planned values and velocity metrics during low-activity windows with transactional safety.',
        'Implemented idempotent message consumers with retry policies and dead-letter queues to prevent duplicate notifications.',
        'Built dynamic digest generation compiling personalized OKR updates into email summaries.',
      ],
      engineeringThemes: [
        'Event-Driven Architecture',
        'Pub/Sub Messaging',
        'Scheduled Batch Jobs',
        'High-Volume Dispatch',
      ],
      outcome:
        'Delivered a resilient notification pipeline reaching 5,000+ users with zero degradation to web API latency, ensuring 100% KPI metric consistency across all organizations.',
      technologies: ['Java 17', 'Pub/Sub', 'Spring Boot', 'Scheduled Jobs', 'PostgreSQL'],
      featured: true,
      visibility: 'public',
    },
    {
      id: 'case-study-mat-profiler',
      title: 'MAT (Memory Analyser Tool) — JVM Heap Profiler',
      summary:
        'Internal JVM heap memory analyzer built on personal initiative to identify and eliminate memory leaks proactively in production.',
      context:
        'Production reliability initiative to safeguard enterprise tenant uptime and optimize JVM resource consumption.',
      challenge:
        'Occasional memory pressure under prolonged high-traffic periods required proactive memory profiling without taking production services offline.',
      approach: [
        'Created MAT (Memory Analyser Tool) to capture and inspect JVM heap allocation patterns and live object references.',
        'Analyzed heap dump snapshots to identify lingering collections, unclosed streams, and retained object graphs.',
        'Collaborated with engineering teams to refactor memory-intensive routines and introduce proper lifecycle management.',
      ],
      engineeringThemes: [
        'JVM Heap Profiling',
        'Memory Leak Detection',
        'Production Stability',
        'Observability Tooling',
      ],
      outcome:
        'Empowered engineering with automated heap analysis, eliminated recurring out-of-memory risks, and established proactive stability management across production nodes.',
      technologies: ['Java', 'JVM Profiling', 'Heap Dump Analysis', 'Production Diagnostics'],
      featured: false,
      visibility: 'public',
    },
  ],

  engineeringApproach: [
    {
      title: 'Performance First',
      description:
        'Measure bottlenecks, identify expensive operations, and validate optimizations rather than guessing (~63% API latency reduction achieved in production).',
      icon: 'Zap',
      details: [
        'APM profiling before touching code (800ms → 300ms)',
        'Targeted database indexing and query restructuring',
        'Elasticsearch Query DSL tuning for 25% faster search',
      ],
    },
    {
      title: 'Data Consistency',
      description:
        'Verify data across API, storage, and application layers, especially when related records and search indices must remain synchronized.',
      icon: 'Database',
      details: [
        'Deterministic KPI and YTD/QTD calculation engines',
        'Atomic sync between relational storage and Elasticsearch',
        'Pub/Sub-triggered scheduled jobs for KPI accuracy',
      ],
    },
    {
      title: 'Production Reliability',
      description:
        'Investigate root causes, implement safe fixes, and verify that changes do not introduce regressions (L3 triage across 500–1000 organizations).',
      icon: 'ShieldCheck',
      details: [
        'End-to-end incident triage following ITIL workflows',
        'Root cause analysis (RCA) eliminating repeat incidents',
        'JVM memory profiling (MAT) for proactive heap health',
      ],
    },
    {
      title: 'Continuous Learning & Full-Stack',
      description:
        'Strengthen backend engineering fundamentals while staying adept with modern full-stack tools (Angular, TypeScript, AI tooling).',
      icon: 'BookOpen',
      details: [
        'Java 17 and Spring Boot microservice design',
        'Full-stack collaboration with Angular & TypeScript',
        'Accelerating velocity with Cursor & GitHub Copilot',
      ],
    },
  ],

  resume: {
    enabled: true, // Resume PDF is verified and placed in public/resume.pdf
    filePath: './resume.pdf',
    fileName: 'Kannan_Ganesan_Resume.pdf',
    note: 'Official resume of Kannan Ganesan — Software Engineer at Profit.co.',
  },

  contact: {
    email: 'kannangk4343@gmail.com',
    phone: '9943435005',
    githubUrl: 'https://github.com/kannan-g-dev',
    linkedinUrl: 'https://www.linkedin.com/in/kannan-ganesan-570413172/',
    location: 'Chennai, India',
    responseExpectation: 'I typically respond to engineering inquiries within 24 hours.',
    formService: {
      configured: false,
      endpointUrl: undefined,
    },
  },

  seo: {
    title: 'Kannan Ganesan | Software Engineer | Java Backend Developer',
    description:
      'Portfolio of Kannan Ganesan — Software Engineer with 4+ years of experience specializing in Java 17, Spring Boot, Elasticsearch, Angular, and high-performance backend systems.',
    ogTitle: 'Kannan Ganesan — Software Engineer & Java Backend Developer',
    ogDescription:
      'Software Engineer with 4+ years of experience in Java 17, Spring Boot, Elasticsearch, Pub/Sub, and Angular.',
    siteUrl: 'https://kannan-g-dev.github.io/portfolio/',
  },
};

export function isValidUrl(url?: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (trimmed === '' || trimmed === '#' || trimmed.includes('your-profile') || trimmed.includes('TODO')) {
    return false;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
