import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

// import GuestNavigation from "./GuestNavigation";
import AppNavigation from "./AppNavigation";
import { LoaderMain } from "../app";

const Stack = createNativeStackNavigator();

function LoadingNavigator() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#f48039"
        barStyle={"light-content"}
        showHideTransition={"slide"}
        hidden={false}
      />
      <Stack.Navigator
        initialRouteName="LoaderNav"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"LoaderNav"} component={LoaderMain} />
        {/* <Stack.Screen name={"GuestNav"} component={GuestNavigation} /> */}
        <Stack.Screen name={"AppNav"} component={AppNavigation} />
      </Stack.Navigator>
    </>
  );
}

export default LoadingNavigator;
