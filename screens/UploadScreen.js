import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from "../lib/supabase";

const UploadScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

  };

  const uploadImage = async () => {
    if (!selectedImage) return;
    const file = selectedImage.split('/').pop();
    const response = await fetch(selectedImage);
    const blob = await response.blob();

    const { data, error } = await supabase.storage
      .from('files') 
      .upload(`documents/${file}`, blob);

    if (error) {
      console.error('Error uploading image:', error.message);
    } else {
      console.log('Image uploaded successfully:', data);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
      <Button title="Pick an image from gallery" onPress={pickImage} />
      <Button title="Upload image" onPress={uploadImage} />
    </View>
  );
};

export default UploadScreen;
