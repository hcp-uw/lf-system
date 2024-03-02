import {Text, View} from 'react-native'
import { styles } from '../assets/StyleSheet';
import {PurpleButton} from '../components/button';
import { InputContainer } from '../components/inputContainer';

export default function Profile({navigation}){
    return (
        <View 
        screenOptions={{
          
        }}
        style={{
        justifyContent: 'center', 
        flex : 1
        }}>
  
        <View style={[styles.goldBigContainer, { height: 131, } ]}>
        
          <InputContainer placeholderText = 'Name'/>
          <InputContainer placeholderText = 'Campus'/> 
          
          
        
        </View>
  
      </View>
       );
     }
