export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "IE Networks Solutions",
    role: "Tech Intern",
    period: "Apr 2026 – Present",
    description:
      "Working on enterprise service management software using modern full-stack technologies.",
    responsibilities: [
      "Developing frontend features using Next.js and React",
      "Integrating REST APIs",
      "Improving UI/UX",
      "Fixing production bugs",
      "Collaborating using Git workflows",
      "Working with NestJS backend services",
      "Implementing responsive interfaces",
    ],
  },
  {
    id: 2,
    company: "IE Networks Solutions",
    role: "Software Developer Intern",
    period: "Feb 2026 – Apr 2026",
    description:
      "Built and maintained web application features while gaining experience with production software development practices.",
    responsibilities: [],
  },
  {
    id: 3,
    company: "Ethiopian Electric Utility",
    role: "IT Support Intern",
    period: "",
    description:
      "Configured LAN infrastructure, installed workstations, maintained hardware, and supported office networking systems.",
    responsibilities: [],
  },
];
