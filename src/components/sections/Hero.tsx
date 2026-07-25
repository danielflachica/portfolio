import {
  Box,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  Button,
  Flex,
  HStack,
  Link,
  type FlexProps,
} from "@chakra-ui/react";
import { FaSquareGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import Typewriter, { type Options } from "typewriter-effect";
import Middot from "../Middot";
import IconLink from "../IconLink";
import Me from "@/data/about";
import Links from "@/data/links";

const Hero = ({ ...flexProps }: FlexProps) => {
  const twConfig: Options = {
    strings: Me.taglines,
    autoStart: true,
    loop: true,
    cursor: "_",
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="start"
      w="full"
      pos="fixed"
      zIndex="0"
      {...flexProps}
    >
      <Flex flex="1" px={{ base: 5, md: 20, xl: 80 }} zIndex="0">
        <VStack
          align={{ base: "center", md: "flex-start" }}
          justifyContent="center"
          flex="1"
          gap={8}
        >
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
            gap={3}
          >
            <Link href="#projects" _hover={{ textDecoration: "none" }}>
              <Button>View my Work</Button>
            </Link>
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
        <Box hideBelow="md" width="30%"></Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
