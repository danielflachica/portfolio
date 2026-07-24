import { Button, Card, Field, Input, Stack, Textarea } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <form>
      <Card.Root>
        <Card.Header>
          <Card.Title>Contact Me</Card.Title>
          <Card.Description>
            Fill out the form below to send me an email
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root required>
              <Field.Label>
                Name <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="What's your name?" />
              <Field.ErrorText>This field is required</Field.ErrorText>
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input
                type="email"
                inputMode="email"
                placeholder="e.g. juandelacruz@gmail.com"
              />
              <Field.ErrorText>This field is required</Field.ErrorText>
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Subject <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="What would you like to discuss?" />
              <Field.ErrorText>This field is required</Field.ErrorText>
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Message <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                placeholder="Enter your message here"
                autoresize
                maxH="10lh"
              />
              <Field.ErrorText>This field is required</Field.ErrorText>
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer>
          <Button colorPalette="blue" mb={2} w="full" variant="solid">
            Send Message
          </Button>
        </Card.Footer>
      </Card.Root>
    </form>
  );
};

export default ContactForm;
