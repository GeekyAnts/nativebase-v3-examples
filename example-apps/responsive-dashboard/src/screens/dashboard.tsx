import React from "react";
import { Hidden, VStack, Heading, Input, SearchIcon } from "native-base";
import { Table } from "../components/Table";
import type { StackNavigationProp } from "@react-navigation/stack";
import { FirstFold } from "../components/Folds/FirstFold";
import { ThirdFold } from "../components/Folds/ThirdFold";
import { SecondFold } from "../components/Folds/SecondFold";

import { Layout } from "../components/Layout";

function MobileDashboardHeader({ title, navigation }: any) {
  return (
    <VStack space="2">
      <Heading
        fontSize="xl"
        flex={1}
        fontWeight="semibold"
        color="coolGray.800"
      >
        {title}
      </Heading>
    </VStack>
  );
}
export function Dashboard({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <Layout navigation={navigation}>
      <Hidden from="md">
        <MobileDashboardHeader navigation={navigation} />
      </Hidden>
      <FirstFold />
      <Hidden from="md">
        <Input
          mt="5"
          pl="5"
          bg="warmGray.50"
          //@ts-ignore
          flexGrow="0"
          size="lg"
          placeholder="Search"
          onFocus={() => {
            navigation.navigate("search");
          }}
          InputRightElement={<SearchIcon size={5} mr="4" color="muted.400" />}
        />
      </Hidden>
      <SecondFold />
      <ThirdFold />
      <Table />
    </Layout>
  );
}
