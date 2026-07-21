import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuMapPin } from "react-icons/lu";
import Typewriter, { type Options } from "typewriter-effect";
import Middot from "../Middot";
import IconLink from "../IconLink";

const Hero = () => {
  const twConfig: Options = {
    strings: [
      "I build websites",
      "I design solutions",
      "And I\'m open to work!",
    ],
    autoStart: true,
    loop: true,
    cursor: "_",
  };

  return (
    <Container
      alignContent="center"
      height={{ base: "92dvh", md: "70dvh" }}
      px={0}
    >
      <Flex>
        <VStack align={{ base: "center", md: "flex-start" }} gap={8}>
          <Heading fontWeight="bold" size={{ base: "5xl", md: "6xl" }}>
            Hi! I'm Daniel
          </Heading>
          <Typewriter options={twConfig} />
          <Text textAlign={{ base: "center", md: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque turpis mi, eu vehicula justo efficitur sed. Nunc et
            pors sodales volutpat.
          </Text>
          <ButtonGroup colorPalette="blue">
            <Button>View my Work</Button>
            <Button variant="outline">Download CV</Button>
          </ButtonGroup>
          <HStack color="fg.muted">
            <LuMapPin /> Manila, Philippines
            <Middot />
            <ButtonGroup gap={3}>
              <IconLink
                icon={LuGithub}
                href="https://github.com/danielflachica"
                target="_blank"
              />
              <IconLink
                icon={LuLinkedin}
                href="https://www.linkedin.com/in/danielflachica"
                target="_blank"
              />
            </ButtonGroup>
          </HStack>
        </VStack>
        <Box hideBelow="md" width="50%"></Box>
      </Flex>
    </Container>
  );
};

export default Hero;
