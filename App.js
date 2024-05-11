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
import DoctorLogin from "./screens/DoctorLogin";
import DoctorHome from "./screens/DoctorHome";
import DoctorForgot from "./screens/DoctorForgot";
import DoctorRegister from "./screens/DoctorRegister";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="DoctorRegister"
          component={DoctorRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorForgot"
          component={DoctorForgot}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorHome"
          component={DoctorHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorLogin"
          component={DoctorLogin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
