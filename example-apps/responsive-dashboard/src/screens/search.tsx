import React from "react";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Icon,
  Input,
  SearchIcon,
  Text,
  VStack,
  Alert,
} from "nb-beavr";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

export function Search({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <Box>
      <HStack
        alignItems="center"
        bg="coolGray.600"
        py={2}
        overflow="hidden"
        w="100%"
      >
        <Input
          flex={1}
          ml={2}
          borderColor="blueGray.400"
          InputLeftElement={
            <SearchIcon size="sm" color="blueGray.300" ml={2} />
          }
          _focus={{ style: { boxShadow: "none" }, borderColor: "blueGray.200" }}
          color="blueGray.500"
        ></Input>
        <IconButton
          icon={
            <Icon
              as={<Ionicons name="close" />}
              color="blueGray.200"
              size="sm"
            />
          }
          onPress={() => navigation.navigate("dashboard")}
          _pressed={{ bg: "transparent" }}
        ></IconButton>
      </HStack>
      <Box p={2}>
        <Text fontSize="md" bold>
          Recent searches
        </Text>
        <VStack space={2} py={2}>
          <Text fontSize="md">CRED redeem option</Text>
          <Text fontSize="md">Flipkart redeem</Text>
          <Text fontSize="md">Report a bug</Text>
          <Text fontSize="md">Delete account</Text>
        </VStack>
        {/* <VStack space={1}>
					<Box mb={2}>Recent searches </Box>
					<Alert colorScheme="coolGray" shadow={2}>
						<Alert.Description p={2} fontSize="md">
							Redeem coins to donate Oxygen
						</Alert.Description>
					</Alert>

					<Alert colorScheme="coolGray" shadow={2}>
						<Alert.Description p={2} fontSize="md">
							CRED redeem option
						</Alert.Description>
					</Alert>

					<Alert colorScheme="coolGray" shadow={2}>
						<Alert.Description p={2} fontSize="md">
							Report a bug
						</Alert.Description>
					</Alert>

					<Alert colorScheme="coolGray" shadow={2}>
						<Alert.Description p={2} fontSize="md">
							Link with AmazonPay
						</Alert.Description>
					</Alert>
				</VStack> */}
      </Box>
    </Box>
  );
}
