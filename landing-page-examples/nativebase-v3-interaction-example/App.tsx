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
      <Center flex={1} p={4}>
        <Stack rounded="xl" shadow={2} overflow="hidden">
          <Box bg="blueGray.100" px={8} py={6}>
            <Heading size="sm">Choose your Subsription</Heading>
          </Box>
          <Box p={8}>
            <Button.Group
              // @ts-ignore
              direction={{ base: "column", md: "row" }}
              variant="unstyled"
              space={4}
            >
              {plans.map(
                (plan: any, ind: string | number | null | undefined) => {
                  return (
                    <Button
                      key={ind}
                      justifyContent="flex-start"
                      p={8}
                      rounded="xl"
                      shadow={7}
                      bg={`${plan.color}.500`}
                      _hover={{ bg: `${plan.color}.600` }}
                      _focus={{ bg: `${plan.color}.600`, shadow: 3 }}
                      _pressed={{ shadow: 3 }}
                    >
                      <Box _text={{ color: "white", fontWeight: "semibold" }}>
                        <Heading size="sm" color="white" mb={4}>
                          {plan.name}
                        </Heading>
                        {`${plan.price}$ | ${
                          plan.duration === 1
                            ? plan.duration + " Month"
                            : plan.duration + " Months"
                        }`}
                      </Box>
                    </Button>
                  );
                }
              )}
            </Button.Group>
          </Box>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}
