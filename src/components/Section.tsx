import { shikiAdapter } from "@/lib/shikiAdapter";
import {
  Box,
  CodeBlock,
  Flex,
  Heading,
  Separator,
  Text,
  type BoxProps,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import type { ReactNode } from "react";

interface Props extends BoxProps {
  children: ReactNode;
  displayHeader?: boolean;
  index: number;
  name: string;
  title?: string;
}

const Section = ({
  children,
  displayHeader = true,
  index,
  name,
  title,
  ...boxProps
}: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg="bg"
      id={name}
      px={{ base: 5, md: 20, xl: 80 }}
      py={{ base: 5, md: 20 }}
      pos="relative"
      zIndex="1"
      {...boxProps}
    >
      {displayHeader && (
        <Flex
          direction="column"
          gap={{ base: 3, md: 4 }}
          mb={{ base: 4, md: 8 }}
        >
          <Text
            className="animate-on-scroll"
            fontSize="sm"
            color="fg.muted"
            wordSpacing={10}
          >
            {index.toString().padStart(2, "0")} / {name}
          </Text>
          <Box className="animate-on-scroll">
            <CodeBlock.AdapterProvider value={shikiAdapter}>
              <CodeBlock.Root
                code={index.toString().padStart(2, "0") + ` / ${name}`}
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
          </Box>
          <Heading
            className="animate-on-scroll"
            size={{ base: "3xl", md: "4xl" }}
            fontWeight="black"
            textTransform="capitalize"
          >
            {title ? title : name}
          </Heading>
          <Separator className="animate-on-scroll" />
        </Flex>
      )}
      {children}
    </Box>
  );
};

export default Section;
