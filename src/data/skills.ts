import type { Skill } from "@/types/Skill";
import { logos } from "@/assets/logos";

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { label: "JavaScript", logo: logos.javascript },
      { label: "TypeScript", logo: logos.typescript },
      { label: "React", logo: logos.react },
      { label: "Vue.js", logo: logos.vuejs },
      { label: "HTML5", logo: logos.html5 },
      { label: "CSS", logo: logos.css },
      { label: "Tailwind CSS", logo: logos.tailwindcss },
      { label: "Bootstrap", logo: logos.bootstrap },
      { label: "Chakra UI", logo: logos.chakraui },
      { label: "Responsive Design", logo: logos.pwa },
    ],
  },
  {
    category: "Backend",
    skills: [
      { label: "PHP", logo: logos.php },
      { label: "Python", logo: logos.python },
      { label: "Laravel", logo: logos.laravel },
      { label: "Inertia", logo: logos.inertia },
      { label: "RESTful APIs", logo: logos.sonarqubeserver },
      { label: "JSON", logo: logos.json },
    ],
  },
  {
    category: "Databases & Platforms",
    skills: [
      { label: "MySQL", logo: logos.mysql },
      { label: "SQLite", logo: logos.sqlite },
      { label: "PostgreSQL", logo: logos.postgresql },
      { label: "Supabase", logo: logos.supabase },
      { label: "Caspio", logo: logos.caspio },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { label: "Git", logo: logos.git },
      { label: "GitHub", logo: logos.github },
      { label: "GitLab", logo: logos.gitlab },
      { label: "Vercel", logo: logos.vercel },
      { label: "Jira", logo: logos.jira },
      { label: "Vite", logo: logos.vite },
      { label: "VS Code", logo: logos.vscode },
    ],
  },
  {
    category: "Design Tools",
    skills: [
      { label: "Figma", logo: logos.figma },
      { label: "Canva", logo: logos.canva },
      { label: "Adobe Photoshop", logo: logos.photoshop },
      { label: "Adobe Illustrator", logo: logos.illustrator },
      { label: "InVision", logo: logos.invision },
    ],
  },
];

export default skillCategories;
