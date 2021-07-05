import React, { useEffect, useCallback, useState } from "react";
import {
  Heading,
  HStack,
  Icon,
  Text,
  Center,
  Stack,
  AspectRatio,
  NativeBaseProvider,
  useColorMode,
  Box,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from "native-base";
import { sampleExampleTheme } from "../theme";

function MoreIcon(props) {
  return (
    <Icon
      size={5}
      data-name="Icon ionic-ios-arrow-dropright"
      xmlns="http://www.w3.org/2000/svg"
      width="25.8"
      height="25.8"
      viewBox="0 0 25.8 25.8"
    >
      <path
        id="Path_432"
        data-name="Path 432"
        d="M14.768,10.331a1.2,1.2,0,0,1,1.693,0l5.917,5.935a1.2,1.2,0,0,1,.037,1.65l-5.83,5.848a1.2,1.2,0,1,1-1.693-1.687l4.955-5.03-5.079-5.03A1.183,1.183,0,0,1,14.768,10.331Z"
        transform="translate(-4.677 -4.154)"
        fill={props.color}
      />
      <path
        id="Path_433"
        data-name="Path 433"
        d="M3.375,16.275a12.9,12.9,0,1,0,12.9-12.9A12.9,12.9,0,0,0,3.375,16.275Zm1.985,0A10.911,10.911,0,0,1,23.99,8.56,10.911,10.911,0,1,1,8.56,23.99,10.822,10.822,0,0,1,5.36,16.275Z"
        transform="translate(-3.375 -3.375)"
        fill={props.color}
      />
    </Icon>
  );
}

function HomeScreen() {
  const ratio = useBreakpointValue({ base: 16 / 9, md: 16 / 7 });

  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const mode = searchParams.get("mode");
    if (mode === "dark") {
      toggleColorMode();
    }
  }, []);
  const options = { month: "long", year: "numeric", day: "numeric" };
  const d = new Date();
  return (
    <Center _web={{ h: "100vh" }} bg={"transparent"}>
      <Box
        shadow={2}
        overflow="hidden"
        rounded="lg"
        w={{ base: 56, sm: 80, md: "md" }}
        bg={useColorModeValue("white", "blueGray.600")}
      >
        <AspectRatio w="100%" ratio={ratio}>
          <Image source={{ uri: "/images/dawki-river.png" }} alt="image base" />
        </AspectRatio>
        <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
          NEWS
        </Text>
        <Stack space={[4, 4, 4]} p={[4, 4, 8]}>
          <Text color="gray.400">{d.toLocaleDateString("en-us", options)}</Text>
          <Heading size={["md", "lg", "md"]}>
            The stunning Dawki River in Meghalaya is so clear that boats appear
            to be floating in the air
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
            With lush green meadows, rivers clear as crystal, pine-covered
            hills, gorgeous waterfalls, mesmerizing lakes and majestic
            forests,Meghalaya is truly a nature lover’s paradise…
          </Text>
        </Stack>
        <HStack space={3} px={[4, 4, 8]} pb={[4, 4, 8]}>
          <MoreIcon color={useColorModeValue("green.600", "green.400")} />
          <Text color={useColorModeValue("green.800", "green.400")}>
            Find out more
          </Text>
        </HStack>
      </Box>
    </Center>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={sampleExampleTheme}>
      <HomeScreen />
    </NativeBaseProvider>
  );
}
