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
  Box,
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
      <HStack
        alignItems="center"
        space={4}
        mt={2}
        mb={{ base: 4, lg: 2 }}
        py={2}
      >
        <Heading fontSize="xl" flex={1}>
          {props.title}
        </Heading>
        {isLargeScreen ? (
          <HStack space={6}>
            <Box alignSelf="center">
              <IconButton
                // mx={2}
                icon={<SearchIcon size={5} color="blueGray.500" />}
                colorScheme="coolGray"
                _hover={{ bg: "transparent" }}
                _pressed={{ bg: "transparent" }}
                // border={0}
                onPress={onOpen}
                size={4}
              />
            </Box>
            <Box alignSelf="center">
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
                          as={<Feather name="bell" />}
                          color="blueGray.500"
                          size={6}
                        />
                      }
                      {...triggerProps}
                      colorScheme="coolGray"
                      _pressed={{ bg: "transparent", borderColor: "white" }}
                      _hover={{ bg: "transparent" }}
                      // mx={2}
                      size={6}
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
            </Box>
            <Box alignSelf="center">
              <Button
                colorScheme="blueGray"
                bg="blueGray.200"
                _pressed={{ bg: "blueGray.300" }}
                //   Todo: Add user defined variants to typings as well.
                // @ts-ignore
                variant="subtle"
                size="sm"
                style={{ shadowColor: "red" }}
              >
                Log out
              </Button>
            </Box>
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
