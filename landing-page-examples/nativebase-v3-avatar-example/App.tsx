import React from "react";
import {
  NativeBaseProvider,
  Center,
  Button,
  Box,
  AddIcon,
  Avatar,
  Stack,
  useBreakpointValue,
} from "native-base";
function UseBreakpointValueExample() {
  const isSM = useBreakpointValue({ base: false, sm: true });
  return (
    <Box alignItems="flex-end" p={8}>
      <Avatar.Group
        size={isSM ? "xl" : "lg"}
        max={isSM ? 5 : 3}
        borderWidth={4}
      >
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg",
          }}
        >
          SS
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
          }}
        >
          AK
        </Avatar>

        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
          }}
        >
          MR
        </Avatar>
        <Avatar
          source={{
            uri: "https://nishan.dev/avatar.jpeg",
          }}
        >
          NB
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
          }}
        >
          RS
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          }}
        >
          AJ
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          }}
        >
          GG
        </Avatar>
        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          }}
        >
          MM
        </Avatar>

        <Avatar
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
          }}
        >
          VK
        </Avatar>
      </Avatar.Group>
      <Button size="sm" mt={4} mr={1} endIcon={<AddIcon size={3} />}>
        Add Member
      </Button>
    </Box>
  );
}
export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} p={4}>
        <UseBreakpointValueExample />
      </Center>
    </NativeBaseProvider>
  );
}
