import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../assets/StyleSheet';
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        avatar: null
      },
    };
  }

  handlePickAvatar = () => {
    this.props.navigation.navigate('Camera', {
      setAvatarUrl: (newAvatarUrl) => {
        this.setState({ user: { ...this.state.user, avatar: newAvatarUrl } });
      }
    });
  }
  

  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignContent: 'center', 
        flex : 1,
        gap: 20,
      }}>
        <TouchableOpacity style={styles.avatarPlaceHolder} onPress={this.handlePickAvatar}>
          {this.state.user.avatar ? (
            <Image source={{ uri: this.state.user.avatar }} style={styles.avatar} />
          ) : (
            <IonIcon name="person-circle-outline" size={100} />
          )}
        </TouchableOpacity>

        {/* Rest of your component */}
      </View>
    );
  }
}

export default function(props) {
    const navigation = useNavigation();

    return <Profile {...props} navigation={navigation} />;
}
