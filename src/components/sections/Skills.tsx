import { Card, Heading, SimpleGrid, Wrap } from "@chakra-ui/react";
import type { SkillCategory } from "@/types/SkillCategory";
import skillCategories from "@/data/skills";
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
              {skills.map((skill) => (
                <SkillTag
                  key={skill.label}
                  skill={skill}
                  size="lg"
                  variant="surface"
                />
              ))}
            </Wrap>
          </Card.Body>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
};

export default Skills;
