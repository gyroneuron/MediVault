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
import * as Svg from "react-native-svg";
import ForgotSvg from '../assets/svg/forgot-person.svg'
import Logo from "../assets/svg/Logo.svg";
import { supabase } from "../lib/supabase";

const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;

const ForgotScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    try {
      // Navigate to the ResetPassword screen
      navigation.navigate('ResetPassword');
      
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) {
        // Handle errors (e.g., invalid email, rate limiting)
        console.error('Error resetting password:', error);
        if (error.message) {
          alert(`An error occurred: ${error.message}`);
        } else {
          alert('An error occurred. Please try again later.');
        }
      } else {
        alert('A password reset link has been sent to your email address.');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred. Please try again later.');
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
          <View style={styles.middleContainer}>
          <ForgotSvg width={Width * 0.75} height={Height * 0.4} />
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.subHeading}>Reset Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              value={email}
            />

            <TouchableOpacity
              disabled={loading}
              onPress={handleForgotPassword} // removed passing email argument
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                {loading ? "Loading..." : "Send Link"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.loginText}>
            Remember your password?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  topContainer: {
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
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
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
  loginText: {
    fontSize: 16,
    marginTop: 20,
  },
  loginLink: {
    color: "#007bff",
  },
});
