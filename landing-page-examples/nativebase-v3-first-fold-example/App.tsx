import React, { useEffect } from "react";
import {
  Heading,
  HStack,
  Icon,
  Text,
  Center,
  Stack,
  AspectRatio,
  NativeBaseProvider,
  Box,
  Image,
  useBreakpointValue,
} from "native-base";
import {theme} from './theme'
import { Path, G } from "react-native-svg";
const HeroImg = require("./assets/dawki-river.png");

function MoreIcon() {
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
        fill="#007852"
      />
      <path
        id="Path_433"
        data-name="Path 433"
        d="M3.375,16.275a12.9,12.9,0,1,0,12.9-12.9A12.9,12.9,0,0,0,3.375,16.275Zm1.985,0A10.911,10.911,0,0,1,23.99,8.56,10.911,10.911,0,1,1,8.56,23.99,10.822,10.822,0,0,1,5.36,16.275Z"
        transform="translate(-3.375 -3.375)"
        fill="#007852"
      />
    </Icon>
  );
}

function HomeScreen() {
  const ratio = useBreakpointValue({base:16/9,md:16/7});
  return (
    <Center flex={1}>
      <Box shadow={2} roundedBottom="lg" w={{ base: 56, sm: 80, md: "md" }}>
        <AspectRatio w="100%" ratio={ratio}>
          <Image
            w={["100%", "100%", "100%"]}
            roundedTop="lg"
            source={HeroImg}
            alt="image base"
          />
        </AspectRatio>
        <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
          NEWS
        </Text>
        <Stack space={[4, 4, 4]} p={[4, 4, 8]}>
          <Text color="gray.400">December 25 2020</Text>
          <Heading size={["md", "lg", "md"]}>
            The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
            Floating in Air
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
            With lush green meadows, rivers clear as crystal, pine-covered
            hills, gorgeous waterfalls, lakes and majestic forests, the
            mesmerizing. Meghalaya is truly a Nature lover’s paradise…
          </Text>
        </Stack>
        <HStack space={3} px={[4, 4, 8]} pb={[4, 4, 8]}>
          <MoreIcon />
          <Text color="green.800">Find out more</Text>
        </HStack>
      </Box>
    </Center>
  );
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <HomeScreen />
    </NativeBaseProvider>
  );
}

// `<Box shadow={2} roundedBottom="lg" w={{ base: 56, sm: 80, md: "md" }}>
//   <AspectRatio w="100%" ratio={16 / 7}>
//     <Image
//       w={["100%", "100%", "100%"]}
//       roundedTop="lg"
//       source={HeroImg}
//       alt="image base"
//     />
//   </AspectRatio>
//   <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
//     NEWS
//   </Text>
//   <Stack space={[4, 4, 4]} p={[4, 4, 8]}>
//     <Text color="gray.400">December 25 2020</Text>
//     <Heading size={["md", "lg", "md"]}>
//       The Stunning Dawki River in Meghalaya is So Clear That Boats Appear
//       Floating in Air
//     </Heading>
//     <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
//       With lush green meadows, rivers clear as crystal, pine-covered hills,
//       gorgeous waterfalls, lakes and majestic forests, the mesmerizing.
//       Meghalaya is truly a Nature lover’s paradise…
//     </Text>
//   </Stack>
//   <HStack space={3} px={[4, 4, 8]} pb={[4, 4, 8]}>
//     <MoreIcon />
//     <Text color="green.800">Find out more</Text>
//   </HStack>
// </Box>;`
