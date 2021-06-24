import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Icon,
  Heading,
  VStack,
  Alert,
  Divider,
  List,
  Text,
  Button,
} from "nb-beavr";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";

export function Notifications({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <Box bg="coolGray.50" flex={1}>
      <HStack
        alignItems="center"
        bg="coolGray.600"
        py={2}
        overflow="hidden"
        w="100%"
      >
        <IconButton
          icon={
            <Icon
              as={<Ionicons name="arrow-back-outline" />}
              color="blueGray.400"
              size="sm"
            />
          }
          _pressed={{ bg: "transparent" }}
          colorScheme="coolGray"
          onPress={() => navigation.navigate("dashboard")}
        />
        <Heading color="white" size="sm">
          Notifications
        </Heading>
      </HStack>

      <VStack divider={<Divider />}>
        <Alert colorScheme="coolGray">
          <Alert.Description p={2} fontSize="md">
            Redeem your coins to donate Oxygen
          </Alert.Description>
        </Alert>

        <Alert colorScheme="coolGray">
          <Alert.Description p={2} fontSize="md">
            Payment to Alex is succesfull
          </Alert.Description>
        </Alert>

        <Alert colorScheme="white">
          <Alert.Description p={2} fontSize="md">
            $45,000 Received from Nitin
          </Alert.Description>
        </Alert>

        <Alert colorScheme="coolGray">
          <Alert.Description p={2} fontSize="md">
            $20,000 debited from your a/c but not credited to Manish
          </Alert.Description>
        </Alert>
      </VStack>
    </Box>
  );
}
