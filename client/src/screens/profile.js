import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from '../assets/StyleSheet';
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { firestore, storage } from '../firebase/config';  

export default function Profile() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null
  });

  const handlePickAvatar = () => {
    navigation.navigate('Camera', {
      setAvatarUrl: async (newAvatarUrl) => {
        setUser({...user, avatar: newAvatarUrl});
        await firestore.collection('users').doc(user.email).update({
          avatar: newAvatarUrl
        });
      }
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      const doc = await firestore.collection('users').doc(user.email).get();
      if (doc.exists) {
        setUser(doc.data());
      }
    };
    fetchUser();
  }, []);

  return (
    <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1, gap: 20 }}>
      <TouchableOpacity style={styles.avatarPlaceHolder} onPress={handlePickAvatar}>
        {user.avatar ? (
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        ) : (
          <IonIcon name="person-circle-outline" size={100} color="#E1E2E6" />
        )}
      </TouchableOpacity>

      {/* Additional user details could go here */}
    </View>
  );
}

