import type { Skill } from "./Skill";

export interface Project {
  name: string;
  description: string;
  photo?: string;
  link?: string;
  start?: string;
  end?: string;
  skills?: Skill[];
}
