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
} from "@chakra-ui/react";
import Me from "@/data/about";
import ProfilePic from "../../assets/profile_pic.jpg";

const About = () => {
  const { email, username, location, ...aboutMe } = Me; // Exclude properties from the "aboutMe" code string
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
        <HStack gap={4}>
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
          <Text>
            I am a software developer based in {location}. I build websites,
            design solutions, and am open to collaboration.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            delectus accusantium. Recusandae, veniam sit necessitatibus, laborum
            illum dolorum obcaecati velit aspernatur non pariatur.
          </Text>
          <Text>
            Veniam sit necessitatibus, oluptas quidem delectus. Neque tempore
            nostrum exercitationem.
          </Text>
        </Stack>
      </Box>

      <Box>
        {/* Overview */}
        <Card.Root>
          <Card.Body>
            <HStack>
              <Circle bg="red.500" size="10px" />
              <Circle bg="green.500" size="10px" />
              <Circle bg="bg.emphasized" size="10px" />
              <Code color="fg.muted" fontSize="small" ml={2} variant="subtle">
                ~/about.ts
              </Code>
            </HStack>
            <Box mt={2} overflowX="auto">
              <Code
                color="fg.muted"
                fontSize="small"
                p={0}
                variant="plain"
                w="100%"
              >
                <pre>{aboutMeCode}</pre>
              </Code>
            </Box>
          </Card.Body>
        </Card.Root>
      </Box>
    </SimpleGrid>
  );
};

export default About;
