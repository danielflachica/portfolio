import {
  Circle,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ContactForm from "../ContactForm";
import IconLink from "../IconLink";
import { MdEmail } from "react-icons/md";
import Me from "@/data/about";
import Links from "@/data/links";

import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gapX={{ base: 6, lg: 8 }}
      gapY={{ base: 6, md: 0 }}
    >
      <VStack align="flex-start" gap={{ base: 4, md: 6 }} maxW="lg" mx="auto">
        <Heading size={{ base: "xl", md: "2xl" }} fontWeight="bold">
          Let's build something great!
        </Heading>

        <Text color="fg.muted">
          Whether you have a project in mind, a role you think I'd be a good fit
          for, or just want to say hi, I'd love to hear from you.
        </Text>

        <HStack gap={2}>
          <Circle bg="green.500" size="10px" />
          <Text fontSize="sm" color="fg.muted">
            Available for full-time &amp; freelance roles
          </Text>
        </HStack>

        <VStack align="flex-start" gap={3}>
          <IconLink
            icon={MdEmail}
            href={`mailto:${Me.email}`}
            label={Me.email}
            iconSize="17px"
            fontSize="14px"
            target="_self"
          />
          <IconLink
            icon={FaSquareGithub}
            href={Links.github.profile}
            label={Links.github.profile.slice(8)}
            fontSize="14px"
            target="_blank"
          />
          <IconLink
            icon={FaLinkedin}
            href={Links.linkedin}
            label={Links.linkedin.slice(12)}
            fontSize="14px"
            target="_blank"
          />
        </VStack>

        <Text fontSize="sm" color="fg.muted">
          I'll respond as soon as I can, usually within 12 hours.
        </Text>
      </VStack>

      <ContactForm />
    </SimpleGrid>
  );
};

export default Contact;
