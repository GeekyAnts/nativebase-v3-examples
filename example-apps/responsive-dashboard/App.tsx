import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { DashboardStack } from "./src/navigators";
import { DashboardTheme } from "./src/theme";
import config from "./nativebase.config";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={DashboardTheme} config={config}>
        <Box safeAreaTop flex={1}>
          <DashboardStack />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
