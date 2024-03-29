import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../assets/StyleSheet';

export const PurpleButton = ({navigation, navigationPage, buttonText}) =>  {
  const onPress = () => navigation.navigate(navigationPage);

  return (
    
    <TouchableOpacity style={styles.purpleContainer} onPress={onPress}>
    <Text style ={styles.textWhite}>
    {buttonText}
    </Text>
    </TouchableOpacity>
)}


