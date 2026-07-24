import { SimpleGrid } from "@chakra-ui/react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <ContactForm />
    </SimpleGrid>
  );
};

export default Contact;
