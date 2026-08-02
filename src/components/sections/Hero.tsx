import {
  Box,
  Heading,
  VStack,
  Text,
  ButtonGroup,
  Button,
  Flex,
  HStack,
  Image,
  type FlexProps,
} from "@chakra-ui/react";
import { FaSquareGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { HERO_MOBILE_MT } from "@/constants/layout";
import Typewriter, { type Options } from "typewriter-effect";
import Middot from "../Middot";
import IconLink from "../IconLink";
import Me from "@/data/about";
import Links from "@/data/links";
import heroImg from "@/assets/hero_md.png";

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
      bg={{
        _light:
          "radial-gradient(ellipse 60% 100% at 65% 65%, {colors.surfaceTonal.a50} 0, {colors.surfaceTonal.a70} 60%, transparent 100%)",
        _dark:
          "radial-gradient(ellipse 60% 100% at 65% 65%, {colors.surfaceTonal.a10} 0, {colors.surfaceTonal.a0} 60%, transparent 100%)",
      }}
      {...flexProps}
    >
      <Flex
        flex="1"
        direction={{ base: "column", md: "row" }}
        px={{ base: 5, md: 20, xl: 80 }}
      >
        <VStack
          align={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "flex-start", md: "center" }}
          flex="1"
          mt={{ base: HERO_MOBILE_MT, md: 0 }}
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
            colorPalette="primary"
            flexDirection={{ base: "column", sm: "row" }}
            gap={3}
          >
            "
            <Button asChild>
              <a href="#projects">View my Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              borderColor="primary.a30"
              _hover={{ bg: "none", color: "fg" }}
            >
              <a href="#" download>
                Download CV
              </a>
            </Button>
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

        <Box flex="1" pos="relative">
          <Image
            src={heroImg}
            alt={Me.name}
            pos="absolute"
            bottom="0"
            right={{ base: "50%", md: 0 }}
            transform={{ base: "translateX(50%)", md: "none" }}
            height={{ base: "40dvh", md: "70dvh" }}
            zIndex="-1"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;
