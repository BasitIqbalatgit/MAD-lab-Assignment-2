import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sc1 from './src/Components/Screen1';
import NextPage from './src/Components/next';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>4
      <Stack.Screen name='Screen' component={Sc1} options={{headerShown: false}} />
      <Stack.Screen name='nextPage' component = {NextPage} options={{headerShown: false}} />
      </Stack.Navigator>




    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
