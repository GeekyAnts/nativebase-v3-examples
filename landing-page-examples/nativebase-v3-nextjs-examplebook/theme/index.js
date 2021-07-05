import React from "react";
import { extendTheme } from "native-base";

export const sampleExampleTheme = extendTheme({
  breakpoints: {
    sm:275,
    md:330,
    lg:400,
  },
});

export const formExampleTheme = extendTheme({
  breakpoints: {
    md: 500,
  },
  components: {
    Checkbox: {
      sizes: {
        lg: { iconSize: 6, _text: { fontSize: "xl" } },
        md: { iconSize: 5, _text: { fontSize: "lg" } },
        sm: { iconSize: 3, _text: { fontSize: 14 } },
      },
    },
  },
});
