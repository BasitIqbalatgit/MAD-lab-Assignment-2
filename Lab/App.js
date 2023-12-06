import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Components/Login';
import SignUp from './src/Components/Signup';
import Home from "./src/Components/Home";
import Homes from "./src/Components/Homes";
import Calculator from "./src/Components/cal";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskForm from './src/Components/TaskForm';
import NextPage from './src/Components/nextPage';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialScreen = 'Homes'>
      <Stack.Navigator>
      <Stack.Screen name='Homes' component = {Homes} options={{headerShown: false}} />
      <Stack.Screen name='Home' component = {Home} options={{headerShown: false}} />
      <Stack.Screen name='nextPage' component = {NextPage} options={{headerShown: false}} />
        <Stack.Screen name='Login' component={Login } options={{ headerShown: false }}/>
        <Stack.Screen name='Signup' component={SignUp } options={{ headerShown: false }}/>
        <Stack.Screen name='TaskForm' component={TaskForm} options={{headerShown: false}} />
        <Stack.Screen name='Calculator' component={Calculator} options={{headerShown: false}} />
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
