import React, { useEffect } from "react";
import {
  Heading,
  useColorMode,
  Button,
  Input,
  Center,
  useColorModeValue,
  FormControl,
  NativeBaseProvider,
  Stack,
  Spacer,
  ArrowForwardIcon,
  SunIcon,
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
    <Center flex={1} bg={useColorModeValue("blueGray.50", "blueGray.800")}>
      <Stack space={4}>
        <FormControl>
          <Input placeholder="Chat Room ID" />
        </FormControl>
        <Button colorScheme="green" endIcon={<ArrowForwardIcon size={6} />}>
          Join In
        </Button>
      </Stack>
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
