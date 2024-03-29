import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../assets/StyleSheet';
import Profile from '../screens/profile';
// By using export, you can import and use this component in your app!
export const ProfileButton = ({navigation, navigationPage, buttonText}) =>  {
  let number = 100;


  
  const onPress = () => navigation.navigate('Profile');

  // This is what we want the component to return.
  return (
    
    <TouchableOpacity style={styles.purpleContainer} onPress={onPress}>
    <Text style ={styles.textWhite}>
    {buttonText}
    </Text>
    </TouchableOpacity>
    
    
  )
  }