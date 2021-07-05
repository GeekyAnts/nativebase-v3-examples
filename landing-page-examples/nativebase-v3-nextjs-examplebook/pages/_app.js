import * as React from 'react'
import Head from 'next/head'
import Ionicons from "react-native-vector-icons/Fonts/Ionicons.ttf";
import MaterialIcons from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
import AntDesign from "react-native-vector-icons/Fonts/AntDesign.ttf";
import MaterialCommunityIcons from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
// Generate required css
const iconFontStyles = `@font-face {
  src: url(${Ionicons});
  font-family: Ionicons;
}
@font-face {
  src: url(${MaterialIcons});
  font-family: MaterialIcons;
}@font-face {
  src: url(${AntDesign});
  font-family: AntDesign;
}@font-face {
  src: url(${MaterialCommunityIcons});
  font-family: MaterialCommunityIcons;
}`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{iconFontStyles}</style>
        <title>NativeBase v3 Examples</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
