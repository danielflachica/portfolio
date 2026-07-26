import { useEffect, useState } from "react";
import { SCROLL_ACTIVE_SECTION_BOUNDARY } from "@/constants/layout";

const useActiveSection = (sectionIDs: string[]): string => {
  const [activeID, setActiveID] = useState<string>(sectionIDs[0] ?? "");

  useEffect(() => {
    const sections = sectionIDs
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    let ticking = false;

    const updateActiveSection = () => {
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;

      const atBottom = window.scrollY >= maxScrollY - 1;

      if (atBottom) {
        setActiveID(sections[sections.length - 1].id);
        ticking = false;
        return;
      }

      const scrollPosition =
        window.scrollY + SCROLL_ACTIVE_SECTION_BOUNDARY + 1;

      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }

      setActiveID(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection(); // run once on mount for correct initial state
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIDs]);

  return activeID;
};

export default useActiveSection;
