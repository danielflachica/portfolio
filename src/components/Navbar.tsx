import { Box, HStack, Link, type BoxProps } from "@chakra-ui/react";
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
          <Link
            key={link}
            href={`#${link}`}
            fontSize="18px"
            aria-current="page"
            _currentPage={{
              // color: "fg.subtle",
              fontWeight: "black",
            }}
          >{`${link[0].toUpperCase()}${link.slice(1)}`}</Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Navbar;
