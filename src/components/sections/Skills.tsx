import { Card, Heading, SimpleGrid, Wrap } from "@chakra-ui/react";
import skillCategories, { type SkillCategory } from "@/data/skills";
import SkillTag from "../SkillTag";

const Skills = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {skillCategories.map(({ category, skills }: SkillCategory) => (
        <Card.Root key={category}>
          <Card.Header>
            <Heading
              size={{ base: "xl", md: "2xl" }}
              textTransform="capitalize"
            >
              {category}
            </Heading>
          </Card.Header>
          <Card.Body>
            <Wrap rowGap={2} columnGap={2}>
              {skills.map(({ label, logo }) => (
                <SkillTag label={label} logo={logo} />
              ))}
            </Wrap>
          </Card.Body>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};

export default Skills;
