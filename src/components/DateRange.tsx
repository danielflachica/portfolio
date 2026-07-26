import { Flex, Text } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";

interface Props {
  start: string;
  end?: string;
}

const DateRange = ({ start, end }: Props) => {
  const showEnd = end && start !== end;

  return (
    <Flex as="span" display="inline-flex" alignItems="center" gap={1}>
      <Text as="span">{start}</Text>
      {showEnd && <LuChevronRight />}
      {showEnd && <Text as="span">{end}</Text>}
    </Flex>
  );
};

export default DateRange;
