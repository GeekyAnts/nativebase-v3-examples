import { theme, extendTheme } from "native-base";

export const DashboardTheme = extendTheme({
  components: {
    Button: {
      variants: {
        subtle: ({ colorScheme }: any) => {
          return {
            bg: `${colorScheme}.300`,
            _text: { color: `${colorScheme}.700` },
          };
        },
      },
    },
  },
  colors: {
    primary: theme.colors.indigo,
    slateGray: {
      50: "#edf2f6",
      100: "#d0d7e4",
      200: "#b3bdcc",
      300: "#97a2b5",
      400: "#7a889e",
      500: "#616e85",
      600: "#4a5768",
      700: "#2e3747",
      800: "#1d2530",
      900: "#070c18",
    },
  },
});
