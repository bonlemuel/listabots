import React from "react";
import { Platform, StatusBar } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/** Screens */
import { HomeMain, SettingsMain, ViewBot, CreateBots } from "../app";
import { IconFont } from "../components/common";

const MainStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabIcon = ({ name = "", color = "" }) => {
  return <IconFont name={iconSetter(name)} style={{ color: color }} />;
};

const iconSetter = (route: string) => {
  switch (route) {
    case "My Bots":
      return "face";
    case "Settings":
      return "settings";
    default:
      break;
  }
};

const HomeNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeRoot" component={HomeMain} />
    </HomeStack.Navigator>
  );
};

const SettingsNav = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="SettingsRoot" component={SettingsMain} />
    </SettingsStack.Navigator>
  );
};

const TabStyleAndroid = {
  height: 70,
  paddingBottom: 10,
  borderTopColor: "transparent",
  backgroundColor: "#FFF",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  elevation: 5,
};

const TabStyleiOS = {
  height: 100,
  borderTopColor: "transparent",
  backgroundColor: "#FFF",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  elevation: 5,
};

const TabStyle = Platform.OS === "ios" ? TabStyleiOS : TabStyleAndroid;

const TabNavigation = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#246fa5"
        barStyle={"dark-content"}
        showHideTransition={"slide"}
        hidden={false}
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route: { name } }) => ({
          tabBarIcon: ({ color }) => <TabIcon name={name} color={color} />,
          tabBarActiveTintColor: "#246fa5",
          tabBarInactiveTintColor: "#a9a9a9",
          headerShown: false,
          tabBarStyle: TabStyle,
        })}
      >
        <Tab.Screen name="My Bots" component={HomeNav} />
        <Tab.Screen name="Settings" component={SettingsNav} />
      </Tab.Navigator>
    </>
  );
};

const AppNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="HomeRoot" component={TabNavigation} />
      <MainStack.Screen name="CreateBot" component={CreateBots} />
      <MainStack.Screen name="ViewBot" component={ViewBot} />
    </MainStack.Navigator>
  );
};

export default AppNavigation;
