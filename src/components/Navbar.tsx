import { Box, HStack, type BoxProps } from "@chakra-ui/react";
import { LuHash } from "react-icons/lu";
import IconLink from "./IconLink";
import Links from "@/data/links";

const Navbar = ({ ...boxProps }: BoxProps) => {
  return (
    <Box
      as="header"
      alignContent="center"
      boxShadow="sm"
      className="bg-glass"
      pos="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      {...boxProps}
    >
      <HStack gap={12} hideBelow="md" justifyContent="center">
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
