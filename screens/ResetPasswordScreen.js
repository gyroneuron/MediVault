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
  Linking // Added Linking import
} from "react-native";
import * as Svg from "react-native-svg";
import ResetSvg from '../assets/svg/Reset-person.svg'
import Logo from "../assets/svg/Logo.svg";
import { supabase } from "../lib/supabase";

const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;



const ResetPasswordScreen = ({ navigation }) => {


  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async () => {
    // Trim the input and check for empty strings
    const trimmedNewPassword = newPassword.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
    
    if (trimmedNewPassword !== trimmedConfirmPassword) {
      Alert.alert("Passwords do not match!");
      return;
    }
    
    setLoading(true); // Set loading state to true
  
    try {
      const session = supabase.auth.session();
      if (!session) throw new Error('Not signed in');
  
      const { user, error } = await supabase.auth.updatePassword({
        password: trimmedNewPassword,
        accessToken: session.access_token,
      });
  
      if (error) {
        console.error('Error updating password:', error);
        alert('An error occurred. Please try again later.');
      } else {
        alert('Password updated successfully!');
        navigation.replace('Login');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Set loading state back to false regardless of success or failure
    }
  };

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
            <ResetSvg width={Width * 0.75} height={Height * 0.4} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.subHeading}>Reset Password</Text>

            <TextInput
              style={styles.input}
              placeholder="New Password"
              onChangeText={(text) => setNewPassword(text)}
              secureTextEntry={true}
              value={newPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm New Password"
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
              value={confirmPassword}
            />
            <TouchableOpacity
              disabled={loading}
              onPress={handleUpdatePassword} // Changed function name
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                {loading ? "Loading..." : "Update Password"}
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

export default ResetPasswordScreen;

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
