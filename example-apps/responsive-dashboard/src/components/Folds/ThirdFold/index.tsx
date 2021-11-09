import React from "react";
import {
  HStack,
  Icon,
  VStack,
  Stack,
  Tooltip,
  Text,
  Box,
  Badge,
  Card,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export function ThirdFold(props: any) {
  const cardData = [
    {
      percentage: 11,
      profit: true,
      amount: "$1,247.80",
      label: "Total sent",
      tooltipLabel: "Total money sent this week",
    },
    {
      percentage: 5,
      profit: true,
      amount: "$540.44",
      label: "Total received",
      tooltipLabel: "Total money received this week",
    },
    {
      percentage: 8,
      profit: false,
      amount: "$300.00",
      label: "Outstanding",
      tooltipLabel: "Total money sent this week",
    },
  ];
  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
        space="3"
      >
        {cardData.map((data: any) => {
          return (
            <Tooltip label={data.tooltipLabel} openDelay={500} placement="top">
              <Card
                flex={{ base: "1", lg: "-1" }}
                borderRadius={12}
                overflow="hidden"
                p={5}
                w={{ base: "100%", lg: "56" }}
                shadow="none"
                borderWidth="1"
                borderColor="coolGray.200"
                bg="warmGray.50"
              >
                <VStack space={2}>
                  <HStack space={2} alignItems="center">
                    <Badge
                      borderColor={data.profit ? "success.500" : "danger.500"}
                      boxSize="5"
                      rounded="full"
                      bg={data.profit ? "success.100" : "danger.100"}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Icon
                        as={Ionicons}
                        name={data.profit ? "arrow-up" : "arrow-down"}
                        size={3}
                        color={data.profit ? "success.500" : "danger.500"}
                      />
                    </Badge>
                    <Text color={data.profit ? "success.500" : "danger.500"}>
                      {data.percentage}%
                    </Text>
                  </HStack>
                  <Text fontWeight="bold" fontSize="lg">
                    {data.amount}
                  </Text>
                  <Text>{data.label}</Text>
                </VStack>
              </Card>
            </Tooltip>
          );
        })}
      </Stack>
    </Box>
  );
}
