import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { supabase } from '../lib/supabase';
import UploadSvg from '../assets/svg/upload.svg'

const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Allow all file types
      });
      if (result.type === 'success') {
        setSelectedFile(result);
      }
    } catch (error) {
      console.error('Error picking file:', error);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    const fileInfo = await FileSystem.getInfoAsync(selectedFile.uri);
    const file = {
      uri: selectedFile.uri,
      name: fileInfo.uri.split('/').pop(),
      type: fileInfo.mimeType,
    };

    if (file.type.startsWith('image/')) {
      // File is an image
      const response = await fetch(file.uri);
      const blob = await response.blob();

      const { data, error } = await supabase.storage
        .from('your_bucket_name')
        .upload(`images/${file.name}`, blob);

      if (error) {
        console.error('Error uploading image:', error.message);
      } else {
        console.log('Image uploaded successfully:', data);
        // You can now save the URL to your database or perform other operations
      }
    } else if (file.type === 'application/pdf') {
      // File is a PDF
      const { data, error } = await supabase.storage
        .from('your_bucket_name')
        .upload(`documents/${file.name}`, file);

      if (error) {
        console.error('Error uploading PDF file:', error.message);
      } else {
        console.log('PDF file uploaded successfully:', data);
        // You can now save the URL to your database or perform other operations
      }
    } else {
      console.error('Unsupported file type:', file.type);
    }
  };

  const dimension = Dimensions.get("window");
  const Width = dimension.width;
  const Height = dimension.height;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5' }}>
      {selectedFile && <Text>{selectedFile.name}</Text>}

      <UploadSvg width={Width * 0.85} height={Height * 0.4} />
      <TouchableOpacity
        style={{ flexDirection: 'row',marginTop: '10%', width: '90%',height: 52, alignItems: 'center', justifyContent: 'center', alignContent: 'center', backgroundColor: '#007BFF', padding: 10, borderRadius: 15, marginBottom: 20 }}
        onPress={pickFile}
      >
        <MaterialCommunityIcons name="file-document" size={24} color="white" style={{ marginRight: 10 }} />
        <Text style={{ color: 'white' }}>Choose File</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: 'row',width: '90%', height: 52, alignItems: 'center', justifyContent: 'center', alignContent: 'center', backgroundColor: '#5cb85c', padding: 10, borderRadius: 15 }}
        onPress={uploadFile}
      >
        <MaterialCommunityIcons name="upload" size={24} color="white" style={{ marginRight: 10 }} />
        <Text style={{ color: 'white' }}>Upload File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadScreen;