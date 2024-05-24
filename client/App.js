import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack'
import Registration from './src/screens/RegistrationScreen';
import Login from './src/screens/LoginScreen';
import Profile from './src/screens/ProfileScreen';
import CreateItem from './src/screens/CreateItem';
import CameraComponent from './src/screens/CameraComponent';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Registration' screenOptions={{
        headerStyle: {
          backgroundColor: '#39275B',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        headerBackVisible: false
      }}>
        
        <Stack.Screen name='Login' component={Login} options={{gestureEnabled: false}}/>
        <Stack.Screen name='Registration' component={Registration} options={{gestureEnabled: false}}/>
        <Stack.Screen name='AuthStack' component={AuthStack} options={{gestureEnabled: false, headerShown: false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{gestureEnabled: false}}/>
        <Stack.Screen name='Create Item' component={CreateItem} options={{gestureEnabled: false}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


