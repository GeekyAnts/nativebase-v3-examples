import React from "react";
import {
  NativeBaseProvider,
  Center,
  FormControl,
  Button,
  Input,
  Box,
  VStack,
  Radio,
  Checkbox,
  Divider,
  AddIcon,
} from "native-base";
import { formExampleTheme } from "../theme";
export default function App() {
  return (
    <NativeBaseProvider theme={formExampleTheme}>
      <Center _web={{h:"100vh"}} p={4}>
        <Box alignItems="flex-end" p={8}>
          <VStack alignItems="flex-end" space={5}>
            <FormControl>
              <FormControl.Label mb={3}>
                What is your event called?
              </FormControl.Label>
              <Input placeholder="Event Name" />
            </FormControl>
            <FormControl>
              <FormControl.Label mb={3}>
                When is it happening?
              </FormControl.Label>
              <Radio.Group nativeID="patani" name="day_night">
                <VStack space={3}>
                  <Radio value="day">Daytime</Radio>
                  <Radio value="night">Night-time</Radio>
                </VStack>
              </Radio.Group>
            </FormControl>
            <Divider />
            <Checkbox size="sm" value="tnc" justifyContent="center" mb={4}>
              I agree to the Terms and conditions
            </Checkbox>
          </VStack>
          <Button mt={2} endIcon={<AddIcon size={3} />}>
            Create Event
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
