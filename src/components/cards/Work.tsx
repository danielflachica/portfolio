import { Card, Heading, HStack, List, Stack, Text } from "@chakra-ui/react";
import type { WorkExperience } from "@/types/WorkExperience";

const WorkCard = ({
  role,
  company,
  start,
  end,
  summary,
  bullets,
}: WorkExperience) => {
  const duration = `${start} - ${end}`;
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
              {company} ({duration})
            </Text>
            {/* End Mobile */}
          </Stack>
          {/* Desktop */}
          <Text
            hideBelow="md"
            fontSize="md"
            fontWeight="bold"
            color="fg"
            textTransform="capitalize"
            wordSpacing={4}
          >
            {duration}
          </Text>
          {/* End Desktop */}
        </HStack>
      </Card.Header>
      <Card.Body pt={4}>
        <Text color="fg.muted">{summary}</Text>
        {bullets && (
          <List.Root
            as="ul"
            gap={2}
            listStylePosition="inside"
            listStyleType="circle"
            mt={4}
          >
            {bullets.map((item) => (
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
      </Card.Body>
    </Card.Root>
  );
};

export default WorkCard;
