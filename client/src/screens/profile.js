import {Text, View} from 'react-native'
import { styles } from '../assets/StyleSheet';
import {PurpleButton} from '../components/button';
import { InputContainer } from '../components/inputContainer';
import { NavBar } from '../components/navBar';

export default function Profile({navigation}){
    return (
        <View 
        screenOptions={{
          
        }}
        style={{
        justifyContent: 'center', 
        flex : 1,
        gap: 20,
        }}>
  
        <View style={[styles.goldBigContainer, { height: 131, } ]}>
        
          <InputContainer placeholderText = 'Name'/>
          <InputContainer placeholderText = 'Campus'/> 
          
          
        
        </View>

        <View style = {[styles.scrollView, {height: '40%', }]}>
          <Text style = {styles.postText}>
            Posts
          </Text>
          

          
        

        </View>
        <NavBar navigation={navigation}/>
      </View>
       );
       
     }
