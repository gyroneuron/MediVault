import { View, Text, SafeAreaView, StyleSheet} from "react-native";
import * as React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={StyleSheet.container}>
        <Text style={styles.heading}>Home Screen</Text>
        <Text style={styles.subHeading}>Welcome to Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {justifyContent: 'center', alignItems: 'center'},
    heading: {fontSize: 25, fontWeight: 'bold'},
    subHeading: {fontSize: 15, fontStyle: 'italic'},
})
