import { HStack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
  label?: string;
  size?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const IconLink = ({
  icon: IconComponent,
  href,
  label,
  size = "16px",
  target = "_self",
}: Props) => {
  return (
    <a href={href} target={target}>
      <HStack>
        <IconComponent aria-hidden="true" fontSize={size} />
        {label && (
          <Text textTransform="capitalize" fontSize={size}>
            {label}
          </Text>
        )}
      </HStack>
    </a>
  );
};

export default IconLink;
