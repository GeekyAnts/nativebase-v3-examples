import React, { Children } from "react";
import {
  NativeBaseProvider,
  Center,
  VStack,
  Menu,
  Circle,
  IconButton,
  HStack,
  Text,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function App() {
  const createItems = [
    {
      title: "Post",
      caption: "Share a post on your newsfeed",
      icon: <MaterialIcons name="post-add" size={24} color="black" />,
    },
    {
      title: "Room",
      caption: "Video chat with anyone",
      icon: <Ionicons name="videocam" size={18} color="black" />,
    },
  ];

  return (
    <NativeBaseProvider>
      <Center _web={{ h: "100vh" }} bg="white">
        <Menu
          placement="bottom"
          defaultIsOpen
          offset={5}
          closeOnSelect={false}
          trigger={(triggerProps) => {
            return (
              <IconButton
                mt={-40}
                colorScheme="primary"
                variant="solid"
                rounded="full"
                height="12"
                width="12"
                icon={<AntDesign name="plus" size={24} color="white" />}
                {...triggerProps}
              />
            );
          }}
        >
          <Menu.Group rounded="lg" title="Create">
            {createItems.map((item, idx) => {
              return (
                <Menu.Item
                  // _focus={{ bg: "red.500" }}
                  // _hover={{ bg: "blue.500" }}
                  // _pressed={{ bg: "pink.500" }}
                  pr={20}
                  py={2}
                  key={idx}
                >
                  <HStack space={4} alignItems="center">
                    <Circle rounded="full" bg="gray.200">
                      <Circle size={10} bg="gray.200">
                        {item.icon}
                      </Circle>
                    </Circle>
                    <VStack space={1}>
                      <Text fontSize="sm" fontWeight="bold">
                        {item.title}
                      </Text>
                      <Text fontSize="xs">{item.caption}</Text>
                    </VStack>
                  </HStack>
                </Menu.Item>
              );
            })}
          </Menu.Group>
        </Menu>
      </Center>
    </NativeBaseProvider>
  );
}
