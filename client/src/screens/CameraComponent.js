import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native'; 
import { Camera } from 'expo-camera';
import { storage } from '../firebase/config'; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function CameraComponent({ route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      const response = await fetch(photo.uri);
      const blob = await response.blob();
      const fileName = `${new Date().getTime()}-photo.jpg`;
      const storageRef = ref(storage, fileName); // Create a reference to the file location
      const snapshot = await uploadBytes(storageRef, blob); // Upload the file
      const url = await getDownloadURL(snapshot.ref); // Get the file URL
      route.params.setAvatarUrl(url); // Pass the URL back via the route parameters
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>; // Ensure Text is properly imported and used
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center', margin: 20 }}>
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      </Camera>
    </View>
  );
}
