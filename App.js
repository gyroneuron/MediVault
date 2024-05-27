<<<<<<< HEAD
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./Navigator/AuthNavigator";
import HomeNavigator from "./Navigator/HomeNavigator";
=======
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import StartScreen1 from "./screens/StartScreen1";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgotScreen from "./screens/ForgotScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import UploadScreen from "./screens/UploadScreen";
>>>>>>> b7cd74bd2c43350105cb37efc1a5d976434cce61

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AuthNavigator"
      >
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
=======
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen
          name="Start"
          component={StartScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
>>>>>>> b7cd74bd2c43350105cb37efc1a5d976434cce61
      </Stack.Navigator>
    </NavigationContainer>
  );
}
<<<<<<< HEAD
=======

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
>>>>>>> b7cd74bd2c43350105cb37efc1a5d976434cce61
