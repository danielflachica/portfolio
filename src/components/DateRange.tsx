import { Flex, Text } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";

interface Props {
  start: string;
  end: string;
}

const DateRange = ({ start, end }: Props) => {
  return (
    <Flex as="span" display="inline-flex" alignItems="center" gap={1}>
      <Text>{start}</Text>
      <LuChevronRight />
      <Text>{end}</Text>
    </Flex>
  );
};

export default DateRange;
