import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { firestore, auth } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { styles } from '../assets/StyleSheet';

export default function Items() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    name: "Test",
    campus: "Seattle Campus",
    items: [
      { id: 1, image: 'https://via.placeholder.com/100' },
      { id: 2, image: 'https://via.placeholder.com/100' },
      { id: 3, image: 'https://via.placeholder.com/100' },
      { id: 4, image: 'https://via.placeholder.com/100' },
    ],
    foundItems: [
      { id: 1, image: 'https://via.placeholder.com/100' },
      { id: 2, image: 'https://via.placeholder.com/100' },
      { id: 3, image: 'https://via.placeholder.com/100' },
      { id: 4, image: 'https://via.placeholder.com/100' },
    ],
    avatar: null
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (auth.currentUser) {
          const docRef = doc(firestore, 'Users', auth.currentUser.uid);
          const documentSnapshot = await getDoc(docRef);
          if (documentSnapshot.exists()) {
            const userData = documentSnapshot.data();
            console.log('User Data:', userData);
            setUser(prevState => ({
              ...prevState,
              name: userData.name || prevState.name,
              campus: userData.campus || prevState.campus,
              items: userData.items || prevState.items,
              foundItems: userData.foundItems || prevState.foundItems,
              avatar: userData.avatar || prevState.avatar,
            }));
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('No current user!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YOUR POSTS:</Text>
          <View style={styles.callToAction}>
            <Text style={styles.sectionSubtitle}>Need to make a new post? </Text>
            <TouchableOpacity onPress={() => handleNavigation('CreateItem')} style={styles.clickableIcon}>
              <Text style={styles.clickHereText}>Click here</Text>
              <Ionicons name="add-circle-outline" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.imagesContainer}>
            {user.items.map((item, index) => (
              <Image key={index} source={{ uri: item.image }} style={styles.image} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YOUR FOUND ITEMS:</Text>
          <View style={styles.callToAction}>
            <Text style={styles.sectionSubtitle}>Need to check your messages? </Text>
            <TouchableOpacity onPress={() => handleNavigation('Messages')} style={styles.clickableIcon}>
              <Text style={styles.clickHereText}>Click here</Text>
              <Ionicons name="mail-outline" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.imagesContainer}>
            {user.foundItems.map((item, index) => (
              <Image key={index} source={{ uri: item.image }} style={styles.image} />
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => handleNavigation('Explore')}>
          <Ionicons name="compass-outline" size={30} style={styles.navButton} />
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Messages')}>
          <Ionicons name="chatbox-outline" size={30} style={styles.navButton} />
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('CreatePost')}>
          <Ionicons name="add-circle-outline" size={50} style={styles.navButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Items')}>
          <Ionicons name="cube-outline" size={30} style={styles.navButton} />
          <Text>Items</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Profile')}>
          <Ionicons name="person-outline" size={30} style={styles.navButton} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
