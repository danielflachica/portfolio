import { Heading, HStack } from "@chakra-ui/react";
import { LuGlobe } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";

const Header = () => {
  return (
    <HStack justifyContent="space-between" pl={2} pr={0} py={0}>
      <LuGlobe />
      <Heading size="sm">Daniel Lachica</Heading>
      <ColorModeButton size="xs" borderRadius={0} />
    </HStack>
  );
};

export default Header;
