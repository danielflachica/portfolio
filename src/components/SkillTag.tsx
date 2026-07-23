import type { Skill } from "@/types/Skill";
import { Badge, Image, Text } from "@chakra-ui/react";

interface Props {
  skill: Skill;
}

const SkillTag = ({ skill: { label, logo } }: Props) => {
  return (
    <Badge size="lg" variant="surface">
      {logo && <Image src={logo} height="16px" width="16px" mr={1} />}
      <Text>{label}</Text>
    </Badge>
  );
};

export default SkillTag;
