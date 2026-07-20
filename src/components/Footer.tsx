import { HStack, Text } from "@chakra-ui/react";
import { LuCopyright } from "react-icons/lu";
import Middot from "./Middot";

const Footer = () => (
  <HStack color="fg.subtle" justifyContent="center" p={2}>
    <LuCopyright />
    <Text>{new Date().getFullYear()}</Text>
    <a href="https://github.com/danielflachica/portfolio" target="_blank">
      danielflachica
    </a>
    <Middot />
    <Text>v1</Text>
  </HStack>
);

export default Footer;
