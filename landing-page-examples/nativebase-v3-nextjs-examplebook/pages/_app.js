import React from "react";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";

function App({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      primary: nbTheme.colors.violet,
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default App;
