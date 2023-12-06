import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ShowData from './src/screens/ShowData';
import Input from './src/screens/Input';
import DataNavigation from './src/screens/DataNavigation';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       
        <Tab.Screen
          name='InputData'
          component={Input}
          options={{
            title: 'Input Screen',
            headerShown: false,
          }}
        />
         <Tab.Screen
          name='AllData'
          component={DataNavigation}
          options={{
            title:"Show Data",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
