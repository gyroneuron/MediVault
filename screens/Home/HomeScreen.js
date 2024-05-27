import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({navigation}) => {
  // Mock data for uploaded documents
  const uploadedDocuments = [
    { id: 1, name: "Document 1" },
    { id: 2, name: "Document 2" },
    { id: 3, name: "Document 3" },
    { id: 4, name: "Document 4" },
    { id: 5, name: "Document 5" },
  ];

  const handleUpload = () => {
    navigation.navigate("Upload");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to MediVault</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Upload Documents</Text>
        {/* Add your upload button or functionality here */}
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleUpload()}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {uploadedDocuments.map((document) => (
          <View key={document.id} style={styles.documentItem}>
            <Text>{document.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    margin: 20 // Default color scheme
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#007bff", // Color scheme for the card
  },
  cardText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  uploadButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  documentItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
