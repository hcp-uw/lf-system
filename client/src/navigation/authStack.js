import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";
import { styles } from "../assets/StyleSheet";

// icons
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";

// component imports

// screen imports
import LandingPage from "../screens/LandingPage";
import Profile from "../screens/profile";

const Tab = createBottomTabNavigator();

const NavButton = ({ imgSource }) => {
  return (
    <View>
      <Image source={imgSource} style={{ width: 10, height: 10 }} />
    </View>
  );
};

export default function AuthStack() {
  return (
    <Tab.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={LandingPage}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcon name="compass-outline" size={30} />;
          },
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcon name="message-text-outline" size={30} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Map"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <FeatherIcon name="map" size={25} />;
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <IonIcon name="person-circle-outline" size={30} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
