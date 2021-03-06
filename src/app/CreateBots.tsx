import React, { useState } from "react";
import { useAppDispatch } from "../store/Hooks";

import { Stack, Button, Heading, Box, VStack, useToast } from "native-base";
import { StyleSheet } from "react-native";
import { HeaderBar, Input } from "../components/common";

import { createBot } from "../store/slice/BotSlice";

import moment from "moment";

const CreateBots = (props: any) => {
  const { navigation } = props;
  const toast = useToast();

  const dispatch = useAppDispatch();

  const [botName, setBotName] = useState("");
  const [botPurpose, setBotPurpose] = useState("");

  const goBack = () => {
    navigation.goBack();
  };

  const generateID = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleCreateBot = () => {
    let randID = generateID();
    let data = {
      id: randID,
      avatar: "https://avatars.dicebear.com/api/bottts/" + randID + ".png",
      name: botName,
      purpose: botPurpose,
      createdAt: moment().format("MM/DD/YYYY"),
      updatedAt: moment().format("MM/DD/YYYY"),
    };
    dispatch(createBot(data));
    toast.show({
      description: "Bot has been added",
    });

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
            Create New Bot
          </Heading>
          <VStack p={2} space={2}>
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
              onPress={() => handleCreateBot()}
            >
              Create Bot
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

export default CreateBots;
