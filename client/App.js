import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from './src/screens/Registration';
import Login from './src/screens/Login'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Registration" screenOptions={{
        headerStyle: {
          backgroundColor: '#39275B',
          
        },
        headerTintColor: '#fff',
        headerTintStyle: {
          fontWeight: 'bold',
        },
      }}>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Registration' component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
