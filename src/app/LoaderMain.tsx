import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { VStack, Image } from "native-base";
import { Animation } from "../components/common";
import { Text } from "../components/common";
import { ListaBotsLogo } from "../assets/png";
import { VERSION, BUILD } from "@env";
import { RobotAnim } from "../assets/animations";

const LoaderMain = (props: any) => {
  const { navigation } = props;

  useEffect(() => {
    setTimeout(() => navTo("AppNav"), 3000);
  }, []);

  const navTo = (path = "") => {
    navigation.replace(path);
  };

  return (
    <VStack flex={1} bg={"#FFF"} alignItems={"center"} justifyContent="space-around">
      <View style={styles.animContainer}>
        <Animation source={RobotAnim} autoPlay={true} loop={true} />
      </View>
      <VStack
        style={styles.titleContainer}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        <Image
          source={ListaBotsLogo}
          resizeMode={"contain"}
          alt="lista-logo"
          size="2xl"
        />
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  animContainer: { width: "100%", height: "75%" },
  titleContainer: { width: "100%", height: "50%" },
});

export default LoaderMain;
