import type { Project } from "@/types/Project";
import { Card, Flex, Heading, Image, Link, Text, Wrap } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { LuExternalLink } from "react-icons/lu";
import defaultPhoto from "@/assets/projects/project-default-unsplash.jpg";
import SkillTag from "../SkillTag";
import DateRange from "../DateRange";

interface Props {
  project: Project;
}

const ProjectCard = ({
  project: { name, description, photo, link, start, end, skills },
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
              <Tooltip
                content="Visit Project"
                positioning={{ placement: "left" }}
                showArrow
              >
                <Link href={link} target="_blank" mt="0.3em" flexShrink={0}>
                  <LuExternalLink />
                </Link>
              </Tooltip>
            )}
          </Flex>
        </Card.Title>
        <Card.Description>
          {start && end && (
            <Text color="fg" mb={2}>
              <DateRange start={start} end={end} />
            </Text>
          )}
          <Text>{description}</Text>
        </Card.Description>
        {skills && (
          <Wrap rowGap={2} columnGap={2} mt={4}>
            {skills.map((skill) => (
              <SkillTag
                key={skill.label}
                skill={skill}
                colorPalette="blue"
                size="md"
              />
            ))}
          </Wrap>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;
