import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  Box,
  HStack,
  useBreakpointValue,
  VStack,
  IconButton,
  Heading,
  Icon,
  Button,
  Divider,
  Stack,
  SearchIcon,
  Avatar,
  Text,
  Circle,
  Badge,
  Center,
  Tooltip,
  Menu,
  useDisclose,
  Modal,
  Input,
  Alert,
} from "nb-beavr";
import { LeftPanel } from "../components";
import { ScrollView } from "react-native";
import * as VectorIcons from "@expo/vector-icons";
import { Table } from "../components/Table";

import type { StackNavigationProp } from "@react-navigation/stack";
import { Header } from "../components/Header";

export function Dashboard({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  const { isOpen, onOpen, onClose } = useDisclose();
  const initialRef = React.useRef(null);
  return (
    <Stack
      /* @ts-ignore */
      direction={{ base: "column", md: "column", sm: "column", lg: "row" }}
      h="100%"
    >
      <LeftPanel navigation={navigation} />
      <ScrollView>
        <Box flex={1}>
          <Box px={{ base: 6, lg: 16 }} bg="white">
            <Header title="Dashboard" />
            <Divider bg="gray.100" size={2.5} rounded={5} />
            <Stack
              // @ts-ignore
              direction={isLargeScreen ? "row" : "column"}
              my={6}
              alignItems={{ base: "flex-start", lg: "center" }}
              space={6}
              mt={8}
              w="100%"
              px={0}
            >
              <Avatar
                alignSelf="center"
                // Todo: fix size typing in Avatar
                // @ts-ignore
                size={{ base: 24, lg: 20 }}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                }}
              >
                JD
              </Avatar>
              <VStack space={3} _web={{ flex: { base: "none", lg: 1 } }} px={0}>
                <Text fontSize={{ base: "lg", md: "2xl" }}>
                  Good morning, Jessica Willis
                </Text>
                <Stack
                  direction={isLargeScreen ? "row" : "column"}
                  alignItems={{ base: "flex-start", lg: "center" }}
                  space={3}
                >
                  <HStack alignItems="center" space={1}>
                    <Icon
                      as={
                        <VectorIcons.MaterialCommunityIcons name="office-building" />
                      }
                      color="slateGray.400"
                      size="sm"
                    />
                    <Text
                      color="slateGray.400"
                      fontWeight={600}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      Fairfax, Cleaveland, Ohio
                    </Text>
                  </HStack>
                  <HStack alignItems="center" space={2} ml={1}>
                    <Icon
                      as={<VectorIcons.AntDesign name="checkcircle" />}
                      color="emerald.300"
                      size="xs"
                    />
                    <Text
                      color="slateGray.400"
                      fontWeight={600}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      Verified Account
                    </Text>
                  </HStack>
                </Stack>
              </VStack>

              <HStack
                space={isLargeScreen ? 6 : 10}
                mt={isLargeScreen ? 0 : 3}
                mb={6}
                alignSelf="center"
              >
                <Tooltip label="Hey, I'm here!" openDelay={500}>
                  <VStack
                    alignItems="center"
                    space={3}
                    flex={{ base: 1, lg: "none" }}
                  >
                    <Circle
                      // @ts-ignore
                      size={{ base: 12, lg: 16 }}
                      borderWidth={3}
                      borderColor="blueGray.200"
                    >
                      <Icon
                        as={<VectorIcons.AntDesign name="camerao" />}
                        // @ts-ignore
                        size={{ base: 6, lg: 8 }}
                        color="blueGray.500"
                      />
                    </Circle>

                    <Text
                      color="coolGray.500"
                      fontWeight={600}
                      fontSize={{ base: "sm", lg: "md" }}
                      // @ts-ignore
                      textAlign={{ base: "center", lg: "none" }}
                    >
                      Send or Request
                    </Text>
                  </VStack>
                </Tooltip>
                <VStack
                  alignItems="center"
                  space={3}
                  flex={{ base: 1, lg: "none" }}
                >
                  <Circle
                    // @ts-ignore
                    size={{ base: 12, lg: 16 }}
                    borderWidth={3}
                    borderColor="blueGray.200"
                  >
                    <Icon
                      as={<VectorIcons.Ionicons name="swap-horizontal" />}
                      // @ts-ignore
                      size={{ base: 6, lg: 8 }}
                      color="blueGray.500"
                    />
                  </Circle>

                  <Text
                    color="coolGray.500"
                    fontWeight={600}
                    fontSize={{ base: "sm", lg: "md" }}
                    textAlign={{ base: "center", lg: "inherit" }}
                  >
                    Transfer Money
                  </Text>
                </VStack>
                <VStack
                  alignItems="center"
                  space={3}
                  flex={{ base: 1, lg: "none" }}
                >
                  <Circle
                    // @ts-ignore
                    size={{ base: 12, lg: 16 }}
                    borderWidth={3}
                    borderColor="blueGray.200"
                  >
                    <Icon
                      as={<VectorIcons.AntDesign name="plus" />}
                      // @ts-ignore
                      size={{ base: 6, lg: 8 }}
                      color="blueGray.500"
                    />
                  </Circle>

                  <Text
                    color="coolGray.500"
                    fontWeight={600}
                    fontSize={{ base: "sm", lg: "md" }}
                    textAlign={{ base: "center", lg: "inherit" }}
                  >
                    Add Money
                  </Text>
                </VStack>
              </HStack>
            </Stack>
          </Box>
          {isLargeScreen ? (
            <></>
          ) : (
            <Box m={6}>
              <VStack
                rounded="lg"
                w="100%"
                p={8}
                mr={8}
                bg="slateGray.700"
                space={2}
                borderRadius={12}
                shadow={4}
              >
                <Text
                  color="coolGray.400"
                  fontWeight={500}
                  fontSize="lg"
                  mr={1}
                >
                  Your Balance : $2,550.40
                </Text>
                <Button
                  pl={0}
                  p={0}
                  variant="unstyled"
                  justifyContent="flex-start"
                  _text={{
                    color: "coolGray.400",
                    fontWeight: 500,
                  }}
                  endIcon={
                    <Icon
                      size="md"
                      color="coolGray.200"
                      as={
                        <VectorIcons.MaterialCommunityIcons name="chevron-right" />
                      }
                    />
                  }
                >
                  View summary
                </Button>
              </VStack>
            </Box>
          )}
          <Box bg="slateGray.50" pb={8}>
            <Box px={{ base: 6, lg: 16 }}>
              <HStack justifyContent="space-between" alignItems="center" mt={4}>
                <Heading size="sm">Overview</Heading>
                <Badge
                  colorScheme="blueGray"
                  bg="blueGray.200"
                  rounded="lg"
                  p={{ base: 2, lg: 3 }}
                  _text={{
                    // @ts-ignore
                    fontSize: isLargeScreen ? "20px" : "15px",
                    fontWeight: 500,
                  }}
                >
                  Last 30 days
                </Badge>
              </HStack>
              <Stack
                direction={!isLargeScreen ? "column" : "row"}
                my={5}
                space={10}
              >
                <Tooltip
                  placement="top right"
                  label="Total money sent this week"
                  openDelay={500}
                >
                  <VStack
                    borderRadius={12}
                    shadow={4}
                    bg="white"
                    _web={{ flex: isLargeScreen ? 1 : "none" }}
                    overflow="hidden"
                  >
                    <VStack space={4} pt={6}>
                      <Text
                        bold
                        color="coolGray.500"
                        mx={6}
                        fontSize={{ base: "md", lg: "lg" }}
                      >
                        Total sent
                      </Text>
                      <HStack alignItems="flex-end" mx={6} mb={4}>
                        <Text
                          fontSize={{ base: "2xl", lg: "3xl" }}
                          lineHeight={7}
                          mr={3}
                        >
                          $1,247.80
                        </Text>
                        <Icon
                          as={<VectorIcons.Ionicons name="arrow-up-outline" />}
                          size="xs"
                          color="red.600"
                          //Todo:
                          // -3 as number is not working
                          // margin/layout-props not working
                          mb={3}
                          mr={8}
                        ></Icon>
                        <Text
                          bold
                          color="orange.900"
                          fontSize={{ base: "md", lg: "lg" }}
                        >
                          11%
                        </Text>
                      </HStack>
                      <Center bg="blueGray.50" p={4}>
                        <HStack alignItems="center">
                          <Text
                            fontWeight={600}
                            color="coolGray.600"
                            fontSize={{ base: "md", lg: "lg" }}
                          >
                            View all sent
                          </Text>
                          <Icon
                            size="sm"
                            as={
                              <VectorIcons.MaterialCommunityIcons name="chevron-right" />
                            }
                            color="coolGray.500"
                          />
                        </HStack>
                      </Center>
                    </VStack>
                  </VStack>
                </Tooltip>
                <Tooltip
                  label="Total money received this week"
                  placement="top right"
                  openDelay={500}
                >
                  <VStack
                    borderRadius={12}
                    shadow={4}
                    bg="white"
                    _web={{ flex: isLargeScreen ? 1 : "none" }}
                    overflow="hidden"
                  >
                    <VStack space={4} pt={6}>
                      <Text
                        bold
                        color="coolGray.500"
                        mx={6}
                        fontSize={{ base: "md", lg: "lg" }}
                      >
                        Received
                      </Text>
                      <HStack alignItems="flex-end" mx={6} mb={4}>
                        <Text
                          fontSize={{ base: "2xl", lg: "3xl" }}
                          lineHeight={7}
                          mr={3}
                        >
                          $540.44
                        </Text>
                        <Icon
                          as={<VectorIcons.Ionicons name="arrow-up-outline" />}
                          size="xs"
                          color="green.500"
                          //Todo:
                          // -3 as number is not working
                          // margin/layout-props not working
                          mb={3}
                          mr={8}
                        ></Icon>
                        <Text
                          bold
                          color="green.700"
                          fontSize={{ base: "md", lg: "lg" }}
                        >
                          5%
                        </Text>
                      </HStack>
                      <Center bg="blueGray.50" p={4} mt="auto">
                        <HStack alignItems="center">
                          <Text
                            fontWeight={600}
                            color="coolGray.600"
                            fontSize={{ base: "md", lg: "lg" }}
                          >
                            View all received
                          </Text>
                          <Icon
                            size="sm"
                            as={
                              <VectorIcons.MaterialCommunityIcons name="chevron-right" />
                            }
                            color="coolGray.500"
                          />
                        </HStack>
                      </Center>
                    </VStack>
                  </VStack>
                </Tooltip>
                <Tooltip
                  label="Minimum balance maintained this week"
                  placement="top right"
                  openDelay={500}
                >
                  <VStack
                    borderRadius={12}
                    shadow={4}
                    bg="white"
                    _web={{ flex: isLargeScreen ? 1 : "none" }}
                    overflow="hidden"
                  >
                    <VStack pt={6} space={4}>
                      <Text
                        bold
                        color="coolGray.500"
                        mx={6}
                        fontSize={{ base: "md", lg: "lg" }}
                      >
                        Outstanding
                      </Text>
                      <HStack alignItems="flex-end" mx={6} mb={4}>
                        <Text
                          fontSize={{ base: "2xl", lg: "3xl" }}
                          lineHeight={7}
                          mr={3}
                        >
                          $300.00
                        </Text>
                        <Icon
                          as={
                            <VectorIcons.Ionicons name="arrow-down-outline" />
                          }
                          size="xs"
                          color="green.500"
                          //Todo:
                          // -3 as number is not working
                          // margin/layout-props not working
                          mb={3}
                          mr={8}
                        ></Icon>
                        <Text
                          bold
                          color="green.700"
                          fontSize={{ base: "md", lg: "lg" }}
                        >
                          8%
                        </Text>
                      </HStack>
                      <Center mt="auto" bg="blueGray.50" p={4}>
                        <HStack alignItems="center">
                          <Text
                            fontWeight={600}
                            color="coolGray.600"
                            fontSize={{ base: "md", lg: "lg" }}
                          >
                            View all outstanding
                          </Text>
                          <Icon
                            size="sm"
                            as={
                              <VectorIcons.MaterialCommunityIcons name="chevron-right" />
                            }
                            color="coolGray.500"
                          />
                        </HStack>
                      </Center>
                    </VStack>
                  </VStack>
                </Tooltip>
              </Stack>
            </Box>
            <Table />
          </Box>
        </Box>
      </ScrollView>
    </Stack>
  );
}
