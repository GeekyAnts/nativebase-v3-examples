import React from "react";
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  Center,
  NativeBaseProvider,
  HStack,
  Tooltip,
  Icon,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const Example = () => {
  const { isOpen, onToggle } = useDisclose(true);
  return (
    <Box>
      <Box alignItems="center" minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
        >
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="location-pin"
                _dark={{ color: "warmGray.50" }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{ color: "warmGray.50" }}
                size="6"
                name="microphone"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                _dark={{ color: "warmGray.50" }}
                size="6"
                name="video"
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                size="6"
                name="photo-library"
                _dark={{ color: "warmGray.50" }}
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{ color: "warmGray.50" }}
            />
          }
        />
        <Tooltip
          placement="right"
          offset={8}
          isOpen={true}
          hasArrow={true}
          label="Click Me!"
          openDelay={500}
          bg="blueGray.300"
          arrowSize={16}
          rounded="md"
          _text={{
            fontSize: 16,
            bold: true,
            p: 1,
            color: "blueGray.600",
          }}
        >
          <Box></Box>
        </Tooltip>
      </HStack>
    </Box>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <Center _web={{ h: "100vh" }} d="flex">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
}
