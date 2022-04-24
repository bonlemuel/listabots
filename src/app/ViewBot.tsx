import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/Hooks";

import { Stack, Button, Heading, Box, Avatar, Center, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { HeaderBar, Input, Text } from "../components/common";

import { updateBot, selectCurrentBot } from "../store/slice/BotSlice";

import moment from "moment";

const ViewBot = (props: any) => {
  const { navigation } = props;

  const dispatch = useAppDispatch();

  const CURRENT_BOT = useAppSelector(selectCurrentBot);

  const [botName, setBotName] = useState("");
  const [botPurpose, setBotPurpose] = useState("");

  useEffect(() => {
    if (CURRENT_BOT) {
      setBotName(CURRENT_BOT.name);
      setBotPurpose(CURRENT_BOT.purpose);
    }
  }, [CURRENT_BOT]);

  const goBack = () => {
    navigation.goBack();
  };

  const handleUpdateBot = () => {
    let data = {
      id: CURRENT_BOT.id,
      avatar: "https://avatars.dicebear.com/api/bottts/" + CURRENT_BOT.id + ".png",
      name: botName,
      purpose: botPurpose,
      createdAt: CURRENT_BOT.createdAt,
      updatedAt: moment().format("MM/DD/YYYY"),
    };
    dispatch(updateBot(data));

    /**
     * * Go back after bot creation
     */
    goBack();
  };

  const _renderHome = () => {
    return (
      <Box bg={"#fff"} h={"100%"}>
        <HeaderBar
          type={"dashboard"}
          title={""}
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
                bg={"#323232"}
                variant={"unstyled"}
                size="md"
                onPress={() => goBack()}
              >
                Cancel
              </Button>
            </Stack>
          }
        />
        <Box>
          <Heading fontSize="xl" p="4">
            {CURRENT_BOT.name}
          </Heading>
          <VStack p={2} space={2}>
            <Center>
              <Avatar
                background={"#FFF"}
                size={"2xl"}
                source={{ uri: CURRENT_BOT.avatar }}
              />
              <Text
                fontSize="md"
                fontWeight={900}
                color={"#000"}
                label={"Bot ID: " + CURRENT_BOT.id}
              />
              <Text
                fontSize="sm"
                fontWeight={300}
                color={"#000"}
                label={"Last Updated: " + CURRENT_BOT.updatedAt}
              />
            </Center>
            <Input
              type="text"
              placeholder="Name"
              value={botName}
              onChangeText={setBotName}
            />
            <Input
              type="text"
              placeholder="Purpose"
              value={botPurpose}
              onChangeText={setBotPurpose}
            />
            <Button
              mt={5}
              bg={botName === "" || botPurpose === "" ? "#d3d3d3" : null}
              size="lg"
              disabled={botName === "" || botPurpose === ""}
              onPress={() => handleUpdateBot()}
            >
              Update Bot
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  };

  return _renderHome();
};

const styles = StyleSheet.create({
  container: { width: "100%", height: "75%" },
});

export default ViewBot;
