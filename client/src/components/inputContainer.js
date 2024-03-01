import { styles } from "../assets/StyleSheet";
import { View, TextInput } from 'react-native';

export const InputContainer = ({placeholderText}) => {
  return(
    <TextInput
      textAlign="center"
      style = {styles.textInputBar}
      placeholder = {placeholderText}
      placeholderTextColor="#999"
    />
  )
}