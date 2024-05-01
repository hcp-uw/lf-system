import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { styles } from '../assets/StyleSheet';
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { firestore } from '../firebase/config';

export default function Profile() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "Test",
    campus: "Seattle Campus",
    items: ["Item 1 Name", "Item 2 Name", "Item 3 Name", "Item 4 Name"],
    avatar: null
  });

  useEffect(() => {
    const fetchUser = async () => {
      const doc = await firestore.collection('users').doc(user.email).get();
      if (doc.exists) {
        setUser(doc.data());
      }
    };
    fetchUser();
  }, []);

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={{
      alignItems: "center",
      flex: 1,}}>
      <TouchableOpacity style={[styles.avatarPlaceHolder, {margin: 20}]} onPress={() => handleNavigation('Camera')}>
        {user.avatar ? (
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        ) : (
          <IonIcon name="person-circle-outline" size={100} color="#E1E2E6" />
        )}
      </TouchableOpacity>
      <View style={[styles.goldBigContainer, { height: '20%' }]}>
      
      <Text style={styles.alreadyUserText}>Name: {user.name}</Text>
      <Text style={styles.alreadyUserText}>Campus: {user.campus}</Text>
      </View>
      <ScrollView
      contentContainerStyle={[styles.itemsContainer, {backgroundColor: '#E1E2E6', alignItems: 'center'}]}
      >
      <Text style={styles.headerText}>Posts</Text>
        {user.items.map((item, index) => (
          <View key={index} style={[styles.itemCard, {width: '85%'}]}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => handleNavigation('Profile')}>
          <Text style={styles.textWhite}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Explore')}>
          <Text style={styles.textWhite}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Messages')}>
          <Text style={styles.textWhite}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Items')}>
          <Text style={styles.textWhite}>Items</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
