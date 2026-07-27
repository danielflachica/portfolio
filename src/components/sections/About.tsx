import {
  Avatar,
  Box,
  Card,
  Circle,
  Code,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  CodeBlock,
} from "@chakra-ui/react";
import { shikiAdapter } from "@/lib/shikiAdapter";
import { useColorMode } from "@/components/ui/color-mode";
import Me from "@/data/about";
import ProfilePic from "../../assets/profile_pic.jpg";

const About = () => {
  const { email, username, location, taglines, ...aboutMe } = Me; // Exclude properties from the "aboutMe" code string
  const { colorMode } = useColorMode();
  const aboutMeCode =
    `const me = ` +
    JSON.stringify(aboutMe, null, 2).replace(/"([^"]+)":/g, "$1:");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spaceX={{ base: 0, md: 12 }}
      spaceY={{ base: 6, md: 0 }}
    >
      <Box>
        {/* Profile Card */}
        <HStack className="animate-on-scroll" gap={4}>
          <Avatar.Root>
            <Avatar.Fallback name={username} />
            <Avatar.Image src={ProfilePic} />
          </Avatar.Root>
          <Stack gap={0}>
            <Text fontWeight="medium">{Me.name}</Text>
            <Text color="fg.muted" textStyle="sm">
              {email}
            </Text>
          </Stack>
        </HStack>

        {/* Description */}
        <Stack gap={4} mt={{ base: 3, md: 6 }}>
          <Text className="animate-on-scroll">
            I'm a software developer based in {location}. I build websites,
            design solutions, and am open to collaboration.
          </Text>
          <Text className="animate-on-scroll">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            delectus accusantium. Recusandae, veniam sit necessitatibus, laborum
            illum dolorum obcaecati velit aspernatur non pariatur.
          </Text>
          <Text className="animate-on-scroll">
            Veniam sit necessitatibus, oluptas quidem delectus. Neque tempore
            nostrum exercitationem.
          </Text>
        </Stack>
      </Box>

      <Box>
        {/* Overview */}
        <Card.Root className="animate-on-scroll">
          <Card.Body>
            <CodeBlock.AdapterProvider value={shikiAdapter}>
              <CodeBlock.Root
                code={aboutMeCode}
                bg="none"
                border={0}
                borderRadius={0}
                language="javascript"
                meta={{ colorScheme: colorMode }}
              >
                <CodeBlock.Header m={0} p={0} minH={0}>
                  <HStack>
                    <Circle bg="red.500" size="10px" />
                    <Circle bg="green.500" size="10px" />
                    <Circle bg="bg.emphasized" size="10px" />
                    <CodeBlock.Title>
                      <Code
                        color="fg.muted"
                        fontSize="small"
                        ml={2}
                        variant="subtle"
                      >
                        ~/about.ts
                      </Code>
                    </CodeBlock.Title>
                  </HStack>
                </CodeBlock.Header>
                <CodeBlock.Content mt={4}>
                  <CodeBlock.Code>
                    <CodeBlock.CodeText p={0} />
                  </CodeBlock.Code>
                </CodeBlock.Content>
              </CodeBlock.Root>
            </CodeBlock.AdapterProvider>
          </Card.Body>
        </Card.Root>
      </Box>
    </SimpleGrid>
  );
};

export default About;
