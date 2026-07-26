import type { Project } from "@/types/Project";
import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Wrap,
} from "@chakra-ui/react";
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
    <Card.Root flexDirection="column" overflow="hidden">
      <Box pos="relative">
        <Image
          objectFit="cover"
          loading="lazy"
          width="full"
          src={photo ?? defaultPhoto}
          alt={name}
        />
        {start && (
          <Badge
            pos="absolute"
            top="2"
            insetStart="2"
            bg="bg.emphasized"
            size="sm"
            px={2}
            py={1}
          >
            <Text color="fg">
              <DateRange start={start} end={end} />
            </Text>
          </Badge>
        )}
        {link && (
          <Box pos="absolute" top="2" insetEnd="2">
            <Tooltip
              content="Visit Project"
              positioning={{ placement: "left" }}
              showArrow
            >
              <Link href={link} target="_blank">
                <LuExternalLink size="24px" />
              </Link>
            </Tooltip>
          </Box>
        )}
      </Box>
      <Card.Body>
        <Card.Title mb="2">
          <Flex justifyContent="space-between" alignItems="flex-start" gap={4}>
            <Heading size="lg">{name}</Heading>
          </Flex>
        </Card.Title>
        <Card.Description as="div">
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
