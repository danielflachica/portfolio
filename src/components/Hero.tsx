import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
import Typewriter, { type Options } from "typewriter-effect";

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
    <Container alignContent="center" bg="bg.emphasized" height="80dvh">
      <Flex px={{ base: 2, md: 10 }}>
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
            <Button>Get in Touch with me</Button>
            <Button variant="outline">View my Work</Button>
          </ButtonGroup>
        </VStack>
        <Box hideBelow="md" width="50%"></Box>
      </Flex>
    </Container>
  );
};

export default Hero;
