const { withNativebase } = require("@native-base/next-adapter");
const path = require("path");

module.exports = withNativebase({
  dependencies: [
    "react-native-vector-icons",
    "react-native-vector-icons-for-web",
    "@expo/next-adapter",
  ],
  nextConfig: {
    // projectRoot: __dirname,
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(
          __dirname,
          "node_modules/react-native-vector-icons"
        ),
      });
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
        "@expo/vector-icons": "react-native-vector-icons",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  },
});
