import projects from "@/data/projects";
import ProjectCard from "../cards/Project";
import { Stack } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Stack gap={4}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </Stack>
  );
};

export default Projects;
