import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/Hooks";

import {
  Stack,
  Button,
  Heading,
  Box,
  FlatList,
  HStack,
  Avatar,
  VStack,
  useToast,
  Center,
} from "native-base";
import { StyleSheet, View } from "react-native";
import { HeaderBar, Text, Animation } from "../components/common";

import { deleteBot, selectBot, selectAllBots } from "../store/slice/BotSlice";

import { NoRobotAnim } from "../assets/animations";

const HomeMain = (props: any) => {
  const { navigation } = props;

  const dispatch = useAppDispatch();
  const toast = useToast();

  const BOTS = useAppSelector(selectAllBots);

  useEffect(() => {
    console.debug("BOTS => ", BOTS);
  }, [BOTS]);

  const navTo = (path: String) => {
    navigation.navigate(path);
  };

  const handleDeleteBot = (id: Number) => {
    dispatch(deleteBot({ id: id }));
    toast.show({
      description: "Bot deleted",
    });
  };

  const handleSelectBot = (data: Object) => {
    dispatch(selectBot(data));
    /**
     * * Navigate to Details
     */
    navTo("ViewBot");
  };

  const _renderBot = (data: {
    id: Number;
    avatar: string;
    name: string;
    purpose: string;
    createdAt: string;
  }) => {
    return (
      <HStack
        borderTopWidth={0.2}
        borderBottomWidth={0.2}
        borderTopColor={"#d3d3d3"}
        borderBottomColor={"#d3d3d3"}
        py={4}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <HStack alignItems={"center"} space={4} w={"40%"}>
          <Avatar background={"#FFF"} size={"lg"} source={{ uri: data.avatar }} />
          <VStack>
            <Text fontSize="md" fontWeight={900} color={"#000"} label={data.name} />
            <Text fontSize="sm" fontWeight={300} color={"#000"} label={data.purpose} />
            <Text
              fontSize="xs"
              fontWeight={300}
              color={"#000"}
              label={"Added: " + data.createdAt}
            />
          </VStack>
        </HStack>
        <HStack space={2}>
          <Button
            bg={"#323232"}
            variant={"unstyled"}
            size="md"
            onPress={() => handleSelectBot(data)}
          >
            View
          </Button>
          <Button
            bg={"#323232"}
            variant={"unstyled"}
            size="md"
            onPress={() => handleDeleteBot(data.id)}
          >
            Delete
          </Button>
        </HStack>
      </HStack>
    );
  };

  const _renderHome = () => {
    return (
      <Box bg={"#fff"} h={"100%"}>
        <HeaderBar
          type={"dashboard"}
          title={"My Bots"}
          showSuffix={true}
          suffix={
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              space={4}
            >
              <Button
                bg={"#fff"}
                color={"#FFF"}
                variant={"unstyled"}
                size="sm"
                onPress={() => navTo("CreateBot")}
              >
                Add Bot
              </Button>
            </Stack>
          }
        />
        <Box>
          <Box p={2}>
            <FlatList
              contentContainerStyle={{ height: "100%" }}
              showsVerticalScrollIndicator={false}
              data={BOTS}
              renderItem={({ item }) => _renderBot(item)}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={
                <Center>
                  <View style={styles.animContainer}>
                    <Animation source={NoRobotAnim} autoPlay={true} loop={true} />
                  </View>
                  <Heading fontSize="md" p="4">
                    Oops.. No bots to show :(
                  </Heading>
                  <Button
                    bg={"#246fa5"}
                    color={"#FFF"}
                    variant={"unstyled"}
                    size="md"
                    onPress={() => navTo("CreateBot")}
                  >
                    Add Bot Now
                  </Button>
                </Center>
              }
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return _renderHome();
};

const styles = StyleSheet.create({
  container: { width: "100%", height: "75%" },
  animContainer: { width: "100%", height: "50%" },
});

export default HomeMain;
