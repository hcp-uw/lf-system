import { Text, View } from 'react-native';
import { styles } from '../assets/StyleSheet';
import {PurpleButton} from '../components/button';
import { InputContainer } from '../components/inputContainer';

export default function Registration({navigation}){
  return (
    <View 
      style={{
      justifyContent: 'center', 
      flex : 1
      }}>

      <View style={styles.container1}>

        <InputContainer placeholderText = 'Name'/>
        <InputContainer placeholderText = 'Email: sample@uw.edu'/>
        <InputContainer placeholderText = 'Password'/>
        <PurpleButton navigation = {navigation} navigationPage = 'LandingPage' buttonText='Register'/>
      </View>

    </View>
  );
}