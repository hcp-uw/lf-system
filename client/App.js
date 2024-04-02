import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack'
import Registration from './src/screens/Registration';
import LandingPage from './src/screens/LandingPage';
import Login from './src/screens/Login';
import Profile from './src/screens/profile';


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
        <Stack.Screen name='AuthStack' component={AuthStack} options={{gestureEnabled: false}}/>
        {/* <Stack.Screen name='LandingPage' component={LandingPage} /> */}
        {/* <Stack.Screen name='Profile' component={profile} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


