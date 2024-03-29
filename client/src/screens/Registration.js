import { Text, View } from 'react-native';
import { useState } from 'react';
import { styles } from '../assets/StyleSheet';
import { PurpleButton } from '../components/button';
import { InputContainer } from '../components/inputContainer';
import { NavBar } from '../components/navBar';

export default function Registration({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const register = ({email, password}) => {

  }

  return (
    <View 
      style={{
      justifyContent: 'center', 
      flex : 1
      }}>

      <View style={styles.goldBigContainer}>
      
        <InputContainer
        placeholderText = 'Name' 
        onChangeText={(val) => setName(val)}/>

        <InputContainer 
        placeholderText = 'Email: sample@uw.edu' 
        onChangeText={(val) => setEmail(val)}/>

        <InputContainer 
        placeholderText = 'Password' 
        onChangeText={(val) => setPassword(val)}/>

        <PurpleButton navigation = {navigation} navigationPage = 'LandingPage' buttonText='Register'/>

        <Text style = {styles.alreadyUserText}>
        Already a User?
        </Text>

        <PurpleButton navigation = {navigation} navigationPage = 'Login' buttonText='Login'/>
      </View>
      <NavBar navigation={navigation}/>

    </View>
  );
}