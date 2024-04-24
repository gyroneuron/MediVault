import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LoginSvg from "../assets/svg/Login-person.svg";
import Logo from "../assets/svg/Logo.svg";
import { supabase } from "../lib/supabase";

const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Wrong Credentials");
    } else {
      setLoading(false);
      Alert.alert("SignIn Successful!");
      navigation.replace("Upload");
    }
  }




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
      >
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Logo width={Width * 0.15} height={100} />
              <Text style={styles.heading}>
                Medi
                <Text style={{ color: "#CCDBFD" }}>Vault</Text>
              </Text>
            </View>
          </View>
          <Animatable.View
            animation="fadeInDown"
            style={styles.middleContainer}
          >
            <LoginSvg width={Width * 0.85} height={Height * 0.4} />
          </Animatable.View>

          <Animatable.View
            animation="fadeInUp"
            style={styles.bottomContainer}
          >
            <Text style={styles.subHeading}>SignIn</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
            />
            <TouchableOpacity
              onPress={signInWithEmail}
              disabled={loading}
              style={styles.button}
            >
              <Text style={{ fontSize: 16, color: "#ffffff" }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgot")}
              style={{ paddingTop: 10 }}
            >
              <Text style={{ color: "#007bff" }}>Forgot your password?</Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.Text
            animation="fadeIn"
            style={styles.registerText}
          >
            Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerLink}> Register</Text>
            </TouchableOpacity>
          </Animatable.Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  topContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  middleContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.8,
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  button: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomContainer: {
    flex: 1,
    backgroundColor: "#E2EAFC",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: Width * 0.85,
    borderRadius: 15,
    padding: "5%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 26,
  },
  registerText: {
    fontSize: 16,
    marginTop: 20,
  },
  registerLink: {
    color: "#007bff",
  },
});
