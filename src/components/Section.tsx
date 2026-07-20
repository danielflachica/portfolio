import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props extends BoxProps {
  children: ReactNode;
}

const Section = ({ children, ...boxProps }: Props) => {
  return (
    <Box px={{ base: 5, md: 20, xl: 60 }} {...boxProps}>
      {children}
    </Box>
  );
};

export default Section;
