import {
  Card,
  Heading,
  HStack,
  List,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import type { WorkExperience } from "@/types/WorkExperience";
import DateRange from "../DateRange";
import SkillTag from "../SkillTag";

interface Props {
  work: WorkExperience;
}

const WorkCard = ({
  work: { role, company, start, end, summary, details, skills },
}: Props) => {
  return (
    <Card.Root>
      <Card.Header>
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Stack>
            <Heading
              size={{ base: "xl", md: "2xl" }}
              textTransform="capitalize"
            >
              {role}
            </Heading>
            <Heading
              hideBelow="md"
              size="lg"
              color="fg"
              textTransform="capitalize"
            >
              {company}
            </Heading>
            {/* Mobile */}
            <Text
              hideFrom="md"
              color="fg"
              fontSize="sm"
              textTransform="capitalize"
              fontStyle="italic"
            >
              {company} (<DateRange start={start} end={end} />)
            </Text>
            {/* End Mobile */}
          </Stack>
          {/* Desktop */}
          <Text
            as="div"
            hideBelow="md"
            fontSize="md"
            fontWeight="bold"
            color="fg"
            textTransform="capitalize"
            wordSpacing={4}
          >
            <DateRange start={start} end={end} />
          </Text>
          {/* End Desktop */}
        </HStack>
      </Card.Header>
      <Card.Body pt={4}>
        {/* Work Summary */}
        <Text color="fg.muted">{summary}</Text>
        {/* Details in Bullets */}
        {details && (
          <List.Root
            as="ul"
            gap={2}
            listStylePosition="inside"
            listStyleType="circle"
            mt={4}
          >
            {details.map((item) => (
              <List.Item
                key={item.replaceAll(" ", "-")}
                color="fg.muted"
                fontSize="sm"
              >
                {item}
              </List.Item>
            ))}
          </List.Root>
        )}
        {/* Skill Tags */}
        {skills && (
          <Wrap mt={4} rowGap={2} columnGap={2}>
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

export default WorkCard;
