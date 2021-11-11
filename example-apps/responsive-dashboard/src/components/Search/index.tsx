import React from "react";
import {
  SearchIcon,
  Input,
  Modal,
  Text,
  VStack,
  Pressable,
  HStack,
  Icon,
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { data } from "../../screens/search";
import { MaterialIcons } from "@expo/vector-icons";

export function SearchModal(props: any) {
  const initialRef = React.useRef(null);
  return (
    <Modal
      size="xl"
      isOpen={props.isOpen}
      onClose={props.onClose}
      initialFocusRef={initialRef}
    >
      <Modal.Content overflow="hidden" p={0} pt={6}>
        <Modal.Header px="5" borderBottomWidth="0" py="0">
          <Input
            pl="4"
            size="lg"
            placeholder="Search"
            ref={initialRef}
            InputLeftElement={
              <SearchIcon size="sm" color="trueGray.400" ml={3} />
            }
          />
        </Modal.Header>
        <Modal.Body px={3}>
          <ScrollView>
            <VStack space={3}>
              {data.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    borderRadius="xs"
                    p="3"
                    _hover={{ bg: "indigo.50" }}
                    _focus={{
                      bg: "indigo.50",
                      borderColor: "transparent",
                    }}
                    rounded="md"
                    //@ts-ignore
                    _web={{ style: { outline: "none" } }}
                  >
                    {({ isHovered, isFocused }: any) => (
                      <HStack space={3}>
                        <Icon
                          as={MaterialIcons}
                          name="access-time"
                          size="sm"
                          color={
                            isHovered || isFocused
                              ? "indigo.500"
                              : "trueGray.400"
                          }
                        />
                        <Text>{item.title}</Text>
                      </HStack>
                    )}
                  </Pressable>
                );
              })}
            </VStack>
          </ScrollView>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
