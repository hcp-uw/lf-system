import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

// icons
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";

// component/asset imports

// screen imports
import LandingPage from "../screens/LandingPage";
import Profile from "../screens/ProfileScreen";
import CreateItem from "../screens/CreateItem";

const Tab = createBottomTabNavigator();

export default function AuthStack() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#4B2E83",
        tabBarStyle: {
          paddingBottom: 0,
        },
        headerStyle: {
          backgroundColor: '#39275B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        headerBackVisible: false
      }}
    >
      <Tab.Screen
        name="Explore"
        component={LandingPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                paddingBottom: 10,
              }}
            >
              <MaterialCommunityIcon
                name="compass-outline"
                size={30}
                color={focused ? "#FFFFFF" : "#4B2E83"}
              />
              <Text
                style={{ color: focused ? "#FFFFFF" : "#4B2E83", fontSize: 12 }}
              >
                Explore
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                paddingBottom: 10,
              }}
            >
              <MaterialCommunityIcon
                name="message-text-outline"
                size={30}
                color={focused ? "#FFFFFF" : "#4B2E83"}
              />
              <Text
                style={{ color: focused ? "#FFFFFF" : "#4B2E83", fontSize: 12 }}
              >
                Messages
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="CreatePost"
        component={CreateItem}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                paddingBottom: 10,
              }}
            >
              <MaterialCommunityIcon
                name="plus-box-outline"
                size={40}
                color={focused ? "#FFFFFF" : "#4B2E83"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Items"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                paddingBottom: 14,
              }}
            >
              <MaterialCommunityIcon
                name="hand-extended-outline"
                size={35}
                color={focused ? "#FFFFFF" : "#4B2E83"}
              />
              <Text
                style={{ color: focused ? "#FFFFFF" : "#4B2E83", fontSize: 12 }}
              >
                Items
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 0,
                paddingBottom: 6,
              }}
            >
              <IonIcon
                name="person"
                size={27}
                color={focused ? "#FFFFFF" : "#4B2E83"}
              />
              <Text
                style={{ color: focused ? "#FFFFFF" : "#4B2E83", fontSize: 12 }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>

  );
}
