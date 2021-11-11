import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  FormControl,
  Input,
  TextArea,
  HStack,
  Button,
  Select,
  Checkbox,
  Stack,
  Image,
  AddIcon,
  Hidden,
} from "native-base";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Layout } from "../components/Layout";

export function Setting({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  let [language, setLanguage] = useState("English");
  let [currency, setCurrency] = useState("USD ($)");

  return (
    <Layout navigation={navigation}>
      <Stack
        my="6"
        space={{ base: "5", md: "16" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack space="6" flex="1">
          <VStack space="3">
            <Box>
              <Text bold fontSize="lg" textTransform="uppercase">
                Personal Info
              </Text>
            </Box>
            <VStack space="3">
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Name
                  </Text>
                </FormControl.Label>
                <Input defaultValue="Jessica Willis" />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Email
                  </Text>
                </FormControl.Label>
                <Input defaultValue="jessicawillis@gmail.com" />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Bio
                  </Text>
                </FormControl.Label>
                <TextArea h={24} />
                <FormControl.HelperText>
                  Brief description for your profile. URLs are hyperlinked.
                </FormControl.HelperText>
              </FormControl>
            </VStack>
          </VStack>
          <VStack space="3">
            <Box>
              <Text bold fontSize="lg" textTransform="uppercase">
                Language
              </Text>
            </Box>
            <VStack space="3">
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Display Language
                  </Text>
                </FormControl.Label>
                <Select
                  selectedValue={language}
                  minWidth={200}
                  onValueChange={(itemValue: string) => setLanguage(itemValue)}
                >
                  <Select.Item label="English" value="English" />
                  <Select.Item label="Hebrew" value="Hebrew" />
                  <Select.Item label="Arabic" value="Arabic" />
                </Select>
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Display Currency
                  </Text>
                </FormControl.Label>
                <Select
                  selectedValue={currency}
                  minWidth={200}
                  onValueChange={(itemValue: string) => setCurrency(itemValue)}
                >
                  <Select.Item label="USD ($)" value="USD ($)" />
                  <Select.Item label="AED (dh)" value="AED (dh)" />
                  <Select.Item label="EUR (€)" value="EUR (€)" />
                </Select>
              </FormControl>
            </VStack>
          </VStack>
          <VStack space="3">
            <Box>
              <Text bold fontSize="lg" textTransform="uppercase">
                Notifications
              </Text>
            </Box>
            <VStack space="4" my="1">
              <FormControl>
                <Checkbox
                  value="meetup"
                  colorScheme="blue"
                  _text={{ fontSize: "xs" }}
                >
                  Get updates about the latest meetups.
                </Checkbox>
              </FormControl>
              <FormControl>
                <Checkbox
                  defaultIsChecked
                  value="activity"
                  colorScheme="blue"
                  _text={{ fontSize: "xs" }}
                >
                  Get notifications about your account activities
                </Checkbox>
              </FormControl>
            </VStack>
          </VStack>
          <VStack space="4">
            <Box>
              <Text bold fontSize="lg" textTransform="uppercase">
                Payment Method
              </Text>
            </Box>
            <VStack
              space={3}
              flex={{ base: "none", lg: 2 }}
              justifyContent="center"
            >
              <VStack
                rounded="xl"
                w={{ base: "80", md: "96" }}
                p={{ base: "4", md: "6" }}
                bg={{
                  linearGradient: {
                    colors: ["lightBlue.300", "violet.800"],
                    start: [0, 0],
                    end: [1, 0],
                  },
                }}
                space="5"
              >
                <Image
                  source={require("./../../assets/chip.png")}
                  w="16"
                  h="12"
                  rounded="lg"
                />
                <HStack space={{ base: "4", md: "6" }}>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontFamily="mono"
                    fontWeight="semibold"
                    color="primary.50"
                  >
                    4122
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontFamily="mono"
                    fontWeight="semibold"
                    color="primary.50"
                  >
                    4567
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontFamily="mono"
                    fontWeight="semibold"
                    color="primary.50"
                  >
                    8910
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontFamily="mono"
                    fontWeight="semibold"
                    color="primary.50"
                  >
                    1234
                  </Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <VStack>
                    <Text fontSize="xs" color="primary.50">
                      Card Holder Name
                    </Text>
                    <Text color="primary.50" fontWeight="semibold">
                      Jessica Willis
                    </Text>
                  </VStack>
                  <VStack>
                    <Text fontSize="xs" color="primary.50">
                      Expiry Date
                    </Text>
                    <Text color="primary.50" fontWeight="semibold">
                      07/23
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
              <Button
                variant="link"
                alignSelf="flex-start"
                p={0}
                colorScheme="blue"
                _text={{ fontSize: "sm", textDecorationLine: "none" }}
                leftIcon={<AddIcon size="3" />}
              >
                Add a new card
              </Button>
            </VStack>
          </VStack>
        </VStack>

        <VStack space="2">
          <Hidden till="md">
            <Text fontWeight="semibold" fontSize="xs">
              Profile Photo
            </Text>
          </Hidden>
          <VStack
            space={4}
            justifyContent={{ base: "center", md: "flex-start" }}
            mx={{ base: "auto", md: "0" }}
          >
            <Image
              size={{ base: "32", md: "48" }}
              rounded="sm"
              source={{
                uri:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
              }}
            />

            <VStack space="2" w={{ base: "32", md: "48" }} flex="1">
              <Button w={{ base: "32", md: "48" }}>Upload an Image</Button>
              <Button variant="ghost" w={{ base: "32", md: "48" }}>
                Remove photo
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </Stack>
      <HStack space={3} alignItems="flex-end" ml="auto" mt="6" mb="20">
        <Button variant="outline">Cancel</Button>
        <Button variant="solid">Save Changes</Button>
      </HStack>
    </Layout>
  );
}
