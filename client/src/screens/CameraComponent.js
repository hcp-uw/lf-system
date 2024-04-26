import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import storage from '@react-native-firebase/storage';

const CameraComponent = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('Photo taken', data.uri);
      const uploadUrl = await uploadImage(data.uri);
      console.log('Uploaded Image URL:', uploadUrl);
    }
  };

  const uploadImage = async (filePath) => {
    const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? filePath.replace('file://', '') : filePath;
    const task = storage().ref(filename).putFile(uploadUri);

    try {
      await task;
      const url = await storage().ref(filename).getDownloadURL();
      console.log('Image uploaded to the bucket!');
      return url; // Returns the URL of the image in Firebase Storage.
    } catch (e) {
      console.error(e);
      return null;
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

