import type { Education } from "@/types/Education";
import { Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const EducationCard = ({ school, degree, award, start, end }: Education) => {
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
              {school}
            </Heading>
            {/* Mobile */}
            <Text
              hideFrom="md"
              color="fg"
              fontSize="sm"
              textTransform="capitalize"
              fontStyle="italic"
            >
              {duration}
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
      <Card.Body pt={4} gap={4}>
        <Text color="fg">{degree}</Text>
        <Text color="fg.muted" fontStyle="italic">
          {award}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default EducationCard;
