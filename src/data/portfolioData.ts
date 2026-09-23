export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isPlaceholderDemo?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface LearningMilestone {
  phase: string;
  title: string;
  description: string;
  items: string[];
  status: "completed" | "in-progress" | "exploring";
}

export const personalData = {
  name: "Saad Ali",
  greeting: "Hi, I'm Saad Ali",
  heroHeading: "Building Software.\nLearning Every Day.",
  heroSubtitle:
    "BSc Computer Science student and Full-Stack Developer focused on building practical web applications and exploring AI-powered solutions.",
  roles: [
    "BSc Computer Science Student",
    "Full-Stack Developer",
    "AI & Web Developer",
  ],
  role: "BSc Computer Science Student | Full-Stack Developer | AI & Web Developer",
  location: "Mumbai, India",
  careerGoal:
    "I am a Computer Science student building real-world software projects and preparing for software engineering internships and future software engineering roles.",
  aboutHeading: "Building. Breaking. Learning.",
  aboutText:
    "I’m a BSc Computer Science student from Mumbai with a strong interest in software development, full-stack web applications, and AI-powered systems. I enjoy turning ideas into working applications and learning new technologies by building real projects.",
  learningEthos: [
    { step: "01", title: "Learn", desc: "Core concepts & systems" },
    { step: "02", title: "Build", desc: "Hands-on implementation" },
    { step: "03", title: "Test", desc: "Edge cases & validation" },
    { step: "04", title: "Deploy", desc: "Production delivery" },
    { step: "05", title: "Improve", desc: "Refactor & optimize" },
  ],
  links: {
    github: "https://github.com/Saadali114",
    linkedin: "https://www.linkedin.com/in/idrisi-shahabuddin-2002a8333/",
    email: "saadali.dev.placeholder@example.com", // Replace with your direct email address
  },
  education: {
    degree: "BSc Computer Science",
    status: "Currently pursuing",
    expectedGraduation: "2027",
    location: "Mumbai, India",
  },
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Component architectures, responsive design & state systems",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    description: "Robust server runtimes, controllers & RESTful endpoints",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    description: "Document models, relational schemas & type-safe ORMs",
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools",
    description: "Version control workflows, environments & build tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "AI / Computer Vision",
    description: "Applied visual intelligence & automated extraction pipelines",
    skills: ["OCR", "Computer Vision", "AI-powered document processing"],
  },
  {
    category: "Other Technologies",
    description: "Decentralized consensus concepts & spatial coordinates",
    skills: ["Blockchain", "GIS"],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "ildrvs",
    title: "Intelligent Land Record Digitization & Validation System (ILDRVS)",
    badge: "AI & Full-Stack Platform",
    shortDescription:
      "An AI-assisted land-record digitization and validation platform designed to process historical land documents and convert unstructured document information into structured digital records while supporting verification workflows.",
    problem:
      "Historical land archives suffer from physical degradation, unstructured textual formats, and laborious cross-referencing against municipal cadastral databases.",
    solution:
      "Constructed an intelligent pipeline combining multi-language OCR and AI Vision for document extraction, Prisma & PostgreSQL for structured relational records, and GIS mapping concepts for spatial integrity verification.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "AI Vision",
      "OCR",
      "GIS",
    ],
    highlights: [
      "Historical land-document digitization",
      "Document information extraction",
      "Structured land-record data",
      "Verification workflow",
      "Government-data comparison concept",
      "AI-assisted document analysis",
      "Multilingual document support",
    ],
    githubUrl: "https://github.com/Saadali114",
    liveDemoUrl: "https://ilrd-frontend.onrender.com/",
    isPlaceholderDemo: false,
  },
  {
    id: "blockchain-scholarship",
    title: "Blockchain-Based Scholarship Management",
    badge: "Web3 & Distributed Systems",
    shortDescription:
      "A scholarship management application exploring blockchain-based verification and transparent scholarship workflows.",
    problem:
      "Conventional scholarship grant workflows lack verifiable transparency, leaving student verification and disbursement audits prone to opacity.",
    solution:
      "Engineered a dual-tier web application integrating React front-end with Node.js/MongoDB and Ethereum smart contracts via Hardhat and Solidity for immutable grant lifecycle tracking.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Blockchain",
      "Hardhat",
      "Solidity",
    ],
    highlights: [
      "User/Admin roles with distinct privileges",
      "Scholarship lifecycle management",
      "Blockchain transaction concepts",
      "Cryptographic authentication",
      "Database integration with MongoDB",
    ],
    githubUrl: "https://github.com/Saadali114",
  },
];

export const learningMilestones: LearningMilestone[] = [
  {
    phase: "Stage 01",
    title: "Foundations",
    description: "Core computer science fundamentals, DOM manipulation & standard protocols",
    items: ["HTML", "CSS", "JavaScript"],
    status: "completed",
  },
  {
    phase: "Stage 02",
    title: "Modern Web",
    description: "Type-safe reactive component architectures, utility styling & SSR paradigms",
    items: ["TypeScript", "React", "Tailwind CSS", "Next.js"],
    status: "completed",
  },
  {
    phase: "Stage 03",
    title: "Backend",
    description: "Asynchronous I/O runtimes, middleware architecture & decoupled REST services",
    items: ["Node.js", "Express.js", "REST APIs"],
    status: "completed",
  },
  {
    phase: "Stage 04",
    title: "Databases",
    description: "NoSQL document collections, relational normalization & migrations with Prisma",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
    status: "completed",
  },
  {
    phase: "Stage 05",
    title: "Advanced Exploration",
    description: "Document AI pipelines, vision models, decentralized smart contracts & GIS coordinates",
    items: ["AI", "OCR", "Computer Vision", "Blockchain", "GIS"],
    status: "exploring",
  },
];

export const codingShowcase = {
  title: "Code. Build. Learn. Repeat.",
  subtitle:
    "Most of my learning happens through building projects, experimenting with technologies, and solving problems.",
  stats: [
    { label: "Status", value: "Actively Coding" },
    { label: "Focus", value: "Full-Stack & AI Systems" },
    { label: "Methodology", value: "Hands-on Project Building" },
  ],
};

export const contactSectionData = {
  heading: "Let's build something.",
  subtitle:
    "I'm always interested in learning, building, and connecting with other developers.",
};
