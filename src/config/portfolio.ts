/**
 * Portfolio Configuration - Single Source of Truth
 * 
 * Update this file to customize profile details, experience, skills,
 * case studies, and contact information. All text is typed and verified.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  tag?: 'Core' | 'Practiced' | 'Learning' | 'Daily Tool';
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
  period: string; // Editable start and end dates
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
  githubUrl?: string; // Optional - hidden if empty
  demoUrl?: string;   // Optional - hidden if empty
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
    // Career interest indicator: disabled by default as required by specification
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
    enabled: boolean; // Set to true once public/resume.pdf is placed
    filePath: string;
    fileName: string;
    note: string;
  };
  contact: {
    email: string;
    githubUrl: string;
    linkedinUrl: string; // If empty or placeholder, UI handles gracefully
    location: string;
    responseExpectation: string;
    // Optional contact form endpoint configuration (e.g. Formspree / backend API)
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
    siteUrl?: string; // Provide once deployed to custom domain or GitHub Pages
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Kannan Ganesan',
    monogram: 'KG',
    title: 'Software Engineer | Java Backend Developer',
    experienceSummary: '3+ years of software development experience',
    currentCompany: 'Profit.co',
    location: 'Chennai, India',
    heroHeading: "Hi, I'm Kannan Ganesan.",
    heroHeadline: 'Building reliable backend systems with Java and modern software engineering.',
    heroIntroduction:
      "I'm a Software Engineer focused on backend development, REST APIs, data-driven applications, and performance optimization. I enjoy solving complex engineering problems and building reliable software.",
    primaryCta: {
      text: 'Explore My Work',
      href: '#projects',
    },
    secondaryCta: {
      text: 'Get In Touch',
      href: '#contact',
    },
    keyTechBadges: ['Java', 'Spring Boot', 'REST APIs', 'Elasticsearch'],
    careerInterest: {
      enabled: false, // Default is disabled/hidden per guidelines
      statusText: 'Open to discussions on backend engineering',
    },
  },

  about: {
    paragraphs: [
      'I am a Software Engineer with 3+ years of experience specializing in backend application development. In my day-to-day engineering at Profit.co, I work on an enterprise OKR (Objectives and Key Results) management platform serving organizational alignment, goal tracking, and business metrics.',
      'My core work centers on designing and maintaining resilient REST API workflows, investigating complex data behavior across relational databases and Elasticsearch, and conducting rigorous production troubleshooting. I focus heavily on parent-child alignment propagation, check-in data synchronization, and data consistency across application components.',
      'Beyond shipping features, I spend significant time investigating API latency bottlenecks, performing root-cause analysis on production incidents, and writing clear, reproducible fixes. I am continuously deepening my mastery of Spring Boot architecture and microservices patterns through deliberate engineering practice.',
    ],
    engineeringFocus: [
      {
        title: 'Backend Architecture & APIs',
        description: 'Robust RESTful endpoints, clean service boundaries, and request validation.',
      },
      {
        title: 'Elasticsearch & Query Analysis',
        description: 'Complex filtering, index synchronization, and efficient search retrieval.',
      },
      {
        title: 'Data Consistency & Integrity',
        description: 'Hierarchical alignment models, check-in propagation, and cross-store synchronization.',
      },
      {
        title: 'Production Root-Cause Analysis',
        description: 'Systematic debugging, reproduction, and non-regressive production hotfixes.',
      },
    ],
  },

  skillCategories: {
    programming: {
      title: 'Programming',
      description: 'Core languages used for backend logic and querying.',
      skills: [
        { name: 'Java', tag: 'Core' },
        { name: 'SQL', tag: 'Core' },
      ],
    },
    backend: {
      title: 'Backend Development',
      description: 'Frameworks, service design, and API architectures.',
      skills: [
        { name: 'Spring Boot', tag: 'Core' },
        { name: 'REST APIs', tag: 'Core' },
        { name: 'Microservices', tag: 'Practiced' },
        { name: 'Backend application architecture', tag: 'Core' },
      ],
    },
    dataAndSearch: {
      title: 'Databases & Search',
      description: 'Persistent storage, search indexing, and consistency validation.',
      skills: [
        { name: 'Elasticsearch', tag: 'Core' },
        { name: 'Relational databases', tag: 'Core' },
      ],
    },
    tools: {
      title: 'Tools & Workflow',
      description: 'Daily developer environment and version control.',
      skills: [
        { name: 'Git', tag: 'Daily Tool' },
        { name: 'Maven', tag: 'Daily Tool' },
        { name: 'IntelliJ IDEA', tag: 'Daily Tool' },
        { name: 'Cursor', tag: 'Daily Tool' },
      ],
    },
    frontend: {
      title: 'Frontend Familiarity',
      description: 'Client-side technologies for collaborating with frontend teams.',
      skills: [
        { name: 'Angular', tag: 'Practiced' },
        { name: 'TypeScript', tag: 'Practiced' },
      ],
    },
    engineeringPractices: {
      title: 'Engineering Practices',
      description: 'Methodologies ensuring high reliability and maintainability.',
      skills: [
        { name: 'Production debugging', tag: 'Core' },
        { name: 'Root cause analysis', tag: 'Core' },
        { name: 'API performance optimization', tag: 'Core' },
        { name: 'Data synchronization', tag: 'Core' },
        { name: 'Troubleshooting and maintenance', tag: 'Core' },
        { name: 'Data consistency validation', tag: 'Core' },
      ],
    },
  },

  experience: [
    {
      company: 'Profit.co',
      role: 'Software Engineer',
      location: 'Chennai, India',
      // Editable employment duration (e.g., '2021 – Present' or exact dates)
      period: '3+ Years (Current)',
      current: true,
      overview:
        'Developing and maintaining enterprise backend services for the Profit.co OKR management platform, focusing on business logic reliability, data synchronization, search indexing, and production stability.',
      responsibilities: [
        {
          category: 'Core OKR Platform Backend',
          items: [
            'Engineered and maintained backend functionality supporting objectives, key results, check-in cycles, alignment hierarchies, and executive reporting workflows.',
            'Implemented and maintained robust REST API workflows handling complex validations and multi-entity relationship management.',
          ],
        },
        {
          category: 'Data Synchronization & Search',
          items: [
            'Worked extensively with Elasticsearch queries, index mapping, and document consistency alongside relational data stores.',
            'Investigated and resolved complex data synchronization challenges between user check-ins, roll-up calculations, and search indices.',
          ],
        },
        {
          category: 'Production Support & Performance',
          items: [
            'Investigated and resolved critical production issues through systematic log inspection, environment reproduction, and root-cause analysis.',
            'Identified API latency bottlenecks and optimized data retrieval paths to eliminate redundant querying and reduce response times.',
            'Supported ongoing releases, hotfixes, regression checks, and production verification procedures.',
          ],
        },
      ],
      technicalFocus: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'Elasticsearch',
        'SQL',
        'Maven',
        'Git',
        'Data Consistency',
        'Performance Tuning',
      ],
    },
  ],

  caseStudies: [
    {
      id: 'case-study-okr-backend',
      title: 'OKR Management Backend Architecture',
      summary:
        'Backend functionality supporting objectives, key results, check-ins, reporting, and alignment workflows within an OKR management platform.',
      context:
        'Professional work at Profit.co supporting organizational goal management across complex team hierarchies and alignment trees.',
      challenge:
        'Managing intricate objective hierarchies where changes to child key results must accurately update parent progress without compromising transaction boundaries, concurrency safety, or API responsiveness.',
      approach: [
        'Structured modular service layers separating business calculation rules from persistence logic.',
        'Implemented strict request validation and error-handling semantics across all REST endpoints.',
        'Modeled domain relationships to ensure alignment updates propagate reliably across teams.',
        'Validated data persistence flows with unit and regression tests prior to deployment.',
      ],
      engineeringThemes: [
        'Business Logic',
        'API Reliability',
        'Data Integrity',
        'Maintainable Backend Workflows',
      ],
      outcome:
        'Delivered dependable backend workflows supporting multi-tier corporate OKR cycles with verified consistency and minimal regression risk.',
      technologies: ['Java', 'REST APIs', 'Elasticsearch', 'SQL'],
      featured: true,
      visibility: 'public',
    },
    {
      id: 'case-study-data-sync',
      title: 'Check-in & Data Synchronization',
      summary:
        'Investigating and improving check-in processing, parent-child key-result propagation, plan synchronization, and consistency across application data sources.',
      context:
        'Addressing discrepancies between asynchronous check-in events, computed key-result milestones, and target data sources.',
      challenge:
        'When users submitted high-frequency check-in updates, intermittent race conditions and out-of-order execution could lead to desynchronization between primary database records and search indexes.',
      approach: [
        'Traced execution lifecycles from API entry through transactional boundaries and indexing events.',
        'Added consistency validation checks to verify that parent progress accurately reflects aggregated child states before committing state updates.',
        'Addressed edge-case update paths during concurrent check-in submissions.',
        'Executed end-to-end regression testing to verify that state transitions remained strictly deterministic.',
      ],
      engineeringThemes: [
        'Edge-Case Handling',
        'Data Consistency Validation',
        'Workflow Correctness',
        'Safe Regression Testing',
      ],
      outcome:
        'Eliminated data skew across check-in workflows, ensuring users and managers see matching progress figures across all views.',
      technologies: ['Java', 'Backend APIs', 'Elasticsearch', 'Relational DB'],
      featured: true,
      visibility: 'public',
    },
    {
      id: 'case-study-api-optimization',
      title: 'API Performance Optimization',
      summary:
        'Investigating slow backend APIs, identifying unnecessary database or Elasticsearch operations, improving data retrieval patterns, and validating performance changes.',
      context:
        'Resolving latency spikes in frequently accessed dashboard and reporting endpoints under heavy query loads.',
      challenge:
        'Certain reporting and overview endpoints experienced latency deterioration due to redundant nested queries, excessive payload serialization, and unindexed filter combinations.',
      approach: [
        'Profiled request execution paths to quantify time spent in database queries versus application processing.',
        'Identified N+1 query patterns and replaced multiple iterative lookups with batched retrieval strategies.',
        'Restructured pagination and selective field projections to minimize payload transfer overhead.',
        'Conducted controlled pre- and post-optimization latency measurements to verify improvements before production rollout.',
      ],
      engineeringThemes: [
        'Query Efficiency',
        'Pagination & Filtering',
        'Bottleneck Identification',
        'Measurement-Driven Optimization',
      ],
      outcome:
        'Substantially reduced endpoint response times and eliminated unnecessary database round-trips without altering API contracts.',
      technologies: ['Java', 'REST APIs', 'Elasticsearch', 'Performance Analysis'],
      featured: true,
      visibility: 'public',
    },
    {
      id: 'case-study-elasticsearch-investigation',
      title: 'Elasticsearch Query & Data Investigation',
      summary:
        'Investigating complex filters, query behavior, index-related problems, data discrepancies, and production search issues.',
      context:
        'Maintaining high search accuracy and responsiveness across thousands of objectives, key results, and user entities.',
      challenge:
        'Complex multi-filter queries yielded occasional false negatives or unexpected scoring behavior due to subtle differences between text analyzers, filter contexts, and stale document states.',
      approach: [
        'Analyzed query explain plans and Query DSL structures to isolate filter vs. scoring context mismatches.',
        'Identified mapping inconsistencies and standardized tokenization rules across search fields.',
        'Established diagnostic procedures to identify and resolve document desynchronization between primary storage and indices.',
        'Built verified query templates that ensure consistent filtering across status, department, and time-range dimensions.',
      ],
      engineeringThemes: [
        'Search Query Analysis',
        'Data Validation',
        'Troubleshooting',
        'Efficient Retrieval',
      ],
      outcome:
        'Restored accurate, predictable search behavior across complex filter permutations and simplified ongoing index maintenance.',
      technologies: ['Elasticsearch', 'Query DSL', 'Java', 'Search Indexing'],
      featured: true,
      visibility: 'public',
    },
  ],

  engineeringApproach: [
    {
      title: 'Performance First',
      description:
        'Measure bottlenecks, identify expensive operations, and validate optimizations rather than guessing.',
      icon: 'Zap',
      details: [
        'Profile execution before changing code',
        'Eliminate redundant database round-trips',
        'Validate gains with before-and-after benchmarks',
      ],
    },
    {
      title: 'Data Consistency',
      description:
        'Verify data across API, storage, and application layers, especially when related records must remain synchronized.',
      icon: 'Database',
      details: [
        'Audit state transitions across parent-child models',
        'Ensure dual-write and index synchronization stay reliable',
        'Protect against partial update edge cases',
      ],
    },
    {
      title: 'Production Reliability',
      description:
        'Investigate root causes, implement safe fixes, and verify that changes do not introduce regressions.',
      icon: 'ShieldCheck',
      details: [
        'Reproduce issues locally before writing code',
        'Target root causes rather than patching symptoms',
        'Run targeted regression checks on impacted paths',
      ],
    },
    {
      title: 'Continuous Learning',
      description:
        'Strengthen backend engineering fundamentals through practical implementation and continued study.',
      icon: 'BookOpen',
      details: [
        'Deepen understanding of Spring Boot internals',
        'Study distributed systems and microservice tradeoffs',
        'Maintain clean, readable code and clear documentation',
      ],
    },
  ],

  resume: {
    // Configurable resume availability
    enabled: false, // Set to true once public/resume.pdf is added
    filePath: './resume.pdf',
    fileName: 'Kannan_Ganesan_Resume.pdf',
    note: 'Resume PDF is available upon direct request or download once configured in public/resume.pdf.',
  },

  contact: {
    email: 'kannangk4343@gmail.com',
    githubUrl: 'https://github.com/kannan-g-dev',
    // Set to your actual LinkedIn profile URL when ready
    linkedinUrl: '', // Safe empty placeholder - handled cleanly in UI
    location: 'Chennai, India',
    responseExpectation: 'I typically respond to engineering inquiries within 24-48 hours.',
    formService: {
      configured: false, // Static frontend: contact form generates clean email drafts
      endpointUrl: undefined,
    },
  },

  seo: {
    title: 'Kannan Ganesan | Software Engineer | Java Backend Developer',
    description:
      'Portfolio of Kannan Ganesan — Software Engineer with 3+ years of experience specializing in Java, Spring Boot, REST APIs, Elasticsearch, and reliable backend systems.',
    ogTitle: 'Kannan Ganesan — Software Engineer & Java Backend Developer',
    ogDescription:
      'Backend Software Engineer specializing in Java, Spring Boot, REST APIs, Elasticsearch, and data consistency.',
    siteUrl: '', // Add deployed URL here
  },
};

/**
 * Helpers to check if links are real and safe to render
 */
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
