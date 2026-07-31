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
    <Card.Root pos="relative" overflow="hidden" color="white" minH="360px">
      {/* Background image layer */}
      <Image
        pos="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
        src={photo ?? defaultPhoto}
        alt={name}
        aria-hidden="true"
      />

      {/* Dark gradient for text legibility */}
      <Box
        pos="absolute"
        inset={0}
        bgGradient="to-t"
        gradientFrom="blackAlpha.700"
        gradientTo="blackAlpha.200"
      />

      {/* Actual content, sits above both layers */}
      <Card.Body
        pos="absolute"
        bottom={0}
        zIndex={1}
        h="auto"
        mt="auto"
        className="bg-glass fade"
      >
        <Card.Title mb="2">
          <Flex justifyContent="space-between" alignItems="flex-start" gap={4}>
            <Heading size="lg">{name}</Heading>
          </Flex>
        </Card.Title>
        <Card.Description as="div" color="whiteAlpha.700">
          <Text>{description}</Text>
        </Card.Description>
        {skills && (
          <Wrap rowGap={2} columnGap={2} mt={4}>
            {skills.map((skill) => (
              <SkillTag
                key={skill.label}
                skill={skill}
                colorPalette="primary"
                size="md"
              />
            ))}
          </Wrap>
        )}
      </Card.Body>

      {start && (
        <Badge
          pos="absolute"
          top="2"
          insetStart="2"
          zIndex={1}
          variant="surface"
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
        <Box pos="absolute" top="2" insetEnd="2" zIndex={1}>
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
    </Card.Root>
  );
};

export default ProjectCard;
