import { styles } from "../assets/StyleSheet";
import { Image, TouchableOpacity, View } from 'react-native';

const NavButton = ({imgSource, navigation, screen}) => {
  const onPress = () => navigation.navigate(screen);
    return(
      <TouchableOpacity style={styles.navButton} onPress={onPress}>
        <Image source={imgSource} style={styles.navImgButton}/>
      </TouchableOpacity>
)};

export const NavBar = ({navigation}) => {
  return(
    <View style={styles.navBar}>
        <NavButton imgSource={require('../assets/imgs/explore.png')}  navigation={navigation} screen='Profile'/>
        <NavButton imgSource={require('../assets/imgs/explore.png')}  navigation={navigation} screen='Profile'/>
        <NavButton imgSource={require('../assets/imgs/explore.png')}  navigation={navigation} screen='Profile'/>
        <NavButton imgSource={require('../assets/imgs/explore.png')}  navigation={navigation} screen='Profile'/>
    </View>
  )
};

