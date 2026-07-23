import type { Project } from "@/types/Project";

const projects: Project[] = [
  {
    name: "Sample Project for my web developer portfolio",
    description: "Lorem ipsum blah blah blah",
    // photo: "",
    link: "#",
    skills: [
      {
        label: "PHP",
      },
      {
        label: "Bootstrap",
      },
      {
        label: "Vue.js",
      },
      {
        label: "React",
      },
      {
        label: "Vercel",
      },
      {
        label: "Supabase",
      },
    ],
  },
  {
    name: "Sample Project ",
    description: "Lorem ipsum blah blah blah blah blah blah blah blah blah",
    // photo: "",
    link: "#",
    start: "2019",
    end: "2020",
    skills: [
      {
        label: "PHP",
      },
      {
        label: "Bootstrap",
      },
      {
        label: "Vercel",
      },
      {
        label: "Supabase",
      },
    ],
  },
  {
    name: "Another Sample Project",
    description: "The quick brown fox jumps over the lazy brown dog",
  },
];

export default projects;
