import { Text, StyleSheet } from "react-native"; // Here we are using the React Library

// By using export, you can import and use this component in your app!
export default inputBox = ({placeholderText}) => (
  <View style = {styles.searchBar}>
    <TextInput
      style = {styles.searchInput}
      placeholder = {placeholderText}
      placeholderTextColor="#999"
    />
  </View>
);