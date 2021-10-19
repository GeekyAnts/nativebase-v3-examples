import React, { useState } from "react";
import {
  Box,
  Divider,
  Text,
  VStack,
  FormControl,
  Input,
  TextArea,
  HStack,
  Avatar,
  Button,
  Select,
  Checkbox,
  useBreakpointValue,
  Stack,
} from "native-base";
import { ScrollView } from "react-native";
import { LeftPanel } from "../components";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Header } from "../components/Header";

export function Setting({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  let [language, setLanguage] = useState("English");
  let [currency, setCurrency] = useState("USD ($)");
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Stack
        /* @ts-ignore */
        direction={{ base: "column", md: "column", sm: "column", lg: "row" }}
        h="100%"
        flex={1}
      >
        <LeftPanel navigation={navigation} />
        <ScrollView>
          <Box flex={1}>
            <Box px={6} bg="white">
              <Header title="Settings" />
              <Divider bg="gray.100" size={2.5} rounded={5} />
              <VStack
                space={12}
                divider={<Divider />}
                my={{ base: 7, lg: 12 }}
                mx={{ base: 0, lg: 'auto' }}

              >
                <Stack
                  direction={isLargeScreen ? "row" : "column"}
                  space={5}
                >
                  <Text
                    mb={5}
                    bold
                    fontSize="lg"
                    flex={{ base: "none", lg: 1 }}
                  >
                    Personal Info
                  </Text>
                  <VStack space={5} flex={{ base: "none", lg: 2 }}>
                    <FormControl>
                      <FormControl.Label>
                        <Text
                          bold
                        >
                          Name
                        </Text>
                      </FormControl.Label>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>
                        <Text
                          bold
                        >
                          Email
                        </Text>
                      </FormControl.Label>
                      <Input placeholder="john@geekyants.com" />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>
                        <Text
                          bold
                        >
                          Bio
                        </Text>
                      </FormControl.Label>
                      <TextArea h={24} _web={{ resize: "vertical" }} />
                      <FormControl.HelperText>
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </FormControl.HelperText>
                    </FormControl>
                  </VStack>
                </Stack>
                <Stack
                  direction={isLargeScreen ? "row" : "column"}
                  space={5}
                >
                  <Text
                    bold
                    fontSize="lg"
                    flex={{ base: "none", lg: 1 }}
                  >
                    Profile Photo
                  </Text>

                  <HStack
                    space={4}
                    alignItems="center"
                    flex={{ base: "none", lg: 2 }}
                  >
                    <Avatar
                      size={isLargeScreen ? "xl" : "lg"}
                      source={{
                        uri: "https://avatars.githubusercontent.com/u/23293248",
                      }}
                    >
                      NB
                    </Avatar>
                    <VStack flex={1}>
                      <HStack space={4}>
                        <Button
                          colorScheme="blueGray"
                          //@ts-ignore
                          variant="subtle"
                          size={isLargeScreen ? "sm" : "xs"}
                        >
                          Change Photo
                        </Button>
                        <Button
                          variant="ghost"
                          size={isLargeScreen ? "sm" : "xs"}
                          colorScheme="danger"
                        >
                          Delete
                        </Button>
                      </HStack>

                      <Text
                        fontSize="sm"
                        color="blueGray.500"
                        mt={2}
                      >
                        .jpg, .gif, or .png. Max file size 700K.
                      </Text>
                    </VStack>
                  </HStack>
                </Stack>

                <Stack
                  direction={isLargeScreen ? "row" : "column"}
                  space={5}
                >
                  <Text
                    bold
                    fontSize="lg"
                    flex={{ base: "none", lg: 1 }}
                  >
                    Language
                  </Text>
                  <VStack space={5} flex={{ base: "none", lg: 2 }}>
                    <FormControl>
                      <FormControl.Label>
                        <Text
                          bold
                        >
                          Display Language
                        </Text>
                      </FormControl.Label>
                      <Select
                        selectedValue={language}
                        minWidth={200}
                        onValueChange={(itemValue: string) =>
                          setLanguage(itemValue)
                        }
                      >
                        <Select.Item label="English" value="English" />
                        <Select.Item label="Hebrew" value="Hebrew" />
                        <Select.Item label="Arabic" value="Arabic" />
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>
                        <Text bold>Display Currency</Text>
                      </FormControl.Label>
                      <Select
                        selectedValue={currency}
                        minWidth={200}
                        onValueChange={(itemValue: string) =>
                          setCurrency(itemValue)
                        }
                      >
                        <Select.Item label="USD ($)" value="USD ($)" />
                        <Select.Item label="AED (dh)" value="AED (dh)" />
                        <Select.Item label="EUR (€)" value="EUR (€)" />
                      </Select>
                    </FormControl>
                  </VStack>
                </Stack>

                <Stack
                  direction={isLargeScreen ? "row" : "column"}
                  space={5}
                >
                  <Text
                    bold
                    fontSize="lg"
                    flex={{ base: "none", lg: 1 }}
                  >
                    Notification
                  </Text>
                  <VStack space={5} flex={{ base: "none", lg: 2 }}>
                    <Checkbox value="" colorScheme="blue">
                      <Text
                        ml={2}
                      >
                        Get updates about the latest meetups.
                      </Text>
                    </Checkbox>
                    <Checkbox defaultIsChecked value="" colorScheme="blue">
                      <Text
                        ml={2}
                      >
                        Get notifications about your account activities
                      </Text>
                    </Checkbox>
                  </VStack>
                </Stack>
                <Stack
                  direction={isLargeScreen ? "row" : "column"}
                  space={5}
                >
                  <Text
                    bold
                    fontSize="lg"
                    flex={{ base: "none", lg: 1 }}
                  >
                    Payment Method
                  </Text>

                  <VStack
                    space={3}
                    flex={{ base: "none", lg: 2 }}
                    justifyContent="center"
                  >
                    <HStack shadow={4} rounded={12} p={6} space={1} bg="white">
                      <VStack space={1}>
                        <Text
                          bold
                        >
                          Visa ending in 5555
                        </Text>
                        <Text color="coolGray.400" fontSize="sm">
                          expired in 1/2024
                        </Text>
                      </VStack>
                      <VStack ml="auto">
                        <Button
                          variant="outline"
                          colorScheme="coolGray"
                          py={3}
                          size={isLargeScreen ? "md" : "xs"}
                          _text={{ color: "black" }}
                        >
                          Update
                        </Button>
                      </VStack>
                    </HStack>
                    <Button
                      variant="link"
                      fontSize="sm"
                      alignSelf="flex-start"
                      p={0}
                      colorScheme="blue"
                      _text={{ fontSize: "sm" }}
                    >
                      Add a new card
                    </Button>
                  </VStack>
                </Stack>
                <HStack space={3} alignItems="flex-end" ml="auto" mb={12}>
                  <Button
                    size={isLargeScreen ? "sm" : "sm"}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Save Changes
                  </Button>
                  <Button
                    size={isLargeScreen ? "sm" : "sm"}
                    variant="outline"
                    colorScheme="blueGray"
                    _pressed={{ bg: "blueGray.100" }}
                    _text={{ color: "black" }}
                  >
                    Cancel
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </ScrollView>
      </Stack>
    </ScrollView>
  );
}
