import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {HStack, Box} from "native-base";
import {IconFont} from "../common";
import {useNavigation} from "@react-navigation/native";

type BackHeaderProps = {};

const BackHeader = ({}: BackHeaderProps) => {
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  return (
    <Box safeAreaTop shadow={"9"}>
      <HStack p={3} justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <TouchableOpacity onPress={back}>
            <IconFont name={"arrow-back"} />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  );
};

export default BackHeader;
