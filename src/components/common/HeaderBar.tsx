import React from "react";
import { Text, Box, HStack } from "native-base";

type HeaderProps = {
  type: String;
  title: String;
  showPrefix?: boolean;
  showSuffix?: boolean;
  prefix?: any;
  suffix?: any;
};

const HeaderBar = (props: HeaderProps) => {
  const { title, type, showPrefix, showSuffix, prefix, suffix } = props;
  const _renderDashboard = () => (
    <Box safeAreaTop bg={"#246fa5"}>
      <HStack
        bg={"#246fa5"}
        px="4"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack w={"100%"} alignItems="center" justifyContent={"space-between"}>
          {showPrefix && prefix}
          <Text color="white" fontSize="20" fontWeight="bold">
            {title}
          </Text>
          {showSuffix && suffix}
        </HStack>
      </HStack>
    </Box>
  );

  const _renderDefault = () => (
    <Box safeAreaTop bg={"#FFF"}>
      <HStack
        bg={"#FFF"}
        px="4"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <HStack alignItems="center">
          {showPrefix && prefix}
          <Text color="white" fontSize="20" fontWeight="bold">
            {title}
          </Text>
          {showSuffix && suffix}
        </HStack>
      </HStack>
    </Box>
  );

  return (
    <Box>
      {type === "dashboard" && _renderDashboard()}
      {type === "sub" && _renderDefault()}
    </Box>
  );
};

export default HeaderBar;
