import projects from "@/data/projects";
import ProjectCard from "../cards/Project";
import {
  Box,
  Carousel,
  HStack,
  IconButton,
  Span,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Projects = () => {
  const projectsPerPage = useBreakpointValue({ base: 1, md: 3 }) ?? 1;

  return (
    <Box overflow="hidden" w={{ base: "sm", md: "full" }} mx="auto" p={0}>
      <Carousel.Root
        slideCount={projects.length}
        slidesPerPage={projectsPerPage}
        gap={{ base: 2, md: 4 }}
      >
        <HStack justify="space-between">
          <Span fontWeight="medium">Here are a few projects I've shipped</Span>
          <HStack>
            <Carousel.PrevTrigger asChild>
              <IconButton size="xs" variant="subtle">
                <LuChevronLeft />
              </IconButton>
            </Carousel.PrevTrigger>
            <Carousel.NextTrigger asChild>
              <IconButton size="xs" variant="subtle">
                <LuChevronRight />
              </IconButton>
            </Carousel.NextTrigger>
          </HStack>
        </HStack>
        <Carousel.ItemGroup>
          {projects.map((project, index) => (
            <Carousel.Item key={project.name} index={index}>
              <ProjectCard key={project.name} project={project} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.Root>
    </Box>
  );
};

export default Projects;
