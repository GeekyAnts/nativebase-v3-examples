import "react-native-gesture-handler";
import React from "react";
import {
  Box,
  HStack,
  Text,
  Icon,
  VStack,
  Link,
  Badge,
  IconButton,
  Hidden,
} from "native-base";
import { Feather } from "@expo/vector-icons";

export const Table = () => {
  const tableData = [
    {
      date: "Dec 25",
      desc: "Payment to Cameron Williamson",
      amount: "$854.08",
      status: "Success",
      color: "success",
    },
    {
      date: "March 05",
      desc: "Payment to Jane Cooper",
      amount: "$328.85",
      status: "Processing",
      color: "lightBlue",
    },
    {
      date: "Dec 25",
      desc: "Payment to Eleanor Pena",
      amount: "$490.51",
      status: "Failed",
      color: "danger",
    },
    {
      date: "March 05",
      desc: "Payment to Bessie Cooper",
      amount: "$293.01",
      status: "Processing",
      color: "lightBlue",
    },
    {
      date: "Dec 25",
      desc: "Payment to Marvin McKinney",
      amount: "$275.43",
      status: "Processing",
      color: "lightBlue",
    },
    {
      date: "March 05",
      desc: "Payment to Leslie Alexander",
      amount: "$219.78",
      status: "Success",
      color: "success",
    },
  ];

  function TableHeader() {
    return (
      <HStack justifyContent="space-between">
        <Text bold fontSize="lg">
          Recent Activity
        </Text>
        <Link
          _text={{
            textDecorationLine: "none",
            color: "indigo.700",
            fontWeight: "medium",
          }}
        >
          View all
        </Link>
      </HStack>
    );
  }
  return (
    <Box mt={10}>
      <Hidden till="lg">
        <VStack
          space="8"
          bg="warmGray.50"
          p="6"
          borderWidth="1"
          borderColor="coolGray.200"
          borderRadius="10"
        >
          <TableHeader />
          <VStack space="5">
            {tableData.map((data, index) => {
              return (
                <HStack flex="1" justifyContent="space-between" space="16">
                  <Text flex="1" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text
                    flex="2"
                    //@ts-ignore
                    flexShrink="0"
                    fontWeight="medium"
                  >
                    {data.desc}
                  </Text>
                  <Text
                    flex="1"
                    //@ts-ignore
                    flexShrink="0"
                    fontWeight="medium"
                  >
                    {data.amount}
                  </Text>
                  <Box flex="1.5">
                    <Badge colorScheme={data.color} borderRadius="10">
                      {data.status}
                    </Badge>
                  </Box>
                  <IconButton
                    icon={<Icon as={Feather} name="more-horizontal" />}
                    _icon={{ color: "trueGray.400", size: "6" }}
                  />
                </HStack>
              );
            })}
          </VStack>
        </VStack>
      </Hidden>
      <Hidden from="lg">
        <VStack space="3">
          <TableHeader />
          <VStack space="3">
            {tableData.map((data, index) => {
              return (
                <VStack
                  bg="warmGray.50"
                  p="4"
                  borderWidth="1"
                  borderColor="coolGray.200"
                  borderRadius="10"
                  space="1"
                >
                  <Text fontWeight="medium" fontSize="md">
                    {data.desc}
                  </Text>
                  <VStack space="3">
                    <Text fontSize="xs">{data.date}</Text>
                    <Text>{data.amount}</Text>
                    <Badge colorScheme={data.color} borderRadius="10" w="32">
                      {data.status}
                    </Badge>
                  </VStack>
                </VStack>
              );
            })}
          </VStack>
        </VStack>
      </Hidden>
    </Box>
  );
};
