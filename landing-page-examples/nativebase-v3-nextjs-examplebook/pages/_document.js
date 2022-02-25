import { default as NativebaseDocument } from "@native-base/next-adapter/document";
// @ts-ignore
import EntypoFont from "react-native-vector-icons/Fonts/Entypo.ttf";
// @ts-ignore
import AntDesignFont from "react-native-vector-icons/Fonts/AntDesign.ttf";
// @ts-ignore
import EvilIconsFont from "react-native-vector-icons/Fonts/EvilIcons.ttf";
// @ts-ignore
import FeatherFont from "react-native-vector-icons/Fonts/Feather.ttf";
// @ts-ignore
import FontAwesomeFont from "react-native-vector-icons/Fonts/FontAwesome.ttf";
// @ts-ignore
import FontistoFont from "react-native-vector-icons/Fonts/Fontisto.ttf";
// @ts-ignore
import FoundationFont from "react-native-vector-icons/Fonts/Foundation.ttf";
// @ts-ignore
import IoniconsFont from "react-native-vector-icons/Fonts/Ionicons.ttf";
// @ts-ignore
import MaterialCommunityIconsFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
// @ts-ignore
import MaterialIconsFont from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
// @ts-ignore
import OcticonsFont from "react-native-vector-icons/Fonts/Octicons.ttf";
// @ts-ignore
import SimpleLineIconsFont from "react-native-vector-icons/Fonts/SimpleLineIcons.ttf";
// @ts-ignore
import ZocialFont from "react-native-vector-icons/Fonts/Zocial.ttf";

import * as React from "react";

export const style = `
@font-face {
  src: url(${EntypoFont});
  font-family: Entypo;
}
@font-face {
  src: url(${EvilIconsFont});
  font-family: EvilIcons;
}
@font-face {
  src: url(${FontAwesomeFont});
  font-family: FontAwesome;
}
@font-face {
  src: url(${FeatherFont});
  font-family: Feather;
}
@font-face {
  src: url(${IoniconsFont});
  font-family: Ionicons;
}
@font-face {
  src: url(${FoundationFont});
  font-family: Foundation;
}
@font-face {
  src: url(${MaterialIconsFont});
  font-family: MaterialIcons;
}
@font-face {
  src: url(${MaterialCommunityIconsFont});
  font-family: MaterialCommunityIcons;
}
@font-face {
  src: url(${ZocialFont});
  font-family: Zocial;
}
@font-face {
  src: url(${SimpleLineIconsFont});
  font-family: SimpleLineIcons;
}
@font-face {
  src: url(${OcticonsFont});
  font-family: Octicons;
}
@font-face {
  src: url(${FontistoFont});
  font-family: Fontisto;
}
@font-face {
  src: url(${AntDesignFont});
  font-family: AntDesign;
}
`;

class Document extends NativebaseDocument {
  //
}

async function getInitialProps({ renderPage }) {
  const res = await NativebaseDocument.getInitialProps({ renderPage });
  const styles = [
    // eslint-disable-next-line react/jsx-key
    <style dangerouslySetInnerHTML={{ __html: style }} />,
    ...res.styles,
  ];
  return { ...res, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;
