import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          a0: { value: "#4322ff" },
          a10: { value: "#4d4aff" },
          a20: { value: "#5b65ff" },
          a30: { value: "#6b7bff" },
          a40: { value: "#7d90ff" },
          a50: { value: "#91a4ff" },
          a60: { value: "#a5b7ff" },
          a70: { value: "#bbc9ff" },
          a80: { value: "#d1dbff" },
          a90: { value: "#e8edff" },
        },
        accent: {
          a0: { value: "#b222ff" },
          a10: { value: "#ba49ff" },
          a20: { value: "#c264ff" },
          a30: { value: "#c97bff" },
          a40: { value: "#d18fff" },
          a50: { value: "#d9a3ff" },
          a60: { value: "#e0b6ff" },
          a70: { value: "#e8c9ff" },
          a80: { value: "#f0dbff" },
          a90: { value: "#f7edff" },
        },
        surface: {
          a0: { value: "#11151c" },
          a10: { value: "#24282f" },
          a20: { value: "#383c43" },
          a30: { value: "#4e5258" },
          a40: { value: "#65686e" },
          a50: { value: "#7d8084" },
          a60: { value: "#95989c" },
          a70: { value: "#afb1b4" },
        },
        surfaceTonal: {
          a0: { value: "#141a30" },
          a10: { value: "#272d42" },
          a20: { value: "#3b4155" },
          a30: { value: "#515769" },
          a40: { value: "#676d7d" },
          a50: { value: "#7f8391" },
          a60: { value: "#979ba7" },
          a70: { value: "#b0b3bc" },
        },
        success: {
          a0: { value: "#7dff95" },
          a10: { value: "#9dffac" },
          a20: { value: "#b8ffc1" },
        },
        warning: {
          a0: { value: "#ffbc5e" },
          a10: { value: "#ffca83" },
          a20: { value: "#ffd8a4" },
        },
        danger: {
          a0: { value: "#ff8080" },
          a10: { value: "#ff9b99" },
          a20: { value: "#ffb5b2" },
        },
        info: {
          a0: { value: "#87d1ff" },
          a10: { value: "#a1dbff" },
          a20: { value: "#b9e4ff" },
        },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.white}", _dark: "{colors.surface.a0}" },
          },
          subtle: {
            value: {
              _light: "{colors.primary.a90}",
              _dark: "{colors.surface.a10}",
            },
          },
          muted: {
            value: {
              _light: "{colors.primary.a80}",
              _dark: "{colors.surface.a20}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.primary.a70}",
              _dark: "{colors.surface.a30}",
            },
          },
          inverted: {
            value: { _light: "{colors.surface.a0}", _dark: "{colors.white}" },
          },
          panel: {
            value: { _light: "{colors.white}", _dark: "{colors.surface.a10}" },
          },
          error: {
            value: {
              _light: "{colors.danger.a20}",
              _dark: "{colors.surface.a10}",
            },
          },
          warning: {
            value: {
              _light: "{colors.warning.a20}",
              _dark: "{colors.surface.a10}",
            },
          },
          success: {
            value: {
              _light: "{colors.success.a20}",
              _dark: "{colors.surface.a10}",
            },
          },
          info: {
            value: {
              _light: "{colors.info.a20}",
              _dark: "{colors.surface.a10}",
            },
          },
        },

        fg: {
          DEFAULT: {
            value: { _light: "{colors.black}", _dark: "{colors.white}" },
          },
          muted: {
            value: {
              _light: "{colors.surface.a40}",
              _dark: "{colors.surface.a60}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.surface.a50}",
              _dark: "{colors.surface.a50}",
            },
          },
          inverted: {
            value: { _light: "{colors.white}", _dark: "{colors.black}" },
          },
          error: {
            value: {
              _light: "{colors.danger.a0}",
              _dark: "{colors.danger.a0}",
            },
          },
          warning: {
            value: {
              _light: "{colors.warning.a0}",
              _dark: "{colors.warning.a0}",
            },
          },
          success: {
            value: {
              _light: "{colors.success.a0}",
              _dark: "{colors.success.a0}",
            },
          },
          info: {
            value: { _light: "{colors.info.a0}", _dark: "{colors.info.a0}" },
          },
        },

        border: {
          DEFAULT: {
            value: {
              _light: "{colors.surface.a60}",
              _dark: "{colors.surface.a20}",
            },
          },
          muted: {
            value: {
              _light: "{colors.surface.a70}",
              _dark: "{colors.surface.a10}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.surface.a70}",
              _dark: "{colors.surface.a10}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.surface.a50}",
              _dark: "{colors.surface.a30}",
            },
          },
          inverted: {
            value: {
              _light: "{colors.surface.a10}",
              _dark: "{colors.surface.a70}",
            },
          },
          panel: {
            value: {
              _light: "{colors.surface.a70}",
              _dark: "{colors.surface.a20}",
            },
          },
        },

        blue: {
          solid: { value: "{colors.primary.a0}" },
          contrast: { value: "{colors.white}" },
          fg: {
            value: {
              _light: "{colors.white}",
              _dark: "{colors.primary.a90}",
            },
          },
          muted: { value: "{colors.primary.a90}" },
          subtle: {
            value: {
              _light: "{colors.primary.a30}",
              _dark: "{colors.primary.a10}",
            },
          },
          emphasized: { value: "{colors.primary.a60}" },
          focusRing: { value: "{colors.primary.a0}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
