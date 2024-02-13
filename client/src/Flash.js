import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SomeComponent from './components/SomeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>testicles</Text>
      <StatusBar style="auto" />
      <SomeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});