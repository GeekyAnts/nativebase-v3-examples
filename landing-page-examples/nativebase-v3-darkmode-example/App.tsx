import React, { useEffect } from "react";
import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  Center,
  useColorModeValue,
  NativeBaseProvider,
} from "native-base";

function HomeScreen() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const mode = searchParams.get("mode");
    if (mode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <Center flex={1} bg={useColorModeValue("gray.200", "gray.800")}>
      <Heading>I'm a Heading</Heading>
      <Button
        colorScheme={colorMode === "light" ? "blue" : "red"}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change mode
      </Button>
      <HStack space={2} mt={3}>
        <Avatar
          name="Ankur"
          borderWidth={2}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          }}
        />
        <Avatar
          name="Rohit"
          borderWidth={2}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
          }}
        />
      </HStack>
    </Center>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
