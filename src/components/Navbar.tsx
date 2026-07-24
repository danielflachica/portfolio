import { Box, HStack } from "@chakra-ui/react";
import { LuHash } from "react-icons/lu";
import IconLink from "./IconLink";
import Links from "@/data/links";

const Navbar = () => {
  return (
    <Box
      as="header"
      className="bg-glass"
      pos="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      boxShadow="sm"
    >
      <HStack gap={12} hideBelow="md" justifyContent="center" p={10}>
        {Links.nav.map((link) => (
          <IconLink
            key={link}
            icon={LuHash}
            href={`#${link}`}
            iconSize="18px"
            fontSize="18px"
            label={`${link[0].toUpperCase()}${link.slice(1)}`}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default Navbar;
