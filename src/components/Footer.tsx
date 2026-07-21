import { HStack, Text } from "@chakra-ui/react";
import Me from "@/data/about";
import Links from "@/data/links";
import Middot from "./Middot";

const Footer = () => (
  <HStack color="fg.subtle" justifyContent="center" p={2}>
    <Text fontSize="sm">&copy; {new Date().getFullYear()}</Text>
    <a href={Links.github.project} target="_blank">
      <Text fontSize="sm">&lt;{Me.username}&nbsp;/&gt;</Text>
    </a>
    <Middot />
    <Text fontSize="sm">v1</Text>
  </HStack>
);

export default Footer;
