import type { Skill } from "@/types/Skill";
import { Badge, Image, Text } from "@chakra-ui/react";

const SkillTag = ({ label, logo }: Skill) => {
  return (
    <Badge size="lg" variant="surface">
      {logo && <Image src={logo} height="18px" />}
      <Text textTransform="capitalize">{label}</Text>
    </Badge>
  );
};

export default SkillTag;
