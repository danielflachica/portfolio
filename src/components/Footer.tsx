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
      p={2}
      pos="relative"
      zIndex="1"
    >
      <Text fontSize="sm">&copy; {new Date().getFullYear()}</Text>
      <a href={Links.github.project} target="_blank">
        <Text fontSize="sm">&lt;{Me.username}&nbsp;/&gt;</Text>
        <CodeBlock.AdapterProvider value={shikiAdapter}>
          <CodeBlock.Root
            code={`<${Me.username} />`}
            bg="none"
            border={0}
            borderRadius={0}
            language="javascript"
            meta={{ colorScheme: colorMode }}
          >
            <CodeBlock.Content>
              <CodeBlock.Code>
                <CodeBlock.CodeText p={0} />
              </CodeBlock.Code>
            </CodeBlock.Content>
          </CodeBlock.Root>
        </CodeBlock.AdapterProvider>
      </a>
      <Middot />
      <Text fontSize="sm">v1</Text>
    </HStack>
  );
};

export default Footer;
