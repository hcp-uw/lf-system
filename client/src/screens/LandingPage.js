import React from 'react';
import { useEffect, useState } from "react";
import { Text, TextInput, Image, View, FlatList, StyleSheet, ScrollView } from "react-native"; // Here we are using the React Library
import { styles } from '../assets/StyleSheet';
import { collection, getDocs } from '@firebase/firestore';
import { firestore } from '../firebase/config';

// By using export, you can import and use this component in your app!
export default LandingPage = ({navigation}) => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    const itemDocs = await getDocs(collection(firestore, 'items'));
    const items = itemDocs.docs.map(doc => {
      return{
        ...doc.data(),
        key: doc.id,
      }
    })
    setItems(items);

  } 

  useEffect(() => {
    getData; // Replace 'items' with your collection name
  

    return () => subscriber(); // Detach listener on unmount
  }, []);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ItemCard item={item} />}
      keyExtractor={item => item.key}
    />
  );
};

const SearchBar = () => (
  <View style = {styles.searchBar}>
    <TextInput
      style = {styles.searchInput}
      placeholder="What are you looking for today?"
      placeholderTextColor="#999"
    />
  </View>
);

const ItemCard = ({ item }) => {
  <View style={styles.itemCard}>
    <Image source={{uri: item.image}} style={styles.itemImage} />
    <View style={styles.itemInfo}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemLocation}>{item.location}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </View>
  </View>
}

// // You can style components and tags using StyleSheet
// const styles = StyleSheet.create({
//   text: {
//     color: 'red',
//   },
// });

