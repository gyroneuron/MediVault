import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./Navigator/AuthNavigator";
import HomeNavigator from "./Navigator/HomeNavigator";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AuthNavigator"
      >
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
