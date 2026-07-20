import {
  Box,
  Flex,
  Heading,
  Separator,
  Text,
  type BoxProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props extends BoxProps {
  children: ReactNode;
  displayHeader?: boolean;
  index: number;
  name: string;
  title?: string;
}

const Section = ({
  children,
  displayHeader = true,
  index,
  name,
  title,
  ...boxProps
}: Props) => {
  return (
    <Box
      px={{ base: 5, md: 20, xl: 60 }}
      py={{ base: 5, md: 20 }}
      {...boxProps}
    >
      {displayHeader && (
        <Flex
          direction="column"
          gap={{ base: 3, md: 4 }}
          mb={{ base: 4, md: 8 }}
        >
          <Text fontSize="sm" color="fg.muted" wordSpacing={10}>
            {index.toString().padStart(2, "0")} / {name}
          </Text>
          <Heading size={{ base: "3xl", md: "4xl" }} textTransform="capitalize">
            {title ? title : name}
          </Heading>
          <Separator />
        </Flex>
      )}
      {children}
    </Box>
  );
};

export default Section;
