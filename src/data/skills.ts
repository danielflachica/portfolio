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
      { label: "JavaScript (ES6+)" },
      { label: "TypeScript" },
      { label: "React" },
      { label: "VueJS" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Tailwind CSS" },
      { label: "Bootstrap" },
      { label: "ChakraUI" },
      { label: "Responsive Design" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { label: "PHP" },
      { label: "Python" },
      { label: "Laravel" },
      { label: "InertiaJS" },
      { label: "RESTful APIs" },
      { label: "JSON" },
    ],
  },
  {
    category: "Databases & Platforms",
    skills: [
      { label: "MySQL" },
      { label: "PostgreSQL" },
      { label: "Supabase" },
      { label: "Caspio" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { label: "Git" },
      { label: "GitHub" },
      { label: "GitLab" },
      { label: "Vercel" },
      { label: "Agile/Scrum" },
      { label: "Jira" },
    ],
  },
  {
    category: "Design Tools",
    skills: [
      { label: "Figma" },
      { label: "Canva" },
      { label: "Adobe Photoshop" },
      { label: "Adobe Illustrator" },
      { label: "InVision Design" },
    ],
  },
];

export default skillCategories;
