import "react-native-gesture-handler";
import React from "react";
import {
  Box,
  HStack,
  Heading,
  Text,
  Icon,
  VStack,
  Link,
  useBreakpointValue,
  Badge,
  Stack,
  Divider,
  IconButton,
} from "nb-beavr";
import { Logo } from "../../Icons/Logo";
import * as VectorIcons from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { fontWeight } from "styled-system";
import { ScrollView } from "react-native-gesture-handler";

export const Table = () => {
  const isWeb = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  return (
    <Box mt={10} px={{ base: 6, lg: 16 }}>
      {isWeb ? (
        <>
          <Stack
            direction={isWeb ? "row" : "column"}
            justifyContent={{ base: "flex-start", lg: "space-between" }}
            alignItems={{ base: "flex-start", lg: "flex-end" }}
          >
            <Heading size="xs">Recent Activity</Heading>
            <Link
              _text={{
                // @ts-ignore
                fontSize: "sm",
                fontWeight: 500,
              }}
            >
              View all activities
            </Link>
          </Stack>
          <Box overflow="visible" bg="transparent">
            <VStack
              divider={<Divider />}
              mt={6}
              rounded={12}
              bg="white"
              shadow={4}
              overflow="hidden"
            >
              <HStack bg="coolGray.100" alignItems="center">
                <Text bold bg="coolGray.100" p={4} w="20%">
                  CLIENT / INVOICE
                </Text>
                <Text bold bg="coolGray.100" p={4} w="35%">
                  TRANSACTION
                </Text>
                <Text bold bg="coolGray.100" p={4} w="15%">
                  STATUS
                </Text>
                <Text bold bg="coolGray.100" p={4} w="25%">
                  AMOUNT
                </Text>
                <Text bold bg="coolGray.100" p={4} w="5%"></Text>
              </HStack>
              <HStack alignItems="center">
                <Text bg="white" p={4} w="20%">
                  Sept 28, 2019
                </Text>
                <Text bg="white" p={4} w="35%">
                  Payment to Molly Sanders
                </Text>
                <Box
                  w="15%"
                  bg="white"
                  p={4}
                  alignItems="flex-start"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Badge
                    colorScheme="success"
                    bg="green.100"
                    borderRadius="pill"
                    px={2}
                    py={1}
                    _text={{
                      fontWeight: 500,
                      lineHeight: "md",
                      textAlign: "center",
                    }}
                  >
                    Success
                  </Badge>
                </Box>
                <HStack w="25%" bg="white" p={4}>
                  <Text mr={1} wordBreak="break-all">
                    $20,0000
                  </Text>
                  <Text color="coolGray.400">USD</Text>
                </HStack>
                <Box
                  w="5%"
                  bg="white"
                  // alignItems="center"
                  justifyContent="center"
                  p={4}
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Box mr={4}>
                    <IconButton
                      colorScheme="coolGray"
                      icon={
                        <Icon
                          as={<VectorIcons.Entypo name="dots-three-vertical" />}
                          size="xs"
                          color="coolGray.400"
                        />
                      }
                      size={2}
                      _hover={{ bg: "transparent" }}
                      _pressed={{ bg: "transparent", color: "transparent" }}
                    />
                  </Box>
                </Box>
              </HStack>
              <HStack bg="coolGray.100" alignItems="center">
                <Text bg="coolGray.100" p={4} w="20%">
                  Sept 28, 2019
                </Text>
                <Text bg="coolGray.100" p={4} w="35%">
                  Payment to John Doe
                </Text>
                <Box
                  w="15%"
                  bg="coolGray.100"
                  p={4}
                  alignItems="flex-start"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Badge
                    // colorScheme="primary"
                    bg="blue.100"
                    borderRadius="pill"
                    px={2}
                    py={1}
                    _text={{
                      fontWeight: 500,
                      lineHeight: "md",
                    }}
                  >
                    Processing
                  </Badge>
                </Box>
                <HStack w="25%" bg="coolGray.100" p={4}>
                  <Text mr={1}>$15,000</Text>
                  <Text color="coolGray.400">USD</Text>
                </HStack>
                <Box
                  w="5%"
                  bg="coolGray.100"
                  justifyContent="center"
                  p={4}
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Box mr={4}>
                    <IconButton
                      colorScheme="coolGray"
                      icon={
                        <Icon
                          as={<VectorIcons.Entypo name="dots-three-vertical" />}
                          size="xs"
                          color="coolGray.400"
                        />
                      }
                      size={2}
                      _hover={{ bg: "transparent" }}
                      _pressed={{ bg: "transparent", color: "transparent" }}
                    />
                  </Box>
                </Box>
              </HStack>
              <HStack alignItems="center">
                <Text bg="white" p={4} w="20%">
                  Sept 28, 2019
                </Text>
                <Text bg="white" p={4} w="35%">
                  Payment to MacGillan Mcinsky
                </Text>
                <Box
                  w="15%"
                  bg="white"
                  p={4}
                  alignItems="flex-start"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Badge
                    colorScheme="danger"
                    borderRadius="pill"
                    px={2}
                    py={1}
                    _text={{
                      fontWeight: 500,
                      lineHeight: "md",
                    }}
                  >
                    Failed
                  </Badge>
                </Box>
                <HStack w="25%" bg="white" p={4}>
                  <Text mr={1}>$30,000</Text>
                  <Text color="coolGray.400">USD</Text>
                </HStack>
                <Box
                  w="5%"
                  bg="white"
                  justifyContent="center"
                  p={4}
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Box mr={4}>
                    <IconButton
                      // bg="white"
                      colorScheme="coolGray"
                      icon={
                        <Icon
                          as={<VectorIcons.Entypo name="dots-three-vertical" />}
                          size="xs"
                          color="coolGray.400"
                        />
                      }
                      size={2}
                      _hover={{ bg: "transparent" }}
                      _pressed={{
                        bg: "transparent",
                        color: "transparent",
                        shadow: "",
                      }}
                    />
                  </Box>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </>
      ) : (
        <>
          <Heading size="xs" mb={6}>
            Recent Activity
          </Heading>
          <VStack space={6}>
            <VStack
              space={5}
              p={4}
              borderRadius="md"
              shadow={3}
              overflow="hidden"
              rounded={12}
              bg="white"
            >
              <Text bold fontSize="md">
                Payment to Molly Sanders
              </Text>
              <Text fontSize="sm" color="coolGray.500" mt={-2}>
                Sept 28, 2019
              </Text>
              <HStack>
                <Text bold fontSize="lg" mr={1}>
                  $20,000
                </Text>
                <Text bold fontSize="lg" color="coolGray.400">
                  USD
                </Text>
              </HStack>

              <Box alignItems="center" flexWrap="wrap" flexDirection="row">
                <Badge
                  px={2}
                  py={1}
                  colorScheme="success"
                  bg="green.100"
                  borderRadius="pill"
                  _text={{ fontWeight: 500 }}
                >
                  Success
                </Badge>
              </Box>
            </VStack>
            <VStack
              space={5}
              p={4}
              borderRadius="md"
              shadow={3}
              overflow="hidden"
              rounded={12}
              bg="white"
            >
              <Text bold fontSize="md">
                Payment to John Doe
              </Text>
              <Text fontSize="sm" color="coolGray.500" mt={-2}>
                Sept 28, 2019
              </Text>
              <HStack>
                <Text bold fontSize="lg" mr={1}>
                  $15,000
                </Text>
                <Text bold fontSize="lg" color="coolGray.400">
                  USD
                </Text>
              </HStack>

              <Box alignItems="center" flexWrap="wrap" flexDirection="row">
                <Badge
                  px={2}
                  py={1}
                  bg="blue.100"
                  borderRadius="pill"
                  _text={{ fontWeight: 500 }}
                >
                  Processing
                </Badge>
              </Box>
            </VStack>

            <VStack
              space={5}
              p={4}
              borderRadius="md"
              shadow={3}
              overflow="hidden"
              rounded={12}
              bg="white"
            >
              <Text bold fontSize="md">
                Payment to MacGillan Mcinsky
              </Text>
              <Text fontSize="sm" color="coolGray.500" mt={-2}>
                Sept 28, 2019
              </Text>
              <HStack>
                <Text bold fontSize="lg" mr={1}>
                  $30,000
                </Text>
                <Text bold fontSize="lg" color="coolGray.400">
                  USD
                </Text>
              </HStack>

              <Box alignItems="center" flexWrap="wrap" flexDirection="row">
                <Badge
                  px={2}
                  py={1}
                  colorScheme="danger"
                  borderRadius="pill"
                  _text={{ fontWeight: 500 }}
                >
                  Failed
                </Badge>
              </Box>
            </VStack>
          </VStack>
          <Link
            _text={{
              // @ts-ignore
              fontSize: `${isWeb ? "20px" : "15px"}`,
              fontWeight: 500,
            }}
            mt={6}
          >
            View all activities
          </Link>
        </>
      )}
    </Box>
  );
};
