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
        <Box alignItems="flex-end" p={8}>
          <VStack alignItems="flex-end" space={5}>
            <FormControl>
              <FormControl.Label mb={3}>What's your event called?</FormControl.Label>
              <Input placeholder="Event's Name" />
            </FormControl>
            <FormControl>
              <FormControl.Label mb={3}>When is your Event?</FormControl.Label>
              <Radio.Group nativeID="patani" name="day_night">
                <VStack space={3}>
                  <Radio value="day">Day</Radio>
                  <Radio value="night">Night</Radio>
                </VStack>
              </Radio.Group>
            </FormControl>
            <Divider />
            <Checkbox size="sm" value="tnc" justifyContent="center" mb={4}>
              I agree to Terms and conditions
            </Checkbox>
          </VStack>
          <Button mt={2} endIcon={<AddIcon size={3} />}>Create Event</Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
