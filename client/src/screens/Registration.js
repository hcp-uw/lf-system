import { Text, View } from 'react-native';
import { styles } from '../assets/StyleSheet';
import {PurpleButton, button} from '../components/button';

export default function Registration({navigation}){
  return (
    <View 
      screenOptions={{
        
      }}
      style={{
      justifyContent: 'center', 
      flex : 1
      }}>

      <View style={styles.container1}>

        <View style={styles.container2}>
        </View>
        <View style={styles.container2}>
        </View>
        <View style={styles.container2}>
        </View>
        <View style={styles.container2}>
        </View>
        <PurpleButton navigation = {navigation} navigationPage = 'LandingPage' buttonText = 'Register'/>
        <Text style = {styles.alreadyUserText}> 
        Already a User?
        </Text>
        <PurpleButton navigation = {navigation} navigationPage = 'Login' buttonText = 'Login'/>
      </View>

    </View>
  );
}