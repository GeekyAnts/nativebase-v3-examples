import { extendTheme } from "nb-beavr";

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
    Text: {
      defaultProps: {
        fontSize: "sm",
      },
    },
    Input: {
      defaultProps: {
        bg: "white",
      },
    },
    TextArea: {
      defaultProps: {
        bg: "white",
      },
    },
    Select: {
      defaultProps: {
        bg: "white",
      },
    },
  },
  colors: {
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
    process:
    {
      
      300: '#4daaff',
      
    }
  },
});
