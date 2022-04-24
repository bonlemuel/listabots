import React from "react";
import { Platform, StatusBar } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/** Screens */
import { HomeMain, SettingsMain } from "../app";
import { IconFont } from "../components/common";

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabIcon = ({ name = "", color = "" }) => {
  return <IconFont name={iconSetter(name)} style={{ color: color }} />;
};

const iconSetter = (route: string) => {
  switch (route) {
    case "Home":
      return "dashboard";
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
  backgroundColor: "#323232",
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
  backgroundColor: "#323232",
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
        backgroundColor="#f48039"
        barStyle={"dark-content"}
        showHideTransition={"slide"}
        hidden={false}
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route: { name } }) => ({
          tabBarIcon: ({ color }) => <TabIcon name={name} color={color} />,
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#d3d3d3",
          headerShown: false,
          tabBarStyle: TabStyle,
        })}
      >
        <Tab.Screen name="Home" component={HomeNav} />
        <Tab.Screen name="Settings" component={SettingsNav} />
      </Tab.Navigator>
    </>
  );
};

const AppNavigation = () => {
  return TabNavigation();
};

export default AppNavigation;
