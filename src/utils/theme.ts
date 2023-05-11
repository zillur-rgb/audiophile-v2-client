import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  components: {
    Button: {
      variants: {
        base: {
          bgColor: "orange",
          color: "white",
          fontSize: "md",
          _hover: {
            opacity: ".8",
          },
        },
      },
    },
  },
  colors: {
    orange: "#D87C48",
    black: "#202020",
    offWhite: "fafafa",
    lightText: "#ffffff80",
    brand: {
      50: "#f5fafd",
      // define more color shades as per your requirement
    },
  },
  fonts: {
    body: "Helvetica Neue, sans-serif",
    heading: "Georgia, serif",
  },
  fontSizes: {
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
});
