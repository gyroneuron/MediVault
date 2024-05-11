import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import * as React from "react";
  
  const HomeScreen = ({ navigation }) => {
    const handleUpload = () => {
      navigation.navigate("Upload");
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.heading}>Home Screen</Text>
          <Text style={styles.subHeading}>Welcome to Doctor Home Screen</Text>
          <TouchableOpacity onLongPress={handleUpload}>
            <Text style={{color: 'blue'}}>Upload Documents</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    heading: { fontSize: 25, fontWeight: "bold" },
    subHeading: { fontSize: 15, fontStyle: "italic" },
  });
  