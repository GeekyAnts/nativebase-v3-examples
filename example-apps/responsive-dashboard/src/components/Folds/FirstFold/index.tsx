import React from "react";
import {
  HStack,
  Icon,
  VStack,
  Stack,
  Avatar,
  Tooltip,
  Circle,
  Text,
  Checkbox,
} from "native-base";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";

export function FirstFold(props: any) {
  const cardData = [
    {
      tooltipLabel: "Send or Request money from a friend",
      color: "emerald",
      iconLibrary: FontAwesome5,
      iconName: "wallet",
      label: "Send or Request",
    },
    {
      tooltipLabel: "Transfer money to your bank a/c",
      color: "orange",
      iconLibrary: Ionicons,
      iconName: "swap-horizontal",
      label: "Transfer Money",
    },
    {
      tooltipLabel: "Add money to your wallet",
      color: "lightBlue",
      iconLibrary: AntDesign,
      iconName: "plus",
      label: "Add Fund/ Money",
    },
  ];
  return (
    <VStack w="100%">
      <HStack mt="4" space={4} alignItems="center">
        <VStack space={1}>
          <Text fontSize={{ base: "lg", lg: "2xl" }}>
            Hello,{" "}
            <Text fontSize={{ base: "lg", lg: "2xl" }} bold>
              Jessica Willis
            </Text>
          </Text>
          <Text fontSize={{ base: "xs", lg: "sm" }}>
            Check your activities in this dashboard.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
