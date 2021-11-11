import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard, Search, Setting } from "../screens";
const Stack = createStackNavigator();

export function DashboardStack() {
  return (
    <Stack.Navigator initialRouteName="dashboard">
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          title: "Dashboard"
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="setting"
        component={Setting}
        options={{
          headerShown: false,
          title: "Settings"
        }}
      />
    </Stack.Navigator>
  );
}
