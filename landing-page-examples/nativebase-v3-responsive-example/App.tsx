import React from "react";
import {
  NativeBaseProvider,
  Center,
  Box,
  VStack,
  HStack,
  Stack,
  Skeleton,
} from "native-base";
export default function App() {
  const loop = [0, 1, 2];
  return (
    <NativeBaseProvider>
      <Center flex={1} p={4}>
        <Stack
          m={4}
          w="100%"
          h="100%"
          direction={{ base: "column", md: "row" }}
          rounded="xl"
          shadow={2}
          overflow="hidden"
        >
          <VStack
            space={{ base: 2, md: 4 }}
            flex={{ base: "none", md: 1 }}
            p={4}
            bg="blueGray.500"
          >
            <Skeleton
              mt={2}
              height={16}
              variant="rect"
              startColor="blueGray.600"
              endColor="blueGray.700"
            />
            <VStack display={{ base: "none", md: "flex" }} space={6} mt={8}>
              {loop.map(() => {
                return (
                  <Skeleton
                    rounded={8}
                    height={10}
                    variant="rect"
                    startColor="blueGray.600"
                    endColor="blueGray.700"
                  />
                );
              })}
            </VStack>
          </VStack>
          <Box flex={{ base: 1, md: 3 }} bg="blueGray.50">
            <VStack px={8} my={6} space={6}>
              <Skeleton
                height={16}
                variant="rect"
                startColor="blueGray.100"
                endColor="blueGray.200"
              />
              <HStack mt={4} space={4}>
                <Skeleton
                  size={20}
                  variant="circle"
                  startColor="blueGray.100"
                  endColor="blueGray.200"
                />
                <VStack flex={1}>
                  <Skeleton
                    height={10}
                    variant="text"
                    startColor="blueGray.100"
                    endColor="blueGray.200"
                  />
                  <Skeleton
                    height={10}
                    variant="text"
                    startColor="blueGray.100"
                    endColor="blueGray.200"
                  />
                  <Skeleton
                    height={10}
                    variant="text"
                    startColor="blueGray.100"
                    endColor="blueGray.200"
                  />
                </VStack>
              </HStack>
              <Skeleton
                height={20}
                variant="rect"
                startColor="blueGray.100"
                endColor="blueGray.200"
              />
            </VStack>
          </Box>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}
