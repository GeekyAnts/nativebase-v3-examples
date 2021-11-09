import React from "react";
import { Box, HStack, ScrollView, Hidden } from "native-base";
import { LeftPanel } from "../../components/LeftPanel";
import type { StackNavigationProp } from "@react-navigation/stack";
import { DesktopHeader } from "../../components/Header/DesktopHeader";
import { MobileHeader } from "../../components/Header/MobileHeader";

export function Layout({
  navigation,
  children,
}: {
  navigation: StackNavigationProp<any>;
  children: any;
}) {
  return (
    <HStack flex={1}>
      <LeftPanel navigation={navigation} />
      <ScrollView>
        <Box>
          <Hidden till="md">
            <DesktopHeader title="Dashboard" navigation={navigation} />
          </Hidden>
          <Box flex={1} mx="auto" w="100%" bg="white">
            <Hidden from="md">
              <MobileHeader />
            </Hidden>
            <Box px={{ base: 4, md: 8 }}>{children}</Box>
          </Box>
        </Box>
      </ScrollView>
    </HStack>
  );
}
