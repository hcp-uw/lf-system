import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { styles } from "../assets/StyleSheet";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { firestore, auth } from "../firebase/config";
import { doc, getDoc } from "@firebase/firestore";

export default function Profile() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "Test",
    campus: "Seattle Campus",
    items: ["Item 1 Name", "Item 2 Name", "Item 3 Name", "Item 4 Name"],
    avatar: null,
  });
  const [takePicture, setTakePicture] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (auth.currentUser) {
          const docRef = doc(firestore, "Users", auth.currentUser.uid);
          const documentSnapshot = await getDoc(docRef);
          if (documentSnapshot.exists()) {
            const userData = documentSnapshot.data();
            console.log("User Data:", userData); // Detailed logging
            setUser((prevState) => ({
              ...prevState,
              name: userData.name || prevState.name, // Fallback to previous state
              campus: userData.campus || prevState.campus,
              items: userData.items || prevState.items,
              avatar: userData.avatar || prevState.avatar,
            }));
          } else {
            console.log("No such document!");
          }
        } else {
          console.log("No current user!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const savePictureCallback = (picture) => {
    
  };

  if(takePicture){
    return (
          <View>
            <Text>Taking picture...</Text>
            <Button onPress={() => setTakePicture(false)} title="Back"></Button>
          </View>
        );
  } else {
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={[styles.avatarPlaceHolder, { margin: 20 }]}
          onPress={() => setTakePicture(true)}
        >
          {user.avatar !== null ? (
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
          ) : (
            <Feather name="camera" size={50} color="#000000" />
          )}
        </TouchableOpacity>
        <View style={[styles.goldBigContainer, { height: "20%" }]}>
          <Text style={styles.alreadyUserText}>Name: {user.name}</Text>
          <Text style={styles.alreadyUserText}>Campus: {user.campus}</Text>
        </View>
        <ScrollView
          contentContainerStyle={[
            styles.itemsContainer,
            { backgroundColor: "#E1E2E6", alignItems: "center" },
          ]}
        >
          <Text style={styles.headerText}>Posts</Text>
          {user.items.map((item, index) => (
            <View key={index} style={[styles.itemCard, { width: "85%" }]}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
