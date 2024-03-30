import {Text, View} from 'react-native'
import React from 'react';
import { styles } from '../assets/StyleSheet';
import {PostItemButton, PurpleButton} from '../components/button';
import { InputContainer } from '../components/inputContainer';
import UserPermission from '../utilities/UserPermssions'
import * as ImagePicker from 'expo-image-picker'
// import * as firebase from 'firebase';

export default function Profile({navigation}){
    state = {
      user: {
        name: "",
        email: "",
        password: "",
        avatar: null
      },

    };
    handlePickAvatar = aysnc () => {
      UserPermission.getCameraPermission()

      let result = await ImagePicker.launchImageLibraryAysnc({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,3]

      })
      if (result.cancelled){
        this.setState({user: {... this.state.user, avatar: result.uri }});
      }
    };
    return (
        <View 
        screenOptions={{
          
        }}
        style={{
        justifyContent: 'center', 
        flex : 1,
        gap: 20,
        }}>
          
          
            <TouchableOpacity style = {styles.avatarPlaceHolder} onPress={this.handlePickAvatar} >
              <Image source={{uri: this.state.user.avatar}} style = {styles.avatar}/>
            </TouchableOpacity>
         
        
          <View style={[styles.goldBigContainer, { height: 131, } ]}>
        
            <InputContainer placeholderText = 'Name'/>
            <InputContainer placeholderText = 'Campus'/> 
          
          
        
          </View>

          <View style = {[styles.scrollView, {height: '40%', }]}>
            <Text style = {styles.postText}>
            Posts
           </Text>
           <PostItemButton navigation = {navigation} navigationPage = 'Login' buttonText='Login'/> // make this go to the post implement later
        
          </View>
  
      </View>
       );
       
     }
