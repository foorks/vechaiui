import colors from "./colors";
import { VechaiTheme, ColorScheme } from "./types";

// light theme
export const light: ColorScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: colors.white,
      fill: colors.gray["100"],
    },
    text: {
      foreground: colors.gray["900"],
      muted: colors.gray["700"],
    },
    primary: colors.indigo,
    neutral: colors.gray,
  },
};

// dark theme
export const dark: ColorScheme = {
  id: "light",
  type: "dark",
  colors: {
    bg: {
      base: colors.gray["800"],
      fill: colors.gray["900"],
    },
    text: {
      foreground: colors.gray["100"],
      muted: colors.gray["300"],
    },
    primary: colors.indigo,
    neutral: colors.gray,
  },
};

export const defaultTheme: VechaiTheme = {
  cursor: "default",
  rounded: "0.375rem", // md
  colorSchemes: {
    light,
    dark,
  },
  config: {},
};