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
      size={4}
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
          <Image
            source={{ uri: "/images/bangalore-city.jpeg" }}
            alt="image base"
          />
        </AspectRatio>
        <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
          NEWS
        </Text>
        <Stack space={[2, 2, 2]} p={[4, 4, 8]}>
          <Text color="coolGray.600">
            {d.toLocaleDateString("en-us", options)}
          </Text>
          <Heading size={["md", "lg", "md"]} fontWeight="medium">
            The Garden City
          </Heading>
          <Text noOfLines={[4, 4, 2]} color="coolGray.600">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
        </Stack>
        <HStack space={2} px={[4, 4, 8]} pb={[4, 4, 4]} alignItems="center">
          <MoreIcon color={useColorModeValue("emerald.800", "emerald.400")} />
          <Text color={useColorModeValue("emerald.800", "emerald.400")}>
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
