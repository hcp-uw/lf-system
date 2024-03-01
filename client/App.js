import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from './src/screens/Registration';
import LandingPage from './src/screens/LandingPage'
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Registration" screenOptions={{
        headerStyle: {
          backgroundColor: '#39275B', // Set header background color
        },
        headerTintColor: '#fff', // Set text color of header title and buttons
        headerTitleStyle: {
          fontWeight: 'bold', // Set font weight of header title
        },
      }}> 
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='LandingPage' component={LandingPage} />
        <Stack.Screen name='Login' component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
