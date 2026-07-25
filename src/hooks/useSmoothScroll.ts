import { SCROLL_OFFSET } from "@/constants/layout";
import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const section = document.querySelector(href);
      if (!section) return;

      const sectionPos = section.getBoundingClientRect().top;
      const offsetPos = sectionPos + window.pageYOffset - SCROLL_OFFSET;

      e.preventDefault();
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth",
      });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);
};

export default useSmoothScroll;
