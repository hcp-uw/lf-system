import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from '../assets/StyleSheet';
import { PurpleButton } from '../components/button';
import { login } from '../auth/userAuth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [netId, setNetId] = useState('');
  const [password, setPassword] = useState('');
  const testing = true; // set to true for easy login access

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('AuthStack');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <View style={styles.goldBigContainer}>
        <TextInput
          textAlign='center'
          style={styles.textInputBar}
          placeholderTextColor='#999'
          placeholder='UW NetID'
          onChangeText={(val) => setNetId(val)}
        />

        <TextInput
          textAlign='center'
          style={styles.textInputBar}
          placeholderTextColor='#999'
          placeholder='Password'
          onChangeText={(val) => setPassword(val)}
        />

        <TouchableOpacity
          style={styles.purpleContainer}
          onPress={() => 
            // logs in automatically if testing is true otherwise requires you to enter netId/password.
            testing
              ? login({ netId: 'fpazaran', password: 'password' }) 
              : login({
                  netId: netId,
                  password: password,
                })
          }
        >
          <Text style={styles.textWhite}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.alreadyUserText}>Not a user?</Text>

        <PurpleButton
          navigation={navigation}
          navigationPage='Registration'
          buttonText='Register'
        />
      </View>
    </View>
  );
}
