import type { Skill } from "@/types/Skill";
import { Badge, Image, Text, type BadgeProps } from "@chakra-ui/react";

interface Props extends BadgeProps {
  skill: Skill;
}

const SkillTag = ({ skill: { label, logo }, ...badgeProps }: Props) => {
  return (
    <Badge {...badgeProps}>
      {logo && (
        <Image
          src={logo}
          loading="lazy"
          height="16px"
          width="16px"
          objectFit="cover"
          mr={1}
        />
      )}
      <Text>{label}</Text>
    </Badge>
  );
};

export default SkillTag;
