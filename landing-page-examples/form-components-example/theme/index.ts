import { extendTheme } from "native-base";

export const customTheme = extendTheme({
  breakpoints: {
    md: 500,
  },
  components: {
    Checkbox: {
      sizes: {
        lg: { _icon: { size: 6 }, _text: { fontSize: "xl" } },
        md: { _icon: { size: 5 }, _text: { fontSize: "lg" } },
        sm: { _icon: { size: 3 }, _text: { fontSize: "sm" } },
      },
    },
  },
});
