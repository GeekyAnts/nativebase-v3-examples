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
  Spacer,
  AddIcon,
  Icon,
} from "native-base";
import { formExampleTheme } from "../theme";

export default function App() {
  return (
    <NativeBaseProvider theme={formExampleTheme} isSSR>
      <Center _web={{ h: "100vh" }} p={4}>
        <Box alignItems="flex-end" p={8}>
          <VStack alignItems="flex-end" space={4}>
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
              <Radio.Group nativeID="patani" name="day_night" size="sm">
                <VStack space={3} size="sm">
                  <Radio value="day">Daytime</Radio>
                  <Radio value="night">Night-time</Radio>
                </VStack>
              </Radio.Group>
            </FormControl>
            <Spacer />
            <Checkbox value="tnc" justifyContent="center" mb={4}>
              I agree to the Terms and conditions
            </Checkbox>
          </VStack>
          <Button mt={2} size="sm" endIcon={<AddIcon size={3} />}>
            Create Event
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
