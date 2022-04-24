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
  Box,
  ScrollView,
} from "native-base";
import { StyleSheet } from "react-native";
import { HeaderBar, HeaderText, DashCards, Button } from "../components/common";
import { WINDOW_HEIGHT } from "../utils/helpers/Dimensions";

const HomeMain = (props: any) => {
  const { navigation } = props;

  const navTo = (path: String) => {
    navigation.navigate(path);
  };

  const _renderHome = () => {
    return (
      <Box bg={"#fffae8"}>
        <HeaderBar type={"dashboard"} title={"Home"} />
      </Box>
    );
  };

  return _renderHome();
};

const styles = StyleSheet.create({
  container: { width: "100%", height: "75%" },
});

export default HomeMain;
