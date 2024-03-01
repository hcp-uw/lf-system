import { styles } from "../assets/StyleSheet";
import { View, TextInput } from 'react-native';

export const InputContainer = ({placeholderText}) => {
  return(
    <View style = {styles.inputBar}>
      <TextInput
        textAlign="center"
        style = {styles.textInput}
        placeholder = {placeholderText}
        placeholderTextColor="#999"
      />
    </View>
  )
}