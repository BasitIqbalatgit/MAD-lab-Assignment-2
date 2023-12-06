import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditData from './EditData';
import DetailData from './DetailData';
import ShowData from './ShowData';

 
const Stack = createStackNavigator();
const DataNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='AllData'>
      <Stack.Screen name='AllData' component={ShowData} />
      <Stack.Screen name="DetailData" component={DetailData} />
      <Stack.Screen name='EditData' component={EditData} />
    </Stack.Navigator>
  );
};

export default DataNavigation;



