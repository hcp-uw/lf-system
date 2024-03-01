
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../assets/StyleSheet';
// By using export, you can import and use this component in your app!
export const PurpleButton = ({navigation, navigationPage}) =>  {
  let number = 100;


  
  const onPress = () => navigation.navigate(navigationPage);

  // This is what we want the component to return.
  return (
    
    <TouchableOpacity style={styles.purpleContainer} onPress={onPress}>
    <Text></Text>
    </TouchableOpacity>
    
    
  )
  }


