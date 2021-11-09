import React from "react";
import { HStack, Icon, VStack, Stack, Tooltip, Text } from "native-base";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";

export function SecondFold(props: any) {
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
    <HStack mb="6" mt={{ base: "6" }} space={{ base: "3", lg: "6" }}>
      {cardData.map((data: any) => {
        return (
          <Tooltip label={data.tooltipLabel} openDelay={500}>
            <VStack
              space={6}
              px={4}
              py={6}
              bg={`${data.color}.100`}
              rounded="xl"
              maxW="32"
              flex="1"
            >
              <Icon
                as={data.iconLibrary}
                name={data.iconName}
                size={8}
                color={`${data.color}.500`}
              />
              <Text color={`${data.color}.500`} fontWeight={500}>
                {data.label}
              </Text>
            </VStack>
          </Tooltip>
        );
      })}
    </HStack>
  );
}
