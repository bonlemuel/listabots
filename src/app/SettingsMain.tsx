import React from "react";
import { Box, Stack, HStack } from "native-base";
import { StyleSheet, Linking, TouchableOpacity } from "react-native";
import { HeaderBar, Text } from "../components/common";

const SettingsMain = () => {
  const openLink = (link) => {
    Linking.openURL(link);
  };

  const _renderSettings = () => {
    return (
      <Box bg={"#fff"} h={"100%"}>
        <HeaderBar type={"dashboard"} title={"Settings"} />
        <Box>
          <HStack
            borderTopWidth={0.2}
            borderBottomWidth={0.2}
            borderTopColor={"#d3d3d3"}
            borderBottomColor={"#d3d3d3"}
            justifyContent={"space-between"}
            p={4}
          >
            <Text fontSize="md" fontWeight={400} color={"#000"} label={"Version"} />
            <Text fontSize="md" fontWeight={400} color={"#000"} label={"1.0.0"} />
          </HStack>
          <HStack
            borderTopWidth={0.2}
            borderBottomWidth={0.2}
            borderTopColor={"#d3d3d3"}
            borderBottomColor={"#d3d3d3"}
            justifyContent={"space-between"}
            p={4}
          >
            <Text fontSize="md" fontWeight={400} color={"#000"} label={"Build"} />
            <Text fontSize="md" fontWeight={400} color={"#000"} label={"1.0.0"} />
          </HStack>
          <TouchableOpacity onPress={() => openLink("https://linktr.ee/bonlemuel")}>
            <HStack
              borderTopWidth={0.2}
              borderBottomWidth={0.2}
              borderTopColor={"#d3d3d3"}
              borderBottomColor={"#d3d3d3"}
              p={4}
            >
              <Text
                fontSize="md"
                fontWeight={400}
                color={"#000"}
                label={"About the Developer"}
              />
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://github.com/bonlemuel/listabots")}
          >
            <HStack
              borderTopWidth={0.2}
              borderBottomWidth={0.2}
              borderTopColor={"#d3d3d3"}
              borderBottomColor={"#d3d3d3"}
              p={4}
            >
              <Text
                fontSize="md"
                fontWeight={400}
                color={"#000"}
                label={"Code Repository"}
              />
            </HStack>
          </TouchableOpacity>
        </Box>
      </Box>
    );
  };

  return _renderSettings();
};

const styles = StyleSheet.create({
  container: { width: "100%", height: "75%" },
});

export default SettingsMain;
