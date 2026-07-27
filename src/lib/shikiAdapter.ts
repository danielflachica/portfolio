import { createShikiAdapter } from "@chakra-ui/react";
import type { HighlighterGeneric } from "shiki";

export const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["javascript"],
      themes: ["github-light", "monokai"],
    });
  },
  theme: {
    light: "github-light",
    dark: "monokai",
  },
});
