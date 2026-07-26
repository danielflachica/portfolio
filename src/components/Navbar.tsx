import { Box, HStack, Link, type BoxProps } from "@chakra-ui/react";
import Links from "@/data/links";
import useActiveSection from "@/hooks/useActiveSection";

const Navbar = ({ ...boxProps }: BoxProps) => {
  const activeID = useActiveSection(Links.nav);

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
        {Links.nav.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            fontSize="18px"
            color={id === activeID ? "fg" : "fg.muted"}
            fontWeight={id === activeID ? "black" : "normal"}
            textTransform="capitalize"
            transition="font-weight 0.2s ease-in-out"
          >
            {id}
          </Link>
        ))}
      </HStack>
    </Box>
  );
};

export default Navbar;
