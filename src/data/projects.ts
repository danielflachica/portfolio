import type { Project } from "@/types/Project";

const projects: Project[] = [
  {
    name: "Sample Project for my web developer portfolio",
    description: "Lorem ipsum blah blah blah",
    photo:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    name: "Sample Project 2",
    description: "Lorem ipsum blah blah blah blah blah blah",
    photo:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    link: "#",
    start: "2024",
    end: "",
    skills: [
      {
        label: "PHP",
      },
      {
        label: "Bootstrap",
      },
      {
        label: "MySQL",
      },
    ],
  },
];

export default projects;
