import React from "react";
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Code,
} from "native-base";
import { StyleSheet } from "react-native";
import NativeBaseIcon from "../assets/svg/NativeBaseIcon";
import { BackHeader } from "../components/common";

const CreateBots = () => {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Heading size="lg">Settings</Heading>
      </VStack>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", height: "75%" },
});

export default CreateBots;
