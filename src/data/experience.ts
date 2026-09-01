export interface ExperienceItem {
  id: string;
  tabLabel: string;
  tabIndex: number;
  tabPosition: string;
  folderTheme: {
    bg: string;
    darkEdge: string;
    folderTabBg: string;
  };
  tagNumber: string;
  tagCategory: string;
  tagBg: string;
  title: string;
  titleHighlight?: string;
  narrative: string;
  narrativeHighlight: string;
  caseStudyLink: string;
  brief: {
    company: string;
    classification: string;
    role: string;
    period: string;
    status: string;
    keyAchievements: string;
  };
  handwrittenNote: string;
  stickerBadge?: string;
  screenType: "fintech" | "frontend" | "backend";
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "pagarbook-01",
    tabLabel: "_PAGARBOOK_01",
    tabIndex: 1,
    tabPosition: "left-8 md:left-12",
    folderTheme: {
      bg: "#A3A07A",
      darkEdge: "#484931",
      folderTabBg: "#B8B590",
    },
    tagNumber: "01",
    tagCategory: "Full Stack",
    tagBg: "#2563eb",
    title: "BUILDING REAL-TIME ORDER & WORKFORCE LEDGERS.",
    narrative:
      "Engineered end-to-end order processing pipelines and salary management systems handling 50k+ daily transactions with sub-100ms response times. Architected reusable React component libraries and optimized PostgreSQL database queries for instant audit trails.",
    narrativeHighlight:
      "handling 50k+ daily transactions with sub-100ms response times.",
    caseStudyLink: "#experience",
    brief: {
      company: "PagarBook",
      classification: "FinTech & SME Order Management Systems",
      role: "Full Stack Web Developer",
      period: "2023 — Present · Full-time",
      status: "Active Production · High Reliability",
      keyAchievements:
        "Streamlined merchant order-to-payment lifecycle with automated audit logging, real-time WebSocket state synchronization, and instant PDF receipt generation.",
    },
    handwrittenNote:
      "Fast UI and reliable ledgers build merchant trust.",
    stickerBadge: "PAGARBOOK",
    screenType: "fintech",
  },
  {
    id: "freelance-02",
    tabLabel: "_FREELANCE_02",
    tabIndex: 2,
    tabPosition: "left-48 md:left-64",
    folderTheme: {
      bg: "#9A9B7A",
      darkEdge: "#3F422E",
      folderTabBg: "#ACAD8E",
    },
    tagNumber: "02",
    tagCategory: "Frontend Arch",
    tagBg: "#3b82f6",
    title: "DESIGNING HIGH-CONVERSION WEBSITES & INTERACTIVE APPS.",
    narrative:
      "Delivered production-grade Next.js web applications, design systems, and animated landing experiences for global SaaS and e-commerce clients. Focused on core web vitals, accessible interactions, and modern animated interfaces.",
    narrativeHighlight:
      "production-grade Next.js web applications, design systems, and animated landing experiences.",
    caseStudyLink: "#experience",
    brief: {
      company: "Independent / Client Works",
      classification: "SaaS Platforms & Modern Web Applications",
      role: "Lead Frontend & Interaction Engineer",
      period: "2023 — 2024 · Contract",
      status: "Shipped & Deployed to Production",
      keyAchievements:
        "Engineered custom motion design systems in Framer Motion, improved Lighthouse performance scores to 98+, and reduced checkout drop-offs by 35%.",
    },
    handwrittenNote:
      "Simplicity in interface, precision in architecture.",
    stickerBadge: "FRONTEND",
    screenType: "frontend",
  },
  {
    id: "internship-03",
    tabLabel: "_INTERNSHIP_03",
    tabIndex: 3,
    tabPosition: "left-88 md:left-[28rem]",
    folderTheme: {
      bg: "#8E9374",
      darkEdge: "#363A25",
      folderTabBg: "#A1A784",
    },
    tagNumber: "03",
    tagCategory: "Backend & Cloud",
    tagBg: "#10b981",
    title: "SCALING REST APIS & CLOUD DEPLOYMENT PIPELINES.",
    narrative:
      "Developed secure RESTful microservices with Node.js and Express, integrated MongoDB/PostgreSQL database schemas, and configured Docker CI/CD automated deployment pipelines on AWS instances with zero-downtime rollouts.",
    narrativeHighlight:
      "configured Docker CI/CD automated deployment pipelines on AWS instances with zero-downtime rollouts.",
    caseStudyLink: "#experience",
    brief: {
      company: "Tech Solutions Lab",
      classification: "Cloud Infrastructure & Backend Systems",
      role: "Software Engineer Intern",
      period: "2022 — 2023 · Internship",
      status: "Successfully Completed & Migrated",
      keyAchievements:
        "Containerized legacy service modules with Docker, automated unit & integration testing in GitHub Actions, and reduced deployment time from 40m to 6m.",
    },
    handwrittenNote:
      "Clean code and automated pipelines prevent 90% of bugs.",
    stickerBadge: "DEVOPS",
    screenType: "backend",
  },
];
