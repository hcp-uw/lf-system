import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from './src/screens/Registration';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Registration"> 
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='LandingPage' component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
