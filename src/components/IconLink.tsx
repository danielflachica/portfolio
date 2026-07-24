import { HStack, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
  label?: string;
  color?: string;
  iconSize?: string;
  fontSize?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  tooltip?: string;
}

const IconLink = ({
  icon: IconComponent,
  href,
  label,
  color = "fg",
  iconSize = "16px",
  fontSize = "16px",
  target = "_self",
  tooltip,
}: Props) => {
  return (
    <Tooltip content={tooltip} disabled={!tooltip || tooltip === ""} showArrow>
      <a href={href} target={target}>
        <HStack>
          <IconComponent aria-hidden="true" size={iconSize} />
          {label && (
            <Text color={color} fontSize={fontSize}>
              {label}
            </Text>
          )}
        </HStack>
      </a>
    </Tooltip>
  );
};

export default IconLink;
