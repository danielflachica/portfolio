import { Box, Heading, HStack } from "@chakra-ui/react";
import { LuGlobe } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";

const Header = () => {
  return (
    <HStack justifyContent="space-between" p={0}>
      <Box px={2}>
        <LuGlobe />
      </Box>
      <Heading fontWeight="medium" size="sm">
        Daniel Lachica
      </Heading>
      <ColorModeButton size="xs" borderRadius={0} />
    </HStack>
  );
};

export default Header;
