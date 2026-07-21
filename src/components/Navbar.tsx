import { HStack } from "@chakra-ui/react";
import { LuHash } from "react-icons/lu";
import IconLink from "./IconLink";
import Links from "@/data/links";

const Navbar = () => {
  return (
    <HStack gap={12} hideBelow="md" justifyContent="center" p={10}>
      {Links.nav.map((link) => (
        <IconLink
          key={link}
          icon={LuHash}
          href={`#${link}`}
          size="18px"
          label={link}
        />
      ))}
    </HStack>
  );
};

export default Navbar;
