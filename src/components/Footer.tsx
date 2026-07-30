import { CodeBlock, HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { shikiAdapter } from "@/lib/shikiAdapter";
import Me from "@/data/about";
import Links from "@/data/links";
import Middot from "./Middot";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      color="fg.subtle"
      bg="bg"
      justifyContent="center"
      p={4}
      pos="relative"
      zIndex="1"
    >
      <Text fontSize="md">&copy; {new Date().getFullYear()}</Text>
      <a href={Links.github.project} target="_blank">
        <CodeBlock.AdapterProvider value={shikiAdapter}>
          <CodeBlock.Root
            code={`<${Me.username} />`}
            bg="none"
            border={0}
            borderRadius={0}
            language="javascript"
            meta={{ colorScheme: colorMode }}
          >
            <CodeBlock.Content borderRadius={0}>
              <CodeBlock.Code>
                <CodeBlock.CodeText p={0} />
              </CodeBlock.Code>
            </CodeBlock.Content>
          </CodeBlock.Root>
        </CodeBlock.AdapterProvider>
      </a>
      <Middot />
      <Text fontSize="md">v1</Text>
    </HStack>
  );
};

export default Footer;
