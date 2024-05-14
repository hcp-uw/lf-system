// import React, { useRef } from 'react';
// import { View, Button, Platform, Alert } from 'react-native';
// // import { Camera, useCameraDevices } from '@mrousavy/react-native-vision-camera';
// import storage from '@react-native-firebase/storage';

// const CameraComponent = ({ route, navigation }) => {
//   const devices = useCameraDevices();
//   const device = devices.back; // Use the back camera
//   const cameraRef = useRef(null);

//   // const uploadImage = async (filePath) => {
//   //   const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
//   //   const uploadUri = Platform.OS === 'ios' ? filePath.replace('file://', '') : filePath;
//   //   const task = storage().ref(filename).putFile(uploadUri);

//   //   try {
//   //     await task;
//   //     const url = await storage().ref(filename).getDownloadURL();
//   //     return url; // Returns the URL of the image in Firebase Storage.
//   //   } catch (e) {
//   //     console.error('Upload failed:', e);
//   //     return null;
//   //   }
//   // };

//   const takePicture = async () => {
//     if (cameraRef.current && device) {
//       const photo = await cameraRef.current.takePhoto();
//       const uploadUrl = await uploadImage(photo.path);
//       if (uploadUrl && route.params?.setAvatarUrl) {
//         route.params.setAvatarUrl(uploadUrl);
//         navigation.goBack();
//       }
//     } else {
//       Alert.alert("Camera not ready", "Wait until the camera is ready before snapping a photo.");
//     }
//   };

//   if (device == null) {
//     return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Loading...</Text>
//     </View>;
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <Camera
//         ref={cameraRef}
//         style={{ flex: 1 }}
//         device={device}
//         isActive={true}
//       />
//       <Button title="Capture" onPress={takePicture} />
//     </View>
//   );
// };

// export default CameraComponent;
