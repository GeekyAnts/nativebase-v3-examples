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
        <Box>
          <Box nativeID="asdf" flex={1} maxW="1184px">
            <Box px={{ base: 6, lg: 16 }} bg="white">
              <Header title="Dashboard" />
              <Divider bg="gray.100" size={2.5} rounded={5} />
              <Stack
                // @ts-ignore
                // direction={isLargeScreen ? "row" : "column"}
                direction={{ base: "column", xl: "row" }}
                // my={{ base: 6, lg: 6 }}
                my={8}
                // alignItems={{ base: "flex-start", xl: "center" }}
                alignItems="flex-start"
                space={6}
                // mt={8}
                w="100%"
                px={0}
              >
                <Stack
                  direction={{ base: "column", md: "row" }}
                  space={6}
                  w={{ base: "100%", lg: "auto" }}
                  // alignSelf="flex-start"
                >
                  <Avatar
                    // alignSelf="center"
                    alignSelf={{
                      base: "center",
                      lg: "flex-start",
                      xl: "center",
                    }}
                    // Todo: fix size typing in Avatar
                    // @ts-ignore
                    size={{ base: 24, lg: 16 }}
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    }}
                  >
                    JD
                  </Avatar>
                  <VStack
                    alignSelf={{ base: "flex-start", md: "center" }}
                    space={2}
                    _web={{ flex: { base: "none", lg: 1 } }}
                    px={0}
                  >
                    <Text fontSize={{ base: "lg", md: "md" }}>
                      Good morning, Jessica Willis
                    </Text>
                    <Stack
                      // direction={isLargeScreen ? "row" : "column"}
                      direction={{ base: "column", lg: "row" }}
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
                          // fontSize={{ base: "sm", md: "md" }}
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
                          // fontSize={{ base: "sm", md: "md" }}
                        >
                          Verified Account
                        </Text>
                      </HStack>
                    </Stack>
                  </VStack>
                </Stack>
                <HStack
                  // alignItems={{ base: "center", lg: "flex-start" }}
                  alignItems="flex-start"
                  space={isLargeScreen ? 6 : 10}
                  mt={{ base: 3, xl: 0 }}
                  mb={{ base: 6, xl: 0 }}
                  ml={{ base: "0", xl: "auto" }}
                  alignSelf={{ base: "center", xl: "flex-end" }}
                >
                  <Tooltip
                    label="Send or Request money from a friend"
                    openDelay={500}
                  >
                    <VStack
                      // alignItems={{ base: "flex-start", lg: "center" }}
                      alignItems="center"
                      space={3}
                      textAlign="center"
                      // justifyContent="center"
                      // flex={{ base: 1, xl: "none" }}
                      flex={1}
                    >
                      <Circle
                        // @ts-ignore
                        // size={{ base: 12, lg: 20 }}
                        size={12}
                        borderWidth={3}
                        borderColor="blueGray.200"
                      >
                        <Icon
                          as={<VectorIcons.AntDesign name="camerao" />}
                          // @ts-ignore
                          // size={{ base: 6, lg: 8 }}
                          size={6}
                          color="blueGray.500"
                        />
                      </Circle>

                      <Text
                        color="coolGray.500"
                        fontWeight={600}
                        // fontSize={{ base: "sm", lg: "md" }}
                        fontSize="xs"
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
                    // flex={{ base: 1, xl: "none" }}
                    flex={1}
                    textAlign="center"
                  >
                    <Circle
                      // @ts-ignore
                      // size={{ base: 12, lg: 16 }}
                      size={12}
                      borderWidth={3}
                      borderColor="blueGray.200"
                    >
                      <Icon
                        as={<VectorIcons.Ionicons name="swap-horizontal" />}
                        // @ts-ignore
                        // size={{ base: 6, lg: 8 }}
                        size={6}
                        color="blueGray.500"
                      />
                    </Circle>

                    <Text
                      color="coolGray.500"
                      fontWeight={600}
                      // fontSize={{ base: "sm", lg: "md" }}
                      fontSize="xs"
                      textAlign={{ base: "center", lg: "inherit" }}
                    >
                      Transfer Money
                    </Text>
                  </VStack>
                  <VStack
                    alignItems="center"
                    space={3}
                    // flex={{ base: 1, xl: "none" }}
                    flex={1}
                    textAlign="center"
                  >
                    <Circle
                      // @ts-ignore
                      // size={{ base: 12, lg: 16 }}
                      size={12}
                      borderWidth={3}
                      borderColor="blueGray.200"
                    >
                      <Icon
                        as={<VectorIcons.AntDesign name="plus" />}
                        // @ts-ignore
                        // size={{ base: 6, lg: 8 }}
                        size={6}
                        color="blueGray.500"
                      />
                    </Circle>

                    <Text
                      color="coolGray.500"
                      fontWeight={600}
                      // fontSize={{ base: "sm", lg: "md" }}
                      fontSize="xs"
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
                        size="xs"
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
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  mt={4}
                >
                  <Heading size="xs">Overview</Heading>
                  <Badge
                    colorScheme="blueGray"
                    bg="blueGray.200"
                    rounded="lg"
                    p={{ base: 2, lg: 3 }}
                    _text={{
                      // @ts-ignore
                      fontSize: isLargeScreen ? "sm" : "15px",
                      fontWeight: 500,
                    }}
                  >
                    Last 30 days
                  </Badge>
                </HStack>
                <Stack
                  direction={!isLargeScreen ? "column" : "row"}
                  my={4}
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
                      space={4}
                      pt={6}
                    >
                      {/* <VStack > */}
                      <Text
                        bold
                        color="coolGray.500"
                        mx={6}
                        // fontSize={{ base: "md", lg: "lg" }}
                      >
                        Total sent
                      </Text>
                      <HStack
                        alignItems="flex-end"
                        mx={6}
                        mb={4}
                        flexWrap="wrap"
                        // borderBottomWidth={2}
                        // borderBottomColor="red.200"
                      >
                        <Text
                          // fontSize={{ base: "2xl", xl: "3xl" }}
                          fontSize="xl"
                          // lineHeight={6}
                          mr={3}
                        >
                          $1,247.80
                        </Text>
                        <HStack mb="2px">
                          <Box
                            _web={{
                              mb: "-3px",
                            }}
                          >
                            <Icon
                              as={
                                <VectorIcons.Ionicons name="arrow-up-outline" />
                              }
                              size="xs"
                              color="green.500"
                              //Todo:
                              // -3 as number is not working
                              // margin/layout-props not working

                              mr={8}
                            ></Icon>
                          </Box>
                          <Text
                            bold
                            color="green.700"
                            // fontSize={{ base: "md", lg: "lg" }}
                          >
                            11%
                          </Text>
                        </HStack>
                      </HStack>
                      <Center bg="blueGray.50" p={4} mt="auto">
                        <HStack alignItems="center">
                          <Text
                            fontWeight={600}
                            color="coolGray.600"
                            // fontSize={{ base: "md", lg: "lg" }}
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
                    {/* </VStack> */}
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
                      space={4}
                      pt={6}
                    >
                      {/* <VStack space={4} pt={6}> */}
                      <Text
                        bold
                        color="coolGray.500"
                        mx={6}
                        // fontSize={{ base: "md", lg: "lg" }}
                      >
                        Received
                      </Text>
                      <HStack
                        alignItems="flex-end"
                        mx={6}
                        mb={4}
                        flexWrap="wrap"
                      >
                        <Text
                          // fontSize={{ base: "2xl", xl: "3xl" }}
                          fontSize="xl"
                          // lineHeight={6}
                          mr={3}
                        >
                          $540.44
                        </Text>
                        <HStack mb="2px">
                          <Box
                            _web={{
                              mb: "-3px",
                            }}
                          >
                            <Icon
                              as={
                                <VectorIcons.Ionicons
                                  name="arrow-up-outline"
                                  // style={{ marginBottom: "-3px" }}
                                />
                              }
                              size="xs"
                              color="green.500"
                              //Todo:
                              // -3 as number is not working
                              // margin/layout-props not working

                              mr={8}
                            ></Icon>
                          </Box>
                          <Text
                            bold
                            color="green.700"
                            // fontSize={{ base: "md", lg: "lg" }}
                          >
                            5%
                          </Text>
                        </HStack>
                      </HStack>
                      {/* </VStack> */}
                      <Center bg="blueGray.50" p={4} mt="auto">
                        <HStack alignItems="center">
                          <Text
                            fontWeight={600}
                            color="coolGray.600"
                            // fontSize={{ base: "md", lg: "lg" }}
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
                      pt={6}
                      space={4}
                    >
                      {/* <VStack pt={6} space={4} flex={1}> */}
                      <Text
                        bold
                        color="coolGray.500"
                        mx={6}
                        // fontSize={{ base: "md", lg: "lg" }}
                      >
                        Outstanding
                      </Text>
                      <HStack
                        alignItems="flex-end"
                        mx={6}
                        mb={4}
                        flexWrap="wrap"
                      >
                        <Text
                          // fontSize={{ base: "2xl", xl: "3xl" }}
                          fontSize="xl"
                          // lineHeight={6}
                          mr={3}
                        >
                          $300.00
                        </Text>
                        <HStack mb="2px">
                          <Box
                            _web={{
                              mb: "-3px",
                            }}
                          >
                            <Icon
                              as={
                                <VectorIcons.Ionicons name="arrow-down-outline" />
                              }
                              size="xs"
                              color="red.600"
                              //Todo:
                              // -3 as number is not working
                              // margin/layout-props not working
                              mb={3}
                              mr={8}
                            ></Icon>
                          </Box>
                          <Text
                            bold
                            color="orange.900"
                            // fontSize={{ base: "md", lg: "lg" }}
                          >
                            8%
                          </Text>
                        </HStack>
                      </HStack>
                      {/* </VStack> */}
                      <Center bg="blueGray.50" p={4}>
                        <HStack alignItems="center">
                          <Text
                            fontWeight={600}
                            color="coolGray.600"
                            // fontSize={{ base: "md", lg: "lg" }}
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
                  </Tooltip>
                </Stack>
              </Box>
              <Table />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Stack>
  );
}
