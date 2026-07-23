import type { WorkExperience } from "@/types/WorkExperience";

const workExperience: WorkExperience[] = [
  {
    role: "Web Application Developer",
    company: "Caspio",
    start: "2022",
    end: "Present",
    summary:
      "Designed and developed enterprise systems for clients in healthcare, operations, sanitation, logistics, marketing, and non-profits using Caspio's proprietary low-code platform",
    details: [
      "Spearheaded full-stack development of the SET3 operations management app, working with frontend components and backend logic to improve responsiveness by 62%",
      "Optimized performance of a scheduling app for SAGE Services, a non-profit organization, improving average page speed load time by 67%",
      "Designed, developed, and tested features of a COVID-19 medical testing app for Snap Healthcare, resulting in a total of 830 additional billable hours for the company",
      "Proactively collaborated with various Project Managers, Quality Assurance Engineers, Business Analysts and Designers to meet customer requirements",
    ],
    skills: ["PHP", "Bootstrap", "REST API", "JavaScript", "CSS", "Caspio"],
  },
  {
    role: "Full-Stack Web Developer",
    company: "ImagineWare Solutions",
    start: "2018",
    end: "2022",
    summary:
      "Full-stack web developer and UI/UX designer for responsive web applications",
    details: [
      "Converted high-level business requirements into interactive, mobile-first wireframes and prototypes for over 10 clients",
      "Developed and maintained web applications for clients such as Macao Imperial Tea by Fredley Group of Companies",
    ],
  },
  {
    role: "IT-CIM Automation Intern",
    company: "ON Semiconductor Philippines, Inc.",
    start: "Jan 2018",
    end: "Mar 2018",
    summary:
      "Developed and documented an Employee Shuttle Reservation System (ESRS) for company-wide use",
    skills: ["PHP", "Bootstrap", "MySQL", "HTML", "CSS", "JavaScript"],
  },
];

export default workExperience;
