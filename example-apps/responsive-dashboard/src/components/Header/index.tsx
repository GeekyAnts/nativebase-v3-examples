import React from "react";
import {
  HStack,
  Heading,
  IconButton,
  SearchIcon,
  Modal,
  Input,
  VStack,
  Menu,
  Icon,
  Divider,
  Button,
  Text,
  Alert,
  useDisclose,
  useBreakpointValue,
} from "nb-beavr";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

type Proptype = {
  title: string;
};

export function Header(props: Proptype) {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  const { isOpen, onOpen, onClose } = useDisclose();
  const initialRef = React.useRef(null);
  return (
    <>
      <HStack alignItems="center" space={4} mt={7} mb={{ base: 4, lg: 7 }}>
        <Heading flex={1} size={!isLargeScreen ? "sm" : "md"}>
          {props.title}
        </Heading>

        {isLargeScreen ? (
          <HStack space={3}>
            <IconButton
              icon={<SearchIcon size={6} color="blueGray.500" />}
              colorScheme="coolGray"
              _hover={{ bg: "transparent" }}
              _pressed={{ bg: "transparent" }}
              onPress={onOpen}
            />

            <Menu
              mr={6}
              // should updated in next version
              shouldOverlapWithTrigger={false}
              placement="bottom right"
              trigger={(triggerProps: any) => {
                return (
                  <IconButton
                    icon={
                      <Icon
                        as={<Feather name="bell" size={18} />}
                        color="blueGray.500"
                        size="sm"
                      />
                    }
                    {...triggerProps}
                    colorScheme="coolGray"
                    _pressed={{ bg: "transparent" }}
                    _hover={{ bg: "transparent" }}
                  />
                );
              }}
            >
              <Menu.Item>Menu item 1</Menu.Item>
              <Menu.Item>Menu item 2</Menu.Item>
              <Menu.Item isDisabled>Menu item 3</Menu.Item>
              <Divider />
              <Menu.Item>Menu item 4</Menu.Item>
            </Menu>
            <Button
              colorScheme="blueGray"
              bg="blueGray.200"
              _pressed={{ bg: "blueGray.300" }}
              //   Todo: Add user defined variants to typings as well.
              // @ts-ignore
              variant="subtle"
            >
              Log out
            </Button>
          </HStack>
        ) : (
          <></>
        )}
      </HStack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        initialFocusRef={initialRef}
      >
        <Modal.Content overflow="hidden" p={0} pt={6}>
          <Modal.Header px={3} pt={4}>
            <Input
              ref={initialRef}
              InputLeftElement={
                <SearchIcon size="sm" color="blueGray.300" ml={2} />
              }
              color="blueGray.500"
            ></Input>
          </Modal.Header>

          <Modal.Body px={3}>
            <ScrollView>
              <VStack space={3}>
                <Text bold fontSize="md">
                  Recent
                </Text>
                {/* Replace Alerts with List.Item 
													Add CloseButton in each and maintaint the hover color with _focus color of Input
													*/}
                <Alert colorScheme="coolGray" shadow={2}>
                  <Alert.Description p={2} fontSize="md">
                    Redeem coins to donate Oxygen
                  </Alert.Description>
                </Alert>

                <Alert colorScheme="coolGray" shadow={2}>
                  <Alert.Description p={2} fontSize="md">
                    CRED redeem option
                  </Alert.Description>
                </Alert>

                <Alert colorScheme="coolGray" shadow={2}>
                  <Alert.Description p={2} fontSize="md">
                    Report a bug
                  </Alert.Description>
                </Alert>

                <Alert colorScheme="coolGray" shadow={2}>
                  <Alert.Description p={2} fontSize="md">
                    Link with AmazonPay
                  </Alert.Description>
                </Alert>
              </VStack>
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
