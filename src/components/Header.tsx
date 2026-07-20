import { Heading, HStack } from "@chakra-ui/react";
import { LuGlobe, LuMoon } from "react-icons/lu";

const Header = () => {
  return (
    <HStack justifyContent="space-between" p={2}>
      <LuGlobe />
      <Heading size="sm">Daniel Lachica</Heading>
      <LuMoon />
    </HStack>
  );
};

export default Header;
