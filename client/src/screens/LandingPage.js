import React from 'react';
import { useEffect, useState } from "react";
import { Text, TextInput, Image, View, FlatList, StyleSheet, ScrollView } from "react-native"; 
import { styles } from '../assets/StyleSheet';
import { collection, getDocs } from '@firebase/firestore';
import { auth, firestore } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';


// By using export, you can import and use this component in your app!
export default LandingPage = ({}) => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  const getData = async () => {
    const itemsCol = collection(firestore, "item");
    const itemsSnapshot = await getDocs(itemsCol);
    const itemsList = itemsSnapshot.docs.map(doc => doc.data());
    return itemsList
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <ItemCard item={item}/>}
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
  const time = new Date(
    item.seconds * 1000 + item.nanoseconds / 1000000,
  );
  return(
    <View style={styles.itemCard}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>Name: {item.name}</Text>
        <Text style={styles.itemLocation}>Location: {item.location}</Text>
        <Text style={styles.itemDate}>Date: {time.toDateString()}</Text>
      </View>
    </View>
  );
}

// // You can style components and tags using StyleSheet
// const styles = StyleSheet.create({
//   text: {
//     color: 'red',
//   },
// });

