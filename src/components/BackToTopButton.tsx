import { IconButton, type ButtonProps } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { LuArrowUp } from "react-icons/lu";
import { useEffect, useState } from "react";
import { SCROLL_ACTIVE_SECTION_BOUNDARY } from "@/constants/layout";

interface Props extends ButtonProps {
  label?: string;
  showAfter?: number;
}

const BackToTopButton = ({
  label = "Back to Top",
  showAfter = SCROLL_ACTIVE_SECTION_BOUNDARY,
  ...buttonProps
}: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setVisible(window.scrollY > showAfter);
      ticking = false;
    };

    const handleScroll = () => {
      console.log(SCROLL_ACTIVE_SECTION_BOUNDARY);
      if (!ticking) {
        requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    updateVisibility(); // run once on mount for correct initial state
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  return (
    <Tooltip content={label} positioning={{ placement: "left" }} showArrow>
      <IconButton
        aria-label={label}
        bg="bg.panel"
        color="fg"
        _hover={{ bg: "primary.solid" }}
        _active={{ bg: "primary.solid" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        pos="fixed"
        bottom={4}
        right={4}
        zIndex="2"
        opacity={visible ? 1 : 0}
        pointerEvents={visible ? "auto" : "none"}
        transform={visible ? "translateY(0)" : "translateY(8px)"}
        transition="opacity 0.2s ease, transform 0.2s ease"
        {...buttonProps}
      >
        <LuArrowUp />
      </IconButton>
    </Tooltip>
  );
};

export default BackToTopButton;
