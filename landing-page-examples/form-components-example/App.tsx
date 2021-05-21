import React from "react";
import {
  NativeBaseProvider,
  Center,
  FormControl,
  Button,
  Input,
  Box,
  VStack,
  Select,
  Radio,
  Checkbox,
  Divider,
  HStack,
  Heading,
  AddIcon,
  Stack,
} from "native-base";
import { customTheme } from "./theme";
export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Center flex={1} p={4}>
        <Stack
          direction={{ base: "column", md: "row" }}
          rounded="xl"
          shadow={2}
          overflow="hidden"
        >
          <Box flex={{ base: "none", md: 1 }} bg="blueGray.50" p={8}>
            <Heading>Events</Heading>
          </Box>
          <Box flex={{ base: "none", md: 2 }} alignItems="flex-end" p={8}>
            <VStack alignItems="flex-end" space={4}>
              <FormControl>
                <FormControl.Label>What's your event called?</FormControl.Label>
                <Input placeholder="Enter Your Event's Name" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Location</FormControl.Label>
                <Select placeholder="Choose your location">
                  <Select.Item value="mumbai" label="Mumbai" />
                  <Select.Item value="delhi" label="Delhi" />
                  <Select.Item value="bengaluru" label="Bengaluru" />
                </Select>
              </FormControl>
              <FormControl>
                <FormControl.Label>When is your Event?</FormControl.Label>
                <Radio.Group nativeID="patani" name="day_night">
                  <VStack space={2}>
                    <Radio value="day">Day</Radio>
                    <Radio value="night">Night</Radio>
                  </VStack>
                </Radio.Group>
              </FormControl>
              <Divider />
              <Checkbox value="tnc" alignItems="flex-start" mb={4}>
                By Agreeing to this you confirm that you are the organizer of
                the event and have read our T&C
              </Checkbox>
            </VStack>
            <Button endIcon={<AddIcon size={3} />}>Create Event</Button>
          </Box>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}
