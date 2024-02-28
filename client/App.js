import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from './src/screens/Registration';
import LandingPage from './src/screens/LandingPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "LandingPage"> 
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='LandingPage' component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
