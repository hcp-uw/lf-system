import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import { storage, firestore } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from '@firebase/firestore';


export default function CameraComponent({ route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      setLoading(true);
      try {
        let photo = await cameraRef.current.takePictureAsync();
        const response = await fetch(photo.uri);
        const blob = await response.blob();
        const fileName = `${new Date().getTime()}-photo.jpg`;
        const storageRef = ref(storage, fileName);
        const snapshot = await uploadBytes(storageRef, blob);
        const url = await getDownloadURL(snapshot.ref);

        const userId = 'EsytWl9QUhpKHfyY7GCo'; // Replace with dynamic user ID as needed
        const userRef = firestore.collection('users').doc(userId);
        await userRef.update({ avatar: url });

        route.params.setAvatarUrl(url);
      } catch (error) {
        console.error("Error taking picture or uploading to Firebase:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center', margin: 20 }}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Button title="Take Picture" onPress={takePicture} />
          )}
        </View>
      </Camera>
    </View>
  );
}

