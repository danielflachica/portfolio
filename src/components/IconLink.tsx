import { HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  href: string;
  label?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const IconLink = ({
  icon: IconComponent,
  href,
  label,
  target = "_blank",
}: Props) => {
  return (
    <a href={href} target={target}>
      <HStack>
        <IconComponent aria-hidden="true" /> {label && <span>{label}</span>}
      </HStack>
    </a>
  );
};

export default IconLink;
