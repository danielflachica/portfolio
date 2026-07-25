import { Box, Heading, HStack } from "@chakra-ui/react";
import { LuGlobe } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";
import Me from "@/data/about";

const Topbar = () => {
  return (
    <HStack
      bg="bg"
      boxShadow={{ base: "sm", md: "none" }}
      alignItems="center"
      justifyContent="space-between"
      p={0}
      w="full"
      pos="fixed"
      zIndex="2"
    >
      <Box px={2}>
        <LuGlobe />
      </Box>
      <Heading fontWeight="medium" size="sm">
        {Me.name}
      </Heading>
      <ColorModeButton size="xs" borderRadius={0} />
    </HStack>
  );
};

export default Topbar;
