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

const Hero = () => {
  return (
    <Container alignContent="center" bg="bg.emphasized" height="80dvh">
      <Flex px={{ base: 2, md: 10 }}>
        <VStack align={{ base: "center", md: "flex-start" }} gap={8}>
          <Heading size={{ base: "5xl", md: "6xl" }}>Hi! I'm Daniel</Heading>
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
