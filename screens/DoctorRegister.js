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
import RegisterSvg from "../assets/svg/SignUp-person.svg";
import Logo from "../assets/svg/Logo.svg";
import { supabase } from '../lib/supabase';

const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;





const RegisterScreen = ({ navigation }) => {

  function generateUniqueID() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const random = Math.random().toString(36).substr(2, 5); // Generate random string
  
    // Combine timestamp and random string to create unique ID
    const uniqueID = `${timestamp}-${random}`;
  
    return uniqueID;
  }
  
  // Example usage:
  const uniqueID = generateUniqueID();
  console.log(uniqueID); // Output: <timestamp>-<random>


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    
    // Generate unique ID
    const uniqueID = generateUniqueID();
  
    // Sign up user with Supabase
    const { user, error } = await supabase.auth.signUp({ email, password });
  
    if (error) {
      Alert.alert(error.message);
      setLoading(false);
    } else {
      // Insert user data including unique ID into Supabase database
      const { data, error: insertError } = await supabase
        .from('users')
        .insert([{ email, unique_id: uniqueID }]);
      
      if (insertError) {
        Alert.alert(insertError.message);
        setLoading(false);
      } else {
        Alert.alert('SignUp Successful!\n Please Confirm your email');
        setLoading(false);
        navigation.navigate('Login');
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
      >
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            <RegisterSvg width={Width * 0.7} height={Height * 0.4} />
          </Animatable.View>

          <Animatable.View
            animation="fadeInUp"
            style={styles.bottomContainer}
          >
            <Text style={styles.subHeading}>Sign Up</Text>

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
              disabled={loading}
              onPress={signUpWithEmail}
              style={styles.button}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#ffffff",
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.Text
            animation="fadeIn"
            style={styles.loginText}
          >
            Already a user?
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}> Login</Text>
            </TouchableOpacity>
          </Animatable.Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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

  buttonContainer: {
    borderRadius: 14,
    width: Width * 0.85,
    height: Height * 0.05,
    backgroundColor: "#CCDBFD",
    alignItems: "center",
    justifyContent: "center",
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