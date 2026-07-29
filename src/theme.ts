import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    // tokens: {
    //   colors: {
    //     brand: {
    //       "500": { value: "tomato" },
    //     },
    //   },
    // },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: { _light: "", _dark: "#11151c" } },
          subtle: { value: { _light: "", _dark: "#24282f" } },
          muted: { value: { _light: "", _dark: "#383c43" } },
          emphasized: { value: { _light: "", _dark: "#4e5258" } },
          inverted: { value: { _light: "", _dark: "#afb1b4" } },
          panel: { value: { _light: "", _dark: "#24282f" } },
          error: { value: { _light: "", _dark: "" } },
          warning: { value: { _light: "", _dark: "" } },
          success: { value: { _light: "", _dark: "" } },
          info: { value: { _light: "", _dark: "" } },
        },

        fg: {
          DEFAULT: { value: { _light: "", _dark: "" } },
          muted: { value: { _light: "", _dark: "" } },
          subtle: { value: { _light: "", _dark: "" } },
          inverted: { value: { _light: "", _dark: "" } },
          error: { value: { _light: "", _dark: "" } },
          warning: { value: { _light: "", _dark: "" } },
          success: { value: { _light: "", _dark: "" } },
          info: { value: { _light: "", _dark: "" } },
        },

        border: {
          DEFAULT: { value: { _light: "", _dark: "#383c43" } },
          muted: { value: { _light: "", _dark: "" } },
          subtle: { value: { _light: "", _dark: "" } },
          emphasized: { value: { _light: "", _dark: "" } },
          inverted: { value: { _light: "", _dark: "" } },
          panel: { value: { _light: "", _dark: "" } },
        },

        // Reusable 7-token pattern Chakra applies to every color palette
        // (gray, red, blue, brand, etc.) — copy this block per palette you
        // want to customize. You've already done this correctly for `brand`.
        blue: {
          solid: { value: "{colors.blue.500}" },
          // solid: { value: "#00A3E0" },
          contrast: { value: "{colors.blue.100}" },
          fg: { value: "{colors.blue.700}" },
          muted: { value: "{colors.blue.100}" },
          subtle: { value: "{colors.blue.50}" },
          emphasized: { value: "{colors.blue.300}" },
          focusRing: { value: "{colors.blue.500}" },
        },

        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
