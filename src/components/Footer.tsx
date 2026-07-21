import { HStack, Text } from "@chakra-ui/react";
import Middot from "./Middot";

const Footer = () => (
  <HStack color="fg.subtle" justifyContent="center" p={2}>
    <Text fontSize="sm">&copy; {new Date().getFullYear()}</Text>
    <a href="https://github.com/danielflachica/portfolio" target="_blank">
      <Text fontSize="sm">&lt;danielflachica&nbsp;/&gt;</Text>
    </a>
    <Middot />
    <Text fontSize="sm">v1</Text>
  </HStack>
);

export default Footer;
