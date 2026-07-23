import type { Project } from "@/types/Project";
import { Card, Flex, Heading, Image, Link, Wrap } from "@chakra-ui/react";
import defaultPhoto from "@/assets/projects/project-default-unsplash.jpg";
import SkillTag from "../SkillTag";
import { LuExternalLink } from "react-icons/lu";

interface Props {
  project: Project;
}

const ProjectCard = ({
  project: { name, description, photo, link, skills },
}: Props) => {
  return (
    <Card.Root flexDirection={{ base: "column", md: "row" }} overflow="hidden">
      <Image
        objectFit="cover"
        loading="lazy"
        width={{ base: "100%", md: "250px" }}
        src={photo ?? defaultPhoto}
        alt={name}
      />
      <Card.Body>
        <Card.Title mb="2">
          <Flex justifyContent="space-between" alignItems="flex-start" gap={4}>
            <Heading size="lg">{name}</Heading>
            {link && (
              <Link href={link} target="_blank" mt="0.3em" flexShrink={0}>
                <LuExternalLink />
              </Link>
            )}
          </Flex>
        </Card.Title>
        <Card.Description>{description}</Card.Description>
        {skills && (
          <Wrap rowGap={2} columnGap={2} mt={4}>
            {skills.map((skill) => (
              <SkillTag skill={skill} />
            ))}
          </Wrap>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;
