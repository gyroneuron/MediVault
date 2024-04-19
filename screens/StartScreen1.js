import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import Logo from "../assets/svg/Logo.svg";
import DoctorSvg from "../assets/svg/start-dosctors.svg";

const dimension = Dimensions.get("window");
const Width = dimension.width;
const Height = dimension.height;

const StartScreen1 = ({ navigation }) => {
  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000, 
      useNativeDriver: true,
    }).start();
  }, [fadeInAnim]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Animated.View style={{ opacity: fadeInAnim }}>
            <Logo width={Width * 0.15} height={100} />
          </Animated.View>
          <Text style={styles.heading}>
            Medi
            <Text style={{ color: "#CCDBFD" }}>Vault</Text>
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Animated.View style={{ opacity: fadeInAnim }}>
            <DoctorSvg width={Width * 0.85} height={Height * 0.4} />
          </Animated.View>
          <Text style={styles.subHeading}>
            Your health data, at your fingertips.
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Animated.View
              style={[styles.buttonContainer, { opacity: fadeInAnim }]}
            >
              <Text style={{ fontSize: 24, color: "#ffffff" }}>
                Get Started!
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen1;

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
    alignItems: "center",
  },
  middleContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  buttonContainer: {
    borderRadius: 15,
    width: Width * 0.85,
    height: Height * 0.05,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 25,
  },
});
