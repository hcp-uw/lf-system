import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from './src/screens/Registration';
import LandingPage from './src/screens/LandingPage'
import Login from './src/screens/Login';
import profile from './src/screens/profile'


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
      }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='LandingPage' component={LandingPage} />
        <Stack.Screen name='Profile' component={profile} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


