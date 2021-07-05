import Document, { Html, Head, Main, NextScript } from "next/document";
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
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <style>{iconFontStyles}</style>
          <title>NativeBase v3 Examples</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
