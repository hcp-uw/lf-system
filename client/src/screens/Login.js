import {Text, View, TextInput, Button} from 'react-native'
import React, {useState} from 'react';
import { styles } from '../assets/StyleSheet';
import { InputContainer } from '../components/inputContainer';
import { PurpleButton } from '../components/button';


export default function Login({navigation}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
   <View style={{
    justifyContent: 'center', 
    flex: 1
    }}>
        <View style={styles.goldBigContainer}>
            
        <InputContainer placeholderText = 'Email: sample@uw.edu' onChangeText={(val) => setEmail(val)}/>

        <InputContainer placeholderText = 'Password' onChangeText={(val) => setPassword(val)}/>

        <PurpleButton navigation = {navigation} navigationPage = 'AuthStack' buttonText='Login'/>

        <Text style={styles.alreadyUserText}>Not a user?</Text>

        <PurpleButton navigation = {navigation} navigationPage = 'Registration' buttonText='Register'/>

        </View>

   </View>
  );
}