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
  screenType: "codage" | "cognifyz";
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "codage-01",
    tabLabel: "_CODAGE_01",
    tabIndex: 1,
    tabPosition: "left-8 md:left-12",
    folderTheme: {
      bg: "#A3A07A",
      darkEdge: "#484931",
      folderTabBg: "#B8B590",
    },
    tagNumber: "01",
    tagCategory: "Frontend",
    tagBg: "#2563eb",
    title: "BUILDING DYNAMIC UI & SECURE AUTHENTICATION FLOWS.",
    narrative:
      "Built responsive, user-friendly pages using React.js and Tailwind CSS, integrating REST APIs for dynamic real-time data display. Developed reusable UI components and implemented backend authentication, securely connecting the client application to the database.",
    narrativeHighlight:
      "integrating REST APIs for dynamic real-time data display and backend authentication.",
    caseStudyLink: "#experience",
    brief: {
      company: "Codage Habitation",
      classification: "Modern Web Application & UI Architecture",
      role: "Frontend Developer Intern",
      period: "5 Months (Current)",
      status: "Active Production · React & REST APIs",
      keyAchievements:
        "Engineered reusable component systems in React.js and Tailwind CSS. Connected secure authentication endpoints and optimized API payload rendering for high-performance responsive interfaces.",
    },
    handwrittenNote:
      "Clean component architecture drives responsive user experiences.",
    stickerBadge: "CODAGE",
    screenType: "codage",
  },
  {
    id: "cognifyz-02",
    tabLabel: "_COGNIFYZ_02",
    tabIndex: 2,
    tabPosition: "left-56 md:left-72",
    folderTheme: {
      bg: "#9A9B7A",
      darkEdge: "#3F422E",
      folderTabBg: "#ACAD8E",
    },
    tagNumber: "02",
    tagCategory: "Full Stack",
    tagBg: "#3b82f6",
    title: "DEVELOPING & OPTIMIZING FULL-STACK WEB SOLUTIONS.",
    narrative:
      "Built and optimized full-stack web applications from front-end interfaces to back-end RESTful APIs and databases. Collaborated with cross-functional teams on multiple real-world projects to deliver scalable, secure, and user-friendly web solutions.",
    narrativeHighlight:
      "built and optimized full-stack web applications, from front-end interfaces to back-end APIs and databases.",
    caseStudyLink: "#experience",
    brief: {
      company: "Cognifyz Technologies",
      classification: "Full Stack Engineering & API Optimization",
      role: "Full Stack Web Developer Intern",
      period: "Apr — May 2026",
      status: "Successfully Delivered · Full Stack Solutions",
      keyAchievements:
        "Delivered end-to-end full stack web modules with Node.js, Express, and database integrations. Streamlined API routing and improved database query performance across project milestones.",
    },
    handwrittenNote:
      "End-to-end alignment from database schema to UI renders.",
    stickerBadge: "COGNIFYZ",
    screenType: "cognifyz",
  },
];
