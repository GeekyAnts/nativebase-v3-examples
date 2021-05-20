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
  SimpleGrid,
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
            <Heading size="sm">Recent Activity</Heading>
            <Link
              _text={{
                // @ts-ignore
                fontSize: `${isWeb ? "20px" : "15px"}`,
                fontWeight: 500,
              }}
            >
              View all activities
            </Link>
          </Stack>
          <ScrollView
            style={{
              overflow: "visible",
              backgroundColor: "transparent",
            }}
          >
            <HStack
              mt={10}
              rounded={12}
              bg="white"
              shadow={4}
              overflow="hidden"
            >
              <VStack flex={{ lg: 1 }}>
                <Text bold bg="coolGray.100" p={4}>
                  CLIENT / INVOICE
                </Text>
                <Text bg="white" p={4}>
                  Sept 28, 2019
                </Text>
                <Text bg="coolGray.100" p={4}>
                  Sept 28, 2019
                </Text>
                <Text bg="white" p={4}>
                  Sept 28, 2019
                </Text>
              </VStack>
              <VStack flex={2}>
                <Text bold bg="coolGray.100" p={4}>
                  TRANSACTION
                </Text>
                <Text bg="white" p={4}>
                  Payment to Molly Sanders
                </Text>
                <Text bg="coolGray.100" p={4}>
                  Payment to John Doe
                </Text>
                <Text bg="white" p={4}>
                  Payment to MacGillan Mcinsky
                </Text>
              </VStack>
              <VStack flex={{ lg: 1 }}>
                <Text bold bg="coolGray.100" p={4}>
                  STATUS
                </Text>
                <Box
                  bg="white"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Badge
                    colorScheme="success"
                    bg="green.100"
                    borderRadius="pill"
                    ml={4}
                    px={3}
                    py={2}
                    _text={{
                      fontSize: "md",
                      fontWeight: 500,
                      lineHeight: "md",
                    }}
                  >
                    Success
                  </Badge>
                </Box>
                <Box
                  bg="coolGray.100"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Badge
                    colorScheme="primary"
                    borderRadius="pill"
                    ml={4}
                    px={3}
                    py={2}
                    _text={{
                      fontSize: "md",
                      fontWeight: 500,
                      lineHeight: "md",
                    }}
                  >
                    Processing
                  </Badge>
                </Box>
                <Box
                  bg="white"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Badge
                    colorScheme="danger"
                    borderRadius="pill"
                    ml={4}
                    px={3}
                    py={1}
                    _text={{ fontSize: "md", fontWeight: 500 }}
                  >
                    Failed
                  </Badge>
                </Box>
              </VStack>
              <VStack flex={{ lg: 1 }}>
                <Text bold bg="coolGray.100" p={4}>
                  AMOUNT
                </Text>
                <HStack bg="white" p={4}>
                  <Text mr={1}>$20,000</Text>
                  <Text color="coolGray.400">USD</Text>
                </HStack>
                <HStack bg="coolGray.100" p={4}>
                  <Text mr={1}>$15,000</Text>
                  <Text color="coolGray.400">USD</Text>
                </HStack>
                <HStack bg="white" p={4}>
                  <Text mr={1}>$30,000</Text>
                  <Text color="coolGray.400">USD</Text>
                </HStack>
              </VStack>
              <VStack>
                <Box
                  bg="coolGray.100"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                ></Box>
                <Box
                  bg="white"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Box mr={4}>
                    <Icon
                      size="sm"
                      color="coolGray.400"
                      bg="white"
                      as={<VectorIcons.Entypo name="dots-three-vertical" />}
                    />
                  </Box>
                </Box>
                <Box
                  bg="coolGray.100"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Box mr={4}>
                    <Icon
                      size="sm"
                      color="coolGray.400"
                      bg="white"
                      as={<VectorIcons.Entypo name="dots-three-vertical" />}
                    />
                  </Box>
                </Box>
                <Box
                  bg="white"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  <Box mr={4}>
                    <Icon
                      size="sm"
                      color="coolGray.400"
                      bg="white"
                      as={<VectorIcons.Entypo name="dots-three-vertical" />}
                    />
                  </Box>
                </Box>
              </VStack>
            </HStack>
          </ScrollView>
        </>
      ) : (
        <>
          <Heading size="sm" mb={6}>
            Recent Activity
          </Heading>
          <VStack space={6}>
            <VStack
              space={3}
              p={4}
              borderRadius="md"
              shadow={3}
              overflow="hidden"
              rounded={12}
              bg="white"
            >
              <Text bold fontSize="lg">
                Payment to Molly Sanders
              </Text>
              <Text fontSize="sm" color="coolGray.500" mt={-2}>
                Sept 28, 2019
              </Text>
              <HStack>
                <Text bold fontSize="xl" mr={1}>
                  $20,000
                </Text>
                <Text bold fontSize="xl" color="coolGray.400">
                  USD
                </Text>
              </HStack>

              <Box alignItems="center" flexWrap="wrap" flexDirection="row">
                <Badge
                  colorScheme="success"
                  bg="green.100"
                  borderRadius="pill"
                  _text={{ fontSize: "md", fontWeight: 500 }}
                >
                  Success
                </Badge>
              </Box>
            </VStack>
            <VStack
              space={3}
              p={4}
              borderRadius="md"
              shadow={3}
              overflow="hidden"
              rounded={12}
              bg="white"
            >
              <Text bold fontSize="lg">
                Payment to John Doe
              </Text>
              <Text fontSize="sm" color="coolGray.500" mt={-2}>
                Sept 28, 2019
              </Text>
              <HStack>
                <Text bold fontSize="xl" mr={1}>
                  $15,000
                </Text>
                <Text bold fontSize="xl" color="coolGray.400">
                  USD
                </Text>
              </HStack>

              <Box alignItems="center" flexWrap="wrap" flexDirection="row">
                <Badge
                  colorScheme="primary"
                  borderRadius="pill"
                  _text={{ fontSize: "md", fontWeight: 500 }}
                >
                  Processing
                </Badge>
              </Box>
            </VStack>

            <VStack
              space={3}
              p={4}
              borderRadius="md"
              shadow={3}
              overflow="hidden"
              rounded={12}
              bg="white"
            >
              <Text bold fontSize="lg">
                Payment to MacGillan Mcinsky
              </Text>
              <Text fontSize="sm" color="coolGray.500" mt={-2}>
                Sept 28, 2019
              </Text>
              <HStack>
                <Text bold fontSize="xl" mr={1}>
                  $30,000
                </Text>
                <Text bold fontSize="xl" color="coolGray.400">
                  USD
                </Text>
              </HStack>

              <Box alignItems="center" flexWrap="wrap" flexDirection="row">
                <Badge
                  colorScheme="danger"
                  borderRadius="pill"
                  _text={{ fontSize: "md", fontWeight: 500 }}
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
