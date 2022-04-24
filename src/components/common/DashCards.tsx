import React from "react";
import {Box, HStack, VStack} from "native-base";
import {Text, IconFont} from "./index";

type HeaderProps = {
  title: String;
  description: String;
  icon?: any;
  value?: any;
  bg?: any;
};

const DashCards = ({title, description, icon, value, bg}: HeaderProps) => (
  <Box bg={"#FFF"} shadow={"9"} bg={bg} p={2} borderRadius={10} width={"48%"}>
    <VStack borderTopWidth={2} borderTopColor={"#FFF"} p={3}>
      <Text
        label={title}
        color={"lightText"}
        textAlign={"left"}
        fontSize={"md"}
        fontWeight={"500"}
      />
      <HStack alignItems={"center"} space={2}>
        <IconFont name={icon} color={"#FFF"} />
        <Text
          label={value}
          color={"lightText"}
          textAlign={"left"}
          fontSize={"3xl"}
          fontWeight={"500"}
        />
      </HStack>
      <Text
        label={description}
        color={"lightText"}
        textAlign={"left"}
        fontSize={"xs"}
        fontWeight={"300"}
      />
    </VStack>
  </Box>
);

export default DashCards;
