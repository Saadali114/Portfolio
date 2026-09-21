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
  greeting: "Hi, I'm Saad Ali 👋",
  heroHeading: "Building Software. Learning Every Day.",
  heroSubtitle:
    "BSc Computer Science student and Full-Stack Developer focused on building practical web applications and exploring AI-powered solutions.",
  role: "BSc Computer Science Student | Full-Stack Developer | AI & Web Developer",
  location: "Mumbai, India",
  careerGoal:
    "I am a Computer Science student building real-world software projects and preparing for software engineering internships and future software engineering roles.",
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
    linkedin: "https://linkedin.com/in/placeholder-saadali", // Replace with your LinkedIn profile
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
    description: "Modern, responsive, component-driven user interfaces",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    description: "Scalable server architectures and API services",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    description: "Relational and document storage schemas & ORMs",
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools",
    description: "Version control and developer workflows",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "AI / Other",
    description: "Applied machine intelligence and decentralized exploration",
    skills: [
      "OCR",
      "Computer Vision",
      "AI-powered document processing",
      "Blockchain fundamentals",
      "GIS concepts",
    ],
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
      "Express.js",
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
    githubUrl: "https://github.com/Saadali114", // Marked: Update with project repo if hosted separately
    liveDemoUrl: "#ildrvs-demo-preview", // Placeholder demo link
    isPlaceholderDemo: true,
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
    githubUrl: "https://github.com/Saadali114", // Marked: Update with repository URL
  },
];

export const learningMilestones: LearningMilestone[] = [
  {
    phase: "Phase 1",
    title: "Foundations",
    description: "Core computer science and web standards building blocks",
    items: ["HTML", "CSS", "JavaScript"],
    status: "completed",
  },
  {
    phase: "Phase 2",
    title: "Modern Web Development",
    description: "Type-safe, componentized reactive architectures & utility styling",
    items: ["TypeScript", "React", "Tailwind CSS", "Next.js"],
    status: "completed",
  },
  {
    phase: "Phase 3",
    title: "Backend Development",
    description: "Server runtimes, middleware, and decoupled RESTful APIs",
    items: ["Node.js", "Express.js", "REST APIs"],
    status: "completed",
  },
  {
    phase: "Phase 4",
    title: "Databases & Schemas",
    description: "Data modeling, schema migrations, and relational ORM integrations",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
    status: "completed",
  },
  {
    phase: "Phase 5",
    title: "Advanced Exploration",
    description: "Specialized systems under active study and prototyping",
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
