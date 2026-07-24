import { HStack, Text } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
  label?: string;
  size?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  tooltip?: string;
}

const IconLink = ({
  icon: IconComponent,
  href,
  label,
  size = "16px",
  target = "_self",
  tooltip,
}: Props) => {
  return (
    <Tooltip content={tooltip} disabled={!tooltip || tooltip === ""} showArrow>
      <a href={href} target={target}>
        <HStack>
          <IconComponent aria-hidden="true" size={size} />
          {label && (
            <Text textTransform="capitalize" fontSize={size}>
              {label}
            </Text>
          )}
        </HStack>
      </a>
    </Tooltip>
  );
};

export default IconLink;
