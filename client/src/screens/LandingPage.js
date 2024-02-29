import React from 'react';
import { Text, TextInput, Image, View, StyleSheet, ScrollView } from "react-native"; // Here we are using the React Library
import { styles } from '../assets/StyleSheet';

// By using export, you can import and use this component in your app!
export default LandingPage = () => {

  const items = [
    {title: 'AirPods Pro', location: 'Suzzallo Library', date: 'Jan 13, 2024 9:46PM', imageSrc: 'path_to_image'},
  ];
  // This is what we want the component to return.
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>LF Systems</Text>
      <SearchBar />
      <ScrollView style={styles.scrollView}
                  contentContainerStyle={styles.itemsContainer}>
        {items.map((item, index) => (
          <ItemCard
            key={index}
            title={item.title}
            location={item.location}
            date={item.date}
            imageSrc={item.imageSrc}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const SearchBar = () => (
  <View style = {styles.searchBar}>
    <TextInput
      style = {styles.searchInput}
      placeholder="What are you looking for today?"
      placeholderTextColor="#999"
    />
  </View>
);

const ItemCard = ({title, location, date, imageSrc}) => {
  <View style={styles.itemCard}>
    <Image source={require('./airpods.png')} style={styles.itemImage} />
    <View style={styles.itemInfo}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemLocation}>{location}</Text>
      <Text style={styles.itemDate}>{date}</Text>
    </View>
  </View>
}

// // You can style components and tags using StyleSheet
// const styles = StyleSheet.create({
//   text: {
//     color: 'red',
//   },
// });