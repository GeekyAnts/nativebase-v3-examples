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
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const Example = () => {
  const { isOpen, onToggle } = useDisclose(true);
  return (
    <Box>
      <Box alignItems="center" pr={5} minH={220}>
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
            mb={4}
            variant="solid"
            bg="indigo.400"
            colorScheme="indigo"
            rounded="full"
            icon={<MaterialIcons size={24} name="location-pin" color="white" />}
          />
          <IconButton
            mb={4}
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            rounded="full"
            icon={
              <MaterialCommunityIcons
                size={24}
                name="microphone"
                color="white"
              />
            }
          />
          <IconButton
            mb={4}
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            rounded="full"
            icon={
              <MaterialCommunityIcons size={24} name="video" color="white" />
            }
          />
          <IconButton
            mb={4}
            variant="solid"
            bg="red.400"
            colorScheme="red"
            rounded="full"
            icon={
              <MaterialIcons size={24} name="photo-library" color="white" />
            }
          />
        </Stagger>
      </Box>
      <HStack space={4} alignItems="center">
        <IconButton
          variant="solid"
          rounded="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <MaterialCommunityIcons
              size={24}
              name="dots-horizontal"
              color="white"
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
