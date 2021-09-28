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
  Icon,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function App() {
  const createItems = [
    {
      title: "Post",
      caption: "Share a post on your newsfeed",
      icon: (
        <Icon
          as={MaterialIcons}
          name="post-add"
          size={5}
          color="coolGray.500"
        />
      ),
    },
    {
      title: "Room",
      caption: "Video chat with anyone",
      icon: (
        <Icon
          as={MaterialCommunityIcons}
          name="video-outline"
          size={5}
          color="coolGray.500"
        />
      ),
    },
  ];

  return (
    <NativeBaseProvider isSSR>
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
                icon={<Icon as={AntDesign} name="plus" color="red.300" />}
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
                    <Circle rounded="full" bg="coolGray.100">
                      <Circle size={10} bg="coolGray.100">
                        {item.icon}
                      </Circle>
                    </Circle>
                    <VStack space={1}>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color="coolGray.600"
                      >
                        {item.title}
                      </Text>
                      <Text fontSize="xs" color="coolGray.600">
                        {item.caption}
                      </Text>
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
