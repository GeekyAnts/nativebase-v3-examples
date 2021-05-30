import React, { Children } from "react";
import {
  NativeBaseProvider,
  Center,
  FormControl,
  Button,
  Input,
  Box,
  VStack,
  Select,
  Radio,
  Checkbox,
  Divider,
  HStack,
  Heading,
  Text,
  Stack,
} from "native-base";
export default function App() {
  const plans: any = [
    { name: "Premium", price: "759", duration: 9, color: "violet" },
    { name: "VIP", price: "450", duration: 4, color: "green" },
    { name: "Gold", price: "120", duration: 1, color: "amber" },
  ];
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box p={8}>
          <Button.Group
            // @ts-ignore
            direction={{ base: "column", sm: "row" }}
            variant="unstyled"
            space={2}
          >
            {plans.map((plan: any, ind: string | number | null | undefined) => {
              return (
                <Button
                  key={ind}
                  justifyContent="flex-start"
                  p={6}
                  rounded="lg"
                  shadow={0}
                  bg={`${plan.color}.500`}
                  _hover={{ bg: `${plan.color}.600` }}
                  _focus={{ bg: `${plan.color}.600`, shadow: 3 }}
                  _pressed={{ shadow: 3 }}
                >
                  <Box>
                    <Heading size="xs" color="white" mb={4}>
                      {plan.name}
                    </Heading>
                    <Text color="white" fontWeight="semibold">
                      {`$${plan.price} | `}
                      <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize="xs"
                      >{`${
                        plan.duration === 1
                          ? plan.duration + " Month"
                          : plan.duration + " Months"
                      }`}</Text>
                    </Text>
                  </Box>
                </Button>
              );
            })}
          </Button.Group>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
