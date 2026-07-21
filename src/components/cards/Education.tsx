import type { Education } from "@/types/Education";
import { Card, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import DateRange from "../DateRange";

const EducationCard = ({ school, degree, award, start, end }: Education) => {
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
              <DateRange start={start} end={end} />
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
          >
            <DateRange start={start} end={end} />
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
