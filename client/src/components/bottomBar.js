import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from "../assets/StyleSheet";

export const bottomBar = ({navigation, navigationPage})  => {
    const onIconPress = () => navigation.navigate(navigationPage);

    
}