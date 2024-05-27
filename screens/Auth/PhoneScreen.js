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
import LoginSvg from "../../assets/svg/Login-person.svg";
import Logo from "../../assets/svg/Logo.svg";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;

const PhoneScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  const signInWithPhoneNumber = async () => {
    try {
      if (phoneNumber.length < 10) {
        return Alert.alert(
          "Invalid Phone Number",
          "Please enter a valid phone number"
        );
      }
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert("Error", "Something went wrong");
    }
  };

  const confirmCode = async () => {
    try{
    const userCredential = await confirm.confirm(code);
    const user = userCredential.user;

    const userDocument = await firestore().collection("users").doc(user.uid).get();

    if (userDocument.exists) {
      navigation.navigate("Home");
    }
    else {
      navigation.navigate("Register", { uid: user.uid });
    } 
  } catch (error) {
    console.log(error);
    Alert.alert("Error", "Invalid code entered");
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

          {!confirm ? (
            <Animatable.View
              animation="fadeInUp"
              style={styles.bottomContainer}
            >
              <Text style={styles.subHeading}>Enter your phone number</Text>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={signInWithPhoneNumber}
              >
                <Text style={{ color: "#ffffff", fontSize: 16 }}>Send Code</Text>
              </TouchableOpacity>
            </Animatable.View>
          ) : (
            <Animatable.View
              animation="fadeInUp"
              style={styles.bottomContainer}
            >
              <Text style={styles.subHeading}>Enter the code</Text>
              <TextInput
                style={styles.input}
                placeholder="Code"
                keyboardType="number-pad"
                value={code}
                onChangeText={(text) => setCode(text)}
              />
              <TouchableOpacity style={styles.button} onPress={confirmCode}>
                <Text style={{ color: "#ffffff", fontSize: 20 }}>Confirm</Text>
              </TouchableOpacity>
            </Animatable.View>
          
          )}
          {/* <Animatable.Text animation="fadeIn" style={styles.registerText}>
            Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerLink}> Register</Text>
            </TouchableOpacity>
          </Animatable.Text> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PhoneScreen;

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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20

  },
  registerText: {
    fontSize: 16,
    marginTop: 20,
  },
  registerLink: {
    color: "#007bff",
  },
});