import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserProfile from './src/Components/detail';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer >
    //   <Stack.Navigator>
    //   <Stack.Screen name='Screen' component={Sc1} options={{headerShown: false}} />
    //   <Stack.Screen name='nextPage' component = {NextPage} options={{headerShown: false}} />
    //   </Stack.Navigator>




    // </NavigationContainer>
    <View style={styles.container}>
      <UserProfile />
    </View>



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
