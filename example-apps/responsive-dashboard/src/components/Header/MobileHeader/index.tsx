import React from "react";
import { HStack, Heading } from "native-base";
import { NotificationButton } from "../components/NotificationButton";

export function MobileHeader() {
  return (
    <HStack
      alignItems="center"
      space={4}
      py="5"
      px={{ base: 4, md: 8 }}
      justifyContent="space-between"
      borderBottomWidth="1px"
      borderBottomColor="coolGray.200"
    >
      <HStack alignItems="center" space="xs">
        <Heading fontSize="xl">Dashboard</Heading>
      </HStack>
      <NotificationButton />
    </HStack>
  );
}
