import React from "react";
import {
  Box,
  HStack,
  Heading,
  Text,
  Icon,
  VStack,
  Button,
  Divider,
  IconButton,
  useDisclose,
  Actionsheet,
  useBreakpointValue,
  SearchIcon,
  Fab,
} from "nb-beavr";
import { Logo } from "../../Icons/Logo";
import * as VectorIcons from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";

export function LeftPanel({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const route = useRoute();
  const activeRouteProps = {
    bg: "slateGray.700",
  };
  const isWeb = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
  });
  // use to control actionsheet modal
  const { isOpen, onOpen, onClose } = useDisclose();

  return isWeb ? (
    <Box w={64} nativeID="1234" h="100%" bg="slateGray.600" overflow="hidden">
      <HStack alignItems="center" space="xs" ml={7} my={3}>
        <Logo size="lg" />
        <Heading fontSize="lg" color="white">
          NativeBase
        </Heading>
      </HStack>
      {/* <VStack px={8} space="xs" my={3}>
        <Logo size="xl" />
        <Heading fontSize="xl" color="white">
          NativeBase
        </Heading>
      </VStack> */}
      <VStack px={8} py={4} bg="slateGray.700" space={2}>
        <Text color="coolGray.400" fontWeight={500}>
          Your Balance
        </Text>
        <Text color="coolGray.200" fontSize="xl">
          $2,550.40
        </Text>
        <Button
          pl={0}
          p={0}
          variant="unstyled"
          justifyContent="flex-start"
          _text={{
            color: "coolGray.400",
            fontWeight: 500,
          }}
          endIcon={
            <Icon
              size="md"
              color="coolGray.200"
              as={<VectorIcons.MaterialCommunityIcons name="chevron-right" />}
            />
          }
        >
          View summary
        </Button>
      </VStack>
      <Button.Group direction="column" variant="unstyled" p={4}>
        <Button
          _hover={{ bg: "slateGray.700" }}
          _text={{ color: "coolGray.200", fontSize: "sm" }}
          startIcon={
            <Icon
              as={<VectorIcons.AntDesign name="home" />}
              mr={4}
              color={
                route.name === "dashboard" ? "coolGray.200" : "coolGray.400"
              }
              size="xs"
            />
          }
          justifyContent="flex-start"
          _pressed={{ bg: "coolGray.800" }}
          {...(route.name === "dashboard" && activeRouteProps)}
          onPress={() => navigation.navigate("dashboard")}
        >
          Dashboard
        </Button>
        <Button
          _hover={{ bg: "slateGray.700" }}
          _text={{ color: "coolGray.200", fontSize: "sm" }}
          startIcon={
            <Icon
              as={<VectorIcons.Entypo name="text-document" />}
              mr={4}
              color={
                route.name === "invoices" ? "coolGray.200" : "coolGray.400"
              }
              size="xs"
            />
          }
          justifyContent="flex-start"
          _pressed={{ bg: "coolGray.800" }}
          {...(route.name === "invoices" && activeRouteProps)}
        >
          Invoices
        </Button>
        <Button
          _hover={{ bg: "slateGray.700" }}
          _text={{ color: "coolGray.200", fontSize: "sm" }}
          startIcon={
            <Icon
              as={<VectorIcons.FontAwesome name="balance-scale" />}
              size="xs"
              mr={4}
              color={
                route.name === "balances" ? "coolGray.200" : "coolGray.400"
              }
              size="xs"
            />
          }
          // py="18px"
          justifyContent="flex-start"
          _pressed={{ bg: "coolGray.800" }}
          {...(route.name === "balances" && activeRouteProps)}
        >
          Balances
        </Button>
        <Button
          _hover={{ bg: "slateGray.700" }}
          _text={{ color: "coolGray.200", fontSize: "sm" }}
          startIcon={
            <Icon
              as={<VectorIcons.Ionicons name="person-circle-outline" />}
              mr={4}
              color={
                route.name === "recipients" ? "coolGray.200" : "coolGray.400"
              }
              size="xs"
            />
          }
          justifyContent="flex-start"
          _pressed={{ bg: "coolGray.800" }}
          {...(route.name === "recipients" && activeRouteProps)}
        >
          Recipients
        </Button>
        <Button
          _hover={{ bg: "slateGray.700" }}
          _text={{ color: "coolGray.200", fontSize: "sm" }}
          startIcon={
            <Icon
              as={
                <VectorIcons.MaterialCommunityIcons name="file-chart-outline" />
              }
              mr={4}
              color={route.name === "reports" ? "coolGray.200" : "coolGray.400"}
              size="xs"
            />
          }
          justifyContent="flex-start"
          _pressed={{ bg: "coolGray.800" }}
          {...(route.name === "reports" && activeRouteProps)}
        >
          Reports
        </Button>
      </Button.Group>
      <Divider bg="slateGray.700" size={3} />
      <Button.Group direction="column" variant="unstyled" p={4}>
        <Button
          _hover={{ bg: "slateGray.700" }}
          _text={{ color: "coolGray.200", fontSize: "sm" }}
          startIcon={
            <Icon
              as={<VectorIcons.Ionicons name="settings-outline" />}
              mr={4}
              color={route.name === "setting" ? "coolGray.200" : "coolGray.400"}
              size="xs"
            />
          }
          justifyContent="flex-start"
          _pressed={{ bg: "coolGray.800" }}
          {...(route.name === "setting" && activeRouteProps)}
          onPress={() => navigation.navigate("setting")}
        >
          Settings
        </Button>
        <Button
          _hover={{ bg: "slateGray.700" }}
          _text={{ color: "coolGray.200", fontSize: "sm" }}
          startIcon={
            <Icon
              as={<VectorIcons.Feather name="help-circle" />}
              mr={4}
              color={route.name === "help" ? "coolGray.200" : "coolGray.400"}
              size="xs"
            />
          }
          justifyContent="flex-start"
          _pressed={{ bg: "coolGray.800" }}
          {...(route.name === "help" && activeRouteProps)}
        >
          Help
        </Button>
      </Button.Group>
    </Box>
  ) : (
    <>
      <Fab
        colorScheme="coolGray"
        icon={
          <Icon
            color="coolGray.200"
            as={<VectorIcons.MaterialCommunityIcons name="menu" />}
            size="sm"
          />
        }
        onPress={onOpen}
        p={3}
        _web={{ position: "fixed" }}
      />
      <Box
        w="100%"
        py={4}
        bg="coolGray.600"
        overflow="hidden"
        justifyContent="center"
      >
        <HStack alignItems="center" mx={2} space={3}>
          <HStack alignItems="center" space="sm" ml={2}>
            <Logo size={12} />
            <Heading color="white" size="sm">
              NativeBase
            </Heading>
          </HStack>

          <IconButton
            ml="auto"
            icon={<SearchIcon size="sm" color="blueGray.400" />}
            colorScheme="blueGray"
            _pressed={{ bg: "transparent" }}
            p={0}
            onPress={() => navigation.navigate("search")}
          />
          <IconButton
            icon={
              <Icon
                as={<VectorIcons.Feather name="bell" />}
                color="blueGray.400"
                size="sm"
              />
            }
            _pressed={{ bg: "transparent" }}
            colorScheme="coolGray"
            onPress={() => navigation.navigate("notifications")}
          />
        </HStack>
      </Box>
      <Actionsheet isOpen={isOpen} onClose={onClose} my={0}>
        <Actionsheet.Content bg="coolGray.600" my={0} alignItems="flex-end">
          <ScrollView style={{ width: "100%" }}>
            <VStack space={2}>
              {/*
               */}
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "dashboard"
                        ? "coolGray.200"
                        : "coolGray.400"
                    }
                    as={<VectorIcons.AntDesign name="home" />}
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
                {...(route.name === "dashboard" && activeRouteProps)}
                onPress={() => {
                  navigation.navigate("dashboard");
                  onClose();
                }}
              >
                Dashboard
              </Actionsheet.Item>
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "invoices"
                        ? "coolGray.200"
                        : "coolGray.400"
                    }
                    as={<VectorIcons.Entypo name="text-document" />}
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
                {...(route.name === "invoices" && activeRouteProps)}
              >
                Invoices
              </Actionsheet.Item>
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "balances"
                        ? "coolGray.200"
                        : "coolGray.400"
                    }
                    as={<VectorIcons.FontAwesome name="balance-scale" />}
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
                {...(route.name === "balances" && activeRouteProps)}
              >
                Balances
              </Actionsheet.Item>
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "recipients"
                        ? "coolGray.200"
                        : "coolGray.400"
                    }
                    as={<VectorIcons.Ionicons name="person-circle-outline" />}
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
                {...(route.name === "recipients" && activeRouteProps)}
              >
                Recipients
              </Actionsheet.Item>
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "reports" ? "coolGray.200" : "coolGray.400"
                    }
                    as={
                      <VectorIcons.MaterialCommunityIcons name="file-chart-outline" />
                    }
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
                {...(route.name === "reports" && activeRouteProps)}
              >
                Reports
              </Actionsheet.Item>
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "setting" ? "coolGray.200" : "coolGray.400"
                    }
                    as={<VectorIcons.Ionicons name="settings-outline" />}
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
                {...(route.name === "setting" && activeRouteProps)}
                onPress={() => {
                  navigation.navigate("setting");
                  onClose();
                }}
              >
                Settings
              </Actionsheet.Item>
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "help" ? "coolGray.200" : "coolGray.400"
                    }
                    as={<VectorIcons.Feather name="help-circle" />}
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
                {...(route.name === "help" && activeRouteProps)}
              >
                Help
              </Actionsheet.Item>
              <Actionsheet.Item
                _text={{ color: "coolGray.200", fontSize: "md" }}
                startIcon={
                  <Icon
                    mr={2}
                    size="md"
                    color={
                      route.name === "help" ? "coolGray.200" : "coolGray.400"
                    }
                    as={<VectorIcons.MaterialIcons name="logout" />}
                  />
                }
                _pressed={{ bg: "coolGray.800" }}
              >
                Log out
              </Actionsheet.Item>
            </VStack>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}
