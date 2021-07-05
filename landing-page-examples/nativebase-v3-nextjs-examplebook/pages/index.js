// @generated: @expo/next-adapter@2.1.82
import React from "react";
import {
  Center,
  NativeBaseProvider,
  VStack,
  Heading,
  Link,
  List,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center _web={{ h: "100vh" }}>
        <VStack space={5}>
          <Heading color="coolGray.800">NativeBase Examples</Heading>
          <List.Ordered borderWidth={0}>
            <List.Item>
              <Link href="/animation">Animation</Link>
            </List.Item>
            <List.Item>
              <Link href="/colormode">Color Mode</Link>
            </List.Item>
            <List.Item>
              <Link href="/forms">Forms</Link>
            </List.Item>
            <List.Item>
              <Link href="/interactions">Interactions</Link>
            </List.Item>
            <List.Item>
              <Link href="/sample">Sample App</Link>
            </List.Item>
          </List.Ordered>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
