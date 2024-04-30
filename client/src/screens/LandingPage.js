import React from 'react';
import { useEffect, useState } from "react";
import { Text, TextInput, Image, View, FlatList, StyleSheet, ScrollView } from "react-native"; 
import { styles } from '../assets/StyleSheet';

// By using export, you can import and use this component in your app!
export default LandingPage = ({navigation}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('items') // Replace 'items' with your collection name
      .onSnapshot(querySnapshot => {
        const items = querySnapshot.docs.map(documentSnapshot => {
          return{
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          }
        });
        setItems(items);
      });

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

