import React from "react";
import {
  Box,
  HStack,
  Icon,
  Input,
  FlatList,
  Text,
  Pressable,
  VStack,
  IconButton,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import type { StackNavigationProp } from "@react-navigation/stack";
import { MobileHeader } from "../components/Header/MobileHeader";

export const data = [
  {
    title: "Redeem coins to donate oxygen",
  },
  {
    title: "CRED Redeem Option",
  },
  {
    title: "Report a bug",
  },
  {
    title: "Link with Amazon Pay",
  },
  {
    title: "CRED Redeem Option",
  },
  {
    title: "Report a bug",
  },
];
export function Search({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <Box bg="white" flex={1} px="4">
      <MobileHeader />
      <VStack space="1">
        <Input
          size="lg"
          //@ts-ignore
          flexGrow="0"
          placeholder="Search"
          pl="4"
          InputLeftElement={
            <IconButton
              pl="3"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="keyboard-backspace"
                  color="trueGray.400"
                  size="sm"
                />
              }
              onPress={() => {
                navigation.navigate("dashboard");
              }}
            />
          }
        />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              borderRadius="xs"
              py="4"
              px="3"
              _hover={{ bg: "indigo.50" }}
              _focus={{
                bg: "indigo.50",
                borderColor: "transparent",
              }}
              //@ts-ignore
              _web={{ style: { outline: "none" } }}
            >
              {({ isHovered, isFocused }: any) => (
                <HStack space={3}>
                  <Icon
                    as={MaterialIcons}
                    name="access-time"
                    size="sm"
                    color={
                      isHovered || isFocused ? "indigo.500" : "trueGray.400"
                    }
                  />
                  <Text>{item.title}</Text>
                </HStack>
              )}
            </Pressable>
          )}
        />
      </VStack>
    </Box>
  );
}
