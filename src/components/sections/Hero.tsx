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
import { FaSquareGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import Typewriter, { type Options } from "typewriter-effect";
import Middot from "../Middot";
import IconLink from "../IconLink";
import Me from "@/data/about";
import Links from "@/data/links";

const Hero = () => {
  const twConfig: Options = {
    strings: Me.taglines,
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
          <Heading fontWeight="black" size={{ base: "5xl", md: "6xl" }}>
            Hi! I'm {Me.name.split(" ")[0]}
          </Heading>
          <Typewriter options={twConfig} />
          <Text textAlign={{ base: "center", md: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque turpis mi, eu vehicula justo efficitur sed. Nunc et
            pors sodales volutpat.
          </Text>
          <ButtonGroup
            colorPalette="blue"
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Button>View my Work</Button>
            <Button variant="outline">Download CV</Button>
          </ButtonGroup>
          <HStack color="fg.muted" gap={3}>
            <Text display="inline-flex" alignItems="center" gap={2}>
              <FaLocationArrow /> {Me.location}
            </Text>
            <Middot />
            <ButtonGroup gap={2}>
              <IconLink
                icon={FaSquareGithub}
                href={Links.github.profile}
                iconSize="18px"
                target="_blank"
                tooltip="GitHub"
              />
              <IconLink
                icon={FaLinkedin}
                href={Links.linkedin}
                iconSize="18px"
                target="_blank"
                tooltip="LinkedIn"
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
