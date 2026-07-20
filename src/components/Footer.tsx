import { HStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <HStack color="fg.subtle" justifyContent="center" p={2}>
      <Text>&copy; {new Date().getFullYear()}</Text>
      <a href="https://github.com/danielflachica/portfolio" target="_blank">
        danielflachica
      </a>
      <Text>&middot;</Text>
      <Text>v1</Text>
    </HStack>
  );
};

export default Footer;
