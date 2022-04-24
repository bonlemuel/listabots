import {extendTheme} from "native-base";

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#7fc8ff",
      100: "#66bdff",
      200: "#4cb2ff",
      300: "#32a7ff",
      400: "#199cff",
      500: "#0092ff",
      600: "#0083e5",
      700: "#0074cc",
      800: "#0066b2",
      900: "#005799",
    },
    amber: {
      400: "#d97706",
    },
  },
  config: {
    initialColorMode: "light",
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
      700: {
        normal: "Roboto-Bold",
      },
      800: {
        normal: "Roboto-Bold",
        italic: "Roboto-BoldItalic",
      },
      900: {
        normal: "Roboto-Bold",
        italic: "Roboto-BoldItalic",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});
