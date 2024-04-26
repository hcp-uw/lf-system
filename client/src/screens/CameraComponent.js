import React, { useRef } from 'react';
import { View, Button, Platform, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import storage from '@react-native-firebase/storage';

const CameraComponent = ({ route, navigation }) => {
  const cameraRef = useRef(null);

  const uploadImage = async (filePath) => {
    const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? filePath.replace('file://', '') : filePath;
    const task = storage().ref(filename).putFile(uploadUri);

    try {
      await task;
      const url = await storage().ref(filename).getDownloadURL();
      return url; // Returns the URL of the image in Firebase Storage.
    } catch (e) {
      console.error('Upload failed:', e);
      return null;
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const uploadUrl = await uploadImage(data.uri);
      if (uploadUrl && route.params?.setAvatarUrl) {
        route.params.setAvatarUrl(uploadUrl);
        navigation.goBack();
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      />
      <Button title="Capture" onPress={takePicture} />
    </View>
  );
};

export default CameraComponent;
