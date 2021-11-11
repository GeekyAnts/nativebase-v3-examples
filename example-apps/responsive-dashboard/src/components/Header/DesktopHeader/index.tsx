import React from "react";
import {
  HStack,
  Heading,
  SearchIcon,
  Input,
  Box,
  useDisclose,
} from "native-base";
import { NotificationButton } from "../components/NotificationButton";
import { SearchModal } from "../../../components/Search";

export function DesktopHeader(props: any) {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <HStack
        alignItems="center"
        space={4}
        py="5"
        px="8"
        bg="white"
        borderBottomWidth="1px"
        borderBottomColor="coolGray.200"
      >
        <Heading
          fontSize="xl"
          flex={1}
          fontWeight="semibold"
          color="coolGray.800"
        >
          {props.title}
        </Heading>

        <HStack space={6}>
          <Input
            pl="5"
            // borderRadius="full"
            maxW="96"
            size="lg"
            w={{ lg: 80, xl: 96 }}
            placeholder="Search"
            //@ts-ignore
            onClick={onOpen}
            onKeyPress={onOpen}
            InputRightElement={<SearchIcon size={5} mr="4" color="muted.400" />}
          />
          <Box alignSelf="center">
            <NotificationButton />
          </Box>
        </HStack>
      </HStack>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
