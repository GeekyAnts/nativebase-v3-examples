import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider, Box } from "nb-beavr";
import { NavigationContainer } from "@react-navigation/native";
import { DashboardStack } from "./src/navigators";
import { DashboardTheme } from "./src/theme";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={DashboardTheme}>
        <Box safeAreaTop flex={1}>
          <DashboardStack />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
