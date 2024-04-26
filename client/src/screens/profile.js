
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../assets/StyleSheet';
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';




export default function Registration({ navigation }) {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null
  });

  const handlePickAvatar = () => {
    navigation.navigate('Camera', {
      setAvatarUrl: (newAvatarUrl) => {
        setUser({...user, avatar: newAvatarUrl});
      }
    });
  }

  return (
    <View style={{
      justifyContent: 'center',
      alignContent: 'center', 
      flex : 1,
      gap: 20,
    }}>
      <TouchableOpacity style={styles.avatarPlaceHolder} onPress={handlePickAvatar}>
        {user.avatar ? (
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        ) : (
          <IonIcon name="person-circle-outline" size={100} />
        )}
      </TouchableOpacity>

      {/* You can continue adding more UI elements here as per your original component */}
    </View>
  );
}

