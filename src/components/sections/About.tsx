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
import profilePic from "@/assets/profile_pic.jpeg";

const About = () => {
  const aboutMeCode = `const me = {
  name: "Daniel Lachica",
  alias: "Dan",
  role: "Full-Stack Web Developer",
  focus: ["Web", "Systems Design", "UI"],
  coffee: true,
}`;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spaceX={{ base: 0, md: 12 }}
      spaceY={{ base: 8, md: 0 }}
    >
      <Box>
        {/* Description */}
        <Stack gap={4}>
          <Text>
            I am a software developer based in Manila, Philippines. I build
            websites, design solutions, and am open to collaboration.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            delectus accusantium. Recusandae, veniam sit necessitatibus, laborum
            illum dolorum obcaecati velit aspernatur non pariatur voluptas
            quidem delectus. Neque tempore nostrum exercitationem!
          </Text>
          <Text>
            Veniam sit necessitatibus, laborum illum dolorum obcaecati velit
            aspernatur non pariatur voluptas quidem delectus. Neque tempore
            nostrum exercitationem.
          </Text>
        </Stack>
      </Box>

      <Box>
        {/* Profile Card */}
        <HStack gap={4}>
          <Avatar.Root>
            <Avatar.Fallback name="Daniel Lachica" />
            <Avatar.Image src={profilePic} />
          </Avatar.Root>
          <Stack gap={0}>
            <Text fontWeight="medium">Daniel Lachica</Text>
            <Text color="fg.muted" textStyle="sm">
              daniel.lachica82@gmail.com
            </Text>
          </Stack>
        </HStack>

        {/* Overview */}
        <Card.Root mt={8} mb={5}>
          <Card.Body>
            <HStack>
              <Circle bg="red.500" size="10px" />
              <Circle bg="green.500" size="10px" />
              <Circle bg="bg.emphasized" size="10px" />
              {/* <Text ml={2} color="fg.muted">
                ~/about.ts
              </Text> */}
              <Code bg="none" color="fg.muted" ml={2} p={0}>
                ~/about.ts
              </Code>
            </HStack>
            <Box mt={2} overflowX="auto">
              <Code bg="none" color="fg.muted" p={0}>
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
